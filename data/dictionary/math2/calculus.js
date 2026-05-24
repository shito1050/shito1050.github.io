window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "heikin_henka_ritsu",
    term: "平均変化率",
    kana: "へいきんへんかりつ",
    yomi: "heikin_henka_ritsu",
    group: "へ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数の値が，ある区間で平均してどれだけ変化したかを表す割合．",
    description: "関数の値が，ある区間で平均してどれだけ変化したかを表す割合．",
    bodyHtml: `
      <p>
        関数\\(y=f(x)\\)について，\\(x\\)が\\(a\\)から\\(b\\)まで変化するとき，関数の値の変化量は\\(f(b)-f(a)\\)である．この変化量を\\(x\\)の変化量\\(b-a\\)で割った値
      </p>
      <div class="math-block">
        \\[
        \\frac{f(b)-f(a)}{b-a}
        \\]
      </div>
      <p>
        を，\\(a\\)から\\(b\\)までの平均変化率という．
      </p>
      <p>
        平均変化率は，グラフ上では2点\\((a,f(a))\\)，\\((b,f(b))\\)を結ぶ直線の傾きを表す．
      </p>
    `,
    relatedIds: ["henka_ritsu", "bibun_keisuu", "katamuki"]
  },
  {
    id: "henka_ritsu",
    term: "変化率",
    kana: "へんかりつ",
    yomi: "henka_ritsu",
    group: "へ",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "一方の量が変化するとき，他方の量がどの割合で変化するかを表す値．",
    description: "一方の量が変化するとき，他方の量がどの割合で変化するかを表す値．",
    bodyHtml: `
      <p>
        一方の量が変化するとき，それにともなって他方の量がどの割合で変化するかを表す値を変化率という．
      </p>
      <p>
        関数\\(y=f(x)\\)では，\\(x\\)の変化に対して\\(y\\)がどれだけ変化するかを考える．
      </p>
      <p>
        区間全体で平均して考えるものが平均変化率であり，ある1点での瞬間的な変化の割合を表すものが微分係数である．
      </p>
    `,
    relatedIds: ["heikin_henka_ritsu", "bibun_keisuu"]
  },
  {
    id: "bibun_keisuu",
    term: "微分係数",
    kana: "びぶんけいすう",
    yomi: "bibun_keisuu",
    group: "ひ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数のグラフ上のある点における接線の傾き．",
    description: "関数のグラフ上のある点における接線の傾き．",
    bodyHtml: `
      <p>
        関数\\(y=f(x)\\)について，\\(x=a\\)における瞬間的な変化率を，\\(x=a\\)における微分係数という．
      </p>
      <p>
        微分係数は，平均変化率の極限として
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(a)=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}
        \\]
      </div>
      <p>
        で定義される．
      </p>
      <p>
        グラフ上では，\\(f^{\\prime}(a)\\)は点\\((a,f(a))\\)における接線の傾きを表す．
      </p>
    `,
    relatedIds: ["doukansuu", "sessensu", "heikin_henka_ritsu"]
  },
  {
    id: "bibun_suru",
    term: "微分する",
    kana: "びぶんする",
    yomi: "bibun_suru",
    group: "ひ",
    type: "操作",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
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
        f(x)=x^3
        \\]
      </div>
      <p>
        を微分すると，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(x)=3x^2
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        微分によって，関数の増減や接線の傾きなどを調べることができる．
      </p>
    `,
    relatedIds: ["doukansuu", "bibun_keisuu", "sessensu"]
  },
  {
    id: "doukansuu",
    term: "導関数",
    kana: "どうかんすう",
    yomi: "doukansuu",
    group: "と",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "各\\(x\\)における微分係数を対応させる関数．",
    description: "各\\(x\\)における微分係数を対応させる関数．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，各\\(x\\)における微分係数を対応させる関数を導関数という．
      </p>
      <p>
        導関数は，ふつう
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(x)
        \\]
      </div>
      <p>
        と表す．定義によれば，
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        導関数を調べることで，もとの関数の増減や極値を調べることができる．
      </p>
    `,
    relatedIds: ["bibun_keisuu", "bibun_suru", "zougensei", "kyokuchi"]
  },
  {
    id: "sessensu",
    term: "接線",
    kana: "せっせん",
    yomi: "sessensu",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus", "math3_differentiation"],
    shortDescription: "曲線上のある点で，その曲線に接する直線．",
    description: "曲線上のある点で，その曲線に接する直線．",
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
        2次関数では，接線の条件を判別式が\\(0\\)であることとして調べることもできる．微分では，接点における傾きを用いて接線を考える．
      </p>
    `,
    relatedIds: ["sessuru", "setten", "bibun_keisuu", "doukansuu"]
  },
  {
    id: "setten_sessen",
    term: "接点（接線）",
    kana: "せってん",
    yomi: "setten_sessen",
    group: "せ",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus", "math3_differentiation"],
    shortDescription: "接線が曲線に接している点．",
    description: "接線が曲線に接している点．",
    bodyHtml: `
      <p>
        接線が曲線に接している点を接点という．
      </p>
      <p>
        関数\\(y=f(x)\\)のグラフ上の点\\((a,f(a))\\)における接線を考えるとき，その接点は\\((a,f(a))\\)である．
      </p>
      <p>
        接線の方程式
      </p>
      <div class="math-block">
        \\[
        y-f(a)=f^{\\prime}(a)(x-a)
        \\]
      </div>
      <p>
        において，\\((a,f(a))\\)が接点である．
      </p>
    `,
    relatedIds: ["sessensu", "setten", "bibun_keisuu"]
  },
  {
    id: "zougensei",
    term: "増減",
    kana: "ぞうげん",
    yomi: "zougensei",
    group: "そ",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数の値が増えるか減るかという性質．",
    description: "関数の値が増えるか減るかという性質．",
    bodyHtml: `
      <p>
        関数の値が，\\(x\\)の増加にともなって増えるか減るかという性質を増減という．
      </p>
      <p>
        導関数を用いると，関数の増減を調べることができる．一般に，ある区間で
      </p>
      <ul>
        <li>\\(f^{\\prime}(x)>0\\)なら，\\(f(x)\\)は増加する．</li>
        <li>\\(f^{\\prime}(x)<0\\)なら，\\(f(x)\\)は減少する．</li>
      </ul>
      <p>
        増減を整理した表を増減表という．
      </p>
    `,
    relatedIds: ["doukansuu", "zougengyou", "zougenseki", "zougenhyou"]
  },
  {
    id: "zougengyou",
    term: "増加",
    kana: "ぞうか",
    yomi: "zougengyou",
    group: "そ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "\\(x\\)が大きくなると，関数の値も大きくなること．",
    description: "\\(x\\)が大きくなると，関数の値も大きくなること．",
    bodyHtml: `
      <p>
        区間内で\\(x\\)が大きくなると，関数の値も大きくなるとき，その関数はその区間で増加するという．
      </p>
      <p>
        微分を用いると，ある区間で\\(f^{\\prime}(x)>0\\)なら，\\(f(x)\\)はその区間で増加すると判断できる．
      </p>
    `,
    relatedIds: ["zougensei", "zougenseki", "doukansuu"]
  },
  {
    id: "zougenseki",
    term: "減少",
    kana: "げんしょう",
    yomi: "zougenseki",
    group: "け",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "\\(x\\)が大きくなると，関数の値が小さくなること．",
    description: "\\(x\\)が大きくなると，関数の値が小さくなること．",
    bodyHtml: `
      <p>
        区間内で\\(x\\)が大きくなると，関数の値が小さくなるとき，その関数はその区間で減少するという．
      </p>
      <p>
        微分を用いると，ある区間で\\(f^{\\prime}(x)<0\\)なら，\\(f(x)\\)はその区間で減少すると判断できる．
      </p>
    `,
    relatedIds: ["zougensei", "zougengyou", "doukansuu"]
  },
  {
    id: "zougenhyou",
    term: "増減表",
    kana: "ぞうげんひょう",
    yomi: "zougenhyou",
    group: "そ",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "導関数の符号と関数の増減を整理した表．",
    description: "導関数の符号と関数の増減を整理した表．",
    bodyHtml: `
      <p>
        導関数の符号と関数の増減を整理した表を増減表という．
      </p>
      <p>
        増減表では，\\(f^{\\prime}(x)\\)の符号が正か負か，また\\(f(x)\\)が増加するか減少するかをまとめる．
      </p>
      <p>
        増減表を用いると，関数の極大値・極小値や最大値・最小値を調べやすくなる．
      </p>
    `,
    relatedIds: ["zougensei", "doukansuu", "kyokudai", "kyokusho"]
  },
  {
    id: "kyokuchi",
    term: "極値",
    kana: "きょくち",
    yomi: "kyokuchi",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数が局所的に大きくなったり小さくなったりするときの値．",
    description: "関数が局所的に大きくなったり小さくなったりするときの値．",
    bodyHtml: `
      <p>
        関数がある点の近くで，その点において周囲より大きい値または小さい値をとるとき，その値を極値という．
      </p>
      <p>
        極値には，極大値と極小値がある．
      </p>
      <p>
        導関数の符号が，ある点の前後で正から負に変わるとき極大値をとり，負から正に変わるとき極小値をとる．
      </p>
    `,
    relatedIds: ["kyokudai", "kyokusho", "doukansuu", "zougenhyou"]
  },
  {
    id: "kyokudai",
    term: "極大",
    kana: "きょくだい",
    yomi: "kyokudai",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "ある点の近くで，その点の関数の値が周囲より大きいこと．",
    description: "ある点の近くで，その点の関数の値が周囲より大きいこと．",
    bodyHtml: `
      <p>
        ある点の近くで，その点の関数の値が周囲より大きいとき，その関数はその点で極大であるという．
      </p>
      <p>
        関数\\(f(x)\\)が\\(x=a\\)で極大であるとき，値\\(f(a)\\)を極大値という．
      </p>
      <p>
        増減でみると，\\(x=a\\)の前後で関数が増加から減少に変わるとき，\\(x=a\\)で極大になる．
      </p>
    `,
    relatedIds: ["kyokuchi", "kyokudai_chi", "kyokusho"]
  },
  {
    id: "kyokudai_chi",
    term: "極大値",
    kana: "きょくだいち",
    yomi: "kyokudai_chi",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数が極大であるときの関数の値．",
    description: "関数が極大であるときの関数の値．",
    bodyHtml: `
      <p>
        関数が極大であるときの関数の値を極大値という．
      </p>
      <p>
        たとえば，関数\\(f(x)\\)が\\(x=a\\)で極大であるとき，\\(f(a)\\)が極大値である．
      </p>
      <p>
        極大値は，定義域全体で最も大きい値であるとは限らない．最大値とは区別する．
      </p>
    `,
    relatedIds: ["kyokudai", "saidaichi"]
  },
  {
    id: "kyokusho",
    term: "極小",
    kana: "きょくしょう",
    yomi: "kyokusho",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "ある点の近くで，その点の関数の値が周囲より小さいこと．",
    description: "ある点の近くで，その点の関数の値が周囲より小さいこと．",
    bodyHtml: `
      <p>
        ある点の近くで，その点の関数の値が周囲より小さいとき，その関数はその点で極小であるという．
      </p>
      <p>
        関数\\(f(x)\\)が\\(x=a\\)で極小であるとき，値\\(f(a)\\)を極小値という．
      </p>
      <p>
        増減でみると，\\(x=a\\)の前後で関数が減少から増加に変わるとき，\\(x=a\\)で極小になる．
      </p>
    `,
    relatedIds: ["kyokuchi", "kyokusho_chi", "kyokudai"]
  },
  {
    id: "kyokusho_chi",
    term: "極小値",
    kana: "きょくしょうち",
    yomi: "kyokusho_chi",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "関数が極小であるときの関数の値．",
    description: "関数が極小であるときの関数の値．",
    bodyHtml: `
      <p>
        関数が極小であるときの関数の値を極小値という．
      </p>
      <p>
        たとえば，関数\\(f(x)\\)が\\(x=a\\)で極小であるとき，\\(f(a)\\)が極小値である．
      </p>
      <p>
        極小値は，定義域全体で最も小さい値であるとは限らない．最小値とは区別する．
      </p>
    `,
    relatedIds: ["kyokusho", "saishouchi"]
  },
  {
    id: "fusetei_sekibun",
    term: "不定積分",
    kana: "ふていせきぶん",
    yomi: "fusetei_sekibun",
    group: "ふ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "導関数が与えられた関数になるような関数全体を求めること．",
    description: "導関数が与えられた関数になるような関数全体を求めること．",
    bodyHtml: `
      <p>
        導関数が与えられた関数になるような関数全体を求めることを不定積分という．
      </p>
      <p>
        関数\\(f(x)\\)の不定積分を
      </p>
      <div class="math-block">
        \\[
        \\int f(x)\\,dx
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\int 2x\\,dx=x^2+C
        \\]
      </div>
      <p>
        である．ここで\\(C\\)は積分定数である．
      </p>
    `,
    relatedIds: ["ganshi_kansuu", "sekibun_suru", "sekibun_teisu"]
  },
  {
    id: "ganshi_kansuu",
    term: "原始関数",
    kana: "げんしかんすう",
    yomi: "ganshi_kansuu",
    group: "け",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "微分すると，もとの関数になる関数．",
    description: "微分すると，もとの関数になる関数．",
    bodyHtml: `
      <p>
        関数\\(F(x)\\)を微分すると\\(f(x)\\)になるとき，つまり
      </p>
      <div class="math-block">
        \\[
        F^{\\prime}(x)=f(x)
        \\]
      </div>
      <p>
        が成り立つとき，\\(F(x)\\)を\\(f(x)\\)の原始関数という．
      </p>
      <p>
        たとえば，\\(F(x)=x^2\\)は，\\(f(x)=2x\\)の原始関数である．
      </p>
      <p>
        また，\\(x^2+3\\)や\\(x^2-5\\)も微分すると\\(2x\\)になるので，\\(2x\\)の原始関数である．
      </p>
    `,
    relatedIds: ["fusetei_sekibun", "sekibun_teisu", "doukansuu"]
  },
  {
    id: "sekibun_suru",
    term: "積分する",
    kana: "せきぶんする",
    yomi: "sekibun_suru",
    group: "せ",
    type: "操作",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "原始関数や定積分の値を求めること．",
    description: "原始関数や定積分の値を求めること．",
    bodyHtml: `
      <p>
        原始関数や定積分の値を求めることを積分するという．
      </p>
      <p>
        数学IIでは，主に多項式関数の不定積分と定積分を扱う．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\int 3x^2\\,dx=x^3+C
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["fusetei_sekibun", "teisekibun", "ganshi_kansuu"]
  },
  {
    id: "sekibun_teisu",
    term: "積分定数",
    kana: "せきぶんていすう",
    yomi: "sekibun_teisu",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "不定積分で現れる任意の定数．",
    description: "不定積分で現れる任意の定数．",
    bodyHtml: `
      <p>
        不定積分で現れる任意の定数を積分定数という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\int 2x\\,dx=x^2+C
        \\]
      </div>
      <p>
        における\\(C\\)が積分定数である．
      </p>
      <p>
        定数は微分すると\\(0\\)になるため，原始関数は定数の差を除いて同じ形になる．
      </p>
    `,
    relatedIds: ["fusetei_sekibun", "ganshi_kansuu"]
  },
  {
    id: "teisekibun",
    term: "定積分",
    kana: "ていせきぶん",
    yomi: "teisekibun",
    group: "て",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "上端と下端を決めて積分した値．面積や符号付き面積と関係する．",
    description: "上端と下端を決めて積分した値．面積や符号付き面積と関係する．",
    bodyHtml: `
      <p>
        積分する範囲の下端と上端を決めて積分した値を定積分という．
      </p>
      <p>
        関数\\(f(x)\\)の原始関数を\\(F(x)\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\int_a^b f(x)\\,dx=F(b)-F(a)
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        定積分は，グラフと\\(x\\)軸の間の符号付き面積として考えられる．
      </p>
    `,
    relatedIds: ["fusetei_sekibun", "sekibun_suru", "menseki_sekibun"]
  },
  {
    id: "sekibun_kukan",
    term: "積分区間",
    kana: "せきぶんくかん",
    yomi: "sekibun_kukan",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "定積分で積分する範囲．",
    description: "定積分で積分する範囲．",
    bodyHtml: `
      <p>
        定積分
      </p>
      <div class="math-block">
        \\[
        \\int_a^b f(x)\\,dx
        \\]
      </div>
      <p>
        における\\(a\\leqq x\\leqq b\\)の範囲を積分区間という．
      </p>
      <p>
        ここで，\\(a\\)を下端，\\(b\\)を上端という．
      </p>
    `,
    relatedIds: ["teisekibun", "joutan", "katan"]
  },
  {
    id: "katan",
    term: "下端",
    kana: "かたん",
    yomi: "katan",
    group: "か",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "定積分の積分区間の始まりにあたる値．",
    description: "定積分の積分区間の始まりにあたる値．",
    bodyHtml: `
      <p>
        定積分
      </p>
      <div class="math-block">
        \\[
        \\int_a^b f(x)\\,dx
        \\]
      </div>
      <p>
        における\\(a\\)を下端という．
      </p>
    `,
    relatedIds: ["teisekibun", "joutan", "sekibun_kukan"]
  },
  {
    id: "joutan",
    term: "上端",
    kana: "じょうたん",
    yomi: "joutan",
    group: "し",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "定積分の積分区間の終わりにあたる値．",
    description: "定積分の積分区間の終わりにあたる値．",
    bodyHtml: `
      <p>
        定積分
      </p>
      <div class="math-block">
        \\[
        \\int_a^b f(x)\\,dx
        \\]
      </div>
      <p>
        における\\(b\\)を上端という．
      </p>
    `,
    relatedIds: ["teisekibun", "katan", "sekibun_kukan"]
  },
  {
    id: "menseki_sekibun",
    term: "面積（積分）",
    kana: "めんせき",
    yomi: "menseki_sekibun",
    group: "め",
    type: "用語",
    subject: "数学II",
    unit: "微分積分",
    unitIds: ["math2_calculus"],
    shortDescription: "積分を用いて求める，グラフで囲まれた部分の広さ．",
    description: "積分を用いて求める，グラフで囲まれた部分の広さ．",
    bodyHtml: `
      <p>
        積分を用いると，グラフと\\(x\\)軸で囲まれた部分や，2つのグラフで囲まれた部分の面積を求めることができる．
      </p>
      <p>
        関数\\(f(x)\\)が区間\\(a\\leqq x\\leqq b\\)で\\(f(x)\geqq 0\\)を満たすとき，グラフ\\(y=f(x)\\)と\\(x\\)軸，直線\\(x=a\\)，\\(x=b\\)で囲まれた部分の面積は，
      </p>
      <div class="math-block">
        \\[
        \\int_a^b f(x)\\,dx
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        2つの関数\\(f(x)\\)，\\(g(x)\\)について，区間\\(a\\leqq x\\leqq b\\)で\\(f(x)\geqq g(x)\\)なら，2つのグラフで囲まれた部分の面積は，
      </p>
      <div class="math-block">
        \\[
        \\int_a^b \\{f(x)-g(x)\\}\\,dx
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["teisekibun", "sekibun_kukan"]
  }
);
