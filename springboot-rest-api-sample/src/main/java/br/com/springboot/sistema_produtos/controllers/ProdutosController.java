package br.com.springboot.sistema_produtos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.springboot.sistema_produtos.models.Produto;
import br.com.springboot.sistema_produtos.repository.ProdutoRepository;


@RestController
public class ProdutosController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@PostMapping(value="salvar")
	@ResponseBody
	public ResponseEntity<Produto> salvar(@RequestBody Produto produto){
		Produto product = produtoRepository.save(produto);
		return new ResponseEntity<Produto>(product, HttpStatus.CREATED);
	}
	
	@GetMapping(value = "listatodos")
	@ResponseBody
	public ResponseEntity<List<Produto>>listaProduto(){
		List<Produto> produtos = produtoRepository.findAll();
		return new ResponseEntity<List<Produto>>(produtos, HttpStatus.OK);
	}
	
	@PutMapping(value = "atualizar")
	@ResponseBody
	public ResponseEntity<?>atualizar(@RequestBody Produto produto){
		if(produto.getId() == null) {
			return new ResponseEntity<String>("Id não foi informado para atualização.", HttpStatus.OK);	
		}
		Produto product = produtoRepository.saveAndFlush(produto);
		return new ResponseEntity<Produto>(product, HttpStatus.OK);	
	}
	
	@DeleteMapping(value = "delete")
	@ResponseBody
	public ResponseEntity<String>delete(@RequestParam Long idProduto){
		produtoRepository.deleteById(idProduto); 
		return new ResponseEntity<String>("Produto deletado com sucesso!", HttpStatus.OK);
	}
	
	

}
