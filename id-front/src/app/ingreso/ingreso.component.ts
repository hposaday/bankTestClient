import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientService } from '@services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class IngresoComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(
    private router: Router,
    private clientService: ClientService,
    private toastr: ToastrService
  ) {}

  formatearNumero() {
    let valor = this.numeroDocumento.replace(/\D/g, '');
    if (valor.length > 3) {
      valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    this.numeroDocumento = valor;
  }

  buscarCliente() {
    this.clientService
      .getClient(
        this.tipoDocumento.toUpperCase(),
        this.numeroDocumento.replaceAll('.', '')
      )
      .subscribe({
        next: (response: any) => {
          this.clientService.valorCliente = response;
          this.router.navigate(['/resumen']);
        },
        error: ({ error }: any) => {
          this.toastr.error(error, 'Error');
        },
      });
  }
}
