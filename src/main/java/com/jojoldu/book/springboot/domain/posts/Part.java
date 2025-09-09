package com.jojoldu.book.springboot.domain.posts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "parts")
public class Part {
    @Id
    @Column(length = 50)
    private String id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(name = "vendor_id", length = 50, nullable = false)
    private String vendorId;

    @Column(name = "category_id", length = 20, nullable = false)
    private String categoryId;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String specs;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // 관계 매핑
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id", insertable = false, updatable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Vendor vendor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", insertable = false, updatable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private PartCategory category;

    // 기본 생성자 (JPA 필수)
    public Part() {}

    // 모든 필드를 받는 생성자 (관계 매핑 제외)
    public Part(String id, String name, String vendorId, String categoryId, String specs, 
                LocalDateTime createdAt, LocalDateTime updatedAt, Vendor vendor, PartCategory category) {
        this.id = id;
        this.name = name;
        this.vendorId = vendorId;
        this.categoryId = categoryId;
        this.specs = specs;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.vendor = vendor;
        this.category = category;
    }

    // Getter와 Setter
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVendorId() {
        return vendorId;
    }

    public void setVendorId(String vendorId) {
        this.vendorId = vendorId;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public String getSpecs() {
        return specs;
    }

    public void setSpecs(String specs) {
        this.specs = specs;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public PartCategory getCategory() {
        return category;
    }

    public void setCategory(PartCategory category) {
        this.category = category;
    }
}
