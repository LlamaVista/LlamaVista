package hoon.capstone.llama.controller;

import hoon.capstone.llama.domain.ModelOutput;
import hoon.capstone.llama.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class FetchController {

    private final FetchService fetchService;

    @Autowired
    public FetchController(FetchService fetchService) {
        this.fetchService = fetchService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ModelOutput fetchData(@RequestParam String blobName) {
        return fetchService.fetchData(blobName);
    }
}
