import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }
  
  loginUser(): void {
    if(this.validateUser(this.username, this.password)){
      this.router.navigateByUrl('/blogList');
    }
    else {
      alert('Wrong password!');
    }
  }
  validateUser(username: string, password: string): boolean{
    if(this.username === 'blogger@grapecity.com' && this.password === '1qaz!QAZ'){
      return true;
    } else{
      return false;
    }
  }

}
