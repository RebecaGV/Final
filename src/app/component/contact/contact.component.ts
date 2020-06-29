import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

//import swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public MessageService: MessageService) {
    

   }

   enviar(nom1:string,asunto1:string,email1:string,mes1:string){
    console.log("enviando peticion");
    
    const urlapi = `http://localhost:3000/sendemail/`;
    console.log(urlapi);
    
    
    this.MessageService.postJson(urlapi).subscribe((data:any) => {
      console.log(data);

    });
  }

}
