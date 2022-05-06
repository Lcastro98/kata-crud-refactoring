package co.com.sofka.crud.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String title;
    private List<TodoDto> todo;
}
