window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "bibun_kanou",
    term: "微分可能",
    kana: "びぶんかのう",
    yomi: "bibun_kanou",
    group: "ひ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "その点で微分係数が存在すること．",
    description: "その点で微分係数が存在すること．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，\\(x=a\\)における極限
      </p>
      <div class="math-block">
        \\[
        \\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}
        \\]
      </div>
      <p>
        が存在するとき，\\(f(x)\\)は\\(x=a\\)で微分可能であるという．
      </p>
      <p>
        この極限値を，\\(x=a\\)における微分係数といい，\\(f^{\\prime}(a)\\)で表す．
      </p>
      <p>
        関数がある区間の各点で微分可能であるとき，その関数はその区間で微分可能であるという．
      </p>
    `,
    relatedIds: ["bibun_keisuu", "doukansuu", "renzoku", "kansuu_no_kyokugen"]
  },
  {
    id: "bibun_keisuu_math3",
    term: "微分係数",
    kana: "びぶんけいすう",
    yomi: "bibun_keisuu_math3",
    group: "ひ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "関数のある点における瞬間の変化率．グラフでは接線の傾きにあたる．",
    description: "関数のある点における瞬間の変化率．グラフでは接線の傾きにあたる．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)が\\(x=a\\)で微分可能であるとき，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(a)=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}
        \\]
      </div>
      <p>
        を，\\(x=a\\)における微分係数という．
      </p>
      <p>
        微分係数は，\\(x=a\\)における瞬間の変化率を表す．また，グラフ\\(y=f(x)\\)上の点\\((a,f(a))\\)における接線の傾きでもある．
      </p>
    `,
    relatedIds: ["bibun_kanou", "doukansuu_math3", "sessensu_math3"]
  },
  {
    id: "doukansuu_math3",
    term: "導関数",
    kana: "どうかんすう",
    yomi: "doukansuu_math3",
    group: "と",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "各\\(x\\)における微分係数を対応させる関数．",
    description: "各\\(x\\)における微分係数を対応させる関数．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，各\\(x\\)における微分係数を対応させる関数を導関数という．
      </p>
      <p>
        導関数は，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}
        \\]
      </div>
      <p>
        で定義される．
      </p>
      <p>
        導関数を用いると，関数の増減，極値，グラフの凹凸，接線の方程式などを調べることができる．
      </p>
    `,
    relatedIds: ["bibun_keisuu_math3", "bibun_kanou", "daini_jidoukansuu", "sessensu_math3"]
  },
  {
    id: "sekibun_suru_math3",
    term: "微分する",
    kana: "びぶんする",
    yomi: "bibun_suru_math3",
    group: "ひ",
    type: "操作",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "関数から導関数を求めること．",
    description: "関数から導関数を求めること．",
    bodyHtml: `
      <p>
        関数から導関数を求めることを微分するという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        f(x)=\\sin x
        \\]
      </div>
      <p>
        を微分すると，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(x)=\\cos x
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["doukansuu_math3", "bibun_keisuu_math3"]
  },
  {
    id: "n_kai_bibun",
    term: "第n次導関数",
    kana: "だいえぬじどうかんすう",
    yomi: "n_kai_bibun",
    group: "た",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "導関数をさらにくり返し微分して得られる関数．",
    description: "導関数をさらにくり返し微分して得られる関数．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)をくり返し微分して得られる関数を，高次導関数という．特に，\\(n\\)回微分して得られる関数を第\\(n\\)次導関数という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        f^{(n)}(x)
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        第\\(1\\)次導関数は\\(f^{\\prime}(x)\\)，第\\(2\\)次導関数は\\(f^{\\prime\\prime}(x)\\)である．
      </p>
    `,
    relatedIds: ["doukansuu_math3", "daini_jidoukansuu", "kouji_doukansuu"]
  },
  {
    id: "daini_jidoukansuu",
    term: "第2次導関数",
    kana: "だいにじどうかんすう",
    yomi: "daini_jidoukansuu",
    group: "た",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "導関数をさらに微分して得られる関数．",
    description: "導関数をさらに微分して得られる関数．",
    bodyHtml: `
      <p>
        導関数\\(f^{\\prime}(x)\\)をさらに微分して得られる関数を，第2次導関数という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime\\prime}(x)
        \\]
      </div>
      <p>
        または
      </p>
      <div class="math-block">
        \\[
        f^{(2)}(x)
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        第2次導関数は，グラフの凹凸や変曲点を調べるときに用いられる．
      </p>
    `,
    relatedIds: ["doukansuu_math3", "n_kai_bibun", "outotsu", "henkyokuten"]
  },
  {
    id: "kouji_doukansuu",
    term: "高次導関数",
    kana: "こうじどうかんすう",
    yomi: "kouji_doukansuu",
    group: "こ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "関数を2回以上くり返し微分して得られる導関数．",
    description: "関数を2回以上くり返し微分して得られる導関数．",
    bodyHtml: `
      <p>
        関数を2回以上くり返し微分して得られる導関数を高次導関数という．
      </p>
      <p>
        第2次導関数\\(f^{\\prime\\prime}(x)\\)，第3次導関数\\(f^{(3)}(x)\\)などが高次導関数である．
      </p>
    `,
    relatedIds: ["n_kai_bibun", "daini_jidoukansuu"]
  },
  {
    id: "bibunhou",
    term: "微分法",
    kana: "びぶんほう",
    yomi: "bibunhou",
    group: "ひ",
    type: "用語",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "導関数を求めたり，導関数を用いて関数の性質を調べたりする方法．",
    description: "導関数を求めたり，導関数を用いて関数の性質を調べたりする方法．",
    bodyHtml: `
      <p>
        導関数を求めたり，導関数を用いて関数の性質を調べたりする方法を微分法という．
      </p>
      <p>
        数学IIIでは，三角関数，指数関数，対数関数，合成関数，逆関数，媒介変数表示された関数，陰関数などを微分する．
      </p>
    `,
    relatedIds: ["doukansuu_math3", "bibun_kanou", "gousei_kansuu_no_bibun", "gyakukansuu_no_bibun"]
  },
  {
    id: "seki_no_bibunhou",
    term: "積の微分法",
    kana: "せきのびぶんほう",
    yomi: "seki_no_bibunhou",
    group: "せ",
    type: "公式",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "2つの関数の積を微分する公式．",
    description: "2つの関数の積を微分する公式．",
    bodyHtml: `
      <p>
        2つの関数\\(f(x)\\)，\\(g(x)\\)が微分可能であるとき，
      </p>
      <div class="math-block">
        \\[
        \\{f(x)g(x)\\}^{\\prime}=f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)
        \\]
      </div>
      <p>
        が成り立つ．これを積の微分法という．
      </p>
      <p>
        積全体を一度に微分するのではなく，「前を微分して後ろを残す」項と「前を残して後ろを微分する」項の和になる．
      </p>
    `,
    relatedIds: ["bibunhou", "shou_no_bibunhou", "gousei_kansuu_no_bibun"]
  },
  {
    id: "shou_no_bibunhou",
    term: "商の微分法",
    kana: "しょうのびぶんほう",
    yomi: "shou_no_bibunhou",
    group: "し",
    type: "公式",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "2つの関数の商を微分する公式．",
    description: "2つの関数の商を微分する公式．",
    bodyHtml: `
      <p>
        2つの関数\\(f(x)\\)，\\(g(x)\\)が微分可能で，\\(g(x)\\ne 0\\)であるとき，
      </p>
      <div class="math-block">
        \\[
        \\left\\{\\frac{f(x)}{g(x)}\\right\\}^{\\prime}
        =
        \\frac{f^{\\prime}(x)g(x)-f(x)g^{\\prime}(x)}{\\{g(x)\\}^2}
        \\]
      </div>
      <p>
        が成り立つ．これを商の微分法という．
      </p>
    `,
    relatedIds: ["bibunhou", "seki_no_bibunhou"]
  },
  {
    id: "gousei_kansuu",
    term: "合成関数",
    kana: "ごうせいかんすう",
    yomi: "gousei_kansuu",
    group: "こ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "ある関数の出力を，さらに別の関数に入れてできる関数．",
    description: "ある関数の出力を，さらに別の関数に入れてできる関数．",
    bodyHtml: `
      <p>
        ある関数の出力を，さらに別の関数に入れてできる関数を合成関数という．
      </p>
      <p>
        関数\\(y=f(u)\\)，\\(u=g(x)\\)があるとき，
      </p>
      <div class="math-block">
        \\[
        y=f(g(x))
        \\]
      </div>
      <p>
        は，\\(f\\)と\\(g\\)の合成関数である．
      </p>
      <p>
        たとえば，\\(y=\\sin(x^2)\\)は，\\(u=x^2\\)，\\(y=\\sin u\\)の合成関数である．
      </p>
    `,
    relatedIds: ["gousei_kansuu_no_bibun", "kansuu"]
  },
  {
    id: "gousei_kansuu_no_bibun",
    term: "合成関数の微分法",
    kana: "ごうせいかんすうのびぶんほう",
    yomi: "gousei_kansuu_no_bibun",
    group: "こ",
    type: "公式",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "合成関数を外側から内側へ順に微分する公式．",
    description: "合成関数を外側から内側へ順に微分する公式．",
    bodyHtml: `
      <p>
        \\(y=f(u)\\)，\\(u=g(x)\\)が微分可能であるとき，合成関数\\(y=f(g(x))\\)の導関数は，
      </p>
      <div class="math-block">
        \\[
        \\frac{dy}{dx}=\\frac{dy}{du}\\frac{du}{dx}
        \\]
      </div>
      <p>
        で求められる．これを合成関数の微分法という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y=\\sin(x^2)
        \\]
      </div>
      <p>
        では，\\(u=x^2\\)とおくと\\(y=\\sin u\\)であるから，
      </p>
      <div class="math-block">
        \\[
        \\frac{dy}{dx}=\\cos u\\cdot 2x=2x\\cos(x^2)
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["gousei_kansuu", "bibunhou"]
  },
  {
    id: "gyakukansuu_no_bibun",
    term: "逆関数の微分法",
    kana: "ぎゃくかんすうのびぶんほう",
    yomi: "gyakukansuu_no_bibun",
    group: "き",
    type: "公式",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "逆関数の導関数を，もとの関数の導関数を用いて求める公式．",
    description: "逆関数の導関数を，もとの関数の導関数を用いて求める公式．",
    bodyHtml: `
      <p>
        関数\\(y=f(x)\\)が逆関数をもち，\\(f^{\\prime}(x)\\ne 0\\)であるとする．このとき，逆関数\\(x=f^{-1}(y)\\)について，
      </p>
      <div class="math-block">
        \\[
        \\frac{dx}{dy}=\\frac{1}{\\frac{dy}{dx}}
        \\]
      </div>
      <p>
        が成り立つ．これを逆関数の微分法という．
      </p>
      <p>
        逆関数のグラフは，もとの関数のグラフを直線\\(y=x\\)に関して対称移動したものであるため，接線の傾きは互いに逆数の関係になる．
      </p>
    `,
    relatedIds: ["gyakukansuu", "bibunhou", "gousei_kansuu_no_bibun"]
  },
  {
    id: "taisuubibunhou",
    term: "対数微分法",
    kana: "たいすうびぶんほう",
    yomi: "taisuubibunhou",
    group: "た",
    type: "方法",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "両辺の対数をとってから微分する方法．",
    description: "両辺の対数をとってから微分する方法．",
    bodyHtml: `
      <p>
        正の関数\\(y=f(x)\\)について，両辺の対数をとってから微分する方法を対数微分法という．
      </p>
      <p>
        積，商，累乗が複雑に組み合わされた関数や，\\(y=x^x\\)のように底と指数の両方に変数を含む関数の微分で有効である．
      </p>
      <p>
        たとえば\\(y=x^x\\)について，\\(x>0\\)で両辺の対数をとると，
      </p>
      <div class="math-block">
        \\[
        \\log y=x\\log x
        \\]
      </div>
      <p>
        である．両辺を\\(x\\)で微分すると，
      </p>
      <div class="math-block">
        \\[
        \\frac{y^{\\prime}}{y}=\\log x+1
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        y^{\\prime}=x^x(\\log x+1)
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["taisuu", "bibunhou", "gousei_kansuu_no_bibun"]
  },
  {
    id: "inkansuu",
    term: "陰関数",
    kana: "いんかんすう",
    yomi: "inkansuu",
    group: "い",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "\\(F(x,y)=0\\)のように，\\(x\\)と\\(y\\)の関係式によって表された関数．",
    description: "\\(F(x,y)=0\\)のように，\\(x\\)と\\(y\\)の関係式によって表された関数．",
    bodyHtml: `
      <p>
        \\(F(x,y)=0\\)のように，\\(x\\)と\\(y\\)の関係式によって表された関数を陰関数という．
      </p>
      <p>
        たとえば，\\(x^2+y^2=1\\)は，\\(y\\)を\\(x\\)の式として明示していないが，\\(x\\)と\\(y\\)の関係を表している．
      </p>
      <p>
        陰関数を微分するときは，\\(y\\)を\\(x\\)の関数と考えて，両辺を\\(x\\)で微分する．
      </p>
    `,
    relatedIds: ["inkansuu_no_bibun", "bikaibun_houteishiki"]
  },
  {
    id: "inkansuu_no_bibun",
    term: "陰関数の微分法",
    kana: "いんかんすうのびぶんほう",
    yomi: "inkansuu_no_bibun",
    group: "い",
    type: "方法",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "\\(y\\)を\\(x\\)の関数とみなして，関係式の両辺を微分する方法．",
    description: "\\(y\\)を\\(x\\)の関数とみなして，関係式の両辺を微分する方法．",
    bodyHtml: `
      <p>
        陰関数\\(F(x,y)=0\\)において，\\(y\\)を\\(x\\)の関数とみなし，両辺を\\(x\\)で微分する方法を陰関数の微分法という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=1
        \\]
      </div>
      <p>
        の両辺を\\(x\\)で微分すると，
      </p>
      <div class="math-block">
        \\[
        2x+2y\\frac{dy}{dx}=0
        \\]
      </div>
      <p>
        であるから，
      </p>
      <div class="math-block">
        \\[
        \\frac{dy}{dx}=-\\frac{x}{y}
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["inkansuu", "gousei_kansuu_no_bibun"]
  },
  {
    id: "baisuu_hensuu",
    term: "媒介変数",
    kana: "ばいかいへんすう",
    yomi: "baisuu_hensuu",
    group: "は",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "別の変数を通して，曲線上の点の座標を表すときに使う変数．",
    description: "別の変数を通して，曲線上の点の座標を表すときに使う変数．",
    bodyHtml: `
      <p>
        曲線上の点の座標\\((x,y)\\)を，別の変数\\(t\\)を用いて
      </p>
      <div class="math-block">
        \\[
        x=f(t),\\quad y=g(t)
        \\]
      </div>
      <p>
        のように表すとき，\\(t\\)を媒介変数という．
      </p>
      <p>
        媒介変数を用いると，円やサイクロイドなどの曲線を自然に表せることがある．
      </p>
    `,
    relatedIds: ["baisuu_hensuu_hyouji", "baisuu_hensuu_no_bibun"]
  },
  {
    id: "baisuu_hensuu_hyouji",
    term: "媒介変数表示",
    kana: "ばいかいへんすうひょうじ",
    yomi: "baisuu_hensuu_hyouji",
    group: "は",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "曲線上の点の座標を，媒介変数を用いて表すこと．",
    description: "曲線上の点の座標を，媒介変数を用いて表すこと．",
    bodyHtml: `
      <p>
        曲線上の点の座標を，媒介変数\\(t\\)を用いて
      </p>
      <div class="math-block">
        \\[
        x=f(t),\\quad y=g(t)
        \\]
      </div>
      <p>
        のように表すことを媒介変数表示という．
      </p>
      <p>
        たとえば，半径\\(1\\)の円は，
      </p>
      <div class="math-block">
        \\[
        x=\\cos t,\\quad y=\\sin t
        \\]
      </div>
      <p>
        と媒介変数表示できる．
      </p>
    `,
    relatedIds: ["baisuu_hensuu", "baisuu_hensuu_no_bibun"]
  },
  {
    id: "baisuu_hensuu_no_bibun",
    term: "媒介変数表示の微分法",
    kana: "ばいかいへんすうひょうじのびぶんほう",
    yomi: "baisuu_hensuu_no_bibun",
    group: "は",
    type: "公式",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "媒介変数表示された曲線の接線の傾きを求める公式．",
    description: "媒介変数表示された曲線の接線の傾きを求める公式．",
    bodyHtml: `
      <p>
        曲線が媒介変数\\(t\\)を用いて
      </p>
      <div class="math-block">
        \\[
        x=f(t),\\quad y=g(t)
        \\]
      </div>
      <p>
        と表され，\\(\\frac{dx}{dt}\\ne 0\\)であるとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{dy}{dx}=\\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        これは，\\(x\\)と\\(y\\)がともに\\(t\\)の関数であることを用いて，\\(t\\)を通して\\(y\\)の\\(x\\)に対する変化率を考える公式である．
      </p>
    `,
    relatedIds: ["baisuu_hensuu", "baisuu_hensuu_hyouji", "sessensu_math3"]
  },
  {
    id: "sessensu_math3",
    term: "接線",
    kana: "せっせん",
    yomi: "sessensu_math3",
    group: "せ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "曲線上のある点で，その曲線に接する直線．微分係数が傾きになる．",
    description: "曲線上のある点で，その曲線に接する直線．微分係数が傾きになる．",
    bodyHtml: `
      <p>
        曲線上のある点で，その曲線に接する直線を接線という．
      </p>
      <p>
        関数\\(y=f(x)\\)が\\(x=a\\)で微分可能であるとき，点\\((a,f(a))\\)における接線の傾きは\\(f^{\\prime}(a)\\)である．したがって，接線の方程式は，
      </p>
      <div class="math-block">
        \\[
        y-f(a)=f^{\\prime}(a)(x-a)
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        接するという言葉は状況によって意味の表し方が変わるが，微分法では，接点における極限的な傾きによって接線を定める．
      </p>
    `,
    relatedIds: ["sessuru", "setten", "bibun_keisuu_math3", "housen"]
  },
  {
    id: "housen",
    term: "法線",
    kana: "ほうせん",
    yomi: "housen",
    group: "ほ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "曲線上の点で，接線に垂直な直線．",
    description: "曲線上の点で，接線に垂直な直線．",
    bodyHtml: `
      <p>
        曲線上の点で，その点における接線に垂直な直線を法線という．
      </p>
      <p>
        関数\\(y=f(x)\\)の点\\((a,f(a))\\)における接線の傾きが\\(f^{\\prime}(a)\\)であり，\\(f^{\\prime}(a)\\ne 0\\)なら，法線の傾きは
      </p>
      <div class="math-block">
        \\[
        -\\frac{1}{f^{\\prime}(a)}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["sessensu_math3", "suichoku"]
  },
  {
    id: "outotsu",
    term: "凹凸",
    kana: "おうとつ",
    yomi: "outotsu",
    group: "お",
    type: "用語",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "グラフが上に凸か下に凸かという曲がり方．",
    description: "グラフが上に凸か下に凸かという曲がり方．",
    bodyHtml: `
      <p>
        グラフが上に凸か下に凸かという曲がり方を，グラフの凹凸という．
      </p>
      <p>
        関数\\(f(x)\\)について，ある区間で\\(f^{\\prime\\prime}(x)>0\\)なら，グラフは下に凸である．また，\\(f^{\\prime\\prime}(x)<0\\)なら，グラフは上に凸である．
      </p>
      <p>
        凹凸を調べることで，グラフの概形をより詳しく描ける．
      </p>
    `,
    relatedIds: ["daini_jidoukansuu", "uenitotsu", "shitanitotsu", "henkyokuten"]
  },
  {
    id: "uenitotsu",
    term: "上に凸",
    kana: "うえにとつ",
    yomi: "uenitotsu",
    group: "う",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "グラフが上側にふくらんでいること．",
    description: "グラフが上側にふくらんでいること．",
    bodyHtml: `
      <p>
        グラフが上側にふくらんでいるとき，そのグラフは上に凸であるという．
      </p>
      <p>
        関数\\(f(x)\\)について，ある区間で
      </p>
      <div class="math-block">
        \\[
        f^{\\prime\\prime}(x)<0
        \\]
      </div>
      <p>
        なら，その区間でグラフは上に凸である．
      </p>
    `,
    relatedIds: ["outotsu", "shitanitotsu", "daini_jidoukansuu"]
  },
  {
    id: "shitanitotsu",
    term: "下に凸",
    kana: "したにとつ",
    yomi: "shitanitotsu",
    group: "し",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "グラフが下側にふくらんでいること．",
    description: "グラフが下側にふくらんでいること．",
    bodyHtml: `
      <p>
        グラフが下側にふくらんでいるとき，そのグラフは下に凸であるという．
      </p>
      <p>
        関数\\(f(x)\\)について，ある区間で
      </p>
      <div class="math-block">
        \\[
        f^{\\prime\\prime}(x)>0
        \\]
      </div>
      <p>
        なら，その区間でグラフは下に凸である．
      </p>
    `,
    relatedIds: ["outotsu", "uenitotsu", "daini_jidoukansuu"]
  },
  {
    id: "henkyokuten",
    term: "変曲点",
    kana: "へんきょくてん",
    yomi: "henkyokuten",
    group: "へ",
    type: "定義",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "グラフの凹凸が変わる点．",
    description: "グラフの凹凸が変わる点．",
    bodyHtml: `
      <p>
        グラフの凹凸が変わる点を変曲点という．
      </p>
      <p>
        関数\\(f(x)\\)について，\\(x=a\\)の前後で\\(f^{\\prime\\prime}(x)\\)の符号が変わるとき，点\\((a,f(a))\\)は変曲点である．
      </p>
      <p>
        ただし，\\(f^{\\prime\\prime}(a)=0\\)であることだけでは，必ずしも変曲点であるとは限らない．前後で凹凸が変わるかを確認する必要がある．
      </p>
    `,
    relatedIds: ["outotsu", "daini_jidoukansuu", "uenitotsu", "shitanitotsu"]
  },
  {
    id: "saidai_saisho_math3",
    term: "最大・最小",
    kana: "さいだいさいしょう",
    yomi: "saidai_saisho_math3",
    group: "さ",
    type: "用語",
    subject: "数学III",
    unit: "微分法",
    unitIds: ["math3_differentiation"],
    shortDescription: "定義域全体で関数の値が最も大きいこと，または最も小さいこと．",
    description: "定義域全体で関数の値が最も大きいこと，または最も小さいこと．",
    bodyHtml: `
      <p>
        関数の定義域全体で，関数の値が最も大きいことを最大，最も小さいことを最小という．
      </p>
      <p>
        微分法では，導関数の符号を調べて増減表を作り，端点や極値を比較することで最大値・最小値を求める．
      </p>
      <p>
        極大値が最大値であるとは限らず，極小値が最小値であるとも限らない．最大・最小は定義域全体で比較して決める．
      </p>
    `,
    relatedIds: ["kyokuchi", "zougenhyou", "doukansuu_math3"]
  }
);
