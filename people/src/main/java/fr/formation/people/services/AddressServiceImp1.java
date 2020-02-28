package fr.formation.people.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.formation.people.dtos.AddressCreateDto;
import fr.formation.people.dtos.AddressDto;
import fr.formation.people.entities.Address;
import fr.formation.people.repositories.AddressJpaRepository;


@Service
public class AddressServiceImp1 implements AddressService {
	
	
	private final AddressJpaRepository repository;

	public AddressServiceImp1(AddressJpaRepository repository) {
		this.repository = repository;
	}
	@Override
	public AddressCreateDto create(AddressCreateDto dto) {
		Address address = new Address();
		address.setStreet(dto.getStreet());
		address.setZipCode(dto.getZipCode());
		address.setCity(dto.getCity());
		address.setCountry(dto.getCountry());
		
		repository.save(address);
		return dto;
	}
	
	@Override
	public AddressDto get(Long id) {
		Address address = repository.findById(id).get();
		AddressDto dto = new AddressDto();
		dto.setStreet(address.getStreet()); // Copy street de l'entité vers le DTO
		dto.setCity(address.getCity());
		dto.setZipCode(address.getZipCode());
		dto.setCountry(address.getCountry());
		
		return dto;
	}
	public List<Address> getAll() {
		List <Address> address = repository.findAll();
		
		System.out.print(address);
	return address;
	}
	
	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

}
