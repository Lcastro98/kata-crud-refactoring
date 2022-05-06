package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.SingleModelMapper;
import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoService todoService;

    private final SingleModelMapper modelMapper;

    public TodoController(TodoService todoService, SingleModelMapper modelMapper) {
        this.todoService = todoService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "api/todos")
    public Iterable<Todo> list(){
        return todoService.list();
    }
    
    @PostMapping(value = "api/todo")
    public TodoDto save(@RequestBody TodoDto todoDto){
        return modelMapper.mapToTodoDto(todoService.save(modelMapper.mapToTodo(todoDto)));
    }

    @PutMapping(value = "api/todo")
    public TodoDto update(@RequestBody TodoDto todoDto){
        if(todoDto.getId() != null){
            return modelMapper.mapToTodoDto(todoService.save(modelMapper.mapToTodo(todoDto)));
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        todoService.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public Todo get(@PathVariable("id") Long id){
        return todoService.get(id);
    }

}
