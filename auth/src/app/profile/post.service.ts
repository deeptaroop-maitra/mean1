import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  $postCreated = new EventEmitter();

  post(postData){
    const post = postData;
    this.$postCreated.emit(post);
  }

}
