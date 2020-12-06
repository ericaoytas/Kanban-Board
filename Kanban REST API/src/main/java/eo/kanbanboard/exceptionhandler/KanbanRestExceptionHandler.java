package eo.kanbanboard.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class KanbanRestExceptionHandler {

	@ExceptionHandler
	public ResponseEntity<KanbanErrorResponse> handleException(ItemNotFoundException exc) {
		KanbanErrorResponse error = new KanbanErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<KanbanErrorResponse> handleException(Exception exc) {
		KanbanErrorResponse error = new KanbanErrorResponse(HttpStatus.BAD_REQUEST.value(), exc.getMessage(), System.currentTimeMillis());
		exc.printStackTrace();
		return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}
}
