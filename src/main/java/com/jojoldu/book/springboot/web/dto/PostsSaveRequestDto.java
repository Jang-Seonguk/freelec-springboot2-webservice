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
    private String memory;
    private String storage;
    private String power;

    @Builder
    public PostsSaveRequestDto(String cpu, String mainboard, String memory, String storage, String power) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
    }

    public Posts toEntity() {
        return Posts.builder()
                .cpu(cpu)
                .mainboard(mainboard)
                .memory(memory)
                .storage(storage)
                .power(power)
                .build();
    }
}
