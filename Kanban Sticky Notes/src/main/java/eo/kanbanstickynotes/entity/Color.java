package eo.kanbanstickynotes.entity;

public class Color {
	private int id;
	private String name;
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
