import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
//import { MemberCreateComponent } from './components/member-create/member-create.component';
//import { AuthGuard } from '../../core/guards/auth.guard'; 
import { MemberAddComponent } from './components/member-add/member-add.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

const routes: Routes = [
  { path: '', component: MembersListComponent }, // Default route: List all members
  { path: 'detail/:id', component: MemberDetailsComponent }, 
  { path: 'add', component: MemberAddComponent },
  { path: 'edit/:id', component: MemberEditComponent },
  //{ path: 'create', component: MemberFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class MembersRoutingModule {}
