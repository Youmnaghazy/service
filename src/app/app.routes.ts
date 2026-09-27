import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';


export const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent :()=> import('./home/home').then((c)=>c.Home) ,title:'Home'},
  {path:'about',loadComponent :()=>import('./about/about').then((c)=>c.About) ,title:'About'},
  {path:'product',loadComponent :()=>import('./product/product').then((c)=>c.Product) ,title:'About'},
  {path:'contact',component:Contact,title:'contact'},
  {path:'**', component:Notfound}
];
