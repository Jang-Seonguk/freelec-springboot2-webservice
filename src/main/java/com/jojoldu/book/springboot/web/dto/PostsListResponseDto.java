package com.jojoldu.book.springboot.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jojoldu.book.springboot.domain.posts.Posts;
import lombok.Getter;
import java.time.LocalDateTime;

@Getter
public class PostsListResponseDto {
    private Long id;
    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;
    private LocalDateTime modifiedDate;

    public PostsListResponseDto(Posts entity) {
        this.id = entity.getId();
        this.cpu = entity.getCpu();
        this.mainboard = entity.getMainboard();
        this.memory = entity.getMemory();
        this.power = entity.getPower();
        this.storage = entity.getStorage();
        this.modifiedDate = entity.getModifiedDate();
    }
}
