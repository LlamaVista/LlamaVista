package hoon.capstone.llama.service;

import hoon.capstone.llama.domain.Settings;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class SettingsServiceTest {

    private SettingsService settingsService;

    @BeforeEach
    void setUp() {
        settingsService = new SettingsService();
    }

    @Test
    void getSettings_shouldReturnDefaultSettings() {
        Settings settings = settingsService.getSettings();
        assertNotNull(settings);
        assertEquals(6336, settings.getMaxTokens());
    }

    @Test
    void updateSettings_shouldUpdateValues() {
        Settings newSettings = new Settings();
        newSettings.setMaxTokens(2000);
        Settings updatedSettings = settingsService.updateSettings(newSettings);
        assertNotNull(updatedSettings);
        assertEquals(2000, updatedSettings.getMaxTokens());
    }
}