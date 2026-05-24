window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "shisuu",
    term: "指数",
    kana: "しすう",
    yomi: "shisuu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "累乗で，何回かけるかを表す数．",
    description: "累乗で，何回かけるかを表す数．",
    bodyHtml: `
      <p>
        累乗において，何回かけるかを表す数を指数という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2^3=2\\cdot 2\\cdot 2
        \\]
      </div>
      <p>
        では，\\(3\\)が指数である．
      </p>
      <p>
        数学IIでは，指数を整数から有理数へ広げ，さらに指数関数を考える．
      </p>
    `,
    relatedIds: ["ruijou", "shisuu_housoku", "shisuukansuu"]
  },
  {
  id: "ruijou",
  term: "累乗",
  kana: "るいじょう",
  yomi: "ruijou",
  group: "る",
  type: "定義",
  subject: "数学II",
  unit: "指数関数・対数関数",
  unitIds: ["math2_exponential_logarithmic_functions"],
  shortDescription: "1に同じ数を何回かかけた形．",
  description: "1に同じ数を何回かかけた形．",
  bodyHtml: `
    <p>
      1に同じ数を何回かかけた形を累乗という．
    </p>
    <p>
      たとえば，
    </p>
    <div class="math-block">
      \\[
      a^3=1\\cdot a\\cdot a\\cdot a
      \\]
    </div>
    <p>
      である．このとき，\\(a\\)を底，\\(3\\)を指数という．
    </p>
    <p>
      また，\\(a\\ne 0\\)のとき，\\(a^0=1\\)と定める．これは，指数法則が\\(0\\)乗の場合にも成り立つようにするためである．
    </p>
  `,
  relatedIds: ["shisuu", "tei_shisuu", "shisuu_housoku"]
},
  {
    id: "tei_shisuu",
    term: "底（指数）",
    kana: "てい",
    yomi: "tei_shisuu",
    group: "て",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "累乗で，何回もかけられるもとになる数．",
    description: "累乗で，何回もかけられるもとになる数．",
    bodyHtml: `
      <p>
        累乗において，何回もかけられるもとになる数を底という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        3^4
        \\]
      </div>
      <p>
        では，\\(3\\)が底，\\(4\\)が指数である．
      </p>
      <p>
        指数関数\\(y=a^x\\)では，\\(a\\)が底である．
      </p>
    `,
    relatedIds: ["ruijou", "shisuu", "shisuukansuu"]
  },
  {
    id: "shisuu_housoku",
    term: "指数法則",
    kana: "しすうほうそく",
    yomi: "shisuu_housoku",
    group: "し",
    type: "法則",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "累乗の計算で指数を扱うための基本法則．",
    description: "累乗の計算で指数を扱うための基本法則．",
    bodyHtml: `
      <p>
        累乗の計算で指数を扱うための基本法則を指数法則という．
      </p>
      <p>
        \\(a>0\\)とし，指数が定義される範囲で，次の法則が成り立つ．
      </p>
      <div class="math-block">
        \\[
        a^m a^n=a^{m+n}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\frac{a^m}{a^n}=a^{m-n}
        \\]
      </div>
      <div class="math-block">
        \\[
        (a^m)^n=a^{mn}
        \\]
      </div>
      <div class="math-block">
        \\[
        (ab)^n=a^n b^n
        \\]
      </div>
      <p>
        指数を有理数まで広げても，これらの法則が成り立つように定義する．
      </p>
    `,
    relatedIds: ["shisuu", "ruijou", "ruijoukon"]
  },
  {
    id: "ruijoukon",
    term: "累乗根",
    kana: "るいじょうこん",
    yomi: "ruijoukon",
    group: "る",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "\\(n\\)乗すると，もとの数になる数．",
    description: "\\(n\\)乗すると，もとの数になる数．",
    bodyHtml: `
      <p>
        \\(n\\)乗すると，もとの数になる数を累乗根という．
      </p>
      <p>
        たとえば，\\(2^3=8\\)であるから，\\(2\\)は\\(8\\)の3乗根である．
      </p>
      <p>
        正の数\\(a\\)に対して，正の\\(n\\)乗根を
      </p>
      <div class="math-block">
        \\[
        \\sqrt[n]{a}
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["n_jo_kon", "shisuu_housoku", "bunshisu"]
  },
  {
    id: "n_jo_kon",
    term: "n乗根",
    kana: "えぬじょうこん",
    yomi: "n_jo_kon",
    group: "え",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "\\(n\\)乗すると，もとの数になる数．",
    description: "\\(n\\)乗すると，もとの数になる数．",
    bodyHtml: `
      <p>
        \\(x^n=a\\)を満たす数\\(x\\)を，\\(a\\)の\\(n\\)乗根という．
      </p>
      <p>
        たとえば，\\(x^3=8\\)を満たす実数は\\(x=2\\)であるから，\\(2\\)は\\(8\\)の3乗根である．
      </p>
      <p>
        \\(n=2\\)のときの2乗根は平方根である．
      </p>
    `,
    relatedIds: ["ruijoukon", "heihoukon"]
  },
  {
    id: "bunshisu",
    term: "分数指数",
    kana: "ぶんすうしすう",
    yomi: "bunshisu",
    group: "ふ",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "分数で表された指数．累乗根を用いて定義される．",
    description: "分数で表された指数．累乗根を用いて定義される．",
    bodyHtml: `
      <p>
        分数で表された指数を分数指数という．
      </p>
      <p>
        \\(a>0\\)，\\(m\\)を整数，\\(n\\)を正の整数とするとき，
      </p>
      <div class="math-block">
        \\[
        a^{\\frac{m}{n}}=\\sqrt[n]{a^m}
        \\]
      </div>
      <p>
        と定める．特に，
      </p>
      <div class="math-block">
        \\[
        a^{\\frac{1}{n}}=\\sqrt[n]{a}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        このように定めることで，指数法則が有理数の指数に対しても成り立つ．
      </p>
    `,
    relatedIds: ["shisuu", "ruijoukon", "shisuu_housoku"]
  },
  {
    id: "shisuukansuu",
    term: "指数関数",
    kana: "しすうかんすう",
    yomi: "shisuukansuu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "\\(y=a^x\\)の形で表される関数．ただし，\\(a>0\\)，\\(a\\ne 1\\)とする．",
    description: "\\(y=a^x\\)の形で表される関数．ただし，\\(a>0\\)，\\(a\\ne 1\\)とする．",
    bodyHtml: `
      <p>
        \\(a>0\\)，\\(a\\ne 1\\)として，
      </p>
      <div class="math-block">
        \\[
        y=a^x
        \\]
      </div>
      <p>
        の形で表される関数を指数関数という．
      </p>
      <p>
        \\(a>1\\)のとき，\\(x\\)が増加すると\\(a^x\\)も増加する．\\(0<a<1\\)のとき，\\(x\\)が増加すると\\(a^x\\)は減少する．
      </p>
      <p>
        指数関数の値は常に正であり，グラフは\\(x\\)軸と交わらない．
      </p>
    `,
    relatedIds: ["shisuu", "tei_shisuu", "shisuu_housoku", "taisuukansuu"]
  },
  {
    id: "taisuu",
    term: "対数",
    kana: "たいすう",
    yomi: "taisuu",
    group: "た",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "\\(a^p=M\\)となる指数\\(p\\)を，\\(a\\)を底とする\\(M\\)の対数という．",
    description: "\\(a^p=M\\)となる指数\\(p\\)を，\\(a\\)を底とする\\(M\\)の対数という．",
    bodyHtml: `
      <p>
        \\(a>0\\)，\\(a\\ne 1\\)，\\(M>0\\)とする．
      </p>
      <p>
        \\(a^p=M\\)となる指数\\(p\\)を，\\(a\\)を底とする\\(M\\)の対数といい，
      </p>
      <div class="math-block">
        \\[
        p=\\log_a M
        \\]
      </div>
      <p>
        と表す．つまり，
      </p>
      <div class="math-block">
        \\[
        a^p=M \\quad \\Longleftrightarrow \\quad p=\\log_a M
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        対数は，「底を何乗すれば真数になるか」を表す数である．
      </p>
    `,
    relatedIds: ["tei_taisuu", "shinsuu", "taisuu_housoku", "taisuukansuu"]
  },
  {
    id: "tei_taisuu",
    term: "底（対数）",
    kana: "てい",
    yomi: "tei_taisuu",
    group: "て",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "対数\\(\\log_a M\\)において，何乗するもとの数\\(a\\)．",
    description: "対数\\(\\log_a M\\)において，何乗するもとの数\\(a\\)．",
    bodyHtml: `
      <p>
        対数\\(\\log_a M\\)において，何乗するもとの数\\(a\\)を底という．
      </p>
      <p>
        対数の底は，
      </p>
      <div class="math-block">
        \\[
        a>0,\\quad a\\ne 1
        \\]
      </div>
      <p>
        を満たす必要がある．
      </p>
      <p>
        たとえば，\\(\\log_2 8\\)では，底は\\(2\\)である．
      </p>
    `,
    relatedIds: ["taisuu", "shinsuu", "taisuukansuu"]
  },
  {
    id: "shinsuu",
    term: "真数",
    kana: "しんすう",
    yomi: "shinsuu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "対数\\(\\log_a M\\)における\\(M\\)．正の数でなければならない．",
    description: "対数\\(\\log_a M\\)における\\(M\\)．正の数でなければならない．",
    bodyHtml: `
      <p>
        対数\\(\\log_a M\\)における\\(M\\)を真数という．
      </p>
      <p>
        真数は正の数でなければならない．つまり，
      </p>
      <div class="math-block">
        \\[
        M>0
        \\]
      </div>
      <p>
        が必要である．
      </p>
      <p>
        たとえば，\\(\\log_2 8\\)では，真数は\\(8\\)である．
      </p>
    `,
    relatedIds: ["taisuu", "tei_taisuu", "shinsuu_jouken"]
  },
  {
    id: "shinsuu_jouken",
    term: "真数条件",
    kana: "しんすうじょうけん",
    yomi: "shinsuu_jouken",
    group: "し",
    type: "条件",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "対数の真数が正でなければならないという条件．",
    description: "対数の真数が正でなければならないという条件．",
    bodyHtml: `
      <p>
        対数の真数が正でなければならないという条件を真数条件という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\log_2(x-1)
        \\]
      </div>
      <p>
        が定義されるためには，
      </p>
      <div class="math-block">
        \\[
        x-1>0
        \\]
      </div>
      <p>
        すなわち，
      </p>
      <div class="math-block">
        \\[
        x>1
        \\]
      </div>
      <p>
        が必要である．
      </p>
      <p>
        対数を含む方程式や不等式では，最後に真数条件を確認することが重要である．
      </p>
    `,
    relatedIds: ["taisuu", "shinsuu", "taisuu_houteishiki"]
  },
  {
    id: "taisuu_housoku",
    term: "対数法則",
    kana: "たいすうほうそく",
    yomi: "taisuu_housoku",
    group: "た",
    type: "法則",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "対数の積・商・累乗を計算するための基本法則．",
    description: "対数の積・商・累乗を計算するための基本法則．",
    bodyHtml: `
      <p>
        \\(a>0\\)，\\(a\\ne 1\\)，\\(M>0\\)，\\(N>0\\)のとき，次が成り立つ．
      </p>
      <div class="math-block">
        \\[
        \\log_a MN=\\log_a M+\\log_a N
        \\]
      </div>
      <div class="math-block">
        \\[
        \\log_a \\frac{M}{N}=\\log_a M-\\log_a N
        \\]
      </div>
      <div class="math-block">
        \\[
        \\log_a M^r=r\\log_a M
        \\]
      </div>
      <p>
        これらを対数法則という．
      </p>
      <h3>積の法則の証明</h3>
      <p>
        \\(\\log_a M=p\\)，\\(\\log_a N=q\\)とおく．このとき，
      </p>
      <div class="math-block">
        \\[
        M=a^p,\\quad N=a^q
        \\]
      </div>
      <p>
        であるから，
      </p>
      <div class="math-block">
        \\[
        MN=a^p a^q=a^{p+q}
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        \\log_a MN=p+q=\\log_a M+\\log_a N
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["taisuu", "shinsuu", "tei_taisuu", "teihenkan"]
  },
  {
    id: "teihenkan",
    term: "底の変換公式",
    kana: "ていのへんかんこうしき",
    yomi: "teihenkan",
    group: "て",
    type: "公式",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "対数の底を別の底に変える公式．",
    description: "対数の底を別の底に変える公式．",
    bodyHtml: `
      <p>
        \\(a>0\\)，\\(a\\ne 1\\)，\\(b>0\\)，\\(b\\ne 1\\)，\\(M>0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\log_a M=\\frac{\\log_b M}{\\log_b a}
        \\]
      </div>
      <p>
        が成り立つ．これを底の変換公式という．
      </p>
      <h3>証明</h3>
      <p>
        \\(\\log_a M=p\\)とおくと，
      </p>
      <div class="math-block">
        \\[
        a^p=M
        \\]
      </div>
      <p>
        である．両辺について底\\(b\\)の対数をとると，
      </p>
      <div class="math-block">
        \\[
        \\log_b a^p=\\log_b M
        \\]
      </div>
      <p>
        である．対数法則より，
      </p>
      <div class="math-block">
        \\[
        p\\log_b a=\\log_b M
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        p=\\frac{\\log_b M}{\\log_b a}
        \\]
      </div>
      <p>
        である．つまり，
      </p>
      <div class="math-block">
        \\[
        \\log_a M=\\frac{\\log_b M}{\\log_b a}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["taisuu", "taisuu_housoku"]
  },
  {
    id: "taisuukansuu",
    term: "対数関数",
    kana: "たいすうかんすう",
    yomi: "taisuukansuu",
    group: "た",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "\\(y=\\log_a x\\)の形で表される関数．ただし，\\(a>0\\)，\\(a\\ne 1\\)とする．",
    description: "\\(y=\\log_a x\\)の形で表される関数．ただし，\\(a>0\\)，\\(a\\ne 1\\)とする．",
    bodyHtml: `
      <p>
        \\(a>0\\)，\\(a\\ne 1\\)として，
      </p>
      <div class="math-block">
        \\[
        y=\\log_a x
        \\]
      </div>
      <p>
        の形で表される関数を対数関数という．
      </p>
      <p>
        対数関数の定義域は\\(x>0\\)であり，値域は実数全体である．
      </p>
      <p>
        対数関数\\(y=\\log_a x\\)は，指数関数\\(y=a^x\\)の逆関数である．
      </p>
    `,
    relatedIds: ["taisuu", "shisuukansuu", "shinsuu_jouken"]
  },
  {
    id: "jouyou_taisuu",
    term: "常用対数",
    kana: "じょうようたいすう",
    yomi: "jouyou_taisuu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "底が\\(10\\)である対数．",
    description: "底が\\(10\\)である対数．",
    bodyHtml: `
      <p>
        底が\\(10\\)である対数を常用対数という．
      </p>
      <p>
        常用対数は，
      </p>
      <div class="math-block">
        \\[
        \\log_{10} x
        \\]
      </div>
      <p>
        と表す．文脈によっては，底\\(10\\)を省略して\\(\\log x\\)と書くこともある．
      </p>
      <p>
        常用対数を用いると，非常に大きい数や非常に小さい数の桁数を扱いやすくなる．
      </p>
    `,
    relatedIds: ["taisuu", "keta"]
  },
  {
    id: "keta",
    term: "桁数",
    kana: "けたすう",
    yomi: "keta",
    group: "け",
    type: "用語",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "整数を十進法で表したときの数字の個数．",
    description: "整数を十進法で表したときの数字の個数．",
    bodyHtml: `
      <p>
        正の整数を十進法で表したときの数字の個数を桁数という．
      </p>
      <p>
        正の整数\\(N\\)が\\(n\\)桁であることは，
      </p>
      <div class="math-block">
        \\[
        10^{n-1}\\leqq N<10^n
        \\]
      </div>
      <p>
        と同値である．
      </p>
      <p>
        この不等式の各辺に常用対数を用いると，桁数を調べることができる．
      </p>
    `,
    relatedIds: ["jouyou_taisuu", "taisuu"]
  },
  {
    id: "shisuu_houteishiki",
    term: "指数方程式",
    kana: "しすうほうていしき",
    yomi: "shisuu_houteishiki",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "未知数が指数の部分に含まれる方程式．",
    description: "未知数が指数の部分に含まれる方程式．",
    bodyHtml: `
      <p>
        未知数が指数の部分に含まれる方程式を指数方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2^x=8
        \\]
      </div>
      <p>
        は指数方程式である．この場合，
      </p>
      <div class="math-block">
        \\[
        8=2^3
        \\]
      </div>
      <p>
        なので，\\(x=3\\)である．
      </p>
    `,
    relatedIds: ["shisuukansuu", "shisuu"]
  },
  {
    id: "taisuu_houteishiki",
    term: "対数方程式",
    kana: "たいすうほうていしき",
    yomi: "taisuu_houteishiki",
    group: "た",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "未知数を含む対数が現れる方程式．",
    description: "未知数を含む対数が現れる方程式．",
    bodyHtml: `
      <p>
        未知数を含む対数が現れる方程式を対数方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\log_2 x=3
        \\]
      </div>
      <p>
        は対数方程式である．対数の定義より，
      </p>
      <div class="math-block">
        \\[
        x=2^3=8
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        対数方程式では，真数条件を必ず確認する．
      </p>
    `,
    relatedIds: ["taisuu", "taisuukansuu", "shinsuu_jouken"]
  },
  {
    id: "shisuu_futougou",
    term: "指数不等式",
    kana: "しすうふとうしき",
    yomi: "shisuu_futougou",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "未知数が指数の部分に含まれる不等式．",
    description: "未知数が指数の部分に含まれる不等式．",
    bodyHtml: `
      <p>
        未知数が指数の部分に含まれる不等式を指数不等式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        2^x>8
        \\]
      </div>
      <p>
        は指数不等式である．\\(8=2^3\\)であり，\\(2^x\\)は単調増加するので，
      </p>
      <div class="math-block">
        \\[
        x>3
        \\]
      </div>
      <p>
        となる．
      </p>
      <p>
        底が\\(0<a<1\\)のときは，指数関数が単調減少するため，不等号の向きに注意する．
      </p>
    `,
    relatedIds: ["shisuukansuu", "shisuu_houteishiki"]
  },
  {
    id: "taisuu_futougou",
    term: "対数不等式",
    kana: "たいすうふとうしき",
    yomi: "taisuu_futougou",
    group: "た",
    type: "定義",
    subject: "数学II",
    unit: "指数関数・対数関数",
    unitIds: ["math2_exponential_logarithmic_functions"],
    shortDescription: "未知数を含む対数が現れる不等式．",
    description: "未知数を含む対数が現れる不等式．",
    bodyHtml: `
      <p>
        未知数を含む対数が現れる不等式を対数不等式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\log_2 x>3
        \\]
      </div>
      <p>
        は対数不等式である．底\\(2\\)は\\(1\\)より大きいので，対数関数\\(y=\\log_2 x\\)は単調増加である．したがって，
      </p>
      <div class="math-block">
        \\[
        x>2^3
        \\]
      </div>
      <p>
        つまり，
      </p>
      <div class="math-block">
        \\[
        x>8
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        対数不等式では，真数条件と，底が\\(1\\)より大きいか小さいかに注意する．
      </p>
    `,
    relatedIds: ["taisuukansuu", "taisuu_houteishiki", "shinsuu_jouken"]
  }
);
