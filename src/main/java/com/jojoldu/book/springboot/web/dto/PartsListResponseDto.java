package com.jojoldu.book.springboot.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jojoldu.book.springboot.domain.posts.Parts;
import lombok.Getter;
import java.time.LocalDateTime;

@Getter
public class PartsListResponseDto {
    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;

    public PartsListResponseDto(Parts entity) {
        this.cpu = entity.getCpu();
        this.mainboard = entity.getMainboard();
        this.memory = entity.getMemory();
        this.storage = entity.getStorage();
        this.power = entity.getPower();
    }
}
