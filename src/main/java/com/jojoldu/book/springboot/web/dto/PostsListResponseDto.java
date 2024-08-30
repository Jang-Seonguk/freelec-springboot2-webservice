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
    private String gpu;
    private String memory;
    private String storage;
    private String power;
    private String cooler;
    private String computercase;
    private LocalDateTime modifiedDate;

    public PostsListResponseDto(Posts entity) {
        this.id = entity.getId();
        this.cpu = entity.getCpu();
        this.mainboard = entity.getMainboard();
        this.gpu = entity.getGpu();
        this.memory = entity.getMemory();
        this.storage = entity.getStorage();
        this.power = entity.getPower();
        this.cooler = entity.getCooler();
        this.computercase = entity.getComputercase();
        this.modifiedDate = entity.getModifiedDate();
    }
}
