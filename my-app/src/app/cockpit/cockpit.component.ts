import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerModel } from '../model/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  element : {type: string, name: string, content: string}
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(type: string, name: string, content: string){

    this.element = {type: type, name: name, content: content}
    this.newItemEvent.emit(this.element)
  }

  onAddBlueprint(type: string, name: string, content: string){

    this.element = {type: type, name: name, content: content}
    this.newItemEvent.emit(this.element)
  }


  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }




}
