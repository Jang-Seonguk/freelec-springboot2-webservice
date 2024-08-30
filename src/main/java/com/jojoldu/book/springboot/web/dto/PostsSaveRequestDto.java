package com.jojoldu.book.springboot.web.dto;

import com.jojoldu.book.springboot.domain.posts.Posts;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {
    private String cpu;
    private String mainboard;
    private String gpu;
    private String memory;
    private String storage;
    private String power;
    private String cooler;
    private String computercase;

    @Builder
    public PostsSaveRequestDto(String cpu, String mainboard, String gpu, String memory, String storage, String power, String cooler, String computercase) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.gpu = gpu;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
        this.cooler = cooler;
        this.computercase = computercase;
    }

    public Posts toEntity() {
        return Posts.builder()
                .cpu(cpu)
                .mainboard(mainboard)
                .gpu(gpu)
                .memory(memory)
                .storage(storage)
                .power(power)
                .cooler(cooler)
                .computercase(computercase)
                .build();
    }
}
