package hoon.capstone.llama;

import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class FileConfig {
    @Value("${azure.storage.account-name}")
    private String accountName;

    @Value("${azure.storage.account-key}")
    private String accountKey;
    @Bean
    public BlobServiceClient blobServiceClient() {
        String connectionString = String.format("DefaultEndpointsProtocol=https;AccountName=%s;" +
                        "AccountKey=%s;EndpointSuffix=core.windows.net", accountName, accountKey);
        return new BlobServiceClientBuilder().connectionString(connectionString).buildClient();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
