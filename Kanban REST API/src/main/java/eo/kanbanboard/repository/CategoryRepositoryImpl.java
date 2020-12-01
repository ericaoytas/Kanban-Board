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

}
