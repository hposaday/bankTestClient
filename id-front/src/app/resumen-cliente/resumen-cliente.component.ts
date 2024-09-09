import { Component } from '@angular/core';
import { ClientService } from '@services/client.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-resumen-cliente',
  templateUrl: './resumen-cliente.component.html',
  standalone: true,
})
export class ResumenClienteComponent {
  constructor(private clientService: ClientService) {}

  cliente!: Cliente;

  ngOnInit() {
    this.cliente = this.clientService.valorCliente;
  }
}
