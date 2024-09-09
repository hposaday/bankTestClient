package com.id.api.controller;


import com.id.api.model.entity.Cliente;
import com.id.api.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @CrossOrigin
    @GetMapping("/cliente")
    public ResponseEntity<Cliente> obtenerCliente(@RequestParam String tipoDocumento, @RequestParam String numeroDocumento) {
        if (!tipoDocumento.equals("C") && !tipoDocumento.equals("P")) {
            throw new IllegalArgumentException("Tipo de documento inválido.");
        }

        Cliente cliente = clienteService.obtenerCliente(tipoDocumento, numeroDocumento);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }
}
