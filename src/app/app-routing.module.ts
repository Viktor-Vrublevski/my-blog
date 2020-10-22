import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {HeadComponent} from './components/head/head.component';


const routes: Routes = [
  {path:'', component: HeadComponent},
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
