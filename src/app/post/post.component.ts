import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../interfaces/formPosts/IPost";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    @Input() post!: IPost
    @Output() onRemove = new EventEmitter<number>()
    ngOnInit(): void {
    }

    removePost() {
        this.onRemove.emit(this.post.id)
    }
}
