package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.repository.ModelOutputRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

import static javax.management.Query.eq;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FetchServiceTest {

    @Mock
    private RestTemplate restTemplate;

    @Mock
    private ModelOutputRepository modelOutputRepository;

    @InjectMocks
    private FetchService fetchService;

    @BeforeEach
    void setUp() {
        ResponseEntity<String> responseEntity = new ResponseEntity<>("Response", HttpStatus.OK);
        when(restTemplate.getForEntity(anyString(), ArgumentMatchers.<Class<String>>any()))
                .thenReturn(responseEntity);

        ModelOutput expectedOutput = new ModelOutput();
        expectedOutput.setId(1L);
        expectedOutput.setKey1("Value1");
        expectedOutput.setKey2("Value2");

        when(modelOutputRepository.findById(1L)).thenReturn(Optional.of(expectedOutput));
    }

    @Test
    void fetchData_ShouldFetchDataSuccessfully() {
        ModelOutput result = fetchService.fetchData("testBlobName");

        assertEquals(1L, result.getId());
        assertEquals("Value1", result.getKey1());
        assertEquals("Value2", result.getKey2());
    }
}
