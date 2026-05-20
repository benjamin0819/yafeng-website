import TissueSeriesPage from "../_components/TissueSeriesPage";

const smallRollProducts = [
  {
    nameCn: "四層40克小卷紙",
    nameEn: "4-Ply 40g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：40克卷 / 24卷包 / 8組件；外包裝尺寸：80*45*17.5CM",
    image: "/tissue/small-roll-paper/small-roll-paper-40g-4ply.png",
  },
  {
    nameCn: "四層70克小卷紙",
    nameEn: "4-Ply 70g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：70克卷 / 21卷組 / 8組件；外包裝尺寸：80*51*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-70g-4ply.png",
  },
  {
    nameCn: "四層50克小卷紙",
    nameEn: "4-Ply 50g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：50克卷 / 24卷組 / 8組件；外包裝尺寸：80*52*19CM",
    image: "/tissue/small-roll-paper/small-roll-paper-50g-4ply.png",
  },
  {
    nameCn: "四層40克小卷紙 (L)",
    nameEn: "4-Ply 40g Small Roll Tissue (L)",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：80克卷 / 21卷組 / 8組件；外包裝尺寸：80*51*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-40g-4ply-alt.png",
  },
  {
    nameCn: "四層60克小卷紙",
    nameEn: "4-Ply 60g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：60克卷 / 24卷組 / 8組件；外包裝尺寸：80*55*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-60g-4ply.png",
  },
  {
    nameCn: "10卷10提80克小卷紙",
    nameEn: "10 Rolls x 10 Packs 80g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：80克卷 / 10卷組 / 10組件；外包裝尺寸：50*38*31CM",
    image: "/tissue/small-roll-paper/small-roll-paper-80g-10roll-10pack.png",
  },
  {
    nameCn: "四層100克小卷紙",
    nameEn: "4-Ply 100g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：1000克卷 / 10卷組 / 8組件；外包裝尺寸：80*43*17.5CM",
    image: "/tissue/small-roll-paper/small-roll-paper-100g-4ply.png",
  },
  {
    nameCn: "獨立包裝130克小卷紙",
    nameEn: "Individually Wrapped 130g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：透明包裝 / 130克卷 / 10卷組 / 8組件；外包裝尺寸：80*48*20CM",
    image: "/tissue/small-roll-paper/small-roll-paper-130g-individual-pack.png",
  },
  {
    nameCn: "獨立包裝10卷10提80克小卷紙",
    nameEn: "Individually Wrapped 10 Rolls x 10 Packs 80g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：透明包裝 / 80克卷 / 10卷組 / 10組件；外包裝尺寸：50*38*31CM",
    image: "/tissue/small-roll-paper/small-roll-paper-80g-10roll-10pack-individual.png",
  },
  {
    nameCn: "萊子款80克小卷紙",
    nameEn: "Laizi 80g Small Roll Tissue",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：萊子包裝 / 80克卷 / 10卷組 / 8組件；外包裝尺寸：50*38*31CM",
    image: "/tissue/small-roll-paper/small-roll-paper-laizi-80g.png",
  },
  {
    nameCn: "ELEMENT80小卷紙",
    nameEn: "ELEMENT 80g Small Roll Tissue",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：ELEMENT包裝 / 80克卷 / 10卷組 / 8組件；外包裝尺寸：50*38*31CM",
    image: "/tissue/small-roll-paper/small-roll-paper-element-80g.png",
  },
  {
    nameCn: "獨立包裝100克小卷紙",
    nameEn: "Individually Wrapped 100g Small Roll Tissue",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：透明包裝 / 100克卷 / 10卷組 / 10組件；外包裝尺寸：80*43*17.5CM",
    image: "/tissue/small-roll-paper/small-roll-paper-100g-individual-pack.png",
  },
  {
    nameCn: "Hotel80100-3（范例）",
    nameEn: "Hotel 80100-3 Sample",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：hotel包裝 / 80克卷 / 10卷組 / 8組件；外包裝尺寸：50*38*31CM",
    image: "/tissue/small-roll-paper/small-roll-paper-hotel-80100-3-sample.png",
  },
  {
    nameCn: "本色紙100克小卷紙",
    nameEn: "Natural 100g Small Roll Tissue",
    spec: "10CM*11.5CM / 3/4層 / 13.7GSM",
    material: "竹漿本色紙",
    size: "包裝：100克卷 / 10卷組 / 8組件；外包裝尺寸：80*43*17.5CM",
    image: "/tissue/small-roll-paper/small-roll-paper-kraft-100g.png",
  },
  {
    nameCn: "本色紙獨立包裝130克小卷紙",
    nameEn: "Natural Individually Wrapped 130g Small Roll Tissue",
    spec: "10CM*11.5CM / 3/4層 / 13.7GSM",
    material: "竹漿本色紙",
    size: "包裝：透明包裝 / 130克卷 / 10卷組 / 8組件；外包裝尺寸：80*50*20CM",
    image: "/tissue/small-roll-paper/small-roll-paper-kraft-130g-individual-pack.png",
  },
  {
    nameCn: "本色紙50克小卷紙",
    nameEn: "Natural 50g Small Roll Tissue",
    spec: "10CM*11.5CM / 3/4層 / 13.7GSM",
    material: "竹漿本色紙",
    size: "包裝：50克卷 / 24卷組 / 8組件；外包裝尺寸：80*52*20CM",
    image: "/tissue/small-roll-paper/small-roll-paper-kraft-50g.png",
  },
  {
    nameCn: "本色紙獨立包裝170克小卷紙",
    nameEn: "Natural Individually Wrapped 170g Small Roll Tissue",
    spec: "10CM*11.5CM / 3/4層 / 13.7GSM",
    material: "竹漿本色紙",
    size: "包裝：透明包裝 / 170克卷 / 10卷組 / 8組件；外包裝尺寸：80*54*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-kraft-170g-individual-pack.png",
  },
  {
    nameCn: "本色紙80克小卷紙",
    nameEn: "Natural 80g Small Roll Tissue",
    spec: "10CM*11.5CM / 3/4層 / 13.7GSM",
    material: "竹漿本色紙",
    size: "包裝：80克卷 / 21卷組 / 8組件；外包裝尺寸：80*53*22CM",
    image: "/tissue/small-roll-paper/small-roll-paper-kraft-80g.png",
  },
  {
    nameCn: "伊貝芝（新款）14080-4",
    nameEn: "Ibeichi 14080-4",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：伊貝芝包裝 / 130克卷 / 10卷組 / 8組件；外包裝尺寸：80*48*20CM",
    image: "/tissue/small-roll-paper/small-roll-paper-yibeizhi-new-14080-4.png",
  },
  {
    nameCn: "綠ROSE14080-3",
    nameEn: "Green ROSE 14080-3",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：綠ROSE包裝 / 140克卷 / 10卷組 / 8組件；外包裝尺寸：80*50*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-green-rose-14080-3.png",
  },
  {
    nameCn: "伊貝芝（新款）14080BZX-4",
    nameEn: "Ibeichi 14080BZX-4",
    spec: "10CM*11.5CM / 4層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：白紙芯 伊貝芝包裝 / 130克卷 / 10卷組 / 8組件；外包裝尺寸：80*48*20CM",
    image: "/tissue/small-roll-paper/small-roll-paper-yibeizhi-new-14080bzx-4.png",
  },
  {
    nameCn: "IBEZ14080-3",
    nameEn: "IBEZ 14080-3",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙（可做四層有芯）",
    size: "包裝：IBEZ包裝 / 140克卷 / 10卷組 / 8組件；外包裝尺寸：80*50*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-ibez-14080-3.png",
  },
  {
    nameCn: "LovingDays16080-3（范例）",
    nameEn: "LovingDays 16080-3 Sample",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：LovingDays包裝 / 140克卷 / 10卷組 / 8組件；外包裝尺寸：80*51*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-lovingdays-16080-3-sample.png",
  },
  {
    nameCn: "玫紅色ROSE14080-3",
    nameEn: "Rose Pink ROSE 14080-3",
    spec: "10CM*11.5CM / 3層 / 13.7GSM",
    material: "原生木漿紙",
    size: "包裝：玫紅色包裝 / 140克卷 / 10卷組 / 8組件；外包裝尺寸：80*51*21CM",
    image: "/tissue/small-roll-paper/small-roll-paper-rose-pink-14080-3.png",
  },
];

const products = smallRollProducts.map((product) => ({
  nameCn: product.nameCn,
  nameEn: product.nameEn,
  image: product.image,
  spec: product.spec,
  material: product.material,
  usage: product.size,
}));

export default function SmallRollPage() {
  return (
    <TissueSeriesPage
      breadcrumbName="小卷紙系列"
      titleCn="小卷紙系列"
      titleEn="Small Roll Tissue"
      intro="適用於家居、餐飲、酒店、辦公室及公共場所。柔軟親膚、衛生便捷、經濟實惠，滿足日常及商用需求。"
      heroImage="/tissue/small-roll-paper/small-roll-paper-40g-4ply.png"
      quoteProductName="小卷紙系列"
      products={products}
      details={{
        series: "小卷紙系列 / Small Roll Tissue",
        specs: "40g、50g、60g、70g、80g、100g、130g、140g、170g 等",
        material: "原生木漿紙 / 竹漿本色紙",
        usage: "家居、餐飲、酒店、辦公室、商場、公共場所",
        supply: "批量報價，按包或按箱供應",
        custom: "可按需求提供包裝、規格及採購建議",
      }}
    />
  );
}
