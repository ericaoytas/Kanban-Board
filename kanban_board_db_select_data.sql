use kanban_board_db;

-- TABLE: board

-- QUERY: select all boards
select * from board;

-- TABLE: category

-- QUERY:select all categories
select * from category; 
-- QUERY:select all boards and their categories
select b.id as board_id, b.name as board_name, c.id as category_id, c.name as category_name from board b join category c on b.id = c.board_id;

-- TABLE: notes

-- QUERY:select all notes
select * from note;
-- QUERY:select notes and categories and boards
select * 
	from (
		select b.id as board_id, b.name as board_name, c.id as category_id, c.name as category_name 
		from board b 
		join category c 
		on b.id = c.board_id
	) board_view
	join (
		select c.id as category_id, c.name as category_name, n.id as note_id, n.name as note_name, n.description 
		from category c 
		join note n 
		on n.category_id = c.id
	) category_view
	on board_view.category_id = category_view.category_id;