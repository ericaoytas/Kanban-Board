package eo.kanbanstickynotes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="board")
public class Board {

	@Id
	@Column(name="id")	
	private int id;
	
	@Column(name="name")
	private String name;
	
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

	@Override
	public String toString() {
		return "Board [id=" + id + ", name=" + name + "]";
	}
	
}
