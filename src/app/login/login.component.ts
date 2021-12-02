import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  username: any;
  password: any;
  
  constructor(private route:ActivatedRoute ,private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('Sessionuser', this.user);
    this.user = this.route.snapshot.params['user'];
  }

  checklogin() {
    let uname = this.username;
   // console.log("uname"+uname);
    
    sessionStorage.setItem('isLogin', 'true');
    sessionStorage.setItem('loginsuccess','true');
    sessionStorage.setItem('role',this.user),
    this.router.navigate(['/dashboard']);
   }
  
    logout(){
       sessionStorage.clear();
       this.router.navigate(['/login'])
  
     }


}
