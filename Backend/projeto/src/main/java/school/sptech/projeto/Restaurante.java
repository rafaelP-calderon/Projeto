package school.sptech.projeto;

public class Restaurante {
    private Integer id;
    private String imagem;
    private String nome;
    private String descricao;
    private String local;
    private Double nota;

    public Restaurante() {
    }

    public Restaurante(Integer id, String imagem, String nome, String descricao, String local, Double nota) {
        this.id = id;
        this.imagem = imagem;
        this.nome = nome;
        this.descricao = descricao;
        this.local = local;
        this.nota = nota;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }
}
