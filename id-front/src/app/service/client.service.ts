import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './../cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:8090/cliente';

  private clienteActual!: Cliente;

  getClient(
    tipoDocumento: String,
    numeroDocumento: String
  ): Observable<Cliente> {
    return this.http.get<Cliente>(
      `${this.apiUrl}?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`
    );
  }

  get valorCliente() {
    return this.clienteActual;
  }

  set valorCliente(nuevoCliente) {
    this.clienteActual = nuevoCliente;
  }
}
