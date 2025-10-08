package com.jojoldu.book.springboot.web;

import com.jojoldu.book.springboot.domain.posts.Part;
import com.jojoldu.book.springboot.domain.posts.PartCategory;
import com.jojoldu.book.springboot.domain.posts.Vendor;
import com.jojoldu.book.springboot.service.parts.PartService;
import com.jojoldu.book.springboot.web.dto.PartResponseDto;
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
    public ResponseEntity<List<PartResponseDto>> getPartsByType(
            @RequestParam(required = false) String type) {
        try {
            List<PartResponseDto> parts;

            if (type == null || type.trim().isEmpty()) {
                parts = partService.getAllParts();

            } else {
                parts = partService.getPartsByType(type);
            }

            return ResponseEntity.ok(parts);

        } catch (Exception e) {
            log.error("Error getting parts by type: {}", type, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }



    // JavaScript index-v1.js에서 사용하는 타입별 검색
    @GetMapping("/search")
    public ResponseEntity<List<PartResponseDto>> searchPartsByType(
            @RequestParam String keyword,
            @RequestParam(required = false) String type) {
        try {
            List<PartResponseDto> searchResults;
            if (type != null && !type.trim().isEmpty()) {
                searchResults = partService.searchPartsByType(keyword, type);
            } else {
                searchResults = partService.searchParts(keyword);
            }

            return ResponseEntity.ok(searchResults);

        } catch (Exception e) {
            log.error("Error searching parts with keyword: {}, type: {}", keyword, type, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

}
