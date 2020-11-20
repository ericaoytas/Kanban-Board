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

@Entity
@Table(name="color")
public class Color {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="hex_value")
	private String hexValue;
	
	@OneToMany(mappedBy="color",
				cascade={CascadeType.PERSIST, CascadeType.MERGE,
					 CascadeType.DETACH, CascadeType.REFRESH},
				fetch=FetchType.LAZY)
	private List<Note> notes;
	
	public Color() {}
	public Color(String name, String hexValue) {
		super();
		this.name = name;
		this.hexValue = hexValue;
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
	public String getHexValue() {
		return hexValue;
	}
	public void setHexValue(String hexValue) {
		this.hexValue = hexValue;
	}
	@Override
	public String toString() {
		return "Color [id=" + id + ", name=" + name + ", hexValue=" + hexValue + "]";
	}
	
	// convenience method for bi-directional relationship
	public void addNote(Note note) {
		if(notes == null) {
			notes = new ArrayList<Note>();
		}
		notes.add(note);
		note.setColor(this);
	}
	
}
