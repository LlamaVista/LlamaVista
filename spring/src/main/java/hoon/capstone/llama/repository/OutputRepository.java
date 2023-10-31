package hoon.capstone.llama.repository;

import hoon.capstone.llama.domain.ModelOutput;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutputRepository extends JpaRepository<ModelOutput, Long> {
}
