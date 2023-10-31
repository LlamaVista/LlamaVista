package hoon.capstone.llama;

import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.repository.ModelOutputRepository;
import hoon.capstone.llama.service.FileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static org.hibernate.validator.internal.util.Contracts.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class IntegrationTest {

    @Autowired
    private FileService fileService;
    @Autowired
    private BlobServiceClient blobServiceClient;
    @Autowired
    private ModelOutputRepository outputRepository;

    private final String testFileName = "testFile.json";
    private final String containerName = "file";

    @BeforeEach
    void setup() throws Exception {
        // JSON 파일 내용 준비
        String jsonContent = "["
                + "{\"key1\":\"value1\", \"key2\":\"value11\"},"
                + "{\"key1\":\"value2\", \"key2\":\"value12\"},"
                + "{\"key1\":\"value3\", \"key2\":\"value13\"},"
                + "{\"key1\":\"value4\", \"key2\":\"value14\"},"
                + "{\"key1\":\"value5\", \"key2\":\"value15\"}"
                + "]";

        // JSON 파일 업로드 준비
        MultipartFile mockFile = new MockMultipartFile(
                "file",
                testFileName,
                "application/json",
                jsonContent.getBytes()
        );

        // 파일 업로드
        fileService.upload(mockFile);
    }

    @Test
    void uploadFile() {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        assertTrue(containerClient.getBlobClient(testFileName).exists(), "File should be uploaded.");
    }

    @Test
    void deleteFile() throws Exception {
        fileService.delete(testFileName);
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        assertFalse(containerClient.getBlobClient(testFileName).exists(), "File should be deleted.");
    }

    @Test
    void verifyDataSavedToDatabase() {
        List<ModelOutput> outputs = outputRepository.findAll();
        assertFalse(outputs.isEmpty(), "Data should be saved in the database.");

        assertEquals("VALUE1", outputs.get(0).getKey1());
        assertEquals("VALUE11", outputs.get(0).getKey2());
        assertEquals("VALUE2", outputs.get(1).getKey1());
        assertEquals("VALUE12", outputs.get(1).getKey2());
    }
}
