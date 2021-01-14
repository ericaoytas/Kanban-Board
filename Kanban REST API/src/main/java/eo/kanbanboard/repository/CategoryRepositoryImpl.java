package eo.kanbanboard.repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import eo.kanbanboard.entity.Category;
import eo.kanbanboard.entity.Note;

public class CategoryRepositoryImpl implements CategoryRepositoryCustom{

	@Autowired
	CategoryRepository categoryRepository;
	
	@Override
	public List<Category> getCategoriesByBoardId(int id) {
		List<Category> filteredCategories = categoryRepository.findAll().stream()
															.filter(c -> c.getBoard().getId() == id)
															.collect(Collectors.toList());
		return filteredCategories;
	}

	@Override
	public Category updateCategory(Category category) {
		Optional<Category> result = categoryRepository.findById(category.getId());
		Category categoryToUpdate = null;
		if (result.isPresent()) {
			categoryToUpdate = result.get();
			categoryToUpdate.setName(category.getName());
		}

		return categoryToUpdate;
	}

}
