const generateSlug = (text) => {
    if (!text) return "";

    const azMap = {
        'ç': 'c', 'ə': 'e', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
        'Ç': 'c', 'Ə': 'e', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
    };

    return text
        .split('')
        .map(char => azMap[char] || char)
        .join('')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
};


const ClothingSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const KidsSizes = ["YS 6/7 Yaş", "YM 8/9 Yaş", "YL 10/11 Yaş", "YXL 12/13 Yaş", "YXXL 14/15 Yaş"];

const products = [
    {
        id: 1,
        title: "Neftçi Kombat 2026/27 Uşaq Alternativ Forma",
        category: "formalar",
        subcategory: "Uşaq Formaları",
        price: 99.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/alternativ.webp",
            "/assets/img/products/alternativ-2.webp"
        ],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 2,
        title: "Neftçi Kombat 2026/27 Uşaq Qara Qızıl Səfər Forması",
        category: "formalar",
        subcategory: "Uşaq Formaları",
        price: 99.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/qara-qizil.webp",
            "/assets/img/products/qara-qizil-2.webp"
        ],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 3,
        title: "Neftçi Kombat 2026/27 Uşaq Ağ Qara Ev Forması",
        category: "formalar",
        subcategory: "Uşaq Formaları",
        price: 99.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/ag-qara.webp",
            "/assets/img/products/ag-qara-2.webp"
        ],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 4,
        title: "Neftçi Kombat 2026/27 Alternativ Forma",
        category: "formalar",
        subcategory: "2026/27 Mövsümü Forması",
        price: 119.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/alternativ.webp",
            "/assets/img/products/alternativ-2.webp"
        ],
        sizes: ClothingSizes,
        description: `“Kappa” tərəfindən “Neftçi” üçün eksklüziv olaraq hazırlanan, 2026/27 mövsümünün üçüncü oyun dəsti “Bakı” adlanır. Bu forma klubumuzun doğulduğu şəhərə ithaf olunub və Bakının memarlıq irsi ilə “Neftçi”nin zəngin tarixini özündə birləşdirən xüsusi dizaynı ilə seçilir.

Bakı günəşi kimi sarı rəngli formanın ön tərəfində şəhərimizin ən tanınmış simvollarından olan Qız qalası ilə klubumuzun tarixi və adının ayrılmaz hissəsinə çevrilmiş neft buruğunun təsvirləri əsasında xüsusi ornament hazırlanıb. Bu elementlər Bakının keçmişi ilə “Neftçi”nin irsini vahid dizaynda birləşdirərək formaya özünəməxsus tərz qazandırır.

Formanın boyun hissəsində yer alan “Bakı – Neftçidir” yazısı isə klubumuzla şəhərimiz arasında onilliklər ərzində formalaşmış ayrılmaz bağı simvolizə edir. Bu ifadə nəsillər boyu davam edən ənənəni, mənsubiyyəti və “Neftçi”nin Bakı futbolundakı yerini vurğulayır.

Müasir dizaynı, eksklüziv ornamenti və dərin simvolik məzmunu ilə “Bakı” forması “Neftçi”nin köklərinə ehtiramın, doğma şəhərimizə sevginin və bu şəhərlə bölüşdüyü ortaq tarixə sədaqətin təcəssümüdür.`
    },
    {
        id: 5,
        title: "Neftçi Kombat 2026/27 Qara Qızıl Səfər Forması",
        category: "formalar",
        subcategory: "2026/27 Mövsümü Forması",
        price: 119.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/qara-qizil.webp",
            "/assets/img/products/qara-qizil-2.webp"
        ],
        sizes: ClothingSizes,
        description: `2026/27 mövsümünün səfər oyun dəsti “Qara Qızıl” adını daşıyır. Tamamilə qara rəngdə hazırlanan forma qızılı detalları ilə klubumuzun da adını götürdüyü, milli sərvətimiz olan neftə ehtiramın simvoludur.

“Neftçi” sadəcə bir klub adı deyil. O, onilliklərdir milyonlarla insanın qəlbində yaşayan dəyərdir. Məhz buna görə də bu formanın əsas rəngləri qara və qızılı seçilib. Qara – nefti, qızılı isə onun dəyərini ifadə edir.

“Kappa” tərəfindən eksklüziv olaraq “Neftçi” üçün hazırlanan formada klubumuzun embleminin iki əsas elementi – neft buruğu və “N” hərfi əsasında xüsusi ornament hazırlanıb. Bu naxış yalnız bu forma üçün yaradılıb və onu tamamilə unikal edir.

Minimalist görünüşü, özəl naxışları və qızılı detalları ilə “Qara Qızıl” müasir dizaynı klubumuzun tarixi ilə birləşdirir. Hər detal “Neftçi” adının haradan gəldiyini və nəyi təmsil etdiyini xatırladır.

“Qara Qızıl” – adımızın gücü, rənglərimizin dəyəri və “Neftçi” ruhunun təcəssümüdür.`
    },
    {
        id: 6,
        title: "Neftçi Kombat 2026/27 Ağ Qara Ev Forması",
        category: "formalar",
        subcategory: "2026/27 Mövsümü Forması",
        price: 119.00,
        discountPercent: 0,
        images: [
            "/assets/img/products/ag-qara.webp",
            "/assets/img/products/ag-qara-2.webp"
        ],
        sizes: ClothingSizes,
        description: `“Əfsanə zolaqlı” adını daşıyan, 2026/27 mövsümünün ev oyun dəsti, “Neftçi”nin 90 illik tarixinə ehtiram əlaməti olaraq, klubumuzun əfsanəvi ağ-qara zolaqlarını yenidən meydanlara qaytarır.

Klub tarixində ən çox istifadə olunan və “Neftçi” kimliyinin ayrılmaz simvoluna çevrilən zolaqlı forma yeni mövsümdən etibarən yenidən əsas ev forması kimi istifadə olunacaq. 

“Kappa” tərəfindən eksklüziv olaraq “Neftçi” üçün hazırlanan formada ağ rəngin üstünlük təşkil etdiyi klassik dizayn klubun zəngin keçmişi ilə gələcəyə olan iddiasını bir araya gətirir. Formanın boyun hissəsində “Neftçi”nin 90 illik yubileyinə həsr olunmuş xüsusi loqo yer alır. Bu detal klubun şanlı tarixini, nəsilləri birləşdirən irsini və yubiley mövsümünün ruhunu əks etdirərək formaya xüsusi məna qazandırır.

“Əfsanə zolaqlı” sadəcə yeni forma deyil. Bu forma “Neftçi”nin tarixini, kimliyini və ənənələrini gələcəyə daşıyan bir simvoldur. O, illərin xatirəsidir. Tribunaların səsi, minlərlə ürəyin eyni anda döyüntüsüdür.

Bu zolaqlar əfsanələrin çiyinlərində tarix yazıb. Kapitanların qəlbində xarakter qazanıb. Bu zolaqların arasında qələbə sevinci, kədərli anlar, yenidən ayağa qalxmaq əzmi, heç vaxt təslim olmamaq ruhu var.

Nəsillər dəyişir, stadionlar dəyişir, amma dəyişməyən bir şey qalır - kimliyimiz. O, “Neftçi” üçün irsdir, xarakterdir, bir ömürlük sevgidir. Bu gün isə tarix yenidən öz rənglərinə qayıdır. 

“Əfsanə zolaqlı” - dünənimiz, bu günümüz və sabahımızdır.`
    },
    {
        id: 7,
        title: "Neftçi Kombat 2026/27 Alternativ Forma şort",
        category: "formalar",
        subcategory: "Şortlar",
        price: 55.00,
        discountPercent: 0,
        images: ["/assets/img/products/alternativ-short.webp"],
        sizes: [...KidsSizes, ...ClothingSizes],
        description: ""
    },
    {
        id: 8,
        title: "Neftçi Kombat 2026/27 Qara Qızıl Səfər Forma şort",
        category: "formalar",
        subcategory: "Şortlar",
        price: 55.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-qizil-short.webp"],
        sizes: [...KidsSizes, ...ClothingSizes],
        description: ""
    },
    {
        id: 9,
        title: "Neftçi Kombat 2026/27 Ağ Qara Ev Forma şort",
        category: "formalar",
        subcategory: "Şortlar",
        price: 55.00,
        discountPercent: 0,
        images: ["/assets/img/products/ag-qara-short.webp"],
        sizes: [...KidsSizes, ...ClothingSizes],
        description: ""
    },
    {
        id: 10,
        title: "Neftçi Mokiba Pro 2026/27 Məşq Köynəyi (Qara)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 65.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-koyneyi-qara.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 11,
        title: "Neftçi Mıxıozip Pro 2026/27 Məşq Şort (Qara)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 70.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-short-qara.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 12,
        title: "Neftçi Muzira Pro 2026/27 Uzunqol Məşq Köynəyi (Ağ)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 99.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-koyneyi-ag.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 13,
        title: "Neftçi Mokiba Pro 2026/27 Məşq Köynəyi (Ağ)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 65.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-koyneyi-ag2.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 14,
        title: "Neftçi Muzira Pro 2026/27 Uzunqol Məşq Köynəyi (Qara)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 99.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-koyneyi-qara2.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 15,
        title: "Neftçi Mexino Pro 2026/27 Məşq Şalvari (Qara)",
        category: "məşq geyimləri",
        subcategory: "",
        price: 89.00,
        discountPercent: 0,
        images: ["/assets/img/products/mesq-salvari.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 16,
        title: "Banişevski Ağ T-shirt",
        category: "moda",
        subcategory: "Neftçi x Gunah",
        price: 60.00,
        discountPercent: 0,
        images: ["/assets/img/products/banishevski-qabaq.webp", "/assets/img/products/banishevski-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 17,
        title: "Sümbül QARA T-SHIRT",
        category: "moda",
        subcategory: "Neftçi x Gunah",
        price: 60.00,
        discountPercent: 0,
        images: ["/assets/img/products/sumbul-qabaq.webp", "/assets/img/products/sumbul-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 18,
        title: "Ҝ Top Ag T-shirt",
        category: "moda",
        subcategory: "Neftçi x Gunah",
        price: 60.00,
        discountPercent: 0,
        images: ["/assets/img/products/top-qabaq.webp", "/assets/img/products/top-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 19,
        title: "Neftçi Bakı Ağ T-shirt",
        category: "moda",
        subcategory: "Neftçi x Gunah",
        price: 60.00,
        discountPercent: 0,
        images: ["/assets/img/products/baki-qabaq.webp", "/assets/img/products/baki-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 20,
        title: "Neftçi Ağ Polo",
        category: "moda",
        subcategory: "T-Shirt - Polos",
        price: 49.99,
        discountPercent: 0,
        images: ["/assets/img/products/polo-ag.webp", "/assets/img/products/polo-ag2.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Zərif və rahat ağ polo köynək."
    },
    {
        id: 21,
        title: "Neftçi Qara Polo",
        category: "moda",
        subcategory: "T-Shirt - Polos",
        price: 49.99,
        discountPercent: 0,
        images: ["/assets/img/products/polo-qara.webp", "/assets/img/products/polo-qara2.webp"],
        sizes: ClothingSizes,
        description: " Neftçi ruhunu üzərində daşı! Həm gündəlik, həm də idman üslubu üçün ideal qara polo."
    },
    {
        id: 22,
        title: "Neftçi Qara T-shirt",
        category: "moda",
        subcategory: "T-Shirt - Polos",
        price: 39.99,
        discountPercent: 0,
        images: ["/assets/img/products/qara-tshirt.webp", "/assets/img/products/qara-tshirt2.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Qara rəngli rahat və dəbli T-shirt."
    },
    {
        id: 23,
        title: "Neftçi Boz T-shirt",
        category: "moda",
        subcategory: "T-Shirt - Polos",
        price: 39.99,
        discountPercent: 0,
        images: ["/assets/img/products/boz-tshirt.webp", "/assets/img/products/boz-tshirt2.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Hər mövsüm geyilə bilən boz T-shirt."
    },
    {
        id: 24,
        title: "Əfsanə 9 Polo",
        category: "moda",
        subcategory: "Əfsanə 9 Məhdud Kolleksiya",
        price: 65.00,
        discountPercent: 0,
        images: ["/assets/img/products/efsane9-qabaq.webp", "/assets/img/products/efsane9-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 25,
        title: "Əfsanə 9 T-shirt",
        category: "moda",
        subcategory: "Əfsanə 9 Məhdud Kolleksiya",
        price: 30.00,
        discountPercent: 0,
        images: ["/assets/img/products/tshirt9-qabaq.webp", "/assets/img/products/tshirt9-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 26,
        title: "Nefçi Boz Hoodie",
        category: "moda",
        subcategory: "Hoddies - Sweatshirts",
        price: 89.99,
        discountPercent: 0,
        images: ["/assets/img/products/hoodie1-qabaq.webp", "/assets/img/products/hoodie1-arxa.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! İsti və rahat boz hoodie ilə üşümə."
    },
    {
        id: 27,
        title: "Nefçi Qara Hoodie",
        category: "moda",
        subcategory: "Hoddies - Sweatshirts",
        price: 89.99,
        discountPercent: 0,
        images: ["/assets/img/products/hoodie2-qabaq.webp", "/assets/img/products/hoodie2-arxa.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Qara, rahat və dəbli hoodie."
    },
    {
        id: 28,
        title: "Nefçi Boz Sweatshirt",
        category: "moda",
        subcategory: "Hoddies - Sweatshirts",
        price: 79.99,
        discountPercent: 0,
        images: ["/assets/img/products/sweatshirt1-qabaq.webp", "/assets/img/products/sweatshirt1-arxa.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Soyuq günlərdə sizi isidəcək."
    },
    {
        id: 29,
        title: "Nefçi Boz Jaket",
        category: "moda",
        subcategory: "Hoddies - Sweatshirts",
        price: 99.99,
        discountPercent: 0,
        images: ["/assets/img/products/jaket1-qabaq.webp", "/assets/img/products/jaket1-arxa.webp"],
        sizes: ClothingSizes,
        description: "Neftçi ruhunu üzərində daşı! Rahat və isti boz jaket."
    },
    {
        id: 30,
        title: "Neftçi Mekolo Pro 2026/27 (Ağ)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 80.00,
        discountPercent: 0,
        images: ["/assets/img/products/ag-shirt1.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 31,
        title: "Neftçi Mekolo Pro 2026/27 (Qara)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 80.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-shirt1.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 32,
        title: "Neftçi Mıllıdo 2026/27 T-shirt (Ağ)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 50.00,
        discountPercent: 0,
        images: ["/assets/img/products/ag-tshirt1.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 33,
        title: "Neftçi Mıllıdo 2026/27 T-shirt (Qara)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 50.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-tshirt1.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 34,
        title: "Neftçi Masco Pro 2026/27 (Ağ)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 55.00,
        discountPercent: 0,
        images: ["/assets/img/products/ag-tshirt2.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 35,
        title: "Neftçi Masco Pro 2026/27 (Qara)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 55.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-tshirt3.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 36,
        title: "Neftçi Messo İdman Şalvari 2026/27 (Qara)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 99.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-salvar.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 37,
        title: "Neftçi Mafio İdman Şort 2026/27 (Qara)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 80.00,
        discountPercent: 0,
        images: ["/assets/img/products/qara-short.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 38,
        title: "Neftçi Mequo Hoodie 2026/27 (Ağ)",
        category: "moda",
        subcategory: "Kappa Kolleksiyası",
        price: 150.00,
        discountPercent: 0,
        images: ["/assets/img/products/ag-hoodie.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 39,
        title: "Flaqman (şərf)",
        category: "aksesuarlar",
        subcategory: "Aksesuarlar",
        type: "Şərf",
        price: 19.99,
        discountPercent: 0,
        images: ["/assets/img/products/flaqman-1.webp", "/assets/img/products/flaqman-2.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 40,
        title: "Tarix 1937 (Şərf)",
        category: "aksesuarlar",
        subcategory: "Aksesuarlar",
        type: "Şərf",
        price: 24.99,
        discountPercent: 0,
        images: ["/assets/img/products/tarix-1937-1.webp", "/assets/img/products/tarix-1937-2.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 41,
        title: "Ağ-Qara (Şərf)",
        category: "aksesuarlar",
        subcategory: "Aksesuarlar",
        type: "Şərf",
        price: 29.99,
        discountPercent: 0,
        images: ["/assets/img/products/ag-qara-serf1.webp", "/assets/img/products/ag-qara-serf2.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 42,
        title: `"1937-dən bugünə" Təqvim`,
        category: "aksesuarlar",
        subcategory: "Aksesuarlar",
        type: "Təqvim",
        price: 10.00,
        discountPercent: 0,
        images: ["/assets/img/products/calendar.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 43,
        title: `"Azarkeşin səsi" Speaker`,
        category: "aksesuarlar",
        subcategory: "Aksesuarlar",
        type: "Speaker",
        price: 24.00,
        discountPercent: 0,
        images: ["/assets/img/products/speaker.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 44,
        title: "Avtomobil ətri",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Avto-ətir",
        price: 2.00,
        discountPercent: 0,
        images: ["/assets/img/products/avtoqoxu.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 45,
        title: "Neftçi Termofincan",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Termofincan",
        price: 17.00,
        discountPercent: 0,
        images: ["/assets/img/products/minitermos.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 46,
        title: "Neftçi Termos",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Termos",
        price: 28.00,
        discountPercent: 0,
        images: ["/assets/img/products/termos.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 47,
        title: "Pin Silver N",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Pin",
        price: 7.00,
        discountPercent: 0,
        images: ["/assets/img/products/gumush-pin.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 48,
        title: "Pin Gold N",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Pin",
        price: 7.00,
        discountPercent: 0,
        images: ["/assets/img/products/qizil-pin.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 49,
        title: "Pin 37 Edition",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Pin",
        price: 7.00,
        discountPercent: 0,
        images: ["/assets/img/products/37-pin.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 50,
        title: "Pin Retro 1937",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Pin",
        price: 7.00,
        discountPercent: 0,
        images: ["/assets/img/products/retro-pin.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 51,
        title: "İK10 Açarlıq (Brelok)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Açarlıq",
        price: 8.00,
        discountPercent: 0,
        images: ["/assets/img/products/10brelok-qabaq.webp", "/assets/img/products/10-arxa.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 52,
        title: "Əfsanəvi Açarlıq (Brelok)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Açarlıq",
        price: 8.00,
        discountPercent: 0,
        images: ["/assets/img/products/9brelok-qabaq.webp", "/assets/img/products/9brelok-arxa.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 53,
        title: "Neftçi Loqo Açarlıq (Brelok)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Açarlıq",
        price: 10.00,
        discountPercent: 0,
        images: ["/assets/img/products/logo-acarliq.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 54,
        title: "Fincan 1937 (Ağ)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Fincan",
        price: 15.00,
        discountPercent: 0,
        images: ["/assets/img/products/agstekan.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 55,
        title: "Fincan (Qara)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Fincan",
        price: 15.00,
        discountPercent: 0,
        images: ["/assets/img/products/qarastekan.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 56,
        title: "Fincan (Ağ)",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "Fincan",
        price: 15.00,
        discountPercent: 0,
        images: ["/assets/img/products/agstekan2.webp"],
        sizes: "",
        description: ""
    },
    {
        id: 57,
        title: "Neftçi Hədiyyəlik Qutusu",
        category: "aksesuarlar",
        subcategory: "Suvenirlər",
        type: "GiftBox",
        price: 100.00,
        discountPercent: 0,
        images: ["/assets/img/products/qutu.webp"],
        sizes: "",
        description: `🎁Neftçi azarkeşləri üçün xüsusi hazırlanmış eksklüziv hədiyyə paketi!

Hədiyyəlik qutunun tərkibi:

✏️ Neftçi Qələm

📓 Neftçi Dəftər

☕ Neftçi Termofincan

🧊 Neftçi Termos

📅 “1937-dən bugünə” Xüsusi Təqvim

🔊 “Azarkeşin Səsi” Speaker

Bu məhsulların hər biri ayrı-ayrılıqda satışda mövcuddur, lakin hədiyyəlik qutu formasında daha prestijli və sərfəlidir.

📦 Məhdud sayda istehsal olunub – tələsin, bitməmiş əldə edin!`
    },
    {
        id: 58,
        title: "Neftçi 2024/25 Uşaq Ev Forması",
        category: "outlet",
        subcategory: "",
        price: 90.00,
        discountPercent: 50,
        images: ["/assets/img/products/outlet-forma1.webp"],
        sizes: KidsSizes,
        description: `2024/25 mövsümündə “Neftçi”nin geyinəcəyi hər üç forma klubun zəngin tarixinin müxtəlif dövrlərindən və komandanın bağlı olduğu dəyərlərdən ilhamlanıb.



Ev dəstimizin tərtibatı zamanı köynəyin çiyin və V-şəkilli boğaz hissələrində komandamızın 1976-77-ci illərdə istifadə etdiyi formanın elementləri əsas götürülüb. Yeni oyun formamız Anatoli Banişevski və Səməd Qurbanov kimi “Neftçi” əfsanələrinin də geyindiyi dəstlərin retro cizgilərini daşımaqla yanaşı, müasir dizayn tendensiyalarına uyğun hazırlanıb.`
    },
    {
        id: 59,
        title: "Neftçi 2024/25 Uşaq Səfər Forması",
        category: "outlet",
        subcategory: "",
        price: 90.00,
        discountPercent: 50,
        images: ["/assets/img/products/outlet-forma2.webp"],
        sizes: KidsSizes,
        description: `2024/25 mövsümündə “Neftçi”nin geyinəcəyi hər üç forma klubun zəngin tarixinin müxtəlif dövrlərindən və komandanın bağlı olduğu dəyərlərdən ilhamlanıb.



Səfər dəstimizdə 1979-cu illərə göndərmə var. “Neftçi”nin 1979-cu il SSRİ Güclülər Dəstəsində geyindiyi forma və komandamızla ayrılmaz şəkildə bağlı olan – doğma Bakımızın da qoynunda yerləşdiyi Xəzər dənizinin Bakı buxtasının işıqları fonunda parlayan tünd göy rəngli suları.`
    },
    {
        id: 60,
        title: "Neftçi 2024/25 Uşaq Alternativ Forması",
        category: "outlet",
        subcategory: "",
        price: 90.00,
        discountPercent: 50,
        images: ["/assets/img/products/outlet-forma3.webp"],
        sizes: KidsSizes,
        description: `2024/25 mövsümündə “Neftçi”nin geyinəcəyi hər üç forma klubun zəngin tarixinin müxtəlif dövrlərindən və komandanın bağlı olduğu dəyərlərdən ilhamlanıb.



Alernativ dəstimizdə 1990-cı illərə göndərmə var. 1998/99 mövsümündə finalda “Şəmkir” üzərində qələbə qazanan “Neftçi” qara üfüqi zolaqlı sarı formada Azərbaycan kubokunu başı üzərinə qaldırmışdı. Yeni dəstlərimizdə də məhz həmin formanın cizgiləri özünü aşkar göstərir. Sarı rəng şəhərimiz üzərində il boyu parlayan günəşi, qara rəng isə adımızı da götürdüyümüz nefti simvolizə edir.`
    },
    {
        id: 61,
        title: "Neftçi Kombat 2025/26 Alternativ Forma",
        category: "outlet",
        subcategory: "",
        price: 119.00,
        discountPercent: 45,
        images: ["/assets/img/products/outlet-forma4-qabaq.webp", "/assets/img/products/outlet-forma4-arxa.webp"],
        sizes: ClothingSizes,
        description: `2025/26 mövsümünün alternativ oyun forması klubun tarixi bağlılıqdan ilhamlanaraq hazırlanıb. Ənənəvi ağ və qara rənglərin sintezi ilə yaradılan bu dəst, klassikanı müasir dizayn elementləri ilə birləşdirir. “Neftçi”nin əfsanəvi oyunçularının geyindiyi klassik üslub yenilənmiş formada təqdim olunur.`
    },
    {
        id: 62,
        title: "Neftçi Kombat 2025/26 Zəfər Forması",
        category: "outlet",
        subcategory: "",
        price: 119.00,
        discountPercent: 45,
        images: ["/assets/img/products/outlet-forma5-qabaq.webp", "/assets/img/products/outlet-forma5-arxa.webp"],
        sizes: ClothingSizes,
        description: `2025/26 mövsümünün səfər oyun forması Qarabağ Zəfərinin 5 illiyinə həsr olunmuş xüsusi oyun dəstidir. Bu forma sadəcə oyun dəsti olmaqla kifayətlənmir, xalqımızın qürurunun əyani ifadəsidir. Azərbaycanın zəfər ruhunu yaşadan bu forma, milli birliyin və əzmin rəmzi kimi meydanlarda öz yerini tutacaq.`
    },
    {
        id: 63,
        title: "Neftçi Kombat 2025/26 Banişevski Forması",
        category: "outlet",
        subcategory: "",
        price: 119.00,
        discountPercent: 45,
        images: ["/assets/img/products/outlet-forma6-qabaq.webp", "/assets/img/products/outlet-forma6-arxa.webp"],
        sizes: ClothingSizes,
        description: `2025/26 mövsümünün ev oyun forması, klubun zəngin tarixindən ilhamlanan retro dizayn nümunəsidir. Formanın üzərində, bu il anımını qeyd etdiyimiz klub əfsanəsi Anatoli Banişevskinin 80 illik yubileyinə həsr olunmuş xüsusi bir təsvir yer alır. Bu forma, şanlı keçmişimizə və iddialı gələcəyimizə ehtiramın simvolu olmaqla yanaşı, Banişevskinin Neftçi tarixi üçün daşıdığı əhəmiyyəti bir daha xatırladır. Formanın ensə hissəsində də bu yubileyi simvolizə edən xüsusi detal işlənmişdir.`
    },
    {
        id: 64,
        title: "Neftçi Kombat 2025/26 Uşaq Zəfər Forması",
        category: "outlet",
        subcategory: "",
        price: 109.00,
        discountPercent: 45,
        images: ["/assets/img/products/outlet-forma7-qabaq.webp", "/assets/img/products/outlet-forma7-arxa.webp"],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 65,
        title: "Neftçi Muzira Pro 2025/26 Uzunqol Məşq Köynəyi (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 130.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-mesq1-qabaq.webp", "/assets/img/products/outlet-mesq1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 66,
        title: "Neftçi Muzira Pro 2025/26 Uzunqol Məşq Köynəyi (Qara)",
        category: "outlet",
        subcategory: "",
        price: 130.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-mesq2-qabaq.webp", "/assets/img/products/outlet-mesq2-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 67,
        title: "Neftçi Mıragı Pro Məşq Şalvari (Qara)",
        category: "outlet",
        subcategory: "",
        price: 135.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-mesq3-qabaq.webp", "/assets/img/products/outlet-mesq3-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 68,
        title: "Neftçi Angato Polo (Qara-Ağ)",
        category: "outlet",
        subcategory: "",
        price: 80.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-polo1-qabaq.webp", "/assets/img/products/outlet-polo1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 69,
        title: "Neftçi Mıxıozip Pro Məşq Şort (Qara)",
        category: "outlet",
        subcategory: "",
        price: 90.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-short1-qabaq.webp", "/assets/img/products/outlet-short1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 70,
        title: "Neftçi Mokiba Pro 2025/26 Məşq Köynəyi (Qara)",
        category: "outlet",
        subcategory: "",
        price: 85.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-mesq4-qabaq.webp", "/assets/img/products/outlet-mesq4-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 71,
        title: "Neftçi Mokiba Pro 2025/26 Məşq Köynəyi (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 85.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-mesq5-qabaq.webp", "/assets/img/products/outlet-mesq5-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 72,
        title: "Neftçi Moxuno Pro Svitşöt (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 150.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-jaket1-qabaq.webp", "/assets/img/products/outlet-jaket1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 73,
        title: "Neftçi Moxuno Pro Svitşöt (Qara)",
        category: "outlet",
        subcategory: "",
        price: 150.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-jaket2-qabaq.webp", "/assets/img/products/outlet-jaket2-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 74,
        title: "Neftçi Mıllıdo T-shirt (Qara)",
        category: "outlet",
        subcategory: "",
        price: 75.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-tshirt1-qabaq.webp", "/assets/img/products/outlet-tshirt1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 75,
        title: "Neftçi Mıllıdo T-shirt (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 75.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-tshirt2-qabaq.webp", "/assets/img/products/outlet-tshirt2-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 76,
        title: "Neftçi Mıllıdo Uşaq T-shirt (Qara)",
        category: "outlet",
        subcategory: "",
        price: 65.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-tshirt3-qabaq.webp", "/assets/img/products/outlet-tshirt3-arxa.webp"],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 77,
        title: "Neftçi Mıllıdo Uşaq T-shirt (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 65.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-tshirt4-qabaq.webp", "/assets/img/products/outlet-tshirt4-arxa.webp"],
        sizes: KidsSizes,
        description: ""
    },
    {
        id: 78,
        title: "Neftçi Mafio İdman Şort (Qara)",
        category: "outlet",
        subcategory: "",
        price: 70.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-short2-qabaq.webp", "/assets/img/products/outlet-short2-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 79,
        title: "Neftçi Messo İdman Şalvari (Qara)",
        category: "outlet",
        subcategory: "",
        price: 130.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-salvar1-qabaq.webp", "/assets/img/products/outlet-salvar1-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 80,
        title: "Neftçi Mequo Hoodie (Ağ)",
        category: "outlet",
        subcategory: "",
        price: 175.00,
        discountPercent: 40,
        images: ["/assets/img/products/outlet-hoodie-qabaq.webp", "/assets/img/products/outlet-hoodie-arxa.webp"],
        sizes: ClothingSizes,
        description: ""
    },
    {
        id: 81,
        title: "Neftçi 88 Big & Bold Premium",
        category: "outlet",
        subcategory: "",
        price: 150.00,
        discountPercent: 33,
        images: ["/assets/img/products/outlet-forma88.webp", "/assets/img/products/outlet-forma88-2.webp"],
        sizes: ClothingSizes,
        description: `“Neftçi” PFK-nın 88 illik yubileyinə özəl hazırlanan premium limited edition forma. Tarixi irs, modern dizayn və qürurun mükəmməl vəhdəti!`
    },
]





export const AllProducts = products.map(product => ({
    ...product,
    slug: generateSlug(product.title)
}));