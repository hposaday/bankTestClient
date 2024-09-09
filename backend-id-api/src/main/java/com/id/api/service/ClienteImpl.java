package com.id.api.service;

import com.id.api.model.entity.Cliente;
import com.id.api.exception.ClienteNotFoundException;

import org.springframework.stereotype.Service;

import com.github.javafaker.Faker;

@Service
public class ClienteImpl implements ClienteService {
    @Override
    public Cliente obtenerCliente(String tipoDocumento, String numeroDocumento) {
        Faker faker = new Faker();
        Cliente clienteMock = new Cliente(
                faker.name().firstName(),
                faker.name().firstName(),
                faker.name().lastName(),
                faker.name().lastName(),
                faker.phoneNumber().cellPhone(),
                faker.address().fullAddress(),
                faker.address().city()
        );

        if ("C".equals(tipoDocumento) && "23445322".equals(numeroDocumento)) {
            return clienteMock;
        } else if ("P".equals(tipoDocumento) && "23445322".equals(numeroDocumento)) {
            return clienteMock;
        } else {
            throw new ClienteNotFoundException("Cliente no encontrado.");
        }
    }
}
