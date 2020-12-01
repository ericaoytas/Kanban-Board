package eo.kanbanboard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eo.kanbanboard.entity.Color;
import eo.kanbanboard.repository.ColorRepository;

@Service
public class NoteDetailServiceImpl implements NoteDetailService{

	@Autowired
	ColorRepository colorRepository;
	
	@Override
	public List<Color> getColors() {
		return colorRepository.findAll();
	}

	@Override
	public Color getColorById(int id) {
		Optional<Color> result = colorRepository.findById(id);
		Color color = null;
		if (result.isPresent()) {
			color = result.get();
		}
		return color;
	}

}
