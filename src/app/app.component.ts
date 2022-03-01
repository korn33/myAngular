import { Component } from '@angular/core';
import { IPost } from 'src/interfaces/formPosts/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [];


  constructor() {

  }

  updatePosts($event: IPost) {
    this.posts.unshift($event)
  }
}
