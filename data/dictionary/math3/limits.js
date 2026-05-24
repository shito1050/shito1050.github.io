window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "kyokugen",
    term: "極限",
    kana: "きょくげん",
    yomi: "kyokugen",
    group: "き",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "変数や番号を限りなく近づけたとき，値が近づいていく先の値．",
    description: "変数や番号を限りなく近づけたとき，値が近づいていく先の値．",
    bodyHtml: `
      <p>
        変数や番号をある値に限りなく近づけたとき，関数や数列の値が近づいていく先の値を極限という．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)について，\\(n\\)を限りなく大きくすると\\(a_n\\)が\\(\\alpha\\)に近づくとき，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=\\alpha
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        関数\\(f(x)\\)について，\\(x\\)を\\(a\\)に限りなく近づけると\\(f(x)\\)が\\(\\alpha\\)に近づくとき，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}f(x)=\\alpha
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["shuuren", "hassan", "kansuu_no_kyokugen", "suuretsu_no_kyokugen"]
  },
  {
    id: "suuretsu_no_kyokugen",
    term: "数列の極限",
    kana: "すうれつのきょくげん",
    yomi: "suuretsu_no_kyokugen",
    group: "す",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "番号\\(n\\)を限りなく大きくしたとき，数列の項が近づく値．",
    description: "番号\\(n\\)を限りなく大きくしたとき，数列の項が近づく値．",
    bodyHtml: `
      <p>
        数列\\(\\{a_n\\}\\)について，\\(n\\)を限りなく大きくしたとき，\\(a_n\\)がある値\\(\\alpha\\)に近づくなら，\\(\\alpha\\)を数列\\(\\{a_n\\}\\)の極限という．
      </p>
      <p>
        このとき，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=\\alpha
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
        a_n=\\frac{1}{n}
        \\]
      </div>
      <p>
        で定められる数列は，\\(n\\)を大きくすると\\(0\\)に近づくので，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}\\frac{1}{n}=0
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kyokugen", "shuuren", "hassan", "mugen_suuretsu"]
  },
  {
    id: "shuuren",
    term: "収束",
    kana: "しゅうそく",
    yomi: "shuuren",
    group: "し",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列や関数の値が，ある有限の値に限りなく近づくこと．",
    description: "数列や関数の値が，ある有限の値に限りなく近づくこと．",
    bodyHtml: `
      <p>
        数列や関数の値が，ある有限の値に限りなく近づくことを収束するという．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)が\\(\\alpha\\)に収束することを，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=\\alpha
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        収束する先の値\\(\\alpha\\)を極限値という．
      </p>
    `,
    relatedIds: ["kyokugen", "kyokugenchi", "hassan", "suuretsu_no_kyokugen"]
  },
  {
    id: "kyokugenchi",
    term: "極限値",
    kana: "きょくげんち",
    yomi: "kyokugenchi",
    group: "き",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列や関数の値が限りなく近づく先の値．",
    description: "数列や関数の値が限りなく近づく先の値．",
    bodyHtml: `
      <p>
        数列や関数の値が限りなく近づく先の値を極限値という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}\\frac{2n+1}{n}=2
        \\]
      </div>
      <p>
        であるとき，極限値は\\(2\\)である．
      </p>
      <p>
        極限値が存在するとは，近づく先の有限な値がただ1つに定まるということである．
      </p>
    `,
    relatedIds: ["kyokugen", "shuuren"]
  },
  {
    id: "hassan",
    term: "発散",
    kana: "はっさん",
    yomi: "hassan",
    group: "は",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列や関数の値が，有限の値に収束しないこと．",
    description: "数列や関数の値が，有限の値に収束しないこと．",
    bodyHtml: `
      <p>
        数列や関数の値が，有限の値に収束しないことを発散するという．
      </p>
      <p>
        発散には，値が限りなく大きくなる場合，限りなく小さくなる場合，振動して近づく値が定まらない場合などがある．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        a_n=n
        \\]
      </div>
      <p>
        で定められる数列は，\\(n\\)を限りなく大きくするといくらでも大きくなるので，正の無限大に発散する．
      </p>
    `,
    relatedIds: ["shuuren", "seino_mugendai_ni_hassan", "funo_mugendai_ni_hassan", "shindou"]
  },
  {
    id: "seino_mugendai_ni_hassan",
    term: "正の無限大に発散",
    kana: "せいのむげんだいにはっさん",
    yomi: "seino_mugendai_ni_hassan",
    group: "せ",
    type: "用語",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列や関数の値が限りなく大きくなること．",
    description: "数列や関数の値が限りなく大きくなること．",
    bodyHtml: `
      <p>
        数列や関数の値が限りなく大きくなることを，正の無限大に発散するという．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)が正の無限大に発散するとき，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=\infty
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        これは有限の極限値をもつという意味ではなく，どんなに大きい数を決めても，十分先ではそれを超えるという意味である．
      </p>
    `,
    relatedIds: ["hassan", "mugen", "funo_mugendai_ni_hassan"]
  },
  {
    id: "funo_mugendai_ni_hassan",
    term: "負の無限大に発散",
    kana: "ふのむげんだいにはっさん",
    yomi: "funo_mugendai_ni_hassan",
    group: "ふ",
    type: "用語",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列や関数の値が限りなく小さくなること．",
    description: "数列や関数の値が限りなく小さくなること．",
    bodyHtml: `
      <p>
        数列や関数の値が限りなく小さくなることを，負の無限大に発散するという．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)が負の無限大に発散するとき，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=-\infty
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        これは有限の極限値が\\(-\\infty\\)であるという意味ではなく，値がどこまでも小さくなるという意味である．
      </p>
    `,
    relatedIds: ["hassan", "mugen", "seino_mugendai_ni_hassan"]
  },
  {
    id: "shindou",
    term: "振動",
    kana: "しんどう",
    yomi: "shindou",
    group: "し",
    type: "用語",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "値が複数の値の間を行き来し，1つの値に近づかないこと．",
    description: "値が複数の値の間を行き来し，1つの値に近づかないこと．",
    bodyHtml: `
      <p>
        数列や関数の値が複数の値の間を行き来し，1つの値に近づかないことを振動するという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        a_n=(-1)^n
        \\]
      </div>
      <p>
        で定められる数列は，\\(-1\\)と\\(1\\)を交互にとるので，収束しない．
      </p>
      <p>
        このように，正の無限大や負の無限大に発散するわけではないが，極限値が定まらない場合も発散に含まれる．
      </p>
    `,
    relatedIds: ["hassan", "shuuren"]
  },
  {
    id: "mugen",
    term: "無限",
    kana: "むげん",
    yomi: "mugen",
    group: "む",
    type: "用語",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "限りがないこと．極限では，値や番号が限りなく大きくなることを表す．",
    description: "限りがないこと．極限では，値や番号が限りなく大きくなることを表す．",
    bodyHtml: `
      <p>
        限りがないことを無限という．
      </p>
      <p>
        極限では，\\(n\\to\\infty\\)のように，番号\\(n\\)が限りなく大きくなることを表す場合がある．
      </p>
      <p>
        また，\\(a_n\\to\\infty\\)のように，数列の値が限りなく大きくなることを表す場合もある．
      </p>
      <p>
        ただし，\\(\\infty\\)は通常の実数ではないため，普通の数と同じように四則計算できるわけではない．
      </p>
    `,
    relatedIds: ["kyokugen", "seino_mugendai_ni_hassan", "mugen_suuretsu"]
  },
  {
    id: "mugen_suuretsu",
    term: "無限数列",
    kana: "むげんすうれつ",
    yomi: "mugen_suuretsu",
    group: "む",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "項が限りなく続く数列．",
    description: "項が限りなく続く数列．",
    bodyHtml: `
      <p>
        項が限りなく続く数列を無限数列という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        1,\\frac{1}{2},\\frac{1}{3},\\frac{1}{4},\\cdots
        \\]
      </div>
      <p>
        は無限数列である．
      </p>
      <p>
        数学IIIでは，無限数列の項がどのような値に近づくかを調べる．
      </p>
    `,
    relatedIds: ["suuretsu", "suuretsu_no_kyokugen", "mugen"]
  },
  {
    id: "mugen_kyuusuu",
    term: "無限級数",
    kana: "むげんきゅうすう",
    yomi: "mugen_kyuusuu",
    group: "む",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "無限に続く数列の項を順にたし合わせたもの．",
    description: "無限に続く数列の項を順にたし合わせたもの．",
    bodyHtml: `
      <p>
        無限に続く数列の項を順にたし合わせたものを無限級数という．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)に対する無限級数は，
      </p>
      <div class="math-block">
        \\[
        a_1+a_2+a_3+\\cdots
        \\]
      </div>
      <p>
        または，
      </p>
      <div class="math-block">
        \\[
        \\sum_{n=1}^{\\infty}a_n
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        無限級数は，部分和の数列が収束するとき収束し，その極限値を無限級数の和という．
      </p>
    `,
    relatedIds: ["kyuusuu", "bubunwa", "mugen_touhi_kyuusuu"]
  },
  {
    id: "kyuusuu",
    term: "級数",
    kana: "きゅうすう",
    yomi: "kyuusuu",
    group: "き",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数列の項を順にたし合わせたもの．",
    description: "数列の項を順にたし合わせたもの．",
    bodyHtml: `
      <p>
        数列の項を順にたし合わせたものを級数という．
      </p>
      <p>
        特に，無限に続く数列の項を順にたし合わせたものを無限級数という．
      </p>
      <p>
        級数を扱うときは，有限個の項の和だけでなく，無限にたし続けたときに和がある値に近づくかどうかを考える．
      </p>
    `,
    relatedIds: ["mugen_kyuusuu", "bubunwa", "wa_suuretsu"]
  },
  {
    id: "bubunwa",
    term: "部分和",
    kana: "ぶぶんわ",
    yomi: "bubunwa",
    group: "ふ",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "級数のはじめから第\\(n\\)項までをたした和．",
    description: "級数のはじめから第\\(n\\)項までをたした和．",
    bodyHtml: `
      <p>
        級数
      </p>
      <div class="math-block">
        \\[
        a_1+a_2+a_3+\\cdots
        \\]
      </div>
      <p>
        に対して，はじめから第\\(n\\)項までをたした和
      </p>
      <div class="math-block">
        \\[
        S_n=a_1+a_2+\\cdots+a_n
        \\]
      </div>
      <p>
        を部分和という．
      </p>
      <p>
        無限級数では，部分和の数列\\(\\{S_n\\}\\)が収束するかどうかによって，無限級数の収束・発散を判断する．
      </p>
    `,
    relatedIds: ["mugen_kyuusuu", "kyuusuu", "shuuren"]
  },
  {
    id: "mugen_touhi_kyuusuu",
    term: "無限等比級数",
    kana: "むげんとうひきゅうすう",
    yomi: "mugen_touhi_kyuusuu",
    group: "む",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "等比数列の項を無限にたし合わせた級数．",
    description: "等比数列の項を無限にたし合わせた級数．",
    bodyHtml: `
      <p>
        等比数列の項を無限にたし合わせた級数を無限等比級数という．
      </p>
      <p>
        初項\\(a\\)，公比\\(r\\)の無限等比級数は，
      </p>
      <div class="math-block">
        \\[
        a+ar+ar^2+ar^3+\\cdots
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        \\(-1<r<1\\)のとき，この無限等比級数は収束し，和は
      </p>
      <div class="math-block">
        \\[
        \\frac{a}{1-r}
        \\]
      </div>
      <p>
        である．\\(r\\leqq -1\\)または\\(1\\leqq r\\)のときは収束しない．
      </p>
      <h3>証明</h3>
      <p>
        第\\(n\\)部分和を\\(S_n\\)とすると，\\(r\\ne 1\\)のとき，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{a(1-r^n)}{1-r}
        \\]
      </div>
      <p>
        である．\\(-1<r<1\\)なら\\(r^n\\to 0\\)であるから，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}S_n=\\frac{a}{1-r}
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["mugen_kyuusuu", "touhi_suuretsu", "bubunwa"]
  },
  {
    id: "kansuu_no_kyokugen",
    term: "関数の極限",
    kana: "かんすうのきょくげん",
    yomi: "kansuu_no_kyokugen",
    group: "か",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "\\(x\\)をある値に近づけたとき，関数の値が近づく先の値．",
    description: "\\(x\\)をある値に近づけたとき，関数の値が近づく先の値．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，\\(x\\)を\\(a\\)に限りなく近づけると\\(f(x)\\)が\\(\\alpha\\)に近づくとき，\\(\\alpha\\)を関数\\(f(x)\\)の\\(x\\to a\\)における極限という．
      </p>
      <p>
        このことを，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}f(x)=\\alpha
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        ここで大切なのは，\\(x=a\\)での値そのものではなく，\\(x\\)を\\(a\\)に近づけたときの\\(f(x)\\)の近づき方を見るという点である．
      </p>
    `,
    relatedIds: ["kyokugen", "katagawa_kyokugen", "renzoku"]
  },
  {
    id: "katagawa_kyokugen",
    term: "片側極限",
    kana: "かたがわきょくげん",
    yomi: "katagawa_kyokugen",
    group: "か",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "右側または左側からだけ近づけたときの関数の極限．",
    description: "右側または左側からだけ近づけたときの関数の極限．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，\\(x\\)を\\(a\\)より大きい側から\\(a\\)に近づけたときの極限を右側極限という．
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a+0}f(x)
        \\]
      </div>
      <p>
        また，\\(x\\)を\\(a\\)より小さい側から\\(a\\)に近づけたときの極限を左側極限という．
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a-0}f(x)
        \\]
      </div>
      <p>
        両側から近づけた極限が存在するためには，右側極限と左側極限がともに存在し，さらにそれらが等しいことが必要である．
      </p>
    `,
    relatedIds: ["migigawa_kyokugen", "hidarigawa_kyokugen", "kansuu_no_kyokugen"]
  },
  {
    id: "migigawa_kyokugen",
    term: "右側極限",
    kana: "みぎがわきょくげん",
    yomi: "migigawa_kyokugen",
    group: "み",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "\\(x\\)を右側から近づけたときの関数の極限．",
    description: "\\(x\\)を右側から近づけたときの関数の極限．",
    bodyHtml: `
      <p>
        \\(x\\)を\\(a\\)より大きい側から\\(a\\)に近づけたときの関数\\(f(x)\\)の極限を右側極限という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a+0}f(x)
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["katagawa_kyokugen", "hidarigawa_kyokugen"]
  },
  {
    id: "hidarigawa_kyokugen",
    term: "左側極限",
    kana: "ひだりがわきょくげん",
    yomi: "hidarigawa_kyokugen",
    group: "ひ",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "\\(x\\)を左側から近づけたときの関数の極限．",
    description: "\\(x\\)を左側から近づけたときの関数の極限．",
    bodyHtml: `
      <p>
        \\(x\\)を\\(a\\)より小さい側から\\(a\\)に近づけたときの関数\\(f(x)\\)の極限を左側極限という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a-0}f(x)
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["katagawa_kyokugen", "migigawa_kyokugen"]
  },
  {
    id: "renzoku",
    term: "連続",
    kana: "れんぞく",
    yomi: "renzoku",
    group: "れ",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "関数の極限値とその点での関数の値が一致すること．",
    description: "関数の極限値とその点での関数の値が一致すること．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)について，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}f(x)=f(a)
        \\]
      </div>
      <p>
        が成り立つとき，\\(f(x)\\)は\\(x=a\\)で連続であるという．
      </p>
      <p>
        つまり，\\(x\\)を\\(a\\)に近づけたときの値の近づく先と，実際の\\(x=a\\)での値が一致するということである．
      </p>
      <p>
        区間のすべての点で連続であるとき，その関数はその区間で連続であるという．
      </p>
    `,
    relatedIds: ["kansuu_no_kyokugen", "furen zoku", "chukan_chi_no_teiri"]
  },
  {
    id: "furen zoku",
    term: "不連続",
    kana: "ふれんぞく",
    yomi: "furenzoku",
    group: "ふ",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "関数がある点で連続でないこと．",
    description: "関数がある点で連続でないこと．",
    bodyHtml: `
      <p>
        関数がある点で連続でないことを不連続という．
      </p>
      <p>
        たとえば，\\(x=a\\)で関数値が定義されていない場合や，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}f(x)=f(a)
        \\]
      </div>
      <p>
        が成り立たない場合，\\(x=a\\)で不連続である．
      </p>
    `,
    relatedIds: ["renzoku"]
  },
  {
    id: "chukan_chi_no_teiri",
    term: "中間値の定理",
    kana: "ちゅうかんちのていり",
    yomi: "chukan_chi_no_teiri",
    group: "ち",
    type: "定理",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "連続関数が両端の値の間の値を必ずとるという定理．",
    description: "連続関数が両端の値の間の値を必ずとるという定理．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)が閉区間\\([a,b]\\)で連続であるとする．\\(f(a)\\)と\\(f(b)\\)の間の任意の値\\(k\\)に対して，ある\\(c\\)が存在して，
      </p>
      <div class="math-block">
        \\[
        a<c<b
        \\]
      </div>
      <p>
        かつ
      </p>
      <div class="math-block">
        \\[
        f(c)=k
        \\]
      </div>
      <p>
        が成り立つ．これを中間値の定理という．
      </p>
      <p>
        特に，\\(f(a)\\)と\\(f(b)\\)の符号が異なるとき，方程式\\(f(x)=0\\)は\\(a\\)と\\(b\\)の間に少なくとも1つの解をもつ．
      </p>
    `,
    relatedIds: ["renzoku", "heikukan", "kai_houteishiki"]
  },
  {
    id: "heikukan",
    term: "閉区間",
    kana: "へいくかん",
    yomi: "heikukan",
    group: "へ",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "両端を含む区間．",
    description: "両端を含む区間．",
    bodyHtml: `
      <p>
        両端を含む区間を閉区間という．
      </p>
      <p>
        \\(a\\leqq x\\leqq b\\)を満たす実数\\(x\\)全体の集合を，
      </p>
      <div class="math-block">
        \\[
        [a,b]
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        閉区間では，端の値\\(a\\)，\\(b\\)も区間に含まれる．
      </p>
    `,
    relatedIds: ["kaikukan", "kukan", "chukan_chi_no_teiri"]
  },
  {
    id: "kaikukan",
    term: "開区間",
    kana: "かいくかん",
    yomi: "kaikukan",
    group: "か",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "両端を含まない区間．",
    description: "両端を含まない区間．",
    bodyHtml: `
      <p>
        両端を含まない区間を開区間という．
      </p>
      <p>
        \\(a<x<b\\)を満たす実数\\(x\\)全体の集合を，
      </p>
      <div class="math-block">
        \\[
        (a,b)
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        開区間では，端の値\\(a\\)，\\(b\\)は区間に含まれない．
      </p>
    `,
    relatedIds: ["heikukan", "kukan"]
  },
  {
    id: "kukan",
    term: "区間",
    kana: "くかん",
    yomi: "kukan",
    group: "く",
    type: "定義",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "数直線上で，ある範囲に含まれる実数全体の集合．",
    description: "数直線上で，ある範囲に含まれる実数全体の集合．",
    bodyHtml: `
      <p>
        数直線上で，ある範囲に含まれる実数全体の集合を区間という．
      </p>
      <p>
        区間には，端を含む閉区間，端を含まない開区間，片方の端だけを含む半開区間などがある．
      </p>
    `,
    relatedIds: ["heikukan", "kaikukan", "suuchokusen"]
  },
  {
    id: "hasamiuchi_no_genri_kansuu",
    term: "はさみうちの原理（関数）",
    kana: "はさみうちのげんり",
    yomi: "hasamiuchi_no_genri_kansuu",
    group: "は",
    type: "定理",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "2つの関数にはさまれた関数の極限を求める原理．",
    description: "2つの関数にはさまれた関数の極限を求める原理．",
    bodyHtml: `
      <p>
        \\(x\\)が\\(a\\)に十分近い範囲で，
      </p>
      <div class="math-block">
        \\[
        g(x)\\leqq f(x)\\leqq h(x)
        \\]
      </div>
      <p>
        が成り立ち，さらに
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}g(x)=\\lim_{x\\to a}h(x)=\\alpha
        \\]
      </div>
      <p>
        であるなら，
      </p>
      <div class="math-block">
        \\[
        \\lim_{x\\to a}f(x)=\\alpha
        \\]
      </div>
      <p>
        が成り立つ．これを関数のはさみうちの原理という．
      </p>
      <p>
        求めたい関数を直接扱いにくいとき，上下から簡単な関数ではさむことで極限を求める．
      </p>
    `,
    relatedIds: ["kyokugen", "kansuu_no_kyokugen", "hasamiuchi_no_genri_suuretsu"]
  },
  {
    id: "hasamiuchi_no_genri_suuretsu",
    term: "はさみうちの原理（数列）",
    kana: "はさみうちのげんり",
    yomi: "hasamiuchi_no_genri_suuretsu",
    group: "は",
    type: "定理",
    subject: "数学III",
    unit: "極限",
    unitIds: ["math3_limits"],
    shortDescription: "2つの数列にはさまれた数列の極限を求める原理．",
    description: "2つの数列にはさまれた数列の極限を求める原理．",
    bodyHtml: `
      <p>
        ある番号以降で，
      </p>
      <div class="math-block">
        \\[
        b_n\\leqq a_n\\leqq c_n
        \\]
      </div>
      <p>
        が成り立ち，さらに
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}b_n=\\lim_{n\\to\\infty}c_n=\\alpha
        \\]
      </div>
      <p>
        であるなら，
      </p>
      <div class="math-block">
        \\[
        \\lim_{n\\to\\infty}a_n=\\alpha
        \\]
      </div>
      <p>
        が成り立つ．これを数列のはさみうちの原理という．
      </p>
    `,
    relatedIds: ["kyokugen", "suuretsu_no_kyokugen", "hasamiuchi_no_genri_kansuu"]
  }
);
