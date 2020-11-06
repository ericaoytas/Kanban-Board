package eo.kanbanstickynotes.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import eo.kanbanstickynotes.entity.Category;
import eo.kanbanstickynotes.entity.Color;
import eo.kanbanstickynotes.entity.Note;

@Repository
public class ColorDAOImpl implements ColorDAO {

	//Query constants
	private final String TABLE_NAME="Color";
	private final String GET_ALL="from " + TABLE_NAME;
	private final String GET_RANDOM="from " + TABLE_NAME + " ORDER BY rand()";
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean add(Color item) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Color> getAll() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Color> query = currentSession.createQuery(GET_ALL, Color.class);
		List<Color> allItems = query.getResultList();
		return allItems;
	}

	@Override
	public Color getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean update(Color item) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Color item) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Color getRandomColor() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Color> query = currentSession.createQuery(GET_RANDOM, Color.class).setMaxResults(1);
		Color color = query.getSingleResult();
		return color;
	}

}
