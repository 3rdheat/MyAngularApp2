import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element : {type: string, name: string, content: string}
  @Input() name : string;

  @ContentChild('contentParagraph', {static: true}) vcContent : ElementRef;
  @ViewChild('heading', {static: true}) vcHeading : ElementRef;   

  constructor() { }
 
  ngOnInit(){
    console.log('ngOnInit called.');
    console.log('Text Content: ' + this.vcHeading.nativeElement.textContent);
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
    console.log('Paragraph Content: ' + this.vcContent.nativeElement.textContent);

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
