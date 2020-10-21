package eo.kanbanstickynotes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import eo.kanbanstickynotes.dao.BoardDAOImpl;
import eo.kanbanstickynotes.entity.Board;
import eo.kanbanstickynotes.entity.Category;

@Service
public class KanbanBoardServiceImpl implements KanbanBoardService{
	
	@Autowired
	private BoardDAOImpl boardDB;

	@Override
	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public List<Board> getBoards() {
		return boardDB.getAll();
	}

}
