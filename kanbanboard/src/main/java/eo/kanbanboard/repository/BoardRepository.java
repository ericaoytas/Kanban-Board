package eo.kanbanboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eo.kanbanboard.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Integer>{

}
