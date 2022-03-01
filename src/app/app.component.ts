import { Component } from '@angular/core';
import { IPost } from 'src/interfaces/formPosts/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {
      title: "First post",
      text: "First post text df 1111111111111 lorem dfdsgf 10"
    },
    {
      title: "Second post",
      text: "Second post dsf dsfdf dfgsdf ds text lorem dfdsgf 10"
    },
  ];


  constructor() {

  }

}
