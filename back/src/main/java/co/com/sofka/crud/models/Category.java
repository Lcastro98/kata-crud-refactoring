package co.com.sofka.crud.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.FetchType;
import javax.persistence.CascadeType;
import java.util.List;

/**
 * Entidad de los categoría
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "category")
public class Category {

    /**
     * Identificador de la tupla
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, name = "cat_id")
    private Long id;

    /**
     * Título de la categoría
     */
    @Column(name = "cat_title")
    private String title;

    /**
     * Punto de enlace entre la entidad Categoría y Todo
     * (una categoría puede tener muchos todos)
     */
    @OneToMany(
            fetch = FetchType.EAGER,
            targetEntity = Todo.class,
            cascade = CascadeType.REMOVE,
            mappedBy = "category")
    @JsonManagedReference
    private List<Todo> todo;
}
