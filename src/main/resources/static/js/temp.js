// 샘플 부품 데이터베이스
const partsDatabase = {
    cpu: [
        { id: 'i9-13900k', name: 'Intel Core i9-13900K', vendor: 'Intel', specs: '24 Cores, 5.8GHz Max Turbo, LGA1700, 125W TDP' },
        { id: 'i7-13700k', name: 'Intel Core i7-13700K', vendor: 'Intel', specs: '16 Cores, 5.4GHz Max Turbo, LGA1700, 125W TDP' },
        { id: 'i5-13600k', name: 'Intel Core i5-13600K', vendor: 'Intel', specs: '14 Cores, 5.1GHz Max Turbo, LGA1700, 125W TDP' },
        { id: 'r9-7900x', name: 'AMD Ryzen 9 7900X', vendor: 'AMD', specs: '12 Cores, 5.6GHz Max Boost, AM5, 170W TDP' },
        { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', vendor: 'AMD', specs: '8 Cores, 5.4GHz Max Boost, AM5, 105W TDP' }
    ],
    gpu: [
        { id: 'rtx-4090', name: 'NVIDIA GeForce RTX 4090 Founders Edition', vendor: 'NVIDIA', specs: '24GB GDDR6X, 2520MHz Boost Clock, 450W TDP' },
        { id: 'rtx-4080', name: 'ASUS ROG Strix RTX 4080 OC', vendor: 'ASUS', specs: '16GB GDDR6X, 2610MHz Boost Clock, 320W TDP' },
        { id: 'rtx-4070', name: 'MSI Gaming X Trio RTX 4070', vendor: 'MSI', specs: '12GB GDDR6X, 2475MHz Boost Clock, 200W TDP' },
        { id: 'rtx-3060ti', name: 'EVGA FTW3 Ultra RTX 3060 Ti', vendor: 'EVGA', specs: '8GB GDDR6, 1665MHz Boost Clock, 200W TDP' },
        { id: 'rx-7800xt', name: 'AMD Radeon RX 7800 XT', vendor: 'AMD', specs: '16GB GDDR6, 2430MHz Game Clock, 263W TDP' }
    ],
    memory: [
        { id: 'corsair-32gb', name: 'Corsair Vengeance LPX DDR4-3200', vendor: 'Corsair', specs: '32GB (2x16GB), 3200MHz, CL16' },
        { id: 'gskill-32gb', name: 'G.SKILL Trident Z5 DDR5-6000', vendor: 'G.SKILL', specs: '32GB (2x16GB), 6000MHz, CL36' },
        { id: 'crucial-32gb', name: 'Crucial Ballistix DDR4-3600', vendor: 'Crucial', specs: '32GB (2x16GB), 3600MHz, CL16' },
        { id: 'samsung-16gb', name: 'Samsung DDR5-4800', vendor: 'Samsung', specs: '16GB (2x8GB), 4800MHz, CL40' }
    ],
    mainboard: [
        { id: 'asus-z790', name: 'ASUS ROG Maximus Z790 HERO', vendor: 'ASUS', specs: 'LGA1700, DDR5, WiFi 6E, PCIe 5.0, ATX' },
        { id: 'msi-b650', name: 'MSI MAG B650 TOMAHAWK WIFI', vendor: 'MSI', specs: 'AM5, DDR5, WiFi 6, PCIe 4.0, ATX' },
        { id: 'gigabyte-b660', name: 'GIGABYTE B660M AORUS PRO AX', vendor: 'GIGABYTE', specs: 'LGA1700, DDR4, WiFi 6, PCIe 4.0, Micro-ATX' },
        { id: 'asrock-x670e', name: 'ASRock X670E Taichi', vendor: 'ASRock', specs: 'AM5, DDR5, WiFi 6E, PCIe 5.0, ATX' }
    ],
    storage: [
        { id: 'samsung-980pro', name: 'Samsung 980 PRO', vendor: 'Samsung', specs: '1TB NVMe SSD, 7000MB/s Read, PCIe 4.0' },
        { id: 'wd-black-sn850x', name: 'WD Black SN850X', vendor: 'Western Digital', specs: '2TB NVMe SSD, 7300MB/s Read, PCIe 4.0' },
        { id: 'crucial-p5-plus', name: 'Crucial P5 Plus', vendor: 'Crucial', specs: '1TB NVMe SSD, 6600MB/s Read, PCIe 4.0' }
    ],
    power: [
        { id: 'corsair-rm850x', name: 'Corsair RM850x', vendor: 'Corsair', specs: '850W, 80+ Gold, Fully Modular, 10 Year Warranty' },
        { id: 'seasonic-focus-750w', name: 'Seasonic Focus GX-750', vendor: 'Seasonic', specs: '750W, 80+ Gold, Fully Modular, 10 Year Warranty' },
        { id: 'evga-supernova-1000w', name: 'EVGA SuperNOVA 1000 GT', vendor: 'EVGA', specs: '1000W, 80+ Gold, Fully Modular, 10 Year Warranty' }
    ],
    cooler: [
        { id: 'noctua-nh-d15', name: 'Noctua NH-D15', vendor: 'Noctua', specs: 'Air Cooler, 165W TDP, Dual 140mm Fans, 6 Year Warranty' },
        { id: 'corsair-h150i', name: 'Corsair iCUE H150i ELITE CAPELLIX', vendor: 'Corsair', specs: 'AIO Liquid Cooler, 360mm Radiator, RGB, 5 Year Warranty' },
        { id: 'arctic-liquid-280', name: 'ARCTIC Liquid Freezer II 280', vendor: 'ARCTIC', specs: 'AIO Liquid Cooler, 280mm Radiator, 6 Year Warranty' }
    ],
    case: [
        { id: 'fractal-meshify-2', name: 'Fractal Design Meshify 2', vendor: 'Fractal Design', specs: 'Mid Tower, Tempered Glass, High Airflow, 2x 140mm Fans' },
        { id: 'nzxt-h7-flow', name: 'NZXT H7 Flow', vendor: 'NZXT', specs: 'Mid Tower, Tempered Glass, RGB, 3x 120mm Fans' },
        { id: 'corsair-5000d', name: 'Corsair 5000D Airflow', vendor: 'Corsair', specs: 'Mid Tower, Tempered Glass, High Airflow, 3x 120mm Fans' }
    ]
};

let currentComponentType = '';
let selectedComponents = {};
let currentParts = [];

// 컴포넌트 선택 함수
function openPartSelector(componentType) {
    currentComponentType = componentType;

    // 모든 컴포넌트 디스플레이에서 active 클래스 제거
    document.querySelectorAll('.component-display').forEach(display => {
        display.classList.remove('active');
    });

    // 클릭된 컴포넌트에 active 클래스 추가
    event.target.closest('.component-display').classList.add('active');

    // 타이틀 업데이트
    const titles = {
        cpu: '🧠 Select CPU',
        gpu: '🎮 Select GPU',
        memory: '💾 Select Memory',
        mainboard: '🔌 Select Motherboard',
        storage: '💿 Select Storage',
        power: '⚡ Select Power Supply',
        cooler: '❄️ Select Cooler',
        case: '📦 Select Case'
    };

    document.getElementById('partsTitle').textContent = titles[componentType] || 'Select Component';

    // 검색창 플레이스홀더 업데이트
    const placeholders = {
        cpu: 'Search processors...',
        gpu: 'Search graphics cards...',
        memory: 'Search memory modules...',
        mainboard: 'Search motherboards...',
        storage: 'Search storage devices...',
        power: 'Search power supplies...',
        cooler: 'Search coolers...',
        case: 'Search cases...'
    };

    document.getElementById('partsSearchInput').placeholder = placeholders[componentType] || 'Search parts...';

    // 부품 목록 로드
    loadPartsForComponent(componentType);

    // 검색 입력창 초기화
    document.getElementById('partsSearchInput').value = '';
}

// 부품 목록 로드
function loadPartsForComponent(componentType) {
    const container = document.getElementById('partsListContainer');
    const parts = partsDatabase[componentType] || [];
    currentParts = [...parts];

    if (parts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <p>No parts available for this category</p>
            </div>
        `;
        return;
    }

    displayParts(parts);
}

// 부품 목록 표시
function displayParts(parts) {
    const container = document.getElementById('partsListContainer');

    container.innerHTML = parts.map(part => `
        <div class="part-item ${selectedComponents[currentComponentType] === part.id ? 'selected' : ''}" 
             onclick="selectPart('${part.id}', '${part.name}')">
            <div class="part-item-name">${part.name}</div>
            <div class="part-item-vendor">${part.vendor}</div>
            <div class="part-item-specs">${part.specs}</div>
        </div>
    `).join('');
}

// 부품 선택
function selectPart(partId, partName) {
    selectedComponents[currentComponentType] = partId;

    // 메인 화면 업데이트
    const display = document.getElementById(`${currentComponentType}Display`);
    display.textContent = partName;
    display.parentElement.classList.add('selected');

    // 선택된 부품 하이라이트 업데이트
    displayParts(currentParts);
}

// 부품 검색
function searchParts() {
    const searchTerm = document.getElementById('partsSearchInput').value.toLowerCase();
    const allParts = partsDatabase[currentComponentType] || [];

    const filteredParts = allParts.filter(part =>
        part.name.toLowerCase().includes(searchTerm) ||
        part.vendor.toLowerCase().includes(searchTerm) ||
        part.specs.toLowerCase().includes(searchTerm)
    );

    currentParts = filteredParts;
    displayParts(filteredParts);

    if (filteredParts.length === 0 && searchTerm.length > 0) {
        document.getElementById('partsListContainer').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>No parts found for "${searchTerm}"</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem;">Try different keywords</p>
            </div>
        `;
    }
}

// 호환성 체크 (현재는 데모용)
function runCompatibilityCheck() {
    const selectedCount = Object.keys(selectedComponents).length;
    if (selectedCount < 2) {
        alert('Please select at least 2 components to check compatibility');
        return;
    }

    alert(`Checking compatibility for ${selectedCount} components...\n(This will connect to your Spring Boot API)`);
}

// 메인 검색 (상단 검색바)
function searchParts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim() === '') {
        alert('Please enter a search term');
        return;
    }

    alert(`Searching for: ${searchTerm}\n(This will connect to your Spring Boot API)`);
}
