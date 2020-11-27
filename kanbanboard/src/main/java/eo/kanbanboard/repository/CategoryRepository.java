package eo.kanbanboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eo.kanbanboard.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>, CategoryRepositoryCustom{
	
}
