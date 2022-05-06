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

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="todo")
public class Todo {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(unique=true, nullable=false, name="todo_id")
    private Long id;

    @Column(name="todo_text")
    private String text;

    @Column(name="todo_completed")
    private boolean completed;

    @ManyToOne(
            fetch = FetchType.LAZY,
            targetEntity = Category.class,
            optional = false)
    @JoinColumn(name="category")
    @JsonBackReference
    private Category category;

}
