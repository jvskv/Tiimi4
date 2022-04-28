package Tiimi4.Ohjelmistoprojekti1.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NewQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String kysymys;
	private boolean teksti;
	
	public NewQuestion() {
		super();
	}

	public NewQuestion(String kysymys, boolean teksti) {
		super();
		this.kysymys = kysymys;
		this.teksti = teksti;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKysymys() {
		return kysymys;
	}

	public void setKysymys(String kysymys) {
		this.kysymys = kysymys;
	}

	public boolean isTeksti() {
		return teksti;
	}

	public void setTeksti(boolean teksti) {
		this.teksti = teksti;
	}
}
