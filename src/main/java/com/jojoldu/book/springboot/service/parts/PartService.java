package com.jojoldu.book.springboot.service.parts;

import com.jojoldu.book.springboot.domain.posts.*;
import com.jojoldu.book.springboot.web.dto.PartResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PartService {

    private final PartRepository partRepository;

    public List<PartResponseDto> getAllParts() {
        return partRepository.findAll().stream()
                .map(PartResponseDto::new)
                .collect(Collectors.toList());
    }

    public List<PartResponseDto> getPartsByCategory(String categoryId) {
        List<PartResponseDto> parts = partRepository.findByCategoryId(categoryId).stream()
                .map(PartResponseDto::new)
                .collect(Collectors.toList());
        return parts;
    }

    public List<PartResponseDto> searchParts(String searchTerm) {
        return partRepository.findByNameContainingIgnoreCaseOrSpecsContainingIgnoreCase(
                        searchTerm, searchTerm).stream()
                .map(PartResponseDto::new)
                .collect(Collectors.toList());
    }

    public List<PartResponseDto> getPartsByType(String type) {
        String categoryId = mapTypeToCategory(type);
        return getPartsByCategory(categoryId);
    }


    public List<PartResponseDto> searchPartsByType(String searchTerm, String type) {
        String categoryId = mapTypeToCategory(type);
        return partRepository.findByCategoryIdAndNameContainingIgnoreCaseOrCategoryIdAndSpecsContainingIgnoreCase(
                        categoryId, searchTerm, categoryId, searchTerm).stream()
                .map(PartResponseDto::new)
                .collect(Collectors.toList());
    }


    // JavaScript에서 사용하는 타입명을 카테고리 ID로 매핑하는 헬퍼 메서드
    private String mapTypeToCategory(String type) {
        if (type == null) return "cpu"; // 기본값

        switch (type.toLowerCase()) {
            case "cpu": return "cpu";
            case "gpu": return "gpu";
            case "memory": return "memory";
            case "mainboard": return "mainboard";
            case "storage": return "storage";
            case "power": return "power";
            case "cooler": return "cooler";
            case "case": return "case";
            default:
                log.warn("Unknown component type: {}, defaulting to cpu", type);
                return "cpu";
        }
    }
}
