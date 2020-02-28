package fr.formation.people.controllers;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.people.dtos.PersonCreateDto;
import fr.formation.people.dtos.PersonDto;

// Définir un ensemble de endpoints
// pour un type de ressources (Person)

@RestController // On dit à Spring: ceci est un controller, tiens en compte
@RequestMapping("/persons") // Correspondance url/code
// http://localhost:8082/persons
public class PersonController {

	// GET, POST, DELETE

	// GET http://localhost:8082/persons/123
	// /{id} = path variable, variable de chemin
	// /123 = récupérer dans id grace qu mapping "@PathVariable"
	@GetMapping("/{id}")
	public PersonDto get(@PathVariable("id") Long id) {
		PersonDto person = new PersonDto();
		person.setFirstName("Frank");
		person.setLastName("MARSHALL");
		return person;
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable("id") Long id) {
		return "Delete Person with id=" + id;
	}

	// @RequestBody = extraire et convertir le JSON du corps (body)
	// de la requete HTTP vers une instance de PersonCreateDto
	// @Valid : cascader la validation sur le DTO, permet si besoin
	// de ne pas valider un meme DTO
	@PostMapping
	public void create(@RequestBody @Valid PersonCreateDto dto) {
		System.out.println(dto);
	}

}
