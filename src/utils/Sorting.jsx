export const sortOptionsList = [
    "Məhsulun adı ilə A-Z",
    "Məhsulun adı ilə Z-A",
    "Qiymətin artması",
    "Qiymətin azalması",
    "Endirim dərəcəsi artır",
    "Endirim dərəcəsi azalır",
    "Sonuncu əlavə edilən",
    "İlk əlavə edilən"
];

// Məhsulun əsl (müştərinin görəcəyi yekun) qiymətini hesablayan köməkçi funksiya
const getFinalPrice = (product) => {
    // Əgər bazada xüsusi "discountPrice" və ya "salePrice" adlı dəyişən varsa onu götür
    if (product.discountPrice) {
        return Number(product.discountPrice);
    }
    // Əgər faizlə endirim (discountPercent) varsa, yeni qiyməti riyazi olaraq hesabla
    if (product.discountPercent) {
        return Number(product.price) - (Number(product.price) * Number(product.discountPercent) / 100);
    }
    // Heç bir endirim yoxdursa, normal qiyməti qaytar
    return Number(product.price || 0);
};

export const Sorting = (products, sortOption) => {
    return [...products].sort((a, b) => {
        if (sortOption === "Məhsulun adı ilə A-Z") {
            return (a.title || "").localeCompare(b.title || "");
        }
        if (sortOption === "Məhsulun adı ilə Z-A") {
            return (b.title || "").localeCompare(a.title || "");
        }
        if (sortOption === "Qiymətin artması") {
            // Artıq getFinalPrice funksiyasını çağırırıq
            return getFinalPrice(a) - getFinalPrice(b);
        }
        if (sortOption === "Qiymətin azalması") {
            // Artıq getFinalPrice funksiyasını çağırırıq
            return getFinalPrice(b) - getFinalPrice(a);
        }
        if (sortOption === "Endirim dərəcəsi artır") {
            return Number(a.discountPercent || 0) - Number(b.discountPercent || 0);
        }
        if (sortOption === "Endirim dərəcəsi azalır") {
            return Number(b.discountPercent || 0) - Number(a.discountPercent || 0);
        }
        if (sortOption === "Sonuncu əlavə edilən") {
            return Number(b.id || 0) - Number(a.id || 0);
        }
        if (sortOption === "İlk əlavə edilən") {
            return Number(a.id || 0) - Number(b.id || 0);
        }
        return 0;
    });
};