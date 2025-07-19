package com.jojoldu.book.springboot.web.dto;


import com.jojoldu.book.springboot.domain.posts.Posts;
import lombok.Getter;

@Getter
public class PostsResponseDto {
    private Long id;
    private String name;
    private String vendor;
    private String part;


    public PostsResponseDto(Posts entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.vendor = entity.getVendor();
        this.part = entity.getPart();
    }
}



//@Getter
//public class PostsResponseDto {
//    private Long id;
//    private String cpu;
//    private String mainboard;
//    private String gpu;
//    private String memory;
//    private String storage;
//    private String power;
//    private String cooler;
//    private String computercase;
//
//    public PostsResponseDto(Posts entity) {
//        this.id = entity.getId();
//        this.cpu = entity.getCpu();
//        this.mainboard = entity.getMainboard();
//        this.gpu = entity.getGpu();
//        this.memory = entity.getMemory();
//        this.storage = entity.getStorage();
//        this.power = entity.getPower();
//        this.cooler = entity.getCooler();
//        this.computercase = entity.getComputercase();
//    }
//}
