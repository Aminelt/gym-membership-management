import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MembersListComponent } from '../members/components/members-list/members-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', loadChildren: () => import('../members/members.module').then(m => m.MembersModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
