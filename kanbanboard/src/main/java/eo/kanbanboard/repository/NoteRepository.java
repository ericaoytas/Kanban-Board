package eo.kanbanboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eo.kanbanboard.entity.Note;

public interface NoteRepository extends JpaRepository<Note, Integer>, NoteRepositoryCustom{

}
