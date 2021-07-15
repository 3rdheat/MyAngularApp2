import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  serverElements = [{type: 'server', name: 'Server 1', content: 'This is server 1'}];

  @ContentChild('contentParagraph', {static: true}) vcContent : ElementRef;

  addServer(value){
    this.serverElements.push(value);
  }

  addBluePrint(value){
    this.serverElements.push(value);
  }

  ChangeElement(){
    this.serverElements[0].name = 'Changed!'
  }

  DestroyElement(){
    this.serverElements.splice(0, 1);
  }

  ngOnInit(){
  }

  ngAfterContentInit(){
  }

  ngAfterViewInit(){
    
  }





}
