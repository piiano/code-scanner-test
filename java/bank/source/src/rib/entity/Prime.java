package rib.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.Hibernate;

@Entity
@Table(name = "Prime")
public class Prime {
	@Id
	@Column(name = "Custom_Var")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String no="Test Value";
	
	@Column(name = "Another_Custom_Var")
	private String anotherOneToTrack= "TEST_VALUE";
	
	@Override
	public String toString() {
		String finalString = "";
		if (Hibernate.isInitialized(this.no)) finalString += "\nSOLD " + this.no + ": ";
		if (Hibernate.isInitialized(this.anotherOneToTrack) && this.getAnotherOne() != null) finalString += "RON: " + this.getAnotherOne() + ", ";
		 else finalString += "";
		return finalString;
	}

	public String getNo() {
		return no;
	}

	public String getAnotherOne() {
		return anotherOneToTrack;
	}
}
