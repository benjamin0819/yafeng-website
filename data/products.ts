export type ProductCategory =
  | "featured"
  | "rice"
  | "noodles"
  | "seasoning"
  | "canned"
  | "tea-drinks"
  | "frozen"
  | "cleaning"
  | "tissue";

export type Product = {
  id: string;
  nameCn: string;
  nameEn: string;
  category: ProductCategory;
  spec: string;
  price?: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const mainProducts: Product[] = [
  {
    id: "cmee-luncheon-meat",
    nameCn: "CMEE 午餐肉",
    nameEn: "CMEE Pork Luncheon Meat",
    category: "canned",
    spec: "200g / 罐",
    image: "/products/cmee-luncheon-meat.jpg",
    description: "餐飲常用罐頭食材，適合茶餐廳、快餐及批發採購。",
    featured: true
  },
  {
    id: "golden-pig-luncheon-meat",
    nameCn: "金豬 午餐肉",
    nameEn: "Golden Pig Pork Luncheon Meat",
    category: "canned",
    spec: "1588g / 罐",
    image: "/products/golden-pig-luncheon-meat.jpg",
    description: "大罐裝午餐肉，適合餐飲出餐及長期備貨。",
    featured: true
  },
  {
    id: "yafeng-luncheon-meat",
    nameCn: "雅楓 午餐肉",
    nameEn: "Yafeng Pork Luncheon Meat",
    category: "canned",
    spec: "1588g / 罐",
    image: "/products/yafeng-luncheon-meat.jpg",
    description: "雅楓品牌主打產品，適合批發及餐飲供應。",
    featured: true
  },
  {
    id: "yafeng-spiced-pork-cubes",
    nameCn: "雅楓 五香肉丁",
    nameEn: "Yafeng Spiced Pork Cubes",
    category: "canned",
    spec: "380g / 罐",
    image: "/products/yafeng-spiced-pork-cubes.jpg",
    description: "五香風味肉丁罐頭，適合即食、配飯及餐飲應用。",
    featured: true
  },
  {
    id: "sliced-pork-can",
    nameCn: "筍片回鍋肉",
    nameEn: "Sliced Pork Can",
    category: "canned",
    spec: "198g / 罐",
    image: "/products/sliced-pork-can.jpg",
    description: "方便出餐的罐頭食品，適合餐廳及食品供應。",
    featured: true
  },
  {
    id: "milk-tea-black-tea",
    nameCn: "100% 紅茶（奶茶專用）",
    nameEn: "Black Tea for Milk Tea",
    category: "tea-drinks",
    spec: "1 公斤 / 包",
    image: "/products/milk-tea-black-tea.jpg",
    description: "茶餐廳奶茶用茶粉，適合冷熱飲製作。",
    featured: true
  }
];

export const catalogueProducts: Product[] = [
  ...mainProducts,
  {
    id: "golden-phoenix-rice",
    nameCn: "金鳳米泰國香米",
    nameEn: "Golden Phoenix Thai Jasmine Rice",
    category: "rice",
    spec: "25KG / 包",
    price: "410.00 / 包",
    image: "/products/yafeng-luncheon-meat.jpg",
    description: "米香自然，適合餐廳及日常批發採購。"
  },
  {
    id: "instant-noodles",
    nameCn: "出前一丁",
    nameEn: "Instant Noodles",
    category: "noodles",
    spec: "3 箱 / 1 扎",
    price: "260.00 起 / 扎",
    image: "/products/cmee-luncheon-meat.jpg",
    description: "粉麵類常備產品，適合餐飲及零售供應。"
  },
  {
    id: "soy-sauce-base",
    nameCn: "雅楓牌雞汁 / 豬骨汁",
    nameEn: "Yafeng Sauce Base",
    category: "seasoning",
    spec: "2.13KG x 6 支",
    price: "580.00 / 箱",
    image: "/products/sliced-pork-can.jpg",
    description: "餐廳廚房常用調味湯底，穩定出品。"
  },
  {
    id: "oolong-tea",
    nameCn: "津露烏龍茶",
    nameEn: "Oolong Tea",
    category: "tea-drinks",
    spec: "500ML x 24 支",
    price: "140.00 / 箱",
    image: "/products/milk-tea-black-tea.jpg",
    description: "常用飲品類產品，適合餐廳、零售和批發。"
  },
  {
    id: "frozen-shrimp",
    nameCn: "急凍蝦仁",
    nameEn: "Frozen Shrimp",
    category: "frozen",
    spec: "10.8KG / 箱",
    image: "/products/golden-pig-luncheon-meat.jpg",
    description: "急凍食材，適合餐飲備貨。"
  },
  {
    id: "dishwashing-liquid",
    nameCn: "濃縮洗潔精",
    nameEn: "Concentrated Dishwashing Liquid",
    category: "cleaning",
    spec: "10KG x 2 桶 / 箱",
    price: "130.00 / 箱",
    image: "/products/yafeng-spiced-pork-cubes.jpg",
    description: "商用廚房清潔用品，適合餐廳及工場。"
  }
];

export const tissueSubCategories = [
  { titleCn: "餐巾紙系列", titleEn: "Napkin Series", desc: "柔軟吸水，適用於餐飲及日常使用。" },
  { titleCn: "抽紙系列", titleEn: "Box Tissue Series", desc: "抽取方便，適合辦公室、餐廳及家庭。" },
  { titleCn: "小卷紙系列", titleEn: "Small Roll Tissue", desc: "規格多樣，經濟實用。" },
  { titleCn: "大卷紙系列", titleEn: "Jumbo Roll Tissue", desc: "大容量設計，適合商用公共場所。" },
  { titleCn: "擦手紙系列", titleEn: "Hand Towel Series", desc: "強韌吸水，乾爽衛生。" },
  { titleCn: "定制系列", titleEn: "Custom Printing", desc: "支持 LOGO、包裝及尺寸定制。" }
];
