import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCalendarBody } from '@angular/material/datepicker';

@Injectable()
export class MessageService {


    constructor(public httpClient: HttpClient) { }
  
    postJson(url:string){
      
      return this.httpClient.post(url,
        {
          "title": "Soy un email",
          "body": "Hola"
          
        });
    }
}