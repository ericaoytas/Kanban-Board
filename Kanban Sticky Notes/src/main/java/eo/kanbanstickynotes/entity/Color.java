package eo.kanbanstickynotes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="color")
public class Color {
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="hex_value")
	private String hexValue;
	
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
	
}
