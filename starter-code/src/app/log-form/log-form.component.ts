import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor( private theAcces: AccessService ) { }

  ngOnInit() {
  }

}
