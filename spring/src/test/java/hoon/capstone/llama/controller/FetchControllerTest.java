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

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class FetchControllerTest {

    private MockMvc mockMvc;

    @Mock
    private FetchService fetchService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        FetchController fetchController = new FetchController(fetchService);
        mockMvc = MockMvcBuilders.standaloneSetup(fetchController).build();
    }

    @Test
    void fetchData_Success() throws Exception {
        String blobName = "testBlob";
        List<ModelOutput> mockOutputs = List.of(new ModelOutput("value1", "value11"));

        when(fetchService.fetchData(blobName)).thenReturn(mockOutputs);

        mockMvc.perform(get("/fetch")
                        .param("blobName", blobName)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].key1", is("value1")))
                .andExpect(jsonPath("$[0].key2", is("value11")));
    }
}
