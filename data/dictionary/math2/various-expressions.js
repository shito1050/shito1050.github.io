window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "seishiki_no_johou",
    term: "整式の除法",
    kana: "せいしきのじょほう",
    yomi: "seishiki_no_johou",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "整式を別の整式で割り，商と余りを求める計算．",
    description: "整式を別の整式で割り，商と余りを求める計算．",
    bodyHtml: `
      <p>
        整式を別の整式で割り，商と余りを求める計算を整式の除法という．
      </p>
      <p>
        整式\\(A\\)を整式\\(B\\)で割るとき，\\(B\\)の次数が\\(1\\)以上であれば，
      </p>
      <div class="math-block">
        \\[
        A=BQ+R
        \\]
      </div>
      <p>
        の形に表せる．ここで，\\(Q\\)を商，\\(R\\)を余りという．余り\\(R\\)は，\\(B\\)より次数が低い整式である．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2+3x+2=(x+1)(x+2)+0
        \\]
      </div>
      <p>
        であるから，\\(x^2+3x+2\\)を\\(x+1\\)で割った商は\\(x+2\\)，余りは\\(0\\)である．
      </p>
    `,
    relatedIds: ["shou", "amari", "joyo_no_teiri", "insuuteiri"]
  },
  {
    id: "shou",
    term: "商",
    kana: "しょう",
    yomi: "shou",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "割り算の結果として得られる値や式．",
    description: "割り算の結果として得られる値や式．",
    bodyHtml: `
      <p>
        割り算の結果として得られる値や式を商という．
      </p>
      <p>
        整式\\(A\\)を整式\\(B\\)で割って，
      </p>
      <div class="math-block">
        \\[
        A=BQ+R
        \\]
      </div>
      <p>
        と表されるとき，\\(Q\\)が商である．
      </p>
    `,
    relatedIds: ["seishiki_no_johou", "amari"]
  },
  {
    id: "amari",
    term: "余り",
    kana: "あまり",
    yomi: "amari",
    group: "あ",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "割り算で，割り切れずに残る値や式．",
    description: "割り算で，割り切れずに残る値や式．",
    bodyHtml: `
      <p>
        割り算で，割り切れずに残る値や式を余りという．
      </p>
      <p>
        整式\\(A\\)を整式\\(B\\)で割って，
      </p>
      <div class="math-block">
        \\[
        A=BQ+R
        \\]
      </div>
      <p>
        と表されるとき，\\(R\\)が余りである．このとき，余り\\(R\\)の次数は，割る式\\(B\\)の次数より低い．
      </p>
    `,
    relatedIds: ["seishiki_no_johou", "shou", "joyo_no_teiri"]
  },
  {
    id: "joyo_no_teiri",
    term: "剰余の定理",
    kana: "じょうよのていり",
    yomi: "joyo_no_teiri",
    group: "し",
    type: "定理",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "整式\\(P(x)\\)を\\(x-a\\)で割った余りは\\(P(a)\\)であるという定理．",
    description: "整式\\(P(x)\\)を\\(x-a\\)で割った余りは\\(P(a)\\)であるという定理．",
    bodyHtml: `
      <p>
        整式\\(P(x)\\)を\\(x-a\\)で割った余りは，\\(P(a)\\)である．これを剰余の定理という．
      </p>
      <h3>証明</h3>
      <p>
        \\(P(x)\\)を\\(x-a\\)で割った商を\\(Q(x)\\)，余りを\\(R\\)とする．割る式\\(x-a\\)は1次式なので，余りは定数である．したがって，
      </p>
      <div class="math-block">
        \\[
        P(x)=(x-a)Q(x)+R
        \\]
      </div>
      <p>
        と表せる．ここで\\(x=a\\)を代入すると，
      </p>
      <div class="math-block">
        \\[
        P(a)=(a-a)Q(a)+R=R
        \\]
      </div>
      <p>
        となる．よって，余りは\\(P(a)\\)である．
      </p>
    `,
    relatedIds: ["seishiki_no_johou", "amari", "insuuteiri"]
  },
  {
    id: "insuuteiri",
    term: "因数定理",
    kana: "いんすうていり",
    yomi: "insuuteiri",
    group: "い",
    type: "定理",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "\\(P(a)=0\\)ならば，\\(P(x)\\)は\\(x-a\\)を因数にもつという定理．",
    description: "\\(P(a)=0\\)ならば，\\(P(x)\\)は\\(x-a\\)を因数にもつという定理．",
    bodyHtml: `
      <p>
        整式\\(P(x)\\)について，
      </p>
      <div class="math-block">
        \\[
        P(a)=0
        \\]
      </div>
      <p>
        が成り立つことと，\\(P(x)\\)が\\(x-a\\)を因数にもつことは同値である．これを因数定理という．
      </p>
      <h3>証明</h3>
      <p>
        剰余の定理より，\\(P(x)\\)を\\(x-a\\)で割った余りは\\(P(a)\\)である．
      </p>
      <p>
        したがって，\\(P(a)=0\\)ならば余りが\\(0\\)であるから，\\(P(x)\\)は\\(x-a\\)で割り切れる．つまり，\\(x-a\\)を因数にもつ．
      </p>
      <p>
        逆に，\\(P(x)\\)が\\(x-a\\)を因数にもつならば，ある整式\\(Q(x)\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        P(x)=(x-a)Q(x)
        \\]
      </div>
      <p>
        と表せる．ここで\\(x=a\\)を代入すると，
      </p>
      <div class="math-block">
        \\[
        P(a)=0
        \\]
      </div>
      <p>
        となる．よって同値である．
      </p>
    `,
    relatedIds: ["joyo_no_teiri", "insuu", "koutou_houteishiki"]
  },
  {
    id: "koutou_houteishiki",
    term: "高次方程式",
    kana: "こうじほうていしき",
    yomi: "koutou_houteishiki",
    group: "こ",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "3次以上の整式を含む方程式．",
    description: "3次以上の整式を含む方程式．",
    bodyHtml: `
      <p>
        3次以上の整式を含む方程式を高次方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^3-6x^2+11x-6=0
        \\]
      </div>
      <p>
        は3次方程式であり，高次方程式である．
      </p>
      <p>
        高次方程式では，因数定理などを用いて左辺を因数分解し，積が\\(0\\)になる条件から解を求めることが多い．
      </p>
    `,
    relatedIds: ["insuuteiri", "insubunkai", "fukusosuu"]
  },
  {
    id: "sanji_houteishiki",
    term: "3次方程式",
    kana: "さんじほうていしき",
    yomi: "sanji_houteishiki",
    group: "さ",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "整理すると3次式を含む方程式になるもの．",
    description: "整理すると3次式を含む方程式になるもの．",
    bodyHtml: `
      <p>
        整理すると3次式を含む方程式になるものを3次方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^3-1=0
        \\]
      </div>
      <p>
        は3次方程式である．
      </p>
      <p>
        3次方程式では，因数分解や因数定理を用いて解くことが多い．
      </p>
    `,
    relatedIds: ["koutou_houteishiki", "insuuteiri"]
  },
  {
    id: "fukusosuu",
    term: "複素数",
    kana: "ふくそすう",
    yomi: "fukusosuu",
    group: "ふ",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "\\(a+bi\\)の形で表される数．ただし，\\(a,b\\)は実数，\\(i\\)は虚数単位である．",
    description: "\\(a+bi\\)の形で表される数．ただし，\\(a,b\\)は実数，\\(i\\)は虚数単位である．",
    bodyHtml: `
      <p>
        実数\\(a,b\\)と虚数単位\\(i\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        a+bi
        \\]
      </div>
      <p>
        の形で表される数を複素数という．ここで，\\(i\\)は
      </p>
      <div class="math-block">
        \\[
        i^2=-1
        \\]
      </div>
      <p>
        を満たす数として考える．
      </p>
      <p>
        実数も，\\(b=0\\)とすれば\\(a+0i\\)と表せるので，複素数に含まれる．
      </p>
    `,
    relatedIds: ["kyosu_tani", "jitsubu", "kyobu", "kyouyaku_fukusosuu"]
  },
  {
    id: "kyosu_tani",
    term: "虚数単位",
    kana: "きょすうたんい",
    yomi: "kyosu_tani",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "2乗すると\\(-1\\)になる数\\(i\\)．",
    description: "2乗すると\\(-1\\)になる数\\(i\\)．",
    bodyHtml: `
      <p>
        2乗すると\\(-1\\)になる数を虚数単位といい，\\(i\\)で表す．
      </p>
      <div class="math-block">
        \\[
        i^2=-1
        \\]
      </div>
      <p>
        この記号を用いることで，実数の範囲では解をもたなかった方程式\\(x^2+1=0\\)の解を，
      </p>
      <div class="math-block">
        \\[
        x=\\pm i
        \\]
      </div>
      <p>
        と表せる．
      </p>
    `,
    relatedIds: ["fukusosuu", "kyosu"]
  },
  {
    id: "kyosu",
    term: "虚数",
    kana: "きょすう",
    yomi: "kyosu",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "実数ではない複素数．",
    description: "実数ではない複素数．",
    bodyHtml: `
      <p>
        実数ではない複素数を虚数という．
      </p>
      <p>
        たとえば，\\(2+3i\\)，\\(-i\\)は虚数である．
      </p>
      <p>
        複素数\\(a+bi\\)において，\\(b\\ne 0\\)であれば虚数である．
      </p>
    `,
    relatedIds: ["fukusosuu", "kyosu_tani", "jissuu"]
  },
  {
    id: "jitsubu",
    term: "実部",
    kana: "じつぶ",
    yomi: "jitsubu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "複素数\\(a+bi\\)における実数部分\\(a\\)．",
    description: "複素数\\(a+bi\\)における実数部分\\(a\\)．",
    bodyHtml: `
      <p>
        複素数\\(a+bi\\)における実数部分\\(a\\)を実部という．
      </p>
      <p>
        たとえば，複素数\\(3+2i\\)の実部は\\(3\\)である．
      </p>
    `,
    relatedIds: ["fukusosuu", "kyobu"]
  },
  {
    id: "kyobu",
    term: "虚部",
    kana: "きょぶ",
    yomi: "kyobu",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "複素数\\(a+bi\\)における\\(b\\)．",
    description: "複素数\\(a+bi\\)における\\(b\\)．",
    bodyHtml: `
      <p>
        複素数\\(a+bi\\)における\\(b\\)を虚部という．
      </p>
      <p>
        たとえば，複素数\\(3+2i\\)の虚部は\\(2\\)である．
      </p>
      <p>
        虚部は\\(bi\\)全体ではなく，\\(i\\)の係数である\\(b\\)を指すことに注意する．
      </p>
    `,
    relatedIds: ["fukusosuu", "jitsubu"]
  },
  {
    id: "kyouyaku_fukusosuu",
    term: "共役複素数",
    kana: "きょうやくふくそすう",
    yomi: "kyouyaku_fukusosuu",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "複素数\\(a+bi\\)に対して，虚部の符号を変えた複素数\\(a-bi\\)．",
    description: "複素数\\(a+bi\\)に対して，虚部の符号を変えた複素数\\(a-bi\\)．",
    bodyHtml: `
      <p>
        複素数\\(a+bi\\)に対して，虚部の符号を変えた複素数\\(a-bi\\)を，共役複素数という．
      </p>
      <p>
        たとえば，\\(3+2i\\)の共役複素数は\\(3-2i\\)である．
      </p>
      <h3>性質</h3>
      <p>
        複素数\\(z=a+bi\\)とその共役複素数\\(\\overline{z}=a-bi\\)について，
      </p>
      <div class="math-block">
        \\[
        z\\overline{z}=(a+bi)(a-bi)=a^2+b^2
        \\]
      </div>
      <p>
        が成り立つ．右辺は実数である．
      </p>
    `,
    relatedIds: ["fukusosuu", "jitsubu", "kyobu"]
  },
  {
    id: "fukusosuu_no_soutou",
    term: "複素数の相等",
    kana: "ふくそすうのそうとう",
    yomi: "fukusosuu_no_soutou",
    group: "ふ",
    type: "性質",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "複素数は，実部どうし，虚部どうしが等しいとき等しい．",
    description: "複素数は，実部どうし，虚部どうしが等しいとき等しい．",
    bodyHtml: `
      <p>
        実数\\(a,b,c,d\\)について，
      </p>
      <div class="math-block">
        \\[
        a+bi=c+di
        \\]
      </div>
      <p>
        が成り立つことと，
      </p>
      <div class="math-block">
        \\[
        a=c,\\quad b=d
        \\]
      </div>
      <p>
        が成り立つことは同値である．これを複素数の相等という．
      </p>
      <p>
        つまり，複素数が等しいかどうかは，実部どうし，虚部どうしを比べて判定する．
      </p>
    `,
    relatedIds: ["fukusosuu", "jitsubu", "kyobu"]
  },
  {
    id: "niji_houteishiki_no_kai",
    term: "2次方程式の解",
    kana: "にじほうていしきのかい",
    yomi: "niji_houteishiki_no_kai",
    group: "に",
    type: "用語",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "2次方程式を成り立たせる値．複素数の範囲では必ず解をもつ．",
    description: "2次方程式を成り立たせる値．複素数の範囲では必ず解をもつ．",
    bodyHtml: `
      <p>
        2次方程式を成り立たせる値を，2次方程式の解という．
      </p>
      <p>
        数学Iでは主に実数解を考えるが，数学IIでは複素数まで範囲を広げて考える．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2+1=0
        \\]
      </div>
      <p>
        は実数解をもたないが，複素数の範囲では，
      </p>
      <div class="math-block">
        \\[
        x=\\pm i
        \\]
      </div>
      <p>
        という解をもつ．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "fukusosuu", "kyosu_tani"]
  },
  {
    id: "kai_to_keisuu_no_kankei",
    term: "解と係数の関係",
    kana: "かいとけいすうのかんけい",
    yomi: "kai_to_keisuu_no_kankei",
    group: "か",
    type: "定理",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "2次方程式の解の和と積を係数で表す関係．",
    description: "2次方程式の解の和と積を係数で表す関係．",
    bodyHtml: `
      <p>
        2次方程式
      </p>
      <div class="math-block">
        \\[
        ax^2+bx+c=0
        \\]
      </div>
      <p>
        の2つの解を\\(\\alpha,\\beta\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\alpha+\\beta=-\\frac{b}{a}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\alpha\\beta=\\frac{c}{a}
        \\]
      </div>
      <p>
        が成り立つ．これを解と係数の関係という．
      </p>
      <h3>証明</h3>
      <p>
        2次方程式の解が\\(\\alpha,\\beta\\)であるとき，左辺は
      </p>
      <div class="math-block">
        \\[
        ax^2+bx+c=a(x-\\alpha)(x-\\beta)
        \\]
      </div>
      <p>
        と表せる．右辺を展開すると，
      </p>
      <div class="math-block">
        \\[
        a(x-\\alpha)(x-\\beta)=a\\{x^2-(\\alpha+\\beta)x+\\alpha\\beta\\}
        \\]
      </div>
      <p>
        である．係数を比較すると，
      </p>
      <div class="math-block">
        \\[
        -a(\\alpha+\\beta)=b,\\quad a\\alpha\\beta=c
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        \\alpha+\\beta=-\\frac{b}{a},\\quad \\alpha\\beta=\\frac{c}{a}
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "keisuu", "niji_houteishiki_no_kai"]
  },
  {
    id: "shousuu_teiri",
    term: "相加平均・相乗平均の関係",
    kana: "そうかへいきんそうじょうへいきんのかんけい",
    yomi: "shousuu_teiri",
    group: "そ",
    type: "定理",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "正の数\\(a,b\\)について，\\(\\frac{a+b}{2}\\geqq\\sqrt{ab}\\)が成り立つという関係．",
    description: "正の数\\(a,b\\)について，\\(\\frac{a+b}{2}\\geqq\\sqrt{ab}\\)が成り立つという関係．",
    bodyHtml: `
      <p>
        正の数\\(a,b\\)について，
      </p>
      <div class="math-block">
        \\[
        \\frac{a+b}{2}\\geqq\\sqrt{ab}
        \\]
      </div>
      <p>
        が成り立つ．等号が成り立つのは\\(a=b\\)のときである．これを相加平均・相乗平均の関係という．
      </p>
      <h3>証明</h3>
      <p>
        \\(a>0\\)，\\(b>0\\)とする．
      </p>
      <div class="math-block">
        \\[
        (\\sqrt{a}-\\sqrt{b})^2\\geqq 0
        \\]
      </div>
      <p>
        より，
      </p>
      <div class="math-block">
        \\[
        a-2\\sqrt{ab}+b\\geqq 0
        \\]
      </div>
      <p>
        したがって，
      </p>
      <div class="math-block">
        \\[
        a+b\\geqq 2\\sqrt{ab}
        \\]
      </div>
      <p>
        である．両辺を\\(2\\)で割ると，
      </p>
      <div class="math-block">
        \\[
        \\frac{a+b}{2}\\geqq\\sqrt{ab}
        \\]
      </div>
      <p>
        を得る．等号成立は\\(\\sqrt{a}=\\sqrt{b}\\)，すなわち\\(a=b\\)のときである．
      </p>
    `,
    relatedIds: ["heikinchi", "futougou"]
  },
  {
    id: "soutouteki",
    term: "恒等式の証明",
    kana: "こうとうしきのしょうめい",
    yomi: "koutoushiki_no_shoumei",
    group: "こ",
    type: "用語",
    subject: "数学II",
    unit: "いろいろな式",
    unitIds: ["math2_various_expressions"],
    shortDescription: "文字にどのような値を代入しても等式が成り立つことを示すこと．",
    description: "文字にどのような値を代入しても等式が成り立つことを示すこと．",
    bodyHtml: `
      <p>
        文字にどのような値を代入しても等式が成り立つことを示すことを，恒等式の証明という．
      </p>
      <p>
        代表的な方法には，両辺をそれぞれ変形して同じ式にする方法，一方の辺を変形して他方の辺に一致させる方法，係数を比較する方法などがある．
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
        は左辺を展開すれば右辺と一致するので，恒等式である．
      </p>
    `,
    relatedIds: ["koutoushiki", "tenkai"]
  }
);
