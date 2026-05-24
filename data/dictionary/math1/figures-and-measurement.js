window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "sankakuhi",
    term: "三角比",
    kana: "さんかくひ",
    yomi: "sankakuhi",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "直角三角形の辺の長さの比として定められる，正弦・余弦・正接の総称．",
    description: "直角三角形の辺の長さの比として定められる，正弦・余弦・正接の総称．",
    bodyHtml: `
      <p>
        直角三角形において，1つの鋭角に対して辺の長さの比として定められる正弦，余弦，正接をまとめて三角比という．
      </p>
      <p>
        角を\\(\\theta\\)とすると，三角比には次の3つがある．
      </p>
      <ul>
        <li>正弦：\\(\\sin\\theta\\)</li>
        <li>余弦：\\(\\cos\\theta\\)</li>
        <li>正接：\\(\\tan\\theta\\)</li>
      </ul>
      <p>
        三角比を用いると，図形の辺の長さ，角の大きさ，面積などを数式で扱えるようになる．
      </p>
    `,
    relatedIds: ["seigen", "yogen", "seisetsu", "chokkaku_sankakkei"]
  },
  {
    id: "seigen",
    term: "正弦",
    kana: "せいげん",
    yomi: "seigen",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "直角三角形で，斜辺に対する対辺の比．",
    description: "直角三角形で，斜辺に対する対辺の比．",
    bodyHtml: `
      <p>
        直角三角形において，角\\(\\theta\\)に対する対辺の長さを斜辺の長さで割った値を，\\(\\theta\\)の正弦という．
      </p>
      <div class="math-block">
        \\[
        \\sin\\theta=\\frac{\\theta\\text{に対する対辺}}{\\text{斜辺}}
        \\]
      </div>
      <p>
        正弦は\\(\\sin\\theta\\)と表す．
      </p>
      <p>
        ただし，このサイトでは数式中の日本語表示を避けるため，実際の計算では辺の名前を使って表す．たとえば，直角三角形\\(\\mathrm{ABC}\\)で\\(\\angle\\mathrm{C}=90^\\circ\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\sin A=\\frac{\\mathrm{BC}}{\\mathrm{AB}}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["sin", "sankakuhi", "yogen", "seisetsu", "taihen", "shahen"]
  },
  {
    id: "sin",
    term: "sin",
    kana: "さいん",
    yomi: "sin",
    group: "S",
    type: "記号",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "正弦を表す記号．",
    description: "正弦を表す記号．",
    bodyHtml: `
      <p>
        \\(\\sin\\)は，正弦を表す記号である．
      </p>
      <p>
        たとえば，\\(\\sin\\theta\\)は，角\\(\\theta\\)の正弦を表す．
      </p>
      <p>
        詳しくは「正弦」の項目をみる．
      </p>
    `,
    relatedIds: ["seigen", "sankakuhi"]
  },
  {
    id: "yogen",
    term: "余弦",
    kana: "よげん",
    yomi: "yogen",
    group: "よ",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "直角三角形で，斜辺に対する隣辺の比．",
    description: "直角三角形で，斜辺に対する隣辺の比．",
    bodyHtml: `
      <p>
        直角三角形において，角\\(\\theta\\)に隣り合う直角でない辺の長さを斜辺の長さで割った値を，\\(\\theta\\)の余弦という．
      </p>
      <p>
        余弦は\\(\\cos\\theta\\)と表す．
      </p>
      <p>
        たとえば，直角三角形\\(\\mathrm{ABC}\\)で\\(\\angle\\mathrm{C}=90^\\circ\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\cos A=\\frac{\\mathrm{AC}}{\\mathrm{AB}}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["cos", "sankakuhi", "seigen", "seisetsu", "shahen"]
  },
  {
    id: "cos",
    term: "cos",
    kana: "こさいん",
    yomi: "cos",
    group: "C",
    type: "記号",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "余弦を表す記号．",
    description: "余弦を表す記号．",
    bodyHtml: `
      <p>
        \\(\\cos\\)は，余弦を表す記号である．
      </p>
      <p>
        たとえば，\\(\\cos\\theta\\)は，角\\(\\theta\\)の余弦を表す．
      </p>
      <p>
        詳しくは「余弦」の項目をみる．
      </p>
    `,
    relatedIds: ["yogen", "sankakuhi"]
  },
  {
    id: "seisetsu",
    term: "正接",
    kana: "せいせつ",
    yomi: "seisetsu",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "直角三角形で，隣辺に対する対辺の比．",
    description: "直角三角形で，隣辺に対する対辺の比．",
    bodyHtml: `
      <p>
        直角三角形において，角\\(\\theta\\)に対する対辺の長さを，角\\(\\theta\\)に隣り合う直角でない辺の長さで割った値を，\\(\\theta\\)の正接という．
      </p>
      <p>
        正接は\\(\\tan\\theta\\)と表す．
      </p>
      <p>
        たとえば，直角三角形\\(\\mathrm{ABC}\\)で\\(\\angle\\mathrm{C}=90^\\circ\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\tan A=\\frac{\\mathrm{BC}}{\\mathrm{AC}}
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>正弦・余弦との関係</h3>
      <p>
        \\(\\cos\\theta\\ne 0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["tan", "sankakuhi", "seigen", "yogen", "taihen"]
  },
  {
    id: "tan",
    term: "tan",
    kana: "たんじぇんと",
    yomi: "tan",
    group: "T",
    type: "記号",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "正接を表す記号．",
    description: "正接を表す記号．",
    bodyHtml: `
      <p>
        \\(\\tan\\)は，正接を表す記号である．
      </p>
      <p>
        たとえば，\\(\\tan\\theta\\)は，角\\(\\theta\\)の正接を表す．
      </p>
      <p>
        詳しくは「正接」の項目をみる．
      </p>
    `,
    relatedIds: ["seisetsu", "sankakuhi"]
  },
  {
    id: "chokkaku_sankakkei",
    term: "直角三角形",
    kana: "ちょっかくさんかくけい",
    yomi: "chokkaku_sankakkei",
    group: "ち",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "1つの角が直角である三角形．",
    description: "1つの角が直角である三角形．",
    bodyHtml: `
      <p>
        1つの角が直角である三角形を直角三角形という．
      </p>
      <p>
        直角三角形では，直角に向かい合う辺を斜辺という．また，三角比は直角三角形の辺の長さの比として導入される．
      </p>
    `,
    relatedIds: ["sankakuhi", "shahen", "taihen", "seigen", "yogen", "seisetsu"]
  },
  {
    id: "shahen",
    term: "斜辺",
    kana: "しゃへん",
    yomi: "shahen",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "直角三角形で，直角に向かい合う辺．",
    description: "直角三角形で，直角に向かい合う辺．",
    bodyHtml: `
      <p>
        直角三角形で，直角に向かい合う辺を斜辺という．
      </p>
      <p>
        斜辺は，直角三角形の3辺のうち最も長い辺である．
      </p>
      <p>
        三角比の定義では，正弦と余弦の分母に斜辺の長さが現れる．
      </p>
    `,
    relatedIds: ["chokkaku_sankakkei", "seigen", "yogen"]
  },
  {
    id: "taihen",
    term: "対辺",
    kana: "たいへん",
    yomi: "taihen",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "ある角に向かい合う辺．",
    description: "ある角に向かい合う辺．",
    bodyHtml: `
      <p>
        三角形において，ある角に向かい合う辺を，その角の対辺という．
      </p>
      <p>
        たとえば，三角形\\(\\mathrm{ABC}\\)で，角\\(A\\)に向かい合う辺は\\(\\mathrm{BC}\\)である．
      </p>
      <p>
        正弦定理では，角とその対辺の長さの関係を扱う．
      </p>
    `,
    relatedIds: ["seigen", "seigen_teiri", "sankakkei"]
  },
  {
    id: "eikaku",
    term: "鋭角",
    kana: "えいかく",
    yomi: "eikaku",
    group: "え",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "\\(0^\\circ\\)より大きく\\(90^\\circ\\)より小さい角．",
    description: "\\(0^\\circ\\)より大きく\\(90^\\circ\\)より小さい角．",
    bodyHtml: `
      <p>
        \\(0^\\circ\\)より大きく\\(90^\\circ\\)より小さい角を鋭角という．
      </p>
      <div class="math-block">
        \\[
        0^\\circ<\\theta<90^\\circ
        \\]
      </div>
      <p>
        直角三角形の直角でない2つの角は，どちらも鋭角である．
      </p>
    `,
    relatedIds: ["donkaku", "chokkaku_sankakkei", "sankakuhi"]
  },
  {
    id: "donkaku",
    term: "鈍角",
    kana: "どんかく",
    yomi: "donkaku",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "\\(90^\\circ\\)より大きく\\(180^\\circ\\)より小さい角．",
    description: "\\(90^\\circ\\)より大きく\\(180^\\circ\\)より小さい角．",
    bodyHtml: `
      <p>
        \\(90^\\circ\\)より大きく\\(180^\\circ\\)より小さい角を鈍角という．
      </p>
      <div class="math-block">
        \\[
        90^\\circ<\\theta<180^\\circ
        \\]
      </div>
      <p>
        三角比は鋭角から導入されるが，座標を用いることで鈍角の三角比も考えることができる．
      </p>
    `,
    relatedIds: ["eikaku", "sankakuhi"]
  },
  {
    id: "seigen_teiri",
    term: "正弦定理",
    kana: "せいげんていり",
    yomi: "seigen_teiri",
    group: "せ",
    type: "定理",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "三角形の辺と向かい合う角の正弦の比が，外接円の直径に等しいという定理．",
    description: "三角形の辺と向かい合う角の正弦の比が，外接円の直径に等しいという定理．",
    bodyHtml: `
      <p>
        三角形\\(\\mathrm{ABC}\\)において，\\(\\mathrm{BC}=a\\)，\\(\\mathrm{CA}=b\\)，\\(\\mathrm{AB}=c\\)，外接円の半径を\\(R\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R
        \\]
      </div>
      <p>
        が成り立つ．これを正弦定理という．
      </p>
      <h3>証明</h3>
      <p>
        まず，\\(a=\\mathrm{BC}\\)について示す．三角形\\(\\mathrm{ABC}\\)の外接円で，弧\\(\\mathrm{BC}\\)に対する中心角を考えると，円周角の定理より，同じ弧に対する円周角は等しい．
      </p>
      <p>
        外接円の中心を\\(\\mathrm{O}\\)とし，半径を\\(R\\)とする．弦\\(\\mathrm{BC}\\)の長さは，中心角を用いると，半径\\(R\\)の円において
      </p>
      <div class="math-block">
        \\[
        a=2R\\sin A
        \\]
      </div>
      <p>
        と表される．したがって，
      </p>
      <div class="math-block">
        \\[
        \\frac{a}{\\sin A}=2R
        \\]
      </div>
      <p>
        である．同様に，
      </p>
      <div class="math-block">
        \\[
        \\frac{b}{\\sin B}=2R,\\quad \\frac{c}{\\sin C}=2R
        \\]
      </div>
      <p>
        も成り立つ．よって，
      </p>
      <div class="math-block">
        \\[
        \\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["seigen", "taihen", "gaisetsuen", "hankei"]
  },
  {
    id: "yogen_teiri",
    term: "余弦定理",
    kana: "よげんていり",
    yomi: "yogen_teiri",
    group: "よ",
    type: "定理",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "三角形の3辺と1つの角の余弦の関係を表す定理．",
    description: "三角形の3辺と1つの角の余弦の関係を表す定理．",
    bodyHtml: `
      <p>
        三角形\\(\\mathrm{ABC}\\)において，\\(\\mathrm{BC}=a\\)，\\(\\mathrm{CA}=b\\)，\\(\\mathrm{AB}=c\\)とすると，
      </p>
      <div class="math-block">
        \\[
        a^2=b^2+c^2-2bc\\cos A
        \\]
      </div>
      <p>
        が成り立つ．同様に，
      </p>
      <div class="math-block">
        \\[
        b^2=c^2+a^2-2ca\\cos B
        \\]
      </div>
      <div class="math-block">
        \\[
        c^2=a^2+b^2-2ab\\cos C
        \\]
      </div>
      <p>
        も成り立つ．これを余弦定理という．
      </p>
      <h3>証明</h3>
      <p>
        点\\(\\mathrm{A}\\)を原点に置き，辺\\(\\mathrm{AB}\\)を\\(x\\)軸上にとる．\\(\\mathrm{AB}=c\\)，\\(\\mathrm{AC}=b\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{B}=(c,0),\\quad \\mathrm{C}=(b\\cos A,b\\sin A)
        \\]
      </div>
      <p>
        と表せる．したがって，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        a^2
        &=\\mathrm{BC}^2 \\\\
        &=(b\\cos A-c)^2+(b\\sin A)^2 \\\\
        &=b^2\\cos^2 A-2bc\\cos A+c^2+b^2\\sin^2 A \\\\
        &=b^2(\\cos^2 A+\\sin^2 A)+c^2-2bc\\cos A \\\\
        &=b^2+c^2-2bc\\cos A
        \\end{aligned}
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        a^2=b^2+c^2-2bc\\cos A
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["yogen", "sankakuhi", "taihen"]
  },
  {
    id: "gaisetsuen",
    term: "外接円",
    kana: "がいせつえん",
    yomi: "gaisetsuen",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "多角形のすべての頂点を通る円．",
    description: "多角形のすべての頂点を通る円．",
    bodyHtml: `
      <p>
        多角形のすべての頂点を通る円を，その多角形の外接円という．
      </p>
      <p>
        特に，三角形の3つの頂点を通る円を，その三角形の外接円という．
      </p>
      <p>
        三角形の外接円の半径は，正弦定理に現れる．
      </p>
    `,
    relatedIds: ["seigen_teiri", "hankei", "sankakkei"]
  },
  {
    id: "naisetsuen",
    term: "内接円",
    kana: "ないせつえん",
    yomi: "naisetsuen",
    group: "な",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "多角形のすべての辺に接する円．",
    description: "多角形のすべての辺に接する円．",
    bodyHtml: `
      <p>
        多角形のすべての辺に接する円を，その多角形の内接円という．
      </p>
      <p>
        特に，三角形の3辺すべてに接する円を，その三角形の内接円という．
      </p>
      <p>
        三角形の面積は，内接円の半径\\(r\\)と半周長\\(s\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        S=rs
        \\]
      </div>
      <p>
        と表せる．
      </p>
    `,
    relatedIds: ["hankei", "menseki"]
  },
  {
    id: "hankei",
    term: "半径",
    kana: "はんけい",
    yomi: "hankei",
    group: "は",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "円の中心から円周上の点までの距離．",
    description: "円の中心から円周上の点までの距離．",
    bodyHtml: `
      <p>
        円の中心から円周上の点までの距離を半径という．
      </p>
      <p>
        同じ円では，半径の長さはどの方向にとっても等しい．
      </p>
      <p>
        正弦定理では，三角形の外接円の半径\\(R\\)が現れる．
      </p>
    `,
    relatedIds: ["gaisetsuen", "naisetsuen", "seigen_teiri"]
  },
  {
    id: "menseki",
    term: "面積",
    kana: "めんせき",
    yomi: "menseki",
    group: "め",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "平面図形の広さを表す量．",
    description: "平面図形の広さを表す量．",
    bodyHtml: `
      <p>
        平面図形の広さを表す量を面積という．
      </p>
      <p>
        三角形の面積は，底辺を\\(a\\)，高さを\\(h\\)とすると，
      </p>
      <div class="math-block">
        \\[
        S=\\frac{1}{2}ah
        \\]
      </div>
      <p>
        である．また，三角形の2辺の長さを\\(b,c\\)，その間の角を\\(A\\)とすると，
      </p>
      <div class="math-block">
        \\[
        S=\\frac{1}{2}bc\\sin A
        \\]
      </div>
      <p>
        と表せる．
      </p>
      <h3>三角比を用いた面積公式の理由</h3>
      <p>
        2辺\\(b,c\\)とその間の角\\(A\\)をもつ三角形を考える．辺\\(c\\)を底辺とすると，高さは\\(b\\sin A\\)である．したがって，
      </p>
      <div class="math-block">
        \\[
        S=\\frac{1}{2}\\cdot c\\cdot b\\sin A=\\frac{1}{2}bc\\sin A
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["sankakuhi", "seigen", "naisetsuen"]
  },
  {
    id: "souzihi",
    term: "相似比",
    kana: "そうじひ",
    yomi: "souzihi",
    group: "そ",
    type: "定義",
    subject: "数学I",
    unit: "図形と計量",
    unitIds: ["math1_figures_and_measurement"],
    shortDescription: "相似な図形で，対応する辺の長さの比．",
    description: "相似な図形で，対応する辺の長さの比．",
    bodyHtml: `
      <p>
        相似な図形で，対応する辺の長さの比を相似比という．
      </p>
      <p>
        相似比が\\(m:n\\)であるとき，対応する辺の長さの比はすべて\\(m:n\\)である．
      </p>
      <p>
        また，相似比が\\(m:n\\)なら，面積比は\\(m^2:n^2\\)になる．
      </p>
      <h3>面積比が相似比の2乗になる理由</h3>
      <p>
        相似比が\\(m:n\\)の2つの三角形を考える．対応する底辺の比も高さの比も\\(m:n\\)である．したがって，面積は底辺と高さの積に比例するので，面積比は
      </p>
      <div class="math-block">
        \\[
        m^2:n^2
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["menseki"]
  }
);
