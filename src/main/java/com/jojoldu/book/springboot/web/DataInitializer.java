package com.jojoldu.book.springboot.web;

import com.jojoldu.book.springboot.domain.posts.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final PartCategoryRepository partCategoryRepository;
    private final VendorRepository vendorRepository;
    private final PartRepository partRepository;

    @Override
    public void run(String... args) throws Exception {
        if (partCategoryRepository.count() == 0) {
            initializeData();
        }
    }

    private void initializeData() {
        // 카테고리 생성
        initializeCategories();

        // 벤더 생성
        initializeVendors();

        // 부품 생성
        initializeParts();
    }

    private void initializeCategories() {
        PartCategory[] categories = {
                new PartCategory("cpu", "CPU/Processor", "중앙처리장치"),
                new PartCategory("gpu", "Graphics Card", "그래픽카드"),
                new PartCategory("memory", "Memory/RAM", "메모리"),
                new PartCategory("mainboard", "Motherboard", "메인보드"),
                new PartCategory("storage", "Storage", "저장장치"),
                new PartCategory("power", "Power Supply", "파워서플라이"),
                new PartCategory("cooler", "CPU Cooler", "CPU 쿨러"),
                new PartCategory("case", "PC Case", "PC 케이스")
        };

        for (PartCategory category : categories) {
            partCategoryRepository.save(category);
        }
    }

    private void initializeVendors() {
        Vendor[] vendors = {
                new Vendor("Intel", "Intel Corporation"),
                new Vendor("AMD", "Advanced Micro Devices"),
                new Vendor("NVIDIA", "NVIDIA Corporation"),
                new Vendor("ASUS", "ASUSTeK Computer Inc."),
                new Vendor("MSI", "Micro-Star International"),
                new Vendor("EVGA", "EVGA Corporation"),
                new Vendor("Corsair", "Corsair Gaming"),
                new Vendor("G.SKILL", "G.SKILL International"),
                new Vendor("Crucial", "Crucial Technology"),
                new Vendor("Samsung", "Samsung Electronics"),
                new Vendor("GIGABYTE", "GIGABYTE Technology"),
                new Vendor("ASRock", "ASRock Inc."),
                new Vendor("Western Digital", "Western Digital Corporation"),
                new Vendor("Seasonic", "Seasonic Electronics"),
                new Vendor("Noctua", "Noctua"),
                new Vendor("ARCTIC", "ARCTIC"),
                new Vendor("Fractal Design", "Fractal Design"),
                new Vendor("NZXT", "NZXT Inc.")
        };

        for (Vendor vendor : vendors) {
            vendorRepository.save(vendor);
        }
    }

    private void initializeParts() {
        Part[] parts = {
                // CPU 부품
                new Part("i9-13900k", "Intel Core i9-13900K", "Intel", "cpu",
                        "24 Cores, 5.8GHz Max Turbo, LGA1700, 125W TDP", null, null, null, null),
                new Part("i7-13700k", "Intel Core i7-13700K", "Intel", "cpu",
                        "16 Cores, 5.4GHz Max Turbo, LGA1700, 125W TDP", null, null, null, null),
                new Part("i5-13600k", "Intel Core i5-13600K", "Intel", "cpu",
                        "14 Cores, 5.1GHz Max Turbo, LGA1700, 125W TDP", null, null, null, null),
                new Part("r9-7900x", "AMD Ryzen 9 7900X", "AMD", "cpu",
                        "12 Cores, 5.6GHz Max Boost, AM5, 170W TDP", null, null, null, null),
                new Part("r7-7700x", "AMD Ryzen 7 7700X", "AMD", "cpu",
                        "8 Cores, 5.4GHz Max Boost, AM5, 105W TDP", null, null, null, null),

                // GPU 부품
                new Part("rtx-4090", "NVIDIA GeForce RTX 4090 Founders Edition", "NVIDIA", "gpu",
                        "24GB GDDR6X, 2520MHz Boost Clock, 450W TDP", null, null, null, null),
                new Part("rtx-4080", "ASUS ROG Strix RTX 4080 OC", "ASUS", "gpu",
                        "16GB GDDR6X, 2610MHz Boost Clock, 320W TDP", null, null, null, null),
                new Part("rtx-4070", "MSI Gaming X Trio RTX 4070", "MSI", "gpu",
                        "12GB GDDR6X, 2475MHz Boost Clock, 200W TDP", null, null, null, null),
                new Part("rtx-3060ti", "EVGA FTW3 Ultra RTX 3060 Ti", "EVGA", "gpu",
                        "8GB GDDR6, 1665MHz Boost Clock, 200W TDP", null, null, null, null),
                new Part("rx-7800xt", "AMD Radeon RX 7800 XT", "AMD", "gpu",
                        "16GB GDDR6, 2430MHz Game Clock, 263W TDP", null, null, null, null),

                // 메모리 부품
                new Part("corsair-32gb", "Corsair Vengeance LPX DDR4-3200", "Corsair", "memory",
                        "32GB (2x16GB), 3200MHz, CL16", null, null, null, null),
                new Part("gskill-32gb", "G.SKILL Trident Z5 DDR5-6000", "G.SKILL", "memory",
                        "32GB (2x16GB), 6000MHz, CL36", null, null, null, null),
                new Part("crucial-32gb", "Crucial Ballistix DDR4-3600", "Crucial", "memory",
                        "32GB (2x16GB), 3600MHz, CL16", null, null, null, null),
                new Part("samsung-16gb", "Samsung DDR5-4800", "Samsung", "memory",
                        "16GB (2x8GB), 4800MHz, CL40", null, null, null, null),

                // 메인보드 부품
                new Part("asus-z790", "ASUS ROG Maximus Z790 HERO", "ASUS", "mainboard",
                        "LGA1700, DDR5, WiFi 6E, PCIe 5.0, ATX", null, null, null, null),
                new Part("msi-b650", "MSI MAG B650 TOMAHAWK WIFI", "MSI", "mainboard",
                        "AM5, DDR5, WiFi 6, PCIe 4.0, ATX", null, null, null, null),
                new Part("gigabyte-b660", "GIGABYTE B660M AORUS PRO AX", "GIGABYTE", "mainboard",
                        "LGA1700, DDR4, WiFi 6, PCIe 4.0, Micro-ATX", null, null, null, null),
                new Part("asrock-x670e", "ASRock X670E Taichi", "ASRock", "mainboard",
                        "AM5, DDR5, WiFi 6E, PCIe 5.0, ATX", null, null, null, null),

                // 저장장치 부품
                new Part("samsung-980pro", "Samsung 980 PRO", "Samsung", "storage",
                        "1TB NVMe SSD, 7000MB/s Read, PCIe 4.0", null, null, null, null),
                new Part("wd-black-sn850x", "WD Black SN850X", "Western Digital", "storage",
                        "2TB NVMe SSD, 7300MB/s Read, PCIe 4.0", null, null, null, null),
                new Part("crucial-p5-plus", "Crucial P5 Plus", "Crucial", "storage",
                        "1TB NVMe SSD, 6600MB/s Read, PCIe 4.0", null, null, null, null),

                // 파워서플라이 부품
                new Part("corsair-rm850x", "Corsair RM850x", "Corsair", "power",
                        "850W, 80+ Gold, Fully Modular, 10 Year Warranty", null, null, null, null),
                new Part("seasonic-focus-750w", "Seasonic Focus GX-750", "Seasonic", "power",
                        "750W, 80+ Gold, Fully Modular, 10 Year Warranty", null, null, null, null),
                new Part("evga-supernova-1000w", "EVGA SuperNOVA 1000 GT", "EVGA", "power",
                        "1000W, 80+ Gold, Fully Modular, 10 Year Warranty", null, null, null, null),

                // 쿨러 부품
                new Part("noctua-nh-d15", "Noctua NH-D15", "Noctua", "cooler",
                        "Air Cooler, 165W TDP, Dual 140mm Fans, 6 Year Warranty", null, null, null, null),
                new Part("corsair-h150i", "Corsair iCUE H150i ELITE CAPELLIX", "Corsair", "cooler",
                        "AIO Liquid Cooler, 360mm Radiator, RGB, 5 Year Warranty", null, null, null, null),
                new Part("arctic-liquid-280", "ARCTIC Liquid Freezer II 280", "ARCTIC", "cooler",
                        "AIO Liquid Cooler, 280mm Radiator, 6 Year Warranty", null, null, null, null),

                // 케이스 부품
                new Part("fractal-meshify-2", "Fractal Design Meshify 2", "Fractal Design", "case",
                        "Mid Tower, Tempered Glass, High Airflow, 2x 140mm Fans", null, null, null, null),
                new Part("nzxt-h7-flow", "NZXT H7 Flow", "NZXT", "case",
                        "Mid Tower, Tempered Glass, RGB, 3x 120mm Fans", null, null, null, null),
                new Part("corsair-5000d", "Corsair 5000D Airflow", "Corsair", "case",
                        "Mid Tower, Tempered Glass, High Airflow, 3x 120mm Fans", null, null, null, null)
        };

        for (Part part : parts) {
            partRepository.save(part);
        }
    }
}