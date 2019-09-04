import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { ListaUsuariosService } from '../../services/lista-usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(
    public chatService: ChatService,
    public listaUsuariosService: ListaUsuariosService
  ) { }

  ngOnInit() {
    this.listaUsuariosService.emitirUsuariosActivos();
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();
  }

}
