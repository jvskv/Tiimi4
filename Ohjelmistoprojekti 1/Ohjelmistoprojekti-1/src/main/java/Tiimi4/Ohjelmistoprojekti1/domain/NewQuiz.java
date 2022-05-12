package Tiimi4.Ohjelmistoprojekti1.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class NewQuiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String title;
	private String desc;
	
	@OneToMany(cascade = CascadeType.ALL, fetch= FetchType.EAGER, mappedBy = "newquiz")
	@JsonIgnore
	private List<NewQuestion> newquestions;
	
	public NewQuiz() {
		super();
	}

	public NewQuiz(String title, String desc, List<NewQuestion> newquestions) {
		super();
		this.title = title;
		this.desc = desc;
		this.newquestions = newquestions;
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

	public List<NewQuestion> getNewquestions() {
		return newquestions;
	}

	public void setNewquestions(List<NewQuestion> newquestions) {
		this.newquestions = newquestions;
	}
}