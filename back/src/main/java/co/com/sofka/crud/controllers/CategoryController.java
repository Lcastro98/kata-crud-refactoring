package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dto.CategoryDto;
import co.com.sofka.crud.dto.SingleModelMapper;
import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    private final CategoryService categoryService;

    private final SingleModelMapper modelMapper;

    public CategoryController(CategoryService categoryService, SingleModelMapper modelMapper) {
        this.categoryService = categoryService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "api/categories")
    public Iterable<Category> list(){
        return categoryService.list();
    }

    @PostMapping(value = "api/category")
    public CategoryDto save(@RequestBody CategoryDto categoryDto){
        return modelMapper.mapToCategoryDto(categoryService.save(modelMapper.mapToCategory(categoryDto)));
    }

    @PutMapping(value = "api/category")
    public CategoryDto update(@RequestBody CategoryDto categoryDto){
        if(categoryDto.getId() != null){
            return modelMapper.mapToCategoryDto(categoryService.save(modelMapper.mapToCategory(categoryDto)));
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/category/{id}")
    public void delete(@PathVariable("id")Long id){
        categoryService.delete(id);
    }
}
