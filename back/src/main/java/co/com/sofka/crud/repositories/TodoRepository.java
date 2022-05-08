package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.Todo;
import org.springframework.data.repository.CrudRepository;

/**
 * Repositorio de la entidad Todo
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 */
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
