package eo.kanbanstickynotes.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import eo.kanbanstickynotes.entity.Board;

@Repository
public class BoardDAOImpl implements DAO<Board>{
	
	// Query constants
	private final String TABLE_NAME="board";
	private final String GET_ALL="from " + TABLE_NAME;
	private final String WHERE_PARAM= "id";
	private final String DELETE_BY_ID="delete from " + TABLE_NAME + " where id=:" + WHERE_PARAM;

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	@Transactional
	public boolean add(Board board) {
		Session currentSession = sessionFactory.getCurrentSession();
		currentSession.saveOrUpdate(board);
		return true; // TODO: Check if successfully added
	}

	@Override
	public List getAll() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Board> query = currentSession.createQuery(GET_ALL, Board.class);
		List<Board> boards = query.getResultList();
		return boards;
	}

	@Override
	@Transactional
	public Board getById(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Board board = currentSession.get(Board.class, id);
		return board;
	}

	@Override
	@Transactional
	public boolean update(Board board) {
		boolean isSuccessful = add(board);
		return isSuccessful;
	}

	@Override
	@Transactional
	public boolean delete(Board board) {
		Session currentSession = sessionFactory.getCurrentSession();
		boolean isSuccessful = deleteById(board.getId());
		return isSuccessful;
	}

	@Override
	@Transactional
	public boolean deleteById(int id) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query query = currentSession.createQuery(DELETE_BY_ID);
		query.setParameter(WHERE_PARAM, id);
		int updateCount = query.executeUpdate();
		return (updateCount > 0) ? true : false;
	}

}
