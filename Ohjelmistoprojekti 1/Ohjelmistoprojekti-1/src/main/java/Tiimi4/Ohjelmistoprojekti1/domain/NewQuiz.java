package Tiimi4.Ohjelmistoprojekti1.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NewQuiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private String title;
	private String desc;
	
	public NewQuiz() {
		super();
	}

	public NewQuiz(String title, String desc) {
		super();
		this.title = title;
		this.desc = desc;
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
}