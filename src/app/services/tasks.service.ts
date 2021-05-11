import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, } from 'rxjs';
import {TASKS} from '../TASKS';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:5000/tasks';

  getTasks(): Observable<TASKS[]> {
    return this.http.get<TASKS[]>(this.apiUrl);
  }

  deleteTask(task: TASKS): Observable<TASKS>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TASKS>(url);
  }

  updateTaskReminder(task: TASKS): Observable<TASKS>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TASKS>(url, task, httpOptions);
  }

  addNewTask(task: TASKS): Observable<TASKS>{
    return this.http.post<TASKS>(this.apiUrl, task, httpOptions)
  }

  constructor(private http: HttpClient) {
  }
}
