import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor(public wsService: WebsocketService) { }

  emitirUsuariosActivos() {
    return this.wsService.emit('obtener-usuarios');
  }

}
