<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>

<html>

<head>
	<title>Kanban Sticky Notes Database</title>
	
	<!-- reference our style sheet -->

	<link type="text/css"
		  rel="stylesheet"
		  href="${pageContext.request.contextPath}/resources/css/style.css" />

</head>

<body>
	<section id="board_table">
		<div id="wrapper">
			<div id="header">
				<h2>Board Table</h2>
			</div>
		</div>
		<div id="container">
		
			<div id="content">
			
				<!-- put new button: Add Board -->
			
				<input type="button" value="Add Board"
					   onclick="window.location.href='showFormForAdd'; return false;"
					   class="add-button"
				/>
			
				<!--  add our html table here -->
			
				<table>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
					
					<!-- loop over and print our customers -->
					<c:forEach var="tempBoard" items="${boards}">
					
						<!-- construct an "update" link with customer id -->
						<c:url var="updateLink" value="/test/showFormForUpdate">
							<c:param name="boardId" value="${tempBoard.id}" />
						</c:url>					
	
						<!-- construct an "delete" link with customer id -->
						<c:url var="deleteLink" value="/test/delete">
							<c:param name="boardId" value="${tempBoard.id}" />
						</c:url>					
						
						<tr>
							<td> ${tempBoard.id} </td>
							<td> ${tempBoard.name} </td>
							
							<td>
								<!-- display the update link -->
								<a href="${updateLink}">Update</a>
								|
								<a href="${deleteLink}"
								   onclick="if (!(confirm('Are you sure you want to delete this item?'))) return false">Delete</a>
							</td>
							
						</tr>
					
					</c:forEach>
							
				</table>
					
			</div>
		
		</div>
	</section>
	<section id="category_table">
		<div id="wrapper">
			<div id="header">
				<h2>Board Table</h2>
			</div>
		</div>
		<div id="container">
		
			<div id="content">
			
				<!-- put new button: Add Board -->
			
				<input type="button" value="Add Category"
					   onclick="window.location.href='showFormForAdd'; return false;"
					   class="add-button"
				/>
			
				<!--  add our html table here -->
			
				<table>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Board</th>
						<th>Action</th>
					</tr>
					
					<!-- loop over and print our customers -->
					<c:forEach var="tempCategory" items="${categories}">
					
						<!-- construct an "update" link with customer id -->
						<c:url var="updateLink" value="/test/showFormForUpdate">
							<c:param name="boardId" value="${tempCategory.id}" />
						</c:url>					
	
						<!-- construct an "delete" link with customer id -->
						<c:url var="deleteLink" value="/test/delete">
							<c:param name="boardId" value="${tempCategory.id}" />
						</c:url>					
						
						<tr>
							<td> ${tempCategory.id} </td>
							<td> ${tempCategory.name} </td>
							<td> ${tempCategory.board.name} </td>
							<td>
								<!-- display the update link -->
								<a href="${updateLink}">Update</a>
								|
								<a href="${deleteLink}"
								   onclick="if (!(confirm('Are you sure you want to delete this item?'))) return false">Delete</a>
							</td>
							
						</tr>
					
					</c:forEach>
							
				</table>
					
			</div>
		
		</div>
	</section>
</body>

</html>









