package br.com.springboot.sistema_produtos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.springboot.sistema_produtos.models.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
