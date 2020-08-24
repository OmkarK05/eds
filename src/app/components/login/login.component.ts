import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { v4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  formError = {
    email: '',
    password: '',
  };

  validationMessages = {
    email: {
      required: 'Email required',
      email: 'Invalid Email format',
    },
    password: {
      required: 'Password required',
      minlength: 'Must include atleast 6 characters',
    },
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.minLength(2), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.loginForm.touched) {
      this.onValueChange();
    }

    this.loginForm.valueChanges.subscribe((data) => this.onValueChange(data));
  }

  onValueChange(data?: any) {
    if (data) {
      const form = this.loginForm;
      for (const field in this.formError) {
        if (this.formError.hasOwnProperty(field)) {
          this.formError[field] = '';
          const control = form.get(field);
          if (control && control.touched && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formError[field] = '';
                this.formError[field] += messages[key] + '';
              }
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      localStorage.removeItem('accessToken');
      localStorage.setItem('accessToken', v4());

      this.router.navigate(['/employees']);
      this.onReset();
    }
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
