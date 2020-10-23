package eo.kanbanstickynotes.test;

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
@RequestMapping("/test")
public class TestController {	
	
	@Autowired
	private KanbanBoardService kanbanService;
	
	@GetMapping("/list")
	protected String listBoards(Model theModel){
		System.out.println("DO GET method");
		List<Board> boards = kanbanService.getBoards();
		List<Category> categories = kanbanService.getCategories();
		theModel.addAttribute("boards", boards);
		theModel.addAttribute("categories", categories);
		return "test-list";
	}
	
	@GetMapping("/showFormForAdd")
	public String showFormForAdd(Model theModel) {
		
		// create model attribute to bind form data
		Board board = new Board("");	
		theModel.addAttribute("board", board);
		
		return "test-form";
	}
	
	@PostMapping("/saveBoard")
	public String saveBoard(Board board) {
		
		// save the customer using our service
		kanbanService.addBoard(board);	
		
		return "redirect:/test/list";
	}
	
	@GetMapping("/showFormForUpdate")
	public String showFormForUpdate(@RequestParam("boardId") int theId,
									Model theModel) {
		
		// get the customer from our service
		Board board = kanbanService.getBoardById(theId);	
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("board", board);
		
		// send over to our form		
		return "test-form";
	}

	@GetMapping("/delete")
	public String deleteCustomer(@RequestParam("boardId") int theId) {
		
		Board board = kanbanService.getBoardById(theId);
		// delete the customer
		kanbanService.deleteBoard(board);
		
		return "redirect:/test/list";
	}
}

