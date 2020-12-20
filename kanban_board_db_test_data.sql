USE kanban_board_db;


select * from board;

-- board
INSERT INTO 
	board (name)
VALUES
	('Weekly Chores'), ('Kanban Project'), ('Bucketlist'), ('Shopping'), ('Activities');

-- categories
INSERT INTO
	category (name, board_id)
VALUES
	('To Buy', 2), ('To Clean', 2), ('Miscellaneous', 2),
    ('To Do', 3), ('In Progress', 3), ('Review', 3), ('Completed', 3),
    ('Foods To Eat', 4), ('Places to Visit', 4);

select * from category;
-- notes
INSERT INTO
	note (name, description, color_id, category_id)
VALUES
	('My Car', 'Take to carwash and vaccuum the inside.', 1, 2), 
    ('My Bedroom', 'Fold the blacnkets and vacuum the floor.', 2, 2),
    ('Brother\'s Car', 'He said he\'ll give me 20 bucks.', 3, 2),
    ('Make App Responsive', 'For Mobile view', 1, 3),
    ('Set Up Test Data', 'Insert boards, categories, and notes into mySQL', 2, 5),
    ('Pork Blood', 'A filipino delecacy', 4, 8),
    ('Italy', 'Get some authentic pasta', 5, 9),
    ('New York', 'Love the culture', 1, 9),
    ('Webcam', 'Budget: $50', 2, 1),
    ('Do the Laundry', 'Do it by Thursday please.', 3, 2),
    ('Task A', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque. ', 4, 3),
    ('Task B', 'Amet aliquam id diam maecenas ultricies. Pellentesque adipiscing commodo elit at imperdiet. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Habitant morbi tristique senectus et netus et. Suspendisse faucibus interdum posuere lorem ipsum dolor. Aliquet porttitor lacus luctus accumsan. Risus viverra adipiscing at in tellus integer feugiat. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Adipiscing tristique risus nec feugiat in. Fames ac turpis egestas maecenas. Faucibus pulvinar elementum integer enim neque volutpat. Convallis tellus id interdum velit laoreet id.', 5, 6),
    ('Task C', 'Neque convallis a cras semper. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Enim ut sem viverra aliquet eget sit amet tellus. Sed euismod nisi porta lorem. Id diam vel quam elementum pulvinar etiam non quam lacus. ', 5, 7),
    ('Task D', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Vel pretium lectus quam id leo in vitae turpis. At consectetur lorem donec massa sapien. Et ultrices neque ornare aenean euismod elementum. Massa tincidunt dui ut ornare lectus sit amet est placerat. Dapibus ultrices in iaculis nunc sed augue. Congue eu consequat ac felis donec et odio pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Tempor nec feugiat nisl pretium. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sed enim ut sem viverra aliquet eget sit. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Purus gravida quis blandit turpis. Ultricies lacus sed turpis tincidunt. Aliquam malesuada bibendum arcu vitae elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Justo laoreet sit amet cursus sit amet. Ultrices gravida dictum fusce ut placerat. Convallis posuere morbi leo urna molestie at elementum eu. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Non nisi est sit amet facilisis magna etiam. Velit euismod in pellentesque massa placerat duis ultricies lacus. Dignissim sodales ut eu sem. Aliquam faucibus purus in massa. Ut ornare lectus sit amet est placerat in. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Varius vel pharetra vel turpis nunc. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Quis enim lobortis scelerisque fermentum dui faucibus in. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Dignissim convallis aenean et tortor at risus viverra adipiscing. Mi ipsum faucibus vitae aliquet nec. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.', 3, 9);
    
SELECT * FROM note;

INSERT INTO 
	tag(name)
VALUES
	('important'), ('not important'), ('takes a long time');