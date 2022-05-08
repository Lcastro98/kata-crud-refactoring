package co.com.sofka.crud.dto;

import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.models.Todo;
import org.modelmapper.ModelMapper;

/**
 * Clase para copiar o mapear propiedades de las entidades a los DTOs y viceversa
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
public class SingleModelMapper {
    private final ModelMapper mapper = new ModelMapper();

    /**
     * Mapea el objeto categoryDto a Category
     *
     * @param categoryDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Category mapToCategory(CategoryDto categoryDto) {
        return mapper.map(categoryDto, Category.class);
    }

    /**
     * Mapea el objeto todoDto a Todo
     *
     * @param todoDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Todo mapToTodo(TodoDto todoDto) {
        return mapper.map(todoDto, Todo.class);
    }

    /**
     * Mapea el objeto category a CategoryDto
     *
     * @param category
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public CategoryDto mapToCategoryDto(Category category) {
        return mapper.map(category, CategoryDto.class);
    }

    /**
     * Mapea el objeto todo a TodoDto
     *
     * @param todo
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public TodoDto mapToTodoDto(Todo todo) {
        return mapper.map(todo, TodoDto.class);
    }

}
