import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerModel } from '../model/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() createServer = new EventEmitter<{type: string, name: string, content: string}>();
  @Output() createBlueprint = new EventEmitter<{type: string, name: string, content: string}>();

  element : {type: string, name: string, content: string}
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.createServer.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onCreateBlueprint(){
    this.createServer.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddServer(type: string, name: string, content: string){

    this.element = {type: type, name: name, content: content}
    this.newItemEvent.emit(this.element)
  }

  onAddBlueprint(type: string, name: string, content: string){

    this.element = {type: type, name: name, content: content}
    this.newItemEvent.emit(this.element)
  }
}
