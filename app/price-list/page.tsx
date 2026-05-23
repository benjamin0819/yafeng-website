import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PriceListPage() {
  const excelUrl1 =
    "https://1drv.ms/w/c/a27d446b6be6c689/IQRa0knC_z4ETppLLR1kHLgwATW5ehLjQH93foMAApSaJ34";

  const excelUrl2 =
    "https://1drv.ms/x/c/a27d446b6be6c689/IQQGUI7f4qCwQbX5o6BWk2pVAezKkATUVf37OX8XZmZFrGI";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <a href="/" className="font-bold text-[#d71920]">
          ← 返回首頁
        </a>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
              Price List
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight text-[#d71920] md:text-6xl">
              報價單
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-neutral-600 md:text-lg">
              查看雅楓集團最新報價單。報價單由雲端 Excel 同步更新，
              包括餐飲糧油雜貨、清潔用品等產品資料。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={excelUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#d71920] bg-white px-5 py-3 text-sm font-black text-[#d71920] shadow-sm transition hover:bg-[#fff3d8] md:px-6"
            >
              打開餐飲糧油雜貨報價單
            </a>

            <a
              href={excelUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#a80f15] md:px-6"
            >
              打開清潔用品報價單
            </a>
          </div>
        </div>

        <PriceListEmbed
          title="餐飲糧油雜貨報價單"
          subtitle="Food, Grocery & Restaurant Supplies Price List"
          description="包括米類、粉麵類、調味料、罐頭類、茶類飲品、急凍食品及其他餐飲供應產品。"
          excelUrl={excelUrl1}
          buttonText="新視窗打開餐飲糧油雜貨報價單"
        />

        <PriceListEmbed
          title="清潔用品報價單"
          subtitle="Cleaning Supplies Price List"
          description="包括清潔用品、紙品、消耗品及其他商用清潔相關產品。"
          excelUrl={excelUrl2}
          buttonText="新視窗打開清潔用品報價單"
        />
      </div>

      <Footer />
    </main>
  );
}

function PriceListEmbed({
  title,
  subtitle,
  description,
  excelUrl,
  buttonText,
}: {
  title: string;
  subtitle: string;
  description: string;
  excelUrl: string;
  buttonText: string;
}) {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl">
      <div className="flex flex-col gap-5 border-b border-orange-100 bg-[#fff7e8] px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
            Cloud Price List
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#8a1c12]">
            {title}
          </h2>

          <p className="mt-1 text-sm font-bold text-neutral-500">
            {subtitle}
          </p>

          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            {description}
          </p>
        </div>

        <a
          href={excelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-xl bg-[#d71920] px-6 py-3 text-center font-black text-white shadow-lg transition hover:bg-[#a80f15]"
        >
          {buttonText}
        </a>
      </div>

      <div className="bg-white p-3 md:p-5">
        <p className="mb-3 rounded-xl bg-[#fff3d8] px-4 py-3 text-sm leading-6 text-neutral-600 md:hidden">
          手機瀏覽時，如表格顯示不完整，建議點擊上方按鈕在新視窗打開報價單。
        </p>

        <iframe
          src={excelUrl}
          title={title}
          className="h-[650px] w-full rounded-2xl border border-neutral-200 bg-white md:h-[850px]"
          allowFullScreen
        />
      </div>
    </section>
  );
}