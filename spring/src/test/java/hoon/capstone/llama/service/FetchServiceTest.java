package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.repository.ModelOutputRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class FetchServiceTest {

    private FetchService fetchService;

    @Mock
    private RestTemplate restTemplate;
    @Mock
    private ModelOutputRepository modelOutputRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        fetchService = new FetchService(restTemplate, "http://flask-endpoint", modelOutputRepository);
    }

    @Test
    void fetchData_Success() {
        String blobName = "testBlob";
        String flaskResponse = "[{\"key1\":\"value1\", \"key2\":\"value11\"}]";
        ResponseEntity<String> responseEntity = new ResponseEntity<>(flaskResponse, HttpStatus.OK);

        when(restTemplate.getForEntity("http://flask-endpoint?blob_name=" + blobName, String.class))
                .thenReturn(responseEntity);

        List<ModelOutput> mockOutputs = List.of(new ModelOutput("value1", "value11"));
        when(modelOutputRepository.findAll()).thenReturn(mockOutputs);

        List<ModelOutput> result = fetchService.fetchData(blobName);

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("value1", result.get(0).getKey1());
        assertEquals("value11", result.get(0).getKey2());

        verify(restTemplate, times(1)).getForEntity("http://flask-endpoint?blob_name=" + blobName, String.class);
        verify(modelOutputRepository, times(1)).findAll();
    }

    @Test
    void fetchData_Failure() {
        String blobName = "testBlob";
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        when(restTemplate.getForEntity("http://flask-endpoint?blob_name=" + blobName, String.class))
                .thenReturn(responseEntity);

        List<ModelOutput> result = fetchService.fetchData(blobName);

        assertNull(result);
        verify(restTemplate, times(1)).getForEntity("http://flask-endpoint?blob_name=" + blobName, String.class);
        verify(modelOutputRepository, never()).findAll();
    }
}
