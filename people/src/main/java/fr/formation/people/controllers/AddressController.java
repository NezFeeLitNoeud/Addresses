package fr.formation.people.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.people.dtos.AddressCreateDto;
import fr.formation.people.dtos.AddressDto;
import fr.formation.people.entities.Address;
import fr.formation.people.services.AddressService;

@RestController
@RequestMapping("/addresses")
@CrossOrigin
public class AddressController {
	
	private AddressService service;
	
	public AddressController (AddressService service) {
		this.service = service;
		
	}
	
	@PostMapping
	public AddressCreateDto create(@RequestBody @Valid AddressCreateDto dto) {
		
		return service.create(dto);
	}

	
	@GetMapping("/{id}")
	public AddressDto get(@PathVariable("id") Long id) {
		
		
		return service.get(id);
	}
	
	
	@GetMapping("/all")
	public List<Address> getAll() {	
		
		
		return service.getAll();
	}
	
	
	
	@DeleteMapping("/{id}")
	public Long delete(@PathVariable("id") Long id) {
		service.delete(id);
		return id;
	}
}
