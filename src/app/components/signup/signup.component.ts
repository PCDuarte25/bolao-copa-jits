import { JitsService } from './../../services/jits.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: JitsService) {
    this.form = this.formBuilder.group({
      avatar: [null],
      username: [null],
      password: [null],
      passwordConfirm: [null],
      gender: [null],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.saveSignup(this.form.value).subscribe(result => console.log(result));
  }

  faUser = faUser;
  faLock = faLock;
  faCheck = faCheck;

}
