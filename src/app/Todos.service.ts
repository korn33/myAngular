import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

export interface ITodo {
    id: number,
    completed: boolean,
    title: string
}

@Injectable({providedIn: 'root'})
export class TodosService{
    constructor(private http: HttpClient) {}

    Add(newTodo: ITodo): Observable<ITodo> {
        return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    }

    Load():Observable<ITodo[]> {
        return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(1000))
    }

    Delete(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }

    Complete(id: number): Observable<ITodo> {
        return this.http.put<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true
        })
    }
}
