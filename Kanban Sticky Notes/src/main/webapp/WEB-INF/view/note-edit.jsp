<%@ include file= "header.jsp" %>

<div id="note_edit">

		<h3>Edit Note</h3>
		

	
		<form:form action="saveNote" modelAttribute="note" method="POST">

			<!-- need to associate this data with board id -->
			<c:if test="${editType.equals('update')}">
			    <form:hidden path="id" />
				<c:url var="backLink" value="/form/view">
					<c:param name="noteId" value="${note.id}" />
				</c:url>
			</c:if>
			
			<c:if test="${editType.equals('add')}">
				<c:url var="backLink" value="/board/"/>
			</c:if>

			<form:hidden path="category.id" />
			
			
			<table>
				<tbody>
					<tr>
						<td><label>Name:</label></td>
						<td><form:input path="name" /></td>
					</tr>
					
					<tr>
						<td><label>Description:</label></td>
						<td><form:textarea path="description" /></td>
					</tr>
					
					<tr>
					    <td>Color:</td>
					    <td>
					    	<c:forEach var="tempColor" items="${colors}">
					    	${tempColor.name}: <form:radiobutton path="color.id" value="${tempColor.id}"/> <br/>
					    	</c:forEach>
					    </td>
					</tr>
					
					<tr>
						<td><label></label></td>
						<td><input type="submit" value="Save" class="save" /></td>
					</tr>
				
				</tbody>
			</table>
		
		
		</form:form>
	
		<div style="clear; both;"></div>
		
		
		
		<a href="${backLink}">Cancel</a>

</div>

<%@ include file= "footer.jsp" %>