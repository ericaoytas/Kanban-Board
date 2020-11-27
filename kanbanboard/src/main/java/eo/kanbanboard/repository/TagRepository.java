package eo.kanbanboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eo.kanbanboard.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, Integer>{
	
}
