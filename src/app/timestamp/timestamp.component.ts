import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  displayP = true;
  btnLogs = [];
  isStyle = false;

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.displayP = !this.displayP;
    this.btnLogs.push(Date.now());
  }

}
