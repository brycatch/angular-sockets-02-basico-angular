import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string;
  messagesSubscription: Subscription;
  mensajes: { de: string, cuerpo: string }[] = [];
  elemento: HTMLElement;

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');

    this.messagesSubscription = this.chatService.getMessages().subscribe((msj: { de: string, cuerpo: string }) => {
      this.mensajes.push(msj);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 0);
    });
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length === 0) { return; }

    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
