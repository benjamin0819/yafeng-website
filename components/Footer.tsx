export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#d71920] to-[#8a1c12] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/yafeng-logo.png"
              alt="Yafeng logo"
              className="h-16 w-16 object-contain"
            />

            <div>
              <p className="text-2xl font-black">雅楓集團發展有限公司</p>
              <p className="text-sm">YAFENG GROUP DEVELOPMENT LIMITED</p>
            </div>
          </a>

          <p className="mt-5 max-w-md leading-7 text-white/80">
            您的餐飲用品供應合作伙伴。Quality products. Reliable supply.
            Custom solutions.
          </p>
        </div>

        <div>
          <p className="font-black">產品中心</p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <a href="/products/yafeng" className="block hover:text-white">
              雅楓自營產品
            </a>
            <a href="/products/tissue" className="block hover:text-white">
              紙巾類
            </a>
            <a href="/price-list" className="block hover:text-white">
              報價單
            </a>
          </div>
        </div>

        <div>
          <p className="font-black">聯絡我們</p>

          <div className="mt-4">
            <p className="text-sm font-bold text-white/80">聯絡電話</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="tel:26120783"
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-[#d71920]"
              >
                公司 2612 0783
              </a>

              <a
                href="tel:90236020"
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-[#d71920]"
              >
                孫小姐 9023 6020
              </a>

              <a
                href="tel:63888290"
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-[#d71920]"
              >
                吳小姐 6388 8290
              </a>
            </div>
          </div>

          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p>傳真：2612 0793</p>
            <p>香港元朗錦上路吳家村 61 号信箱</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-sm text-white/70">
        © 2026 Yafeng Group Development Limited.
      </div>
    </footer>
  );
}