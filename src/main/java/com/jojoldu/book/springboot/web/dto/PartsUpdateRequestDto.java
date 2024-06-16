package com.jojoldu.book.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PartsUpdateRequestDto {
    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;

    @Builder
    public PartsUpdateRequestDto(String cpu, String mainboard, String memory, String storage, String power) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
    }
}