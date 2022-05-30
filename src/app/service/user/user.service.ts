import { User } from './../../interface/user/user';
import { Injectable } from '@angular/core';
import { Observable, of, retryWhen } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiurl =
    'https://628efc440e69410599d36fda.mockapi.io/usermanagement/user';
  constructor(private http: HttpClient) {}

  // add
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiurl, user, httpOptions);
  }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiurl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/${id}`);
  }
}
