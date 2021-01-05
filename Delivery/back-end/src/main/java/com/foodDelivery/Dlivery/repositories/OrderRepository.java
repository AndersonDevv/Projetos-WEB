package com.foodDelivery.Dlivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodDelivery.Dlivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

	/*
	 * Repository é o objeto que faz o acesso ao banco de dados
	 * Ao utilizar um bom framework, como o spring, isso já vem implementado
	 * Neste caso, vamos aproveitar o JPA repository (extends JpaRepository)
	 * 
	 * Trata-se de uma interface proveniente de subframework spring data JPA.
	 * Utilizando o recurso, obtem-se implementações padrão para buscar, salvar
	 * e deletar dados, conforme a entidade que precisamos (JpaRepository<ENTIDADE, Tipo da chave ChavePrimaria>)
	 * Além disso, também é possível fazer consultas ao banco.
	 */

	/*
	 * A anotation @Query permite fazer consultas no banco de dados utilizando
	 * a linguagem JPQL, que lembra um pouco SQL.
	 */
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH  obj.products"
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC") // obj = apelido do objeto | From Order -> EXATAMENTE igual ao nome da classe
	List<Order> findOrdersWithProduts();
		
}
