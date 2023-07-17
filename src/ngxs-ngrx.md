NGRX: NGRX is one of the libraries which helps to manage the state of the application. It is a Redux execution for Angular. 

NGXS: NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application’s state, that is providing simple rules for predictable state mutations.

## Actions in NGXS  vs Actions in NGRX

### mother.action.ts in NGXS:

export class FeedChild {

static readonly type = '[Mother] Feed Child';

constructor(public name: string, public price: number) {}

}

### mother.action.ts in NGRX:

import { Action } from '@ngrx/store';

export const FEED_CHILD = '[Mother] Feed Child';

export class FeedChild extends Action {

readonly type = FEED_CHILD;;

constructor(public payload: { name: string, price: number }) {}

}

export type Actions = FeedChild;

## State in NGXS vs Reducer, Effect, Selector in NGRX

### mother.state.ts in NGXS:

import { State, Selector, Action, StateContext } from '@ngxs/store';

import { MotherService } from '../services/mother.service';

export interface MotherStateModel {

childName: string;

childFeed: boolean;

}

@State<MotherStateModel>({

name: 'mother',

default: {

childName: null,

childFeed: false

}

})

export class MotherState {

constructor(private motherService: motherService) {}

@Selector()

static childName(state: MotherStateModel) {

return state.childName;

}

@Selector()

static childFeed(state: MotherStateModel) {

return state.childFeed;

}

@Action(FeedChild)

feedChild(ctx: StateContext<MotherStateModel>, action: FeedChild) {

return this.motherService.feedChild(action.childName, action.price).pipe(

tap(() => ctx.setState({ childName: action.childName, childFeed: true }))

);

}

}

### mother.reducer.ts in NGRX:



import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromActions from '../actions/mother.actions';

export interface State {

childName: string;

childFeed: boolean;

}

export const initialState: State = {

childName: null,

childFeed: false

};

export function reducer(state: State = initialState,  action: fromActions.Actions): State {

switch(action.type) {

case fromActions.FEED_CHILD:

return {

childName: action.price.name,

childFeed: true

};

}

return state;

}

export const getMotherState = createFeatureSelector<State>('mother');

export const getMotherName = createSelector(getMotherState, state => state.childName);

export const getMotherFeed = createSelector(getMotherState, state => state.childFeed);

### mother.effects.ts in NGRX:



import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';

import { MotherService } from '../services/mother.service';

import * as fromActions from '../actions/mother.actions';

@Injectable()

export class MotherEffects {

constructor(

private actions$: Actions,

private motherService: MotherService

) {}

@Effect()

feedChild$: Observable<Action> = this.actions$

.ofType<fromActions.FeedChild>(fromActions.FEED_CHILD)

.pipe(

map((action: fromActions.FeedChild) => action.payload),

switchMap(payload => this.motherService.feedChild(payload.childName, payload.price))

);

}
