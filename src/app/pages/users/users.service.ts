import { Injectable } from '@angular/core';
import {UserModel} from "../../models/user-model";
import {Observable, Observer, of} from 'rxjs'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GenericListResponse} from "../../models/generic-list-response";
import { catchError, map, tap } from 'rxjs/operators';
import {GenericResponse} from "../../models/generic-response";
import {LoaderService} from "../../loader.service";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private usersUrl = "https://reqres.in/api/users"

  constructor(
    private http:HttpClient,
    private loaderService: LoaderService,
  ) { }

  getUsers(page:number = 1) : Observable<GenericListResponse<UserModel>> {
    this.loaderService.setIsLoading(true)
    let response =  this.http
      .get<GenericListResponse<UserModel>>(this.usersUrl + `?page=${page}`)
      .pipe(catchError(this.handleError<GenericListResponse<UserModel>>('getUsers', {})));
    this.loaderService.setIsLoading(false)
    return response
  }

  getUser(id:number) : Observable<GenericResponse<UserModel>> {
    this.loaderService.setIsLoading(true)
    let response = this.http
      .get<GenericResponse<UserModel>>(this.usersUrl + `/${id}`)
      .pipe(catchError(this.handleError<GenericResponse<UserModel>>('getUser', {})));
    this.loaderService.setIsLoading(false)
    return response
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.loaderService.setIsLoading(false)
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
