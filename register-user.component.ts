import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataTransferService } from '../user-data-transfer.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent {
  constructor(private router: Router, private dts: UserDataTransferService) {}

  regForm: FormGroup;
  errorMessage: string;

  ngOnInit(): void {
    this.regForm = new FormGroup({
      // First Name
      fname: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      // Last Name
      lname: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      // Username
      username: new FormControl(null, Validators.required),
      // Password
      password: new FormControl(null, Validators.required),
    });
  }

  onFormSubmit() {
    let userObj = this.regForm.value;
    console.log(userObj);
    this.dts.createNewUser(userObj).subscribe({
      next: (res) => {
        if (res['message'] == 'created') {
          this.errorMessage = '';
          this.router.navigate(['login-user']);
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

  get fname() {
    return this.regForm.get('fname');
  }

  get lname() {
    return this.regForm.get('lname');
  }

  get username() {
    return this.regForm.get('username');
  }

  get password() {
    return this.regForm.get('password');
  }
}
