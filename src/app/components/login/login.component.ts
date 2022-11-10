import { JitsService } from './../../services/jits.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: JitsService) {
    this.form = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  onSubmit() {
    this.service.saveLogin(this.form.value).subscribe(result => console.log(result));
  }

  ngOnInit(): void {
  }

  faUser = faUser;
  faLock = faLock;

}
