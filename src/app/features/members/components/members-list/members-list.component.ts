import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MembersService } from '../../services/members.service';
import { Member } from '../../../../shared/interfaces/member.interface';

@Component({
  selector: 'app-member-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  membersDataSource: MatTableDataSource<Member> = new MatTableDataSource<Member>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'joinDate', 'membershipType', 'membershipStatus', 'emergencyContact', 'isActive', 'actions'];
  totalMembers = 0;
  pageSize = 5;

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.membersService.getMembers().subscribe((members: Member[]) => {
      this.membersDataSource.data = members;
      this.totalMembers = members.length;
      console.log(members.length);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.membersDataSource.filter = filterValue.trim().toLowerCase();

    if (this.membersDataSource.paginator) {
      this.membersDataSource.paginator.firstPage();
    }
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.loadMembers();
  }

  viewMember(memberId: string): void {
    // Logic to view member details
  }

  editMember(memberId: string): void {
    // Logic to edit member details
  }
}
