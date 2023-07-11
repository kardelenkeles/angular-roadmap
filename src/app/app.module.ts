import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListComponent } from './io/list/list.component';
import { TodoComponent } from './io/todo/todo.component';
import { ParentComponent } from './io/parent/parent.component';
import { ChildComponent } from './io/child/child.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { DirectivesComponent } from './directives/directives.component';
import {RouterOutlet} from "@angular/router";
import {NgxsModule} from "@ngxs/store";
import { GeneralComponent } from './general/general.component';
import {DesignutilityService} from "./designutility.service";
import {AppState} from "./states/app.state";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TdFormComponent,
    ReactiveFormComponent,
    ListComponent,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    PropBindComponent,
    DirectivesComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    NgxsModule.forRoot([AppState])
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
