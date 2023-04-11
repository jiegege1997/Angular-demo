import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NzRadioService } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: [
    NzRadioService
  ]
})
export class MessageComponent implements OnInit {
  testDemo!: any;
  constructor(
    public messageService: MessageService,
  ) { }
  ngOnInit(): void {

  }
}
