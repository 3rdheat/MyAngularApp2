import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerModel } from '../model/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() onCreateServer = new EventEmitter<{type: string, name: string, content: string}>();
  @Output() onCreateBlueprint = new EventEmitter<{type: string, name: string, content: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  CreateServer(serverName : HTMLInputElement, serverContent : HTMLInputElement){
    this.onCreateServer.emit({
      type: 'server',
      name: serverName.value,
      content: serverContent.value
    })
  }

  CreateBlueprint(serverName : HTMLInputElement, serverContent : HTMLInputElement){
    this.onCreateServer.emit({
      type: 'blueprint',
      name: serverName.value,
      content: serverContent.value
    })
  }


}
