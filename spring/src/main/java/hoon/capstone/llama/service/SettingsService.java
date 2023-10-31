package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.Settings;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class SettingsService {

    private Settings settings;

    public SettingsService() {
        this.settings = new Settings();
        this.settings.setMaxTokens(6336);
    }

    @Cacheable("settings")
    public Settings getSettings() {
        return settings;
    }

    @CachePut(value = "settings", key = "#settings.maxTokens")
    public Settings updateSettings(Settings settings) {
        this.settings = settings;
        return this.settings;
    }
}
