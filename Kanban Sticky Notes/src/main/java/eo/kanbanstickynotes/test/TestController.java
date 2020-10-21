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
import org.springframework.web.bind.annotation.RequestMapping;

import eo.kanbanstickynotes.dao.BoardDAOImpl;
import eo.kanbanstickynotes.entity.*;
import eo.kanbanstickynotes.service.KanbanBoardService;

@Controller
@RequestMapping("/test")
public class TestController {	
	
	@Autowired
	private KanbanBoardService kanbanService;
	
	@GetMapping("/list")
	protected String doGet(Model theModel){
		System.out.println("DO GET method");
		List<Board> boards = kanbanService.getBoards();
		theModel.addAttribute("boards", boards);
		return "test";
	
	}

}

