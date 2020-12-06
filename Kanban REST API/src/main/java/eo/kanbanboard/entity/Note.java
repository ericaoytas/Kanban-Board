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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="note")
public class Note {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@ManyToOne(cascade={
			 CascadeType.DETACH, CascadeType.REFRESH})
	@JoinColumn(name="color_id")
	private Color color;

	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY,
				cascade={CascadeType.PERSIST,
			 			CascadeType.DETACH, CascadeType.REFRESH})
	@JoinColumn(name="category_id")
	private Category category;
	
	// TODO: Implement Tags
	@JsonIgnore
	@ManyToMany(fetch=FetchType.LAZY,
				cascade={CascadeType.PERSIST,
						CascadeType.DETACH, CascadeType.REFRESH})
	@JoinTable(
			name="note_to_tag",
			joinColumns=@JoinColumn(name="note_id"),
			inverseJoinColumns=@JoinColumn(name="tag_id"))
	private List<Tag> tags;
	
	
	public Note() {}

	public Note(String name, String description, Color color, Category category) {
		super();
		this.name = name;
		this.description = description;
		this.color = color;
		this.category = category;
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
	public Color getColor() {
		return color;
	}
	public void setColor(Color color) {
		this.color = color;
	}
	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	
	public void addTag(Tag tag) {
		if (tags == null) {
			tags = new ArrayList<Tag>();
		}
		tags.add(tag);
	}

	@Override
	public String toString() {
		return "Note [id=" + id + ", name=" + name + ", description=" + description + ", color=" + color.getId() + ", category="
				+ category.getId() + "]";
	}

}
