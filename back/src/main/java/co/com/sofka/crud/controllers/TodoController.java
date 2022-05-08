package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.SingleModelMapper;
import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.services.TodoService;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador para el todo
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoService todoService;

    private final SingleModelMapper modelMapper;

    public TodoController(TodoService todoService, SingleModelMapper modelMapper) {
        this.todoService = todoService;
        this.modelMapper = modelMapper;
    }

    /**
     * Muestra una lista de todos
     *
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @GetMapping(value = "api/todos")
    public Iterable<Todo> list() {
        return todoService.list();
    }

    /**
     * Crea un nuevo todo
     *
     * @param todoDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @PostMapping(value = "api/todo")
    public TodoDto save(@RequestBody TodoDto todoDto) {
        return modelMapper.mapToTodoDto(todoService.save(modelMapper.mapToTodo(todoDto)));
    }

    /**
     * Actualiza un todo específico
     *
     * @param todoDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @PutMapping(value = "api/todo")
    public TodoDto update(@RequestBody TodoDto todoDto) {
        if (todoDto.getId() != null) {
            return modelMapper.mapToTodoDto(todoService.save(modelMapper.mapToTodo(todoDto)));
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    /**
     * Elimina un todo esspecífico
     *
     * @param id
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id") Long id) {
        todoService.delete(id);
    }

    /**
     * Trae un todo específico
     *
     * @param id
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @GetMapping(value = "api/{id}/todo")
    public Todo get(@PathVariable("id") Long id) {
        return todoService.get(id);
    }

}
