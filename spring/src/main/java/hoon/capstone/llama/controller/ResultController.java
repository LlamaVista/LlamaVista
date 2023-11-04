package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.Result;
import hoon.capstone.llama.service.ResultService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;


@RestController
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping("/summarizer")
    public CompletableFuture<ResponseEntity<?>> summarizer(@RequestBody Result response) {
        return resultService.processResult(response)
                .thenApply(ResponseEntity::ok);
    }

    @PostMapping("/goal_explorer")
    public CompletableFuture<ResponseEntity<?>> goalExplorer(@RequestBody Result response) {
        return resultService.processResult(response)
                .thenApply(ResponseEntity::ok);
    }

    @PostMapping("/visualization")
    public CompletableFuture<ResponseEntity<?>> visualization(@RequestBody Result response) {
        return resultService.processResult(response)
                .thenApply(ResponseEntity::ok);
    }
}
