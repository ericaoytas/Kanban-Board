<%@ include file= "header.jsp" %>

<div>

	<form:form action="saveCategory" modelAttribute="category" method="POST">
	
		<table>
				<tbody>
					<tr>
						<td><label>Name:</label></td>
						<td><form:input path="name" /></td>
					</tr>
					
					<tr>
						<td><label></label></td>
						<td><input type="submit" value="Save" class="save" /></td>
					</tr>
				
				</tbody>
			</table>
	</form:form>
</div>

<%@ include file= "footer.jsp" %>