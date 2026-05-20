"use client";

import { useForm, ValidationError } from "@formspree/react";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
  productName?: string;
};

export default function QuoteModal({
  open,
  onClose,
  productName = "",
}: QuoteModalProps) {
  const [state, handleSubmit] = useForm("xykvgpgl");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xl font-black text-neutral-700 hover:bg-neutral-200"
        >
          ×
        </button>

        {state.succeeded ? (
          <div className="py-10 text-center">
            <h2 className="text-3xl font-black text-[#d71920]">
              已收到您的詢價
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              感謝您的提交。我們會盡快查看您的產品需求並回覆。
            </p>

            <button
              onClick={onClose}
              className="mt-8 rounded-xl bg-[#d71920] px-7 py-3 font-black text-white hover:bg-[#a80f15]"
            >
              關閉
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c28a22]">
              Request Quote
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#d71920]">
              獲取報價
            </h2>

            <p className="mt-4 leading-8 text-neutral-600">
              請填寫以下資料，我們會根據產品類型、數量及送貨地點提供報價。
              如需定制產品，也歡迎電話聯絡我們。
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="公司名稱 / Company Name" name="company" required />
                <Field label="聯絡人 / Contact Name" name="contact_name" required />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="電話 / Phone" name="phone" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <div>
                <label className="font-black text-neutral-800">
                  感興趣產品 / Interested Products
                </label>
                <input
                  name="interested_products"
                  defaultValue={productName}
                  placeholder="例如：小卷紙系列、雅楓午餐肉、紙巾定制等"
                  className="mt-2 w-full rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-[#d71920]"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="預計數量 / Quantity" name="quantity" />
                <Field label="送貨地區 / Delivery Area" name="delivery_area" />
              </div>

              <div>
                <label className="font-black text-neutral-800">
                  備註 / Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="請寫下產品規格、數量、送貨安排、定制要求或其他備註。"
                  className="mt-2 w-full rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-[#d71920]"
                />
              </div>

              <ValidationError errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-xl bg-[#d71920] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#a80f15] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "提交中..." : "提交詢價 / Submit Enquiry"}
              </button>

              <p className="text-center text-sm leading-6 text-neutral-500">
                也可以直接電話聯絡我們：26120783
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-black text-neutral-800">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none focus:border-[#d71920]"
      />
    </div>
  );
}