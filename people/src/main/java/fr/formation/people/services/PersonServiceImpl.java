package fr.formation.people.services;

import org.springframework.stereotype.Service;

import fr.formation.people.dtos.PersonCreateDto;
import fr.formation.people.entities.Person;

@Service
public class PersonServiceImpl implements PersonService {
	
	
	@Override 
	public void create(PersonCreateDto dto) {
		Person person = new Person();
	
		person.setFirstName(dto.getFirstName());
		person.setLastName(dto.getLastName());
	
		System.out.print(person);
	}
}
