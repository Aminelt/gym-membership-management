import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MembersRoutingModule } from './members-routing.module';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { MemberAddComponent } from './components/member-add/member-add.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

@NgModule({
  declarations: [
    MembersListComponent,
    MemberDetailsComponent,
    MemberFormComponent,
    MemberAddComponent,
    MemberEditComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MaterialModule
  ]
})
export class MembersModule { }
