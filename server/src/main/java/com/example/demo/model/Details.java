package com.example.demo.model;



import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection="Details")
public class Details {

	
	
	private UUID rollno;
	
	private String name;

	private String dob;

	private String clas;

	private String div;

	private String gender;
	UUID uuid = UUID.randomUUID();
	Details(){
		super();
		this.setRollno(uuid);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getClas() {
		return clas;
	}
	public void setClas(String clas) {
		this.clas = clas;
	}
	public String getDiv() {
		return div;
	}
	public void setDiv(String div) {
		this.div = div;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public UUID getRollno() {
		return rollno;
	}
	public void setRollno(UUID uuid2) {
		this.rollno = uuid2;
	}
	

}