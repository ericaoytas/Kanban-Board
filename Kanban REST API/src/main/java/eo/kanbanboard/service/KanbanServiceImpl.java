package eo.kanbanboard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eo.kanbanboard.entity.*;
import eo.kanbanboard.repository.BoardRepository;
import eo.kanbanboard.repository.CategoryRepository;
import eo.kanbanboard.repository.NoteRepository;

@Service
public class KanbanServiceImpl implements KanbanService {
	
	@Autowired
	private BoardRepository boardRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private NoteRepository noteRepository;

	@Override
	public List<Board> getBoards() {
		return boardRepository.findAll();
	}

	@Override
	public Board getBoardById(int id) {
		Optional<Board> result = boardRepository.findById(id);
		Board board = null;
		if (result.isPresent()) {
			board = result.get();
		}
		return board;
	}

	@Override
	public Board addBoard(Board board) {
		board.setId(0);
		return boardRepository.save(board);
	}

	@Override
	public Board updateBoard(Board board) {
		return boardRepository.save(board);
	}

	@Override
	public void deleteBoard(Board board) {
		boardRepository.delete(board);
	}

	@Override
	public List<Category> getCategoriesByBoardId(int id) {
		return categoryRepository.getCategoriesByBoardId(id);
	}

	@Override
	public Category getCategoryById(int id) {
		Optional<Category> result = categoryRepository.findById(id);
		Category category = null;
		if (result.isPresent()) {
			category = result.get();
		}
		return category;
	}

	@Override
	public Category addCategory(Category category) {
		category.setId(0);
		return categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return categoryRepository.updateCategory(category);
	}

	@Override
	public void deleteCategory(Category category) {
		categoryRepository.delete(category);
	}

	@Override
	public List<Note> getNotesByCategoryId(int id) {
		return noteRepository.getNotesByCategoryId(id);
	}

	@Override
	public Note getNoteById(int id) {
		Optional<Note> result = noteRepository.findById(id);
		Note note = null;
		if(result.isPresent()) {
			note = result.get();
		}
		return note;
	}

	@Override
	public Note addNote(Note note) {
		note.setId(0);
		return noteRepository.save(note);
	}

	@Override
	public Note updateNote(Note note) {
		return noteRepository.save(note);
	}

	@Override
	public void deleteNote(Note note) {
		noteRepository.delete(note);
	}

}
