package hoon.capstone.llama.service;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


class FetchServiceTest {

    @Mock
    private RestTemplate restTemplate;
    private FetchService fetchService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        // 테스트를 위한 Flask 엔드포인트 수정
        fetchService = new FetchService(restTemplate, "http://localhost:5000/read-json");
    }

    @Test
    void fetchData() {
        String blobName = "testFile.json";
        String expectedResponse = "Response from Flask";

        // 실제 호출될 URL을 고려하여 모킹
        String url = "http://localhost:5000/read-json?blob_name=" + blobName;
        when(restTemplate.getForObject(url, String.class)).thenReturn(expectedResponse);

        String actualResponse = fetchService.fetchData(blobName);

        assertEquals(expectedResponse, actualResponse, "The response should match the expected value");
    }
}