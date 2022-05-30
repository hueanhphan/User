import { User } from './../../interface/user/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, NG_VALIDATORS } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: User[] = [];

  username!: string;
  password!: string;
  email!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  customStylesValidated = false;
  ngOnInit(): void {}

  onSubmit() {
    this.customStylesValidated = true;
    if (!this.username || !this.email || !this.password) return;
    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.userService.addUser(newUser).subscribe((user) => {
      this.users.push(user);
      // alert('Register success!');
      this.toastr.success('Register success!');
      this.router.navigate(['/login']);
    });

    this.customStylesValidated = false;
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
