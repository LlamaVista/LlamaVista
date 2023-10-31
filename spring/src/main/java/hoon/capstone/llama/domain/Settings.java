package hoon.capstone.llama.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Settings {
    private int maxTokens;
    private double temperature;
    private int numberMessages;
    private double presencePenalty;
    private double frequencyPenalty;

    public void setMaxTokens(int maxTokens) {
        if (maxTokens < 128 || maxTokens > 8192) {
            throw new IllegalArgumentException("maxTokens는 128에서 8192 사이여야 합니다.");
        }
        this.maxTokens = maxTokens;
    }

    public void setTemperature(double temperature) {
        if (temperature < 0 || temperature > 1) {
            throw new IllegalArgumentException("temperature는 0에서 1 사이여야 합니다.");
        }
        this.temperature = temperature;
    }
}