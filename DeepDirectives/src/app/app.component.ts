import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeepDirectives';
  numbers = [1, 2, 3, 4, 5];
  oddnumbers=[1,3,5]
  evennumbers=[2,4]
  onlyOdd = false;
  value=5;
}