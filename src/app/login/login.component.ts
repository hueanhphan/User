import { User } from './../interface/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, Validator, NG_VALIDATORS } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  username!: string;
  password!: string;
  email!: string;
  customStylesValidated = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitLogin() {
    this.customStylesValidated = true;
    if (!this.username || !this.password) return;

    this.router.navigate(['dashboard']);
    this.customStylesValidated = false;
  }
}
