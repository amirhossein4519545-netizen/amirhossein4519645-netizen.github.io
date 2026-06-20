/* ============================================================
   PRODUCT DATA STORE
   ============================================================ */
const products = [
    {
        id: 'eternal-rose-classic',
        name: 'Eternal Rose Classic',
        type: 'Luxury Box',
        description: 'Our signature arrangement featuring a dozen meticulously preserved roses in a handcrafted velvet-lined box.',
        fullDescription: 'The Eternal Rose Classic is our flagship creation—a dozen perfectly preserved roses arranged in a bespoke velvet-lined luxury box. Each rose is harvested at peak bloom in the highlands of Ecuador and treated with our proprietary preservation process, ensuring they remain soft, vibrant, and breathtakingly beautiful for up to three years.',
        colors: ['#B84550', '#F2D4D8', '#FFFEF9'],
        colorNames: ['Deep Rose', 'Soft Pink', 'Ivory White'],
        occasion: ['anniversary', 'valentine', 'gift'],
        collection: 'classic',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
        ],
        features: [
            '12 preserved Ecuadorian roses',
            'Handcrafted velvet-lined presentation box',
            'Delicate baby\'s breath accents',
            'Signature Eternal Flowers gift packaging',
            'Certificate of authenticity included'
        ],
        careInstructions: 'Keep away from direct sunlight and humidity. Do not water. Lightly dust with a soft brush as needed.',
        relatedIds: ['velvet-bloom-bouquet', 'golden-hour-collection', 'grand-romance']
    },
    {
        id: 'velvet-bloom-bouquet',
        name: 'Velvet Bloom Bouquet',
        type: 'Bouquet',
        description: 'A lush mixed bouquet of preserved roses, hydrangeas, and eucalyptus wrapped in premium tissue.',
        fullDescription: 'The Velvet Bloom Bouquet combines the softness of preserved roses with the textural beauty of hydrangeas and fragrant eucalyptus. Hand-tied and wrapped in luxury tissue paper with our signature silk ribbon.',
        colors: ['#F2D4D8', '#C9A96E', '#D8C4E8'],
        colorNames: ['Soft Pink', 'Champagne', 'Lavender'],
        occasion: ['birthday', 'home', 'gift'],
        collection: 'classic',
        longevity: 'Up to 2 years',
        images: [
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504196606671-a1c1f4e5e7c2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['Mixed preserved roses and hydrangeas', 'Hand-tied with silk ribbon', 'Gift card included'],
        careInstructions: 'Display in a dry area away from direct sunlight. Do not expose to moisture.',
        relatedIds: ['eternal-rose-classic', 'petite-grace', 'blush-paradise']
    },
    {
        id: 'golden-hour-collection',
        name: 'Golden Hour Collection',
        type: 'Luxury Box',
        description: 'Champagne-toned preserved roses accented with gold-dusted foliage in an elegant hexagonal box.',
        fullDescription: 'Inspired by the warm glow of golden hour, this exclusive collection features champagne and gold-toned preserved roses arranged in a striking hexagonal display box.',
        colors: ['#C9A96E', '#DFC89B', '#F5F0E8'],
        colorNames: ['Champagne Gold', 'Warm Gold', 'Cream'],
        occasion: ['wedding', 'anniversary', 'gift'],
        collection: 'premium',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1504196606671-a1c1f4e5e7c2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['18 champagne-toned roses', 'Gold-dusted fern accents', 'Hexagonal box'],
        careInstructions: 'Keep in a cool, dry environment. Avoid direct sunlight.',
        relatedIds: ['eternal-rose-classic', 'grand-romance', 'midnight-elegance']
    },
    {
        id: 'petite-grace',
        name: 'Petite Grace',
        type: 'Glass Dome',
        description: 'A single exquisite preserved rose under a glass dome—minimalist perfection.',
        fullDescription: 'Petite Grace is a study in minimalist luxury. A single, flawless preserved rose displayed beneath a hand-blown glass dome on a polished marble base.',
        colors: ['#B84550', '#FFFEF9', '#F2D4D8'],
        colorNames: ['Deep Rose', 'Ivory', 'Blush Pink'],
        occasion: ['home', 'gift', 'valentine'],
        collection: 'minimal',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['Single preserved rose', 'Glass dome', 'Marble base'],
        careInstructions: 'Keep the glass dome in place to protect from dust.',
        relatedIds: ['velvet-bloom-bouquet', 'serenity-white', 'blush-paradise']
    },
    {
        id: 'grand-romance',
        name: 'Grand Romance',
        type: 'Vase Arrangement',
        description: 'A magnificent large-scale arrangement of 36 preserved roses in a crystal-cut vase.',
        fullDescription: 'Grand Romance is our most opulent offering. Thirty-six preserved roses in a breathtaking crystal-cut vase create a statement piece that commands attention.',
        colors: ['#B84550', '#F2D4D8', '#FFFEF9', '#C9A96E'],
        colorNames: ['Deep Rose', 'Soft Pink', 'Ivory', 'Champagne'],
        occasion: ['wedding', 'anniversary', 'valentine'],
        collection: 'bespoke',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['36 preserved roses', 'Crystal-cut vase', 'White-glove delivery'],
        careInstructions: 'Display in a climate-controlled room. Avoid air conditioning vents.',
        relatedIds: ['golden-hour-collection', 'eternal-rose-classic', 'midnight-elegance']
    },
    {
        id: 'serenity-white',
        name: 'Serenity White',
        type: 'Luxury Box',
        description: 'Pure ivory-white preserved roses in a sleek white lacquer box—serene and sophisticated.',
        fullDescription: 'Serenity White captures the purity of freshly fallen snow with a collection of ivory-white preserved roses arranged in a glossy white lacquer box.',
        colors: ['#FFFEF9', '#F5F0E8', '#E8E5E5'],
        colorNames: ['Ivory White', 'Warm Cream', 'Pearl'],
        occasion: ['wedding', 'home', 'gift'],
        collection: 'minimal',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504196606671-a1c1f4e5e7c2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['24 ivory-white roses', 'White lacquer box', 'Magnetic closure'],
        careInstructions: 'Wipe the lacquer box with a soft, dry cloth.',
        relatedIds: ['petite-grace', 'blush-paradise', 'velvet-bloom-bouquet']
    },
    {
        id: 'blush-paradise',
        name: 'Blush Paradise',
        type: 'Heart Shape',
        description: 'A romantic heart-shaped arrangement of blush pink preserved roses.',
        fullDescription: 'Blush Paradise is romance reimagined. Soft pink preserved roses are artfully arranged in a heart-shaped display.',
        colors: ['#F2D4D8', '#FBE9EC', '#B84550'],
        colorNames: ['Blush Pink', 'Baby Pink', 'Rose Pink'],
        occasion: ['valentine', 'anniversary', 'birthday'],
        collection: 'seasonal',
        longevity: 'Up to 2 years',
        images: [
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['Heart-shaped arrangement', 'Gradient pink roses', 'Satin-lined base'],
        careInstructions: 'Keep in a stable, dry environment. Do not press on flowers.',
        relatedIds: ['eternal-rose-classic', 'petite-grace', 'velvet-bloom-bouquet']
    },
    {
        id: 'midnight-elegance',
        name: 'Midnight Elegance',
        type: 'Luxury Box',
        description: 'Deep burgundy and black-tipped preserved roses in a matte black box—dramatic and bold.',
        fullDescription: 'Midnight Elegance is for those who dare to be different. Deep burgundy roses with subtle black-tipped petals create a dramatic, sophisticated statement.',
        colors: ['#6B1D2A', '#2B2B2B', '#4A0E1A'],
        colorNames: ['Burgundy', 'Black-Tipped', 'Dark Crimson'],
        occasion: ['home', 'gift', 'anniversary'],
        collection: 'bespoke',
        longevity: 'Up to 3 years',
        images: [
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1490750967868-88aa4a7b5b6d?auto=format&fit=crop&w=800&q=80'
        ],
        features: ['18 burgundy roses', 'Matte black box', 'Limited collection'],
        careInstructions: 'Display in low to moderate light for best effect.',
        relatedIds: ['grand-romance', 'golden-hour-collection', 'serenity-white']
    }
];

// Shared card creation function
function createProductCard(product) {
    const colorDots = product.colors.map(color =>
        `<span class="product-card__color-dot" style="background-color:${color};" title="${product.colorNames ? product.colorNames[product.colors.indexOf(color)] : ''}"></span>`
    ).join('');

    return `
        <article class="product-card reveal" data-product-id="${product.id}">
            <a href="product-details.html?id=${product.id}" aria-label="View details for ${product.name}">
                <div class="product-card__image">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    <span class="product-card__badge">${product.collection}</span>
                </div>
                <div class="product-card__body">
                    <span class="product-card__type">${product.type}</span>
                    <h3 class="product-card__name">${product.name}</h3>
                    <p class="product-card__desc">${product.description}</p>
                    <div class="product-card__meta">
                        <span>${colorDots}</span>
                        <span class="product-card__longevity">⏳ ${product.longevity}</span>
                    </div>
                    <div class="product-card__footer">
                        <span class="product-card__btn">View Details <span class="arrow-icon">→</span></span>
                    </div>
                </div>
            </a>
        </article>
    `;
}