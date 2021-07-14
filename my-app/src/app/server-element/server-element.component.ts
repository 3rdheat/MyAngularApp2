import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element : {type: string, name: string, content: string}
  @Input() name : string;
  constructor() { }
 
  ngOnInit(): void {
    console.log('ngOnInit called.')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('OnChange called.')
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('DoCheck called.');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called.');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called.');
  }
  
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called.');
  }
  
  ngOnDestroy(){
    console.log('ngOnDestroy called.');
  }

}
