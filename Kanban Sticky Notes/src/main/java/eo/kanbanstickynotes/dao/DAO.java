package eo.kanbanstickynotes.dao;

import java.util.List;

import eo.kanbanstickynotes.entity.Board;

public interface DAO<T> {
	
	// Create
	public boolean add(T item);
	
	// Read
	public List<T> getAll();
	public T getById(int id);
	
	// Update
	public boolean update(T item);
	
	// Delete
	public boolean delete(T item);
	public boolean deleteById(int id);
}
