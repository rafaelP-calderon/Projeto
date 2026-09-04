package school.sptech.projeto;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class RestauranteController {

    private final RestauranteRepository repository;

    public RestauranteController(RestauranteRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/restaurantes")
    public Iterable<Restaurante> listar() {
        return repository.findAll();
    }
}
