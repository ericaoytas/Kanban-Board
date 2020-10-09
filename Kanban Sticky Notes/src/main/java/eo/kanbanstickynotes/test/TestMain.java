package eo.kanbanstickynotes.test;

import java.sql.Connection;
import java.sql.DriverManager;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import eo.kanbanstickynotes.entity.*;


public class TestMain {

	public static void main(String[] args) {
		String jdbcUrl = "jdbc:mysql://localhost:3306/kanban_sticky_notes_db";
		String user = "root";
		String password = "root";
		
		try {
			System.out.println("Connecting to database: " + jdbcUrl);
			Connection conn = DriverManager.getConnection(jdbcUrl, user, password);
			
			System.out.println("Connection successful.");
		} catch (Exception e) {
			e.printStackTrace();
		}

		SessionFactory factory = new Configuration()
								.configure("hibernate.cfg.xml")
								.addAnnotatedClass(Board.class)
								.addAnnotatedClass(Category.class)
								.addAnnotatedClass(Color.class)
								.addAnnotatedClass(Note.class)
								.addAnnotatedClass(Tag.class)
								.buildSessionFactory();
		
		Session session = factory.getCurrentSession();
		
		try {
			
			// Start transaction
			session.beginTransaction();
			
			// Get a note
			int noteId = 2;
			Note note = session.get(Note.class, noteId);

			System.out.println("** NOTE INFO **");
			System.out.println("Name: " + note.getName());
			System.out.println("Description: " + note.getDescription());
			System.out.println("Category: " + note.getCategory());
			System.out.println("Tags: " + note.getTags());

//			
//			// Save the Board
//			session.save(note);
//			
			// Commit the transaction
			session.getTransaction().commit();
			
		} finally {
			session.close();
			factory.close();
		}
		
	}

}
