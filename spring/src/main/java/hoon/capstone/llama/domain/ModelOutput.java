package hoon.capstone.llama.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "output")
@Getter
@Setter
@ToString
public class ModelOutput {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "key1", nullable = false)
    private String key1;

    @Column(name = "key2", nullable = false)
    private String key2;

    public ModelOutput() {}

    public ModelOutput(String key1, String key2) {
        this.key1 = key1;
        this.key2 = key2;
    }
}