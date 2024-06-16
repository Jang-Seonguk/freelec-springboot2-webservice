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
public class Parts extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(columnDefinition = "TEXT", nullable = false)
    private String cpu;
    private String mainboard;
    private String memory;
    private String storage;
    private String power;

    @Builder
    public Parts(String cpu, String mainboard, String memory, String storage, String power) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
    }

    public void update(String cpu, String mainboard, String memory, String storage, String power) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.memory = memory;
        this.storage = storage;
        this.power = power;
    }
}
