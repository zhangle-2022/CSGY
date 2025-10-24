const websiteData = {
  "categories": [
    {
      "id": 1,
      "name": "女装",
      "slug": "women",
      "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "description": "优雅时尚女装系列"
    },
    {
      "id": 2,
      "name": "男装",
      "slug": "men",
      "image": "./image/man.jpg",
      "description": "简约品质男装系列"
    },
    {
      "id": 3,
      "name": "配饰",
      "slug": "accessories",
      "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "description": "精致配饰点缀生活"
    },
    {
      "id": 4,
      "name": "美妆",
      "slug": "beauty",
      "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "description": "精选美妆护肤产品"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "优雅修身连衣裙",
      "price": 599,
      "categoryId": 1,
      "images": [
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      ],
      "description": "这款优雅修身连衣裙采用高品质面料制成，剪裁精致，能够完美展现女性曲线美。无论是日常穿搭还是特殊场合，都能让您散发迷人魅力。",
      "details": "面料成分：92% 聚酯纤维，8% 弹性纤维<br>护理说明：建议手洗，低温熨烫，不可漂白",
      "colors": ["黑色", "白色", "红色", "蓝色"],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "featured": true
    },
    {
      "id": 2,
      "name": "经典款男士衬衫",
      "price": 399,
      "categoryId": 2,
      "images": [
        "./image/men.jpg"
      ],
      "description": "经典款男士衬衫，采用优质棉质面料，舒适透气，适合各种正式和休闲场合。",
      "details": "面料成分：100%棉<br>护理说明：可机洗，中温熨烫",
      "colors": ["白色", "蓝色", "浅灰"],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "featured": true
    },
    {
      "id": 3,
      "name": "时尚女士手提包",
      "price": 899,
      "categoryId": 3,
      "images": [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      ],
      "description": "时尚女士手提包，设计简约大方，容量适中，适合日常使用和商务场合。",
      "details": "材质：真皮<br>尺寸：30cm x 20cm x 10cm",
      "colors": ["黑色", "棕色", "米色"],
      "sizes": ["标准"],
      "featured": true
    },
    {
      "id": 4,
      "name": "淡雅花香香水",
      "price": 459,
      "categoryId": 4,
      "images": [
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      ],
      "description": "淡雅花香香水，前调清新，中调优雅，后调持久，适合日常使用。",
      "details": "容量：50ml<br>香调：花香调",
      "colors": ["透明"],
      "sizes": ["50ml", "100ml"],
      "featured": true
    },
    {
      "id": 5,
      "name": "温暖羊毛毛衣",
      "price": 459,
      "categoryId": 1,
      "images": [
        "./image/yangmaoyi.webp"
      ],
      "description": "温暖羊毛毛衣，采用优质羊毛制成，保暖舒适，适合秋冬季节。",
      "details": "面料成分：100%羊毛<br>护理说明：建议干洗",
      "colors": ["米色", "灰色", "驼色"],
      "sizes": ["XS", "S", "M", "L"],
      "featured": false
    },
    {
      "id": 6,
      "name": "高腰修身牛仔裤",
      "price": 399,
      "categoryId": 1,
      "images": [
        "./image/gynzk.jpg"
      ],
      "description": "高腰修身牛仔裤，剪裁合身，能够修饰腿型，展现完美曲线。",
      "details": "面料成分：98%棉，2%弹性纤维<br>护理说明：可机洗",
      "colors": ["蓝色", "黑色"],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "featured": false
    },
    {
      "id": 7,
      "name": "时尚风衣外套",
      "price": 799,
      "categoryId": 1,
      "images": [
        "./image/fengyi.jpg"
      ],
      "description": "时尚风衣外套，经典设计，适合春秋季节，百搭实用。",
      "details": "面料成分：棉质混纺<br>护理说明：建议干洗",
      "colors": ["卡其色", "黑色", "藏青色"],
      "sizes": ["XS", "S", "M", "L"],
      "featured": false
    },
    {
      "id": 8,
      "name": "A字半身裙",
      "price": 359,
      "categoryId": 1,
      "images": [
        "./image/A字.jpg"
      ],
      "description": "A字半身裙，设计简约，能够修饰身材，适合各种场合。",
      "details": "面料成分：聚酯纤维<br>护理说明：可机洗",
      "colors": ["黑色", "灰色", "藏青色"],
      "sizes": ["XS", "S", "M", "L"],
      "featured": false
    }
  ]
}