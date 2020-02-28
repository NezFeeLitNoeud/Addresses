package fr.formation.people.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.formation.people.entities.Address;

@Repository
public interface AddressJpaRepository extends JpaRepository<Address, Long> {
	Optional<Address> findById(Long id);
	Optional<Address> findByCountry(String country);
}
