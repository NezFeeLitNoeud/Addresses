package fr.formation.people.services;

import java.util.List;

import fr.formation.people.dtos.AddressCreateDto;
import fr.formation.people.dtos.AddressDto;
import fr.formation.people.entities.Address;

public interface AddressService {
	
	AddressCreateDto create(AddressCreateDto dto);
	
	AddressDto get(Long id);
	
	List<Address> getAll();
	
	void delete(Long id);

}
