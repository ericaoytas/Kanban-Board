package eo.kanbanstickynotes.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import eo.kanbanstickynotes.dao.BoardDAOImpl;
import eo.kanbanstickynotes.entity.*;
import eo.kanbanstickynotes.service.KanbanBoardService;

@Controller
@RequestMapping("/board")
public class BoardController {	
	
	@Autowired
	private KanbanBoardService kanbanService;
	
	@GetMapping("/")
	protected String viewHome(Model theModel){
		System.out.println("Invoked: viewHome()");
		
		Board mainBoard  = kanbanService.getBoardById(2);
		
		List<Board> boards = kanbanService.getAllBoards();
		List<Category> categories = kanbanService.getCategoriesByBoardId(mainBoard.getId());
		theModel.addAttribute("board", mainBoard);
		theModel.addAttribute("boards", boards);
		theModel.addAttribute("categories", categories);
		
		return "board";
	}
	
	@PostMapping("/selectBoard")
	protected String selectBoard(@ModelAttribute("board") Board board, Model theModel){
		System.out.println("Invoked: selectBoard()");
		
		Board mainBoard  = kanbanService.getBoardById(board.getId());
		
		List<Board> boards = kanbanService.getAllBoards();
		List<Category> categories = kanbanService.getCategoriesByBoardId(mainBoard.getId());
		theModel.addAttribute("board", mainBoard);
		theModel.addAttribute("boards", boards);
		theModel.addAttribute("categories", categories);
		
		return "board";
	}
	
	@GetMapping("/view/note")
	protected String viewNote(@RequestParam("noteId") int id, Model theModel){
		System.out.println("Invoked: viewNote()");
		Note note = kanbanService.getNoteById(id);
		theModel.addAttribute("note", note);
		return "note-view";
	}
	
	@GetMapping("/delete")
	protected String deleteNote(@RequestParam("noteId") int id, Model theModel){
		System.out.println("Invoked: deleteNote()");
		kanbanService.deleteNoteById(id);
		return "redirect:/board/";
	}
	
}

