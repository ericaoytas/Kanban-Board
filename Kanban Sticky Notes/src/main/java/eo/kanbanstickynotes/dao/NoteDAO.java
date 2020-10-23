package eo.kanbanstickynotes.dao;

import java.util.List;

import eo.kanbanstickynotes.entity.*;

public interface NoteDAO extends DAO<Note>{
	public List<Note> getNotesByBoard(Board board);
	public List<Note> getNotesByCategory(Category category);
	public List<Note> getNotesByTag(Tag tag);
	public List<Note> getNotesByColor(Color color);
}
