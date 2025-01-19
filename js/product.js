const products = [
    // list of Phones & Accessories
    {
        id: 0,
        brand: "",
        name: "",
        category: "",
        color: "",
        storage: "",
        rating: "",
        reviews: "",
        price: "",
        image: "img/products/No-Image-Placeholder.jfif",
        display: "",
        camera: "",
        frontCamera: "",
        faceOrTouchID: "",
        chip: "",
        splashWaterAndDustResistant: "",
        inTheBox: "",
        charging: "", 
        link: ""
    },
    {
        id: 1,
        brand: "Apple",
        name: "Apple iPhone 15 (128 GB) - Green",
        category: "Phones & Accessories",
        color: "Green",
        storage: "128 GB",
        rating: 4.8,
        reviews: "1.24k",
        price: 79900,
        image: "img/products/phone & accessories/iphone 15.jpg",
        display: "Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display",
        camera: "Dual 48MP camera system (Ultra Wide and Main)",
        frontCamera: "12MP TrueDepth camera",
        faceOrTouchID: "Face ID",
        chip: "A16 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU,16‑core Neural Engine",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        inTheBox: "iPhone with iOS 17, USB-C Charge Cable (1 m), Documentation",
        charging: "Compatible with MagSafe accessories and Qi wireless chargers	", 
        link: "https://www.amazon.in/gp/aw/d/B0CHX6NQMD/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=69c382013700199a3fc322dc4f40afc7&hsa_cr_id=0&qid=1732359609&sr=1-2-e0fa1fdd-d857-4087-adda-5bd576b25987&ref_=sbx_be_s_sparkle_lsi4d_asin_1_bkgd&pd_rd_w=G4xep&content-id=amzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d%3Aamzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_p=df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_r=RWVQ64RX46MX6PJYBX9H&pd_rd_wg=w07t0&pd_rd_r=3b5cf6ec-2a94-4f06-84a5-f9076504d37c"
    },
    {
        id: 2,
        brand: "Apple",
        name: "Apple iPhone 13 (128 GB) - Blue",
        category: "Phones & Accessories",
        color: "Blue",
        storage: "128 GB",
        rating: 4.5,
        reviews: "1.20k",
        price: 59600,
        image: "img/products/phone & accessories/iphone 13.jpg",
        display: "6.1-inch (15.5 cm diagonal) Super Retina XDR display",
        camera: "Dual 12MP camera system (Ultra Wide and Wide)",
        frontCamera: "12MP TrueDepth camera	",
        faceOrTouchID: "Face ID",
        chip: "A15 Bionic chip with 6-core CPU (2 performance and 4 efficiency cores), 4-core GPU, and 16-core Neural Engine",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529",
        inTheBox: "iPhone with iOS 15, USB-C to Lightning Cable, Documentation",
        charging: "Compatible with MagSafe accessories and Qi wireless chargers	",
        link: "https://www.amazon.in/Apple-iPhone-13-256-GB/dp/B09G9BL5CP/ref=sr_1_5?crid=2FD52ZBGNFB76&dib=eyJ2IjoiMSJ9.8h9A_YSPiLCsRbGj7EQ9to9vZbj7fK5LsdSGrYPeG5JRAB-avWFy-zfLj8q2UVdz9Um3Hp9p1pzuqMQB-KNQfzhCvasYdLZFsg9TCm7SW8ypN67nue02b8cupQ5pSST3VOHho00XStOGuY0nrqtkspt7cfSlByr3gzdvPTM7X9oHpESdXvs-fF10kQYXVpyQI2fHMt4T-pYCii8jyzeDJL3HjAJExFLen55gVbAYR2yyIf3K8DYbit3e2WTYLsgkRCEPzI2uaEFkVr9gdEe14xuQ9vlD9WVoFF277HrCtEA.aIkvkIGEbcZKyy7t6C5MoURTlw8Ep7_URT8d_OZdPOk&dib_tag=se&keywords=iphone%2B13%2Bb%3Bue&nsdOptOutParam=true&qid=1732710608&sprefix=iphone%2B13%2Bb%2B%2Caps%2C347&sr=8-5&th=1"
    },
    {
        id: 3,
        brand: "Apple",
        name: "Apple iPhone 16 (128 GB) - Ultrmarine",
        category: "Phones & Accessories",
        color: "Ultrmarine",
        storage: "128 GB",
        rating: 4.5,
        reviews: "1.20k",
        price: 89900,
        image: "img/products/phone & accessories/iphone 16+.jpg",
        display: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2796x1290-pixel resolution at 460 ppi",
        camera: "Advanced dual-camera system 48MP Fusion: 26 mm, ƒ/1.6 aperture, sensor‑shift optical image stabilisation, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)	",
        frontCamera: "12MP TrueDepth camera	",
        faceOrTouchID: "Face ID",
        chip: "A18 chip New 6‑core CPU with 2 performance and 4 efficiency cores New 5‑core GPU New 16‑core Neural Engine	",
        splashWaterAndDustResistant: "Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529	",
        inTheBox: "iPhone with iOS 18, USB-C Charge Cable (1 m), Documentation",
        charging: "Compatible with MagSafe accessories and Qi wireless chargers	",
        link: "https://www.amazon.in/Apple-iPhone-Plus-128-Ultramarine/dp/B0DGJ65N7V/ref=sr_1_6?crid=2OFRPPV84UDHP&dib=eyJ2IjoiMSJ9.rgU948Jdslyo0k8J1OOl1sIHvyK84K-T0FPb48P_2v2GJv4Yh5rq6QsOY2gh4EqxDGL0tedxAizf1gKleiDBxYOYvLxryhSAtcQa3x6WyvKBcG_6TiRx81TK96vhoXFfGXjJ5KPv5nv3rZKwec-BDlCxVLbKzTGt_3tt7WTrwRnCumKMWCN4fKXJ4CtZdEflhFCRJ9_TEzMTKzzptAxGcpSuCQfm9QnSMxOeKcUi_KU.TlERHh5YHwWdNfbIhtjbuxMOdlYLjqTmkDxvaAXBKqo&dib_tag=se&keywords=iphone%2B16%2Bplus&qid=1732711048&sprefix=iphone%2B16%2Bpl%2Caps%2C354&sr=8-6&th=1"
    },
    {
        id: 4,
        brand: "Apple",
        name: "Apple iPad Air 5th Gen (64GB) - Space Gray",
        category: "Phones & Accessories",
        color: "Space Gray",
        storage: "64 GB",
        rating: 4.3,
        reviews: "1k",
        price: 74900,
        image: "img/products/phone & accessories/Apple-ipad-air.jpg",
        display: "10.9-inch Liquid Retina with True Tone",
        camera: "12MP Wide camera with Smart HDR 3 and 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps",
        frontCamera: "12MP Ultra Wide front camera with Center Stage and Smart HDR",
        faceOrTouchID: "Touch ID",
        chip: "Apple M1 chip with 64-bit desktop-class architecture with 8-core CPU, 8-core GPU, Next-generation Neural Engine",
        splashWaterAndDustResistant: "While the iPad Air is built for durability, it does not come with an IP rating for water or dust resistance. Users should avoid exposure to moisture or harsh environments.",
        inTheBox: "iPad Air, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter",
        charging: "Supports fast charging with the included 20W USB-C Power Adapter",
        link: "https://www.amazon.in/Apple-iPad-Air-10-9-inch-27-69-Cellular/dp/B09V4JW485/ref=sr_1_2_sspa?crid=2ZOSUT2UN9BMH&dib=eyJ2IjoiMSJ9.X8byRGxRbpSmslMDzA2MWqxd_YmOpPyuUWpi7Ueb0lOCUybwFBLA4viwr6bOfxloAFht5VUrABA9GiqXHxqVctMH6FEh0mHPPuyFSus1i4MaB0YfSRHDFbSx_HJLnUygqIgYk1ALZP8MirAcymM-YcF9nZ-REH0SyGUVh-ZaUlQVxIrXbHAtPwrQbKeez76uu4P7oSnpLK4W5atONm7P8m33Pd4l1KkxXHHi_LehEqg.PruB-Z5BenCM6lJbVTil6_M2dNOWQsphrsF3N1MZlSU&dib_tag=se&keywords=apple+ipad+air&nsdOptOutParam=true&qid=1732711332&sprefix=apple+ipad+air%2Caps%2C392&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 5,
        brand: "Xiaomi",
        name: "Redmi 12 (128GB) - Moonstone Silver",
        category: "Phones & Accessories",
        color: "Moonstone Silver",
        storage: "128 GB",
        rating: 3.6,
        reviews: "1k",
        price: 15999,
        image: "img/products/phone & accessories/Redmi 12.webp",
        display: "Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
        camera: "50MP f/1.8 AI Triple Camera (includes 8MP Ultrawide and 2MP Macro",
        frontCamera: "8MP that Supports standard selfie modes with additional features like Night Mode and Portrait",
        faceOrTouchID: "Touch ID", 
        chip: "MediaTek Helio G88 octa-core processor with up to 2.0 GHz speed for reliable performance.",
        splashWaterAndDustResistant: "Splash-resistant, not fully waterproof. Can handle light water exposure but should avoid harsh environments.",
        inTheBox: "Power Adapter, SIM Tray Ejector, USB Cable",
        charging: "Supports 22.5W fast charging for quicker recharges, ensuring minimal downtime.",
        link: "https://www.amazon.in/Redmi-Moonstone-Silver-Storage-without/dp/B0CVQKGFWY/ref=sr_1_2?crid=2U417MAYDI4P1&dib=eyJ2IjoiMSJ9.h1ZH2PRJXX1Qy-RUemWKCB5Ge3a4FzKeSyl6_529ZLyD6roC1_GkFKRjctKVUtaWAagCYa68TUlXt1kJtQJzN4m1mYNA_VuUvWLkGRvCfYka3wdVhelqROn-NZ_DKMx6W2XF30RIFEVo-V8Kit9kbmchwdr7LGRSIaiCP-AwXYuoSKWv1iLkh6VEd0G7etVoG7TDN-yafT_KPbDe53EvnywIBg-ABRkh2L2iIKAl1X0.-ikzu6bWSPJA6p2a8DQSd28FhwmqNnAID1c4WqN0NHw&dib_tag=se&keywords=redmi+12&qid=1732717857&sprefix=redmi+1%2Caps%2C327&sr=8-2"
    },
    {
        id: 6,
        brand: "Xiaomi",
        name: "Redmi Buds 5C - Acoustic Black",
        category: "Phones & Accessories",
        color: "Acoustic Black",
        rating: 4.0,
        reviews: "1.5k",
        price: 4999,
        image: "img/products/phone & accessories/Redmi buds 5g.webp",
        display: "N/A",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "Touch Control for easy management of playback, calls, and modes",
        chip: " Bluetooth 5.3 chipset ensures stable connectivity and efficient performance",
        splashWaterAndDustResistant: "IP54-rated water and dust resistance, suitable for workouts and outdoor activities",
        inTheBox: "Eartip, User Manual",
        charging: "includes fast charging via Type-C cable, providing 2 hours of playback with a 10-minute charge",
        link: "https://www.amazon.in/Redmi-Bluetooth-Cancellation-Playback-Acoustic/dp/B0D7ZPN4HW/ref=sr_1_6?crid=2GRJ3VXUGAJRN&dib=eyJ2IjoiMSJ9.vu7eB-nnHHlrHsA9Y5DheIWWtptcQ_VrnghTfGgfkMTsQAiFLk_59OrL751SAWXgYFW8GBvwZQWQjc0W_zMkzLzp6Yky-vlnySuXBJbHl0vCIem3y4ocudMp4Q3-vXxq3NE21_NaabMdSsrkSIUK-n8IEOsxqFu0z-i1dEUBRumKjekJ1dM_Uku3wBnrDEfHT7rxStKjhgjflMLaya_5gYB1Bi0_HvyXaZDwSHembcA.8aGCRTg57vSykh3_uSTnEgZ-p6_MV6XtDJ1GSyNrm_s&dib_tag=se&keywords=redmi+buds+5&qid=1732718329&sprefix=redmi+buds+5%2Caps%2C453&sr=8-6"
    },
    {
        id: 7,
        brand: "Xiaomi",
        name: "Redmi Note 13 Pro+ (256GB) - Fusion Purple ",
        category: "Phones & Accessories",
        color: "Fusion Purple",
        storage: "256GB",
        rating: 3.8,
        reviews: "0.9k",
        price: 33999,
        image: "img/products/phone & accessories/Redmi note 13 pro+.webp",
        display: " 6.67 Inches; 120 Hz 3D Curved AMOLED 1.5K Display with Corning Gorilla Glass Victus; Resolution: 2712 x 1220 Pixels; Dolby Vision, Adaptive HDR 10+, 68.7billion colors, 1800nits Peak Brightnes",
        camera: "200MP main camera (Samsung ISOCELL HP3, OIS + EIS), 8MP ultrawide, 2MP macro",
        frontCamera: "16MP selfie camera, 7P lens, dual LED flash",
        faceOrTouchID: "Touch ID",
        chip: "MediaTek Dimensity 7200 Octa-core processor (4nm architecture) and Up to 2.8 GHz performance",
        splashWaterAndDustResistant: "IP68 Water Resistant, providing protection against dust and water exposure",
        inTheBox: "Power Adapter, USB Cable, SIM Tray Ejector",
        charging: "120W HyperCharge Fast Charging and uses Type-C connectivity for charging and data transfer",
        link: "https://www.amazon.in/Redmi-Fusion-Purple-Storage-Without/dp/B0CXXB7LYC/ref=sr_1_1?crid=1JY1CRVE0AMXL&dib=eyJ2IjoiMSJ9.VtVgBiNFYcNMIoyWorHrYx_McDxrljIstPVcRAlhQa6GBbPk-Z-hGg3DhEzaJGNnqVKmqHcb_wZY6C--xfARIBNrzra_Rb_ZMmSLuqhUHGVtIgY72cCJZY0nlsBVbEQRnqvE-E7G3U0sGpHztQIgG35ZspCUqmrYq_6GcfKwuc39ag-P5JqZKOHqrLm62YgLFLMYdb4vWO7T_9UBOF64AhuepCMMvtG1naBsK5A6fEI.vYn9eVBCiV2YwgPRTfh3UzI2twk3ZpNZPVa94FJbIZ8&dib_tag=se&keywords=redmi%2Bnote%2B13%2Bpro%2Bplus&qid=1732719359&s=electronics&sprefix=redmi%2Bnote%2B13%2Bpro%2Bplu%2Caps%2C355&sr=8-1&th=1"
    },
    {
        id: 8,
        brand: "Xiaomi",
        name: "Redmi Note 13 5G (256GB) - Stealth Black",
        category: "Phones & Accessories",
        color: "Stealth Black",
        storage: "256GB",
        rating: 3.7,
        reviews: "5.8k",
        price: 24999,
        image: "img/products/phone & accessories/Redmi note 13.jpg",
        display: "6.67inches FHD+ pOLED with 120Hz refresh rate, 1000nits peak brightness, and Corning Gorilla Glass 5 protection",
        camera: " 108MP 3X in-sensor zoom AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera",
        frontCamera: "16MP with AI features",
        faceOrTouchID: "Touch ID - Side fingerprint sensor",
        chip: "Mediatek Dimensity 6080 6nm Octa-core, up to 2.4GHz, 5G support",
        splashWaterAndDustResistant: "IP54 protection, making it splash, water, and dust resistant",
        inTheBox: "USB Cable, SIM Tray Ejector, USB OTG Adapter, Phone Case",
        charging: "5000 mAh battery with 33W fast charger in-box, Type-C connectivity",
        link: "https://www.amazon.in/Redmi-Stealth-Bezel-Less-Slimmest-Pro-Grade/dp/B0CQPFZ2MF/ref=sr_1_6?crid=M9SZCYKG1K4Z&dib=eyJ2IjoiMSJ9.fr78n3OpJ4MkGAMjrsQspZt_tQ4KD20aDAq431utuWFPylihEMRQ6hXEI8gziWllpHAV3F_CeyAJlez2vPupF7ZcudCnU_hBwZENS-_9ZgOAcj26z2nj9SMi9KV27LDojoZM_kaW-uUJtyipmxcqq-Ry703QcDW2JK48uH4Aqr2Bs7Jl7OILf0hX1fdy192yFiZpfuOCJXj_1QWUZgy3j-Ar6uhLqlaviIxqd7CE2-o.zRKLN_dT4o72syEmHVMLYfbHQzcW63xJFswV0t5ABXE&dib_tag=se&keywords=redmi%2Bnote%2B13&qid=1732720247&sprefix=redmi%2Bnote%2B13%2Bpro%2Bplus%2Caps%2C582&sr=8-6&th=1"
    },
    {
        id: 9,
        brand: "Samsung",
        name: "Samsung Galaxy A55 5G (128GB) - Awesome Navy",
        category: "Phones & Accessories",
        color: "Awesome Navy",
        storage: "128GB",
        rating: 4.1,
        reviews: "1k",
        price: 45999,
        image: "img/products/phone & accessories/Samsung A55.jpg",
        display: "6.6inches Super AMOLED, FHD+ 2340x1080 resolution, 120Hz refresh rate, Corning Gorilla Glass Victus+",
        camera: "50MP (F1.8) main camera, 12MP (F2.2) ultra-wide, 5MP (F2.4) macro camera",
        frontCamera: "32MP front camera (F2.2) provides high-quality selfies with features like Nightography and Super HDR video, offering enhanced low-light performance and clear, vibrant images",
        faceOrTouchID: "Touch ID - Side fingerprint sensor",
        chip: "Samsung Exynos 1480, 2.75GHz, 4nm Octa-core, 5G support",
        splashWaterAndDustResistant: " IP54 rated, offering protection against dust and water splashes, making it durable for everyday use and resistant to minor water exposur",
        inTheBox: "Smartphone, Data Cable (Type C-to-C), SIM Ejector Pin, Quick Start Guide",
        charging: " 5000mAh battery, 25W super-fast charging",
        link: "https://www.amazon.in/samsung-Galaxy-Awesome-Storage-Without/dp/B0CXMDGMQ4/ref=sr_1_3?crid=Q6GUCG3NE6IP&dib=eyJ2IjoiMSJ9.A18kso1Xmbx77JkdkvVPFq6k3pIXiMYYOejTr7txdSk8JFoxBJJ3GEUoZMzurtHGVvIBD4nx_6P6SpYoajQ6CsbR9nsqw42dBcz-26NCKY_tfr_PEYyvEskqqYNPDVSLVGoBdFRo8oKeVuwrSvAUeZ7fo5BB7ayL-I-X6X6VMk4m73yyNlg_D3ScEolZprwFOdNnrLm24pblNVq8aFv9IBXXwJvxwQ19EpCeGnv8Lig.vG_5fBGxeXQJBYa5ODVepaszfpQrEGsaeWBEGyzasX4&dib_tag=se&keywords=samsung%2Ba55&nsdOptOutParam=true&qid=1732721677&sprefix=samsung%2Ba55%2Caps%2C377&sr=8-3&th=1"
    },
    {
        id: 10,
        brand: "Samsung",
        name: "Samsung Galaxy in Ear Buds 3 - Silver",
        category: "Phones & Accessories",
        color: "Silver",
        rating: 3.1,
        reviews: "85",
        price: 19999,
        image: "img/products/phone & accessories/Samsung galaxy ear buds 3 pro.webp",
        display: "N/A",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "Touch control for volume and playback",
        chip: "Not specified (wireless Bluetooth connectivity)",
        splashWaterAndDustResistant: "Water-resistant",
        inTheBox: "Earbuds, wireless charging case, eartips, user manual",
        charging: "Wireless charging, 36 hours of battery life",
        link: "https://www.amazon.in/Samsung-Powered-Real-Time-Interpreter-Battery/dp/B0D7M34JXY/ref=sr_1_1_sspa?crid=2YZBBSS2Y26NV&dib=eyJ2IjoiMSJ9.VARoJnDAd2ywupT-B4blpzVdjq60A-K7aUaG3qcaDEPzpR1wMc2AMiKPtt80smqi53RYlsO5vRCMcajq4qqP8jrXokJ1v9cP6oCbUBKDtpNyXMuKEXOtwil3gDJXVQvEKMi5BkLsy00UqAh8Nmgs5Spq3hNdLFlTlHSR1UtnJXchXmBd-2u7r-OtrHch2gZO3vbeL4usoQcvq2_3geU_ZsEmqoiV2PpjROV5g15egVo.oaC5KaT2uXTQY-Z2GLoq-8eVTgbx1FAJx1uxr0qWNuI&dib_tag=se&keywords=Samsung+galaxy+ear+buds+3+pro&nsdOptOutParam=true&qid=1732722074&sprefix=samsung+galaxy+ear+buds+3+pro%2Caps%2C635&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 11,
        brand: "Samsung",
        name: "Samsung Galaxy Tab S9 (128GB) - Gray",
        category: "Phones & Accessories",
        color: "Gray",
        storage: "128GB",
        rating: 4.3,
        reviews: "1.1k",
        price: 44999,
        image: "img/products/phone & accessories/Samsung galaxy tab s9.webp",
        display: "10.9inches WQXGA (2304 x 1440), 90 Hz, vibrant and sharp visuals",
        camera: "8 MP for clear photos",
        frontCamera: "12 MP Ultra Wide for selfies and video calls",
        faceOrTouchID: "Touch ID",
        chip: "Powered by the Exynos 1380 for efficient performance",
        splashWaterAndDustResistant: "IP68-rated for tablet and S Pen",
        inTheBox: "USB Type-C Cable, Ejection Pin, Quick Start Guide, S Pen",
        charging: "8000 mAh battery with USB Type-C support for fast charging",
        link: "https://www.amazon.in/Samsung-Galaxy-Display-Expandable-Tablet/dp/B0CHZ38BPP/ref=sr_1_1_sspa?crid=3GQQYSKXQIVSO&dib=eyJ2IjoiMSJ9.ydbtyuMmnNaarKUEo9kF6YJRCf6vRM-htaJ79HbLR20Rm6-9weWLMC29sDaCsHoOrO_2pc7o6hDCJ1aqot_ZkvsKlkV-FV9g1eWW69NReP-67X0bUFnaarVQ0OiO618eBUH-vHeg87dsW7gyvR-_i86QUWG9ZX96xeeBDjAC7eAb9w2Yc0g_lUQGj4__MhrLDO76Ofhi36UD-94ND4gavBbYrJ0wB8wpZQPvBSdu4Ww.lHewnjjCJGvliCpEOCEU6GPGfscKsquDMLWaHd6RMXo&dib_tag=se&keywords=Samsung+galaxy+tab+s9&nsdOptOutParam=true&qid=1732722309&sprefix=samsung+galaxy+tab+s9%2Caps%2C552&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 12,
        brand: "Samsung",
        name: "Samsung Galaxy S23 Ultra 5G (256GB) - Green",
        category: "Phones & Accessories",
        color: "Green",
        storage: "256GB",
        rating: 4.5,
        reviews: "2.6k",
        price: 149999,
        image: "img/products/phone & accessories/Samsung S23 Ultra.jpg",
        display: "Dynamic AMOLED 2X with vibrant colors and sharp details. It supports adaptive 120Hz refresh rate for smooth visuals and battery efficiency, offering optimal clarity even at low or high brightness levels",
        camera: "200 MP Wide-angle with striking clarity and zoom capabilities and Other Camera Features like Photo Assist, Live Translate, and AI-based enhancements for better photos and communication.",
        frontCamera: "12 MP for high-quality selfies",
        faceOrTouchID: "Touch ID - The device supports fingerprint recognition (under-display) for security",
        chip: "Qualcomm Snapdragon 8 Gen 2 for Galaxy, with a clock speed of 2.99 GHz, optimized for gaming and performance",
        splashWaterAndDustResistant: "IP68 Water Resistant, providing protection against dust and water exposure up to 1.5 meters for 30 minutes",
        inTheBox: "Smartphone, USB Type C to C Cable, Stylus (S Pen), SIM Tray Ejector, User Manual",
        charging: "5000 mAh battery with fast and wireless charging support",
        link: "https://www.amazon.in/Samsung-Galaxy-Ultra-Green-Storage/dp/B0BT9CXXXX/ref=sr_1_1_sspa?crid=2EZMDBCT9AOPS&dib=eyJ2IjoiMSJ9.lcvJbHeQ3TwaK2eXXB1hsvfXG5cd1fvvAY731m0UQ1hjplR_r-sBKk2EeLsDEG74EAiRDf3dS6cMKjR1U6KpsAQ07tIlFwI5EeLdx-KP2PI_vhYsCGFmqJpcWuQp9ukVNgicbr_Bne1gmRBOTw8bzF14ZT9GuLGuthW79rtDJdGbzRJa329oEoUyNxqKsG2NTgJSDm0wNaaL5YLjZ2Cm39Ajm9SokGHxNqqMWBOps88.lpelBWLnDS7bRI9lGqZLVbwRZ3ryhyDgmrDNlDa7CO8&dib_tag=se&keywords=Samsung+S23+Ultra&nsdOptOutParam=true&qid=1732722549&sprefix=samsung+s23+ultra%2Caps%2C581&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 13,
        brand: "Samsung",
        name: "Samsung Galaxy A34 5G (128GB) - Awesome Violet",
        category: "Phones & Accessories",
        color: "Awesome Violet",
        storage: "128GB",
        rating: 4.2,
        reviews: "2.4k",
        price: 35499,
        image: "img/products/phone & accessories/Samsung A34.webp",
        display: "6.6-inch FHD+ Super AMOLED, 120Hz refresh rate, 1000 nits brightness with Vision Booster",
        camera: "48 MP main rear camera with OIS, 8 MP ultra-wide, 5 MP depth sensor",
        frontCamera: "13 MP (F2.2) for High-quality selfies",
        faceOrTouchID: "Touch ID - fingerprint recognition (under-display",
        chip: "MediaTek Dimensity 1080, Octa-Core with a max speed of 2.6 GHz",
        splashWaterAndDustResistant: "IP67, providing protection against Dustproof and water-resistant up to 1 meter for 30 minutes",
        inTheBox: "USB Cable and Smartphone",
        charging: "Supports Super Fast Charging with a 5000mAh battery",
        link: "https://www.amazon.in/Samsung-Galaxy-Awesome-Storage-Without/dp/B0BZP5MSYK/ref=sr_1_3?crid=37UW7BH8DUPY7&dib=eyJ2IjoiMSJ9.EytngWtHgkdGg5rpdwcTDtd82hvBiOE1t5YXcOverV_wiqfw6xcmF7C9ZMmGEe9Oktn0t6mxQCzdSWrAtpaxHgUZB5NN6Jl4QLlcGG1CMq_Rgdj5aqHIyHt1mrZQzQEWQWt9mkRssnOSvi35emHELTbMiYvIGjB5fRAjeT8sO0IXSbot5eZ6z2En2jfkmTpEa6YLGBbgP2F_n1f0VNsIHha8caA7ag_4cUF-E8qkYg0.lvQSTlS1sYaUgDdDgvUtZl_UMxhbZn_yC9uLuB4WF7Q&dib_tag=se&keywords=samsung%2BA34%2B5g&nsdOptOutParam=true&qid=1732955493&sprefix=samsung%2Ba34%2B5g%2Caps%2C364&sr=8-3&th=1"
    },
    {
        id: 14,
        brand: "Xiaomi",
        name: "Xiaomi 14 (512GB) - Jade Green",
        category: "Phones & Accessories",
        color: "Jade Green",
        storage: "512GB",
        rating: 4.2,
        reviews: "1k",
        price: 79999,
        image: "img/products/phone & accessories/Xiaomi 14.jpg",
        display: " 6.36-inch 1.5K 120Hz LTPO AMOLED, 3000 nits peak brightness, Corning Gorilla Glass Victus",
        camera: "50 MP Leica professional optics, 50 MP Telephoto-Macro, 50 MP Ultra-wide, Light Fusion 900 sensor, 8K video recording",
        frontCamera: "32 MP Selfie camera, Video recording in 4K at 60fps",
        faceOrTouchID: "Touch ID - In-display Fingerprint Sensor",
        chip: "Snapdragon 8 Gen 3, 4nm processor, UFS 4.0 Storage, LPDDR5X RAM",
        splashWaterAndDustResistant: "IP68 Water Resistant, providing protection against dust and water exposure",
        inTheBox: "Power Adapter, SIM Tray Ejector, USB Cable",
        charging: "Supports up to 90W wired fast charging and 50W fast wireless charging. Includes a 120W Hypercharger in the box",
        link: "https://www.amazon.in/Xiaomi-Storage-Professional-Optics-AMOLED/dp/B0CW3GQR3K/ref=sr_1_2?crid=3OIUZW90GZTFI&dib=eyJ2IjoiMSJ9.k52YTKtVRjLcjP_Mh8gxfQaCrncdSzNjpfJi_t8N4H476HwMwH-gvHil2UZdIGl-Ejaeni8z8R33UxE9Af6WukmM6XNLQPTqcPHDCnvmpx0eI5LTo6bjMGjisAztapDpjAO-q1wGdZH2BDPgZ68gg-s4PDYtrziuQUjvPJvo1j7j9VKJTvfVyXkuzdb2XJXAbocchWTnuy3-jLPnbLrc6Gnxy3uXDRpYM-gca7PpC6c.6vcxZfXH3q_QYOOLQlS4_53ygrIYhtrHtIP_NA7haiE&dib_tag=se&keywords=xiaomi%2B14&nsdOptOutParam=true&qid=1732956062&sprefix=xiaomi%2B1%2Caps%2C394&sr=8-2&th=1"
    },

    // list of Computer & Equipment
    {
        id: 15,
        brand: "Apple",
        name: "Apple MacBook Air Laptop (256GB SSD) - Space Grey",
        category: "Computer & Equipment",
        color: "Space Grey",
        storage: "256GB SSD",
        rating: 4.6,
        reviews: "4.5k",
        price: 89990,
        image: "img/products/computer & equipment/Apple macbook air laptop.webp",
        display: "13.3-inch Retina display with a resolution of 2560 x 1600 pixels, offering sharp text and vibrant colors",
        camera: "N/A",
        frontCamera: "720p FaceTime HD camera",
        faceOrTouchID: "Touch ID",
        chip: "Apple M1 chip with an 8-core CPU, delivering faster performance than previous generations",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Power Adapter, SIM Tray Ejector, USB Cable",
        charging: "Supports up to 90W wired fast charging and 50W fast wireless charging. Includes a 120W Hypercharger in the box",
        link: "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_1_sspa?crid=1H3XR8SUD9HH&dib=eyJ2IjoiMSJ9.lIRxEw1BIVqCOYnjYe9UnRprMiFhXO8wiGPgB_ItOB5Yq1OasViHT2c9t9Cao6huQG4gS6toPPsCg7975b1tAaH0KgjfhmaCGJIOuhIgrTUga4OvI9ZLazpOVjlBXAduZ0xaCNi777MTCf9D3z7u8KJ4QG1ZU80tzLhjSITqgMwa3S4zz2qNnaxkB652F_eo9KyN8vDzO1EkENBV4Do9ysjrV7DvfduQj_GOmxKGF-A.nosqLcpn9naeTGAXs-Ru5_ad9ZfurjQX9Xwib64mg1U&dib_tag=se&keywords=apple+macbook+air+laptop&nsdOptOutParam=true&qid=1732957097&sprefix=apple+macbook+air+laptop%2Caps%2C328&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 16,
        brand: "Asus",
        name: "ASUS X515 Thin & Light Laptop (512GB SSD) - Transparent Silver",
        category: "Computer & Equipment",
        color: "Transparent Silver",
        storage: "512GB SSD",
        rating: 4.2,
        reviews: "34",
        price: 25990,
        image: "img/products/computer & equipment/Asus vivobook laptop.webp",
        display: "15.6-inch Full HD (1920 x 1080) anti-glare display with a 16:9 aspect ratio, 60Hz refresh rate, and 200 nits brightness",
        camera: "N/A",
        frontCamera: "VGA front-facing camera",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, Charging Adapter & User Manual",
        charging: "37WHrs 2-cell Li-ion battery with proprietary DC-in charger, USB-C charging likely unavailable",
        link: "https://www.amazon.in/ASUS-Vivobook-15-6-inch-Intergrated-X1500EA-EJ122WS/dp/B0CZ3K42DX/ref=sr_1_1?crid=3KGZE9WBDSU32&dib=eyJ2IjoiMSJ9.McOX6lyTmdvVVMKLo7Gv2S3c8U-LranWUCKLQfJVlfR36tOwFFS2unWkgHZylVV5m5ixdCuT8ju4nUFUmlgvC3OyahD2fwMUUpp-8GibmSPy6nWdgqSg8JbrnBiTHgBvdVq7clhy5TPG8M46uKp4q6Ow4dvkfrRY90a5eAvH_IuRjpfz7XOeKRaiq1hb9fUfs0210yuYmKi59UJ1m6uqaPhk5BaFKTyLB0ORyszzPSQ.LU_Ng6GdwqxyVFc18MrRXFiKazuauqkTGpYKVw7Ic0A&dib_tag=se&keywords=asus+vivobook+best+of+tech&nsdOptOutParam=true&qid=1732959449&sprefix=asus+vivo+book+best+%2Caps%2C309&sr=8-1"
    },
    {
        id: 17,
        brand: "Asus",
        name: "ASUS Zenbook 14 (1TB SSD, 3K OLED) - Ponder Blue",
        category: "Computer & Equipment",
        color: "Ponder Blue",
        storage: "1TB SSD",
        rating: 5.0,
        reviews: "1k",
        price: 122990,
        image: "img/products/computer & equipment/Asus Zenbook 14.webp",
        display: "14-inch 3K OLED, 120Hz refresh rate, HDR support, 500 nits brightness, glossy finish, emits 70% less harmful blue light",
        camera: "N/A",
        frontCamera: "VGA front-facing camera",
        faceOrTouchID: "Touchscreen supported but has password-free face login with the IR camera",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, Charging Adapter & User Manual",
        charging: "Powered by a 75WHrs 4-cell Li-ion battery with a charging adapter included",
        link: "https://www.amazon.in/ASUS-Zenbook-Intel-Ultra-Built/dp/B0D89NT6VZ/ref=sr_1_3?crid=1KMJSAHC51V69&dib=eyJ2IjoiMSJ9.NMjqFjmZFVgoR4taYM-SCf8poepkLqw5dK4ACfeKC5Vs7R94Zyx2gNYrztNI4e7HwgQdoRCExH64bplKWV84kW-XtACMXSm2_50tlIR5EnqOg1RvBW-5Fz7ihQJGLKkfjjzMPfoAvbL0xgjawnE2DLlTDLISxaaPj9F7MqZVOGFEU0hqNzgQ1YIBgQEvqKOGsXT0Fe8xWB-ZlPDZNMOLnWM7A_xeODAovOK_LoeHYE0.brQigvyZXGw2klXsDy5FlPqYHnt_fF1Asg-stZYEHKk&dib_tag=se&keywords=asus%2Bzenbook%2B14&nsdOptOutParam=true&qid=1732959608&sprefix=asus%2Bzenbook%2Caps%2C385&sr=8-3&th=1"
    },
    {
        id: 18,
        brand: "Dell",
        name: "Dell Inspiron 3520 (512GB SSD, FHD Display) - Black",
        category: "Computer & Equipment",
        color: "Black",
        storage: "512GB SSD",
        rating: 3.7,
        reviews: "160",
        price: 64600,
        image: "img/products/computer & equipment/Dell 12th Gen Intel Core i5.webp",
        display: "15.6inches FHD WVA AG 120Hz 250 nits Narrow Border & Integrated Graphics",
        camera: "N/A",
        frontCamera: "Rear webcam resolution: 0.92 MP",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "User Manual, Laptop, Charger & Adapter",
        charging: "Powered by a 3-cell Lithium-Ion battery with a 41WHr capacity and adapter for charging included",
        link: "https://www.amazon.in/Dell-Inspiron-i5-1235U-39-62Cms-D560865WIN9B/dp/B0BH4SQPQL/ref=sr_1_1_sspa?crid=285MO29PQ2IMG&dib=eyJ2IjoiMSJ9.sfdkBaWIjGEDHEFxnOes2-aaISsnvJMJ5Ki0x-8CJE7m9hP9WOB-_7JdkqzSl0Aw5J7wXUSv2cRawJa9ZZDOdWOjSjcDPb1eaV8LUL0n6D--xjBpY1jRvTHlLgghtWc5yvyU5atN7iUOqY5FY7eBqRMG_-0R6ae7Nfw4lf3yZrM6-4LSn9AHnwQtB2jCKdLbRIn3ftpkkuUPKnAwqQD7Fbmz0C-ODOSqGawIbuZcSU9r6h160wl2RqKoKYgJtRuV7n_Q7Bfd36DwdvvOciStQ6TZKXVAZZEqMDLUCCXgvAo.vguyQTTbXlmJzLt_rhExFXqFVFi7aIj3-0taIoLZIxM&dib_tag=se&keywords=Dell+12th+Gen+Intel+Core+i5&nsdOptOutParam=true&qid=1732960643&sprefix=dell+12th+gen+intel+core+i5%2Caps%2C367&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 19,
        brand: "Dell",
        name: "Refurbished Dell OptiPlex All-in-One (512GB SSD) - Black",
        category: "Computer & Equipment",
        color: "Black",
        storage: "512GB SSD",
        rating: 3.5,
        reviews: "1k",
        price: 100000,
        image: "img/products/computer & equipment/Dell HD All-in-One Desktop Computer Set.webp",
        display: "19-inch HD LED screen with a resolution of 1366 x 768 (720p HD Ready)",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Includes the 19inches HD monitor, wireless keyboard, wireless mouse, Wi-Fi dongle, speakers, and power cable",
        charging: "comes with a power cable for charging",
        link: "https://www.amazon.in/Refurbished-Dell-OptiPlex-Computer-Wireless/dp/B0CXNCRPJS/ref=sr_1_2?crid=2S8CREQTT0E1A&dib=eyJ2IjoiMSJ9.xUsoM1dHAm9xbtHiJJNGr2TBCDSPDnO6NFzmf_-QU9JOilwWugIOCdVLpWOIzddIADdE7lMrM16ZPsVOH6-m3KKmYfr0R6Jw5L4nEQ05qr9xrIXOexZ4X-CNeIQFFRpPx1MYtVVZnCrXkQ1wZGwSGTrW4tuTBf2MNpltzkysR1u2Agm2qX7OJLH8ayJqC1hnbdiuoXC5Nm8bEFHrwS283E1_25VSaNSq7ADmchimrvM.MXBV9kz5ZMwMeqCMZyAl8OerCVKfput4kaEX42ZPbI8&dib_tag=se&keywords=Dell+HD+All-in-One+Desktop+Computer+Set&nsdOptOutParam=true&qid=1732961702&sprefix=dell+hd+all-in-one+desktop+computer+set%2Caps%2C552&sr=8-2"
    },
    {
        id: 20,
        brand: "Dell",
        name: "Dell Inspiron 3535, AMD Ryzen 3 (512GB) - Carbon Black",
        category: "Computer & Equipment",
        color: "Carbon Black",
        storage: "512GB SSD",
        rating: 3.9,
        reviews: "1k",
        price: 38747,
        image: "img/products/computer & equipment/Dell Inspiron 3535.jpg",
        display: "15.6-inch FHD (1920x1080) non-touch display with a 120Hz refresh rate, providing clear and vibrant visuals",
        camera: "N/A",
        frontCamera: "have a basic HD camera for video calls",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, 65W AC Adapter, User Manual",
        charging: "comes with a 65W AC adapter for charging",
        link: "https://www.amazon.in/Dell-Inspiron-Processor-Window-Display/dp/B0DG5CY2Y2/ref=sr_1_2_sspa?crid=JB3EZVEWO7KZ&dib=eyJ2IjoiMSJ9.ZNuhHv9FeUb9Z9AeqNGAaK09QCpK96PR8rWHoU2du2kPQqL8NK32ZRzI5dBqiKmsN8VWqvQtwRIB9sJDk73inNzrhS2ZN_LEKDCUhHy1JxnVgHGh8roCucKsxY8v0eAK9h6xi4BntYv-oVAzKEtGzp3F2AnpZjnEK6sEkk-7UhHbmMom86ibFCPDHayS3KpcjEAzmT8VixZzBWVo0JE7Gko2zTIbmsFAbtrJPwQfvKY.SNFl7LnF9aV9z2odght5JI3Bw8dx2hsZm9i4V1OgCPU&dib_tag=se&keywords=Dell+Inspiron+3535%2C+AMD+Ryzen+3+7320U+Processor&nsdOptOutParam=true&qid=1733127107&sprefix=dell+inspiron+3535%2C+amd+ryzen+3+7320u+processor%2Caps%2C588&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 21,
        brand: "HP",
        name: "HP 15 Core i5 13th Gen (512GB) - Silver",
        category: "Computer & Equipment",
        color: "Silver",
        storage: "512GB SSD",
        rating: 3.7,
        reviews: "1k",
        price: 73920,
        image: "img/products/computer & equipment/HP 15 core i5.jpg",
        display: "15.6-inch FHD (1920x1080) anti-glare micro-edge display offering vivid details and immersive visuals",
        camera: "N/A",
        frontCamera: "1080p HD HP True Vision camera with temporal noise reduction for clear video calls",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, Power Adapter, User Manual",
        charging: "Includes a power adapter, and the battery has HP Fast Charge, which charges up to 50% in 45 minutes",
        link: "https://www.amazon.in/HP-Windows-Backlit-Keyboard-fd0221TU/dp/B0CTKHG3F6/ref=sr_1_4?crid=ZLOZPW6N46ZU&dib=eyJ2IjoiMSJ9.dnQKAF5qVkaoFqmFKiqliLqo2XnLSGI05KC5pfLX7tVYwxkdN0HVEATWLYFZEOeK9VoEUgQJiic3YH8Y9FUxJORim5mnisL48U9DibId7aaDcDi96KK9mj3pXyklpTZhDFVE7zY_mPkcEymYnw0Nyj3KOE051A-hq3PhOSHG5rGwsmUMD_i742njVrMpj0nnVIg1fXzC9BEZaaJCcga-6mq17mBszEaJXrh2wejih2M.oEHg1LOdDHg1_VcTQsxUg0gwF8E_YmaJLyxYR0bAfB0&dib_tag=se&keywords=HP+15+core+i5+13th+gen.jpg&nsdOptOutParam=true&qid=1733128132&sprefix=hp+15+core+i5+13th+gen.jpg%2Caps%2C452&sr=8-4"
    },
    {
        id: 22,
        brand: "HP",
        name: "HP Laptop 15s, 12th Gen Intel Core i3 (512GB) - Silver",
        category: "Computer & Equipment",
        color: "Silver",
        storage: "512GB SSD",
        rating: 4.0,
        reviews: "1.3k",
        price: 51134,
        image: "img/products/computer & equipment/HP 15s intel core i5 12th gen.webp",
        display: "15.6-inch Full HD display with anti-glare, 250 nits brightness, and micro-edge design",
        camera: "N/A",
        frontCamera: "HP True Vision HD camera with noise reduction and dual speakers for clear video conferencing",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Includes the laptop, power adapter, and user manual",
        charging: "Fast charging from 0% to 50% in 45 minutes, with up to 7 hours 45 minutes of battery life",
        link: "https://www.amazon.in/HP-i3-1215U-15-6-inch-Graphics-Speakers/dp/B0BP2M7CCS/ref=sr_1_8?crid=9UX9V7W1YXR7&dib=eyJ2IjoiMSJ9.fK0XyQeSL7ByLQm7llT7Ks99Dcx8Eu9iiyxGCww9Vr3wLK1k3eJ7A92uUV98HgYotvNwhd9FsL-96C_xNGrJC6FCuFM8Kx36ReKKj4UQGorI7rDtRHnZdDlKlarocs9gUJ-a4Wj5EMZC-MfnrSh1Hgf2h-GuixMT0g9tYAxgEyiNBDCDnRy9W1SrEXmcnsdu7RONyxsphXYI2O5KvRIIRmloVN5VvFfuxrXnk4hajX4.3v7zZBIHCfR8JH_AlOdOXn0SasEOS-PfP-FyQBevWPU&dib_tag=se&keywords=HP+15s+intel+core+i5+12th+gen.jpg&nsdOptOutParam=true&qid=1733129455&sprefix=hp+15s+intel+core+i5+12th+gen.jpg%2Caps%2C272&sr=8-8"
    },
    {
        id: 23,
        brand: "HP",
        name: "HP Laptop 250 G9 Intel Core i3 12th Gen (512GB) - Silver",
        category: "Computer & Equipment",
        color: "Silver",
        storage: "512GB SSD",
        rating: 3.0,
        reviews: "1k",
        price: 70990,
        image: "img/products/computer & equipment/HP 250 G9 intel core i3 12th gen.jpg",
        display: "15.6-inch FHD display (1366 x 768 pixels) with anti-glare, narrow bezel, and 250 nits brightness",
        camera: "N/A",
        frontCamera: "720p HD camera for video calls",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, Power Adapter, User Guide",
        charging: "HP Long Life 3-cell, 41 Wh Li-ion battery. The exact charging details aren't specified, but typical battery life would depend on usage",
        link: "https://www.amazon.in/HP-Laptop-250-Intel-1215U/dp/B0DJCSYLFJ/ref=sr_1_1?crid=2I11I1B44ZLIX&dib=eyJ2IjoiMSJ9.QujtzBxQ5eCbeNydQaXQAP9iF9nA80yr--IyqyIr-53f2Qc-Nn1uYhpO8BWoEe2I5dyi1GxosNl3tNwnPcJFuyq6INbTzt6G1xdm93E6OLIhwqQffHw27l_EtFmyqGnc_dFjHhfAYM15wAArLtgQhxlZ1XLmE_Sq8XJqN6q-3frL9G-xfxJJlM6Jj3eIsXcVeHkAQWx-GLmPJbFe-3CZpxKm25zT2HVdQvIP737RhNM.2NGA1ARXxjqJWWpqhBcqUljFReqwJLu5Yf9ASGQjBIY&dib_tag=se&keywords=HP+250+GP+intel+core13th+gen.jpg&nsdOptOutParam=true&qid=1733129686&sprefix=hp+250+gp+intel+core13th+gen.jpg%2Caps%2C338&sr=8-1"
    },
    {
        id: 24,
        brand: "Lenovo",
        name: "Lenovo LOQ 12th Gen Intel Core i5 (512GB) - Grey",
        category: "Computer & Equipment",
        color: "Grey",
        storage: "512GB SSD",
        rating: 3.9,
        reviews: "1k",
        price: 95890,
        image: "img/products/computer & equipment/Lenovo 12th gen intel core i5.jpg",
        display: "15.6-inch FHD (1920x1080) IPS display with 144 Hz refresh rate, 100% sRGB, 300 nits brightness, and anti-glare coating",
        camera: "N/A",
        frontCamera: "HD 720p camera with E-cam shutter for privacy",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop",
        charging: "60Wh with up to 6 hours of battery life; Rapid Charge Pro that charges up to 80% in 80 minutes",
        link: "https://www.amazon.in/Lenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN/dp/B0CX8XPKWJ/ref=sr_1_10?crid=HQNNV14PU9SN&dib=eyJ2IjoiMSJ9.4NPcAZCvdWuJ6hl-jzbPNpRhi8QuDDiFRRVw6wEm_NA847o19CVhXg1_RuKFMOYNUjEg6lS8Z8NZ8d3tZoLRQEmEVBjFLL3KXRzkmTazTIqx15ybhuvhWoXWZG4mg_k9tPBs4RtHqd6Iv3l3XM25ZjeCx8Ty8cL6VYP6UrtEOzywlnp03dH2uASE0jy8TamzCr7fOzcRh_yAgVLvpIAR4wTk-3T3ozEt8EZYEG1MwsA.uYCbmwG_vaBPw2xBUwZjYPKciVYZOVcz8LKPsPlX6bk&dib_tag=se&keywords=Lenovo%2B12th%2Bgen%2Bintel%2Bcore%2Bi5&nsdOptOutParam=true&qid=1733129912&sprefix=lenovo%2B12th%2Bgen%2Bintel%2Bcore%2Bi5%2Caps%2C337&sr=8-10&th=1"
    },
    {
        id: 25,
        brand: "Lenovo",
        name: "Lenovo ThinkBook 16 Intel 13th Gen Core i3 (512GB) - Arctic Grey",
        category: "Computer & Equipment",
        color: "Arctic Grey",
        storage: "512GB SSD",
        rating: 4.0,
        reviews: "1k",
        price: 73800,
        image: "img/products/computer & equipment/Lenovo thinkbook.webp",
        display: "16-inch WUXGA (1920 x 1080) IPS, anti-glare screen, offering 300 nits brightness",
        camera: "N/A",
        frontCamera: "720p camera with a privacy shutter for enhanced security",
        faceOrTouchID: "Touch ID - Touch style fingerprint reader on the smart power button",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Laptop, user manual, and adapter",
        charging: "45Wh battery with up to 9.15 hours of battery life",
        link: "https://www.amazon.in/Lenovo-ThinkBook-16-Antiglare-21KHA0J5IN/dp/B0CZ7CBQXP/ref=sr_1_3?crid=TXVA441FITBO&dib=eyJ2IjoiMSJ9.c2am8D8MpHJCWzU8F-nFvWrN85iwrNA5SNKOROupTETsf8vbd6UiFpi6iQJrLFIr-_bleJEO4RSGeZgvtgja6-Cy6lgMfADBXZvk5QIkQesGWuQ9jZzuXQNYM3LTXPTMxeiCFDy4D-jI145iFrXrXG7BcLl9LsDcIv67jyWQWW6N-lOHA3f_3xpQKs8CY4QHiRW-klw9EV02FNsLUgfqy6PvZq2n69rtuo2HraNr9-k.03QA4A3RDQMvyOSb1qaA5v6BdS1ijuxRRnAt9EbLoOo&dib_tag=se&keywords=Lenovo+thinkbook.webp&nsdOptOutParam=true&qid=1733130753&sprefix=lenovo+thinkbook.webp%2Caps%2C354&sr=8-3"
    },
    {
        id: 26,
        brand: "Microsoft",
        name: "Microsoft Surface Laptop GO 3 Touch Screen (256GB) - Platinum",
        category: "Computer & Equipment",
        color: "Platinum",
        storage: "256GB SSD",
        rating: 3.6,
        reviews: "1k",
        price: 80999,
        image: "img/products/computer & equipment/Microsoft Surface 12th Gen Intel Core i5.webp",
        display: "12.4-inch PixelSense touchscreen with a resolution of 1536 x 1024 pixels and a 3:2 aspect ratio for more vertical screen space",
        camera: "N/A",
        frontCamera: "5 MP webcam for clear video calls",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Surface Laptop Go 3, PSU (Power Supply Unit), Warranty & Compliance Guide, Quick Start Guide",
        charging: "39W Surface Connect power adapter, offering up to 15 hours of battery life, with 2-3 hours for a full charge",
        link: "https://www.amazon.in/Microsoft-Surface-Windows-English-Platinum/dp/B0CL2JZZ4V/ref=sr_1_3?crid=1CC1CPITHDV1N&dib=eyJ2IjoiMSJ9.Pm2rhfHYHlUF4N6eB6RFWQ1XYoty09VVZgO_VVRJc3kCrCxcz5XoLVH3aOdiU4kjBtMqAMUM9dlOnpdlYIAUbBrJigWQUf6MY_r0Ab0dSe0EFt6PMOPCDxKaKLObrOs9E80eHAKpYAaCH-ihn6W3ilCVkqsrnPdjEJflwznJJaUl7JE60EkL0OxuwAfbvakWaRbfNteYx8o_UDx5xJecxo8Kwgm7hrtPNxKtxzjN6Uk.41gX-HK5OoZarv5Phtj5qog6N4X7QvT_Vo4iZmvBAcY&dib_tag=se&keywords=Microsoft+Surface+12th+Gen+Intel+Core+i5&nsdOptOutParam=true&qid=1733130926&sprefix=microsoft+surface+12th+gen+intel+core+i5%2Caps%2C348&sr=8-3"
    },
    {
        id: 27,
        brand: "Samsung",
        name: "Samsung Galaxy Book2 (NP750) Intel 12th Gen core (512GB) - Silver",
        category: "Computer & Equipment",
        color: "Silver",
        storage: "512GB SSD",
        rating: 3.8,
        reviews: "1k",
        price: 95990,
        image: "img/products/computer & equipment/Samsung Galaxy Book2.webp",
        display: "15.6-inch FHD (1920 x 1080) LED display with Intel Iris Xe Graphics, providing sharp visuals",
        camera: "N/A",
        frontCamera: "720p FHD webcam, designed for intelligent video calls",
        faceOrTouchID: "includes a Fingerprint Reader for security, which acts as a form of Touch ID",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Includes Set, TA & C to C cable, and a Quick Start Guide",
        charging: "Powered by a 65W USB Type-C adapter and a 63 Wh battery for long-lasting use",  
        link: "https://www.amazon.in/Samsung-Windows-Keyboard-Fingerprint-NP750XED-KC2IN/dp/B09Z1ZG7Y3/ref=sr_1_1?crid=IMLC2HKIEF41&dib=eyJ2IjoiMSJ9.AtvslHgrS9lBCos1V4XTZK3sIy03ikZilsACZao74BHyj_stTZv4_SM9CBdoIoluEU85Dkmt4-HIZghbIJkJEI-GmrnYY_EQxEtGigzDItELysdx-RSUbg5qE-CTSZfIbx-Bt2d6A8jE69izO3XjdFmmvwitOz16xKwd_44mOmZQW8DrxaXNP0x4Y1dq8PcPy1MWFH-oFF8obMen3g0ACp0Nl25ZhJAaQVFCnD4YVYs.yiZ56ZC8t10oKyFRKdVTOfug42exIkIJPE7jwn8Tpc4&dib_tag=se&keywords=Samsung+Galaxy+Book2&nsdOptOutParam=true&qid=1733132545&sprefix=samsung+galaxy+book2%2Caps%2C363&sr=8-1"
    },
    {
        id: 28,
        brand: "Samsung",
        name: "Samsung Galaxy Book4 Intel Core i5 1335U Processor (512GB) - Gray",
        category: "Computer & Equipment",
        color: "Gray",
        storage: "512GB SSD",
        rating: 3.1,
        reviews: "1k",
        price: 82789,
        image: "img/products/computer & equipment/Samsung Galaxy Book4.webp",
        display: "15.6-inch Full HD (1920 x 1080) screen with a 16:9 aspect ratio, 300 nits brightness, and a 60Hz refresh rate for clear visuals",
        camera: "N/A",
        frontCamera: "Integrated 1 MP camera (720p) for clear video conferencing",
        faceOrTouchID: "includes a Fingerprint Reader for security, which acts as a form of Touch ID",
        splashWaterAndDustResistant: "N/A",
        inTheBox: "Includes Notebook, 45W charger, USB-C to C data cable (1.8m), Quick Start Guide",
        charging: "45W USB Type-C Adapter for charging", 
        link: "https://www.amazon.in/Samsung-Processor-Windows-Fingerprint-Graphics/dp/B0D143SJ9R/ref=sr_1_1?crid=O51R6S0T939B&dib=eyJ2IjoiMSJ9.fmXhs17Gy3o7GFmXnvA9n-9_HMKey-7AqR4ujf1e2n5ZozAlHO89ZCc1LYKv3qECR_h6x9uc0pP6Q_zodhfkMW8023R0Uz0TxWMz_mlAS-TuPCmJu4qRs6XHpWhhIkMdOjCAGVxt_Xj6eHC_IzW6hA1pVw4Emdt3pM6uUG7x9zhTmprVK1Kgj9TC-f1882c5ghWylLm8llDS9gRxxUuCCAK4sFinrFuBOdzZaCOsyXI.nOX0My0AXnqYPyD1osVROC1avXjicomIkYTbI96G-EQ&dib_tag=se&keywords=Samsung+Galaxy+Book4&nsdOptOutParam=true&qid=1733132676&sprefix=samsung+galaxy+book4%2Caps%2C331&sr=8-1"
    },

    // list of Miscellaneous Items
    {
        id: 29,
        brand: "Xiaomi",
        name: "Redmi Watch 5 Active BT Calling with 3mic ENC - Silver",
        category: "Miscellaneous Items",
        color: "Silver",
        rating: 3.8,
        reviews: "1.49K",
        price: 4999,
        image: "img/products/Miscellaneous Items/Redmi watch 5.jpg",
        display: "2-inch HD screen, 500 nits peak brightness",
        camera: "N/A",
        froncamera: "N/A",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: " IPX8 rated, which means it is splash and sweat-resistant but not fully waterproof or dustproof",
        inTheBox: "Charging cable",
        charging: "470mAh with up to 18 days of battery life",
        operatingSystemAndAppEcosystem: "Runs on HyperOS, which offers a customized experience with features like auto-detection of activity, weather updates, and fluid animations. However, app ecosystem specifics aren't deeply elaborated",
        smartFeatures: "Auto-detect activity, customizable watch faces, fluid UI, weather updates, heart rate, period monitor, Bluetooth calling, 3-mic ENC",
        connectivity: "Supports Bluetooth, Cellular, and Wi-Fi connectivity, providing flexibility for syncing data and making calls",
        link: "https://www.amazon.in/Redmi-Active-Calling-HyperOS-connectivity/dp/B0DCZWDF1S/ref=sr_1_2_sspa?crid=37AE7CPV3MLJQ&dib=eyJ2IjoiMSJ9.0IFccqJku-ubxS3kKqCLA1U73mvjgE4vl-mQIjpOLUYVB8a9BiQ5R_FVKoVlxhuE51rr9fAdINndXuEfvJ4Rhhyd1MSt3kO1GsEnI-wg61oFzcvFM-4eYVY7-pXEd5kPcOm5eHgGSufWlvPiXN4ehjW2bGlyh40ZMtSlghgjgAZYauzlrRgirL2vi2LS2t-eZq9e_XfpHkj-2fqfPzl918o7C2WZFIA0vcKDA9asiKs.yeeI7iWSIK7Xze7QWyiZeMebhQDGWqC6ErGVtfuaLQw&dib_tag=se&keywords=smart%2Bwatch&qid=1735552322&sprefix=smart%2Bwatch%2Caps%2C283&sr=8-2-spons&sp_csd=d"
    },
    {
        id: 30,
        brand: "Apple",
        name: "Apple Watch SE (2nd Gen) - Starlight",
        category: "Miscellaneous Items",
        color: "Starlight",
        rating: 3.5,
        reviews: "1k",
        price: 24900,
        image: "img/products/Miscellaneous Items/Apple watch SE 2nd gen.webp",
        display: "The Apple Watch SE features a 40mm Retina display, ideal for clear and vibrant visuals",
        camera: "N/A",
        frontCamera: "N/a",
        faceOrTouchID: "No Face ID or Touch ID support. It relies on pairing with your iPhone for secure access",
        splashWaterAndDustResistant: "Water-resistant up to 50 meters, making it suitable for swimming, and built for durability in daily use",
        inTheBox: "Case, Band, 1m Magnetic Charging Cable",
        charging: "Magnetic charging cable (1m) is used to recharge the watch's lithium-ion battery with a 0.81 Watt Hours energy capacity",
        operatingSystemAndAppEcosystem: "watchOS 11, integrates with Apple devices (e.g., iPhone, Mac)",
        smartFeatures: "Fall Detection, Crash Detection, Sleep Monitor, Sedentary Reminder, Emergency SOS, irregular heart rhythm alerts, and Check In feature",
        connectivity: "Bluetooth 5.3, Wi-Fi 4 (802.11n), works with iPhone or Wi-Fi for connectivity",
        link: "https://amazon.in/Apple-Smartwatch-Aluminum-Detection-Resistant/dp/B0DGJBPYLP/ref=sr_1_6?crid=3N6YKQT4IWXVW&dib=eyJ2IjoiMSJ9.-q1gNI3wanKtvdpe6Wg84UtozoHjjC_hmTgbOMhYEb9PHDZT2E7bmX6apq5BiLEmsjAbYzpsyztq3LMMf5XpR2Z1k51LBzcn03RjbX4ltwswZSqn37XrysdJJcMIGecqyEobIrp4fF3neqQW7pBQCgOkzBeXgnVU9uzuKna27SFtX-Fq5lqWFWI9OB0arpmVabxMn5u34s0pLw-vxpESOHPPuefTJYppoQ_5goxGZd4.znPUbd5ZIZYOqBBKxyGHr98NYHc3bqaHYmGYzS15MTA&dib_tag=se&keywords=Apple%2Bwatch%2BSE%2B2nd%2Bgen&nsdOptOutParam=true&qid=1733133519&sprefix=apple%2Bwatch%2Bse%2B2nd%2Bgen%2Caps%2C456&sr=8-6&th=1"
    },
    {
        id: 31,
        brand: "Apple",
        name: "Apple Watch Series 10 [GPS 46 mm] Smartwatch - Jet Black",
        category: "Miscellaneous Items",
        color: "Jet Black",
        rating: 4.3,
        reviews: "1k",
        price: 49900,
        image: "img/products/Miscellaneous Items/Apple watch series 10.webp",
        display: "46mm display with 30% more screen area, offering a thinner, lighter, and more comfortable design",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "No Face ID or Touch ID; it uses pairing with your iPhone for secure access",
        splashWaterAndDustResistant: "Water-resistant with sensors for depth and water temperature, making it ideal for aquatic activities, but built for durability in daily use",
        inTheBox: "Case, Band, 1m Magnetic Charging Cable",
        charging: "Fast charging with the magnetic charging cable, reaching 80% battery in about 30 minutes and Powered by a lithium-ion battery with a capacity of 1.27 Watt Hours",
        operatingSystemAndAppEcosystem: "watchOS, integrates seamlessly with iPhone, iPad, and other Apple devices",
        smartFeatures: "ECG, heart rate, sleep monitor, menstrual cycle tracking, Workout and Vitals apps, Fall Detection, Crash Detection, Emergency SOS, and Check In",
        connectivity: "Bluetooth 5.3, Wi-Fi 4 (802.11n), works with iPhone or Wi-Fi for connectivity",
        link: "https://www.amazon.in/Apple-Watch-Black-Aluminium-Sport/dp/B0DGJ8PSV8/ref=sr_1_1_sspa?crid=19TUOPZ0XZGX8&dib=eyJ2IjoiMSJ9.oNzlwDNjtK19a1kQbi3JL9MfY62OvYdwLPI_wWEMP1A-pO6HZLRrwQfCEQs5mHpuMLiT_U1p8Tby7ZYVJj7Ho2iHcJLI4iYxrkH3oFJD5bo_MBRHozCe_BZRd8sWWa73xOqxt1B_yZtY3yUPEIKC18ICef7iLZ-IQESBdYEHZCuc4NIVqTAa8xsw5_M9x-RjNOr05985YskMiO_E8hEgOoIl255W36KIgN5WcvK0NZ8.8Rp2P3foIuB59r9Ykle_86L4BgqwnUnqUyq_UER9ZYI&dib_tag=se&keywords=Apple+watch+series+10&nsdOptOutParam=true&qid=1733134164&sprefix=apple+watch+series+10.%2Caps%2C583&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 32,
        brand: "Asus",
        name: "Asus ZenWatch 2 1.63-inch Smartwatch - (Sliver, Brown)",
        category: "Miscellaneous Items",
        color: "Sliver - Brown",
        rating: 4.2,
        reviews: "1k",
        price: 22999,
        image: "img/products/Miscellaneous Items/Asus zenwatch 2.jpg",
        display: "1.63-inch AMOLED display",
        camera: "N/A",
        froncamera: "N/A",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "It has an IP67 rating, meaning it is splash, dust, and water-resistant up to 1 meter for 30 minutes",
        inTheBox: "Includes the smartwatch and a lithium-ion battery",
        charging: "Charges via a standard charging dock",
        operatingSystemAndAppEcosystem: "Runs on Wear OS, compatible with Android and iOS, supports a range of apps",
        smartFeatures: "Offers notifications, basic storage, and auto-activity detection, but lacks voice assistant and Bluetooth calling",
        connectivity: "Supports Bluetooth and Wi-Fi for syncing, but has no cellular connectivity for standalone use",
        link: "https://www.amazon.in/ASUS-Headset-Beamforming-Surround-Devices/dp/B09QFYDGGY/ref=sr_1_1?crid=702V4FEUQQSO&dib=eyJ2IjoiMSJ9.n-IDXM1Da85ran1wNJtU9ba6X5sjE1L1d49roLoCMURVe7vaa6157rvC7Wf_xIpa6_cTZ7_JbPjKhD8PiJABRFvTyDW7SdbI-QxK9x2Blv3zfEUENZIjXBbZ5y_iUxkdy3Uvh4GtR-w6h84Iq4Q15uH-dfLtNavdru7c5el5Aq_pD8gctD_aepmpuA5cBMBiQ_ux1kFsPTqpp5y7LXthMuUH9IN_tVxt9elS_0khOiI.xmHRFncIOrlqidxpslsKyrWl6zoR4PJqiusOiJxo9_g&dib_tag=se&keywords=Asus+rog+fusion+gaming+headset&nsdOptOutParam=true&qid=1733134907&sprefix=asus+rog+fusion+gaming+headset%2Caps%2C375&sr=8-1"
    },
    {
        id: 33,
        brand: "Lenovo",
        name: "Lenovo HW25P Smartwatch - Carme Green",
        category: "Miscellaneous Items",
        color: "Carme Green",
        rating: 3.7,
        reviews: "1k",
        price: 4999,
        image: "img/products/Miscellaneous Items/Lenovo smartwatch.jpg",
        display: "2.5D Curved Surface, 1.3 inches, 1280 x 1024 (SXGA)",
        camera: "N/A",
        froncamera: "N/A",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "IP68 Certified; dustproof and waterproof",
        inTheBox: "Lenovo Carme Smartwatch, Charger, User Manual, Warranty Card",
        charging: "Up to 7 days battery life, 25 days standby; charger included",
        operatingSystemAndAppEcosystem: "Android & iOS compatible",
        smartFeatures: "24-hour heart rate tracking, activity tracking (steps, mileage, calories), notifications (calls, messages, WhatsApp, Facebook, email, alarms), sleep monitoring, alarm clock",
        connectivity: "Bluetooth",
        link: "https://www.amazon.in/ASUS-TUF-H1-Certified-Lightweight/dp/B09M1N5VYC/ref=sr_1_1?crid=1FGY79M8NMULB&dib=eyJ2IjoiMSJ9.Se_k0qTyLvy_mjFClxYmBiCFXw_xDeadR5tbzfGM0QpGJBM1t_onB7xO3cJ75EcTD4PJaEgZ3Ctc__0KkfdSmQEnNk2TJ3hYEb3oaNpSwBm2FBfipvHF23Bc4b89GPDonBpeqmIcr2qsSXh71pexu_M8J56bSPoHehxkR11ONrwU4ZTRYrUHYrUtDzuflbiQ99PZ99eAPSgLEptQ602jl92OYcmLLhdPgtPjg40vS5o.06HmytNioIkX9bk1XWEvig5GMJRuYBHWyFgMuv-4HkY&dib_tag=se&keywords=Asus+tuf+gaming+wired+headset&nsdOptOutParam=true&qid=1733135309&sprefix=asus+tuf+gaming+wired+headset%2Caps%2C352&sr=8-1"
    },
    {
        id: 34,
        brand: "Samsung",
        name: "Samsung Galaxy FIT 3 - Pink",
        category: "Miscellaneous Items",
        color: "Pink",
        rating: 4.4,
        reviews: "1.2k",
        price: 9999,
        image: "img/products/Miscellaneous Items/samsung agalaxy fit 3.webp",
        display: "1.6inches AMOLED Display with a resolution of 400x400, offering vibrant colors and sharp clarity",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "No Face ID or Touch ID; the device is operated through buttons",
        splashWaterAndDustResistant: "Splash, water, and dust resistant with an IP68 rating, suitable for everyday use and workouts",
        inTheBox: "band, charging cable",
        charging: "Rechargeable battery with up to 14 days of battery life, charged via the provided cable",
        operatingSystemAndAppEcosystem: "Android (compatible with devices running Android 10 and up)",
        smartFeatures: "Sleep monitor, 100+ exercise modes, 100+ watch faces, sleep coaching",
        connectivity: "Bluetooth",
        link: "https://www.amazon.in/SAMSUNG-Display-Watchfaces-Exercise-International/dp/B0CW3X1S7B/ref=sr_1_3?crid=27W2KZEGJZ40I&dib=eyJ2IjoiMSJ9.ekg2RZAiNe1rDbdzYJw6l9vqs2_oWvRZ5P306X_JWTp3fI0cV7MWc0AB18ja48PqVoZzIbUJIx0lFgol57LbV6Muq17DqNUnMVwMW4lnlPypypSmyACtqcQ0vwNGlqTnevaWN-UB4xGpFEO67qHfWRd45CSpcUncaNmzUphOVDIuAlx_Fkk6MdUrAnNLwUVjXFaTK6d1j6RM_pXCXZ7NK5_QVPhPAbxrhJn6_7forvY.2ya0MdPT6nL9OAp6wPDJpuVEYrcJj6tDCilAxv6Y2ak&dib_tag=se&keywords=samsung%2Bgalaxy%2Bfit%2B3&nsdOptOutParam=true&qid=1733135446&sprefix=samsung%2Bagalaxy%2Bfit%2B3%2Caps%2C426&sr=8-3&th=1"
    },
    {
        id: 35,
        brand: "Samsung",
        name: "Samsung Galaxy Watch 7 with 3nm Processor - Green",
        category: "Miscellaneous Items",
        color: "Green",
        rating: 3.8,
        reviews: "1k",
        price: 39999,
        image: "img/products/Miscellaneous Items/samsung galaxy watch 7.webp",
        display: "1.47inches Super AMOLED Display with a resolution of 360x360, offering vibrant colors and a brightness of up to 2000 nits for easy readability even in bright light",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "No Face ID or Touch ID; the device uses touchscreen and buttons for interaction",
        splashWaterAndDustResistant: "Water and dust resistant with an IP68 rating, making it suitable for everyday use, exercise, and outdoor activities",
        inTheBox: "Smartwatch,Type C Wireless Charger,Sports Band",
        charging: "Rechargeable lithium-ion battery with included Type C wireless charger for easy charging", 
        operatingSystemAndAppEcosystem: "N/A",
        smartFeatures: "Blood pressure monitor, ECG, activity tracker, always-on display, contactless payments, AI-powered health monitoring (energy score, heart rate, FTP), and gesture controls",
        connectivity: "Cellular, Wi-Fi, NFC",
        link: "https://www.amazon.in/Samsung-Processor-Sapphire-Aluminum-Monitor/dp/B0D7M36QP4/ref=sr_1_3?crid=3PULVLQCTGN3X&dib=eyJ2IjoiMSJ9.pJVAzdCvVOjOrr5q35w1chTcRb5WyOgP3ZmXshHRCApw7OmITlLdrnISwyK3oub_qWiVlATgdml7BjAQMOK4nFaqjQLIBHEAoi-5Ko8As_3Byq-r0XeJZFWiXFqWsaPhqZCZvFpyF_nM6DGat53Yd9bEWuVuof7gl6UtXLuTnjr56ShDv-0DkMffvNxtwWsAt2h1kUWhs2LobP4T0faXOQP3Pua87CQe8b3oRrdZsrU.8gwAGvUeWwF4_YwRmCxj00iwGMw8zmKWFexxF7LVjkk&dib_tag=se&keywords=samsung+galaxy+watch+7&nsdOptOutParam=true&qid=1733135561&sprefix=samsung+galaxy+watch+7%2Caps%2C374&sr=8-3"
     },
    {
        id: 36,
        brand: "Xiaomi",
        name: "Redmi Watch 5 Lite - Black",
        category: "Miscellaneous Items",
        color: "Black",
        rating: "3.9",
        reviews: "195k",
        price: "6999",
        image: "img/products/Miscellaneous Items/Redmi watch 5 lite.webp",
        display: "1.96 inch AMOLED display, 600 nits peak brightness",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "N/A",
        splashWaterAndDustResistant: "5ATM water resistance (up to 50 meters deep)",
        inTheBox: "Charging cable",
        charging: "470mAh battery; up to 18 days battery life",
        operatingSystemAndAppEcosystem: "Xiaomi HyperOS",
        smartFeatures: "In-built GPS, BT Calling, Heart Rate Monitor, SpO2 Tracking, Female Health Tracking, 200+ Watch Faces",
        connectivity: "Bluetooth",
        link: "https://www.amazon.in/Redmi-Watch-Lite-Connectivity-FemaleHealth/dp/B0DH2SPVZC/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SMz6CLwGYvufYTa0-Ce4VcdLqc7ipWBl-5XaZMJwIfp9R2Mqfc_2f7wxo6uH3suEVAmj4kARhoialI2VWS25vERyuHGCUmbRLPiEKOcl-AOz2LgKeISAV8QnHmywIKG6YfC5SYFoJAh49RYoVdehNvHac5_9Oc5Q3DQszKVmBxx0Xyukd7k2Dwk2L-IDF66MOYPJSKa6vyf-L-nHk49uJwGVTpWIZP-HZdSN1ZtCvszaRDRjjQ_hph7T6ukQdY-ip5L7o4t4fQ-7xtveDsACkjWsLhSM734-4YvtmvBVTi8.tZvojx1KNW4u2_DlRyMNvHfQ9gN66ScsNzkVi2R56Kk&dib_tag=se&keywords=Xiaomi&nsdOptOutParam=true&qid=1735566998&s=electronics&sr=1-1&th=1"
    },
    {
        id: 37,
        brand: "Xiaomi",
        name: "Redmi Smart Watch 3 - Active Black",
        category: "Miscellaneous Items",
        color: "Active Black",
        rating: "4.3",
        reviews: "8.1k",
        price: "5990",
        image: "img/products/Miscellaneous Items/Redmi watch 3.jpg",
        display: "1.83 Inch LCD Display",
        camera: "N/A",
        frontCamera: "N/A",
        faceOrTouchID: "Touchscreen",
        splashWaterAndDustResistant: "5ATM Water Resistant",
        inTheBox: "Smartwatch",
        charging: "Lithium Polymer Battery, 12 Days Typical Usage",
        operatingSystemAndAppEcosystem: "Android, Mi Fitness App",
        smartFeatures: "Sleep Monitor, Alarm Clock, Camera Control, Notifications, Period Cycle Monitoring, 100+ Workout Modes",
        connectivity: "Bluetooth v5.3 (BLE)",
        link: "https://www.amazon.in/Display-Resistant-Battery-Workout-Tracking/dp/B0C7R1RN2D/ref=sr_1_3?crid=X2BKLUGXLBFH&dib=eyJ2IjoiMSJ9.23tWibsqKApsLCHlY_HtJEE9PdaIRolhorWcP-jdNLteYCv7CTiOPl1VZrwmyefG3DhXyMEBCFc_x9TyHEtVKijiVrj30n_Q8ZUdynIVerg08CmTlgUkzzQn2dXi1fFJZKEZal3kGKmsjOo0Af6dWgVIxS9q6wXbBXpUkGg81xDGWsX0oDBXTbRkt0xhvM6tcobSVKVLaPyv_Y8I8qdW-R6S6YJel5bu3bF54ypysag.qXZnhJtoGGwR6dsbLCQfDqq14-zasIUxEIESNBcFi8E&dib_tag=se&keywords=Redmi+Smart+Watch+3+-+Active+Black&qid=1735636824&sprefix=redmi+smart+watch+3+-+active+black%2Caps%2C318&sr=8-3"
    },
];


