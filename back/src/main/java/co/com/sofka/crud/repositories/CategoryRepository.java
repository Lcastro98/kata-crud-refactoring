package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Repositorio de la entidad Categoría
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 */
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
