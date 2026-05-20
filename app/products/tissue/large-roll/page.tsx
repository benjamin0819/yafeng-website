import TissueSeriesPage from "../_components/TissueSeriesPage";

const products = [
  {
    nameCn: "600904APP大卷紙",
    nameEn: "600904APP Jumbo Roll Tissue",
    image: "/tissue/large-roll-paper/large-roll-paper-600904app.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：9CM",
      "層數：4層 13.5GSM",
      "包裝：600克/卷 12卷/箱",
      "外包裝尺寸：45*45*27.5CM",
    ],
  },
  {
    nameCn: "保士潔800克大卷紙",
    nameEn: "Baoshijie 800g Jumbo Roll Tissue",
    image: "/tissue/large-roll-paper/large-roll-paper-baoshijie-800g.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：9CM",
      "層數：3層 13.5GSM",
      "包裝：800克/卷 12卷/箱",
      "外包裝尺寸：48*48*28.5CM",
    ],
  },
  {
    nameCn: "保士潔850克大卷紙",
    nameEn: "Baoshijie 850g Jumbo Roll Tissue",
    image: "/tissue/large-roll-paper/large-roll-paper-baoshijie-850g.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：9.5CM",
      "層數：3層 13.5GSM",
      "包裝：可溶水 白紙芯 850克/卷",
      "外包裝尺寸：48*48*27.5CM",
    ],
  },
  {
    nameCn: "JRT700克大卷紙",
    nameEn: "JRT 700g Jumbo Roll Tissue",
    image: "/tissue/large-roll-paper/large-roll-paper-jrt-700g.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：9.5CM",
      "層數：2層 13.5GSM",
      "包裝：700克/卷 12卷/箱",
      "外包裝尺寸：45*45*28CM",
    ],
  },
  {
    nameCn: "1300克卷裝擦手紙（中抽）",
    nameEn: "1300g Centre Pull Hand Towel Roll",
    image: "/tissue/large-roll-paper/large-roll-paper-hand-towel-roll-1300g-center-pull.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：20CM",
      "層數：單層 40GSM",
      "包裝：有廚紙 1300克/卷 12卷/箱",
      "外包裝尺寸：57*38*40.5CM",
    ],
  },
  {
    nameCn: "保士潔700克大卷紙",
    nameEn: "Baoshijie 700g Jumbo Roll Tissue",
    image: "/tissue/large-roll-paper/large-roll-paper-baoshijie-700g.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：9.5CM",
      "層數：3層 13.5GSM",
      "包裝：700克/卷 12卷/箱",
      "外包裝尺寸：46*46*27.5CM",
    ],
  },
];

export default function LargeRollPage() {
  return (
    <TissueSeriesPage
      breadcrumbName="大卷紙系列"
      titleCn="大卷紙系列"
      titleEn="Jumbo Roll Tissue"
      intro="適合商用洗手間、餐廳、酒店、工場及公共場所使用，提供多種重量、層數及尺寸選擇。"
      heroImage="/tissue/large-roll-paper/large-roll-paper-600904app.png"
      quoteProductName="大卷紙系列"
      products={products}
      details={{
        series: "大卷紙系列 / Jumbo Roll Tissue",
        specs: "600克、700克、800克、850克、1300克卷裝擦手紙等",
        material: "原生木漿紙",
        usage: "商用洗手間、餐廳、酒店、工場、公共場所",
        supply: "批量報價，按卷或按箱供應",
        custom: "可按使用場景、紙架尺寸及採購量提供建議",
      }}
    />
  );
}