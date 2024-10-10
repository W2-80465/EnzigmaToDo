import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Task } from './Modal/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskSetviceService {

  

  baseURL = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  createNewTask(taskdata : Task) : Observable<any>{
    return this.http.post<any>(`http://localhost:5000/tasks`, taskdata);
  }

  getAllTask() : Observable<any>{
    return this.http.get<any>(`http://localhost:5000/tasks`);
  }

  editTask(id:any, task:Task) : Observable<any>{
    return this.http.put<any>(`http://localhost:5000/tasks/${id}`,task);
  }

  getTaskId(id : any):Observable<Task>{
    return this.http.get<Task>(`http://localhost:5000/tasks/${id}`);
  }

  deleteTask(id : any) : Observable<Task>{
    return this.http.delete<Task>(`http://localhost:5000/tasks/${id}`)
  }
}
