package hoon.capstone.llama.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Settings {
    private Grammar grammar;
    private int maxTokens;
    private double temperature;
    private int numberMessages;
    private double presencePenalty;
    private double frequencyPenalty;

    public Settings() {
        this.grammar = Grammar.SEABORN;
        this.maxTokens = 6336;
        this.temperature = 0;
        this.numberMessages = 1;
        this.presencePenalty = -2.0;
        this.frequencyPenalty = -2.0;
    }
}