package com.jojoldu.book.springboot.web;

import com.jojoldu.book.springboot.service.posts.PostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;


@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PostsService postsService;
    // private final HttpSession httpSession;

//    @GetMapping("/")
//    public String index(Model model, @LoginUser SessionUser user) {
//        model.addAttribute("posts", postsService.findAllAsc());
//        // SessionUser user = (SessionUser) httpSession.getAttribute("user");
////        if (user != null) {
////            model.addAttribute("userName", user.getName());
////        }
//        return "index";
//    }

//    @GetMapping("/")
//    public String temp(Model model) {
//        model.addAttribute("posts", postsService.findAllAsc());
//        return "temp";
//    }

    @GetMapping("/")
    public String test(Model model) {
        model.addAttribute("posts", postsService.findAllAsc());
        return "main";
    }


//    @GetMapping("/posts/save")
//    public String postsSave() {
//        return "posts-save";
//    }
//
//    @GetMapping("/posts/update/{id}")
//    public String postsUpdate(@PathVariable Long id, Model model) {
//          PostsResponseDto dto = postsService.findById(id);
//        model.addAttribute("post", dto);
//        return "posts-update";
//    }


}
