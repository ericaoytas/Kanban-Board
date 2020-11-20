package eo.kanbanboard.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name="board")
public class Board {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")	
	private int id;
	
	@Column(name="name")
	private String name;
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="board", cascade=CascadeType.ALL)
	@Fetch(FetchMode.SELECT)
	private List<Category> categories;
	
	public Board() {}
	
	public Board(String name) {
		super();
		this.name = name;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	@Override
	public String toString() {
		return "Board [id=" + id + ", name=" + name + "]";
	}
	
	// convenience method for bi-directional relationship
	public void add(Category category) {
		if(categories == null) {
			categories = new ArrayList<Category>();
		}
		categories.add(category);
		category.setBoard(this);
	}
	
}
