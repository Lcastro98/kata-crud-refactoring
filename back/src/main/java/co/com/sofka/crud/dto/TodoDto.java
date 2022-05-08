package co.com.sofka.crud.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * Objeto de trasnporte de datos para representar los todos
 *
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String text;
    private boolean completed;
    private CategoryDto categoryDto;
}
