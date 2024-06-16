package com.jojoldu.book.springboot.web.dto;

import com.jojoldu.book.springboot.domain.posts.Parts;
import lombok.Getter;

@Getter
public class PartsResponseDto {

    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;

    public PartsResponseDto(Parts entity) {
        this.cpu = entity.getCpu();
        this.mainboard = entity.getMainboard();
        this.memory = entity.getMemory();
        this.storage = entity.getStorage();
        this.power = entity.getPower();
    }
}
