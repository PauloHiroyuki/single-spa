import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent {

  constructor(
    private router: Router
  ) {

  }

  navegar() {
    this.router.navigate(['/']);
  }


}
