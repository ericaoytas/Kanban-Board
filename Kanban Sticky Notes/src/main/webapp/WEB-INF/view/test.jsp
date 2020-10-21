<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Test</title>
</head>
<body>
	<table>
		<tr>
			<th>ID</th>
			<th>Name</th>
		</tr>
		<c:forEach var="board" items="${boards}">
			<tr>
				<td> ${board.id} </td>
				<td> ${board.name} </td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>