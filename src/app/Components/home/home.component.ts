import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentService:StudentServiceService) { }
  
  public student={
    name: '',
    age: '',
    sclass: '',
    place: '',
  };

  ngOnInit(): void {
  }
  
  formSub(){
    this.studentService.addStudent(this.student).subscribe(
      (data)=>{
        console.log("data submited");
        console.log(data);
      },
      (error)=>{
        alert("error");
        console.log(error)
      }
      )
  }
  

}
