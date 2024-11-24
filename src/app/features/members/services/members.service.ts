import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Member } from 'src/app/shared/interfaces/member.interface';
import membersList from 'src/assets/mockdata/members-list.json';
//import {member} from 'src/assets/mockdata/member.json';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private apiUrl = 'https://your-backend-api.com/members';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<any> {
   // return this.http.get(`${this.apiUrl}`);
   membersList.forEach((member) => {
     console.log(member.firstName);
   })
   return of(membersList);
  }

  getMemberById(id: string): Observable<any> {
    //return this.http.get(`${this.apiUrl}/${id}`);
    const member = membersList.find((m: Member) => m.id === id);
    return of(member);
  }

  // addMember(member: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}`, member);
  // }

  // addMember(newMember: Member): Observable<Member[]> {
  //   // 
  //   const newId = (membersList.length + 1).toString();  
  //   const memberWithId = { ...newMember, id: newId };
  //   membersList.push(memberWithId); 

  //   return of(membersList);  
  // }

  updateMember(id: string, member: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, member);
  }

  deleteMember(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
