package com.foodDelivery.Dlivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodDelivery.Dlivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	/*
	 * Repository é o objeto que faz o acesso ao banco de dados
	 * Ao utilizar um bom framework, como o spring, isso já vem implementado
	 * Neste caso, vamos aproveitar o JPA repository (extends JpaRepository)
	 * 
	 * Trata-se de uma interface proveniente de subframework spring data JPA.
	 * Utilizando o recurso, obtem-se implementações padrão para buscar, salvar
	 * e deletar dados, conforme a entidade que precisamos (JpaRepository<ENTIDADE, Tipo da chave ChavePrimaria>)
	 * Além disso, também é possível fazer consultas ao banco.
	 * 
	 * 
	 */
	
	List<Product> findAllByOrderByNameAsc();
	
	
}
