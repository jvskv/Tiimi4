package Tiimi4.Ohjelmistoprojekti1.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class NewQuiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String title;
	private String desc;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "newquiz")
	private List<NewQuestion> kysymykset;
	
	public NewQuiz() {
		super();
	}

	public NewQuiz(String title, String desc, List<NewQuestion> kysymykset) {
		super();
		this.title = title;
		this.desc = desc;
		this.kysymykset = kysymykset;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public List<NewQuestion> getKysymykset() {
		return kysymykset;
	}

	public void setKysymykset(List<NewQuestion> kysymykset) {
		this.kysymykset = kysymykset;
	}
}