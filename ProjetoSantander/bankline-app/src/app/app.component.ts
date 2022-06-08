import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santander Bankline ' + ( String.fromCodePoint( 0x2668 )) ;
  
  opened= false;

}
