package com.foodDelivery.Dlivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foodDelivery.Dlivery.dto.OrderDTO;
import com.foodDelivery.Dlivery.dto.ProductDTO;
import com.foodDelivery.Dlivery.entities.Order;
import com.foodDelivery.Dlivery.entities.OrderStatus;
import com.foodDelivery.Dlivery.entities.Product;
import com.foodDelivery.Dlivery.repositories.OrderRepository;
import com.foodDelivery.Dlivery.repositories.ProductRepository;

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
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)  //essa operação é apenas de leitura. Isso evita um "locking" no banco de dados, colocando essa anotation
	public List<OrderDTO> findAll(){
		
		List<Order> list = repository.findOrdersWithProduts();
		
		// Agora devemos transformar a lista do tipo Product para ProductDTO utilizando Lambda
		
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		// agora houve reconversão para lista
	}
	
	
	
	/*
	 * Como pegar um DTO (obj que chega da requisição)
	 * e salvar no banco? 
	 * R - Precisa-se instanciar um order a partir de um orderDTO
	 */
	@Transactional
	public OrderDTO insert(OrderDTO dto){
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
				Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());  //instancia entidade produto gerenciada pelo JPA
			// (nao vai no banco d dados) para que, ao salvar o pedido, salve tbm as associações que estão no pedido
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		
		return new OrderDTO(order); 
	}
	
	@Transactional //alteração no banco de dados
	public OrderDTO setDelivered(Long id) {
		
		Order order = repository.getOne(id); //refere-se a linha 35. getOne n vai no banco de dados
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
}
