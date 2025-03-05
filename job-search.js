document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const clearBtn = document.querySelector('.clear-btn');
    const searchBtn = document.querySelector('.search-btn');

    // 清除所有選項
    clearBtn.addEventListener('click', function() {
        const inputs = searchForm.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
    });

    // 搜索按鈕點擊事件
    searchBtn.addEventListener('click', function() {
        // 收集所有選中的過濾器
        const filters = {
            keywords: searchForm.querySelector('input[type="text"]').value,
            employment: [],
            location: [],
            category: []
        };

        // 收集選中的複選框
        searchForm.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            filters[checkbox.name].push(checkbox.value);
        });

        // 將過濾器作為 URL 參數傳遞到搜索結果頁面
        const params = new URLSearchParams();
        for (let key in filters) {
            if (filters[key].length > 0) {
                params.append(key, filters[key].join(','));
            }
        }

        // 跳轉到搜索結果頁面
        window.location.href = `search-results.html?${params.toString()}`;
    });
}); 