package com.jojoldu.book.springboot.web.dto;

import com.jojoldu.book.springboot.domain.posts.Part;
import lombok.Getter;

@Getter
public class PartResponseDto {
    private String id;
    private String name;
    private String vendorId;
    private String categoryId;
    private String specs;

    // Entity -> DTO 변환 생성자
    public PartResponseDto(Part entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.vendorId = entity.getVendorId();
        this.categoryId = entity.getCategoryId();
        this.specs = entity.getSpecs();
    }

}
