import TissueSeriesPage from "../_components/TissueSeriesPage";

const products = [
  {
    nameCn: "APP161840250-2抽紙",
    nameEn: "APP161840250-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app161840250-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 16×18CM，折後 16×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：40抽/包，250包/箱",
      "裝箱規格：48×33×39CM",
    ],
  },
  {
    nameCn: "APP181850200-2抽紙",
    nameEn: "APP181850200-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app181850200-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 18×18CM，折後 18×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：50抽/包，200包/箱",
      "裝箱規格：48×38.5×38CM",
    ],
  },
  {
    nameCn: "APP161850200-2抽紙",
    nameEn: "APP161850200-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app161850200-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 16×18CM，折後 16×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：50抽/包，200包/箱",
      "裝箱規格：48×33×39CM",
    ],
  },
  {
    nameCn: "APP181860200-2抽紙",
    nameEn: "APP181860200-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app181860200-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 18×18CM，折後 18×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：60抽/包，200包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "APP161890100-2抽紙",
    nameEn: "APP161890100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app161890100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 16×18CM，折後 16×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：90抽/包，100包/箱",
      "裝箱規格：48×33×34CM",
    ],
  },
  {
    nameCn: "APP181880100-2抽紙",
    nameEn: "APP181880100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app181880100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 18×18CM，折後 18×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：80抽/包，100包/箱",
      "裝箱規格：48×37×34CM",
    ],
  },
  {
    nameCn: "APP1818100100-2抽紙",
    nameEn: "APP1818100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app1818100100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 18×18CM，折後 18×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：48×38.5×38CM",
    ],
  },
  {
    nameCn: "APP2020100100-2抽紙",
    nameEn: "APP2020100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app2020100100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 20×20CM，折後 20×10CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：52×41×38CM",
    ],
  },
  {
    nameCn: "APP191866120-3抽紙",
    nameEn: "APP191866120-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app191866120-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：66抽/包，120包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "APP1918100100-2抽紙",
    nameEn: "APP1918100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-app1918100100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：48×38.5×38CM",
    ],
  },
  {
    nameCn: "三層小方巾",
    nameEn: "3-Ply Small Square Towel",
    image: "/tissue/box-tissue/box-tissue-small-square-towel-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 10.5×18CM，折後 10.5×9CM",
      "層數：3層，13.7GSM",
      "包裝尺寸：67抽/包，200包/箱",
      "裝箱規格：55×39×38CM",
    ],
  },
  {
    nameCn: "小方巾",
    nameEn: "Small Square Towel",
    image: "/tissue/box-tissue/box-tissue-small-square-towel.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 10.5×18CM，折後 10.5×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：100抽/包，200包/箱",
      "裝箱規格：55×39×38CM",
    ],
  },
  {
    nameCn: "本色紙小方巾",
    nameEn: "Kraft Small Square Towel",
    image: "/tissue/box-tissue/box-tissue-kraft-small-square-towel.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 10.5×18CM，折後 10.5×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：100抽/包，200包/箱",
      "裝箱規格：55×39×38CM",
    ],
  },
  {
    nameCn: "本色紙1751860150-2抽紙",
    nameEn: "Kraft 1751860150-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-kraft-1751860150-2ply.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 17.5×18CM，折後 17.5×9CM",
      "層數：2層，13.7GSM",
      "包裝尺寸：60抽/包，150包/箱",
      "裝箱規格：48×38.5×38CM",
    ],
  },
  {
    nameCn: "本色紙三層小方巾",
    nameEn: "Kraft 3-Ply Small Square Towel",
    image: "/tissue/box-tissue/box-tissue-kraft-small-square-towel-3ply.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 10.5×18CM，折後 10.5×9CM",
      "層數：3層，13.7GSM",
      "包裝尺寸：67抽/包，200包/箱",
      "裝箱規格：55×39×38CM",
    ],
  },
  {
    nameCn: "本色紙17518050150-3抽紙",
    nameEn: "Kraft 17518050150-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-kraft-17518050150-3ply.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 17.5×18CM，折後 17.5×9CM",
      "層數：3層，13.7GSM",
      "包裝尺寸：50抽/包，150包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "本色紙202010080-3抽紙",
    nameEn: "Kraft 202010080-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-kraft-202010080-3ply.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 20×20CM，折後 20×10CM",
      "層數：3層，13.7GSM",
      "包裝尺寸：100抽/包，80包/箱",
      "裝箱規格：52×41×39CM",
    ],
  },
  {
    nameCn: "本色紙17518100100-2抽紙",
    nameEn: "Kraft 17518100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-kraft-17518100100-2ply.png",
    rawSpecs: [
      "原料：竹漿本色紙",
      "規格：攤開 17.5×18CM，折後 17.5×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：48×38.5×38CM",
    ],
  },
  {
    nameCn: "高級191850200-2抽紙",
    nameEn: "Premium 191850200-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191850200-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：50抽/包，200包/箱",
      "裝箱規格：48×38.5×36CM",
    ],
  },
  {
    nameCn: "高級1918100100-2抽紙",
    nameEn: "Premium 1918100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-1918100100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：48×38.5×36CM",
    ],
  },
  {
    nameCn: "高級191860200-2抽紙",
    nameEn: "Premium 191860200-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191860200-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：60抽/包，200包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "高級191880150-2抽紙",
    nameEn: "Premium 191880150-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191880150-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：80抽/包，150包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "高級191866120-3抽紙",
    nameEn: "Premium 191866120-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191866120-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：66抽/包，120包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "高級191850180-3抽紙",
    nameEn: "Premium 191850180-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191850180-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：3層，13.5GSM",
      "包裝尺寸：50抽/包，180包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "高級191810090-3抽紙",
    nameEn: "Premium 191810090-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-191810090-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×18CM，折後 19×9CM",
      "層數：3層，13.5GSM",
      "包裝尺寸：100抽/包，90包/箱",
      "裝箱規格：48×38.5×41CM",
    ],
  },
  {
    nameCn: "高級2020100100-2抽紙",
    nameEn: "Premium 2020100100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-2020100100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 20×20CM，折後 20×10CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：100抽/包，100包/箱",
      "裝箱規格：52×41×36CM",
    ],
  },
  {
    nameCn: "高級192080100-2抽紙",
    nameEn: "Premium 192080100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-192080100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×20CM，折後 19×10CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：80抽/包，100包/箱",
      "裝箱規格：52×41×30CM",
    ],
  },
  {
    nameCn: "高級192090100-2抽紙",
    nameEn: "Premium 192090100-2 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-192090100-2ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 19×20CM，折後 19×10CM",
      "層數：2層，13.5GSM",
      "包裝尺寸：90抽/包，100包/箱",
      "裝箱規格：52×41×30CM",
    ],
  },
  {
    nameCn: "140×180抽紙",
    nameEn: "140×180 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-140x180.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 14×18CM，折後 14×9CM",
      "層數：3層，13.7GSM",
      "包裝尺寸：130抽/包，8包/組，10組/件",
      "裝箱規格：52×46×28CM",
    ],
  },
  {
    nameCn: "高級202010090-3抽紙",
    nameEn: "Premium 202010090-3 Box Tissue",
    image: "/tissue/box-tissue/box-tissue-premium-202010090-3ply.png",
    rawSpecs: [
      "原料：原生木漿紙",
      "規格：攤開 20×20CM，折後 20×10CM",
      "層數：3層，13.5GSM",
      "包裝尺寸：100抽/包，90包/箱",
      "裝箱規格：52×41×39CM",
    ],
  },
];

export default function BoxTissuePage() {
  return (
    <TissueSeriesPage
      breadcrumbName="抽紙系列"
      titleCn="抽紙系列"
      titleEn="Box Tissue Series"
      intro="柔軟親膚，多種包裝選擇，適合家居、辦公室、餐廳、酒店及商用場所。"
      heroImage="/tissue/box-tissue/box-tissue-app161840250-2ply.png"
      quoteProductName="抽紙系列"
      products={products}
      details={{
        series: "抽紙系列 / Box Tissue Series",
        specs: "多種盒裝尺寸、層數及包裝選擇",
        material: "原生木漿紙",
        usage: "家居、辦公室、餐廳、酒店、公共場所",
        supply: "批量報價，按箱或按包供應",
        custom: "可提供包裝、尺寸及印刷定制建議",
      }}
    />
  );
}