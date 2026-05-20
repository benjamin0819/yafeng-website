"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import QuoteModal from "../../../components/QuoteModal";

const tissueCategories = [
  {
    number: "1",
    titleCn: "餐巾紙系列",
    titleEn: "Napkin Series",
    desc: "柔軟吸水，適用於餐飲及日常使用。",
    href: "/products/tissue/dining-napkins",
  },
  {
    number: "2",
    titleCn: "抽紙系列",
    titleEn: "Box Tissue Series",
    desc: "抽取方便，適合辦公室、餐廳及家庭。",
    href: "/products/tissue/box-tissue",
  },
  {
    number: "3",
    titleCn: "小卷紙系列",
    titleEn: "Small Roll Tissue",
    desc: "規格多樣，經濟實用。",
    href: "/products/tissue/small-roll",
  },
  {
    number: "4",
    titleCn: "大卷紙系列",
    titleEn: "Jumbo Roll Tissue",
    desc: "大容量設計，適合商用公共場所。",
    href: "/products/tissue/large-roll",
  },
  {
    number: "5",
    titleCn: "擦手紙系列",
    titleEn: "Hand Towel Series",
    desc: "強韌吸水，乾爽衛生。",
    href: "/products/tissue/hand-towel",
  },
  {
    number: "6",
    titleCn: "定制系列",
    titleEn: "Custom Printing",
    desc: "支持 LOGO、包裝及尺寸定制。",
    href: "/products/tissue/custom",
  },
];

const featuredTissueProducts = [
  {
    nameCn: "雅楓抽取式面紙",
    nameEn: "Box Tissue",
    spec: "200 抽 x 3 層",
    image: "/tissue/box-tissue/box-tissue-app161840250-2.png",
  },
  {
    nameCn: "雅楓軟抽面紙",
    nameEn: "Soft Box Tissue",
    spec: "150 抽 x 3 層",
    image: "/tissue/box-tissue/box-tissue-app181850200-2.png",
  },
  {
    nameCn: "雅楓小卷衛生紙",
    nameEn: "Small Roll Tissue",
    spec: "10 卷 x 3 層",
    image: "/tissue/small-roll-paper/small-roll-paper-40g-4ply.png",
  },
  {
    nameCn: "雅楓大卷紙",
    nameEn: "Jumbo Roll Tissue",
    spec: "800 克 / 卷",
    image: "/tissue/large-roll-paper/large-roll-paper-600904app.png",
  },
  {
    nameCn: "雅楓擦手紙",
    nameEn: "Hand Towel",
    spec: "200 張 x 20 包",
    image: "/tissue/hand-towel/hand-towel-a051.png",
  },
  {
    nameCn: "定制紙盒",
    nameEn: "Custom Printing",
    spec: "可定制尺寸及印刷",
    image: "/tissue/tissue-custom.png",
  },
];

export default function TissuePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff8e8] via-white to-[#ffe8d0] shadow-2xl">
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#d71920]/15 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-40 w-full bg-gradient-to-r from-[#f6b800] via-[#f6b800] to-[#d71920]" />
          <div className="absolute right-0 bottom-0 h-32 w-[60%] rounded-tl-full bg-[#d71920]" />

          <div className="relative z-10 grid min-h-[520px] items-center gap-10 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-12 lg:px-20">
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm font-bold text-neutral-500">
                <a href="/" className="hover:text-[#d71920]">
                  Home
                </a>
                <span>›</span>
                <span className="text-[#d71920]">紙巾類</span>
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
                Tissue & Paper
              </p>

              <h1 className="mt-4 text-6xl font-black leading-tight text-[#d71920] md:text-7xl">
                紙巾類
              </h1>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Tissue & Paper Products
              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-neutral-700">
                優質原生木漿、柔軟親膚、品質安心。提供餐巾紙、抽紙、小卷紙、
                大卷紙、擦手紙及定制紙品方案。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#categories"
                  className="rounded-xl bg-[#d71920] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#a80f15]"
                >
                  查看分類
                </a>

                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="rounded-xl border border-[#d71920] bg-white px-7 py-4 font-black text-[#d71920] transition hover:bg-[#fff3d8]"
                >
                  獲取報價
                </button>
              </div>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center">
              <div className="absolute h-[360px] w-[360px] rounded-full bg-white/70 blur-2xl" />

              <div className="flex h-[360px] items-center justify-center rounded-[2rem] bg-white/70 p-6 shadow-xl">
                <img
                  src="/tissue/tissue-custom.png"
                  alt="Tissue & Paper Products"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIX CATEGORIES */}
      <section
        id="categories"
        className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionTitle
          eyebrow="Tissue & Paper"
          title="紙巾類"
          desc="紙巾作為獨立大分類，下面保留六個子分類，方便客戶快速瀏覽。"
        />

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {tissueCategories.map((item) => (
            <a
              key={item.titleEn}
              href={item.href}
              className="group rounded-[1.5rem] border border-orange-100 bg-white/85 p-8 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3d8] text-lg font-black text-[#d71920]">
                {item.number}
              </div>

              <h3 className="mt-7 text-3xl font-black text-[#d71920]">
                {item.titleCn}
              </h3>

              <p className="mt-1 text-lg font-black text-neutral-950">
                {item.titleEn}
              </p>

              <p className="mt-6 min-h-[3.5rem] leading-7 text-neutral-600">
                {item.desc}
              </p>

              <span className="mt-8 inline-flex rounded-xl border border-[#d71920] px-5 py-3 text-sm font-black text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                查看系列 →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-white/75 p-8 shadow-xl backdrop-blur md:grid-cols-4">
          {[
            ["柔軟親膚", "Soft & Gentle", "細膩觸感，適合日常和商用場景。"],
            ["衛生便捷", "Hygienic & Convenient", "乾淨衛生，使用方便。"],
            ["原生木漿", "Virgin Wood Pulp", "優選原生木漿，安心使用。"],
            ["適用廣泛", "Commercial Use", "適合餐廳、酒店、辦公室及公共場所。"],
          ].map(([title, en, desc]) => (
            <div
              key={title}
              className="border-orange-200 md:border-r md:pr-6 last:border-r-0"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f6b800] to-[#d71920] text-2xl text-white">
                ✓
              </div>
              <h3 className="text-xl font-black text-[#8a1c12]">{title}</h3>
              <p className="mt-1 font-bold text-neutral-700">{en}</p>
              <p className="mt-3 leading-7 text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-[#fff3d8] to-white p-8 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              需要大量採購或定制紙品？
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              聯繫我們獲取報價，我們將為您提供專業紙品解決方案。
            </p>
          </div>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="rounded-xl bg-[#d71920] px-7 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#a80f15]"
          >
            Request Quote →
          </button>
        </div>
      </section>

      <Footer />
      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName="紙巾類"
      />
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
