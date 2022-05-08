package co.com.sofka.crud.services;

import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase tipo servicio para el manejo de la categoría
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@Service
public class CategoryService {

    /**
     * Repositorio de Categoría
     */
    @Autowired
    CategoryRepository categoryRepository;

    /**
     * Devuelve una lista de Categoría con todas las categorías del sistema
     *
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Iterable<Category> list() {
        return categoryRepository.findAll();
    }

    /**
     * Crea una nueva categoría en el sistema
     *
     * @param category
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    /**
     * Elimina una categoría del sistema
     *
     * @param id
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public void delete(Long id) {
        categoryRepository.delete(get(id));
    }

    /**
     * Devuelve una categoría
     *
     * @param id
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Category get(Long id) {
        return categoryRepository.findById(id).orElseThrow();
    }
}
