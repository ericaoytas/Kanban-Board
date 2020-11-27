package eo.kanbanboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eo.kanbanboard.entity.Color;

public interface ColorRepository extends JpaRepository<Color, Integer> {

}
