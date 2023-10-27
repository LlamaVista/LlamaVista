package hoon.capstone.llama.service;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;

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
}
