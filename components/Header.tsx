"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img
              src="/yafeng-logo.png"
              alt="Yafeng logo"
              className="h-12 w-12 shrink-0 rounded-sm object-cover sm:h-16 sm:w-16 md:h-20 md:w-20"
            />

            <div className="min-w-0">
              <p className="max-w-[170px] text-xl font-black leading-tight tracking-wide text-[#d71920] sm:max-w-none sm:text-xl md:text-3xl">
                雅楓集團發展有限公司
              </p>

              <p className="mt-1 hidden text-xs font-semibold tracking-wide sm:block md:text-base">
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
            className="shrink-0 rounded-xl border border-neutral-200 px-3 py-2 text-sm font-black lg:hidden"
          >
            報價
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