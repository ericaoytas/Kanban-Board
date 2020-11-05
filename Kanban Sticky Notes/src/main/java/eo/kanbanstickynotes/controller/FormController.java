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
import eo.kanbanstickynotes.service.FormService;
import eo.kanbanstickynotes.service.KanbanBoardService;

@Controller
@RequestMapping("/form")
public class FormController {	
	
	@Autowired
	private FormService formService;
	
	@GetMapping("/view")
	protected String viewNote(@RequestParam("noteId") int id, Model model){
		System.out.println("Invoked: viewNote()");
		Note note = formService.getNoteById(id);
		model.addAttribute("note", note);
		return "note-view";
	}
	
	@GetMapping("/edit")
	protected String editNote(@RequestParam("noteId") int id, Model model){
		System.out.println("Invoked: editNote()");
		Note note = formService.getNoteById(id);
		model.addAttribute("note", note);
		return "note-edit";
	}
	
	@PostMapping("/saveNote")
	public String saveNote(Note note, Model model) {
		formService.updateNote(note);
		model.addAttribute("noteId", note.getId());
		return "redirect:/form/view";
	}
}
