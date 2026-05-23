"use client";

import { useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

type TissueProduct = {
    nameCn: string;
    nameEn: string;
    image: string;
    spec?: string;
    material?: string;
    usage?: string;
    rawSpecs?: string[];
};

type TissueSeriesPageProps = {
    breadcrumbName: string;
    titleCn: string;
    titleEn: string;
    intro: string;
    heroImage: string;
    quoteProductName: string;
    products: TissueProduct[];
    details: {
        series: string;
        specs: string;
        material: string;
        usage: string;
        supply: string;
        custom: string;
    };
};

export default function TissueSeriesPage({
    breadcrumbName,
    titleCn,
    titleEn,
    intro,
    heroImage,
    quoteProductName,
    products,
    details,
}: TissueSeriesPageProps) {
    const [quoteOpen, setQuoteOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
            <Header />

            <div className="md:hidden">
                <MobileTissueSeriesPage
                    titleCn={titleCn}
                    titleEn={titleEn}
                    intro={intro}
                    quoteProductName={quoteProductName}
                    products={products}
                    setQuoteOpen={setQuoteOpen}
                />
            </div>

            <div className="hidden md:block">
                <DesktopTissueSeriesPage
                    breadcrumbName={breadcrumbName}
                    titleCn={titleCn}
                    titleEn={titleEn}
                    intro={intro}
                    heroImage={heroImage}
                    quoteProductName={quoteProductName}
                    products={products}
                    details={details}
                    setQuoteOpen={setQuoteOpen}
                />
            </div>

            <Footer />

            <QuoteModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productName={quoteProductName}
            />
        </main>
    );
}


function DesktopTissueSeriesPage({
  breadcrumbName,
  titleCn,
  titleEn,
  intro,
  heroImage,
  products,
  details,
  setQuoteOpen,
}: TissueSeriesPageProps & {
  setQuoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff8e8] via-white to-[#ffe8d0] shadow-2xl">
          <div className="absolute bottom-0 right-0 h-36 w-full bg-gradient-to-r from-[#f6b800] to-[#d71920]" />
          <div className="absolute bottom-0 right-0 h-28 w-[58%] rounded-tl-full bg-[#d71920]" />

          <div className="relative z-10 grid min-h-[500px] items-center gap-10 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-12 lg:px-20">
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm font-bold text-neutral-500">
                <a href="/" className="hover:text-[#d71920]">
                  Home
                </a>
                <span>›</span>
                <a href="/products/tissue" className="hover:text-[#d71920]">
                  紙巾類
                </a>
                <span>›</span>
                <span className="text-[#d71920]">{breadcrumbName}</span>
              </div>

              <h1 className="text-6xl font-black leading-tight text-[#d71920] md:text-7xl">
                {titleCn}
              </h1>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                {titleEn}
              </h2>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-neutral-700">
                {intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-xl bg-[#d71920] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#a80f15]"
                >
                  查看產品
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

              <div className="relative z-10 rounded-[2rem] bg-white/80 p-8 shadow-2xl backdrop-blur">
                <img
                  src={heroImage}
                  alt={titleCn}
                  className="h-[300px] w-full max-w-[480px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsGrid titleCn={titleCn} titleEn={titleEn} products={products} />

      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-white/80 p-8 shadow-xl backdrop-blur">
            <h2 className="text-3xl font-black text-[#8a1c12]">
              系列介紹
            </h2>

            <p className="mt-5 leading-8 text-neutral-700">
              {titleCn}提供多種規格與包裝選擇，適合餐飲、酒店、辦公室、
              洗手間、廚房及商用場所。可按採購需求提供批量供應及報價。
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["品質穩定", "多種規格", "商用適合", "批量供應"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#fff3d8] p-5 font-black text-[#8a1c12]"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/80 p-8 shadow-xl backdrop-blur">
            <h2 className="text-3xl font-black text-[#8a1c12]">
              產品資料
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-orange-100">
              <table className="w-full text-left text-sm">
                <tbody>
                  {[
                    ["產品系列", details.series],
                    ["主要規格", details.specs],
                    ["材質", details.material],
                    ["適用場景", details.usage],
                    ["採購方式", details.supply],
                    ["定制選項", details.custom],
                  ].map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b border-orange-100 last:border-b-0"
                    >
                      <th className="w-36 bg-[#fff7e8] px-5 py-4 font-black text-[#8a1c12]">
                        {label}
                      </th>
                      <td className="px-5 py-4 text-neutral-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-[#fff3d8] to-white p-8 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              需要{titleCn}批量報價？
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              聯繫我們並提供產品規格、數量及送貨地點，我們將為您提供專業報價。
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
    </>
  );
}

function MobileTissueSeriesPage({
  titleCn,
  titleEn,
  intro,
  products,
  setQuoteOpen,
}: {
  titleCn: string;
  titleEn: string;
  intro: string;
  quoteProductName: string;
  products: TissueProduct[];
  setQuoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="mx-auto max-w-md px-4 pb-10 pt-5">
      <section className="rounded-[1.75rem] border border-orange-100 bg-white/90 p-5 shadow-lg">
        <div className="text-sm font-bold text-neutral-500">
          <a href="/" className="hover:text-[#d71920]">
            Home
          </a>
          <span className="mx-2">›</span>
          <a href="/products/tissue" className="hover:text-[#d71920]">
            紙巾類
          </a>
          <span className="mx-2">›</span>
          <span className="text-[#d71920]">{titleCn}</span>
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-[#c28a22]">
          {titleEn}
        </p>

        <h1 className="mt-3 text-[36px] font-black leading-tight text-[#d71920]">
          {titleCn}產品
        </h1>

        <div className="mt-3 h-1 w-12 rounded-full bg-[#d71920]" />

        <p className="mt-5 text-[15px] leading-7 text-neutral-600">
          {intro}
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#products"
            className="flex-1 rounded-xl bg-[#d71920] px-4 py-3 text-center text-sm font-black text-white shadow-lg"
          >
            查看產品
          </a>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="flex-1 rounded-xl border border-[#d71920] bg-white px-4 py-3 text-sm font-black text-[#d71920]"
          >
            獲取報價
          </button>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <MobileSectionTitle title="產品列表" />
          <p className="text-sm font-bold text-neutral-500">
            共 <span className="text-[#d71920]">{products.length}</span> 款
          </p>
        </div>

        <div id="products" className="mt-4 grid grid-cols-2 gap-3">
          {products.map((product, index) => {
            const specs = product.rawSpecs ?? [];

            return (
              <article
                key={`${product.nameCn}-${product.nameEn}-${index}`}
                className="overflow-hidden rounded-[1.25rem] border border-orange-100 bg-white shadow-md"
              >
                <div className="flex h-32 items-center justify-center bg-neutral-50 p-3">
                  <img
                    src={product.image}
                    alt={product.nameCn}
                    className="max-h-28 max-w-full object-contain"
                  />
                </div>

                <div className="p-3">
                  <h3 className="line-clamp-2 text-[14px] font-black leading-5 text-[#d71920]">
                    {product.nameCn}
                  </h3>

                  <p className="mt-1 line-clamp-1 text-[11px] font-bold text-neutral-500">
                    {product.nameEn}
                  </p>

                  <div className="mt-2 space-y-1 text-[11px] leading-5 text-neutral-700">
                    {specs.slice(0, 3).map((line) => (
                      <p key={line} className="line-clamp-1">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-[#ead9b7] bg-[#fff8ea] p-5 shadow-sm">
        <h2 className="text-xl font-black text-neutral-950">
          需要{titleCn}批量報價？
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-600">
          提供產品規格、數量及送貨地點，我們將為您提供專業報價。
        </p>

        <button
          type="button"
          onClick={() => setQuoteOpen(true)}
          className="mt-4 w-full rounded-xl bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-md"
        >
          立即報價 →
        </button>
      </section>
    </div>
  );
}

function ProductsGrid({
  titleCn,
  titleEn,
  products,
}: {
  titleCn: string;
  titleEn: string;
  products: TissueProduct[];
}) {
  return (
    <section
      id="products"
      className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow={titleEn}
        title={`${titleCn}產品`}
        desc="展示主要產品圖片、規格、材質及適用場景。"
      />

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <article
            key={`${product.nameCn}-${product.nameEn}-${index}`}
            className="overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-52 items-center justify-center bg-neutral-50 p-5">
              <img
                src={product.image}
                alt={product.nameCn}
                className="max-h-40 max-w-full object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-black text-[#d71920]">
                {product.nameCn}
              </h3>

              <p className="mt-1 text-sm font-bold text-neutral-500">
                {product.nameEn}
              </p>

              <div className="mt-4 space-y-2 text-sm text-neutral-700">
                {product.rawSpecs ? (
                  product.rawSpecs.map((line) => <p key={line}>{line}</p>)
                ) : (
                  <>
                    <p>
                      <span className="font-black">規格：</span>
                      {product.spec}
                    </p>
                    <p>
                      <span className="font-black">材質：</span>
                      {product.material}
                    </p>
                    <p>
                      <span className="font-black">適用：</span>
                      {product.usage}
                    </p>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileSectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-7 w-1 rounded-full bg-[#d71920]" />
      <h2 className="text-2xl font-black text-neutral-950">{title}</h2>
    </div>
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
