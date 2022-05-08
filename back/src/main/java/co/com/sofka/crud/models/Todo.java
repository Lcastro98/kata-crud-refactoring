package co.com.sofka.crud.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
import javax.persistence.ManyToOne;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;

/**
 * Entidad de los todo
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
@Table(name = "todo")
public class Todo {

    /**
     * Identificador de la tupla
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, name = "todo_id")
    private Long id;

    /**
     * Texto del todo
     */
    @Column(name = "todo_text")
    private String text;

    /**
     * Estado del todo
     */
    @Column(name = "todo_completed")
    private boolean completed;

    /**
     * Punto de enlace entre la entidad Todo y Categoría
     * (una categoría puede tener muchos todos)
     */
    @ManyToOne(
            fetch = FetchType.LAZY,
            targetEntity = Category.class)
    @JoinColumn(name = "category")
    @JsonBackReference
    private Category category;

}
