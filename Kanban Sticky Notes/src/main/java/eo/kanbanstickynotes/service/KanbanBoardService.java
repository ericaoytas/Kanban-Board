package eo.kanbanstickynotes.service;

import java.util.List;

import eo.kanbanstickynotes.entity.Board;
import eo.kanbanstickynotes.entity.Category;

public interface KanbanBoardService {

	public List<Category> getCategories();
	public List<Board> getBoards();
}
