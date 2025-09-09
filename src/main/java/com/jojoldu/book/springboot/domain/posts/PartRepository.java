package com.jojoldu.book.springboot.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartRepository extends JpaRepository<Part, String> {
    List<Part> findByCategoryId(String categoryId);
    List<Part> findByVendorId(String vendorId);

    @Query("SELECT p FROM Part p JOIN FETCH p.vendor JOIN FETCH p.category")
    List<Part> findAllWithVendorAndCategory();

    // 검색 기능 - 이름이나 스펙에서 대소문자 구분 없이 검색
    List<Part> findByNameContainingIgnoreCaseOrSpecsContainingIgnoreCase(String name, String specs);

    // PartRepository.java에 추가할 메서드

    // 카테고리별 검색 기능
    List<Part> findByCategoryIdAndNameContainingIgnoreCaseOrCategoryIdAndSpecsContainingIgnoreCase(
            String categoryId1, String name, String categoryId2, String specs);
}