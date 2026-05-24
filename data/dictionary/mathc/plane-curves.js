window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "heimenjou_no_kyokusen",
    term: "平面上の曲線",
    kana: "へいめんじょうのきょくせん",
    yomi: "heimenjou_no_kyokusen",
    group: "へ",
    type: "用語",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "座標平面上に表される直線に限らない図形．",
    description: "座標平面上に表される直線に限らない図形．",
    bodyHtml: `
      <p>
        座標平面上に表される直線に限らない図形を，平面上の曲線という．
      </p>
      <p>
        数学Cでは，放物線，楕円，双曲線などの2次曲線や，媒介変数表示，極座標による曲線の表し方を扱う．
      </p>
      <p>
        曲線を方程式で表すことで，焦点，準線，接線，対称性などを調べることができる．
      </p>
    `,
    relatedIds: ["nijikyokusen", "baisuu_hensuu_hyouji_kyokusen", "kyokuzahyou"]
  },
  {
    id: "nijikyokusen",
    term: "2次曲線",
    kana: "にじきょくせん",
    yomi: "nijikyokusen",
    group: "に",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "2次方程式で表される曲線．放物線，楕円，双曲線などがある．",
    description: "2次方程式で表される曲線．放物線，楕円，双曲線などがある．",
    bodyHtml: `
      <p>
        座標平面上で，\\(x\\)，\\(y\\)についての2次方程式で表される曲線を2次曲線という．
      </p>
      <p>
        代表的な2次曲線には，放物線，楕円，双曲線がある．
      </p>
      <p>
        2次曲線は，焦点や準線との距離の関係によって定義することもできる．
      </p>
    `,
    relatedIds: ["houbutsusen", "daen", "soukyokusen", "shouten_kyokusen", "jun sen"]
  },
  {
    id: "houbutsusen",
    term: "放物線",
    kana: "ほうぶつせん",
    yomi: "houbutsusen",
    group: "ほ",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "1つの定点と1つの定直線からの距離が等しい点全体の曲線．",
    description: "1つの定点と1つの定直線からの距離が等しい点全体の曲線．",
    bodyHtml: `
      <p>
        1つの定点と1つの定直線からの距離が等しい点全体の曲線を放物線という．
      </p>
      <p>
        この定点を焦点，定直線を準線という．
      </p>
      <p>
        たとえば，焦点が\\((p,0)\\)，準線が\\(x=-p\\)である放物線の方程式は，
      </p>
      <div class="math-block">
        \\[
        y^2=4px
        \\]
      </div>
      <p>
        である．ただし，\\(p\\ne 0\\)とする．
      </p>
      <h3>方程式の導出</h3>
      <p>
        放物線上の点を\\((x,y)\\)とする．焦点\\((p,0)\\)までの距離と，準線\\(x=-p\\)までの距離が等しいので，
      </p>
      <div class="math-block">
        \\[
        \\sqrt{(x-p)^2+y^2}=|x+p|
        \\]
      </div>
      <p>
        である．両辺を2乗すると，
      </p>
      <div class="math-block">
        \\[
        (x-p)^2+y^2=(x+p)^2
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        y^2=4px
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["shouten_kyokusen", "junsen", "nijikyokusen"]
  },
  {
    id: "daen",
    term: "楕円",
    kana: "だえん",
    yomi: "daen",
    group: "た",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "2つの定点からの距離の和が一定である点全体の曲線．",
    description: "2つの定点からの距離の和が一定である点全体の曲線．",
    bodyHtml: `
      <p>
        2つの定点からの距離の和が一定である点全体の曲線を楕円という．
      </p>
      <p>
        この2つの定点を焦点という．
      </p>
      <p>
        \\(a>b>0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1
        \\]
      </div>
      <p>
        は原点を中心とする楕円を表す．このとき，焦点は\\((c,0)\\)，\\((-c,0)\\)であり，
      </p>
      <div class="math-block">
        \\[
        c^2=a^2-b^2
        \\]
      </div>
      <p>
        を満たす．
      </p>
    `,
    relatedIds: ["shouten_kyokusen", "choushuku", "tanjiku", "nijikyokusen"]
  },
  {
    id: "soukyokusen",
    term: "双曲線",
    kana: "そうきょくせん",
    yomi: "soukyokusen",
    group: "そ",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "2つの定点からの距離の差の絶対値が一定である点全体の曲線．",
    description: "2つの定点からの距離の差の絶対値が一定である点全体の曲線．",
    bodyHtml: `
      <p>
        2つの定点からの距離の差の絶対値が一定である点全体の曲線を双曲線という．
      </p>
      <p>
        この2つの定点を焦点という．
      </p>
      <p>
        \\(a>0\\)，\\(b>0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1
        \\]
      </div>
      <p>
        は原点を中心とする双曲線を表す．このとき，焦点は\\((c,0)\\)，\\((-c,0)\\)であり，
      </p>
      <div class="math-block">
        \\[
        c^2=a^2+b^2
        \\]
      </div>
      <p>
        を満たす．
      </p>
    `,
    relatedIds: ["shouten_kyokusen", "zenkin sen", "nijikyokusen"]
  },
  {
    id: "shouten_kyokusen",
    term: "焦点（2次曲線）",
    kana: "しょうてん",
    yomi: "shouten_kyokusen",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "放物線，楕円，双曲線などを定める基準となる点．",
    description: "放物線，楕円，双曲線などを定める基準となる点．",
    bodyHtml: `
      <p>
        放物線，楕円，双曲線などの2次曲線を定める基準となる点を焦点という．
      </p>
      <p>
        放物線では，焦点と準線からの距離が等しい点全体を考える．
      </p>
      <p>
        楕円では，2つの焦点からの距離の和が一定である点全体を考える．
      </p>
      <p>
        双曲線では，2つの焦点からの距離の差の絶対値が一定である点全体を考える．
      </p>
    `,
    relatedIds: ["houbutsusen", "daen", "soukyokusen", "junsen"]
  },
  {
    id: "junsen",
    term: "準線",
    kana: "じゅんせん",
    yomi: "junsen",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "放物線などを定める基準となる直線．",
    description: "放物線などを定める基準となる直線．",
    bodyHtml: `
      <p>
        放物線などを定める基準となる直線を準線という．
      </p>
      <p>
        放物線は，焦点からの距離と準線からの距離が等しい点全体として定義される．
      </p>
      <p>
        たとえば，焦点が\\((p,0)\\)，準線が\\(x=-p\\)である放物線は，
      </p>
      <div class="math-block">
        \\[
        y^2=4px
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["houbutsusen", "shouten_kyokusen"]
  },
  {
    id: "choushuku",
    term: "長軸",
    kana: "ちょうじく",
    yomi: "choushuku",
    group: "ち",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "楕円の中心を通る軸のうち，長い方の軸．",
    description: "楕円の中心を通る軸のうち，長い方の軸．",
    bodyHtml: `
      <p>
        楕円の中心を通る軸のうち，長い方の軸を長軸という．
      </p>
      <p>
        楕円
      </p>
      <div class="math-block">
        \\[
        \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1
        \\]
      </div>
      <p>
        で\\(a>b>0\\)のとき，長軸は\\(x\\)軸上にあり，長さは\\(2a\\)である．
      </p>
    `,
    relatedIds: ["daen", "tanjiku"]
  },
  {
    id: "tanjiku",
    term: "短軸",
    kana: "たんじく",
    yomi: "tanjiku",
    group: "た",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "楕円の中心を通る軸のうち，短い方の軸．",
    description: "楕円の中心を通る軸のうち，短い方の軸．",
    bodyHtml: `
      <p>
        楕円の中心を通る軸のうち，短い方の軸を短軸という．
      </p>
      <p>
        楕円
      </p>
      <div class="math-block">
        \\[
        \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1
        \\]
      </div>
      <p>
        で\\(a>b>0\\)のとき，短軸は\\(y\\)軸上にあり，長さは\\(2b\\)である．
      </p>
    `,
    relatedIds: ["daen", "choushuku"]
  },
  {
    id: "zenkinsen",
    term: "漸近線",
    kana: "ぜんきんせん",
    yomi: "zenkinsen",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "曲線が限りなく近づいていく直線．",
    description: "曲線が限りなく近づいていく直線．",
    bodyHtml: `
      <p>
        曲線上の点が限りなく遠くへ進むとき，その曲線が限りなく近づいていく直線を漸近線という．
      </p>
      <p>
        たとえば，双曲線
      </p>
      <div class="math-block">
        \\[
        \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1
        \\]
      </div>
      <p>
        の漸近線は，
      </p>
      <div class="math-block">
        \\[
        y=\\frac{b}{a}x,\\quad y=-\\frac{b}{a}x
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["soukyokusen", "kansuu_no_kyokugen"]
  },
  {
    id: "hyouten",
    term: "標点",
    kana: "ひょうてん",
    yomi: "hyouten",
    group: "ひ",
    type: "用語",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "曲線や図形を定めるときに基準として用いる点．",
    description: "曲線や図形を定めるときに基準として用いる点．",
    bodyHtml: `
      <p>
        曲線や図形を定めるときに基準として用いる点を標点ということがある．
      </p>
      <p>
        ただし，高校数学では，放物線，楕円，双曲線については，ふつう焦点という用語を使うことが多い．
      </p>
    `,
    relatedIds: ["shouten_kyokusen"]
  },
  {
    id: "baisuu_hensuu_hyouji_kyokusen",
    term: "媒介変数表示（曲線）",
    kana: "ばいかいへんすうひょうじ",
    yomi: "baisuu_hensuu_hyouji_kyokusen",
    group: "は",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "曲線上の点の座標を，別の変数を用いて表すこと．",
    description: "曲線上の点の座標を，別の変数を用いて表すこと．",
    bodyHtml: `
      <p>
        曲線上の点の座標\\((x,y)\\)を，媒介変数\\(t\\)を用いて
      </p>
      <div class="math-block">
        \\[
        x=f(t),\\quad y=g(t)
        \\]
      </div>
      <p>
        のように表すことを，曲線の媒介変数表示という．
      </p>
      <p>
        たとえば，半径\\(1\\)の円は，
      </p>
      <div class="math-block">
        \\[
        x=\cos t,\quad y=\sin t
        \\]
      </div>
      <p>
        と表せる．
      </p>
    `,
    relatedIds: ["baisuu_hensuu", "baisuu_hensuu_hyouji", "kyokusen"]
  },
  {
    id: "saikuroido",
    term: "サイクロイド",
    kana: "さいくろいど",
    yomi: "saikuroido",
    group: "さ",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "円が直線上をすべらずに転がるとき，円周上の点が描く曲線．",
    description: "円が直線上をすべらずに転がるとき，円周上の点が描く曲線．",
    bodyHtml: `
      <p>
        円が直線上をすべらずに転がるとき，円周上の1点が描く曲線をサイクロイドという．
      </p>
      <p>
        半径\\(a\\)の円によるサイクロイドは，媒介変数\\(t\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        x=a(t-\sin t),\quad y=a(1-\cos t)
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["baisuu_hensuu_hyouji_kyokusen", "baisuu_hensuu"]
  },
  {
    id: "kyokuzahyou",
    term: "極座標",
    kana: "きょくざひょう",
    yomi: "kyokuzahyou",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "点の位置を，原点からの距離と角で表す座標．",
    description: "点の位置を，原点からの距離と角で表す座標．",
    bodyHtml: `
      <p>
        平面上の点の位置を，原点からの距離\\(r\\)と，基準となる半直線からの角\\(\\theta\\)で表す座標を極座標という．
      </p>
      <p>
        極座標では，点を
      </p>
      <div class="math-block">
        \\[
        (r,\theta)
        \\]
      </div>
      <p>
        のように表す．
      </p>
      <p>
        直交座標\\((x,y)\\)との関係は，
      </p>
      <div class="math-block">
        \\[
        x=r\cos\theta,\quad y=r\sin\theta
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kyoku", "shisen", "kyokuhouteishiki", "chokkouzahyou"]
  },
  {
    id: "kyoku",
    term: "極",
    kana: "きょく",
    yomi: "kyoku",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "極座標における基準点．ふつう直交座標の原点に対応する．",
    description: "極座標における基準点．ふつう直交座標の原点に対応する．",
    bodyHtml: `
      <p>
        極座標における基準点を極という．
      </p>
      <p>
        ふつう，極は直交座標における原点に対応する．
      </p>
      <p>
        極座標\\((r,\theta)\\)では，\\(r\\)は極から点までの距離を表す．
      </p>
    `,
    relatedIds: ["kyokuzahyou", "shisen"]
  },
  {
    id: "shisen",
    term: "始線",
    kana: "しせん",
    yomi: "shisen",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "極座標で角を測る基準となる半直線．",
    description: "極座標で角を測る基準となる半直線．",
    bodyHtml: `
      <p>
        極座標で角\\(\\theta\\)を測る基準となる半直線を始線という．
      </p>
      <p>
        ふつう，直交座標の\\(x\\)軸の正の向きを始線にとる．
      </p>
    `,
    relatedIds: ["kyokuzahyou", "kyoku", "ippankaku"]
  },
  {
    id: "kyokuhouteishiki",
    term: "極方程式",
    kana: "きょくほうていしき",
    yomi: "kyokuhouteishiki",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "極座標を用いて曲線を表す方程式．",
    description: "極座標を用いて曲線を表す方程式．",
    bodyHtml: `
      <p>
        極座標を用いて曲線を表す方程式を極方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        r=2
        \\]
      </div>
      <p>
        は，極を中心とする半径\\(2\\)の円を表す極方程式である．
      </p>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        r=2\cos\theta
        \\]
      </div>
      <p>
        のように，\\(r\\)を\\(\\theta\\)の式として表すこともある．
      </p>
    `,
    relatedIds: ["kyokuzahyou", "kyoku", "shisen"]
  },
  {
    id: "chokkouzahyou",
    term: "直交座標",
    kana: "ちょっこうざひょう",
    yomi: "chokkouzahyou",
    group: "ち",
    type: "定義",
    subject: "数学C",
    unit: "平面上の曲線",
    unitIds: ["mathC_plane_curves"],
    shortDescription: "互いに垂直な座標軸を用いて点の位置を表す座標．",
    description: "互いに垂直な座標軸を用いて点の位置を表す座標．",
    bodyHtml: `
      <p>
        互いに垂直な座標軸を用いて点の位置を表す座標を直交座標という．
      </p>
      <p>
        平面上の直交座標では，点を\\((x,y)\\)の形で表す．
      </p>
      <p>
        極座標\\((r,\theta)\\)と直交座標\\((x,y)\\)は，
      </p>
      <div class="math-block">
        \\[
        x=r\cos\theta,\quad y=r\sin\theta
        \\]
      </div>
      <p>
        によって結びつく．
      </p>
    `,
    relatedIds: ["kyokuzahyou", "zahyouheimen"]
  }
);
