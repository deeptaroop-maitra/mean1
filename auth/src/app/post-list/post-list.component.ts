import { Component, OnInit } from '@angular/core';
import { PostService } from '../profile/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

//posts = [
//  { title: 'first', content: 'first post' },
//  { title: 'second', content: 'second post' },
//  { title: 'third', content: 'third post' }
//];

posts= [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.$postCreated
      .subscribe((data) => {
        this.posts.push(data);
        console.log(this.posts);
      });
  }

}
