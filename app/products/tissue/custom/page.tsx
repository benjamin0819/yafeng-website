import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

const customOptions = [
  {
    title: "LOGO 印刷",
    desc: "可在紙巾盒、方盒、小盒或餐巾紙上印刷公司 LOGO、宣傳口號及品牌圖案。",
  },
  {
    title: "包裝定制",
    desc: "可按品牌形象設計盒面、顏色、圖案及包裝風格，提升產品展示效果。",
  },
  {
    title: "尺寸選擇",
    desc: "提供盒裝抽紙、方盒、小盒、餐巾紙等多種尺寸選擇，實際尺寸及包裝方式可按客戶要求調整。",
  },
];

const sizeGroups = [
  {
    title: "紙巾尺寸",
    items: ["16×18cm", "18×18cm", "19×18cm", "20×18cm", "20×20cm"],
  },
  {
    title: "方盒尺寸",
    items: ["10.8×10.8×3.8cm（10–30張）", "12×12×4cm（10–30張）"],
  },
  {
    title: "小盒尺寸",
    items: ["10.9×5.9×2.3cm"],
  },
];

const galleryImages = [
  "/tissue/tissue-custom.png",
  "/tissue/custom-box-tissue/custom2.png",
  "/tissue/custom-box-tissue/custom3.png",
  "/tissue/custom-box-tissue/custom4.png",
];

export default function CustomTissuePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#fff0c2_0%,transparent_28%),radial-gradient(circle_at_85%_20%,#ffe0d0_0%,transparent_30%),linear-gradient(180deg,#fffaf0_0%,#ffffff_45%,#fff7e8_100%)] text-neutral-950">
      <Header />

      <div className="md:hidden">
        <MobileCustomTissuePage />
      </div>

      <div className="hidden md:block">
        <DesktopCustomTissuePage />
      </div>

      <Footer />
    </main>
  );
}

