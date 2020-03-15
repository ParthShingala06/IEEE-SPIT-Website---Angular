import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IEEE';

  constructor( private router : Router)
  {}
  g(){
    this.router.navigate(['gallary']);
  }
  s(){
    this.router.navigate(['support']);
  }
  a(){
    this.router.navigate(['about']);
  }
  t(){
    this.router.navigate(['team']);
  }
  h(){
    this.router.navigate(['home']);
  }
  c(){
    this.router.navigate(['contact']);
  }
}
