package eo.kanbanstickynotes.dao;

import java.util.List;

import eo.kanbanstickynotes.entity.*;

public interface NoteDAO extends DAO<Note>{
	public List<Note> getNotesByBoardId(int id);
	public List<Note> getNotesByCategoryId(int id);
	public List<Note> getNotesByTagId(int id);
	public List<Note> getNotesByColorId(int id);
}
