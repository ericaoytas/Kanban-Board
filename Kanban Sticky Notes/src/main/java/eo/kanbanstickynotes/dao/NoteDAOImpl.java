package eo.kanbanstickynotes.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import eo.kanbanstickynotes.entity.*;

@Repository
public class NoteDAOImpl implements NoteDAO{
	
	//Query constants
	private final String TABLE_NAME="Note";
	private final String GET_ALL="from " + TABLE_NAME;
	private final String WHERE_PARAM= "id";
	private final String DELETE_BY_ID="delete from " + TABLE_NAME + " where id=:" + WHERE_PARAM;
	private final String GET_BY_CATEGORY_ID="select i from " + TABLE_NAME + " JOIN FETCH i.category where i.id=:" + WHERE_PARAM;
	private final String GET_BY_COLOR_ID="select i from " + TABLE_NAME + " JOIN FETCH i.color where i.id=:" + WHERE_PARAM;
	
	@Autowired
	private SessionFactory sessionFactory;
	

	@Override
	public boolean add(Note item) {
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.saveOrUpdate(item);
		return true;
	}

	@Override
	public List<Note> getAll() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Note> query = currentSession.createQuery(GET_ALL, Note.class);
		List<Note> notes = query.getResultList();
		return notes;
	}

	@Override
	public Note getById(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Note note = currentSession.get(Note.class, id);
		return note;
	}

	@Override
	public boolean update(Note item) {
		boolean isSuccessful = add(item);
		return isSuccessful;
	}

	@Override
	public boolean delete(Note item) {
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
	public List<Note> getNotesByBoardId(int id) {
		// TODO get notes by board id
		return null;
	}

	@Override
	public List<Note> getNotesByCategoryId(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Note> query = currentSession.createQuery(GET_BY_CATEGORY_ID, Note.class);
		query.setParameter(WHERE_PARAM, id);
		List<Note> notes = query.getResultList();
		System.out.println("Notes in category: " + notes);
		return notes;
	}

	@Override
	public List<Note> getNotesByTagId(int id) {
		// TODO get notes by tag id
		return null;
	}

	@Override
	public List<Note> getNotesByColorId(int id) {
		// TODO Auto-generated method stub
		return null;
	}


	
}
