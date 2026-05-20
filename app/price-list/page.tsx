import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PriceListPage() {
  const pdfUrl = "/files/yafeng-pricelist.pdf";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <a href="/" className="font-bold text-[#d71920]">
          ← 返回首頁
        </a>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
              Price List
            </p>

            <h1 className="mt-3 text-5xl font-black text-[#d71920] md:text-6xl">
              餐飲糧油雜貨及清潔用品報價單
            </h1>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-600">
              查看雅楓集團最新報價單，包括米類、粉麵類、調味料、罐頭類、
              茶類飲品、急凍食品及清潔用品等產品資料。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#d71920] bg-white px-6 py-3 font-black text-[#d71920] shadow-sm transition hover:bg-[#fff3d8]"
            >
              新視窗打開 PDF
            </a>

            <a
              href={pdfUrl}
              download
              className="rounded-xl bg-[#d71920] px-6 py-3 font-black text-white shadow-lg transition hover:bg-[#a80f15]"
            >
              下載報價單
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl">
          <div className="border-b border-orange-100 bg-[#fff7e8] px-6 py-4">
            <h2 className="text-xl font-black text-[#8a1c12]">
              報價單 PDF 預覽
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              如果手機或瀏覽器無法顯示 PDF，請使用上方「新視窗打開 PDF」或「下載報價單」。
            </p>
          </div>

          <iframe
            src={pdfUrl}
            title="Yafeng Price List PDF"
            className="h-[850px] w-full bg-white"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
