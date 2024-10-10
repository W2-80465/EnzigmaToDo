import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from './Modal/Task';
import { TaskSetviceService } from './task-setvice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApplication';

  id: number | undefined ;
  delete_id :number | undefined;

  task =  new Task('','','','','','');

  

   
   tasksObject : any = [];

  constructor(private taskService:TaskSetviceService,
    private activatedRoute : ActivatedRoute,
  private router : Router){
    
  }
  
  ngOnInit(){
    this.activatedRoute.params.subscribe(resp =>{
      this.id=resp['id'];
    })

    this.taskService.getAllTask().subscribe(resp =>{
      this.tasksObject = resp;
      console.log(resp);
    })

    
  }
  
  

  getAllTaskForRefresh(){
    this.taskService.getAllTask().subscribe(resp =>{
      this.tasksObject = resp;
      console.log(resp);
    })
  }

  editTaskModal(id :any){
    console.log(id);
    this.id = id;
    this.taskService.getTaskId(id).subscribe(resp =>{
      this.task = resp;
    })
  }
  
  editTask(){
    this.taskService.editTask(this.id,this.task).subscribe((resp) =>{
      console.log(resp);
      this.router.navigate(['/']);
      this.getAllTaskForRefresh();
    })
  }

  deleteTaskModal(id : any){
    console.log(id);
    this.delete_id = id;
    this.taskService.getTaskId(this.delete_id).subscribe(resp =>{
      this.task = resp;
    })
  }

  deleteTask(){
    this.taskService.deleteTask(this.delete_id).subscribe(resp =>{
      console.log(resp);
      this.router.navigate(['/']);
      this.getAllTaskForRefresh();
    }
    )
  }
}
