import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading:boolean = false

  constructor() { }

  setIsLoading(isLoading:boolean) {
    this.isLoading = isLoading
  }
}
