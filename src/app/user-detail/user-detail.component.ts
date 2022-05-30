import { User } from '../interface/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id!: number;

  user!: User;
  customStylesValidated = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe((data) => {
      this.user = data;
    });
  }
  onSubmit(user: User) {
    this.customStylesValidated = true;
    if (!this.user.username || !this.user.email || !this.user.password) return;
    this.user.username = this.user.username;
    this.user.password = this.user.password;
    this.user.email = this.user.email;

    this.userService.updateUser(user).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
