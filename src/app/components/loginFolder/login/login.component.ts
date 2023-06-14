import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/loginFolder/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  error: string;

  constructor(private _userService: UserService, private _router: Router) {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  login(): void {
    this._userService.login(this.username, this.password).subscribe((data) => {
      if (!data.ok) {
        this.error = data.message;
      } else {
        this.username = '';
        this.password = '';
        this.error = '';
        this._router.navigate([]).then(() => window.location.reload());
      }
    });
  }
}
