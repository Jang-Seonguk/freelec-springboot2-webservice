package com.jojoldu.book.springboot.web.dto;


import com.jojoldu.book.springboot.domain.posts.Posts;
import lombok.Getter;

@Getter
public class PostsResponseDto {
    private Long id;
    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;

    public PostsResponseDto(Posts entity) {
        this.id = entity.getId();
        this.cpu = entity.getCpu();
        this.mainboard = entity.getMainboard();
        this.memory = entity.getMemory();
        this.storage = entity.getStorage();
        this.power = entity.getPower();
    }
}
