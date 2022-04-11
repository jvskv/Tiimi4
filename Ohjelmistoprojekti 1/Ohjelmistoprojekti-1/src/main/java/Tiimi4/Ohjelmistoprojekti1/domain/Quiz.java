package Tiimi4.Ohjelmistoprojekti1.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String yhtye;
	private String kappale;
	private String elokuva;
	private String ruoka;
	private String urheilulaji;
	
	public Quiz() {
		super();
	}

	public Quiz(String yhtye, String kappale, String elokuva, String ruoka, String urheilulaji) {
		super();
		this.yhtye = yhtye;
		this.kappale = kappale;
		this.elokuva = elokuva;
		this.ruoka = ruoka;
		this.urheilulaji = urheilulaji;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getYhtye() {
		return yhtye;
	}

	public void setYhtye(String yhtye) {
		this.yhtye = yhtye;
	}

	public String getKappale() {
		return kappale;
	}

	public void setKappale(String kappale) {
		this.kappale = kappale;
	}

	public String getElokuva() {
		return elokuva;
	}

	public void setElokuva(String elokuva) {
		this.elokuva = elokuva;
	}

	public String getRuoka() {
		return ruoka;
	}

	public void setRuoka(String ruoka) {
		this.ruoka = ruoka;
	}

	public String getUrheilulaji() {
		return urheilulaji;
	}

	public void setUrheilulaji(String urheilulaji) {
		this.urheilulaji = urheilulaji;
	}	
}
