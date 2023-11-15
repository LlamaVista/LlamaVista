package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.Grammar;
import hoon.capstone.llama.domain.Settings;
import hoon.capstone.llama.service.RequestService;
import hoon.capstone.llama.service.SettingsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Tag(name = "Request", description = "flask에 request")
@RestController
public class RequestController {
    private final RequestService requestService;
    private final SettingsService settingsService;

    @Value("${flask.app.url}")
    private String URL;

    public RequestController(RequestService requestService, SettingsService settingsService) {
        this.requestService = requestService;
        this.settingsService = settingsService;
    }

    @PostMapping("/send")
    public String sendDataToFlask(@RequestParam("file") MultipartFile file,
                                  @RequestParam("grammar") Grammar grammar,
                                  @RequestParam("maxTokens") int maxTokens,
                                  @RequestParam("temperature") double temperature,
                                  @RequestParam("numberMessages") int numberMessages,
                                  @RequestParam("presencePenalty") double presencePenalty,
                                  @RequestParam("frequencyPenalty") double frequencyPenalty,
                                  @RequestParam("userMessage") String userMessages) {

        Settings settings = new Settings(grammar, maxTokens, temperature, numberMessages, presencePenalty, frequencyPenalty);
        settingsService.updateSettings(settings);

        try {
            return requestService.sendFileAndData(file, settings, userMessages, URL);
        } catch (IOException e) {
            return "Error: " + e.getMessage();
        }
    }
}
