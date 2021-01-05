package com.foodDelivery.Dlivery.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.foodDelivery.Dlivery.dto.OrderDTO;
import com.foodDelivery.Dlivery.services.OrderService;


@RestController
@RequestMapping(value ="/orders")
public class OrderController {

	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		List<OrderDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
		//Retorna um estado de 200 e o body(list) 
	}
	
	/*
	 * Abaixo:
	 * dto = json que é enviado no corpo da requisição.
	 * para funcionar, precisa da anotation RequestBody
	 */
	@PostMapping
	public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto){
		dto = service.insert(dto);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		
		//return ResponseEntity.ok().body(dto); funciona, mas o metodo abaixo é o mais correto
		
		return ResponseEntity.created(uri).body(dto);
		
		
		/*
		 * OBS.: quando um recurso é criado, envia-se o status 201
		 * para enviar, veja o macete
		 */
	}
	
	@PutMapping("/{id}/delivered")
	public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id){
		OrderDTO dto = service.setDelivered(id);
		return ResponseEntity.ok().body(dto);
	}
}
