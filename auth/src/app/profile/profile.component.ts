import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit() {
  }

  enteredTitle='';
  enteredContent='';

  onAddPost(){
    const postData = {title: this.enteredTitle, content: this.enteredContent};
    this.service.post(postData);
  }

}
