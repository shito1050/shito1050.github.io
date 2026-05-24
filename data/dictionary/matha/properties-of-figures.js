window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "sankakkei_no_goshin",
    term: "三角形の五心",
    kana: "さんかくけいのごしん",
    yomi: "sankakkei_no_goshin",
    group: "さ",
    type: "用語",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形に関係して定まる，外心・内心・重心・垂心・傍心の総称．",
    description: "三角形に関係して定まる，外心・内心・重心・垂心・傍心の総称．",
    bodyHtml: `
      <p>
        三角形に関係して定まる代表的な点として，外心，内心，重心，垂心，傍心がある．これらをまとめて三角形の五心ということがある．
      </p>
      <ul>
        <li>外心：3辺の垂直二等分線の交点．</li>
        <li>内心：3つの内角の二等分線の交点．</li>
        <li>重心：3本の中線の交点．</li>
        <li>垂心：3本の高さの交点．</li>
        <li>傍心：1つの内角の二等分線と，残り2つの外角の二等分線の交点．</li>
      </ul>
      <p>
        高校数学では，特に外心，内心，重心をよく扱う．
      </p>
    `,
    relatedIds: ["gaishin", "naishin", "juushin", "suishin", "boushin"]
  },
  {
    id: "gaishin",
    term: "外心",
    kana: "がいしん",
    yomi: "gaishin",
    group: "か",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の3辺の垂直二等分線の交点．",
    description: "三角形の3辺の垂直二等分線の交点．",
    bodyHtml: `
      <p>
        三角形の3辺の垂直二等分線の交点を外心という．
      </p>
      <p>
        外心は，三角形の3つの頂点から等しい距離にある点である．したがって，外心を中心として，三角形の3つの頂点を通る円をかくことができる．この円を外接円という．
      </p>
      <h3>外心が3つの頂点から等距離にある理由</h3>
      <p>
        線分\\(\\mathrm{AB}\\)の垂直二等分線上の点は，\\(\\mathrm{A}\\)と\\(\\mathrm{B}\\)から等しい距離にある．同様に，線分\\(\\mathrm{BC}\\)の垂直二等分線上の点は，\\(\\mathrm{B}\\)と\\(\\mathrm{C}\\)から等しい距離にある．
      </p>
      <p>
        したがって，2本の垂直二等分線の交点を\\(\\mathrm{O}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{OA}=\\mathrm{OB}
        \\]
      </div>
      <p>
        かつ
      </p>
      <div class="math-block">
        \\[
        \\mathrm{OB}=\\mathrm{OC}
        \\]
      </div>
      <p>
        である．よって，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{OA}=\\mathrm{OB}=\\mathrm{OC}
        \\]
      </div>
      <p>
        となる．つまり，\\(\\mathrm{O}\\)は3つの頂点から等しい距離にある．
      </p>
    `,
    relatedIds: ["sui_choku_nitou_bunsen", "gaisetsuen", "sankakkei_no_goshin"]
  },
  {
    id: "naishin",
    term: "内心",
    kana: "ないしん",
    yomi: "naishin",
    group: "な",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の3つの内角の二等分線の交点．",
    description: "三角形の3つの内角の二等分線の交点．",
    bodyHtml: `
      <p>
        三角形の3つの内角の二等分線の交点を内心という．
      </p>
      <p>
        内心は，三角形の3辺から等しい距離にある点である．したがって，内心を中心として，三角形の3辺に接する円をかくことができる．この円を内接円という．
      </p>
      <h3>内心が3辺から等距離にある理由</h3>
      <p>
        角の二等分線上の点は，その角をつくる2辺から等しい距離にある．三角形\\(\\mathrm{ABC}\\)において，\\(\\angle\\mathrm{A}\\)の二等分線上の点は，辺\\(\\mathrm{AB}\\)と辺\\(\\mathrm{AC}\\)から等しい距離にある．また，\\(\\angle\\mathrm{B}\\)の二等分線上の点は，辺\\(\\mathrm{BA}\\)と辺\\(\\mathrm{BC}\\)から等しい距離にある．
      </p>
      <p>
        したがって，2本の角の二等分線の交点は，3辺から等しい距離にある．この点が内心である．
      </p>
    `,
    relatedIds: ["kaku_no_nitou_bunsen", "naisetsuen", "sankakkei_no_goshin"]
  },
  {
    id: "juushin",
    term: "重心",
    kana: "じゅうしん",
    yomi: "juushin",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の3本の中線の交点．",
    description: "三角形の3本の中線の交点．",
    bodyHtml: `
      <p>
        三角形の3本の中線の交点を重心という．
      </p>
      <p>
        重心は，それぞれの中線を頂点側から\\(2:1\\)に内分する．
      </p>
      <p>
        たとえば，三角形\\(\\mathrm{ABC}\\)で，辺\\(\\mathrm{BC}\\)の中点を\\(\\mathrm{M}\\)，重心を\\(\\mathrm{G}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AG}:\\mathrm{GM}=2:1
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>座標による説明</h3>
      <p>
        点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)，\\(\\mathrm{C}(x_3,y_3)\\)の三角形の重心\\(\\mathrm{G}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{G}\\left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)
        \\]
      </div>
      <p>
        で表される．これは，各座標の平均をとった点である．
      </p>
    `,
    relatedIds: ["chuusen", "sankakkei_no_goshin"]
  },
  {
    id: "suishin",
    term: "垂心",
    kana: "すいしん",
    yomi: "suishin",
    group: "す",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の3本の高さの交点．",
    description: "三角形の3本の高さの交点．",
    bodyHtml: `
      <p>
        三角形の3本の高さの交点を垂心という．
      </p>
      <p>
        高さとは，頂点からその対辺，または対辺の延長に下ろした垂線のことである．
      </p>
      <p>
        鋭角三角形では垂心は三角形の内部にあり，直角三角形では直角の頂点が垂心になる．鈍角三角形では垂心は三角形の外部にある．
      </p>
    `,
    relatedIds: ["takasa", "sankakkei_no_goshin"]
  },
  {
    id: "boushin",
    term: "傍心",
    kana: "ぼうしん",
    yomi: "boushin",
    group: "ほ",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の1つの内角の二等分線と，残り2つの外角の二等分線の交点．",
    description: "三角形の1つの内角の二等分線と，残り2つの外角の二等分線の交点．",
    bodyHtml: `
      <p>
        三角形の1つの内角の二等分線と，残り2つの外角の二等分線の交点を傍心という．
      </p>
      <p>
        傍心は，三角形の1辺と他の2辺の延長線に接する円の中心である．この円を傍接円という．
      </p>
      <p>
        三角形には，3つの傍心がある．
      </p>
    `,
    relatedIds: ["sankakkei_no_goshin", "kaku_no_nitou_bunsen"]
  },
  {
    id: "sui_choku_nitou_bunsen",
    term: "垂直二等分線",
    kana: "すいちょくにとうぶんせん",
    yomi: "sui_choku_nitou_bunsen",
    group: "す",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "線分の中点を通り，その線分に垂直な直線．",
    description: "線分の中点を通り，その線分に垂直な直線．",
    bodyHtml: `
      <p>
        線分の中点を通り，その線分に垂直な直線を垂直二等分線という．
      </p>
      <p>
        線分\\(\\mathrm{AB}\\)の垂直二等分線上の点\\(\\mathrm{P}\\)については，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{PA}=\\mathrm{PB}
        \\]
      </div>
      <p>
        が成り立つ．逆に，\\(\\mathrm{PA}=\\mathrm{PB}\\)を満たす点\\(\\mathrm{P}\\)は，線分\\(\\mathrm{AB}\\)の垂直二等分線上にある．
      </p>
      <h3>証明</h3>
      <p>
        線分\\(\\mathrm{AB}\\)の中点を\\(\\mathrm{M}\\)とし，\\(\\mathrm{P}\\)を垂直二等分線上の点とする．このとき，\\(\\mathrm{AM}=\\mathrm{BM}\\)，\\(\\angle\\mathrm{PMA}=\\angle\\mathrm{PMB}=90^\\circ\\)，また\\(\\mathrm{PM}\\)は共通である．
      </p>
      <p>
        よって，直角三角形\\(\\mathrm{PMA}\\)と\\(\\mathrm{PMB}\\)は合同である．したがって，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{PA}=\\mathrm{PB}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["gaishin", "goudou"]
  },
  {
    id: "kaku_no_nitou_bunsen",
    term: "角の二等分線",
    kana: "かくのにとうぶんせん",
    yomi: "kaku_no_nitou_bunsen",
    group: "か",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "角を等しい2つの角に分ける半直線．",
    description: "角を等しい2つの角に分ける半直線．",
    bodyHtml: `
      <p>
        角を等しい2つの角に分ける半直線を，角の二等分線という．
      </p>
      <p>
        角の二等分線上の点は，その角をつくる2辺から等しい距離にある．逆に，角の内部にあり，2辺から等しい距離にある点は，角の二等分線上にある．
      </p>
      <h3>角の二等分線と辺の比</h3>
      <p>
        三角形\\(\\mathrm{ABC}\\)で，\\(\\angle\\mathrm{A}\\)の二等分線が辺\\(\\mathrm{BC}\\)と交わる点を\\(\\mathrm{D}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{BD}:\\mathrm{DC}=\\mathrm{AB}:\\mathrm{AC}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["naishin", "boushin"]
  },
  {
    id: "chuusen",
    term: "中線",
    kana: "ちゅうせん",
    yomi: "chuusen",
    group: "ち",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の頂点と，その対辺の中点を結ぶ線分．",
    description: "三角形の頂点と，その対辺の中点を結ぶ線分．",
    bodyHtml: `
      <p>
        三角形の頂点と，その対辺の中点を結ぶ線分を中線という．
      </p>
      <p>
        三角形には3本の中線があり，その3本は1点で交わる．その交点が重心である．
      </p>
    `,
    relatedIds: ["juushin"]
  },
  {
    id: "takasa",
    term: "高さ",
    kana: "たかさ",
    yomi: "takasa",
    group: "た",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "頂点から対辺，または対辺の延長に下ろした垂線の長さ．",
    description: "頂点から対辺，または対辺の延長に下ろした垂線の長さ．",
    bodyHtml: `
      <p>
        三角形や平行四辺形などで，底辺に対して垂直に測った長さを高さという．
      </p>
      <p>
        三角形では，頂点から対辺，または対辺の延長に下ろした垂線の長さが高さである．
      </p>
      <p>
        三角形の面積は，底辺の長さを\\(a\\)，高さを\\(h\\)とすると，
      </p>
      <div class="math-block">
        \\[
        S=\\frac{1}{2}ah
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["suishin", "menseki"]
  },
  {
    id: "goudou",
    term: "合同",
    kana: "ごうどう",
    yomi: "goudou",
    group: "こ",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "重ね合わせるとぴったり一致する図形の関係．",
    description: "重ね合わせるとぴったり一致する図形の関係．",
    bodyHtml: `
      <p>
        2つの図形が，移動や回転，裏返しによってぴったり重なるとき，その2つの図形は合同であるという．
      </p>
      <p>
        合同な図形では，対応する辺の長さや角の大きさが等しい．
      </p>
      <p>
        三角形の合同条件には，3組の辺がそれぞれ等しい，2組の辺とその間の角がそれぞれ等しい，1組の辺とその両端の角がそれぞれ等しい，などがある．
      </p>
    `,
    relatedIds: ["souzhi"]
  },
  {
    id: "souzhi",
    term: "相似",
    kana: "そうじ",
    yomi: "souzhi",
    group: "そ",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "形が同じで，大きさだけが異なる図形の関係．",
    description: "形が同じで，大きさだけが異なる図形の関係．",
    bodyHtml: `
      <p>
        2つの図形の形が同じで，大きさだけが異なるとき，その2つの図形は相似であるという．
      </p>
      <p>
        相似な図形では，対応する角の大きさは等しく，対応する辺の長さの比はすべて等しい．
      </p>
      <p>
        三角形の相似条件には，3組の辺の比がすべて等しい，2組の辺の比とその間の角がそれぞれ等しい，2組の角がそれぞれ等しい，などがある．
      </p>
    `,
    relatedIds: ["souzihi", "goudou"]
  },
  {
    id: "ceva_no_teiri",
    term: "チェバの定理",
    kana: "ちぇばのていり",
    yomi: "ceva_no_teiri",
    group: "ち",
    type: "定理",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形の3本の線分が1点で交わるための比の条件．",
    description: "三角形の3本の線分が1点で交わるための比の条件．",
    bodyHtml: `
      <p>
        三角形\\(\\mathrm{ABC}\\)において，点\\(\\mathrm{D}\\)，\\(\\mathrm{E}\\)，\\(\\mathrm{F}\\)をそれぞれ辺\\(\\mathrm{BC}\\)，\\(\\mathrm{CA}\\)，\\(\\mathrm{AB}\\)上の点とする．このとき，直線\\(\\mathrm{AD}\\)，\\(\\mathrm{BE}\\)，\\(\\mathrm{CF}\\)が1点で交わるための条件は，
      </p>
      <div class="math-block">
        \\[
        \\frac{\\mathrm{BD}}{\\mathrm{DC}}\\cdot
        \\frac{\\mathrm{CE}}{\\mathrm{EA}}\\cdot
        \\frac{\\mathrm{AF}}{\\mathrm{FB}}=1
        \\]
      </div>
      <p>
        である．これをチェバの定理という．
      </p>
      <p>
        三角形の中線や角の二等分線などが1点で交わることを示すときに使うことがある．
      </p>
    `,
    relatedIds: ["menelaus_no_teiri", "juushin", "chuusen"]
  },
  {
    id: "menelaus_no_teiri",
    term: "メネラウスの定理",
    kana: "めねらうすのていり",
    yomi: "menelaus_no_teiri",
    group: "め",
    type: "定理",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "三角形と1本の直線がつくる比の関係を表す定理．",
    description: "三角形と1本の直線がつくる比の関係を表す定理．",
    bodyHtml: `
      <p>
        三角形\\(\\mathrm{ABC}\\)において，直線が辺\\(\\mathrm{BC}\\)，\\(\\mathrm{CA}\\)，\\(\\mathrm{AB}\\)，またはその延長とそれぞれ点\\(\\mathrm{D}\\)，\\(\\mathrm{E}\\)，\\(\\mathrm{F}\\)で交わるとする．このとき，点\\(\\mathrm{D}\\)，\\(\\mathrm{E}\\)，\\(\\mathrm{F}\\)が一直線上にあるための条件は，
      </p>
      <div class="math-block">
        \\[
        \\frac{\\mathrm{BD}}{\\mathrm{DC}}\\cdot
        \\frac{\\mathrm{CE}}{\\mathrm{EA}}\\cdot
        \\frac{\\mathrm{AF}}{\\mathrm{FB}}=1
        \\]
      </div>
      <p>
        である．これをメネラウスの定理という．
      </p>
      <p>
        比を用いて，点が一直線上にあることや，線分の長さの比を求めるときに使う．
      </p>
    `,
    relatedIds: ["ceva_no_teiri"]
  },
  {
    id: "enshuukaku",
    term: "円周角",
    kana: "えんしゅうかく",
    yomi: "enshuukaku",
    group: "え",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "円周上の点を頂点とし，2辺が円と交わる角．",
    description: "円周上の点を頂点とし，2辺が円と交わる角．",
    bodyHtml: `
      <p>
        円周上の点を頂点とし，その2辺が円と交わる角を円周角という．
      </p>
      <p>
        円周角は，円の弧に対して定まる角である．同じ弧に対する円周角は等しい．
      </p>
    `,
    relatedIds: ["enshuukaku_no_teiri", "chushinkaku"]
  },
  {
    id: "chushinkaku",
    term: "中心角",
    kana: "ちゅうしんかく",
    yomi: "chushinkaku",
    group: "ち",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "円の中心を頂点とし，2辺が円周上の点を通る角．",
    description: "円の中心を頂点とし，2辺が円周上の点を通る角．",
    bodyHtml: `
      <p>
        円の中心を頂点とし，2辺が円周上の点を通る角を中心角という．
      </p>
      <p>
        同じ弧に対する中心角の大きさは，円周角の大きさの2倍である．
      </p>
    `,
    relatedIds: ["enshuukaku", "enshuukaku_no_teiri"]
  },
  {
    id: "enshuukaku_no_teiri",
    term: "円周角の定理",
    kana: "えんしゅうかくのていり",
    yomi: "enshuukaku_no_teiri",
    group: "え",
    type: "定理",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "同じ弧に対する円周角は等しく，中心角は円周角の2倍であるという定理．",
    description: "同じ弧に対する円周角は等しく，中心角は円周角の2倍であるという定理．",
    bodyHtml: `
      <p>
        1つの円において，同じ弧に対する円周角は等しい．また，同じ弧に対する中心角は，円周角の2倍である．これを円周角の定理という．
      </p>
      <p>
        たとえば，円周上の点\\(\\mathrm{A}\\)，\\(\\mathrm{B}\\)，\\(\\mathrm{P}\\)，\\(\\mathrm{Q}\\)について，\\(\\angle\\mathrm{APB}\\)と\\(\\angle\\mathrm{AQB}\\)が同じ弧\\(\\mathrm{AB}\\)に対する円周角なら，
      </p>
      <div class="math-block">
        \\[
        \\angle\\mathrm{APB}=\\angle\\mathrm{AQB}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        円周角の定理は，円に関する角度を求めるときの基本になる．
      </p>
    `,
    relatedIds: ["enshuukaku", "chushinkaku", "setugen_teiri"]
  },
  {
    id: "setugen_teiri",
    term: "接弦定理",
    kana: "せつげんていり",
    yomi: "setugen_teiri",
    group: "せ",
    type: "定理",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "円の接線と弦がつくる角が，その弦に対する円周角に等しいという定理．",
    description: "円の接線と弦がつくる角が，その弦に対する円周角に等しいという定理．",
    bodyHtml: `
      <p>
        円の接線と，接点を通る弦がつくる角は，その弦に対する円周角に等しい．これを接弦定理という．
      </p>
      <p>
        たとえば，円の点\\(\\mathrm{A}\\)における接線と弦\\(\\mathrm{AB}\\)がつくる角は，弦\\(\\mathrm{AB}\\)に対する円周角に等しい．
      </p>
      <p>
        接弦定理は，接線を含む円の角度問題でよく用いる．
      </p>
    `,
    relatedIds: ["enshuukaku_no_teiri", "sessuru", "setten"]
  },
  {
    id: "houbeki_no_teiri",
    term: "方べきの定理",
    kana: "ほうべきのていり",
    yomi: "houbeki_no_teiri",
    group: "ほ",
    type: "定理",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "円と点から引いた直線がつくる線分の積が一定になるという定理．",
    description: "円と点から引いた直線がつくる線分の積が一定になるという定理．",
    bodyHtml: `
      <p>
        円と点\\(\\mathrm{P}\\)について，点\\(\\mathrm{P}\\)を通る直線が円と2点\\(\\mathrm{A}\\)，\\(\\mathrm{B}\\)で交わるとき，積\\(\\mathrm{PA}\\cdot\\mathrm{PB}\\)は，直線の取り方によらず一定である．これを方べきの定理という．
      </p>
      <p>
        また，点\\(\\mathrm{P}\\)から円に接線\\(\\mathrm{PT}\\)を引けるとき，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{PT}^2=\\mathrm{PA}\\cdot\\mathrm{PB}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        方べきの定理は，円に関する線分の長さを求めるときに有効である．
      </p>
    `,
    relatedIds: ["enshuukaku_no_teiri", "sessuru", "setten"]
  },
  {
    id: "seimentai",
    term: "正多面体",
    kana: "せいためんたい",
    yomi: "seimentai",
    group: "せ",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "すべての面が合同な正多角形で，各頂点に集まる面の数が同じである凸多面体．",
    description: "すべての面が合同な正多角形で，各頂点に集まる面の数が同じである凸多面体．",
    bodyHtml: `
      <p>
        すべての面が合同な正多角形で，各頂点に集まる面の数が同じである凸多面体を正多面体という．
      </p>
      <p>
        正多面体は，正四面体，正六面体，正八面体，正十二面体，正二十面体の5種類だけである．
      </p>
      <p>
        これは，各頂点のまわりに集まる正多角形の角の和が\\(360^\\circ\\)未満でなければならないことから分かる．
      </p>
    `,
    relatedIds: ["tamentai"]
  },
  {
    id: "tamentai",
    term: "多面体",
    kana: "ためんたい",
    yomi: "tamentai",
    group: "た",
    type: "定義",
    subject: "数学A",
    unit: "図形の性質",
    unitIds: ["mathA_geometry"],
    shortDescription: "多角形で囲まれた立体．",
    description: "多角形で囲まれた立体．",
    bodyHtml: `
      <p>
        多角形で囲まれた立体を多面体という．
      </p>
      <p>
        多面体では，面，辺，頂点などを考える．
      </p>
      <p>
        代表的な多面体として，角柱，角錐，正多面体などがある．
      </p>
    `,
    relatedIds: ["seimentai"]
  }
);
