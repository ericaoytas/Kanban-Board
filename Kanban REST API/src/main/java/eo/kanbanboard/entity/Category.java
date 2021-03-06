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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="category",cascade={CascadeType.ALL})
	private List<Note> notes;
	
	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY,cascade={CascadeType.MERGE,
						 CascadeType.DETACH, 
						 CascadeType.REFRESH})
	@JoinColumn(name="board_id")
	private Board board;
	
	public Category() {}
	
	public Category(String name, Board board) {
		this.name = name;
		this.board = board;
	}
	
	public List<Note> getNotes() {
		return notes;
	}

	public void setNotes(List<Note> notes) {
		this.notes = notes;
	}

	public Board getBoard() {
		return board;
	}

	public void setBoard(Board board) {
		this.board = board;
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
		return "Category [id=" + id + ", name=" + name + ", board=" + board.getId() + "]";
	}

	// convenience method for bi-directional relationship
	public void addNote(Note note) {
		if(notes == null) {
			notes = new ArrayList<Note>();
		}
		
		notes.add(note);
		note.setCategory(this);
	}
	
}
