import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from "../../interfaces/formPosts/IPost";

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
    title = ""
    text = ""
    id = 0

    @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>()
    @ViewChild("inputTitle") inputTitleRef!: ElementRef

    constructor() {
    }

    ngOnInit(): void {
    }

    addPost() {
        if (this.text.trim() && this.title.trim()) {
            const post: IPost = {
                title: this.title,
                text: this.text,
                id: Math.ceil(Math.random() * 100000)
            }
            this.onAdd.emit(post)
            this.text = this.title = ""
            this.id = 0
        }
    }

    setFocusInputTitle() {
        this.inputTitleRef.nativeElement.focus()
    }
}
