"use client";

import { useState } from "react";
import { mainProducts } from "@/data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";


type ProductLike = {
  id: string;
  nameCn: string;
  nameEn?: string;
  spec: string;
  description?: string;
  image: string;
};

const ownProductDetails: Record<
  string,
  {
    displayName: string;
    specLine: string;
    description: string;
    posterImage: string;
  }
> = {
  cmee: {
    displayName: "世美 CMEE 牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "世美 CMEE 午餐肉，適合茶餐廳、快餐店及餐飲供應。",
    posterImage: "/products/cmee-luncheon-meat-poster.png",
  },
  goldenPig: {
    displayName: "金豬牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "大罐裝午餐肉，適合餐飲出品、長期備貨及批發採購。",
    posterImage: "/products/golden-pig-luncheon-meat-poster.png",
  },
  yafengLunch: {
    displayName: "雅楓牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "雅楓品牌主打午餐肉產品，適合批發及餐飲供應。",
    posterImage: "/products/yafeng-luncheon-meat-poster.png",
  },
  yafengSpiced: {
    displayName: "雅楓牌五香肉丁",
    specLine: "380克 × 48罐",
    description: "五香風味肉丁，適合即食、配飯、餐飲出品及批量採購。",
    posterImage: "/products/yafeng-five-spice-diced-pork-poster.png",
  },
  twiceCooked: {
    displayName: "世美牌回鍋肉",
    specLine: "198克 × 72罐",
    description: "經典川味筍片回鍋肉，適合餐飲快速出品及批量採購。",
    posterImage: "/products/cmee-twice-cooked-pork-poster.png",
  },
  tea: {
    displayName: "錦標拼配茶",
    specLine: "5磅 / 包 或 30磅 / 箱",
    description: "奶茶專用拼配紅茶，適合港式奶茶、茶餐廳及飲品店使用。",
    posterImage: "/products/black-tea-poster.png",
  },
};

const homeTissueSubCategories = [
  {
    titleCn: "餐巾紙系列",
    titleEn: "Napkin Series",
    desc: "柔軟吸水，適用於餐飲及日常使用。",
    href: "/products/tissue/dining-napkins",
  },
  {
    titleCn: "抽紙系列",
    titleEn: "Box Tissue Series",
    desc: "抽取方便，適合辦公室、餐廳及家庭。",
    href: "/products/tissue/box-tissue",
  },
  {
    titleCn: "小卷紙系列",
    titleEn: "Small Roll Tissue",
    desc: "規格多樣，經濟實用。",
    href: "/products/tissue/small-roll",
  },
  {
    titleCn: "大卷紙系列",
    titleEn: "Jumbo Roll Tissue",
    desc: "大容量設計，適合商用公共場所。",
    href: "/products/tissue/large-roll",
  },
  {
    titleCn: "擦手紙系列",
    titleEn: "Hand Towel Series",
    desc: "強韌吸水，乾爽衛生。",
    href: "/products/tissue/hand-towel",
  },
  {
    titleCn: "定制系列",
    titleEn: "Custom Printing",
    desc: "支持 LOGO、包裝及尺寸定制。",
    href: "/products/tissue/custom",
  },
];

