package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.Settings;
import hoon.capstone.llama.service.SettingsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class SettingsControllerTest {

    @Mock
    private SettingsService settingsService;

    @InjectMocks
    private SettingsController settingsController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getSettings_shouldReturnSettings() {
        Settings mockSettings = new Settings();
        mockSettings.setMaxTokens(2000);

        when(settingsService.getSettings()).thenReturn(mockSettings);

        Settings settings = settingsController.getSettings();
        assertNotNull(settings);
        assertEquals(2000, settings.getMaxTokens());
    }

    @Test
    void updateSettings_shouldReturnUpdatedSettings() {
        Settings inputSettings = new Settings();
        inputSettings.setMaxTokens(3000);

        Settings expectedSettings = new Settings();
        expectedSettings.setMaxTokens(3000);

        when(settingsService.updateSettings(inputSettings)).thenReturn(expectedSettings);

        Settings updatedSettings = settingsController.updateSettings(inputSettings);
        assertNotNull(updatedSettings);
        assertEquals(3000, updatedSettings.getMaxTokens());
    }
}