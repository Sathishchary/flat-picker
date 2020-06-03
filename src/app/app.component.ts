import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  dateValue: any = '06/4/2020 10:34 PM';
  dateValue2: any = '06/4/2020 10:34 PM';
}
