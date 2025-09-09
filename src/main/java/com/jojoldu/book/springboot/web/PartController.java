package com.jojoldu.book.springboot.web;

import com.jojoldu.book.springboot.domain.posts.Part;
import com.jojoldu.book.springboot.domain.posts.PartCategory;
import com.jojoldu.book.springboot.domain.posts.Vendor;
import com.jojoldu.book.springboot.service.parts.PartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/parts")
@RequiredArgsConstructor
public class PartController {

    private final PartService partService;

    // JavaScript index-v1.js에서 사용하는 타입별 부품 조회
    @GetMapping
    public ResponseEntity<List<Part>> getPartsByType(
            @RequestParam(required = false) String type) {
        try {
            log.info("API Request - getPartsByType with type: {}", type);

            List<Part> parts;
            if (type == null || type.trim().isEmpty()) {
                parts = partService.getAllParts();
                log.info("Returning all parts: {} items", parts.size());
            } else {
                parts = partService.getPartsByType(type);
                log.info("Returning parts for type {}: {} items", type, parts.size());
            }

            // Hibernate Lazy Loading 문제 해결을 위해 관계 매핑 필드 null 처리
            parts.forEach(part -> {
                part.setVendor(null);
                part.setCategory(null);
            });

            return ResponseEntity.ok(parts);

        } catch (Exception e) {
            log.error("Error getting parts by type: {}", type, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Part> getPartById(@PathVariable String id) {
        log.info("API Request - getPartById: {}", id);
        return partService.getPartById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{categoryId}")
    public List<Part> getPartsByCategory(@PathVariable String categoryId) {
        log.info("API Request - getPartsByCategory: {}", categoryId);
        return partService.getPartsByCategory(categoryId);
    }

    @GetMapping("/vendor/{vendorId}")
    public List<Part> getPartsByVendor(@PathVariable String vendorId) {
        log.info("API Request - getPartsByVendor: {}", vendorId);
        return partService.getPartsByVendor(vendorId);
    }

    @PostMapping
    public Part createPart(@RequestBody Part part) {
        log.info("API Request - createPart: {}", part.getName());
        return partService.savePart(part);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Part> updatePart(@PathVariable String id, @RequestBody Part part) {
        log.info("API Request - updatePart: {}", id);
        part.setId(id);
        return ResponseEntity.ok(partService.savePart(part));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePart(@PathVariable String id) {
        log.info("API Request - deletePart: {}", id);
        partService.deletePart(id);
        return ResponseEntity.noContent().build();
    }

    // 카테고리 조회 엔드포인트
    @GetMapping("/categories")
    public List<PartCategory> getAllCategories() {
        log.info("API Request - getAllCategories");
        return partService.getAllCategories();
    }

    // 벤더 조회 엔드포인트
    @GetMapping("/vendors")
    public List<Vendor> getAllVendors() {
        log.info("API Request - getAllVendors");
        return partService.getAllVendors();
    }

    // JavaScript index-v1.js에서 사용하는 타입별 검색
    @GetMapping("/search")
    public ResponseEntity<List<Part>> searchPartsByType(
            @RequestParam String keyword,
            @RequestParam(required = false) String type) {
        try {
            log.info("API Request - searchPartsByType with keyword: {}, type: {}", keyword, type);

            List<Part> searchResults;
            if (type != null && !type.trim().isEmpty()) {
                searchResults = partService.searchPartsByType(keyword, type);
            } else {
                searchResults = partService.searchParts(keyword);
            }

            // Hibernate Lazy Loading 문제 해결을 위해 관계 매핑 필드 null 처리
            searchResults.forEach(part -> {
                part.setVendor(null);
                part.setCategory(null);
            });

            log.info("Search results: {} items", searchResults.size());
            return ResponseEntity.ok(searchResults);

        } catch (Exception e) {
            log.error("Error searching parts with keyword: {}, type: {}", keyword, type, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    // JavaScript index-v1.js의 searchAllParts용 전체 검색
    @GetMapping("/search/all")
    public ResponseEntity<List<Part>> searchAllParts(@RequestParam String keyword) {
        try {
            log.info("API Request - searchAllParts with keyword: {}", keyword);
            List<Part> searchResults = partService.searchParts(keyword);
            log.info("Search all results: {} items", searchResults.size());
            return ResponseEntity.ok(searchResults);

        } catch (Exception e) {
            log.error("Error searching all parts with keyword: {}", keyword, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }
}