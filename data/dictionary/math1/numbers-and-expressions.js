window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "tenkai",
    term: "展開",
    kana: "てんかい",
    yomi: "tenkai",
    group: "て",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "かっこのある式を，かっこのない形に変形すること．",
    description: "かっこのある式を，分配法則などを用いて，かっこのない形に変形すること．",
    bodyHtml: `
      <p>
        かっこのある式を，分配法則などを用いて，かっこのない形に変形することを展開という．
      </p>
      <p>
        たとえば，\\((x+2)(x+3)\\)を展開すると，\\(x^2+5x+6\\)となる．
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        (x+2)(x+3)
        &=x^2+3x+2x+6 \\\\
        &=x^2+5x+6
        \\end{aligned}
        \\]
      </div>
    `,
    relatedIds: ["insubunkai", "bunpaihousoku", "seishiki", "kou"]
  },
  {
    id: "insubunkai",
    term: "因数分解",
    kana: "いんすうぶんかい",
    yomi: "insubunkai",
    group: "い",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "多項式を，いくつかの因数の積の形に変形すること．",
    description: "多項式を，いくつかの因数の積の形に変形すること．",
    bodyHtml: `
      <p>
        多項式を，いくつかの因数の積の形に変形することを因数分解という．
      </p>
      <p>
        たとえば，\\(x^2+5x+6\\)を\\((x+2)(x+3)\\)のような積の形に変形することが因数分解である．
      </p>
      <div class="math-block">
        \\[
        x^2+5x+6=(x+2)(x+3)
        \\]
      </div>
      <p>
        展開と因数分解は，互いに逆向きの変形である．
      </p>
    `,
    relatedIds: ["tenkai", "insuu", "seishiki", "tajoushiki", "kyoutsuuinsuu", "tasukigake"]
  },
  {
    id: "insuu",
    term: "因数",
    kana: "いんすう",
    yomi: "insuu",
    group: "い",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "積の形で表された式や数をつくっている，それぞれのかけ算の要素．",
    description: "積の形で表された式や数をつくっている，それぞれのかけ算の要素．",
    bodyHtml: `
      <p>
        積の形で表された式や数をつくっている，それぞれのかけ算の要素を因数という．
      </p>
      <p>
        たとえば，\\((x+2)(x+3)\\)において，\\(x+2\\)と\\(x+3\\)は因数である．
      </p>
      <p>
        また，\\(12=3\\cdot 4\\)と表せるので，\\(3\\)と\\(4\\)は\\(12\\)の因数である．
      </p>
    `,
    relatedIds: ["insubunkai", "kyoutsuuinsuu"]
  },
  {
    id: "tanjoushiki",
    term: "単項式",
    kana: "たんこうしき",
    yomi: "tanjoushiki",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "数や文字の積だけでできている式．",
    description: "数や文字の積だけでできている式．",
    bodyHtml: `
      <p>
        数や文字の積だけでできている式を単項式という．
      </p>
      <p>
        たとえば，\\(3x\\)，\\(-2ab\\)，\\(5x^2y\\)は単項式である．
      </p>
      <p>
        ただし，\\(x+1\\)のように和の形になっている式は，単項式ではない．
      </p>
    `,
    relatedIds: ["tajoushiki", "kou", "keisuu", "jisu"]
  },
  {
    id: "tajoushiki",
    term: "多項式",
    kana: "たこうしき",
    yomi: "tajoushiki",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "単項式の和として表される式．",
    description: "単項式の和として表される式．",
    bodyHtml: `
      <p>
        単項式の和として表される式を多項式という．
      </p>
      <p>
        たとえば，\\(x^2+5x+6\\)は，\\(x^2\\)，\\(5x\\)，\\(6\\)という単項式の和であるから，多項式である．
      </p>
      <p>
        多項式を構成しているそれぞれの単項式を，その多項式の項という．
      </p>
    `,
    relatedIds: ["tanjoushiki", "kou", "seishiki", "doukoukou"]
  },
  {
    id: "seishiki",
    term: "整式",
    kana: "せいしき",
    yomi: "seishiki",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字について，単項式や多項式として表される式．",
    description: "文字について，単項式や多項式として表される式．",
    bodyHtml: `
      <p>
        文字について，単項式や多項式として表される式を整式という．
      </p>
      <p>
        たとえば，\\(x^2+3x+2\\)，\\(2a^2b-5ab+1\\)は整式である．
      </p>
      <p>
        一方，\\(\\frac{1}{x}\\)のように，文字を含む式で割っているものは，\\(x\\)についての整式ではない．
      </p>
    `,
    relatedIds: ["tanjoushiki", "tajoushiki", "kou", "jisu", "teisuukou"]
  },
  {
    id: "kou",
    term: "項",
    kana: "こう",
    yomi: "kou",
    group: "こ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "多項式を和の形でみたときの，それぞれの単項式．",
    description: "多項式を和の形でみたときの，それぞれの単項式．",
    bodyHtml: `
      <p>
        多項式を和の形でみたとき，それぞれの単項式を項という．
      </p>
      <p>
        たとえば，\\(3x^2-2x+5\\)の項は，\\(3x^2\\)，\\(-2x\\)，\\(5\\)である．
      </p>
      <p>
        符号も含めて項をみることに注意する．
      </p>
    `,
    relatedIds: ["tanjoushiki", "tajoushiki", "doukoukou", "keisuu", "teisuukou"]
  },
  {
    id: "keisuu",
    term: "係数",
    kana: "けいすう",
    yomi: "keisuu",
    group: "け",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字の部分にかけられている数．",
    description: "文字の部分にかけられている数．",
    bodyHtml: `
      <p>
        文字の部分にかけられている数を係数という．
      </p>
      <p>
        たとえば，\\(3x^2\\)では，\\(x^2\\)の係数は\\(3\\)である．
      </p>
      <p>
        また，\\(-5ab\\)では，\\(ab\\)の係数は\\(-5\\)である．
      </p>
    `,
    relatedIds: ["kou", "tanjoushiki", "jisu"]
  },
  {
    id: "jisu",
    term: "次数",
    kana: "じすう",
    yomi: "jisu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "単項式や多項式において，文字が何回かけられているかを表す数．",
    description: "単項式や多項式において，文字が何回かけられているかを表す数．",
    bodyHtml: `
      <p>
        単項式において，文字が何回かけられているかを表す数を次数という．
      </p>
      <p>
        たとえば，\\(5x^3\\)の次数は\\(3\\)であり，\\(-2a^2b\\)の次数は\\(3\\)である．
      </p>
      <p>
        多項式の次数は，その多項式に含まれる項の次数のうち，最も大きいものをいう．
      </p>
      <p>
        たとえば，\\(x^3+2x^2-1\\)の次数は\\(3\\)である．
      </p>
    `,
    relatedIds: ["kou", "keisuu", "tanjoushiki", "tajoushiki", "koubeikinojun", "shoubeikinojun"]
  },
  {
    id: "doukoukou",
    term: "同類項",
    kana: "どうるいこう",
    yomi: "douruikou",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字の部分が同じである項．",
    description: "文字の部分が同じである項．",
    bodyHtml: `
      <p>
        文字の部分が同じである項を同類項という．
      </p>
      <p>
        たとえば，\\(3x^2\\)と\\(-5x^2\\)は，文字の部分がどちらも\\(x^2\\)なので同類項である．
      </p>
      <p>
        同類項は，係数を計算することで1つの項にまとめることができる．
      </p>
      <div class="math-block">
        \\[
        3x^2-5x^2=-2x^2
        \\]
      </div>
    `,
    relatedIds: ["kou", "keisuu", "tajoushiki"]
  },
  {
    id: "jissuu",
    term: "実数",
    kana: "じっすう",
    yomi: "jissuu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "数直線上の点に対応する数．",
    description: "数直線上の点に対応する数．",
    bodyHtml: `
      <p>
        数直線上の点に対応する数を実数という．
      </p>
      <p>
        実数には，有理数と無理数がある．整数，分数，小数，\\(\\sqrt{2}\\)，\\(\\pi\\)などは実数である．
      </p>
      <p>
        高校数学では，特に断らない限り，数として実数を考えることが多い．
      </p>
    `,
    relatedIds: ["yuuriisuu", "muriisuu", "suuchokusen", "seisuu", "shizensuu"]
  },
  {
    id: "seisuu",
    term: "整数",
    kana: "せいすう",
    yomi: "seisuu",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "正の整数，0，負の整数を合わせた数．",
    description: "正の整数，0，負の整数を合わせた数．",
    bodyHtml: `
      <p>
        正の整数，\\(0\\)，負の整数を合わせた数を整数という．
      </p>
      <div class="math-block">
        \\[
        \\cdots,-3,-2,-1,0,1,2,3,\\cdots
        \\]
      </div>
      <p>
        整数は有理数であり，実数でもある．たとえば，\\(3=\\frac{3}{1}\\)と表せるので，\\(3\\)は有理数である．
      </p>
    `,
    relatedIds: ["shizensuu", "yuuriisuu", "jissuu"]
  },
  {
    id: "shizensuu",
    term: "自然数",
    kana: "しぜんすう",
    yomi: "shizensuu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "ものの個数を数えるときに用いる正の整数．",
    description: "ものの個数を数えるときに用いる正の整数．",
    bodyHtml: `
      <p>
        ものの個数を数えるときに用いる正の整数を自然数という．
      </p>
      <div class="math-block">
        \\[
        1,2,3,4,\\cdots
        \\]
      </div>
      <p>
        高校数学では，特に断らない限り，\\(0\\)は自然数に含めないものとして扱うことが多い．
      </p>
    `,
    relatedIds: ["seisuu", "yuuriisuu", "jissuu"]
  },
  {
    id: "yuuriisuu",
    term: "有理数",
    kana: "ゆうりすう",
    yomi: "yuuriisuu",
    group: "ゆ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "整数\\(m\\)と\\(0\\)でない整数\\(n\\)を用いて，\\(\\frac{m}{n}\\)と表せる数．",
    description: "整数\\(m\\)と\\(0\\)でない整数\\(n\\)を用いて，\\(\\frac{m}{n}\\)と表せる数．",
    bodyHtml: `
      <p>
        整数\\(m\\)と\\(0\\)でない整数\\(n\\)を用いて，\\(\\frac{m}{n}\\)と表せる数を有理数という．
      </p>
      <p>
        たとえば，\\(3\\)，\\(-2\\)，\\(\\frac{5}{7}\\)，\\(0.25\\)は有理数である．
      </p>
      <p>
        整数も，分母を\\(1\\)とすれば分数の形に表せるので，有理数である．
      </p>
    `,
    relatedIds: ["jissuu", "muriisuu", "seisuu", "yuugenshousuu", "junkanshousuu"]
  },
  {
    id: "muriisuu",
    term: "無理数",
    kana: "むりすう",
    yomi: "muriisuu",
    group: "む",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "有理数でない実数．",
    description: "有理数でない実数．",
    bodyHtml: `
      <p>
        有理数でない実数を無理数という．
      </p>
      <p>
        たとえば，\\(\\sqrt{2}\\)，\\(\\sqrt{3}\\)，\\(\\pi\\)などは無理数である．
      </p>
      <p>
        無理数は，整数の比\\(\\frac{m}{n}\\)の形では表せない．
      </p>
      <h3>例：\\(\\sqrt{2}\\)が無理数であること</h3>
      <p>
        \\(\\sqrt{2}\\)が有理数であると仮定する．このとき，互いに素な正の整数\\(m,n\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        \\sqrt{2}=\\frac{m}{n}
        \\]
      </div>
      <p>
        と表せる．両辺を2乗すると，
      </p>
      <div class="math-block">
        \\[
        2n^2=m^2
        \\]
      </div>
      <p>
        したがって，\\(m^2\\)は偶数であるから，\\(m\\)も偶数である．そこで\\(m=2k\\)とおくと，
      </p>
      <div class="math-block">
        \\[
        2n^2=4k^2
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        n^2=2k^2
        \\]
      </div>
      <p>
        となり，\\(n^2\\)も偶数であるから，\\(n\\)も偶数である．これは，\\(m\\)と\\(n\\)が互いに素であることに反する．
      </p>
      <p>
        したがって，\\(\\sqrt{2}\\)は無理数である．
      </p>
    `,
    relatedIds: ["jissuu", "yuuriisuu", "heihoukon"]
  },
  {
    id: "yuugenshousuu",
    term: "有限小数",
    kana: "ゆうげんしょうすう",
    yomi: "yuugenshousuu",
    group: "ゆ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "小数で表したとき，有限個の位で終わる小数．",
    description: "小数で表したとき，有限個の位で終わる小数．",
    bodyHtml: `
      <p>
        小数で表したとき，有限個の位で終わる小数を有限小数という．
      </p>
      <p>
        たとえば，\\(0.25\\)，\\(1.375\\)，\\(-2.4\\)は有限小数である．
      </p>
      <p>
        有限小数は分数で表せるので，有理数である．たとえば，
      </p>
      <div class="math-block">
        \\[
        0.25=\\frac{25}{100}=\\frac{1}{4}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["yuuriisuu", "junkanshousuu"]
  },
  {
    id: "junkanshousuu",
    term: "循環小数",
    kana: "じゅんかんしょうすう",
    yomi: "junkanshousuu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "ある位から先で，同じ数字の並びがくり返される小数．",
    description: "ある位から先で，同じ数字の並びがくり返される小数．",
    bodyHtml: `
      <p>
        ある位から先で，同じ数字の並びがくり返される小数を循環小数という．
      </p>
      <p>
        たとえば，\\(0.333\\cdots\\)や\\(0.142857142857\\cdots\\)は循環小数である．
      </p>
      <h3>循環小数は有理数である</h3>
      <p>
        たとえば，\\(x=0.333\\cdots\\)とおくと，
      </p>
      <div class="math-block">
        \\[
        10x=3.333\\cdots
        \\]
      </div>
      <p>
        である．よって，辺々をひくと，
      </p>
      <div class="math-block">
        \\[
        10x-x=3
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        9x=3
        \\]
      </div>
      <p>
        となるから，
      </p>
      <div class="math-block">
        \\[
        x=\\frac{1}{3}
        \\]
      </div>
      <p>
        である．このように，循環小数は整数の比で表せるので有理数である．
      </p>
    `,
    relatedIds: ["yuuriisuu", "yuugenshousuu"]
  },
  {
    id: "heihoukon",
    term: "平方根",
    kana: "へいほうこん",
    yomi: "heihoukon",
    group: "へ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "2乗すると，もとの数になる数．",
    description: "2乗すると，もとの数になる数．",
    bodyHtml: `
      <p>
        2乗すると，もとの数になる数を平方根という．
      </p>
      <p>
        たとえば，\\(3^2=9\\)，\\((-3)^2=9\\)であるから，\\(9\\)の平方根は\\(3\\)と\\(-3\\)である．
      </p>
      <p>
        正の数\\(a\\)の平方根は，\\(\\sqrt{a}\\)と\\(-\\sqrt{a}\\)の2つである．
      </p>
      <p>
        また，\\(0\\)の平方根は\\(0\\)だけである．
      </p>
    `,
    relatedIds: ["kongou", "muriisuu", "jissuu", "heihoukon_no_daishou"]
  },
  {
    id: "kongou",
    term: "根号",
    kana: "こんごう",
    yomi: "kongou",
    group: "こ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "平方根を表す記号\\(\\sqrt{\\ }\\)のこと．",
    description: "平方根を表す記号\\(\\sqrt{\\ }\\)のこと．",
    bodyHtml: `
      <p>
        平方根を表す記号\\(\\sqrt{\\ }\\)を根号という．
      </p>
      <p>
        たとえば，\\(\\sqrt{5}\\)は，\\(5\\)の正の平方根を表す．
      </p>
      <p>
        根号の中にある数や式は，平方根を考える対象である．
      </p>
    `,
    relatedIds: ["heihoukon", "muriisuu", "kongou_wo_fukumu_shiki"]
  },
  {
    id: "kongou_wo_fukumu_shiki",
    term: "根号を含む式",
    kana: "こんごうをふくむしき",
    yomi: "kongou_wo_fukumu_shiki",
    group: "こ",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "平方根を表す根号\\(\\sqrt{\\ }\\)を含んでいる式．",
    description: "平方根を表す根号\\(\\sqrt{\\ }\\)を含んでいる式．",
    bodyHtml: `
      <p>
        平方根を表す根号\\(\\sqrt{\\ }\\)を含んでいる式を，根号を含む式という．
      </p>
      <p>
        たとえば，\\(\\sqrt{2}+1\\)，\\(3\\sqrt{5}\\)，\\(\\frac{1}{\\sqrt{3}}\\)などは根号を含む式である．
      </p>
      <p>
        根号を含む式では，\\(\\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\)などの性質を用いて計算する．ただし，この性質をそのまま使うときは，通常\\(a\\geqq 0\\)，\\(b\\geqq 0\\)を考えている．
      </p>
    `,
    relatedIds: ["kongou", "heihoukon", "yuurrika", "bunbo_no_yuurika"]
  },
  {
    id: "heihoukon_no_daishou",
    term: "平方根の大小",
    kana: "へいほうこんのだいしょう",
    yomi: "heihoukon_no_daishou",
    group: "へ",
    type: "性質",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "正の数の平方根は，中身が大きいほど大きい．",
    description: "正の数の平方根は，中身が大きいほど大きい．",
    bodyHtml: `
      <p>
        \\(a\\geqq 0\\)，\\(b\\geqq 0\\)のとき，\\(a<b\\)ならば\\(\\sqrt{a}<\\sqrt{b}\\)である．
      </p>
      <h3>証明</h3>
      <p>
        \\(a\\geqq 0\\)，\\(b\\geqq 0\\)，\\(a<b\\)とする．このとき，
      </p>
      <div class="math-block">
        \\[
        \\sqrt{b}-\\sqrt{a}
        =
        \\frac{b-a}{\\sqrt{b}+\\sqrt{a}}
        \\]
      </div>
      <p>
        である．ここで，\\(b-a>0\\)であり，\\(\\sqrt{b}+\\sqrt{a}>0\\)であるから，
      </p>
      <div class="math-block">
        \\[
        \\sqrt{b}-\\sqrt{a}>0
        \\]
      </div>
      <p>
        したがって，\\(\\sqrt{a}<\\sqrt{b}\\)である．
      </p>
    `,
    relatedIds: ["heihoukon", "kongou"]
  },
  {
    id: "yuurrika",
    term: "有理化",
    kana: "ゆうりか",
    yomi: "yuurrika",
    group: "ゆ",
    type: "操作",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "根号を含む式を変形して，根号を含まない形をつくること．",
    description: "根号を含む式を変形して，根号を含まない形をつくること．",
    bodyHtml: `
      <p>
        根号を含む式を変形して，根号を含まない形をつくることを有理化という．
      </p>
      <p>
        特に，分母に根号を含む分数を，分母に根号を含まない形に変形することを分母の有理化という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{\\sqrt{2}}
        =
        \\frac{\\sqrt{2}}{2}
        \\]
      </div>
      <p>
        は有理化の例である．
      </p>
    `,
    relatedIds: ["bunbo_no_yuurika", "kongou_wo_fukumu_shiki"]
  },
  {
    id: "bunbo_no_yuurika",
    term: "分母の有理化",
    kana: "ぶんぼのゆうりか",
    yomi: "bunbo_no_yuurika",
    group: "ふ",
    type: "操作",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "分母にある根号を，式の値を変えずに取り除く変形．",
    description: "分母にある根号を，式の値を変えずに取り除く変形．",
    bodyHtml: `
      <p>
        分母にある根号を，式の値を変えずに取り除く変形を分母の有理化という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{\\sqrt{3}}
        =
        \\frac{1}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}}
        =
        \\frac{\\sqrt{3}}{3}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        分母が\\(a+\\sqrt{b}\\)のような形のときは，\\(a-\\sqrt{b}\\)をかけて，和と差の積を利用することが多い．
      </p>
      <div class="math-block">
        \\[
        (a+\\sqrt{b})(a-\\sqrt{b})=a^2-b
        \\]
      </div>
    `,
    relatedIds: ["yuurrika", "kongou_wo_fukumu_shiki", "tenkai"]
  },
  {
    id: "zettaiichi",
    term: "絶対値",
    kana: "ぜったいち",
    yomi: "zettaiichi",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "数直線上で，その数を表す点と原点との距離．",
    description: "数直線上で，その数を表す点と原点との距離．",
    bodyHtml: `
      <p>
        数直線上で，その数を表す点と原点との距離を絶対値という．
      </p>
      <p>
        数\\(a\\)の絶対値を\\(|a|\\)と表す．
      </p>
      <p>
        距離は負にならないので，絶対値は常に\\(0\\)以上である．
      </p>
      <div class="math-block">
        \\[
        |a|\\geqq 0
        \\]
      </div>
      <h3>絶対値の基本性質</h3>
      <p>
        \\(a\\geqq 0\\)のとき，\\(|a|=a\\)であり，\\(a<0\\)のとき，\\(|a|=-a\\)である．
      </p>
      <div class="math-block">
        \\[
        |a|=
        \\begin{cases}
        a & (a\\geqq 0) \\\\
        -a & (a<0)
        \\end{cases}
        \\]
      </div>
      <p>
        たとえば，\\(|5|=5\\)，\\(|-5|=5\\)である．
      </p>
    `,
    relatedIds: ["zettaiichi_kigou", "suuchokusen", "jissuu"]
  },
  {
    id: "zettaiichi_kigou",
    term: "絶対値記号",
    kana: "ぜったいちきごう",
    yomi: "zettaiichi_kigou",
    group: "せ",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "絶対値を表すために使う記号\\(|\\ |\\)のこと．",
    description: "絶対値を表すために使う記号\\(|\\ |\\)のこと．",
    bodyHtml: `
      <p>
        絶対値を表すために使う記号\\(|\\ |\\)を絶対値記号という．
      </p>
      <p>
        たとえば，\\(|x|\\)は\\(x\\)の絶対値を表す．
      </p>
      <p>
        絶対値記号を外すときは，中にある式が\\(0\\)以上か負かで場合分けする．
      </p>
      <div class="math-block">
        \\[
        |x|=
        \\begin{cases}
        x & (x\\geqq 0) \\\\
        -x & (x<0)
        \\end{cases}
        \\]
      </div>
    `,
    relatedIds: ["zettaiichi"]
  },
  {
    id: "suuchokusen",
    term: "数直線",
    kana: "すうちょくせん",
    yomi: "suuchokusen",
    group: "す",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "実数と直線上の点を対応させた直線．",
    description: "実数と直線上の点を対応させた直線．",
    bodyHtml: `
      <p>
        実数と直線上の点を対応させた直線を数直線という．
      </p>
      <p>
        数直線では，右へ進むほど数は大きく，左へ進むほど数は小さくなる．
      </p>
      <p>
        絶対値や不等式の解の範囲を考えるとき，数直線は重要である．
      </p>
    `,
    relatedIds: ["jissuu", "zettaiichi", "kukan", "futougou"]
  },
  {
    id: "kukan",
    term: "区間",
    kana: "くかん",
    yomi: "kukan",
    group: "く",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "数直線上で，ある範囲に含まれる実数全体の集合．",
    description: "数直線上で，ある範囲に含まれる実数全体の集合．",
    bodyHtml: `
      <p>
        数直線上で，ある範囲に含まれる実数全体の集合を区間という．
      </p>
      <p>
        たとえば，\\(1\\leqq x\\leqq 3\\)を満たす実数\\(x\\)全体は，\\(1\\)から\\(3\\)までの区間を表す．
      </p>
      <p>
        端の値を含むか含まないかによって，閉区間や開区間などに分けられる．
      </p>
    `,
    relatedIds: ["suuchokusen", "futougou", "rentusufutougou"]
  },
  {
    id: "futougou",
    term: "不等式",
    kana: "ふとうしき",
    yomi: "futougou",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "不等号を用いて，数量の大小関係を表した式．",
    description: "不等号を用いて，数量の大小関係を表した式．",
    bodyHtml: `
      <p>
        不等号を用いて，数量の大小関係を表した式を不等式という．
      </p>
      <p>
        たとえば，\\(x+1>3\\)，\\(2x-5\\leqq 7\\)は不等式である．
      </p>
      <p>
        不等式では，等式と同じように両辺に同じ数をたしたり，両辺から同じ数をひいたりできる．ただし，両辺に負の数をかけたり，両辺を負の数で割ったりすると，不等号の向きが変わる．
      </p>
    `,
    relatedIds: ["futougou_kigou", "ichijifutougou", "kai_futougou", "futougou_wo_toku"]
  },
  {
    id: "futougou_kigou",
    term: "不等号",
    kana: "ふとうごう",
    yomi: "futougou_kigou",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "数量の大小関係を表す記号．",
    description: "数量の大小関係を表す記号．",
    bodyHtml: `
      <p>
        数量の大小関係を表す記号を不等号という．
      </p>
      <p>
        高校数学でよく使う不等号には，\\(<\\)，\\(>\\)，\\(\\leqq\\)，\\(\\geqq\\)がある．
      </p>
      <p>
        \\(a\\leqq b\\)は，\\(a<b\\)または\\(a=b\\)であることを表す．また，\\(a\\geqq b\\)は，\\(a>b\\)または\\(a=b\\)であることを表す．
      </p>
    `,
    relatedIds: ["futougou", "tougou"]
  },
  {
    id: "ichijifutougou",
    term: "1次不等式",
    kana: "いちじふとうしき",
    yomi: "ichijifutougou",
    group: "い",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "整理すると，文字について1次式の不等式になるもの．",
    description: "整理すると，文字について1次式の不等式になるもの．",
    bodyHtml: `
      <p>
        整理すると，文字について1次式の不等式になるものを1次不等式という．
      </p>
      <p>
        たとえば，\\(2x-3>5\\)は，\\(x\\)についての1次不等式である．
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        2x-3&>5 \\\\
        2x&>8 \\\\
        x&>4
        \\end{aligned}
        \\]
      </div>
      <p>
        このように，不等式を満たす文字の値の範囲を求めることを，不等式を解くという．
      </p>
    `,
    relatedIds: ["futougou", "kai_futougou", "futougou_wo_toku"]
  },
  {
    id: "kai_futougou",
    term: "解（不等式）",
    kana: "かい",
    yomi: "kai_futougou",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "不等式を成り立たせる文字の値，または値の範囲．",
    description: "不等式を成り立たせる文字の値，または値の範囲．",
    bodyHtml: `
      <p>
        不等式を成り立たせる文字の値，または値の範囲を，不等式の解という．
      </p>
      <p>
        たとえば，\\(x+2>5\\)の解は，
      </p>
      <div class="math-block">
        \\[
        x>3
        \\]
      </div>
      <p>
        である．このとき，\\(4\\)や\\(10\\)はこの不等式を成り立たせるが，\\(3\\)や\\(1\\)は成り立たせない．
      </p>
    `,
    relatedIds: ["futougou", "ichijifutougou", "futougou_wo_toku"]
  },
  {
    id: "futougou_wo_toku",
    term: "不等式を解く",
    kana: "ふとうしきをとく",
    yomi: "futougou_wo_toku",
    group: "ふ",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "不等式を成り立たせる文字の値の範囲を求めること．",
    description: "不等式を成り立たせる文字の値の範囲を求めること．",
    bodyHtml: `
      <p>
        不等式を成り立たせる文字の値の範囲を求めることを，不等式を解くという．
      </p>
      <p>
        たとえば，\\(2x-3>5\\)を解くと，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        2x-3&>5 \\\\
        2x&>8 \\\\
        x&>4
        \\end{aligned}
        \\]
      </div>
      <p>
        となる．したがって，解は\\(x>4\\)である．
      </p>
    `,
    relatedIds: ["futougou", "kai_futougou", "ichijifutougou"]
  },
  {
    id: "rentusufutougou",
    term: "連立不等式",
    kana: "れんりつふとうしき",
    yomi: "rentusufutougou",
    group: "れ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "複数の不等式を同時に満たすことを考えるもの．",
    description: "複数の不等式を同時に満たすことを考えるもの．",
    bodyHtml: `
      <p>
        複数の不等式を同時に満たすことを考えるものを連立不等式という．
      </p>
      <p>
        連立不等式の解は，それぞれの不等式の解の共通部分である．
      </p>
      <p>
        たとえば，\\(x>1\\)かつ\\(x\\leqq 4\\)を満たす\\(x\\)の範囲は，
      </p>
      <div class="math-block">
        \\[
        1<x\\leqq 4
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["futougou", "futougou_wo_toku", "kukan"]
  },
  {
    id: "houteishiki",
    term: "方程式",
    kana: "ほうていしき",
    yomi: "houteishiki",
    group: "ほ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字に特定の値を代入したときだけ成り立つ等式．",
    description: "文字に特定の値を代入したときだけ成り立つ等式．",
    bodyHtml: `
      <p>
        文字に特定の値を代入したときだけ成り立つ等式を方程式という．
      </p>
      <p>
        たとえば，\\(x+2=5\\)は，\\(x=3\\)のときに成り立つ方程式である．
      </p>
      <p>
        方程式を成り立たせる文字の値を，その方程式の解という．
      </p>
    `,
    relatedIds: ["toushiki", "kai_houteishiki", "houteishiki_wo_toku"]
  },
  {
    id: "kai_houteishiki",
    term: "解（方程式）",
    kana: "かい",
    yomi: "kai_houteishiki",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "方程式を成り立たせる文字の値．",
    description: "方程式を成り立たせる文字の値．",
    bodyHtml: `
      <p>
        方程式を成り立たせる文字の値を，その方程式の解という．
      </p>
      <p>
        たとえば，方程式\\(x+2=5\\)において，\\(x=3\\)を代入すると，
      </p>
      <div class="math-block">
        \\[
        3+2=5
        \\]
      </div>
      <p>
        となり等式が成り立つ．したがって，\\(x=3\\)はこの方程式の解である．
      </p>
    `,
    relatedIds: ["houteishiki", "houteishiki_wo_toku", "kai_futougou"]
  },
  {
    id: "houteishiki_wo_toku",
    term: "方程式を解く",
    kana: "ほうていしきをとく",
    yomi: "houteishiki_wo_toku",
    group: "ほ",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "方程式の解をすべて求めること．",
    description: "方程式の解をすべて求めること．",
    bodyHtml: `
      <p>
        方程式の解をすべて求めることを，方程式を解くという．
      </p>
      <p>
        たとえば，\\(2x+1=7\\)を解くと，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        2x+1&=7 \\\\
        2x&=6 \\\\
        x&=3
        \\end{aligned}
        \\]
      </div>
      <p>
        となる．したがって，解は\\(x=3\\)である．
      </p>
    `,
    relatedIds: ["houteishiki", "kai_houteishiki", "ikou"]
  },
  {
    id: "tougou",
    term: "等号",
    kana: "とうごう",
    yomi: "tougou",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "2つの数量や式が等しいことを表す記号\\(=\\)のこと．",
    description: "2つの数量や式が等しいことを表す記号\\(=\\)のこと．",
    bodyHtml: `
      <p>
        2つの数量や式が等しいことを表す記号\\(=\\)を等号という．
      </p>
      <p>
        たとえば，\\(2+3=5\\)では，左側の\\(2+3\\)と右側の\\(5\\)が等しいことを表している．
      </p>
    `,
    relatedIds: ["toushiki", "futougou_kigou"]
  },
  {
    id: "toushiki",
    term: "等式",
    kana: "とうしき",
    yomi: "toushiki",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "等号を用いて，2つの式や数量が等しいことを表した式．",
    description: "等号を用いて，2つの式や数量が等しいことを表した式．",
    bodyHtml: `
      <p>
        等号を用いて，2つの式や数量が等しいことを表した式を等式という．
      </p>
      <p>
        たとえば，\\(x+2=5\\)，\\((x+1)^2=x^2+2x+1\\)は等式である．
      </p>
      <p>
        等式のうち，文字にどのような値を代入しても成り立つものを恒等式という．
      </p>
    `,
    relatedIds: ["tougou", "koutoushiki", "houteishiki"]
  },
  {
    id: "koutoushiki",
    term: "恒等式",
    kana: "こうとうしき",
    yomi: "koutoushiki",
    group: "こ",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字にどのような値を代入しても成り立つ等式．",
    description: "文字にどのような値を代入しても成り立つ等式．",
    bodyHtml: `
      <p>
        文字にどのような値を代入しても成り立つ等式を恒等式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        (x+1)^2=x^2+2x+1
        \\]
      </div>
      <p>
        は，どのような\\(x\\)の値に対しても成り立つので，恒等式である．
      </p>
      <p>
        一方，\\(x+1=3\\)は，\\(x=2\\)のときだけ成り立つので，恒等式ではなく方程式である．
      </p>
    `,
    relatedIds: ["toushiki", "houteishiki", "tenkai"]
  },
  {
    id: "ikou",
    term: "移項",
    kana: "いこう",
    yomi: "ikou",
    group: "い",
    type: "操作",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "等式や不等式の一方の辺にある項を，符号を変えて他方の辺へ移すこと．",
    description: "等式や不等式の一方の辺にある項を，符号を変えて他方の辺へ移すこと．",
    bodyHtml: `
      <p>
        等式や不等式の一方の辺にある項を，符号を変えて他方の辺へ移すことを移項という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x+3=7
        \\]
      </div>
      <p>
        から\\(3\\)を右側へ移すと，
      </p>
      <div class="math-block">
        \\[
        x=7-3
        \\]
      </div>
      <p>
        となる．これは，両辺から同じ数\\(3\\)をひく変形を省略して表したものである．
      </p>
    `,
    relatedIds: ["houteishiki_wo_toku", "futougou_wo_toku", "toushiki"]
  },
  {
    id: "bunpaihousoku",
    term: "分配法則",
    kana: "ぶんぱいほうそく",
    yomi: "bunpaihousoku",
    group: "ふ",
    type: "法則",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "かけ算を，たし算やひき算のそれぞれの項に分けて計算できるという法則．",
    description: "かけ算を，たし算やひき算のそれぞれの項に分けて計算できるという法則．",
    bodyHtml: `
      <p>
        かけ算を，たし算やひき算のそれぞれの項に分けて計算できるという法則を分配法則という．
      </p>
      <div class="math-block">
        \\[
        a(b+c)=ab+ac
        \\]
      </div>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        (a+b)c=ac+bc
        \\]
      </div>
      <p>
        も分配法則である．展開では，分配法則をくり返し用いてかっこを外していく．
      </p>
    `,
    relatedIds: ["tenkai", "insubunkai"]
  },
  {
    id: "tsuubun",
    term: "通分",
    kana: "つうぶん",
    yomi: "tsuubun",
    group: "つ",
    type: "操作",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "分数の分母をそろえること．",
    description: "分数の分母をそろえること．",
    bodyHtml: `
      <p>
        分数の分母をそろえることを通分という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{2}+\\frac{1}{3}
        =
        \\frac{3}{6}+\\frac{2}{6}
        =
        \\frac{5}{6}
        \\]
      </div>
      <p>
        である．分数式の計算でも，分母をそろえると加法や減法を行いやすくなる．
      </p>
    `,
    relatedIds: ["yakubun"]
  },
  {
    id: "yakubun",
    term: "約分",
    kana: "やくぶん",
    yomi: "yakubun",
    group: "や",
    type: "操作",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "分母と分子を共通な因数で割り，分数を簡単にすること．",
    description: "分母と分子を共通な因数で割り，分数を簡単にすること．",
    bodyHtml: `
      <p>
        分母と分子を共通な因数で割り，分数を簡単にすることを約分という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\frac{6}{8}=\\frac{3}{4}
        \\]
      </div>
      <p>
        である．分数式では，分母と分子を因数分解してから約分することが多い．
      </p>
    `,
    relatedIds: ["insubunkai", "kyoutsuuinsuu", "tsuubun"]
  },
  {
    id: "koubeikinojun",
    term: "降べきの順",
    kana: "こうべきのじゅん",
    yomi: "koubeikinojun",
    group: "こ",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "ある文字について，次数の高い項から低い項へ並べる順序．",
    description: "ある文字について，次数の高い項から低い項へ並べる順序．",
    bodyHtml: `
      <p>
        ある文字について，次数の高い項から低い項へ並べる順序を降べきの順という．
      </p>
      <p>
        たとえば，\\(x\\)について降べきの順に並べると，
      </p>
      <div class="math-block">
        \\[
        3+2x^2-x
        =
        2x^2-x+3
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["shoubeikinojun", "jisu", "seishiki"]
  },
  {
    id: "shoubeikinojun",
    term: "昇べきの順",
    kana: "しょうべきのじゅん",
    yomi: "shoubeikinojun",
    group: "し",
    type: "用語",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "ある文字について，次数の低い項から高い項へ並べる順序．",
    description: "ある文字について，次数の低い項から高い項へ並べる順序．",
    bodyHtml: `
      <p>
        ある文字について，次数の低い項から高い項へ並べる順序を昇べきの順という．
      </p>
      <p>
        たとえば，\\(x\\)について昇べきの順に並べると，
      </p>
      <div class="math-block">
        \\[
        2x^2-x+3
        =
        3-x+2x^2
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["koubeikinojun", "jisu", "seishiki"]
  },
  {
    id: "teisuukou",
    term: "定数項",
    kana: "ていすうこう",
    yomi: "teisuukou",
    group: "て",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "多項式の項のうち，文字を含まない項．",
    description: "多項式の項のうち，文字を含まない項．",
    bodyHtml: `
      <p>
        多項式の項のうち，文字を含まない項を定数項という．
      </p>
      <p>
        たとえば，\\(3x^2-2x+5\\)の定数項は\\(5\\)である．
      </p>
      <p>
        また，\\(x^2-4\\)の定数項は\\(-4\\)である．符号も含めて考えることに注意する．
      </p>
    `,
    relatedIds: ["kou", "seishiki"]
  },
  {
    id: "kyoutsuuinsuu",
    term: "共通因数",
    kana: "きょうつういんすう",
    yomi: "kyoutsuuinsuu",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "複数の項に共通して含まれる因数．",
    description: "複数の項に共通して含まれる因数．",
    bodyHtml: `
      <p>
        複数の項に共通して含まれる因数を共通因数という．
      </p>
      <p>
        たとえば，\\(3x^2+6x\\)の2つの項\\(3x^2\\)，\\(6x\\)には，\\(3x\\)が共通因数として含まれている．
      </p>
      <div class="math-block">
        \\[
        3x^2+6x=3x(x+2)
        \\]
      </div>
      <p>
        因数分解では，まず共通因数でくくれないかを確認することが多い．
      </p>
    `,
    relatedIds: ["insuu", "insubunkai", "bunpaihousoku"]
  },
  {
    id: "tasukigake",
    term: "たすきがけ",
    kana: "たすきがけ",
    yomi: "tasukigake",
    group: "た",
    type: "方法",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "2次式の因数分解で，係数の組合せを調べる方法．",
    description: "2次式の因数分解で，係数の組合せを調べる方法．",
    bodyHtml: `
      <p>
        2次式\\(ax^2+bx+c\\)を因数分解するとき，係数の組合せを調べる方法をたすきがけという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2x^2+5x+3
        \\]
      </div>
      <p>
        は，
      </p>
      <div class="math-block">
        \\[
        2x^2+5x+3=(2x+3)(x+1)
        \\]
      </div>
      <p>
        と因数分解できる．展開して確かめると，
      </p>
      <div class="math-block">
        \\[
        (2x+3)(x+1)=2x^2+2x+3x+3=2x^2+5x+3
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["insubunkai", "tenkai"]
  },
  {
    id: "taishoushiki",
    term: "対称式",
    kana: "たいしょうしき",
    yomi: "taishoushiki",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "文字を入れ替えても変わらない式．",
    description: "文字を入れ替えても変わらない式．",
    bodyHtml: `
      <p>
        文字を入れ替えても変わらない式を対称式という．
      </p>
      <p>
        たとえば，\\(x+y\\)，\\(xy\\)，\\(x^2+y^2\\)は，\\(x\\)と\\(y\\)を入れ替えても式が変わらないので，\\(x,y\\)の対称式である．
      </p>
      <p>
        一方，\\(x-y\\)は，\\(x\\)と\\(y\\)を入れ替えると\\(y-x\\)になり，一般にはもとの式と等しくないので，対称式ではない．
      </p>
      <h3>基本対称式との関係</h3>
      <p>
        \\(2\\)つの文字\\(x,y\\)に関する対称式は，基本対称式\\(x+y\\)，\\(xy\\)を用いて表せることが多い．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=(x+y)^2-2xy
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kihontaishoushiki", "toushiki"]
  },
  {
    id: "kihontaishoushiki",
    term: "基本対称式",
    kana: "きほんたいしょうしき",
    yomi: "kihontaishoushiki",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "対称式を表す基本になる対称式．",
    description: "対称式を表す基本になる対称式．",
    bodyHtml: `
      <p>
        対称式を表す基本になる対称式を基本対称式という．
      </p>
      <p>
        \\(2\\)つの文字\\(x,y\\)では，基本対称式は\\(x+y\\)と\\(xy\\)である．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=(x+y)^2-2xy
        \\]
      </div>
      <p>
        であるから，\\(x^2+y^2\\)は基本対称式\\(x+y\\)，\\(xy\\)を用いて表せる．
      </p>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        x^3+y^3=(x+y)^3-3xy(x+y)
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["taishoushiki"]
  },
  {
    id: "ougonhi",
    term: "黄金比",
    kana: "おうごんひ",
    yomi: "ougonhi",
    group: "お",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "\\(1:\\frac{1+\\sqrt{5}}{2}\\)で表される比．",
    description: "\\(1:\\frac{1+\\sqrt{5}}{2}\\)で表される比．",
    bodyHtml: `
      <p>
        \\(1:\\frac{1+\\sqrt{5}}{2}\\)で表される比を黄金比という．
      </p>
      <p>
        \\(\\frac{1+\\sqrt{5}}{2}\\)を黄金数と呼ぶこともある．この値は，しばしば\\(\\varphi\\)で表される．
      </p>
      <div class="math-block">
        \\[
        \\varphi=\\frac{1+\\sqrt{5}}{2}
        \\]
      </div>
      <h3>黄金比が満たす方程式</h3>
      <p>
        \\(\\varphi=\\frac{1+\\sqrt{5}}{2}\\)とすると，\\(\\varphi\\)は次の方程式を満たす．
      </p>
      <div class="math-block">
        \\[
        \\varphi^2=\\varphi+1
        \\]
      </div>
      <p>
        実際，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        \\varphi^2
        &=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^2 \\\\
        &=\\frac{6+2\\sqrt{5}}{4} \\\\
        &=\\frac{3+\\sqrt{5}}{2}
        \\end{aligned}
        \\]
      </div>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        \\varphi+1=\\frac{1+\\sqrt{5}}{2}+1=\\frac{3+\\sqrt{5}}{2}
        \\]
      </div>
      <p>
        であるから，\\(\\varphi^2=\\varphi+1\\)が成り立つ．
      </p>
    `,
    relatedIds: ["heihoukon", "muriisuu", "houteishiki"]
  }
);
