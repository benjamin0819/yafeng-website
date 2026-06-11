"use client";

import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
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
  const [contactError, setContactError] = useState("");

  function submitQuote(event: SyntheticEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);

    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!phone && !email) {
      event.preventDefault();
      setContactError("請至少填寫電話或 Email 其中一項，方便我們回覆您。");
      return;
    }

    setContactError("");
    handleSubmit(event as any);
  }

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto overflow-x-hidden bg-black/55 p-2 sm:p-4">
      <div className="relative my-4 max-h-[94vh] w-full max-w-[96vw] overflow-y-auto overflow-x-hidden rounded-[1.5rem] bg-white p-5 shadow-2xl sm:max-w-3xl sm:rounded-[2rem] sm:p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote form"
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xl font-black text-neutral-700 shadow-md hover:bg-neutral-200"
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
              type="button"
              onClick={onClose}
              className="mt-8 rounded-xl bg-[#d71920] px-7 py-3 font-black text-white hover:bg-[#a80f15]"
            >
              關閉
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4 pr-12">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c28a22] sm:text-sm">
                  Request Quote
                </p>

                <h2 className="mt-3 text-4xl font-black leading-tight text-[#d71920] sm:text-5xl">
                  獲取報價
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                  請填寫以下資料，我們會根據產品類型、數量及送貨地點提供報價。
                  如需定制產品，也歡迎電話聯絡我們。
                </p>
              </div>

              <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#fff3d8] text-3xl sm:flex">
                📋
              </div>
            </div>

            <form onSubmit={submitQuote} className="mt-6 grid gap-4 sm:mt-8 sm:gap-5">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Field
                  label="公司名稱 / Company Name"
                  name="company"
                  icon="🏢"
                  required
                />

                <Field
                  label="聯絡人 / Contact Name"
                  name="contact_name"
                  icon="👤"
                  required
                />
              </div>
              {contactError && (
                <p className="-mt-2 text-sm font-bold text-[#d71920]">
                  {contactError}
                </p>
              )}

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <Field
                  label="電話 / Phone"
                  name="phone"
                  icon="☎️"
                  placeholder="電話或 Email 至少填一項"
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  icon="✉️"
                  placeholder="電話或 Email 至少填一項"
                />
              </div>

              <div>
                <label className="font-black text-neutral-800">
                  詢價產品及數量 / Products & Quantity
                </label>

                <div className="mt-2 flex items-start rounded-xl border border-orange-100 bg-white px-3 focus-within:border-[#d71920]">
                  <span className="mr-2 mt-3 text-neutral-400">📦</span>
                  <textarea
                    name="products_and_quantity"
                    rows={4}
                    defaultValue={productName ? `${productName}：` : ""}
                    placeholder={`請填寫需要報價的產品及數量，例如：
小卷紙系列 100箱
雅楓午餐肉 50箱
紙巾定制 500盒`}
                    className="w-full bg-transparent py-3 text-sm outline-none sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <Field
                  label="送貨地區 / Delivery Area"
                  name="delivery_area"
                  icon="📍"
                  placeholder="例如：香港 / 九龍"
                />
              </div>

              <div>
                <label className="font-black text-neutral-800">
                  備註 / Message
                </label>

                <div className="mt-2 flex items-start rounded-xl border border-orange-100 bg-white px-3 focus-within:border-[#d71920]">
                  <span className="mr-2 mt-3 text-neutral-400">💬</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="請寫下產品規格、數量、送貨安排、定制要求或其他備註。"
                    className="w-full bg-transparent py-3 text-sm outline-none sm:text-base"
                  />
                </div>
              </div>

              <ValidationError errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-xl bg-[#d71920] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#a80f15] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "提交中..." : "提交詢價 / Submit Enquiry"}
              </button>

              <div className="rounded-2xl bg-[#fff7e8] p-4 text-center">
                <p className="text-sm font-bold text-neutral-600">
                  也可以直接電話聯絡我們
                </p>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <a
                    href="tel:26120783"
                    className="rounded-xl bg-white px-2 py-3 text-xs font-black leading-5 text-[#8a1c12] shadow-sm transition hover:bg-[#fff3d8] sm:text-sm"
                  >
                    公司
                    <br />
                    2612 0783
                  </a>

                  <a
                    href="tel:90236020"
                    className="rounded-xl bg-white px-2 py-3 text-xs font-black leading-5 text-[#8a1c12] shadow-sm transition hover:bg-[#fff3d8] sm:text-sm"
                  >
                    孫小姐
                    <br />
                    9023 6020
                  </a>

                  <a
                    href="tel:63888290"
                    className="rounded-xl bg-white px-2 py-3 text-xs font-black leading-5 text-[#8a1c12] shadow-sm transition hover:bg-[#fff3d8] sm:text-sm"
                  >
                    吳小姐
                    <br />
                    6388 8290
                  </a>
                </div>
              </div>
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
  icon,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-black text-neutral-800">{label}</label>

      <div className="mt-2 flex items-center rounded-xl border border-orange-100 bg-white px-3 focus-within:border-[#d71920]">
        {icon && <span className="mr-2 text-neutral-400">{icon}</span>}

        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent py-3 text-sm outline-none sm:text-base"
        />
      </div>
    </div>
  );
}