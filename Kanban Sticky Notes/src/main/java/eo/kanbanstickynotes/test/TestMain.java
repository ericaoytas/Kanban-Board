package eo.kanbanstickynotes.test;

import java.sql.Connection;
import java.sql.DriverManager;

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

	}

}
