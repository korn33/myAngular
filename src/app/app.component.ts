import {Component, OnInit} from '@angular/core'
import {ITodo, TodosService} from "./Todos.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private todosService: TodosService) {}

    todos: ITodo[] = [];
    todoTitle: string = '';
    isLoading: boolean = false;

    ngOnInit() {
       this.onLoad()
    }

    onAdd() {
        if (!this.todoTitle.trim()) return
        const newTodo: ITodo = {
            id: 0,
            completed: false,
            title: this.todoTitle
        };

        this.todosService.Add(newTodo).subscribe(todo => {
            this.todos.push(todo)
        })
    }

    onLoad() {
        this.isLoading = true;
        this.todosService.Load()
            .subscribe(todos => {
            console.log('params: ', todos);
            this.todos = todos;
            this.isLoading = false;
        })
    }

    onDelete(id: number) {
        this.todosService.Delete(id).subscribe(() => {
            this.todos = this.todos.filter(value => value.id !== id)
        })
    }

    onComplete(id: number) {
        this.todosService.Complete(id).subscribe(todo => {
            const completingTodo = this.todos.find(value => value.id === todo.id);
            if (completingTodo) completingTodo.completed = todo.completed
        })
    }
}

