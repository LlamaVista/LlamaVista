package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.repository.ModelOutputRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FetchService {
    private final RestTemplate restTemplate;
    private final String flaskEndpoint;
    private final ModelOutputRepository modelOutputRepository;

    public FetchService(RestTemplate restTemplate,
                        @Value("${flask.endpoint}") String flaskEndpoint,
                        ModelOutputRepository modelOutputRepository) {
        this.restTemplate = restTemplate;
        this.flaskEndpoint = flaskEndpoint;
        this.modelOutputRepository = modelOutputRepository;
    }

    public ModelOutput fetchData(String blobName) {
        String url = flaskEndpoint + "?blob_name=" + blobName;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            return modelOutputRepository.findById(1L).orElse(null);
        } else {
            return null;
        }
    }
}