// Get the search bar and product list elements
const searchBar = document.querySelector("#searchBar");
const productContainer = document.getElementById("product-container");
const items = productContainer.querySelectorAll(".product-base"); // Fetch dynamically

// Add an event listener for the search bar
searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase();
    const items = productContainer.querySelectorAll('.product-base'); // Fetch dynamically

    // Loop through each product and check if it matches the search query
    items.forEach(product => {
        const productName = product.getAttribute('data-brand').toLowerCase();
        
        // Show or hide products based on the search query
        if (productName.includes(searchQuery)) {
            product.style.display = 'block'; // Show matching product
        } else {
            product.style.display = 'none'; // Hide non-matching product
        }
    });
});


// function to convert the review string to a number
function convertReviewsToNumber(reviewString) {
    let number = parseFloat(reviewString);
    
    // If the string contains 'k', multiply by 1000
    if (reviewString.includes('k')) {
        number *= 1000;
    }
    
    return number;
}


// Unified filter and sort function
function applyFiltersAndSorting() {
    
    const sortValue = document.querySelector('input[name="sort"]:checked')?.value || null;
    const selectedCategories = Array.from(document.querySelectorAll('.filter-section input[type="checkbox"][id^="category"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-section input[type="checkbox"][id^="brand"]:checked'))
        .map(checkbox => checkbox.value);

    // Filter products based on selected categories and brands
    const filteredProducts = products.filter(product => {
        
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        return matchesCategory && matchesBrand;
    });

    // Sort products based on the selected sort value
    if (sortValue === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "popularity") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "newest") {
        filteredProducts.sort((a, b) => convertReviewsToNumber(b.reviews) - convertReviewsToNumber(a.reviews));
    }

    // Display the filtered and sorted products
    displayProducts(filteredProducts);
}

