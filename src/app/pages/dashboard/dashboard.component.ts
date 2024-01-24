import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {UserModel} from "../../models/user-model";
import {UsersService} from "../users/users.service";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInUpAnimation,
  slideOutDownAnimation
} from "angular-animations";

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    slideInUpAnimation(),
    slideOutDownAnimation(),
  ]
})

export class DashboardComponent implements OnInit {
  constructor(private usersService:UsersService) {
  }

  public users: UserModel[] | undefined = [];


  getUsers() : void {
    this.usersService.getUsers().subscribe(response => {
      this.users = response.data
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
