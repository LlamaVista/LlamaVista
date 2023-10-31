package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.service.FetchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class FetchControllerTest {

    @Mock
    private FetchService fetchService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        FetchController fetchController = new FetchController(fetchService);
        mockMvc = MockMvcBuilders.standaloneSetup(fetchController).build();
    }

    @Test
    void fetchDataTest() throws Exception {
        ModelOutput expectedOutput = new ModelOutput();
        expectedOutput.setKey1("value1");
        expectedOutput.setKey2("value2");
        when(fetchService.fetchData(anyString())).thenReturn(expectedOutput);

        mockMvc.perform(get("/fetch?blobName=testFile.json"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(content().json("{\"key1\":\"value1\",\"key2\":\"value2\"}"));
    }
}
