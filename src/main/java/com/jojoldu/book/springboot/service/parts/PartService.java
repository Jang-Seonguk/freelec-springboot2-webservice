package com.jojoldu.book.springboot.service.parts;

import com.jojoldu.book.springboot.domain.posts.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class PartService {

    private final PartRepository partRepository;
    private final PartCategoryRepository partCategoryRepository;
    private final VendorRepository vendorRepository;

    // 기존 Post 관련 메서드들을 Part 관련 메서드로 변경
    public List<Part> getAllParts() {
        return partRepository.findAll(); // 단순 조회로 변경
    }

    public List<Part> getPartsByCategory(String categoryId) {
        log.info("Searching parts for category: {}", categoryId);
        List<Part> parts = partRepository.findByCategoryId(categoryId);
        log.info("Found {} parts for category: {}", parts.size(), categoryId);
        return parts;
    }

    public List<Part> getPartsByVendor(String vendorId) {
        return partRepository.findByVendorId(vendorId);
    }

    public Part savePart(Part part) {
        return partRepository.save(part);
    }

    public Optional<Part> getPartById(String id) {
        return partRepository.findById(id);
    }

    public void deletePart(String id) {
        partRepository.deleteById(id);
    }

    // 카테고리 관련 메서드
    public List<PartCategory> getAllCategories() {
        return partCategoryRepository.findAll();
    }

    // 벤더 관련 메서드
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    // 검색 기능
    public List<Part> searchParts(String searchTerm) {
        return partRepository.findByNameContainingIgnoreCaseOrSpecsContainingIgnoreCase(searchTerm, searchTerm);
    }

    // index-v1.js와 호환을 위한 메서드들

    // 타입별 부품 조회 (JavaScript에서 사용하는 타입명을 카테고리 ID로 매핑)
    public List<Part> getPartsByType(String type) {
        String categoryId = mapTypeToCategory(type);
        log.info("Getting parts by type: {} -> categoryId: {}", type, categoryId);
        return getPartsByCategory(categoryId);
    }

    // 타입별 검색
    public List<Part> searchPartsByType(String searchTerm, String type) {
        String categoryId = mapTypeToCategory(type);
        log.info("Searching parts by type: {} with term: {}", type, searchTerm);
        return partRepository.findByCategoryIdAndNameContainingIgnoreCaseOrCategoryIdAndSpecsContainingIgnoreCase(
                categoryId, searchTerm, categoryId, searchTerm);
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