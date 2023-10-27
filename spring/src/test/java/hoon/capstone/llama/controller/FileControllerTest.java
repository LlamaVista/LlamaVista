package hoon.capstone.llama.controller;

import hoon.capstone.llama.service.FileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// 모의 객체(Mock) 이용하여 test
class FileControllerTest {

    private MockMvc mockMvc;

    @Mock
    private FileService fileService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        FileController fileController = new FileController(fileService);
        mockMvc = MockMvcBuilders.standaloneSetup(fileController).build();
    }

    @Test
    void uploadFile() throws Exception {
        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "test.txt",
                "text/plain",
                "This is a test file".getBytes()
        );

        URI uri = URI.create("http://example.com/test.txt");
        when(fileService.upload(any())).thenReturn(uri);

        mockMvc.perform(multipart("/upload").file(mockFile))
                .andExpect(status().isOk())
                .andExpect(content().string(uri.toString()));

        verify(fileService, times(1)).upload(any(MultipartFile.class));
    }

    @Test
    void deleteFile() throws Exception {
        String filename = "test.txt";

        mockMvc.perform(delete("/delete/{filename}", filename)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("File deleted successfully."));

        verify(fileService, times(1)).delete(filename);
    }
}