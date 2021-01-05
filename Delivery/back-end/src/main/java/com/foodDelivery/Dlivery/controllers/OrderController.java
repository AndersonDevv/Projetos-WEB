package com.foodDelivery.Dlivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.Dlivery.dto.OrderDTO;
import com.foodDelivery.Dlivery.dto.ProductDTO;
import com.foodDelivery.Dlivery.services.OrderService;
import com.foodDelivery.Dlivery.services.ProductService;

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
}
