window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "suuretsu",
    term: "数列",
    kana: "すうれつ",
    yomi: "suuretsu",
    group: "す",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数を一定の順序で並べたもの．",
    description: "数を一定の順序で並べたもの．",
    bodyHtml: `
      <p>
        数を一定の順序で並べたものを数列という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2,4,6,8,10,\\cdots
        \\]
      </div>
      <p>
        は数列である．
      </p>
      <p>
        数列では，並んでいるそれぞれの数を項という．前から\\(n\\)番目の項を第\\(n\\)項といい，ふつう\\(a_n\\)で表す．
      </p>
    `,
    relatedIds: ["kou_suuretsu", "dai_n_kou", "ippankou"]
  },
  {
    id: "kou_suuretsu",
    term: "項（数列）",
    kana: "こう",
    yomi: "kou_suuretsu",
    group: "こ",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数列に並んでいる1つ1つの数．",
    description: "数列に並んでいる1つ1つの数．",
    bodyHtml: `
      <p>
        数列に並んでいる1つ1つの数を項という．
      </p>
      <p>
        数列
      </p>
      <div class="math-block">
        \\[
        3,6,9,12,\\cdots
        \\]
      </div>
      <p>
        では，\\(3\\)，\\(6\\)，\\(9\\)，\\(12\\)などが項である．
      </p>
      <p>
        前から\\(n\\)番目の項を第\\(n\\)項という．
      </p>
    `,
    relatedIds: ["suuretsu", "dai_n_kou", "ippankou"]
  },
  {
    id: "dai_n_kou",
    term: "第n項",
    kana: "だいえぬこう",
    yomi: "dai_n_kou",
    group: "た",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数列で，前から\\(n\\)番目にある項．",
    description: "数列で，前から\\(n\\)番目にある項．",
    bodyHtml: `
      <p>
        数列で，前から\\(n\\)番目にある項を第\\(n\\)項という．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)の第\\(n\\)項は，ふつう\\(a_n\\)と表す．
      </p>
      <p>
        たとえば，\\(a_n=2n+1\\)で定められる数列では，第\\(3\\)項は，
      </p>
      <div class="math-block">
        \\[
        a_3=2\\cdot 3+1=7
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["suuretsu", "kou_suuretsu", "ippankou"]
  },
  {
    id: "ippankou",
    term: "一般項",
    kana: "いっぱんこう",
    yomi: "ippankou",
    group: "い",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数列の第\\(n\\)項を，\\(n\\)を用いて表した式．",
    description: "数列の第\\(n\\)項を，\\(n\\)を用いて表した式．",
    bodyHtml: `
      <p>
        数列の第\\(n\\)項を，\\(n\\)を用いて表した式を一般項という．
      </p>
      <p>
        たとえば，数列
      </p>
      <div class="math-block">
        \\[
        2,4,6,8,\\cdots
        \\]
      </div>
      <p>
        の一般項は，
      </p>
      <div class="math-block">
        \\[
        a_n=2n
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        一般項が分かると，任意の番号の項を直接求めることができる．
      </p>
    `,
    relatedIds: ["suuretsu", "dai_n_kou", "zenkasiki"]
  },
  {
    id: "syokou",
    term: "初項",
    kana: "しょこう",
    yomi: "syokou",
    group: "し",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数列の最初の項．",
    description: "数列の最初の項．",
    bodyHtml: `
      <p>
        数列の最初の項を初項という．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)では，初項は\\(a_1\\)である．
      </p>
      <p>
        たとえば，数列
      </p>
      <div class="math-block">
        \\[
        5,8,11,14,\\cdots
        \\]
      </div>
      <p>
        の初項は\\(5\\)である．
      </p>
    `,
    relatedIds: ["suuretsu", "tousa_suuretsu", "touhi_suuretsu"]
  },
  {
    id: "tousa_suuretsu",
    term: "等差数列",
    kana: "とうさすうれつ",
    yomi: "tousa_suuretsu",
    group: "と",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "隣り合う2つの項の差が一定である数列．",
    description: "隣り合う2つの項の差が一定である数列．",
    bodyHtml: `
      <p>
        隣り合う2つの項の差が一定である数列を等差数列という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        3,7,11,15,\\cdots
        \\]
      </div>
      <p>
        は，隣り合う項の差が常に\\(4\\)であるから，等差数列である．
      </p>
      <p>
        初項を\\(a\\)，公差を\\(d\\)とすると，一般項は，
      </p>
      <div class="math-block">
        \\[
        a_n=a+(n-1)d
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kousa", "tousa_chuukou", "tousa_suuretsu_no_wa"]
  },
  {
    id: "kousa",
    term: "公差",
    kana: "こうさ",
    yomi: "kousa",
    group: "こ",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "等差数列で，隣り合う2つの項の差として一定になる値．",
    description: "等差数列で，隣り合う2つの項の差として一定になる値．",
    bodyHtml: `
      <p>
        等差数列で，隣り合う2つの項の差として一定になる値を公差という．
      </p>
      <p>
        等差数列\\(\\{a_n\\}\\)の公差を\\(d\\)とすると，
      </p>
      <div class="math-block">
        \\[
        a_{n+1}-a_n=d
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        たとえば，数列\\(2,5,8,11,\\cdots\\)の公差は\\(3\\)である．
      </p>
    `,
    relatedIds: ["tousa_suuretsu"]
  },
  {
    id: "tousa_chuukou",
    term: "等差中項",
    kana: "とうさちゅうこう",
    yomi: "tousa_chuukou",
    group: "と",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "3つの数が等差数列をなすときの中央の数．",
    description: "3つの数が等差数列をなすときの中央の数．",
    bodyHtml: `
      <p>
        3つの数\\(a,b,c\\)がこの順に等差数列をなすとき，中央の数\\(b\\)を等差中項という．
      </p>
      <p>
        このとき，
      </p>
      <div class="math-block">
        \\[
        b-a=c-b
        \\]
      </div>
      <p>
        であるから，
      </p>
      <div class="math-block">
        \\[
        b=\\frac{a+c}{2}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["tousa_suuretsu", "kousa"]
  },
  {
    id: "tousa_suuretsu_no_wa",
    term: "等差数列の和",
    kana: "とうさすうれつのわ",
    yomi: "tousa_suuretsu_no_wa",
    group: "と",
    type: "公式",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "等差数列の初項から第\\(n\\)項までの和を求める公式．",
    description: "等差数列の初項から第\\(n\\)項までの和を求める公式．",
    bodyHtml: `
      <p>
        初項\\(a\\)，末項\\(l\\)，項数\\(n\\)の等差数列の和\\(S_n\\)は，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{n(a+l)}{2}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        初項\\(a\\)，公差\\(d\\)，項数\\(n\\)で表すと，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{n}{2}\\{2a+(n-1)d\\}
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>証明</h3>
      <p>
        等差数列の和を
      </p>
      <div class="math-block">
        \\[
        S_n=a+(a+d)+(a+2d)+\\cdots +l
        \\]
      </div>
      <p>
        とする．これを逆順にも書くと，
      </p>
      <div class="math-block">
        \\[
        S_n=l+(l-d)+(l-2d)+\\cdots +a
        \\]
      </div>
      <p>
        である．辺々をたすと，それぞれの組の和が\\(a+l\\)になるので，
      </p>
      <div class="math-block">
        \\[
        2S_n=n(a+l)
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{n(a+l)}{2}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["tousa_suuretsu", "kousa", "wa_suuretsu"]
  },
  {
    id: "touhi_suuretsu",
    term: "等比数列",
    kana: "とうひすうれつ",
    yomi: "touhi_suuretsu",
    group: "と",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "隣り合う2つの項の比が一定である数列．",
    description: "隣り合う2つの項の比が一定である数列．",
    bodyHtml: `
      <p>
        隣り合う2つの項の比が一定である数列を等比数列という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2,6,18,54,\\cdots
        \\]
      </div>
      <p>
        は，前の項に常に\\(3\\)をかけることで次の項が得られるので，等比数列である．
      </p>
      <p>
        初項を\\(a\\)，公比を\\(r\\)とすると，一般項は，
      </p>
      <div class="math-block">
        \\[
        a_n=ar^{n-1}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kouhi", "touhi_chuukou", "touhi_suuretsu_no_wa"]
  },
  {
    id: "kouhi",
    term: "公比",
    kana: "こうひ",
    yomi: "kouhi",
    group: "こ",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "等比数列で，前の項にかける一定の値．",
    description: "等比数列で，前の項にかける一定の値．",
    bodyHtml: `
      <p>
        等比数列で，前の項にかける一定の値を公比という．
      </p>
      <p>
        等比数列\\(\\{a_n\\}\\)の公比を\\(r\\)とすると，
      </p>
      <div class="math-block">
        \\[
        a_{n+1}=ra_n
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        たとえば，数列\\(3,6,12,24,\\cdots\\)の公比は\\(2\\)である．
      </p>
    `,
    relatedIds: ["touhi_suuretsu"]
  },
  {
    id: "touhi_chuukou",
    term: "等比中項",
    kana: "とうひちゅうこう",
    yomi: "touhi_chuukou",
    group: "と",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "3つの数が等比数列をなすときの中央の数．",
    description: "3つの数が等比数列をなすときの中央の数．",
    bodyHtml: `
      <p>
        3つの数\\(a,b,c\\)がこの順に等比数列をなすとき，中央の数\\(b\\)を等比中項という．
      </p>
      <p>
        \\(a\\ne 0\\)，\\(b\\ne 0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{b}{a}=\\frac{c}{b}
        \\]
      </div>
      <p>
        であるから，
      </p>
      <div class="math-block">
        \\[
        b^2=ac
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["touhi_suuretsu", "kouhi"]
  },
  {
    id: "touhi_suuretsu_no_wa",
    term: "等比数列の和",
    kana: "とうひすうれつのわ",
    yomi: "touhi_suuretsu_no_wa",
    group: "と",
    type: "公式",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "等比数列の初項から第\\(n\\)項までの和を求める公式．",
    description: "等比数列の初項から第\\(n\\)項までの和を求める公式．",
    bodyHtml: `
      <p>
        初項\\(a\\)，公比\\(r\\)の等比数列の初項から第\\(n\\)項までの和\\(S_n\\)は，\\(r\\ne 1\\)のとき，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{a(1-r^n)}{1-r}
        \\]
      </div>
      <p>
        である．また，\\(r=1\\)のときは，
      </p>
      <div class="math-block">
        \\[
        S_n=na
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>証明</h3>
      <p>
        \\(r\\ne 1\\)とし，
      </p>
      <div class="math-block">
        \\[
        S_n=a+ar+ar^2+\\cdots+ar^{n-1}
        \\]
      </div>
      <p>
        とする．両辺に\\(r\\)をかけると，
      </p>
      <div class="math-block">
        \\[
        rS_n=ar+ar^2+\\cdots+ar^{n-1}+ar^n
        \\]
      </div>
      <p>
        である．辺々をひくと，
      </p>
      <div class="math-block">
        \\[
        S_n-rS_n=a-ar^n
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        (1-r)S_n=a(1-r^n)
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        S_n=\\frac{a(1-r^n)}{1-r}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["touhi_suuretsu", "kouhi", "wa_suuretsu"]
  },
  {
    id: "wa_suuretsu",
    term: "和（数列）",
    kana: "わ",
    yomi: "wa_suuretsu",
    group: "わ",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "数列のいくつかの項をたし合わせたもの．",
    description: "数列のいくつかの項をたし合わせたもの．",
    bodyHtml: `
      <p>
        数列のいくつかの項をたし合わせたものを，数列の和という．
      </p>
      <p>
        数列\\(\\{a_n\\}\\)の初項から第\\(n\\)項までの和を，ふつう\\(S_n\\)で表す．
      </p>
      <div class="math-block">
        \\[
        S_n=a_1+a_2+\\cdots+a_n
        \\]
      </div>
    `,
    relatedIds: ["sigma", "tousa_suuretsu_no_wa", "touhi_suuretsu_no_wa"]
  },
  {
    id: "sigma",
    term: "シグマ",
    kana: "しぐま",
    yomi: "sigma",
    group: "し",
    type: "記法",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "和を表す記号\\(\\sum\\)のこと．",
    description: "和を表す記号\\(\\sum\\)のこと．",
    bodyHtml: `
      <p>
        和を表す記号\\(\\sum\\)をシグマという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n} a_k
        \\]
      </div>
      <p>
        は，
      </p>
      <div class="math-block">
        \\[
        a_1+a_2+\\cdots+a_n
        \\]
      </div>
      <p>
        を表す．
      </p>
      <p>
        シグマを用いると，たくさんの項の和を簡潔に表すことができる．
      </p>
    `,
    relatedIds: ["wa_suuretsu", "sigma_no_seishitsu"]
  },
  {
    id: "sigma_no_seishitsu",
    term: "シグマの性質",
    kana: "しぐまのせいしつ",
    yomi: "sigma_no_seishitsu",
    group: "し",
    type: "性質",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "シグマ記号で表された和を計算するときに使う基本性質．",
    description: "シグマ記号で表された和を計算するときに使う基本性質．",
    bodyHtml: `
      <p>
        シグマ記号について，次の性質が成り立つ．
      </p>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n}(a_k+b_k)=\\sum_{k=1}^{n}a_k+\\sum_{k=1}^{n}b_k
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n}ca_k=c\\sum_{k=1}^{n}a_k
        \\]
      </div>
      <p>
        ただし，\\(c\\)は定数である．
      </p>
      <p>
        また，代表的な和として，
      </p>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n}k=\\frac{1}{2}n(n+1)
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n}k^2=\\frac{1}{6}n(n+1)(2n+1)
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sum_{k=1}^{n}k^3=\\left\\{\\frac{1}{2}n(n+1)\\right\\}^2
        \\]
      </div>
      <p>
        がある．
      </p>
    `,
    relatedIds: ["sigma", "wa_suuretsu"]
  },
  {
    id: "kaisa_suuretsu",
    term: "階差数列",
    kana: "かいさすうれつ",
    yomi: "kaisa_suuretsu",
    group: "か",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "隣り合う項の差を順に並べてできる数列．",
    description: "隣り合う項の差を順に並べてできる数列．",
    bodyHtml: `
      <p>
        数列\\(\\{a_n\\}\\)に対して，隣り合う項の差
      </p>
      <div class="math-block">
        \\[
        a_{n+1}-a_n
        \\]
      </div>
      <p>
        を順に並べてできる数列を階差数列という．
      </p>
      <p>
        階差数列を\\(\\{b_n\\}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        b_n=a_{n+1}-a_n
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        階差数列が分かると，
      </p>
      <div class="math-block">
        \\[
        a_n=a_1+\\sum_{k=1}^{n-1}b_k
        \\]
      </div>
      <p>
        によって，もとの数列の一般項を求められる．
      </p>
    `,
    relatedIds: ["suuretsu", "ippankou", "sigma"]
  },
  {
    id: "zenkasiki",
    term: "漸化式",
    kana: "ぜんかしき",
    yomi: "zenkasiki",
    group: "せ",
    type: "定義",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "前の項との関係によって数列を定める式．",
    description: "前の項との関係によって数列を定める式．",
    bodyHtml: `
      <p>
        数列の項どうしの関係を表し，前の項などから次の項を定める式を漸化式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        a_1=1,\\quad a_{n+1}=a_n+2
        \\]
      </div>
      <p>
        は漸化式である．この場合，数列は
      </p>
      <div class="math-block">
        \\[
        1,3,5,7,\\cdots
        \\]
      </div>
      <p>
        となる．
      </p>
      <p>
        漸化式では，初項などの初期条件と，項どうしの関係式が必要である．
      </p>
    `,
    relatedIds: ["suuretsu", "ippankou", "tokusei_houteishiki"]
  },
  {
    id: "tokusei_houteishiki",
    term: "特性方程式",
    kana: "とくせいほうていしき",
    yomi: "tokusei_houteishiki",
    group: "と",
    type: "用語",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "漸化式を変形して，一定値や基本形を見つけるために使う方程式．",
    description: "漸化式を変形して，一定値や基本形を見つけるために使う方程式．",
    bodyHtml: `
      <p>
        漸化式を解くとき，一定値や基本形を見つけるために作る方程式を特性方程式ということがある．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        a_{n+1}=pa_n+q
        \\]
      </div>
      <p>
        の形の漸化式では，\\(a_{n+1}\\)と\\(a_n\\)が同じ値\\(\\alpha\\)になると考えて，
      </p>
      <div class="math-block">
        \\[
        \\alpha=p\\alpha+q
        \\]
      </div>
      <p>
        を解く．この\\(\\alpha\\)を用いると，
      </p>
      <div class="math-block">
        \\[
        a_{n+1}-\\alpha=p(a_n-\alpha)
        \\]
      </div>
      <p>
        の形に変形できる．
      </p>
    `,
    relatedIds: ["zenkasiki", "touhi_suuretsu"]
  },
  {
    id: "suugakuteki_kinouhou",
    term: "数学的帰納法",
    kana: "すうがくてききのうほう",
    yomi: "suugakuteki_kinouhou",
    group: "す",
    type: "証明法",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "自然数に関する命題を，最初の場合と次の場合へのつながりで証明する方法．",
    description: "自然数に関する命題を，最初の場合と次の場合へのつながりで証明する方法．",
    bodyHtml: `
      <p>
        自然数\\(n\\)に関する命題を証明するとき，まず\\(n=1\\)の場合を示し，次に\\(n=k\\)の場合に成り立つと仮定して\\(n=k+1\\)の場合にも成り立つことを示す方法を，数学的帰納法という．
      </p>
      <p>
        数学的帰納法では，次の2つを示す．
      </p>
      <ul>
        <li>はじめの値，たとえば\\(n=1\\)で命題が成り立つこと．</li>
        <li>\\(n=k\\)で成り立つと仮定すると，\\(n=k+1\\)でも成り立つこと．</li>
      </ul>
      <p>
        この2つが示されれば，命題はすべての自然数\\(n\\)について成り立つ．
      </p>
      <h3>なぜ証明できるのか</h3>
      <p>
        まず\\(n=1\\)で成り立つ．さらに，\\(n=1\\)で成り立つなら\\(n=2\\)で成り立つ．\\(n=2\\)で成り立つなら\\(n=3\\)で成り立つ．このようにして，命題の成立が次々に伝わっていくため，すべての自然数について成り立つといえる．
      </p>
    `,
    relatedIds: ["shizensuu", "meidai", "suuretsu"]
  },
  {
    id: "gun_suuretsu",
    term: "群数列",
    kana: "ぐんすうれつ",
    yomi: "gun_suuretsu",
    group: "く",
    type: "用語",
    subject: "数学B",
    unit: "数列",
    unitIds: ["mathB_sequences"],
    shortDescription: "項をいくつかの群に分けて考える数列．",
    description: "項をいくつかの群に分けて考える数列．",
    bodyHtml: `
      <p>
        項をいくつかの群に分けて考える数列を，群数列という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        1\\mid 2,3\\mid 4,5,6\\mid 7,8,9,10\\mid\\cdots
        \\]
      </div>
      <p>
        のように，第1群，第2群，第3群，\\(\\cdots\\)と分けて考える数列がある．
      </p>
      <p>
        群数列では，各群の項数や，ある項が何群目に属するかを調べることが重要である．
      </p>
    `,
    relatedIds: ["suuretsu", "sigma"]
  }
);
