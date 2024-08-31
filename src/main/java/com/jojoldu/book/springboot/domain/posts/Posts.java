package com.jojoldu.book.springboot.domain.posts;

import com.jojoldu.book.springboot.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class Posts extends BaseTimeEntity {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String cpu;
    private String mainboard;
    private String gpu;
    private String memory;
    private String storage;
    private String power;
    private String cooler;
    private String computercase;

    @Builder
    public Posts(String cpu, String mainboard, String gpu, String memory, String storage, String power, String cooler, String computercase) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.gpu = gpu;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
        this.cooler = cooler;
        this.computercase = computercase;
    }

    public void update(String cpu, String mainboard, String gpu, String memory, String storage, String power, String cooler, String computercase) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.gpu = gpu;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
        this.cooler = cooler;
        this.computercase = computercase;
    }
}



// 원본
//
//@Getter
//@NoArgsConstructor
//@Entity
//public class Posts extends BaseTimeEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(length = 500, nullable = false)
//    private String title;
//
//    @Column(columnDefinition = "TEXT", nullable = false)
//    private String content;
//
//    private String author;
//
//    @Builder
//    public Posts(String title, String content, String author) {
//        this.title = title;
//        this.content = content;
//        this.author = author;
//    }
//
//    public void update(String title, String content) {
//        this.title = title;
//        this.content = content;
//    }
//}