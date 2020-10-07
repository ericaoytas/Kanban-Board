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
								.buildSessionFactory();
		
		Session session = factory.getCurrentSession();
		
		try {
			
			// Create Board object
			Board board = new Board("Project X");
			
			// Start transaction
			session.beginTransaction();
			
			// Save the Board
			session.save(board);
			
			// Commit the transaction
			session.getTransaction().commit();
			
		} finally {
			session.close();
			factory.close();
		}
		
	}

}
