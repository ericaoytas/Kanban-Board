<%@ include file= "header.jsp" %>

<div id="note_view">
	<table>
		<tr>
			<td>Property</td>
			<td>Value</td>
		</tr>
		<tr>
			<td>ID</td>
			<td>${note.id}</td>
		</tr>
		<tr>
			<td>Name</td>
			<td>${note.name}</td>
		</tr>
		<tr>
			<td>Description:</td>
			<td>${note.description}</td>
		</tr>
		<tr>
			<td>Color</td>
			<td>${note.color.name}</td>
		</tr>
		
		<!-- TODO get rid of these last two, once implement drag and drop, and multiple boards -->
		<tr>
			<td>Category</td>
			<td>${note.category.name}</td>
		</tr>
		<tr>
			<td>Board</td>
			<td>${note.category.board.name}</td>
		</tr>
	</table>
	
	<c:url var="editLink" value="/form/edit">
			<c:param name="noteId" value="${note.id}" />
	</c:url>
	
	<a href="${editLink}">Edit Note</a>
	<p>
		<a href="${pageContext.request.contextPath}/board/">Back to List</a>
	</p>
	
</div>



<%@ include file= "footer.jsp" %>