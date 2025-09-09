package com.jojoldu.book.springboot.web;

import com.jojoldu.book.springboot.service.parts.PartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;


@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PartService partsService;

//    @GetMapping("/")
//    public String index(Model model) {
//        model.addAttribute("posts", postsService.findAllAsc());
//        return "main";
//    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("posts", partsService.getAllParts());
        return "main-v1";
    }

}
