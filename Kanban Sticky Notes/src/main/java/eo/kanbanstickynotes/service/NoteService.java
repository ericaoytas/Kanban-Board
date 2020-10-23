package eo.kanbanstickynotes.service;

import java.util.List;

import eo.kanbanstickynotes.entity.*;

public interface NoteService {
	
	// Note Service
	public List<Note> getAllNotes();
	public List<Note> getNotesByBoard(Board board);
	public List<Note> getNotesByCategory(Category category);
	public List<Note> getNotesByTag(Tag tag);
	public List<Note> getNotesByColor(Color color);
	public Note getNoteById(int id);
	public boolean addNote(Note note);
	public boolean updateNote(Note note);
	public boolean deleteNote(Note note);
	 
	// Tag Service
	public List<Tag> getAllTags();
	public Tag getTagById(int id);
	public boolean addTag(Tag tag);
	public boolean updateTag(Tag tag);
	public boolean deleteTag(Tag tag);
	
	// Color Service
	public List<Tag> getAllColors();
	public Color getColorById(int id);
	public boolean addColor(Color color);
	public boolean updateColor(Color color);
	public boolean deleteColor(Color color);
}
