import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {TestsComponent} from "./tests/tests.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'accueil', component: AccueilComponent },
  {path:'test', component: TestsComponent },
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
