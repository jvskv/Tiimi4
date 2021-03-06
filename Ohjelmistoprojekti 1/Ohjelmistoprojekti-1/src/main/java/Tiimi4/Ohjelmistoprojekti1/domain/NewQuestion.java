package Tiimi4.Ohjelmistoprojekti1.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class NewQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String kysymys;
	private boolean teksti;
	
	@ManyToOne
	@JoinColumn(name = "newquizId")
	private NewQuiz newquiz;
	
	public NewQuestion() {
		super();
	}

	public NewQuestion(String kysymys, boolean teksti, NewQuiz newquiz) {
		super();
		this.kysymys = kysymys;
		this.teksti = teksti;
		this.newquiz = newquiz;
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

	public NewQuiz getNewquiz() {
		return newquiz;
	}

	public void setNewquiz(NewQuiz newquiz) {
		this.newquiz = newquiz;
	}

	@Override
	public String toString() {
		return "NewQuestion [id=" + id + ", kysymys=" + kysymys + ", teksti=" + teksti + ", newquiz=" + newquiz + "]";
	}
	
	
}
