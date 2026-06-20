/* ============================================================
   SEARCH & FILTER LOGIC (Products Page)
   ============================================================ */
function initProductFilters() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const searchInput = document.getElementById('searchInput');
    const filterColor = document.getElementById('filterColor');
    const filterType = document.getElementById('filterType');
    const filterOccasion = document.getElementById('filterOccasion');
    const filterCollection = document.getElementById('filterCollection');
    const resetBtn = document.getElementById('resetFilters');
    const resetBtnAlt = document.getElementById('resetFiltersAlt');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Pre-set filters from URL
    const urlCollection = getUrlParam('collection');
    if (urlCollection && filterCollection) filterCollection.value = urlCollection;

    function filterProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const colorVal = filterColor ? filterColor.value : 'all';
        const typeVal = filterType ? filterType.value : 'all';
        const occasionVal = filterOccasion ? filterOccasion.value : 'all';
        const collectionVal = filterCollection ? filterCollection.value : 'all';

        const filtered = products.filter(product => {
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm) &&
                !product.description.toLowerCase().includes(searchTerm) &&
                !product.type.toLowerCase().includes(searchTerm)) return false;

            if (colorVal !== 'all' && product.colorNames) {
                const colorMap = {
                    'rose-pink': 'Deep Rose', 'soft-pink': 'Soft Pink', 'ivory': 'Ivory White',
                    'champagne': 'Champagne Gold', 'burgundy': 'Burgundy', 'lavender': 'Lavender'
                };
                if (!product.colorNames.some(cn => cn.toLowerCase().includes((colorMap[colorVal] || colorVal).toLowerCase())))
                    return false;
            }
            if (typeVal !== 'all' && product.type.toLowerCase().replace(/\s+/g, '-') !== typeVal) return false;
            if (occasionVal !== 'all' && !product.occasion.includes(occasionVal)) return false;
            if (collectionVal !== 'all' && product.collection !== collectionVal) return false;
            return true;
        });

        grid.innerHTML = filtered.length ? filtered.map(p => createProductCard(p)).join('') : '';
        if (resultsCount) resultsCount.textContent = filtered.length;
        if (noResults) noResults.style.display = filtered.length === 0 ? 'block' : 'none';

        // Refresh reveal animations
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal--visible'));
        }, 100);
    }

    filterProducts();

    if (searchInput) searchInput.addEventListener('input', debounce(filterProducts, 300));
    if (filterColor) filterColor.addEventListener('change', filterProducts);
    if (filterType) filterType.addEventListener('change', filterProducts);
    if (filterOccasion) filterOccasion.addEventListener('change', filterProducts);
    if (filterCollection) filterCollection.addEventListener('change', filterProducts);

    function resetFilters() {
        if (searchInput) searchInput.value = '';
        if (filterColor) filterColor.value = 'all';
        if (filterType) filterType.value = 'all';
        if (filterOccasion) filterOccasion.value = 'all';
        if (filterCollection) filterCollection.value = 'all';
        filterProducts();
    }

    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    if (resetBtnAlt) resetBtnAlt.addEventListener('click', resetFilters);
}

// Utility: get URL parameter
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Utility: debounce
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}