function MobileCustomTissuePage() {
  return (
    <div className="mx-auto max-w-md px-4 pb-10 pt-5">
      {/* MOBILE HERO */}
      <section className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-lg">
        <div className="p-5">
          <div className="text-sm font-bold text-neutral-500">
            <a href="/" className="hover:text-[#d71920]">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="/products/tissue" className="hover:text-[#d71920]">
              紙巾類
            </a>
            <span className="mx-2">›</span>
            <span className="text-[#d71920]">定制系列</span>
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-[#c28a22]">
            Custom Printing
          </p>

          <h1 className="mt-3 text-[42px] font-black leading-none text-[#d71920]">
            定制系列
          </h1>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#d71920]" />

          <p className="mt-5 text-[15px] leading-7 text-neutral-600">
            可印刷公司 LOGO、宣傳口號及相關圖案，適合餐飲、酒店、零售、
            展會及商務送禮使用，提升品牌形象與宣傳效果。
          </p>

          <div className="mt-6 grid gap-3">
            <a
              href="tel:26120783"
              className="rounded-xl bg-[#d71920] px-5 py-3 text-center text-sm font-black text-white shadow-lg"
            >
              致電查詢：26120783
            </a>

            <a
              href="#mobile-custom-details"
              className="rounded-xl border border-[#d71920] bg-white px-5 py-3 text-center text-sm font-black text-[#d71920]"
            >
              查看定制內容
            </a>
          </div>
        </div>

      </section>

      {/* MOBILE OPTIONS */}
      <section id="mobile-custom-details" className="mt-8">
        <MobileSectionTitle title="可定制內容" />

        <div className="mt-4 grid gap-3">
          {customOptions.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-[1.4rem] bg-white p-4 shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff3d8] text-lg font-black text-[#d71920]">
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg font-black text-[#d71920]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE SIZES */}
      <section className="mt-8">
        <MobileSectionTitle title="尺寸參考" />

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          以下尺寸僅供參考，實際尺寸及包裝方式可按客戶要求調整。
        </p>

        <div className="mt-4 grid gap-3">
          {sizeGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.4rem] border border-orange-100 bg-white p-4 shadow-md"
            >
              <h3 className="text-lg font-black text-[#8a1c12]">
                {group.title}
                <span className="ml-1 text-xs font-bold text-neutral-500">
                  （可按客戶要求調整）
                </span>
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl bg-[#fff7e8] px-3 py-2 text-sm font-bold text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE GALLERY */}
      <section className="mt-8">
        <MobileSectionTitle title="客戶定制案例" />

        <div className="mt-4 grid grid-cols-2 gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="flex h-36 items-center justify-center rounded-[1.25rem] bg-white p-3 shadow-md"
            >
              <img
                src={image}
                alt={`Custom tissue example ${index + 1}`}
                className="max-h-full max-w-full rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE PHONE CTA */}
      <section className="mt-8 rounded-[1.5rem] border border-[#ead9b7] bg-[#fff8ea] p-5 shadow-sm">
        <h2 className="text-xl font-black text-neutral-950">
          如需定制紙巾，歡迎致電查詢
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-600">
          請提供紙巾類型、尺寸、數量及 LOGO/設計資料，我們會協助提供建議。
        </p>

        <a
          href="tel:26120783"
          className="mt-4 block rounded-xl bg-[#d71920] px-5 py-3 text-center text-sm font-black text-white shadow-md"
        >
          立即聯絡：26120783
        </a>
      </section>
    </div>
  );
}

function DesktopCustomTissuePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-2xl">
          <div className="absolute bottom-0 right-0 h-40 w-[70%] rounded-tl-full bg-[#d71920]" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-[#f6b800]" />

          <div className="relative z-10 grid min-h-[500px] items-center gap-10 px-8 py-12 md:grid-cols-[1fr_0.9fr] lg:px-16">
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
                <span className="text-[#d71920]">定制系列</span>
              </div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c28a22]">
                Custom Printing
              </p>

              <h1 className="mt-4 text-6xl font-black leading-tight text-[#d71920]">
                定制系列
              </h1>

              <h2 className="mt-2 text-5xl font-black leading-tight">
                Custom Printing
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
                訂制紙巾可作為公司或產品的廣告媒介，適合餐飲、酒店、
                零售、展會及商務送禮使用。可印刷公司 LOGO、宣傳口號及相關圖片，
                提升品牌展示效果。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:26120783"
                  className="rounded-xl bg-[#d71920] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#a80f15]"
                >
                  致電查詢：26120783
                </a>

                <a
                  href="#details"
                  className="rounded-xl border border-[#d71920] bg-white px-7 py-4 font-black text-[#d71920] transition hover:bg-[#fff3d8]"
                >
                  查看定制內容
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[2rem] bg-white/80 p-6 shadow-xl">
                <img
                  src="/tissue/tissue-custom.png"
                  alt="Custom tissue printing"
                  className="max-h-[360px] max-w-full rounded-[1.5rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section
        id="details"
        className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c28a22]">
            Custom Options
          </p>
          <h2 className="mt-2 text-5xl font-black">定制內容</h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#d71920]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {customOptions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-orange-100 bg-white p-8 shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3d8] text-2xl font-black text-[#d71920]">
                ✓
              </div>
              <h3 className="text-2xl font-black text-[#d71920]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIZES */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c28a22]">
              Size Reference
            </p>
            <h2 className="mt-2 text-4xl font-black">
              尺寸參考
              <span className="ml-2 text-lg font-bold text-neutral-500">
                （可按客戶要求調整）
              </span>
            </h2>
            <p className="mt-4 text-neutral-600">
              以下尺寸僅供參考，實際尺寸及包裝方式可按客戶要求調整。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sizeGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] bg-[#fff7e8] p-6"
              >
                <h3 className="text-2xl font-black text-[#8a1c12]">
                  {group.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <p key={item} className="font-bold text-neutral-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c28a22]">
            Multiple Styles
          </p>
          <h2 className="mt-2 text-5xl font-black">客戶定制案例展示</h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#d71920]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl"
            >
              <img
                src={image}
                alt={`Custom tissue example ${index + 1}`}
                className="max-h-[420px] max-w-full rounded-[1.5rem] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* PHONE CTA */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[2rem] bg-[#fff3d8] p-8 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black">如需定制紙巾，請致電查詢</h2>
            <p className="mt-3 text-lg leading-8 text-neutral-600">
              請提供需要定制的紙巾類型、尺寸、數量及 LOGO/設計資料，我們會協助提供建議。
            </p>
          </div>

          <a
            href="tel:26120783"
            className="shrink-0 rounded-xl bg-[#d71920] px-8 py-4 text-center text-lg font-black text-white shadow-lg transition hover:bg-[#a80f15]"
          >
            致電：26120783
          </a>
        </div>
      </section>
    </>
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