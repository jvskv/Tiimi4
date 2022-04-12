package Tiimi4.Ohjelmistoprojekti1.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QuizTwo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Long id;
	public String koodieditori;
	public String ohjelmointikieli;
	
	public QuizTwo() {
		super();
	}


	public QuizTwo(String koodieditori, String ohjelmointikieli) {
		super();
		this.koodieditori = koodieditori;
		this.ohjelmointikieli = ohjelmointikieli;
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	public String getKoodieditori() {
		return koodieditori;
	}

	public void setKoodieditori(String koodieditori) {
		this.koodieditori = koodieditori;
	}

	public String getOhjelmointikieli() {
		return ohjelmointikieli;
	}

	public void setOhjelmointikieli(String ohjelmointikieli) {
		this.ohjelmointikieli = ohjelmointikieli;
	}
	@Override
	public String toString() {
		return "QuizTwo [koodieditori=" + koodieditori + ", ohjelmointikieli=" + ohjelmointikieli + "]";
	}

}