// Update displayProducts to accept a product list
function displayProducts(productList) {
    const productContainer = document.querySelector('.product-list .container .row');
    productContainer.innerHTML = ''; // Clear the container    

    productList.forEach((product, index) => {
        // Skip product with id 0
        if (product.id === 0) {
            return; // Do not display this product
        }
        
        const delay = (index % 3) * 100; // Adjust delay for animations
        const cardHTML = `
            <div class="col-12 col-md-4 col-lg-3 product-base" data-category="${product.category}" data-name="${product.name}" data-brand="${product.brand}" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="card product-card">
                    <div class="position-relative card-img">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title product-title">${product.name}</h5>
                        <p class="mb-2 color">Color: <span class="fw-bold">${product.color}</span></p>
                        <p class="mb-2 storage">Storage: <span class="fw-bold">${product.storage || 'N/A'}</span></p>
                        <div class="d-flex justify-content-between align-items-center rating">
                            <div>
                                <span class="text-warning">★ ${product.rating}</span>
                                <span class="text-muted ms-2">| ${product.reviews}</span>
                            </div>
                            <p class="fw-bold mb-0">₹${product.price.toLocaleString()}</p>
                        </div>
                    </div>   
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="${product.link}" class="btn btn-outline-primary w-100 product-btn" target="_blank" rel="noopener noreferrer">
                            View on Amazon
                        </a>
                    </div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Add event listeners to all filters and sorting options
document.querySelectorAll('input[name="sort"]').forEach(input => {
    input.addEventListener('change', applyFiltersAndSorting);
});

document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFiltersAndSorting);
});

// Initial display of products without filters
applyFiltersAndSorting();


document.querySelector('.header-clearAllBtn').addEventListener('click', () => {
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset the selected radio button
    const selectedSort = document.querySelector('input[name="sort"]:checked');
    if (selectedSort) {
        selectedSort.checked = false;
    }

    // Reapply filters and sorting
    applyFiltersAndSorting();
});
