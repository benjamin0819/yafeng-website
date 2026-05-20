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

            <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff8e8] via-white to-[#ffe8d0] shadow-2xl">
                    <div className="absolute right-0 bottom-0 h-36 w-full bg-gradient-to-r from-[#f6b800] to-[#d71920]" />
                    <div className="absolute right-0 bottom-0 h-28 w-[58%] rounded-tl-full bg-[#d71920]" />

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
                    {products.map((product) => (
                        <article
                            key={product.nameCn}
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
                                        product.rawSpecs.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))
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
                productName={quoteProductName}
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
