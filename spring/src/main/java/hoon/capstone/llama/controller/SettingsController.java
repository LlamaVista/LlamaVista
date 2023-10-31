package hoon.capstone.llama.controller;


import hoon.capstone.llama.domain.Settings;
import hoon.capstone.llama.service.SettingsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/settings")
public class SettingsController {

    private final SettingsService settingsService;

    public SettingsController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @GetMapping
    public Settings getSettings() {
        return settingsService.getSettings();
    }

    @PutMapping
    public Settings updateSettings(@RequestBody Settings settings) {
        return settingsService.updateSettings(settings);
    }
}
