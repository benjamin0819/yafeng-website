import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PriceListPage() {
  const docUrl1 =
    "https://docs.google.com/document/d/1DMEnBPxPcnHeomx-kSqICto6Y5vY_zPx/preview";

  const excelUrl2 =
    "https://docs.google.com/spreadsheets/d/1gDPAZGHAcak1jRYNqx51RLg2OAYIhFCJ/preview";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
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
              查看雅楓集團最新報價單。報價單由雲端 Word / Excel 同步更新，
              包括餐飲糧油雜貨、清潔用品等產品資料。
            </p>
          </div>

          {/* Desktop top buttons */}
          <div className="hidden flex-wrap gap-3 md:flex">
            <a
              href={docUrl1}
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

        {/* Mobile version: cards only, no iframe */}
        <div className="mt-8 grid gap-5 md:hidden">
          <MobilePriceCard
            type="GoogleDocs"
            title="餐飲糧油雜貨報價單"
            subtitle="Food, Grocery & Restaurant Supplies Price List"
            description="包括米類、粉麵類、調味料、罐頭類、茶類飲品、急凍食品及其他餐飲供應產品。"
            href={docUrl1}
            buttonText="全屏打開餐飲糧油雜貨報價單"
          />

          <MobilePriceCard
            type="GoogleSheets"
            title="清潔用品報價單"
            subtitle="Cleaning Supplies Price List"
            description="包括清潔用品、紙品、消耗品及其他商用清潔相關產品。"
            href={excelUrl2}
            buttonText="全屏打開清潔用品報價單"
          />

          <div className="rounded-[1.5rem] border border-[#ead9b7] bg-[#fff8ea] p-5 shadow-sm">
            <h2 className="text-lg font-black text-neutral-950">
              手機瀏覽提示
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              手機瀏覽 Word / Excel 報價單時，內嵌預覽可能顯示不完整。
              建議點擊上方按鈕在新視窗全屏打開，查看會更清楚。
            </p>
          </div>
        </div>

        {/* Desktop version: iframe preview */}
        <div className="hidden md:block">
          <PriceListEmbed
            type="GoogleDocs"
            title="餐飲糧油雜貨報價單"
            subtitle="Food, Grocery & Restaurant Supplies Price List"
            description="包括米類、粉麵類、調味料、罐頭類、茶類飲品、急凍食品及其他餐飲供應產品。"
            fileUrl={docUrl1}
            buttonText="新視窗打開餐飲糧油雜貨報價單"
          />

          <PriceListEmbed
            type="GoogleSheets"
            title="清潔用品報價單"
            subtitle="Cleaning Supplies Price List"
            description="包括清潔用品、紙品、消耗品及其他商用清潔相關產品。"
            fileUrl={excelUrl2}
            buttonText="新視窗打開清潔用品報價單"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

function MobilePriceCard({
  type,
  title,
  subtitle,
  description,
  href,
  buttonText,
}: {
  type: "GoogleDocs" | "GoogleSheets";
  title: string;
  subtitle: string;
  description: string;
  href: string;
  buttonText: string;
}) {
  const badgeClass =
    type === "GoogleDocs" ? "bg-[#4285f4]" : "bg-[#0f9d58]";

  const fileName =
    type === "GoogleDocs" ? "Google Docs" : "Google Sheets";

  const fileIcon =
    type === "GoogleDocs" ? "D" : "S";

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-lg">
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c28a22]">
          Cloud Price List
        </p>

        <h2 className="mt-3 text-2xl font-black leading-tight text-[#8a1c12]">
          {title}
        </h2>

        <p className="mt-1 text-sm font-bold text-neutral-500">{subtitle}</p>

        <p className="mt-4 text-sm leading-6 text-neutral-600">
          {description}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block rounded-xl bg-[#d71920] px-5 py-3 text-center text-sm font-black text-white shadow-md transition hover:bg-[#a80f15]"
        >
          {buttonText}
        </a>
      </div>

      <div className="border-t border-orange-100 bg-[#fff7e8] p-4">
        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-3 py-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-black text-white ${badgeClass}`}
            >
              {fileIcon}
            </div>

            <div>
              <p className="text-xs font-black text-neutral-800">
                雲端{fileName}報價單
              </p>
              <p className="text-[10px] text-neutral-500">
                {fileName}
              </p>
            </div>
          </div>

          <div className="p-3">
            {type === "GoogleDocs" ? <WordPreviewSkeleton /> : <ExcelPreviewSkeleton />}

            <div className="mt-3 flex items-center justify-between text-xs font-bold text-neutral-500">
              <span>雲端同步更新</span>
              <span>點擊上方按鈕查看完整內容</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WordPreviewSkeleton() {
  return (
    <div className="space-y-2">
      <div className="mx-auto h-3 w-32 rounded bg-neutral-200" />
      <div className="mx-auto h-3 w-44 rounded bg-neutral-200" />
      <div className="mt-4 grid grid-cols-3 gap-1">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-sm ${index % 4 === 0 ? "bg-[#fff3d8]" : "bg-neutral-100"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function ExcelPreviewSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-1">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className={`h-5 rounded-sm ${index % 5 === 0 ? "bg-[#fff3d8]" : "bg-neutral-100"
            }`}
        />
      ))}
    </div>
  );
}

function PriceListEmbed({
  type,
  title,
  subtitle,
  description,
  fileUrl,
  buttonText,
}: {
  type: "GoogleDocs" | "GoogleSheets";
  title: string;
  subtitle: string;
  description: string;
  fileUrl: string;
  buttonText: string;
}) {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl">
      <div className="flex flex-col gap-5 border-b border-orange-100 bg-[#fff7e8] px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
            Cloud Price List
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#8a1c12]">{title}</h2>

          <p className="mt-1 text-sm font-bold text-neutral-500">
            {subtitle}
          </p>

          <p className="mt-3 max-w-4xl leading-7 text-neutral-600">
            {description}
          </p>

          <p className="mt-2 text-sm font-bold text-neutral-500">
            文件類型：{type === "GoogleDocs" ? "Google Docs" : "Google Sheets"}
          </p>
        </div>

        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-xl bg-[#d71920] px-6 py-3 text-center font-black text-white shadow-lg transition hover:bg-[#a80f15]"
        >
          {buttonText}
        </a>
      </div>

      <div className="bg-white p-5">
        <iframe
          src={fileUrl}
          title={title}
          className="h-[850px] w-full rounded-2xl border border-neutral-200 bg-white"
          allowFullScreen
        />
      </div>
    </section>
  );
}