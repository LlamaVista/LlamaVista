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
}