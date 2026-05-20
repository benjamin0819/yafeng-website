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
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>電話：26120783</p>
            <p>傳真：26120793</p>
            <p>香港元朗錦上路吳家村 61 号信箱</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-sm text-white/70">
        © 2026 Yafeng Group Development Limited. Website prototype.
      </div>
    </footer>
  );
}