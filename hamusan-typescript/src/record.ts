export {};
// レコードは二つの方引数を受け取るもの。
// 「キー集合 K のすべてのキーに、値型 V を割り当てたオブジェクト型」を作るユーティリティ。

type Prefectures = 'tokyo' | 'chiba' | 'Totori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  chiba: { kanji_name: '千葉', confirmed_cases: 222 },
  Totori: { kanji_name: '鳥取', confirmed_cases: 10 },
};
