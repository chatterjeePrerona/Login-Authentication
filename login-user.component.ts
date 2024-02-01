import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataTransferService } from '../user-data-transfer.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  constructor(private router: Router, private dts: UserDataTransferService) {}

  regForm: FormGroup;
  errorMessage: string;

  ngOnInit(): void {
    this.regForm = new FormGroup({
      // Username
      username: new FormControl(null, Validators.required),
      // Password
      password: new FormControl(null, Validators.required),
    });
  }

  onFormSubmit() {
    let userObj = this.regForm.value;
    console.log(userObj);
    this.dts.UserLogin(userObj).subscribe({
      next: (res) => {
        if (res['message'] == 'success') {
          this.errorMessage = '';
          this.router.navigate(['login-success']);
        }
        this.errorMessage = res['message'];
      },
      error: (err) => {
        console.log('err is', err);
      },
    });
  }

  onReset() {
    this.regForm.reset();
  }

  get username() {
    return this.regForm.get('username');
  }

  get password() {
    return this.regForm.get('password');
  }

}
