import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
}

// @Component({
//   selector: 'modal',
//   templateUrl: './modal.html'
// })
// export class LoginDialog {}
