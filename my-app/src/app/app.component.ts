import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    
  ];

  addServer(newItem: any){
    this.serverElements.push(newItem);
  }


}
