import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {DirectivesComponent} from "../directives/directives.component";

const router: Routes = [
  {path: 'directives', component: DirectivesComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
