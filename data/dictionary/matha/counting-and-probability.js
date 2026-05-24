window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "baai_no_kazu",
    term: "場合の数",
    kana: "ばあいのかず",
    yomi: "baai_no_kazu",
    group: "は",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "条件を満たす起こり方が何通りあるかを数えたもの．",
    description: "条件を満たす起こり方が何通りあるかを数えたもの．",
    bodyHtml: `
      <p>
        条件を満たす起こり方が何通りあるかを数えたものを，場合の数という．
      </p>
      <p>
        たとえば，赤，青，黄の3色から1色を選ぶ場合の数は3通りである．
      </p>
      <p>
        場合の数を数えるときは，重複して数えないこと，また数えもれをしないことが重要である．
      </p>
    `,
    relatedIds: ["wa_no_housoku", "seki_no_housoku", "junretsu", "kumiawase"]
  },
  {
    id: "wa_no_housoku",
    term: "和の法則",
    kana: "わのほうそく",
    yomi: "wa_no_housoku",
    group: "わ",
    type: "法則",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "同時には起こらない場合を分けて数えるとき，それぞれの場合の数をたす法則．",
    description: "同時には起こらない場合を分けて数えるとき，それぞれの場合の数をたす法則．",
    bodyHtml: `
      <p>
        ある事柄が，互いに重ならないいくつかの場合に分けられるとき，全体の場合の数は，それぞれの場合の数の和で求められる．これを和の法則という．
      </p>
      <p>
        たとえば，赤いカードが3枚，青いカードが5枚あり，その中から1枚選ぶとする．赤いカードを選ぶ場合と青いカードを選ぶ場合は同時には起こらないので，選び方は
      </p>
      <div class="math-block">
        \\[
        3+5=8
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["baai_no_kazu", "seki_no_housoku", "haihanjishou"]
  },
  {
    id: "seki_no_housoku",
    term: "積の法則",
    kana: "せきのほうそく",
    yomi: "seki_no_housoku",
    group: "せ",
    type: "法則",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "いくつかの選択を順に行うとき，それぞれの場合の数をかける法則．",
    description: "いくつかの選択を順に行うとき，それぞれの場合の数をかける法則．",
    bodyHtml: `
      <p>
        ある選択をしたあと，次の選択をするように，いくつかの選択を順に行うとき，全体の場合の数は，それぞれの選択の場合の数の積で求められる．これを積の法則という．
      </p>
      <p>
        たとえば，上着が3種類，ズボンが4種類あるとき，上着とズボンの組合せは，
      </p>
      <div class="math-block">
        \\[
        3\\cdot 4=12
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["baai_no_kazu", "wa_no_housoku", "junretsu"]
  },
  {
    id: "junretsu",
    term: "順列",
    kana: "じゅんれつ",
    yomi: "junretsu",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "いくつかのものを，順序を考えて並べたもの．",
    description: "いくつかのものを，順序を考えて並べたもの．",
    bodyHtml: `
      <p>
        いくつかのものを，順序を考えて並べたものを順列という．
      </p>
      <p>
        異なる\\(n\\)個のものから\\(r\\)個を選んで並べる順列の数は，
      </p>
      <div class="math-block">
        \\[
        {}_nP_r=n(n-1)(n-2)\\cdots(n-r+1)
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        たとえば，5人から3人を選んで1列に並べる方法は，
      </p>
      <div class="math-block">
        \\[
        {}_5P_3=5\\cdot 4\\cdot 3=60
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["kaijou", "kumiawase", "juufuku_junretsu", "enjunretsu"]
  },
  {
    id: "kaijou",
    term: "階乗",
    kana: "かいじょう",
    yomi: "kaijou",
    group: "か",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "1からその自然数までの整数をすべてかけたもの．",
    description: "1からその自然数までの整数をすべてかけたもの．",
    bodyHtml: `
      <p>
        自然数\\(n\\)に対して，\\(1\\)から\\(n\\)までの整数をすべてかけたものを\\(n\\)の階乗といい，\\(n!\\)と表す．
      </p>
      <div class="math-block">
        \\[
        n!=n(n-1)(n-2)\\cdots 3\\cdot 2\\cdot 1
        \\]
      </div>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        5!=5\\cdot 4\\cdot 3\\cdot 2\\cdot 1=120
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        また，場合の数では\\(0!=1\\)と定める．
      </p>
    `,
    relatedIds: ["junretsu", "kumiawase"]
  },
  {
    id: "juufuku_junretsu",
    term: "重複順列",
    kana: "じゅうふくじゅんれつ",
    yomi: "juufuku_junretsu",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "同じものを何度も選んでよいとして，順序を考えて並べるもの．",
    description: "同じものを何度も選んでよいとして，順序を考えて並べるもの．",
    bodyHtml: `
      <p>
        同じものを何度も選んでよいとして，順序を考えて並べるものを重複順列という．
      </p>
      <p>
        \\(n\\)種類のものから重複を許して\\(r\\)個を選んで並べる方法は，
      </p>
      <div class="math-block">
        \\[
        n^r
        \\]
      </div>
      <p>
        通りである．
      </p>
      <p>
        たとえば，0から9までの数字を使って，重複を許して4けたの暗証番号を作る方法は，
      </p>
      <div class="math-block">
        \\[
        10^4
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["junretsu", "seki_no_housoku"]
  },
  {
    id: "enjunretsu",
    term: "円順列",
    kana: "えんじゅんれつ",
    yomi: "enjunretsu",
    group: "え",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "いくつかのものを円形に並べた順列．",
    description: "いくつかのものを円形に並べた順列．",
    bodyHtml: `
      <p>
        いくつかのものを円形に並べた順列を円順列という．
      </p>
      <p>
        異なる\\(n\\)個のものを円形に並べる方法は，
      </p>
      <div class="math-block">
        \\[
        (n-1)!
        \\]
      </div>
      <p>
        通りである．
      </p>
      <h3>理由</h3>
      <p>
        直線上に並べると\\(n!\\)通りである．しかし，円形に並べる場合は，回転して一致する並べ方を同じものとみなす．1つの円形の並べ方に対して，直線上の表し方は\\(n\\)通りあるので，
      </p>
      <div class="math-block">
        \\[
        \\frac{n!}{n}=(n-1)!
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["junretsu", "kaijou"]
  },
  {
    id: "kumiawase",
    term: "組合せ",
    kana: "くみあわせ",
    yomi: "kumiawase",
    group: "く",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "順序を考えずに，いくつかのものを選ぶこと．",
    description: "順序を考えずに，いくつかのものを選ぶこと．",
    bodyHtml: `
      <p>
        順序を考えずに，いくつかのものを選ぶことを組合せという．
      </p>
      <p>
        異なる\\(n\\)個のものから\\(r\\)個を選ぶ組合せの数は，
      </p>
      <div class="math-block">
        \\[
        {}_nC_r=\\frac{{}_nP_r}{r!}=\\frac{n!}{r!(n-r)!}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        たとえば，5人から3人を選ぶ方法は，
      </p>
      <div class="math-block">
        \\[
        {}_5C_3=\\frac{5\\cdot 4\\cdot 3}{3\\cdot 2\\cdot 1}=10
        \\]
      </div>
      <p>
        通りである．
      </p>
    `,
    relatedIds: ["junretsu", "kaijou", "binomuteiri"]
  },
  {
    id: "binomuteiri",
    term: "二項定理",
    kana: "にこうていり",
    yomi: "binomuteiri",
    group: "に",
    type: "定理",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "\\((a+b)^n\\)の展開係数を組合せで表す定理．",
    description: "\\((a+b)^n\\)の展開係数を組合せで表す定理．",
    bodyHtml: `
      <p>
        自然数\\(n\\)について，
      </p>
      <div class="math-block">
        \\[
        (a+b)^n={}_nC_0a^n+{}_nC_1a^{n-1}b+{}_nC_2a^{n-2}b^2+\\cdots+{}_nC_nb^n
        \\]
      </div>
      <p>
        が成り立つ．これを二項定理という．
      </p>
      <h3>理由</h3>
      <p>
        \\((a+b)^n\\)は，
      </p>
      <div class="math-block">
        \\[
        (a+b)(a+b)\\cdots(a+b)
        \\]
      </div>
      <p>
        のように\\(n\\)個の\\((a+b)\\)の積である．展開したとき，\\(a^{n-r}b^r\\)の項は，\\(n\\)個のかっこのうち\\(r\\)個から\\(b\\)を選び，残りから\\(a\\)を選ぶことで生じる．その選び方は\\({}_nC_r\\)通りである．
      </p>
      <p>
        したがって，\\(a^{n-r}b^r\\)の係数は\\({}_nC_r\\)である．
      </p>
    `,
    relatedIds: ["kumiawase", "tenkai"]
  },
  {
    id: "kakuritsu",
    term: "確率",
    kana: "かくりつ",
    yomi: "kakuritsu",
    group: "か",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "ある事象が起こる可能性の大きさを表す数．",
    description: "ある事象が起こる可能性の大きさを表す数．",
    bodyHtml: `
      <p>
        ある事象が起こる可能性の大きさを表す数を確率という．
      </p>
      <p>
        同様に確からしい\\(n\\)通りの結果のうち，事象\\(A\\)が起こる場合が\\(a\\)通りあるとき，事象\\(A\\)の確率は，
      </p>
      <div class="math-block">
        \\[
        P(A)=\\frac{a}{n}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        確率は\\(0\\)以上\\(1\\)以下の値をとる．
      </p>
    `,
    relatedIds: ["jishou", "konshoujishou", "zenshishou"]
  },
  {
    id: "shikou",
    term: "試行",
    kana: "しこう",
    yomi: "shikou",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "結果が偶然によって決まる実験や操作．",
    description: "結果が偶然によって決まる実験や操作．",
    bodyHtml: `
      <p>
        結果が偶然によって決まる実験や操作を試行という．
      </p>
      <p>
        たとえば，さいころを1回投げること，硬貨を1回投げること，くじを1本引くことなどは試行である．
      </p>
    `,
    relatedIds: ["jishou", "kakuritsu"]
  },
  {
    id: "jishou",
    term: "事象",
    kana: "じしょう",
    yomi: "jishou",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "試行の結果として起こる事柄．",
    description: "試行の結果として起こる事柄．",
    bodyHtml: `
      <p>
        試行の結果として起こる事柄を事象という．
      </p>
      <p>
        たとえば，さいころを1回投げる試行において，「偶数の目が出る」という事象は，
      </p>
      <div class="math-block">
        \\[
        \\{2,4,6\\}
        \\]
      </div>
      <p>
        と表せる．
      </p>
      <p>
        事象は，根元事象の集合として考えることができる．
      </p>
    `,
    relatedIds: ["shikou", "konshoujishou", "zenshishou", "kakuritsu"]
  },
  {
    id: "konshoujishou",
    term: "根元事象",
    kana: "こんげんじしょう",
    yomi: "konshoujishou",
    group: "こ",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "それ以上細かく分けない，試行の1つ1つの結果．",
    description: "それ以上細かく分けない，試行の1つ1つの結果．",
    bodyHtml: `
      <p>
        それ以上細かく分けない，試行の1つ1つの結果を根元事象という．
      </p>
      <p>
        たとえば，さいころを1回投げる試行では，\\(1\\)の目が出る，\\(2\\)の目が出る，\\(3\\)の目が出る，というそれぞれの結果が根元事象である．
      </p>
      <p>
        根元事象がすべて同様に確からしいとき，確率は場合の数の比で求められる．
      </p>
    `,
    relatedIds: ["jishou", "zenshishou", "kakuritsu"]
  },
  {
    id: "zenshishou",
    term: "全事象",
    kana: "ぜんじしょう",
    yomi: "zenshishou",
    group: "せ",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "試行で起こりうるすべての結果からなる事象．",
    description: "試行で起こりうるすべての結果からなる事象．",
    bodyHtml: `
      <p>
        試行で起こりうるすべての結果からなる事象を全事象という．
      </p>
      <p>
        さいころを1回投げる試行では，全事象は，
      </p>
      <div class="math-block">
        \\[
        \\{1,2,3,4,5,6\\}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        全事象の確率は\\(1\\)である．
      </p>
    `,
    relatedIds: ["jishou", "kuujishou", "yojishou"]
  },
  {
    id: "kuujishou",
    term: "空事象",
    kana: "くうじしょう",
    yomi: "kuujishou",
    group: "く",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "決して起こらない事象．",
    description: "決して起こらない事象．",
    bodyHtml: `
      <p>
        決して起こらない事象を空事象という．
      </p>
      <p>
        空事象は空集合\\(\\varnothing\\)で表され，その確率は\\(0\\)である．
      </p>
      <p>
        たとえば，さいころを1回投げる試行で「7の目が出る」という事象は空事象である．
      </p>
    `,
    relatedIds: ["jishou", "zenshishou"]
  },
  {
    id: "yojishou",
    term: "余事象",
    kana: "よじしょう",
    yomi: "yojishou",
    group: "よ",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "ある事象が起こらないという事象．",
    description: "ある事象が起こらないという事象．",
    bodyHtml: `
      <p>
        全事象\\(U\\)の中で，事象\\(A\\)が起こらないという事象を，\\(A\\)の余事象という．
      </p>
      <p>
        事象\\(A\\)の余事象を\\(\\overline{A}\\)で表すと，
      </p>
      <div class="math-block">
        \\[
        P(\\overline{A})=1-P(A)
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        「少なくとも1回起こる」確率を求めるとき，余事象を使うと考えやすいことが多い．
      </p>
    `,
    relatedIds: ["jishou", "kakuritsu", "zenshishou"]
  },
  {
    id: "haihanjishou",
    term: "排反事象",
    kana: "はいはんじしょう",
    yomi: "haihanjishou",
    group: "は",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "同時には起こらない2つの事象．",
    description: "同時には起こらない2つの事象．",
    bodyHtml: `
      <p>
        2つの事象\\(A\\)，\\(B\\)が同時には起こらないとき，\\(A\\)と\\(B\\)は排反であるという．このような事象を排反事象という．
      </p>
      <p>
        集合で考えると，排反であることは，
      </p>
      <div class="math-block">
        \\[
        A\\cap B=\\varnothing
        \\]
      </div>
      <p>
        と表せる．
      </p>
      <p>
        排反事象では，
      </p>
      <div class="math-block">
        \\[
        P(A\\cup B)=P(A)+P(B)
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["wajishou", "sekijishou", "kakuritsu_no_kahou_teiri"]
  },
  {
    id: "wajishou",
    term: "和事象",
    kana: "わじしょう",
    yomi: "wajishou",
    group: "わ",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "2つの事象の少なくとも一方が起こる事象．",
    description: "2つの事象の少なくとも一方が起こる事象．",
    bodyHtml: `
      <p>
        事象\\(A\\)，\\(B\\)について，\\(A\\)または\\(B\\)が起こる事象を和事象という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        A\\cup B
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        確率では，\\(A\\)と\\(B\\)の少なくとも一方が起こる確率を考えるときに使う．
      </p>
    `,
    relatedIds: ["sekijishou", "kakuritsu_no_kahou_teiri"]
  },
  {
    id: "sekijishou",
    term: "積事象",
    kana: "せきじしょう",
    yomi: "sekijishou",
    group: "せ",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "2つの事象がともに起こる事象．",
    description: "2つの事象がともに起こる事象．",
    bodyHtml: `
      <p>
        事象\\(A\\)，\\(B\\)について，\\(A\\)と\\(B\\)がともに起こる事象を積事象という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        A\\cap B
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["wajishou", "kakuritsu_no_kahou_teiri", "joukentsuki_kakuritsu"]
  },
  {
    id: "kakuritsu_no_kahou_teiri",
    term: "確率の加法定理",
    kana: "かくりつのかほうていり",
    yomi: "kakuritsu_no_kahou_teiri",
    group: "か",
    type: "定理",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "和事象の確率を，それぞれの確率と共通部分の確率から求める定理．",
    description: "和事象の確率を，それぞれの確率と共通部分の確率から求める定理．",
    bodyHtml: `
      <p>
        2つの事象\\(A\\)，\\(B\\)について，
      </p>
      <div class="math-block">
        \\[
        P(A\\cup B)=P(A)+P(B)-P(A\\cap B)
        \\]
      </div>
      <p>
        が成り立つ．これを確率の加法定理という．
      </p>
      <p>
        特に，\\(A\\)と\\(B\\)が排反であるとき，\\(P(A\\cap B)=0\\)なので，
      </p>
      <div class="math-block">
        \\[
        P(A\\cup B)=P(A)+P(B)
        \\]
      </div>
      <p>
        となる．
      </p>
      <h3>理由</h3>
      <p>
        \\(P(A)+P(B)\\)とすると，\\(A\\)と\\(B\\)の両方が起こる部分，つまり\\(A\\cap B\\)を2回数えてしまう．そこで，重複して数えた分\\(P(A\\cap B)\\)を1回ひく必要がある．
      </p>
    `,
    relatedIds: ["wajishou", "sekijishou", "haihanjishou"]
  },
  {
    id: "dokuritsu",
    term: "独立",
    kana: "どくりつ",
    yomi: "dokuritsu",
    group: "と",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "一方の事象が起こることが，他方の事象の起こりやすさに影響しないこと．",
    description: "一方の事象が起こることが，他方の事象の起こりやすさに影響しないこと．",
    bodyHtml: `
      <p>
        一方の事象が起こることが，他方の事象の起こりやすさに影響しないとき，2つの事象は独立であるという．
      </p>
      <p>
        事象\\(A\\)，\\(B\\)が独立であるとき，
      </p>
      <div class="math-block">
        \\[
        P(A\\cap B)=P(A)P(B)
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        たとえば，硬貨を2回投げるとき，1回目に表が出ることと，2回目に表が出ることは独立である．
      </p>
    `,
    relatedIds: ["hanpuku_shikou", "sekijishou", "joukentsuki_kakuritsu"]
  },
  {
    id: "hanpuku_shikou",
    term: "反復試行",
    kana: "はんぷくしこう",
    yomi: "hanpuku_shikou",
    group: "は",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "同じ条件の試行をくり返し行うこと．",
    description: "同じ条件の試行をくり返し行うこと．",
    bodyHtml: `
      <p>
        同じ条件の試行をくり返し行うことを反復試行という．
      </p>
      <p>
        1回の試行で事象\\(A\\)が起こる確率を\\(p\\)とする．この試行を\\(n\\)回くり返すとき，ちょうど\\(r\\)回\\(A\\)が起こる確率は，
      </p>
      <div class="math-block">
        \\[
        {}_nC_rp^r(1-p)^{n-r}
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>理由</h3>
      <p>
        \\(n\\)回のうち，\\(A\\)が起こる\\(r\\)回を選ぶ方法は\\({}_nC_r\\)通りである．その1つの並びについて，\\(A\\)が\\(r\\)回起こり，\\(A\\)が起こらないことが\\(n-r\\)回起こる確率は，
      </p>
      <div class="math-block">
        \\[
        p^r(1-p)^{n-r}
        \\]
      </div>
      <p>
        である．よって，全体の確率は，
      </p>
      <div class="math-block">
        \\[
        {}_nC_rp^r(1-p)^{n-r}
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["dokuritsu", "kumiawase", "kakuritsu"]
  },
  {
    id: "joukentsuki_kakuritsu",
    term: "条件付き確率",
    kana: "じょうけんつきかくりつ",
    yomi: "joukentsuki_kakuritsu",
    group: "し",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "ある事象が起こったという条件のもとで，別の事象が起こる確率．",
    description: "ある事象が起こったという条件のもとで，別の事象が起こる確率．",
    bodyHtml: `
      <p>
        ある事象\\(A\\)が起こったという条件のもとで，事象\\(B\\)が起こる確率を条件付き確率という．
      </p>
      <p>
        \\(P(A)>0\\)のとき，\\(A\\)が起こったもとで\\(B\\)が起こる条件付き確率は，
      </p>
      <div class="math-block">
        \\[
        P_A(B)=\\frac{P(A\\cap B)}{P(A)}
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        条件付き確率では，全事象が「\\(A\\)が起こった場合」に縮まっていると考える．
      </p>
    `,
    relatedIds: ["sekijishou", "dokuritsu", "kakuritsu"]
  },
  {
    id: "kitai_chi",
    term: "期待値",
    kana: "きたいち",
    yomi: "kitai_chi",
    group: "き",
    type: "定義",
    subject: "数学A",
    unit: "場合の数と確率",
    unitIds: ["mathA_counting_and_probability"],
    shortDescription: "確率を重みとして考えた平均値．",
    description: "確率を重みとして考えた平均値．",
    bodyHtml: `
      <p>
        確率を重みとして考えた平均値を期待値という．
      </p>
      <p>
        ある数量\\(X\\)が値\\(x_1,x_2,\\cdots,x_n\\)をとり，それぞれの確率が\\(p_1,p_2,\cdots,p_n\\)であるとき，期待値\\(E(X)\\)は，
      </p>
      <div class="math-block">
        \\[
        E(X)=x_1p_1+x_2p_2+\\cdots+x_np_n
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        期待値は，1回の結果を予言する値ではなく，同じ試行を多くくり返したときの平均的な値を表す．
      </p>
    `,
    relatedIds: ["kakuritsu", "heikinchi"]
  }
);
