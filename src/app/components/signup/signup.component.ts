import { Component, OnInit } from '@angular/core';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser = faUser;
  faLock = faLock;
  faCheck = faCheck;

}
