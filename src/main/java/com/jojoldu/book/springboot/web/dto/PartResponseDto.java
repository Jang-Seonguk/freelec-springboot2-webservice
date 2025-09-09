package com.jojoldu.book.springboot.web.dto;

import com.jojoldu.book.springboot.domain.posts.Part;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PartResponseDto {
    private String id;
    private String name;
    private String vendorId;
    private String categoryId;
    private String specs;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String vendorName;
    private String categoryName;

    public PartResponseDto(Part entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.vendorId = entity.getVendorId();
        this.categoryId = entity.getCategoryId();
        this.specs = entity.getSpecs();
        this.createdAt = entity.getCreatedAt();
        this.updatedAt = entity.getUpdatedAt();
        
        // 안전하게 관련 엔티티 정보 가져오기
        try {
            this.vendorName = entity.getVendor() != null ? entity.getVendor().getName() : null;
        } catch (Exception e) {
            this.vendorName = null;
        }
        
        try {
            this.categoryName = entity.getCategory() != null ? entity.getCategory().getName() : null;
        } catch (Exception e) {
            this.categoryName = null;
        }
    }
}
