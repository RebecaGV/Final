import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';
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
    
    const urlapi = 'https://us-central1-xocolatl-22f0c.cloudfunctions.net/app';
    console.log(urlapi);
    
    
    this.MessageService.postJson(urlapi).subscribe((data:any) => {
      console.log(data);

    });
  }

  showswalSuccess(){
    Swal.fire({
      icon: 'success',
      title: 'Correo enviado',
      text: 'Gracias por contactarnos, pronto recibiras un correo atendiendo tus dudas',
      footer: '<a href>Contactanos</a>'
    })
  }

}
