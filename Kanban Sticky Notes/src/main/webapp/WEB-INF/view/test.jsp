<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Test</title>
</head>
<body>
	<table>
		<tr>
			<th>ID</th>
			<th>Name</th>
		</tr>
		<c:forEach var="tempBoard" items="${boards}">
			<tr>
				<td> ${tempBoard.id} </td>
				<td> ${tempBoard.name} </td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>