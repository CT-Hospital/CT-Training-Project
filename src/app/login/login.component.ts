import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { passwordValidator, userNameValidator } from './validators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.params['user'];
    this.authService.logout();
    this.form = new FormGroup(
      {
        username: new FormControl(null, [userNameValidator()]),
        password: new FormControl(null, [passwordValidator()]),
      },
      []
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  onLogin() {
    let username: string = this.form.value.username;
    let password: string = this.form.value.password;
    //console.log(username+" "+password);
    let result = this.authService.login(username, password);
    if (result) {
      //result ===
      console.log(
        'After login successfull ' + this.authService.isUserLoggedIn()
      );

      sessionStorage.setItem('isLogin', 'true');
      sessionStorage.setItem('loginsuccess', 'true');
      sessionStorage.setItem('role', this.user),
        this.router.navigate(['/dashboard']);
      alert('Login Successfull!');
      //here login required to set flag or navigate to particular component
      this.router.navigate(['/dashboard']);
    } else {
      alert('LoggedIn failed, try again!');
    }
  }
}
