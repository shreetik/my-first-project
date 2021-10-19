import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  public student={
    name: '',
    age: '',
    sclass: '',
    place: '',
  };

  ngOnInit(): void {
  }
  

  
  formSub(){
    alert("finally")
  }
  

}
