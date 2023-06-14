import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/loginFolder/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private _storageService: StorageService, private _router: Router) { }

  logout(): void {
    this._storageService.logOut();
    this._router.navigate([]).then(() => window.location.reload());
  }
}
