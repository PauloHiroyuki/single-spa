import * as singleSpa from 'single-spa';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent {

  constructor(
    private router: Router
  ) {

  }

  navegar() {
    this.router.navigate(['filho']);
  }

  navegarFora() {
    singleSpa.navigateToUrl('/react');
  }

}
