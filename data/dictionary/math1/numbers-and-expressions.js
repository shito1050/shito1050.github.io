window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "tenkai",
    term: "展開",
    kana: "てんかい",
    yomi: "tenkai",
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
    relatedIds: ["tenkai", "insuu", "seishiki", "tajoushiki"]
  },
  {
    id: "insuu",
    term: "因数",
    kana: "いんすう",
    yomi: "insuu",
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
    relatedIds: ["insubunkai", "seki"]
  },
  {
    id: "tanjoushiki",
    term: "単項式",
    kana: "たんこうしき",
    yomi: "tanjoushiki",
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
    relatedIds: ["tanjoushiki", "tajoushiki", "kou", "jisu"]
  },
  {
    id: "kou",
    term: "項",
    kana: "こう",
    yomi: "kou",
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
    relatedIds: ["tanjoushiki", "tajoushiki", "doukoukou", "keisuu"]
  },
  {
    id: "keisuu",
    term: "係数",
    kana: "けいすう",
    yomi: "keisuu",
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
    relatedIds: ["kou", "keisuu", "tanjoushiki", "tajoushiki"]
  },
  {
    id: "doukoukou",
    term: "同類項",
    kana: "どうるいこう",
    yomi: "douruikou",
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
    relatedIds: ["yuuriisuu", "muriisuu", "suuchokusen"]
  },
  {
    id: "yuuriisuu",
    term: "有理数",
    kana: "ゆうりすう",
    yomi: "yuuriisuu",
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
    relatedIds: ["jissuu", "muriisuu"]
  },
  {
    id: "muriisuu",
    term: "無理数",
    kana: "むりすう",
    yomi: "muriisuu",
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
    id: "heihoukon",
    term: "平方根",
    kana: "へいほうこん",
    yomi: "heihoukon",
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
    relatedIds: ["kongou", "muriisuu", "jissuu"]
  },
  {
    id: "kongou",
    term: "根号",
    kana: "こんごう",
    yomi: "kongou",
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
    relatedIds: ["heihoukon", "muriisuu"]
  },
  {
    id: "zettaiichi",
    term: "絶対値",
    kana: "ぜったいち",
    yomi: "zettaiichi",
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
    relatedIds: ["suuchokusen", "jissuu"]
  },
  {
    id: "futougou",
    term: "不等式",
    kana: "ふとうしき",
    yomi: "futougou",
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
    relatedIds: ["ichijifutougou", "kai_futougou"]
  },
  {
    id: "ichijifutougou",
    term: "1次不等式",
    kana: "いちじふとうしき",
    yomi: "ichijifutougou",
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
    relatedIds: ["futougou", "kai_futougou"]
  },
  {
    id: "kai_futougou",
    term: "解（不等式）",
    kana: "かい",
    yomi: "kai_futougou",
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
    relatedIds: ["futougou", "ichijifutougou"]
  },
  {
    id: "ougonhi",
    term: "黄金比",
    kana: "おうごんひ",
    yomi: "ougonhi",
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
    relatedIds: ["heihoukon", "muriisuu"]
  }
);
