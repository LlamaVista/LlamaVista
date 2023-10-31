package hoon.capstone.llama.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FetchService {
    private final RestTemplate restTemplate;
    private final String flaskEndpoint;

    public FetchService(RestTemplate restTemplate, @Value("${flask.endpoint}") String flaskEndpoint) {
        this.restTemplate = restTemplate;
        this.flaskEndpoint = flaskEndpoint;
    }

    public String fetchData(String blobName) {
        String url = flaskEndpoint + "?blob_name=" + blobName;
        return restTemplate.getForObject(url, String.class);
    }
}
