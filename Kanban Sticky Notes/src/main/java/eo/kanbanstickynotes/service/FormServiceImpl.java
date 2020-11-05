package eo.kanbanstickynotes.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eo.kanbanstickynotes.dao.NoteDAO;
import eo.kanbanstickynotes.entity.Board;
import eo.kanbanstickynotes.entity.Category;
import eo.kanbanstickynotes.entity.Color;
import eo.kanbanstickynotes.entity.Note;
import eo.kanbanstickynotes.entity.Tag;

@Service
public class FormServiceImpl implements FormService {

	@Autowired
	private NoteDAO noteDB;
	
	@Override
	@Transactional
	public List<Note> getAllNotes() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	@Transactional
	public List<Note> getNotesByBoard(Board board) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public List<Note> getNotesByCategory(Category category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public List<Note> getNotesByTag(Tag tag) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public List<Note> getNotesByColor(Color color) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Note getNoteById(int id) {
		return noteDB.getById(id);
	}

	@Override
	@Transactional
	public boolean addNote(Note note) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean updateNote(Note note) {
		return noteDB.update(note);
	}

	@Override
	@Transactional
	public boolean deleteNote(Note note) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public List<Tag> getAllTags() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Tag getTagById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public boolean addTag(Tag tag) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean updateTag(Tag tag) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean deleteTag(Tag tag) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public List<Tag> getAllColors() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Color getColorById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public boolean addColor(Color color) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean updateColor(Color color) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean deleteColor(Color color) {
		// TODO Auto-generated method stub
		return false;
	}

}
