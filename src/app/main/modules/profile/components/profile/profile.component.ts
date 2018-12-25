import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input() userProfile: UserModel;

  @Output() saveUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  userForm: FormGroup;
  login: FormControl;
  phone: FormControl;
  fName: FormControl;
  lName: FormControl;
  email: FormControl;
  city: FormControl;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.login = new FormControl(this.userProfile.login);
    this.phone = new FormControl(this.userProfile.phone);
    this.fName = new FormControl(this.userProfile.firstName);
    this.lName = new FormControl(this.userProfile.lastName);
    this.email = new FormControl(this.userProfile.email);
    this.city = new FormControl(this.userProfile.city);

    this.userForm = new FormGroup({
      userName: this.login,
      phone: this.phone,
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      city: this.city
    });
  }

  ngOnChanges() {
    this.initForm();
  }

  save() {
    const user = <UserModel>this.userForm.value;
    this.saveUser.emit(user);
  }

  reset() {
    this.initForm();
  }
}
