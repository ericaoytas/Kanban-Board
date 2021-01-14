package eo.kanbanboard.repository;

import java.util.List;

import eo.kanbanboard.entity.Category;

public interface CategoryRepositoryCustom {
	public List<Category> getCategoriesByBoardId(int id);
	public Category updateCategory(Category category);
}
