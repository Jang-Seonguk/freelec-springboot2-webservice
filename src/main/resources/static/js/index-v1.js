// API 기본 설정
const API_BASE_URL = '/api';
let currentComponentType = '';
let selectedComponents = {};
let currentParts = [];

// API 호출 유틸리티 함수
async function apiCall(url, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// 컴포넌트 선택 함수
async function openPartSelector(componentType) {
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
    await loadPartsForComponent(componentType);

    // 검색 입력창 초기화
    document.getElementById('partsSearchInput').value = '';
}

// 부품 목록 로드 (API 호출)
async function loadPartsForComponent(componentType) {
    try {
        const parts = await apiCall(`/parts?type=${componentType}`);
        currentParts = parts || [];
        console.log('Requesting parts for type:', componentType);
        console.log('API URL:', `${API_BASE_URL}/parts?type=${componentType}`);
        if (currentParts.length === 0) {
            const container = document.getElementById('partsListContainer');
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <p>No parts available for this category</p>
                </div>
            `;
            return;
        }

        displayParts(currentParts);
    } catch (error) {
        console.error('Failed to load parts:', error);
        const container = document.getElementById('partsListContainer');
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <p>Failed to load parts</p>
            </div>
        `;
    }
}

// 부품 목록 표시
function displayParts(parts) {
    const container = document.getElementById('partsListContainer');

    container.innerHTML = parts.map(part => `
        <div class="part-item ${selectedComponents[currentComponentType] === part.id ? 'selected' : ''}" 
             onclick="selectPart('${part.id}', '${part.name}')">
            <div class="part-item-name">${part.name}</div>
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

// 부품 검색 (API 호출)
async function searchParts() {
    const searchTerm = document.getElementById('partsSearchInput').value.toLowerCase();

    if (searchTerm.trim() === '') {
        // 검색어가 없으면 전체 목록 다시 로드
        await loadPartsForComponent(currentComponentType);
        return;
    }

    try {
        const searchResults = await apiCall(`/parts/search?type=${currentComponentType}&keyword=${encodeURIComponent(searchTerm)}`);
        currentParts = searchResults || [];
        displayParts(currentParts);

        if (currentParts.length === 0) {
            document.getElementById('partsListContainer').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <p>No parts found for "${searchTerm}"</p>
                    <p style="font-size: 0.8rem; margin-top: 0.5rem;">Try different keywords</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Search failed:', error);
    }
}

