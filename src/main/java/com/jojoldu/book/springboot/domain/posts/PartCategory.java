package com.jojoldu.book.springboot.domain.posts;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "part_categories")
public class PartCategory {
    @Id
    @Column(length = 20)
    private String id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(length = 255)
    private String description;

    // 기본 생성자 (JPA 필수)
    public PartCategory() {}

    // 모든 필드를 받는 생성자
    public PartCategory(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
