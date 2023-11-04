package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.Settings;
import hoon.capstone.llama.service.RequestService;
import hoon.capstone.llama.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class RequestController {
    private final RequestService requestService;
    private final SettingsService settingsService;

    public RequestController(RequestService requestService, SettingsService settingsService) {
        this.requestService = requestService;
        this.settingsService = settingsService;
    }

    @PostMapping("/send")
    public String sendDataToFlask(@RequestParam("file") MultipartFile file,
                                  @RequestParam("maxTokens") int maxTokens,
                                  @RequestParam("temperature") double temperature,
                                  @RequestParam("numberMessages") int numberMessages,
                                  @RequestParam("presencePenalty") double presencePenalty,
                                  @RequestParam("frequencyPenalty") double frequencyPenalty,
                                  @RequestParam("userMessage") String userMessages) {

        Settings settings = new Settings(maxTokens, temperature, numberMessages, presencePenalty, frequencyPenalty);
        settingsService.updateSettings(settings);

        try {
            return requestService.sendFileAndData(file, settings, userMessages, "http://localhost:5000/process");
        } catch (IOException e) {
            return "Error: " + e.getMessage();
        }
    }
}
