window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "sekibunhou",
    term: "積分法",
    kana: "せきぶんほう",
    yomi: "sekibunhou",
    group: "せ",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "原始関数や定積分を求めたり，面積・体積などを求めたりする方法．",
    description: "原始関数や定積分を求めたり，面積・体積などを求めたりする方法．",
    bodyHtml: `
      <p>
        原始関数や定積分を求めたり，定積分を用いて面積・体積・曲線の長さなどを求めたりする方法を積分法という．
      </p>
      <p>
        数学IIIでは，置換積分法，部分積分法，分数関数・無理関数・三角関数・指数関数・対数関数を含む積分などを扱う．
      </p>
      <p>
        積分法は，微分法と深く関係しており，原始関数を求めることは，微分の逆の操作として考えられる．
      </p>
    `,
    relatedIds: ["ganshi_kansuu_math3", "fusetei_sekibun_math3", "teisekibun_math3", "bibunhou"]
  },
  {
    id: "ganshi_kansuu_math3",
    term: "原始関数",
    kana: "げんしかんすう",
    yomi: "ganshi_kansuu_math3",
    group: "け",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
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
        たとえば，\\(F(x)=\\sin x\\)は，\\(f(x)=\\cos x\\)の原始関数である．
      </p>
      <p>
        また，\\(F(x)+C\\)も微分すると\\(f(x)\\)になる．ここで\\(C\\)は定数である．したがって，原始関数は定数の差を除いて定まる．
      </p>
    `,
    relatedIds: ["fusetei_sekibun_math3", "sekibun_teisu_math3", "doukansuu_math3"]
  },
  {
    id: "fusetei_sekibun_math3",
    term: "不定積分",
    kana: "ふていせきぶん",
    yomi: "fusetei_sekibun_math3",
    group: "ふ",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "関数の原始関数全体を求めること．",
    description: "関数の原始関数全体を求めること．",
    bodyHtml: `
      <p>
        関数\\(f(x)\\)の原始関数全体を求めることを不定積分という．
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
        \\(F^{\\prime}(x)=f(x)\\)であるとき，
      </p>
      <div class="math-block">
        \\[
        \\int f(x)\\,dx=F(x)+C
        \\]
      </div>
      <p>
        である．ここで\\(C\\)は積分定数である．
      </p>
    `,
    relatedIds: ["ganshi_kansuu_math3", "sekibun_teisu_math3", "sekibun_suru_math3"]
  },
  {
    id: "sekibun_suru_math3",
    term: "積分する",
    kana: "せきぶんする",
    yomi: "sekibun_suru_math3",
    group: "せ",
    type: "操作",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "原始関数や定積分の値を求めること．",
    description: "原始関数や定積分の値を求めること．",
    bodyHtml: `
      <p>
        原始関数や定積分の値を求めることを積分するという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\int \\cos x\\,dx=\\sin x+C
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        積分することによって，面積，体積，曲線の長さなどを求めることができる．
      </p>
    `,
    relatedIds: ["fusetei_sekibun_math3", "teisekibun_math3", "sekibunhou"]
  },
  {
    id: "sekibun_teisu_math3",
    term: "積分定数",
    kana: "せきぶんていすう",
    yomi: "sekibun_teisu_math3",
    group: "せ",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
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
        \\int \\frac{1}{x}\\,dx=\\log |x|+C
        \\]
      </div>
      <p>
        における\\(C\\)が積分定数である．
      </p>
      <p>
        定数は微分すると\\(0\\)になるので，原始関数は定数の差を除いて定まる．
      </p>
    `,
    relatedIds: ["fusetei_sekibun_math3", "ganshi_kansuu_math3"]
  },
  {
    id: "teisekibun_math3",
    term: "定積分",
    kana: "ていせきぶん",
    yomi: "teisekibun_math3",
    group: "て",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "積分区間を定めて積分した値．",
    description: "積分区間を定めて積分した値．",
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
        定積分は，関数のグラフと\\(x\\)軸の間の符号付き面積と関係している．
      </p>
    `,
    relatedIds: ["sekibun_kukan_math3", "ganshi_kansuu_math3", "menseki_sekibun_math3"]
  },
  {
    id: "sekibun_kukan_math3",
    term: "積分区間",
    kana: "せきぶんくかん",
    yomi: "sekibun_kukan_math3",
    group: "せ",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
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
    relatedIds: ["teisekibun_math3", "katan_math3", "joutan_math3"]
  },
  {
    id: "katan_math3",
    term: "下端",
    kana: "かたん",
    yomi: "katan_math3",
    group: "か",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
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
    relatedIds: ["teisekibun_math3", "joutan_math3", "sekibun_kukan_math3"]
  },
  {
    id: "joutan_math3",
    term: "上端",
    kana: "じょうたん",
    yomi: "joutan_math3",
    group: "し",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
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
    relatedIds: ["teisekibun_math3", "katan_math3", "sekibun_kukan_math3"]
  },
  {
    id: "chikans ekibunhou",
    term: "置換積分法",
    kana: "ちかんせきぶんほう",
    yomi: "chikan_sekibunhou",
    group: "ち",
    type: "方法",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "変数を置き換えて，積分しやすい形に直す方法．",
    description: "変数を置き換えて，積分しやすい形に直す方法．",
    bodyHtml: `
      <p>
        変数を置き換えて，積分しやすい形に直す方法を置換積分法という．
      </p>
      <p>
        たとえば，\\(u=g(x)\\)とおくと，
      </p>
      <div class="math-block">
        \\[
        \\frac{du}{dx}=g^{\\prime}(x)
        \\]
      </div>
      <p>
        であるから，形式的には
      </p>
      <div class="math-block">
        \\[
        du=g^{\\prime}(x)\\,dx
        \\]
      </div>
      <p>
        と考えて，積分を\\(u\\)の式に直す．
      </p>
      <p>
        例として，
      </p>
      <div class="math-block">
        \\[
        \\int 2x\\cos(x^2)\\,dx
        \\]
      </div>
      <p>
        で\\(u=x^2\\)とおくと，\\(du=2x\\,dx\\)であるから，
      </p>
      <div class="math-block">
        \\[
        \\int 2x\\cos(x^2)\\,dx=\\int \\cos u\\,du=\\sin u+C=\\sin(x^2)+C
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["sekibunhou", "fusetei_sekibun_math3", "teisekibun_math3"]
  },
  {
    id: "bubun_sekibunhou",
    term: "部分積分法",
    kana: "ぶぶんせきぶんほう",
    yomi: "bubun_sekibunhou",
    group: "ふ",
    type: "方法",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "積の微分法から導かれる，積の形の関数を積分する方法．",
    description: "積の微分法から導かれる，積の形の関数を積分する方法．",
    bodyHtml: `
      <p>
        積の微分法から導かれる，積の形の関数を積分する方法を部分積分法という．
      </p>
      <p>
        微分可能な関数\\(f(x)\\)，\\(g(x)\\)について，
      </p>
      <div class="math-block">
        \\[
        \\int f^{\\prime}(x)g(x)\\,dx=f(x)g(x)-\\int f(x)g^{\\prime}(x)\\,dx
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <h3>証明</h3>
      <p>
        積の微分法より，
      </p>
      <div class="math-block">
        \\[
        \\{f(x)g(x)\\}^{\\prime}=f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)
        \\]
      </div>
      <p>
        である．両辺を積分すると，
      </p>
      <div class="math-block">
        \\[
        f(x)g(x)=\\int f^{\\prime}(x)g(x)\\,dx+\int f(x)g^{\\prime}(x)\\,dx
        \\]
      </div>
      <p>
        となるので，
      </p>
      <div class="math-block">
        \\[
        \\int f^{\\prime}(x)g(x)\\,dx=f(x)g(x)-\\int f(x)g^{\\prime}(x)\\,dx
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["sekibunhou", "seki_no_bibunhou"]
  },
  {
    id: "bubun_bunsuu_bunkai",
    term: "部分分数分解",
    kana: "ぶぶんぶんすうぶんかい",
    yomi: "bubun_bunsuu_bunkai",
    group: "ふ",
    type: "方法",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "分数式を，より簡単な分数式の和に分解すること．",
    description: "分数式を，より簡単な分数式の和に分解すること．",
    bodyHtml: `
      <p>
        分数式を，より簡単な分数式の和に分解することを部分分数分解という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{x(x+1)}=\\frac{1}{x}-\\frac{1}{x+1}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        部分分数分解を用いると，分数関数の積分を簡単な対数関数の積分に分けられることがある．
      </p>
    `,
    relatedIds: ["bunsuu_kansuu", "fusetei_sekibun_math3"]
  },
  {
    id: "bunsuu_kansuu",
    term: "分数関数",
    kana: "ぶんすうかんすう",
    yomi: "bunsuu_kansuu",
    group: "ふ",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration", "math3_limits"],
    shortDescription: "多項式の商の形で表される関数．",
    description: "多項式の商の形で表される関数．",
    bodyHtml: `
      <p>
        多項式\\(P(x)\\)，\\(Q(x)\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        f(x)=\\frac{P(x)}{Q(x)}
        \\]
      </div>
      <p>
        の形で表される関数を分数関数という．ただし，\\(Q(x)\\ne 0\\)である範囲で考える．
      </p>
      <p>
        分数関数の積分では，必要に応じて整式の除法や部分分数分解を用いる．
      </p>
    `,
    relatedIds: ["bubun_bunsuu_bunkai", "seishiki_no_johou"]
  },
  {
    id: "muri_kansuu",
    term: "無理関数",
    kana: "むりかんすう",
    yomi: "muri_kansuu",
    group: "む",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration", "math3_limits"],
    shortDescription: "根号を含む式で表される関数．",
    description: "根号を含む式で表される関数．",
    bodyHtml: `
      <p>
        根号を含む式で表される関数を無理関数という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y=\\sqrt{x+1}
        \\]
      </div>
      <p>
        は無理関数である．
      </p>
      <p>
        無理関数では，根号の中が\\(0\\)以上であることなど，定義域に注意する必要がある．
      </p>
    `,
    relatedIds: ["konngou_wo_fukumu_shiki", "teigiki"]
  },
  {
    id: "menseki_sekibun_math3",
    term: "面積（積分）",
    kana: "めんせき",
    yomi: "menseki_sekibun_math3",
    group: "め",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "積分を用いて求める，グラフで囲まれた部分の広さ．",
    description: "積分を用いて求める，グラフで囲まれた部分の広さ．",
    bodyHtml: `
      <p>
        積分を用いると，グラフと\\(x\\)軸で囲まれた部分や，2つのグラフで囲まれた部分の面積を求めることができる．
      </p>
      <p>
        区間\\(a\\leqq x\\leqq b\\)で\\(f(x)\geqq g(x)\\)であるとき，2つの曲線\\(y=f(x)\\)，\\(y=g(x)\\)と直線\\(x=a\\)，\\(x=b\\)で囲まれた部分の面積は，
      </p>
      <div class="math-block">
        \\[
        \\int_a^b \\{f(x)-g(x)\\}\\,dx
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        上側の関数から下側の関数をひくことが基本である．
      </p>
    `,
    relatedIds: ["teisekibun_math3", "taiseki", "kyokusen"]
  },
  {
    id: "taiseki",
    term: "体積（積分）",
    kana: "たいせき",
    yomi: "taiseki",
    group: "た",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "積分を用いて求める立体の大きさ．",
    description: "積分を用いて求める立体の大きさ．",
    bodyHtml: `
      <p>
        積分を用いると，断面積をたし合わせる考え方によって立体の体積を求めることができる．
      </p>
      <p>
        \\(x\\)に垂直な断面の面積が\\(S(x)\\)である立体について，\\(a\leqq x\leqq b\\)の範囲の体積\\(V\\)は，
      </p>
      <div class="math-block">
        \\[
        V=\\int_a^b S(x)\\,dx
        \\]
      </div>
      <p>
        で求められる．
      </p>
    `,
    relatedIds: ["danmenseki", "kaitentai_no_taiseki"]
  },
  {
    id: "danmenseki",
    term: "断面積",
    kana: "だんめんせき",
    yomi: "danmenseki",
    group: "た",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "立体を平面で切ったときにできる断面の面積．",
    description: "立体を平面で切ったときにできる断面の面積．",
    bodyHtml: `
      <p>
        立体を平面で切ったときにできる断面の面積を断面積という．
      </p>
      <p>
        断面積が位置\\(x\\)の関数\\(S(x)\\)として表されるとき，その立体の体積は定積分
      </p>
      <div class="math-block">
        \\[
        \\int_a^b S(x)\\,dx
        \\]
      </div>
      <p>
        によって求められる．
      </p>
    `,
    relatedIds: ["taiseki"]
  },
  {
    id: "kaitentai_no_taiseki",
    term: "回転体の体積",
    kana: "かいてんたいのたいせき",
    yomi: "kaitentai_no_taiseki",
    group: "か",
    type: "公式",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "平面図形を軸のまわりに回転してできる立体の体積．",
    description: "平面図形を軸のまわりに回転してできる立体の体積．",
    bodyHtml: `
      <p>
        平面図形をある軸のまわりに回転してできる立体を回転体という．その体積は，断面積を積分して求める．
      </p>
      <p>
        区間\\(a\leqq x\leqq b\\)で\\(y=f(x)\geqq 0\\)とする．曲線\\(y=f(x)\\)，\\(x\\)軸，直線\\(x=a\\)，\\(x=b\\)で囲まれた部分を\\(x\\)軸のまわりに回転してできる立体の体積は，
      </p>
      <div class="math-block">
        \\[
        V=\\pi\\int_a^b \\{f(x)\\}^2\\,dx
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>理由</h3>
      <p>
        位置\\(x\\)で\\(x\\)軸に垂直な断面を考えると，半径\\(f(x)\\)の円になる．したがって断面積は
      </p>
      <div class="math-block">
        \\[
        \\pi\\{f(x)\\}^2
        \\]
      </div>
      <p>
        である．よって，これを\\(a\\)から\\(b\\)まで積分すれば体積が求まる．
      </p>
    `,
    relatedIds: ["taiseki", "danmenseki"]
  },
  {
    id: "kyokusen_no_nagasa",
    term: "曲線の長さ",
    kana: "きょくせんのながさ",
    yomi: "kyokusen_no_nagasa",
    group: "き",
    type: "公式",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "積分を用いて求める曲線の長さ．",
    description: "積分を用いて求める曲線の長さ．",
    bodyHtml: `
      <p>
        関数\\(y=f(x)\\)が区間\\(a\leqq x\leqq b\\)で滑らかであるとき，曲線の長さ\\(L\\)は，
      </p>
      <div class="math-block">
        \\[
        L=\\int_a^b \\sqrt{1+\\{f^{\\prime}(x)\\}^2}\\,dx
        \\]
      </div>
      <p>
        で求められる．
      </p>
      <p>
        また，媒介変数表示
      </p>
      <div class="math-block">
        \\[
        x=f(t),\\quad y=g(t)
        \\]
      </div>
      <p>
        で表される曲線について，\\(\\alpha\leqq t\leqq \beta\\)に対応する部分の長さは，
      </p>
      <div class="math-block">
        \\[
        L=\\int_{\\alpha}^{\\beta}\\sqrt{\\left(\\frac{dx}{dt}\\right)^2+\\left(\\frac{dy}{dt}\\right)^2}\\,dt
        \\]
      </div>
      <p>
        で求められる．
      </p>
    `,
    relatedIds: ["baisuu_hensuu_hyouji", "baisuu_hensuu_no_bibun"]
  },
  {
    id: "seppen_hou",
    term: "接線の長さ",
    kana: "せっせんのながさ",
    yomi: "seppen_hou",
    group: "せ",
    type: "用語",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration"],
    shortDescription: "曲線や円に接する線分の長さ．文脈により意味が変わる．",
    description: "曲線や円に接する線分の長さ．文脈により意味が変わる．",
    bodyHtml: `
      <p>
        接線の長さという言葉は文脈によって意味が変わる．円の場合，円外の点から円に引いた接線について，外部の点から接点までの線分の長さを接線の長さということがある．
      </p>
      <p>
        一方，積分法では，曲線そのものの長さを求める問題で，微小な接線方向の長さを積み重ねる考え方を用いることがある．この場合は，曲線の長さの公式につながる．
      </p>
    `,
    relatedIds: ["sessensu_math3", "kyokusen_no_nagasa"]
  },
  {
    id: "kyokusen",
    term: "曲線",
    kana: "きょくせん",
    yomi: "kyokusen",
    group: "き",
    type: "定義",
    subject: "数学III",
    unit: "積分法",
    unitIds: ["math3_integration", "math3_differentiation"],
    shortDescription: "直線に限らない，連続的に曲がる線．",
    description: "直線に限らない，連続的に曲がる線．",
    bodyHtml: `
      <p>
        直線に限らない，連続的に曲がる線を曲線という．
      </p>
      <p>
        関数のグラフ，円，楕円，放物線，媒介変数表示で表される図形などは，曲線として扱われる．
      </p>
      <p>
        微分法では曲線の接線や凹凸を調べ，積分法では曲線で囲まれた面積や曲線の長さを求める．
      </p>
    `,
    relatedIds: ["sessensu_math3", "menseki_sekibun_math3", "kyokusen_no_nagasa"]
  }
);
