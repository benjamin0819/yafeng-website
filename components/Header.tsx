"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/yafeng-logo.png"
              alt="Yafeng logo"
              className="h-16 w-16 rounded-sm object-cover md:h-20 md:w-20"
            />

            <div>
              <p className="text-xl font-black tracking-wide text-[#d71920] md:text-3xl">
                雅楓集團發展有限公司
              </p>
              <p className="text-xs font-semibold tracking-wide md:text-base">
                YAFENG GROUP DEVELOPMENT LIMITED
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="/" className="text-sm font-bold hover:text-[#d71920]">
              首頁
            </a>

            <a
              href="/products/yafeng"
              className="text-sm font-bold hover:text-[#d71920]"
            >
              雅楓自營產品
            </a>

            <a
              href="/products/tissue"
              className="text-sm font-bold hover:text-[#d71920]"
            >
              紙巾類
            </a>

            <a
              href="/price-list"
              className="text-sm font-bold hover:text-[#d71920]"
            >
              報價單
            </a>

            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="rounded-xl bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#a80f15]"
            >
              獲取報價
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="rounded-xl border border-neutral-200 px-3 py-2 font-black lg:hidden"
          >
            獲取報價
          </button>
        </div>
      </header>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName=""
      />
    </>
  );
}