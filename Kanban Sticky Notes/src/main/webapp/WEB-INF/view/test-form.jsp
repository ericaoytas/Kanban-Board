<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>

<head>
	<title>Save Item</title>

</head>

<body>
	
	<div id="wrapper">
		<div id="header">
			<h2>Kanban Sticky Notes- Test Page</h2>
		</div>
	</div>

	<div id="container">
		<h3>Save Item</h3>
	
		<form:form action="saveBoard" modelAttribute="board" method="POST">

			<!-- need to associate this data with board id -->
			<form:hidden path="id" />
			
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
	
		<div style="clear; both;"></div>
		
		<p>
			<a href="${pageContext.request.contextPath}/test/list">Back to List</a>
		</p>
	
	</div>

</body>

</html>










