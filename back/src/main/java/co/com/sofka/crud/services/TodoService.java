package co.com.sofka.crud.services;

import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase tipo servicio para el manejo del todo
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@Service
public class TodoService {

    /**
     * Repositorio de Todo
     */
    @Autowired
    private TodoRepository repository;

    /**
     * Devuelve una lista de Todo con todos las todos del sistema
     *
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Iterable<Todo> list() {
        return repository.findAll();
    }

    /**
     * Crea un nuevo todo en el sistema
     *
     * @param todo
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Todo save(Todo todo) {
        return repository.save(todo);
    }

    /**
     * Elimina una categoría del sistema
     *
     * @param id
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public void delete(Long id) {
        repository.delete(get(id));
    }

    /**
     * Devuelve una categoría
     *
     * @param id
     * @return
     * @author Lorena Castro <Lcastro0398@gmail.com>
     * @since 1.0.0
     */
    public Todo get(Long id) {
        return repository.findById(id).orElseThrow();
    }

}
