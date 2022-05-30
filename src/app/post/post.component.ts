import {Component, OnInit} from '@angular/core'
import {Post, PostsService} from "../posts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    post: Post = {
        title: "",
        text: "",
        id: 0
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private postsService: PostsService,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((value: Params) => {
           this.post = this.postsService.getById(+value['id']) as Post;
        })
    }

    load4Post() {
        this.router.navigate(['/posts', 44])
    }
}
