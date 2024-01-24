import { Component } from '@angular/core';
import { Location } from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users/users.service";
import {UserModel} from "../../models/user-model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  item: UserModel|undefined;
  test: string = '';

  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private usersService:UsersService,
  ) {
  }

  getItem() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.usersService.getUser(id).subscribe(item => this.item = item.data)
  }

  ngOnInit(): void {
    this.getItem()
  }


  goback() {
    this.location.back();
  }
}
