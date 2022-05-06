package co.com.sofka.crud.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

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
