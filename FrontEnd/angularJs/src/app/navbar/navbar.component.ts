import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Modal/Task';
import { TaskSetviceService } from '../task-setvice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  task =  new Task(0,'','','','','');

  tasksObject :any =[]

  constructor(private taskService : TaskSetviceService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  
  getAllTaskForRefresh(){
    this.taskService.getAllTask().subscribe(resp =>{
      this.tasksObject = resp;
      console.log(resp);
    })
  }
  
  createTask(){
    this.taskService.createNewTask(this.task).subscribe((resp) =>{
      console.log(resp);
      this.router.navigate(['/']);
    })
  }

}
