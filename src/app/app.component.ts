import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";

export interface ITodo {
    id: number,
    completed: boolean,
    title: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    todos: ITodo[] = [];
    todoTitle: string = '';

    ngOnInit() {
        this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(todos => {
            console.log('params: ', todos);
            this.todos = todos;
        })
    }

    onAdd() {
        if (!this.todoTitle.trim()) return
        const newTodo: ITodo = {
            id: 0,
            completed: false,
            title: this.todoTitle
        };
        this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(todo => {
            this.todos.push(todo)
        })
    }
}

