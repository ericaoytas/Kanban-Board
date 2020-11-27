package eo.kanbanboard.repository;

import java.util.List;

import eo.kanbanboard.entity.Note;

public interface NoteRepositoryCustom {
	public List<Note> getNotesByCategoryId(int id);
}
