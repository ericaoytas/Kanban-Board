package eo.kanbanboard.service;

import java.util.List;

import eo.kanbanboard.entity.*;

public interface KanbanService {
	
	// Board
	public List<Board> getBoards();
	public Board getBoardById(int id);
	public Board addBoard(Board board);
	public Board updateBoard(Board board);
	public void deleteBoard(Board board);
	
	// Category
	public List<Category> getCategoriesByBoardId(int id);
	public Category getCategoryById(int id);
	public Category addCategory(Category category);
	public Category updateCategory(Category category);
	public void deleteCategory(Category category);
	
	// Note
	public List<Note> getNotesByCategoryId(int id);
	public Note getNoteById(int id);
	public Note addNote(Note note);
	public Note updateNote(Note note);
	public void deleteNote(Note note);
}
