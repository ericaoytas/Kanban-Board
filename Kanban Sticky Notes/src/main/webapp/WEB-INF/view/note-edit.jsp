<%@ include file= "header.jsp" %>

<div id="note_edit">

		<h3>Edit Note</h3>
		
		<c:url var="viewLink" value="/form/view">
			<c:param name="noteId" value="${note.id}" />
		</c:url>
	
		<form:form action="saveNote" modelAttribute="note" method="POST">

			<!-- need to associate this data with board id -->
			<form:hidden path="id" />
			
			
			<table>
				<tbody>
					<tr>
						<td><label>Name:</label></td>
						<td><form:input path="name" /></td>
					</tr>
					
					<tr>
						<td><label>Description:</label></td>
						<td><form:input path="description" /></td>
					</tr>
					
					<tr>
						<form:hidden path="color.id" />
						<td><label>Color:</label></td>
						<td><form:input path="color.name" /></td>
					</tr>
					
					<tr>
						<form:hidden path="category.id" />
						<td><label>Category:</label></td>
						<td><form:input path="category.name" /></td>
					</tr>
					
					<tr>
						<td><label></label></td>
						<td><input type="submit" value="Save" class="save" /></td>
					</tr>
				
				</tbody>
			</table>
		
		
		</form:form>
	
		<div style="clear; both;"></div>
		
		
		
		<a href="${viewLink}">Back to View</a>

</div>

<%@ include file= "footer.jsp" %>