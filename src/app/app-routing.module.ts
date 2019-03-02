import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesignSystemAngular} from "design-system-angular"
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), DesignSystemAngular.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
