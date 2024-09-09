import { Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ResumenClienteComponent } from './resumen-cliente/resumen-cliente.component';

export const routes: Routes = [
  { path: '', component: IngresoComponent },
  { path: 'resumen', component: ResumenClienteComponent },
];
