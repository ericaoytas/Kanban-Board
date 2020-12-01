package eo.kanbanboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import eo.kanbanboard.entity.Board;
import eo.kanbanboard.entity.Category;
import eo.kanbanboard.entity.Color;
import eo.kanbanboard.entity.Note;
import eo.kanbanboard.exceptionhandler.ItemNotFoundException;
import eo.kanbanboard.service.KanbanService;
import eo.kanbanboard.service.NoteDetailService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class KanbanRestController {

		@Autowired
		private KanbanService kanbanService;
		
		@Autowired
		private NoteDetailService noteDetailService;
		
		/*
		 *  Board Mappings
		 */
		@PostMapping("/boards")
		public Board addBoard(@RequestBody Board board) {
			return kanbanService.addBoard(board);
		}
		
		@GetMapping("/boards")
		public List<Board> getBoards(){
			return kanbanService.getBoards();
		}
		
		@GetMapping("/boards/{boardId}")
		public Board getBoardById(@PathVariable int boardId) {
			Board board = kanbanService.getBoardById(boardId);
			if (board == null) {
				throw new ItemNotFoundException("Board id not found : " + boardId);
			}
			return board;
		}
		
		@PutMapping("/boards")
		public Board updateBoard(@RequestBody Board board) {
			return kanbanService.updateBoard(board);
		}
		
		@DeleteMapping("/boards/{boardId}")
		public Board deleteBoard(@PathVariable int boardId) {
			Board board = kanbanService.getBoardById(boardId);
			if (board == null) {
				throw new ItemNotFoundException("Board id not found : " + boardId);
			}
			kanbanService.deleteBoard(board);
			return board;
		}
		
		/*
		 * Category Mappings
		 */
		@PostMapping("categories")
		public Category addCategory(@RequestParam(name="board", required=true) int boardId, @RequestBody Category category) {
			Board board = kanbanService.getBoardById(boardId);
			if (board == null) {
				throw new ItemNotFoundException("Board id not found : " + boardId);
			}
			category.setBoard(board);
			return kanbanService.addCategory(category);
		}
		
		@GetMapping("/categories")
		public List<Category> getCategories(@RequestParam(name="board", required=true) int boardId) {
			return kanbanService.getCategoriesByBoardId(boardId);
		}
		
		@GetMapping("/categories/{categoryId}")
		public Category getCategoryById(@PathVariable int categoryId) {
			Category category = kanbanService.getCategoryById(categoryId);
			if (category == null) {
				throw new ItemNotFoundException("Category id not found : " + categoryId);
			}
			
			return category;
		}
		@PutMapping("/categories")
		public Category updateCategory(@RequestParam(name="board", required=true) int boardId, @RequestBody Category category) {
			Board board = kanbanService.getBoardById(boardId);
			if (board == null) {
				throw new ItemNotFoundException("Board id not found : " + boardId);
			}
			category.setBoard(board);
			return kanbanService.updateCategory(category);
		}

		@DeleteMapping("/categories/{categoryId}")
		public Category deleteCategory(@PathVariable int categoryId) {
			Category category = kanbanService.getCategoryById(categoryId);
			if (category == null) {
				throw new ItemNotFoundException("Category id not found : " + categoryId);
			}
			
			kanbanService.deleteCategory(category);
			return category;
		}
		
		/*
		 * Notes Mappings
		 */
		@PostMapping("/notes")
		public Note addNote(@RequestParam(name="category", required=true) int categoryId, @RequestParam(name="color", defaultValue="1") int colorId, @RequestBody Note note) {
			Category category = kanbanService.getCategoryById(categoryId);
			if (category == null) {
				throw new ItemNotFoundException("Category id not found : " + categoryId);
			}
		
			Color color = noteDetailService.getColorById(colorId);
			if (color == null) {
				throw new ItemNotFoundException("Color id not found : " + colorId);
			}
			
			note.setCategory(category);
			note.setColor(color);
			
			return kanbanService.addNote(note);
		}
		
		@GetMapping("/notes")
		public List<Note> getNotes(@RequestParam(name="category", required=true) int categoryId) {
			return kanbanService.getNotesByCategoryId(categoryId);
		}
		
		@GetMapping("/notes/{noteId}")
		public Note getNoteById(@PathVariable int noteId) {
			Note note = kanbanService.getNoteById(noteId);
			if (note == null) {
				throw new ItemNotFoundException("Note id not found : " + noteId);
			}
			
			return note;
		}
		
		// TODO: Combine with POST, reuse code
		@PutMapping("/notes")
		public Note updateNote(@RequestParam(name="category", required=true) int categoryId, @RequestParam(name="color", required=true) int colorId, @RequestBody Note note) {
			Category category = kanbanService.getCategoryById(categoryId);
			if (category == null) {
				throw new ItemNotFoundException("Category id not found : " + categoryId);
			}
		
			Color color = noteDetailService.getColorById(colorId);
			if (color == null) {
				throw new ItemNotFoundException("Color id not found : " + colorId);
			}
			note.setCategory(category);
			note.setColor(color);
			
			return kanbanService.updateNote(note);
		}
		
		@DeleteMapping("/notes/{noteId}")
		public Note deleteNote(@PathVariable int noteId) {
			Note note = kanbanService.getNoteById(noteId);
			if (note == null) {
				throw new ItemNotFoundException("Note id not found : " + noteId);
			}
			kanbanService.deleteNote(note);
			return note; 
		}
}
