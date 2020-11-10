package eo.kanbanstickynotes.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import eo.kanbanstickynotes.entity.Board;
import eo.kanbanstickynotes.entity.Category;

@Repository
public class CategoryDAOImpl implements CategoryDAO{

	// Query constants
	private final String TABLE_NAME="Category";
	private final String GET_ALL="from " + TABLE_NAME;
	private final String WHERE_PARAM= "id";
	private final String DELETE_BY_ID="delete from " + TABLE_NAME + " where id=:" + WHERE_PARAM;
	private final String GET_BY_BOARD_ID="select i from " + TABLE_NAME + " i where i.board.id=:" + WHERE_PARAM;

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean add(Category item) {
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.saveOrUpdate(item);
		return true;
	}

	@Override
	public List<Category> getAll() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Category> query = currentSession.createQuery(GET_ALL, Category.class);
		List<Category> categories = query.getResultList();
		return categories;
	}

	
	@Override
	public Category getById(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Category category = currentSession.get(Category.class, id);
		return category;
	}

	@Override
	public boolean update(Category item) {
		boolean isSuccessful = add(item);
		return isSuccessful;
	}

	@Override
	public boolean delete(Category item) {
		Session currentSession = sessionFactory.getCurrentSession();
		boolean isSuccessful = deleteById(item.getId());
		return isSuccessful;
	}

	@Override
	public boolean deleteById(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query query = currentSession.createQuery(DELETE_BY_ID);
		query.setParameter(WHERE_PARAM, id);
		int updateCount = query.executeUpdate();
		return (updateCount > 0) ? true : false;
	}

	@Override
	public List<Category> getCategoriesByBoardId(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Category> query = currentSession.createQuery(GET_BY_BOARD_ID, Category.class);
		query.setParameter(WHERE_PARAM,  id);
		
		List<Category> categories = query.getResultList();
		return categories;
	}



}
