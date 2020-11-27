package eo.kanbanboard.repository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import eo.kanbanboard.entity.Note;

public class NoteRepositoryImpl implements NoteRepositoryCustom{

	@Autowired
	NoteRepository noteRepository;
	
	@Override
	public List<Note> getNotesByCategoryId(int id) {
		List<Note> filteredNotes = noteRepository.findAll().stream()
													.filter(note -> note.getCategory().getId() == id)
													.collect(Collectors.toList());
		return filteredNotes;
	}

}
