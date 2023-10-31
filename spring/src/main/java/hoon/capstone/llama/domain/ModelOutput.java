package hoon.capstone.llama.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "output")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ModelOutput {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "key1", nullable = false)
    private String key1;

    @Column(name = "key2", nullable = false)
    private String key2;
}