import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  ;

  constructor(private http: HttpClient) { }

  public addStudent(student:any){

    return this.http.post(`${baseURL}/student/`,student)
  }
}
