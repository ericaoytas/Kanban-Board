package eo.kanbanstickynotes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="note")
public class Note {
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	private int colorId;
	private int boardId;
	private int categoryId;
	public Note() {}
	public Note(String name, String description, int colorId, int boardId, int categoryId) {
		super();
		this.name = name;
		this.description = description;
		this.colorId = colorId;
		this.boardId = boardId;
		this.categoryId = categoryId;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getColorId() {
		return colorId;
	}
	public void setColorId(int colorId) {
		this.colorId = colorId;
	}
	public int getBoardId() {
		return boardId;
	}
	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	@Override
	public String toString() {
		return "Note [id=" + id + ", name=" + name + ", description=" + description + ", colorId=" + colorId
				+ ", boardId=" + boardId + ", categoryId=" + categoryId + "]";
	}
	
}
