package com.foodDelivery.Dlivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foodDelivery.Dlivery.dto.OrderDTO;
import com.foodDelivery.Dlivery.dto.ProductDTO;
import com.foodDelivery.Dlivery.entities.Order;
import com.foodDelivery.Dlivery.repositories.OrderRepository;

@Service  //ou também @Component
public class OrderService {

	/*ProductService = componente
	 * Obs.: Service retorna um DTO = data transfer object
	 * ou seja, um objeto que carrega dados que for exigido
	 */
	
	/* 
	 * Injeção de dependencias de forma desacoplada
	 * public ProductService(ProductRepository repository){
	 * this.repository=repository;
	 * }
	 */
	
	@Autowired
	OrderRepository repository;
	
	@Transactional(readOnly = true)  //essa operação é apenas de leitura. Isso evita um "locking" no banco de dados, colocando essa anotation
	public List<OrderDTO> findAll(){
		
		List<Order> list = repository.findOrdersWithProduts();
		
		// Agora devemos transformar a lista do tipo Product para ProductDTO utilizando Lambda
		
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		// agora houve reconversão para lista
	}
}