function getOwnProductDetail(product: ProductLike) {
  const text = [
    product.id,
    product.nameCn,
    product.nameEn,
    product.spec,
    product.description,
    product.image,
  ]
    .join(" ")
    .toLowerCase();

  if (
    text.includes("紅茶") ||
    text.includes("奶茶") ||
    text.includes("錦標") ||
    text.includes("拼配茶") ||
    text.includes("black-tea") ||
    text.includes("milk-tea") ||
    text.includes("tea")
  ) {
    return ownProductDetails.tea;
  }

  if (text.includes("五香肉丁") || text.includes("spiced")) {
    return ownProductDetails.yafengSpiced;
  }

  if (text.includes("金豬") || text.includes("golden-pig")) {
    return ownProductDetails.goldenPig;
  }

  if (
    text.includes("回鍋肉") ||
    text.includes("筍片") ||
    text.includes("sliced-pork")
  ) {
    return ownProductDetails.twiceCooked;
  }

  if (text.includes("cmee") || text.includes("世美")) {
    return ownProductDetails.cmee;
  }

  if (text.includes("雅楓") && text.includes("午餐肉")) {
    return ownProductDetails.yafengLunch;
  }

  return {
    displayName: product.nameCn,
    specLine: product.spec,
    description:
      product.description ?? "雅楓自營產品，適合餐飲、零售及批發客戶。",
    posterImage: product.image,
  };
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const current = mainProducts[activeSlide];
  const currentDetail = getOwnProductDetail(current);

  const nextSlide = () => {
    setActiveSlide((value) => (value + 1) % mainProducts.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (value) => (value - 1 + mainProducts.length) % mainProducts.length
    );
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3a1b0d] via-[#6f3d18] to-[#d8a14a] shadow-2xl">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

          <button
            aria-label="Previous product"
            onClick={prevSlide}
            className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 text-3xl text-neutral-900 shadow-lg transition hover:scale-105 lg:block"
          >
            ‹
          </button>

          <button
            aria-label="Next product"
            onClick={nextSlide}
            className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 text-3xl text-neutral-900 shadow-lg transition hover:scale-105 lg:block"
          >
            ›
          </button>

          <div className="relative z-10 grid min-h-[560px] items-center gap-10 px-6 py-12 text-white md:grid-cols-[0.85fr_1.15fr] md:px-12 lg:px-20">
            <div>
              <p className="mb-4 text-lg font-bold text-[#ffd56a]">
                優質食品供應 · 專業 · 可靠 · 值得信賴
              </p>

              <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                您值得信賴的
                <br />
                餐飲供應商
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                提供餐飲糧油雜貨、清潔用品與紙巾類產品，適合餐廳、酒店、零售商及批發客戶。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-xl bg-[#d71920] px-7 py-4 text-base font-black text-white shadow-lg transition hover:bg-[#a80f15]"
                >
                  瀏覽產品
                </a>

                <a
                  href="#quote"
                  className="rounded-xl border border-white/70 px-7 py-4 text-base font-black text-white transition hover:bg-white/10"
                >
                  獲取報價
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 md:grid-cols-4">
                {["品質保證", "價格實惠", "送貨及時", "專業服務"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-sm font-bold backdrop-blur"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-[620px] rounded-[2rem] bg-white/12 p-6 backdrop-blur-md">
                <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/10 p-4">
                  <img
                    src={currentDetail.posterImage}
                    alt={currentDetail.displayName}
                    className="max-h-full max-w-full object-contain object-center drop-shadow-2xl"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="text-3xl font-black">
                    {currentDetail.displayName}
                  </p>
                  <p className="mt-1 text-white/80">{currentDetail.specLine}</p>
                </div>

                <div className="mt-5 flex justify-center gap-2">
                  {mainProducts.map((product, index) => (
                    <button
                      key={product.id}
                      aria-label={`Show ${product.nameCn}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${activeSlide === index
                        ? "w-8 bg-[#d71920]"
                        : "w-2.5 bg-white/70"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section
        id="products"
        className="relative z-20 mx-auto -mt-8 max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <LargeCategoryCard
            title="雅楓自營產品"
            desc="午餐肉、五香肉丁、回鍋肉、紅茶等主打產品"
            image="/products/yafeng-luncheon-meat-poster.png"
            href="/products/yafeng"
            tone="orange"
          />

          <LargeCategoryCard
            title="紙巾類"
            desc="餐巾紙、抽紙、小卷紙、大卷紙、擦手紙、定制"
            image="/tissue/tissue-custom.png"
            href="/products/tissue"
            tone="red"
          />

          <LargeCategoryCard
            title="餐飲糧油雜貨及清潔用品報價單"
            desc="米類、粉麵、調味、罐頭、茶飲、急凍、清潔用品"
            image="/products/yafeng-five-spice-diced-pork-poster.png"
            href="/price-list"
            tone="yellow"
          />
        </div>
      </section>

      {/* YAFENG OWN PRODUCTS */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Yafeng Own Products"
          title="雅楓自營產品"
          desc="精選主打商品，適合餐飲、零售、批發及茶餐廳使用。"
        />

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {mainProducts.map((product) => {
            const detail = getOwnProductDetail(product);

            return (
              <a
                key={product.id}
                href="/products/yafeng"
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-orange-100 bg-white/80 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex h-[520px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-neutral-50">
                  <img
                    src={detail.posterImage}
                    alt={detail.displayName}
                    className="h-full w-full rounded-[1.2rem] object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <p className="mt-6 min-h-[64px] text-2xl font-black leading-tight text-[#8a1c12]">
                    {detail.displayName}
                  </p>

                  <p className="mt-1 min-h-[24px] font-semibold text-neutral-600">
                    {detail.specLine}
                  </p>

                  <p className="mt-3 min-h-[56px] leading-7 text-neutral-600">
                    {detail.description}
                  </p>

                  <div className="mt-auto inline-flex w-fit rounded-xl bg-[#d71920] px-5 py-3 text-sm font-black text-white">
                    查看詳情 →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* TISSUE */}
      <section id="tissue" className="py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Tissue & Paper"
            title="紙巾類"
            desc="紙巾作為獨立大分類，下面保留六個子分類，方便客戶快速瀏覽。"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeTissueSubCategories.map((item, index) => (
              <a
                key={item.titleEn}
                href={item.href}
                className="group rounded-[1.75rem] border border-orange-100 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3d8] text-xl font-black text-[#d71920]">
                  {index + 1}
                </div>

                <h3 className="text-3xl font-black text-[#d71920]">
                  {item.titleCn}
                </h3>

                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {item.titleEn}
                </p>

                <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>

                <span className="mt-6 inline-flex rounded-xl border border-[#d71920] px-5 py-2.5 text-sm font-black text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                  查看系列 →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-[#fff3d8] p-8 shadow-lg md:grid-cols-4">
          {[
            ["品質保證", "嚴格把控產品質量，確保每一款產品安全可靠。"],
            ["價格實惠", "源頭採購、合理定價，為客戶創造更大價值。"],
            ["送貨及時", "高效物流配送，協助餐飲業務穩定運營。"],
            ["專業服務", "專業團隊跟進，按客戶需求提供建議。"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="border-orange-200 md:border-r md:pr-6 last:border-r-0"
            >
              <h3 className="text-2xl font-black text-[#8a1c12]">{title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-4xl font-black md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#d71920]" />
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
        {desc}
      </p>
    </div>
  );
}

function LargeCategoryCard({
  title,
  desc,
  image,
  href,
  tone,
}: {
  title: string;
  desc: string;
  image: string;
  href: string;
  tone: "orange" | "yellow" | "red";
}) {
  const toneClass =
    tone === "orange"
      ? "from-[#f58a1f] to-[#f6b84a]"
      : tone === "yellow"
        ? "from-[#f5c542] to-[#f7d36a]"
        : "from-[#e53935] to-[#ff7a59]";

  return (
    <a
      href={href}
      className={`group grid min-h-[230px] grid-cols-[1fr_170px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${toneClass} p-7 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-black">{title}</h3>
          <p className="mt-3 max-w-xs leading-7 text-white/90">{desc}</p>
        </div>

        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-neutral-900 transition group-hover:translate-x-1">
          →
        </span>
      </div>

      <img
        src={image}
        alt={title}
        className="max-h-full max-w-full rounded-2xl object-contain object-center"
      />
    </a>
  );
}
