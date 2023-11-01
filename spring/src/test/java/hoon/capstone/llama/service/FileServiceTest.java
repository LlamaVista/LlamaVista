package hoon.capstone.llama.service;

import com.azure.core.http.rest.PagedIterable;
import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.models.BlobItem;
import com.azure.storage.blob.specialized.BlobInputStream;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.core.io.Resource;
import org.springframework.mock.web.MockMultipartFile;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


// method가 제대로 호출 되었는지 테스트
// 실제 파일이 올라 갔는지는 integration test에서 진행
class FileServiceTest {

    @Mock
    private BlobServiceClient blobServiceClient;
    @Mock
    private BlobContainerClient containerClient;
    @Mock
    private BlobClient blobClient;
    @Mock
    private PagedIterable<BlobItem> blobItems;
    private FileService fileService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        fileService = new FileService(blobServiceClient);
        when(blobServiceClient.getBlobContainerClient(anyString())).thenReturn(containerClient);
        when(containerClient.getBlobClient(anyString())).thenReturn(blobClient);
    }

    @Test
    void testUpload() throws Exception {
        // 준비: Mock 파일 생성
        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "test.txt",
                "text/plain",
                "This is a test file".getBytes()
        );

        String expectedUrl = "http://example.com/test.txt";
        when(blobClient.getBlobUrl()).thenReturn(expectedUrl);
        URI result = fileService.upload(mockFile);
        assertEquals(URI.create(expectedUrl), result);
        verify(blobClient, times(1)).upload(any(InputStream.class), eq(mockFile.getSize()), eq(true));
    }

    @Test
    void testDelete() throws Exception {
        String filename = "test.txt";
        fileService.delete(filename);
        verify(blobClient, times(1)).delete();
    }
}
