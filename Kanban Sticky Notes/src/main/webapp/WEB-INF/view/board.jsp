<%@ include file= "header.jsp" %>
	<div>
		<section id="board_title">
		
			<!-- TODO: Insert board title -->
			<h2>${board.name}</h2>
			
		</section>
		
		<section id="board_notes">
			<div class="flex-container">
			
				<!-- TODO: Loop for all categories -->
				<c:forEach var="tempCategory" items="${categories}">
					<div class="category_group">
						
						<div class="notes_table">
							
							<h4>${tempCategory.name}</h4>
							
							<!-- construct an "add" link with customer id -->
							<c:url var="addNote" value="/form/addNote">
								<c:param name="categoryId" value="${tempCategory.id}" />
								<c:param name="editType" value="add" />
							</c:url>
							
							<a href="${addNote}">Create New Note</a>
							
							<!-- TODO Add new note button -->
							
							
							<table>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Action</th>
								</tr>						
								
								<c:forEach var="tempNote" items="${tempCategory.notes}">	
								
									<!-- construct an "update" link with customer id -->
									<c:url var="viewLink" value="/form/view">
										<c:param name="noteId" value="${tempNote.id}" />
									</c:url>					
				
									<!-- construct an "delete" link with customer id -->
									<c:url var="deleteLink" value="/board/delete">
										<c:param name="noteId" value="${tempNote.id}" />
									</c:url>
								
									<tr>
										<td>${tempNote.id}</td>
										<td>${tempNote.name}</td>
										<td>
											<!-- display the update link -->
											<a href="${viewLink}">View</a>
											|
											<a href="${deleteLink}"
											   onclick="if (!(confirm('Are you sure you want to delete this item?'))) return false">
											   Delete
										   </a>
										</td>
									</tr>							
								</c:forEach>

							</table>
							
						</div>
					</div>
				</c:forEach>
				

			</div>
		</section>
	</div>
<%@ include file= "footer.jsp" %>