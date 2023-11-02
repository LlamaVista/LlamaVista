package hoon.capstone.llama.service;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.models.BlobItem;
import com.azure.storage.blob.models.BlobStorageException;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileService {
    public final BlobServiceClient blobServiceClient;

    public FileService(BlobServiceClient blobServiceClient) {
        this.blobServiceClient = blobServiceClient;
    }

    public URI upload(MultipartFile file) throws Exception {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient("file");
        BlobClient blobClient = containerClient.getBlobClient(file.getOriginalFilename());

        blobClient.upload(file.getInputStream(), file.getSize(), true);

        return URI.create(blobClient.getBlobUrl());
    }

    public void delete(String filename) throws Exception {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient("file");
        BlobClient blobClient = containerClient.getBlobClient(filename);
        blobClient.delete();
    }

    public List<String> listFiles() {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient("file");
        List<String> fileList = new ArrayList<>();

        for (BlobItem blobItem : containerClient.listBlobs()) {
            fileList.add(blobItem.getName());
        }

        return fileList;
    }

    public Resource download(String filename) throws IOException {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient("file");
        BlobClient blobClient = containerClient.getBlobClient(filename);

        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
            blobClient.downloadStream(outputStream);
            return new ByteArrayResource(outputStream.toByteArray());
        } catch (BlobStorageException e) {
            // Blob Storage 관련 예외 처리
            throw new IOException("Blob Storage에서 파일을 다운로드하는 중 오류 발생: " + e.getMessage());
        }
    }
}
