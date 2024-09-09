package com.id.api.service;

import com.id.api.model.entity.Cliente;

public interface ClienteService {
    Cliente obtenerCliente(String tipoDocumento, String numeroDocumento);
}
