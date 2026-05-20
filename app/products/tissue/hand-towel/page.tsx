import TissueSeriesPage from "../_components/TissueSeriesPage";

const products = [
  {
    nameCn: "保士潔A051擦手紙",
    nameEn: "Baoshijie A051 Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-a051.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：22CM*21CM",
      "層數：單層 38GSM",
      "包裝：150張/包 20包/箱",
      "外包裝尺寸：34*33.5*45CM",
    ],
  },
  {
    nameCn: "保士潔A002擦手紙",
    nameEn: "Baoshijie A002 Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-a002.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：22CM*21CM",
      "層數：單層 38GSM",
      "包裝：200張/包 20包/箱",
      "外包裝尺寸：35*34*44CM",
    ],
  },
  {
    nameCn: "保士潔A081擦手紙",
    nameEn: "Baoshijie A081 Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-a081.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：22CM*21CM",
      "層數：單層 40GSM",
      "包裝：180張/包 20包/箱",
      "外包裝尺寸：35*34*45CM",
    ],
  },
  {
    nameCn: "保士潔半切A002擦手紙",
    nameEn: "Baoshijie Half-Cut A002 Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-halfcut-a002.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：21CM*10.8CM",
      "層數：單層 38GSM",
      "包裝：200張/包 40包/箱",
      "外包裝尺寸：35*34*44CM",
    ],
  },
  {
    nameCn: "保士潔全封大尺寸200抽擦手紙",
    nameEn: "Baoshijie Large Sealed 200 Sheets Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-large-sealed-200sheets.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：22.5CM*22CM",
      "層數：單層 42GSM",
      "包裝：200張/包 20包/箱",
      "外包裝尺寸：40*33*45.5CM",
    ],
  },
  {
    nameCn: "保士潔230CSZ擦手紙",
    nameEn: "Baoshijie 230CSZ Hand Towel",
    image: "/tissue/hand-towel/hand-towel-baoshijie-230csz.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：23CM*22.5CM",
      "層數：單層 40GSM",
      "包裝：200張/包 20包/箱",
      "外包裝尺寸：40*33*47.5CM",
    ],
  },
];

export default function HandTowelPage() {
  return (
    <TissueSeriesPage
      breadcrumbName="擦手紙系列"
      titleCn="擦手紙系列"
      titleEn="Hand Towel Series"
      intro="適合洗手間、廚房、餐飲及商用清潔場景，提供多種尺寸、抽數及包裝選擇。"
      heroImage="/tissue/hand-towel/hand-towel-baoshijie-a051.png"
      quoteProductName="擦手紙系列"
      products={products}
      details={{
        series: "擦手紙系列 / Hand Towel Series",
        specs: "A051、A002、A081、半切A002、全封大尺寸200抽、230CSZ",
        material: "原生木漿紙",
        usage: "洗手間、廚房、餐廳、酒店、辦公室及公共場所",
        supply: "批量報價，按包或按箱供應",
        custom: "可按紙架尺寸、使用場景及採購量提供建議",
      }}
    />
  );
}