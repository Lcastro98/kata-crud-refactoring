package co.com.sofka.crud.dto;

import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.models.Todo;
import org.modelmapper.ModelMapper;

public class SingleModelMapper {
    private final ModelMapper mapper = new ModelMapper();

    public Category mapToCategory(CategoryDto categoryDto) {
        return mapper.map(categoryDto, Category.class);
    }

    public Todo mapToTodo(TodoDto todoDto) {
        return mapper.map(todoDto, Todo.class);
    }

    public CategoryDto mapToCategoryDto(Category category) {
        return mapper.map(category, CategoryDto.class);
    }

    public TodoDto mapToTodoDto(Todo todo) {
        return mapper.map(todo, TodoDto.class);
    }

}
