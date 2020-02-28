package fr.formation.people.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AddressCreateDto {

	@Size(min = 1, max = 30)
	@NotBlank
	private String country;

	@Size(min = 1, max = 100)
	@NotBlank
	private String street;
	
	@Size(min = 1, max = 50)
	@NotBlank
	private String city;
	
	@Size(min = 1, max = 20)
	@NotBlank
	private String zipCode;

	public AddressCreateDto() {

	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	@Override
	public String toString() {
		return "Address [country=" + country + ", street=" + street + ", city=" + city + ", zipCode=" + zipCode + "]";
	}

}
