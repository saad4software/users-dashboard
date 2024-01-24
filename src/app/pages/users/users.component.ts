import { Component } from '@angular/core';
import {UsersService} from "./users.service";
import {UserModel} from "../../models/user-model";
import {
  collapseAnimation,
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation, pulseAnimation,
  rubberBandAnimation
} from "angular-animations";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations: [
    rubberBandAnimation(),
    collapseAnimation(),
    fadeInOnEnterAnimation(),
    pulseAnimation(),
  ]

})



export class UsersComponent {
  users: UserModel[] | undefined = []
  originalUsers: UserModel[] | undefined = []
  pagesCount: number = 1
  currentPage: number = 1
  itemsCount: number = 1
  pageItems: number[] = []

  rubberState:boolean[] = []

  constructor(private usersService:UsersService) {
  }


  onCardClicked(item:UserModel) {

  }

  onNextClicked():void {
    if (this.currentPage < this.pagesCount) {
      this.currentPage += 1
      this.getUsers()
    }
  }

  onPreviousClicked():void {
    if (this.currentPage > 1) {
      this.currentPage -= 1
      this.getUsers()
    }
  }

  onPageClicked(page:number):void {
    if (page <= this.pagesCount) {
      this.currentPage = page
      this.getUsers()
    }

  }

  onMouseEnter(item:UserModel) {
    console.log("enter")
    console.log(item.id)
  }

  onMouseLeave(item:UserModel) {
    console.log("leave")
    console.log(item.id)
  }

  search(text:string):void {

    this.users = this.originalUsers?.filter(val=>
      val.first_name.toLowerCase().includes(text.toLowerCase()) ||
      val.last_name.toLowerCase().includes(text.toLowerCase()) ||
      val.email.toLowerCase().includes(text.toLowerCase()) ||
      `${val.id}` == text
    )

  }

  getUsers() : void {
    this.usersService.getUsers(this.currentPage).subscribe(response => {
      this.users = response.data

      // for filtering
      this.originalUsers = response.data

      // for animation
      this.rubberState = []
      this.users?.forEach(item=>this.rubberState.push(false))

      // for pagination
      this.pagesCount = response.total_pages ?? 1
      this.pageItems = []
      for(let a=1; a<=this.pagesCount; a++)
        this.pageItems.push(a)


    })
  }

  ngOnInit(): void {
    this.getUsers()
  }


  range(min:number, max:number, step:number=1) {
    let input = []

    for (let i = min; i<= max; i+=step)
      input.push(i)
    return input
  }

}
