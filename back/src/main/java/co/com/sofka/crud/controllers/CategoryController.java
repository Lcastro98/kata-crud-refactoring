package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.CategoryDto;
import co.com.sofka.crud.dto.SingleModelMapper;
import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.services.CategoryService;
import org.springframework.web.bind.annotation.*;


/**
 * Controlador para la categoría
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    private final CategoryService categoryService;

    private final SingleModelMapper modelMapper;

    public CategoryController(CategoryService categoryService, SingleModelMapper modelMapper) {
        this.categoryService = categoryService;
        this.modelMapper = modelMapper;
    }

    /**
     * Muestra una lista de categorías
     *
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @GetMapping(value = "api/categories")
    public Iterable<Category> list() {
        return categoryService.list();
    }

    /**
     * Crea ua nueva categoría
     *
     * @param categoryDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @PostMapping(value = "api/category")
    public CategoryDto save(@RequestBody CategoryDto categoryDto) {
        return modelMapper.mapToCategoryDto(categoryService.save(modelMapper.mapToCategory(categoryDto)));
    }

    /**
     * Actualiza una categpría específica
     *
     * @param categoryDto
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @PutMapping(value = "api/category")
    public CategoryDto update(@RequestBody CategoryDto categoryDto) {
        if (categoryDto.getId() != null) {
            return modelMapper.mapToCategoryDto(categoryService.save(modelMapper.mapToCategory(categoryDto)));
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    /**
     * Elimina una categoría específica
     *
     * @param id
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    @DeleteMapping(value = "api/category/{id}")
    public void delete(@PathVariable("id") Long id) {
        categoryService.delete(id);
    }
}
