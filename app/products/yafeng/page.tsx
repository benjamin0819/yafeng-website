"use client";

import { useEffect, useState } from "react";
import { mainProducts } from "@/data/products";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const priceDetails: Record<
  string,
  {
    displayName: string;
    specLine: string;
    description: string;
    priceLines: string[];
    posterImage: string;
  }
> = {
  "CMEE 午餐肉": {
    displayName: "世美 CMEE 牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "世美 CMEE 午餐肉，適合茶餐廳、快餐店及餐飲供應。",
    priceLines: ["1588克 × 12罐：470.00 / 箱"],
    posterImage: "/products/cmee-luncheon-meat-poster.png",
  },
  "雅楓 午餐肉": {
    displayName: "雅楓牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "雅楓品牌主打午餐肉產品，適合餐飲、茶餐廳、快餐及批發客戶。",
    priceLines: ["1588克 × 12罐：550.00 / 箱"],
    posterImage: "/products/yafeng-luncheon-meat-poster.png",
  },

  "雅楓 五香肉丁": {
    displayName: "雅楓牌五香肉丁",
    specLine: "380克 × 48罐",
    description: "五香風味肉丁，適合即食、配飯、餐飲出品及批量採購。",
    priceLines: ["380克 × 48罐：760.00 / 箱"],
    posterImage: "/products/yafeng-five-spice-diced-pork-poster.png",
  },

  "金豬 午餐肉": {
    displayName: "金豬牌午餐肉",
    specLine: "1588克 × 12罐",
    description: "大罐裝午餐肉，適合餐飲出品、長期備貨及批發採購。",
    priceLines: ["1588克 × 12罐：460.00 / 箱"],
    posterImage: "/products/golden-pig-luncheon-meat-poster.png",
  },

  "筍片回鍋肉": {
    displayName: "世美牌回鍋肉",
    specLine: "198克 × 72罐",
    description: "經典川味筍片回鍋肉，適合餐飲快速出品及批量採購。",
    priceLines: ["198克 × 72罐：560.00 / 箱"],
    posterImage: "/products/cmee-twice-cooked-pork-poster.png",
  },

  "100% 紅茶（奶茶專用）": {
    displayName: "錦標拼配茶",
    specLine: "5磅 / 包 或 30磅 / 箱",
    description: "奶茶專用拼配紅茶，適合港式奶茶、茶餐廳及飲品店使用。",
    priceLines: [
      "5磅 / 包：130.00 / 包（26 / 磅）",
      "30磅 / 箱（6包）：780.00 / 箱（26 / 磅）",
    ],
    posterImage: "/products/black-tea-poster.png",
  },
};

function getProductDetail(productName: string) {
  if (productName.includes("雅楓") && productName.includes("午餐肉")) {
    return priceDetails["雅楓 午餐肉"];
  }

  if (productName.includes("五香肉丁")) {
    return priceDetails["雅楓 五香肉丁"];
  }

  if (productName.includes("金豬") && productName.includes("午餐肉")) {
    return priceDetails["金豬 午餐肉"];
  }

  if (productName.includes("CMEE") || productName.includes("世美")) {
    if (productName.includes("午餐肉")) {
      return priceDetails["CMEE 午餐肉"];
    }
  }

  if (productName.includes("回鍋肉") || productName.includes("筍片")) {
    return priceDetails["筍片回鍋肉"];
  }

  if (
    productName.includes("紅茶") ||
    productName.includes("奶茶") ||
    productName.includes("錦標") ||
    productName.includes("拼配茶")
  ) {
    return priceDetails["100% 紅茶（奶茶專用）"];
  }

  return {
    displayName: productName,
    specLine: "規格請聯絡查詢",
    description: "雅楓自營產品，適合餐飲、零售及批發客戶。",
    priceLines: ["價格請聯絡查詢。"],
    posterImage: "/products/yafeng-luncheon-meat-poster.png",
  };
}

export default function YafengProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof mainProducts)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <a href="/" className="font-bold text-[#d71920]">
          ← 返回首頁
        </a>

        <h1 className="mt-8 text-6xl font-black text-[#d71920]">
          雅楓自營產品
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-neutral-600">
          精選午餐肉、罐頭食品及茶飲產品，適合餐飲、零售及批發客戶。
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {mainProducts.map((product) => {
            const detail = getProductDetail(product.nameCn);

            return (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group flex h-full flex-col rounded-[2rem] bg-white p-6 text-left shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex h-[520px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-neutral-50">
                  <img
                    src={detail.posterImage}
                    alt={detail.displayName}
                    className="h-full w-full rounded-[1.2rem] object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h2 className="mt-6 min-h-[64px] text-2xl font-black leading-tight text-[#8a1c12]">
                    {detail.displayName}
                  </h2>

                  <p className="mt-1 min-h-[24px] font-semibold text-neutral-600">
                    {detail.specLine}
                  </p>

                  <p className="mt-3 min-h-[56px] leading-7 text-neutral-600">
                    {detail.description}
                  </p>

                  <div className="mt-auto rounded-2xl bg-[#fff7e8] p-4">
                    <p className="font-black text-[#d71920]">價格 / Price</p>
                    <div className="mt-2 space-y-1 text-sm font-bold text-neutral-700">
                      {detail.priceLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 font-black text-[#d71920]">
                    查看詳細介紹 →
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <Footer />
    </main>
  );
}

function ProductDetailModal({
  product,
  onClose,
}: {
  product: (typeof mainProducts)[number];
  onClose: () => void;
}) {
  const detail = getProductDetail(product.nameCn);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const galleryImages =
    detail.displayName === "錦標拼配茶"
      ? [detail.posterImage]
      : [detail.posterImage, product.image];

  const currentImage = galleryImages[imageIndex];

  function prevImage() {
    setImageIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  }

  function nextImage() {
    setImageIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 px-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-10">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xl font-black hover:bg-neutral-200"
        >
          ×
        </button>

        <div className="relative flex min-h-[620px] items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-50">
          <img
            src={currentImage}
            alt={detail.displayName}
            className="h-full max-h-[620px] w-full object-contain"
          />

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black shadow-lg hover:bg-white"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black shadow-lg hover:bg-white"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setImageIndex(index)}
                    className={`h-2.5 rounded-full transition ${imageIndex === index ? "w-8 bg-[#d71920]" : "w-2.5 bg-white/80"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="pr-4">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
            Yafeng Product
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#d71920]">
            {detail.displayName}
          </h2>

          <p className="mt-3 text-lg font-bold text-neutral-600">
            {detail.specLine}
          </p>

          <p className="mt-6 leading-8 text-neutral-700">
            {detail.description}
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-orange-100 bg-[#fff7e8] p-6">
            <h3 className="text-2xl font-black text-[#8a1c12]">
              產品價格
            </h3>

            <div className="mt-4 space-y-3">
              {detail.priceLines.map((line) => (
                <div
                  key={line}
                  className="rounded-xl bg-white px-5 py-4 font-black text-[#d71920] shadow-sm"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoCard title="適用客戶" text="餐飲、茶餐廳、零售及批發客戶" />
            <InfoCard title="供應方式" text="按箱供應，可聯絡確認庫存" />
            <InfoCard title="產品用途" text="餐飲出品、零售銷售、長期備貨" />
            <InfoCard title="報價說明" text="價格可按數量及配送安排確認" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#fff3d8] p-5">
      <p className="font-black text-[#8a1c12]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
    </div>
  );
}
