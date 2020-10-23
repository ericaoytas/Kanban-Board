package eo.kanbanstickynotes.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import eo.kanbanstickynotes.dao.*;
import eo.kanbanstickynotes.entity.Board;
import eo.kanbanstickynotes.entity.Category;

@Service
public class KanbanBoardServiceImpl implements KanbanBoardService{
	
	@Autowired
	private BoardDAO boardDB;
	
	@Autowired
	private CategoryDAO categoryDB;
	
	@Override
	@Transactional
	public List<Board> getBoards() {
		return boardDB.getAll();
	}

	@Override
	@Transactional
	public Board getBoardById(int id) {
		return boardDB.getById(id);
	}

	@Override
	@Transactional
	public boolean addBoard(Board board) {
		return boardDB.add(board);
	}

	@Override
	@Transactional
	public boolean deleteBoard(Board board) {
		return boardDB.delete(board);
	}

	@Override
	@Transactional
	public boolean updateBoard(Board board) {
		return boardDB.update(board);
	}

	@Override
	@Transactional
	public List<Category> getCategories() {
		return categoryDB.getAll();
	}

	@Override
	@Transactional
	public Category getCategoryById(int id) {
		return categoryDB.getById(id);
	}

	@Override
	@Transactional
	public boolean addCategory(Category category) {
		return categoryDB.add(category);
	}

	@Override
	@Transactional
	public boolean deleteCategory(Category category) {
		return categoryDB.delete(category);
	}

	@Override
	@Transactional
	public boolean updateCategory(Category category) {
		return categoryDB.update(category);
	}

	
}
