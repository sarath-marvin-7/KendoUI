import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kendo-UI';

  isDialogOpened:boolean = true;

  onSubmit(evt :any){
    evt.preventDefault();
    this.isDialogOpened = true;
  }
}
