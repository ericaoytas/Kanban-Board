package eo.kanbanstickynotes.service;

import java.util.List;

import eo.kanbanstickynotes.entity.*;

public interface KanbanBoardService {
	
	// Board Service
	public List<Board> getBoards();
	public Board getBoardById(int id);
	public boolean addBoard(Board board);
	public boolean deleteBoard(Board board);
	public boolean updateBoard(Board board);
	
	// Category Service
	public List<Category> getCategories();
	public Category getCategoryById(int id);
	public boolean addCategory(Category category);
	public boolean deleteCategory(Category category);
	public boolean updateCategory(Category category);
	
}
