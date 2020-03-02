import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAddressComponent } from './components/show-address/show-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

const routes: Routes = [
  {path: 'show', component: ShowAddressComponent},
  {path: 'add', component: AddAddressComponent},
  {path: '', redirectTo: 'show', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
