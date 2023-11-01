package hoon.capstone.llama.controller;

import hoon.capstone.llama.service.FileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

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
    @Test
    void listFiles() throws Exception {
        List<String> fileList = Arrays.asList("file1.txt", "file2.txt");
        when(fileService.listFiles()).thenReturn(fileList);

        mockMvc.perform(get("/list").accept(MediaType.APPLICATION_JSON)) // Ensure to accept JSON
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON)) // Check content type
                .andExpect(content().json("[\"file1.txt\",\"file2.txt\"]"));

        verify(fileService, times(1)).listFiles();
    }

    @Test
    void downloadFile() throws Exception {
        String filename = "test.txt";
        byte[] fileContent = "This is a test file".getBytes();
        Resource resource = new ByteArrayResource(fileContent);

        when(fileService.download(filename)).thenReturn(resource);

        mockMvc.perform(get("/download/{filename}", filename))
                .andExpect(status().isOk())
                .andExpect(content().bytes(fileContent));

        verify(fileService, times(1)).download(filename);
    }
}