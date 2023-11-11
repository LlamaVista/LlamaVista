package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.Settings;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class SettingsService {

    private Settings settings;

    @Cacheable("settings")
    public Settings getSettings() {
        return settings;
    }

    @CacheEvict(value = "settings", allEntries = true)
    public Settings updateSettings(Settings settings) {
        this.settings = settings;
        return this.settings;
    }
}