window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "kansuu",
    term: "関数",
    kana: "かんすう",
    yomi: "kansuu",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "一方の値を決めると，もう一方の値がただ1つに決まる関係．",
    description: "一方の値を決めると，もう一方の値がただ1つに決まる関係．",
    bodyHtml: `
      <p>
        ある値を決めると，それに対応する値がただ1つに決まる関係を関数という．
      </p>
      <p>
        たとえば，\\(y=2x+1\\)では，\\(x\\)の値を決めると，\\(y\\)の値がただ1つに決まる．したがって，\\(y\\)は\\(x\\)の関数である．
      </p>
      <p>
        関数では，入力にあたる値を変数，出力にあたる値を関数の値として考えることが多い．
      </p>
    `,
    relatedIds: ["kansuu_fx", "ichijikansuu", "nijikansuu", "teigiiki", "chiiki"]
  },
  {
    id: "kansuu_fx",
    term: "関数 f(x)",
    kana: "かんすうえふえっくす",
    yomi: "kansuu_fx",
    group: "か",
    type: "記法",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "\\(x\\)の値に対応する関数の値を\\(f(x)\\)と表す記法．",
    description: "\\(x\\)の値に対応する関数の値を\\(f(x)\\)と表す記法．",
    bodyHtml: `
      <p>
        関数において，\\(x\\)の値に対応する値を\\(f(x)\\)と表すことがある．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        f(x)=x^2+2x+3
        \\]
      </div>
      <p>
        と定めると，\\(x=1\\)に対応する値は，
      </p>
      <div class="math-block">
        \\[
        f(1)=1^2+2\\cdot 1+3=6
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kansuu", "nijikansuu"]
  },
  {
    id: "ichijikansuu",
    term: "1次関数",
    kana: "いちじかんすう",
    yomi: "ichijikansuu",
    group: "い",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "\\(y=ax+b\\)の形で表される関数．ただし，\\(a\\ne 0\\)とする．",
    description: "\\(y=ax+b\\)の形で表される関数．ただし，\\(a\\ne 0\\)とする．",
    bodyHtml: `
      <p>
        \\(a\\ne 0\\)として，\\(y=ax+b\\)の形で表される関数を1次関数という．
      </p>
      <p>
        1次関数のグラフは直線になる．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y=2x+1
        \\]
      </div>
      <p>
        は1次関数である．
      </p>
    `,
    relatedIds: ["kansuu", "graph", "nijikansuu"]
  },
  {
    id: "nijikansuu",
    term: "2次関数",
    kana: "にじかんすう",
    yomi: "nijikansuu",
    group: "に",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "\\(y=ax^2+bx+c\\)の形で表される関数．ただし，\\(a\\ne 0\\)とする．",
    description: "\\(y=ax^2+bx+c\\)の形で表される関数．ただし，\\(a\\ne 0\\)とする．",
    bodyHtml: `
      <p>
        \\(a\\ne 0\\)として，\\(y=ax^2+bx+c\\)の形で表される関数を2次関数という．
      </p>
      <p>
        2次関数のグラフは放物線になる．また，\\(a>0\\)のときは下に凸，\\(a<0\\)のときは上に凸である．
      </p>
      <p>
        2次関数は，平方完成によって，
      </p>
      <div class="math-block">
        \\[
        y=a(x-p)^2+q
        \\]
      </div>
      <p>
        の形に変形できる．このとき，グラフの頂点は\\((p,q)\\)，軸は直線\\(x=p\\)である．
      </p>
    `,
    relatedIds: ["houbutsusen", "heihoukansei", "chouten", "jiku", "uenitotsu", "shitanitotsu"]
  },
  {
    id: "graph",
    term: "グラフ",
    kana: "ぐらふ",
    yomi: "graph",
    group: "く",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "関数の対応関係を座標平面上の点の集まりとして表したもの．",
    description: "関数の対応関係を座標平面上の点の集まりとして表したもの．",
    bodyHtml: `
      <p>
        関数の対応関係を座標平面上の点の集まりとして表したものをグラフという．
      </p>
      <p>
        たとえば，関数\\(y=f(x)\\)のグラフは，\\(y=f(x)\\)を満たす点\\((x,y)\\)全体である．
      </p>
      <p>
        グラフを用いると，関数の増減，最大値・最小値，方程式や不等式の解などを視覚的に考えることができる．
      </p>
    `,
    relatedIds: ["kansuu", "zahyouheimen", "nijikansuu"]
  },
  {
    id: "zahyou",
    term: "座標",
    kana: "ざひょう",
    yomi: "zahyou",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "点の位置を数の組で表したもの．",
    description: "点の位置を数の組で表したもの．",
    bodyHtml: `
      <p>
        点の位置を数の組で表したものを座標という．
      </p>
      <p>
        座標平面上の点は，普通\\((x,y)\\)の形で表す．ここで，\\(x\\)を\\(x\\)座標，\\(y\\)を\\(y\\)座標という．
      </p>
      <p>
        たとえば，点\\((2,3)\\)は，\\(x\\)座標が\\(2\\)，\\(y\\)座標が\\(3\\)である点を表す．
      </p>
    `,
    relatedIds: ["zahyouheimen", "zahyoujiku", "genten"]
  },
  {
    id: "zahyouheimen",
    term: "座標平面",
    kana: "ざひょうへいめん",
    yomi: "zahyouheimen",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "互いに垂直な2本の数直線によって，点の位置を座標で表す平面．",
    description: "互いに垂直な2本の数直線によって，点の位置を座標で表す平面．",
    bodyHtml: `
      <p>
        互いに垂直な2本の数直線を用いて，点の位置を座標で表す平面を座標平面という．
      </p>
      <p>
        横方向の軸を\\(x\\)軸，縦方向の軸を\\(y\\)軸という．この2本の軸の交点を原点という．
      </p>
      <p>
        関数のグラフは，座標平面上に点の集まりとして表される．
      </p>
    `,
    relatedIds: ["zahyou", "zahyoujiku", "genten", "graph"]
  },
  {
    id: "zahyoujiku",
    term: "座標軸",
    kana: "ざひょうじく",
    yomi: "zahyoujiku",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "座標平面をつくる基準となる軸．",
    description: "座標平面をつくる基準となる軸．",
    bodyHtml: `
      <p>
        座標平面をつくる基準となる軸を座標軸という．
      </p>
      <p>
        座標平面では，横方向の座標軸を\\(x\\)軸，縦方向の座標軸を\\(y\\)軸という．
      </p>
      <p>
        \\(x\\)軸と\\(y\\)軸の交点が原点である．
      </p>
    `,
    relatedIds: ["zahyouheimen", "genten"]
  },
  {
    id: "genten",
    term: "原点",
    kana: "げんてん",
    yomi: "genten",
    group: "け",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "座標平面における2つの座標軸の交点．",
    description: "座標平面における2つの座標軸の交点．",
    bodyHtml: `
      <p>
        座標平面における\\(x\\)軸と\\(y\\)軸の交点を原点という．
      </p>
      <p>
        原点の座標は\\((0,0)\\)である．
      </p>
    `,
    relatedIds: ["zahyouheimen", "zahyoujiku", "zahyou"]
  },
  {
    id: "jiku",
    term: "軸",
    kana: "じく",
    yomi: "jiku",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "放物線を左右対称に分ける直線．",
    description: "放物線を左右対称に分ける直線．",
    bodyHtml: `
      <p>
        2次関数のグラフである放物線を，左右対称に分ける直線を軸という．
      </p>
      <p>
        2次関数が
      </p>
      <div class="math-block">
        \\[
        y=a(x-p)^2+q
        \\]
      </div>
      <p>
        と表されるとき，軸は直線\\(x=p\\)である．
      </p>
      <p>
        軸は頂点を通り，\\(x\\)軸に垂直な直線である．
      </p>
    `,
    relatedIds: ["chouten", "houbutsusen", "heihoukansei"]
  },
  {
    id: "chouten",
    term: "頂点",
    kana: "ちょうてん",
    yomi: "chouten",
    group: "ち",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "放物線の折り返しの中心となる点．",
    description: "放物線の折り返しの中心となる点．",
    bodyHtml: `
      <p>
        2次関数のグラフである放物線において，折り返しの中心となる点を頂点という．
      </p>
      <p>
        2次関数が
      </p>
      <div class="math-block">
        \\[
        y=a(x-p)^2+q
        \\]
      </div>
      <p>
        と表されるとき，頂点は\\((p,q)\\)である．
      </p>
      <p>
        \\(a>0\\)のとき，頂点で最小値をとる．\\(a<0\\)のとき，頂点で最大値をとる．
      </p>
    `,
    relatedIds: ["jiku", "houbutsusen", "saidaichi", "saishouchi", "heihoukansei"]
  },
  {
    id: "houbutsusen",
    term: "放物線",
    kana: "ほうぶつせん",
    yomi: "houbutsusen",
    group: "ほ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "2次関数のグラフとして現れる曲線．",
    description: "2次関数のグラフとして現れる曲線．",
    bodyHtml: `
      <p>
        2次関数のグラフとして現れる曲線を放物線という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y=x^2
        \\]
      </div>
      <p>
        のグラフは放物線である．
      </p>
      <p>
        放物線には軸と頂点がある．\\(y=a(x-p)^2+q\\)の形では，軸は直線\\(x=p\\)，頂点は\\((p,q)\\)である．
      </p>
    `,
    relatedIds: ["nijikansuu", "jiku", "chouten", "uenitotsu", "shitanitotsu"]
  },
  {
    id: "uenitotsu",
    term: "上に凸",
    kana: "うえにとつ",
    yomi: "uenitotsu",
    group: "う",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "放物線が上にふくらんでいること．",
    description: "放物線が上にふくらんでいること．",
    bodyHtml: `
      <p>
        放物線が上にふくらんでいることを，上に凸という．
      </p>
      <p>
        2次関数\\(y=ax^2+bx+c\\)では，\\(a<0\\)のときグラフは上に凸である．
      </p>
      <p>
        上に凸の放物線は，頂点で最大値をとる．
      </p>
    `,
    relatedIds: ["shitanitotsu", "nijikansuu", "houbutsusen", "saidaichi"]
  },
  {
    id: "shitanitotsu",
    term: "下に凸",
    kana: "したにとつ",
    yomi: "shitanitotsu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "放物線が下にふくらんでいること．",
    description: "放物線が下にふくらんでいること．",
    bodyHtml: `
      <p>
        放物線が下にふくらんでいることを，下に凸という．
      </p>
      <p>
        2次関数\\(y=ax^2+bx+c\\)では，\\(a>0\\)のときグラフは下に凸である．
      </p>
      <p>
        下に凸の放物線は，頂点で最小値をとる．
      </p>
    `,
    relatedIds: ["uenitotsu", "nijikansuu", "houbutsusen", "saishouchi"]
  },
  {
    id: "saidaichi",
    term: "最大値",
    kana: "さいだいち",
    yomi: "saidaichi",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "関数の値のうち，最も大きい値．",
    description: "関数の値のうち，最も大きい値．",
    bodyHtml: `
      <p>
        関数の値のうち，最も大きい値を最大値という．
      </p>
      <p>
        たとえば，定義域を\\(-1\\leqq x\\leqq 3\\)とする関数\\(y=-(x-1)^2+4\\)は，\\(x=1\\)のとき最大値\\(4\\)をとる．
      </p>
      <p>
        最大値は，単に大きくなり続けることではなく，実際にその値をとることが必要である．
      </p>
    `,
    relatedIds: ["saishouchi", "teigiiki", "chiiki", "chouten"]
  },
  {
    id: "saishouchi",
    term: "最小値",
    kana: "さいしょうち",
    yomi: "saishouchi",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "関数の値のうち，最も小さい値．",
    description: "関数の値のうち，最も小さい値．",
    bodyHtml: `
      <p>
        関数の値のうち，最も小さい値を最小値という．
      </p>
      <p>
        たとえば，関数\\(y=(x-2)^2+1\\)は，\\(x=2\\)のとき最小値\\(1\\)をとる．
      </p>
      <p>
        最小値は，単に小さくなり続けることではなく，実際にその値をとることが必要である．
      </p>
    `,
    relatedIds: ["saidaichi", "teigiiki", "chiiki", "chouten"]
  },
  {
    id: "teigiiki",
    term: "定義域",
    kana: "ていぎいき",
    yomi: "teigiiki",
    group: "て",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "関数において，変数がとることのできる値の範囲．",
    description: "関数において，変数がとることのできる値の範囲．",
    bodyHtml: `
      <p>
        関数において，変数がとることのできる値の範囲を定義域という．
      </p>
      <p>
        たとえば，\\(-1\\leqq x\\leqq 3\\)で関数\\(y=x^2\\)を考えるとき，定義域は\\(-1\\leqq x\\leqq 3\\)である．
      </p>
      <p>
        最大値や最小値を考えるときには，定義域に注意する必要がある．
      </p>
    `,
    relatedIds: ["chiiki", "kansuu", "saidaichi", "saishouchi"]
  },
  {
    id: "chiiki",
    term: "値域",
    kana: "ちいき",
    yomi: "chiiki",
    group: "ち",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "関数の値が実際にとる範囲．",
    description: "関数の値が実際にとる範囲．",
    bodyHtml: `
      <p>
        関数の値が実際にとる範囲を値域という．
      </p>
      <p>
        たとえば，\\(-1\\leqq x\\leqq 3\\)で\\(y=x^2\\)を考えると，\\(y\\)は\\(0\\)以上\\(9\\)以下の値をとるので，値域は\\(0\\leqq y\\leqq 9\\)である．
      </p>
      <p>
        値域は，定義域と関数の形によって決まる．
      </p>
    `,
    relatedIds: ["teigiiki", "kansuu", "saidaichi", "saishouchi"]
  },
  {
    id: "heihoukansei",
    term: "平方完成",
    kana: "へいほうかんせい",
    yomi: "heihoukansei",
    group: "へ",
    type: "操作",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "2次式を\\(a(x-p)^2+q\\)の形に変形すること．",
    description: "2次式を\\(a(x-p)^2+q\\)の形に変形すること．",
    bodyHtml: `
      <p>
        2次式を\\(a(x-p)^2+q\\)の形に変形することを平方完成という．
      </p>
      <p>
        平方完成をすると，2次関数の頂点や軸，最大値・最小値が読み取りやすくなる．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        x^2-4x+1
        &=(x^2-4x+4)-4+1 \\\\
        &=(x-2)^2-3
        \\end{aligned}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["nijikansuu", "chouten", "jiku", "heikouidou"]
  },
  {
    id: "heikouidou",
    term: "平行移動",
    kana: "へいこういどう",
    yomi: "heikouidou",
    group: "へ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "図形の形と向きを変えずに，すべての点を同じ方向に同じ距離だけ動かすこと．",
    description: "図形の形と向きを変えずに，すべての点を同じ方向に同じ距離だけ動かすこと．",
    bodyHtml: `
      <p>
        図形の形と向きを変えずに，すべての点を同じ方向に同じ距離だけ動かすことを平行移動という．
      </p>
      <p>
        関数のグラフでは，\\(y=f(x-p)+q\\)のグラフは，\\(y=f(x)\\)のグラフを\\(x\\)軸方向に\\(p\\)，\\(y\\)軸方向に\\(q\\)だけ平行移動したものになる．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y=(x-2)^2+3
        \\]
      </div>
      <p>
        は，\\(y=x^2\\)のグラフを右に\\(2\\)，上に\\(3\\)だけ平行移動した放物線である．
      </p>
    `,
    relatedIds: ["graph", "houbutsusen", "heihoukansei"]
  },
  {
    id: "nijihouteishiki",
    term: "2次方程式",
    kana: "にじほうていしき",
    yomi: "nijihouteishiki",
    group: "に",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "整理すると\\(ax^2+bx+c=0\\)の形になる方程式．ただし，\\(a\\ne 0\\)とする．",
    description: "整理すると\\(ax^2+bx+c=0\\)の形になる方程式．ただし，\\(a\\ne 0\\)とする．",
    bodyHtml: `
      <p>
        整理すると\\(ax^2+bx+c=0\\)の形になる方程式を2次方程式という．ただし，\\(a\\ne 0\\)とする．
      </p>
      <p>
        2次方程式は，因数分解，平方完成，解の公式などを用いて解く．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2-5x+6=0
        \\]
      </div>
      <p>
        は2次方程式であり，左辺を因数分解すると，
      </p>
      <div class="math-block">
        \\[
        (x-2)(x-3)=0
        \\]
      </div>
      <p>
        となるので，解は\\(x=2,3\\)である．
      </p>
    `,
    relatedIds: ["kai_no_koushiki", "hanbetsushiki", "jissuukai", "juukai"]
  },
  {
    id: "kai_no_koushiki",
    term: "解の公式",
    kana: "かいのこうしき",
    yomi: "kai_no_koushiki",
    group: "か",
    type: "公式",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "2次方程式\\(ax^2+bx+c=0\\)の解を係数で表す公式．",
    description: "2次方程式\\(ax^2+bx+c=0\\)の解を係数で表す公式．",
    bodyHtml: `
      <p>
        \\(a\\ne 0\\)のとき，2次方程式
      </p>
      <div class="math-block">
        \\[
        ax^2+bx+c=0
        \\]
      </div>
      <p>
        の解は，
      </p>
      <div class="math-block">
        \\[
        x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
        \\]
      </div>
      <p>
        で与えられる．これを2次方程式の解の公式という．
      </p>
      <h3>証明</h3>
      <p>
        \\(a\\ne 0\\)として，\\(ax^2+bx+c=0\\)を考える．両辺を\\(a\\)で割ると，
      </p>
      <div class="math-block">
        \\[
        x^2+\\frac{b}{a}x+\\frac{c}{a}=0
        \\]
      </div>
      <p>
        である．平方完成すると，
      </p>
      <div class="math-block">
        \\[
        \\left(x+\\frac{b}{2a}\\right)^2
        =
        \\frac{b^2-4ac}{4a^2}
        \\]
      </div>
      <p>
        となる．したがって，
      </p>
      <div class="math-block">
        \\[
        x+\\frac{b}{2a}
        =
        \\pm\\frac{\\sqrt{b^2-4ac}}{2a}
        \\]
      </div>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "hanbetsushiki", "heihoukansei"]
  },
  {
    id: "hanbetsushiki",
    term: "判別式",
    kana: "はんべつしき",
    yomi: "hanbetsushiki",
    group: "は",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "2次方程式の実数解の個数を判別する式\\(b^2-4ac\\)．",
    description: "2次方程式の実数解の個数を判別する式\\(b^2-4ac\\)．",
    bodyHtml: `
      <p>
        2次方程式\\(ax^2+bx+c=0\\)に対して，
      </p>
      <div class="math-block">
        \\[
        D=b^2-4ac
        \\]
      </div>
      <p>
        を判別式という．判別式を用いると，実数解の個数を判別できる．
      </p>
      <ul>
        <li>\\(D>0\\)のとき，異なる2つの実数解をもつ．</li>
        <li>\\(D=0\\)のとき，重解をもつ．</li>
        <li>\\(D<0\\)のとき，実数解をもたない．</li>
      </ul>
      <h3>理由</h3>
      <p>
        解の公式より，解は
      </p>
      <div class="math-block">
        \\[
        x=\\frac{-b\\pm\\sqrt{D}}{2a}
        \\]
      </div>
      <p>
        と表される．したがって，\\(D>0\\)なら\\(\\sqrt{D}\\)が正の実数なので異なる2つの実数解をもつ．\\(D=0\\)なら\\(\\sqrt{D}=0\\)なので2つの解が一致し，重解をもつ．\\(D<0\\)なら実数の範囲で\\(\\sqrt{D}\\)を考えられないので，実数解をもたない．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "kai_no_koushiki", "jissuukai", "juukai", "sessuru"]
  },
  {
    id: "jissuukai",
    term: "実数解",
    kana: "じっすうかい",
    yomi: "jissuukai",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "方程式の解のうち，実数であるもの．",
    description: "方程式の解のうち，実数であるもの．",
    bodyHtml: `
      <p>
        方程式の解のうち，実数であるものを実数解という．
      </p>
      <p>
        たとえば，\\(x^2-4=0\\)の解は\\(x=\\pm 2\\)であり，どちらも実数なので実数解である．
      </p>
      <p>
        一方，\\(x^2+1=0\\)は実数の範囲では解をもたない．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "hanbetsushiki"]
  },
  {
    id: "juukai",
    term: "重解",
    kana: "じゅうかい",
    yomi: "juukai",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "2次方程式で，2つの解が一致したもの．",
    description: "2次方程式で，2つの解が一致したもの．",
    bodyHtml: `
      <p>
        2次方程式で，2つの解が一致したものを重解という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2-4x+4=0
        \\]
      </div>
      <p>
        は，
      </p>
      <div class="math-block">
        \\[
        (x-2)^2=0
        \\]
      </div>
      <p>
        となるので，\\(x=2\\)を重解にもつ．
      </p>
      <p>
        2次方程式\\(ax^2+bx+c=0\\)が重解をもつことは，判別式\\(D=b^2-4ac\\)が\\(0\\)であることと同値である．
      </p>
    `,
    relatedIds: ["nijihouteishiki", "hanbetsushiki", "sessuru"]
  },
  {
    id: "nijifutougou",
    term: "2次不等式",
    kana: "にじふとうしき",
    yomi: "nijifutougou",
    group: "に",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions"],
    shortDescription: "整理すると2次式を含む不等式になるもの．",
    description: "整理すると2次式を含む不等式になるもの．",
    bodyHtml: `
      <p>
        整理すると2次式を含む不等式になるものを2次不等式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        x^2-5x+6>0
        \\]
      </div>
      <p>
        は2次不等式である．
      </p>
      <p>
        2次不等式は，対応する2次関数のグラフと\\(x\\)軸の位置関係を考えて解くことが多い．
      </p>
      <p>
        たとえば，\\(x^2-5x+6=(x-2)(x-3)\\)であり，放物線\\(y=x^2-5x+6\\)は\\(x\\)軸と\\(x=2,3\\)で交わる．下に凸なので，
      </p>
      <div class="math-block">
        \\[
        x^2-5x+6>0
        \\]
      </div>
      <p>
        の解は，
      </p>
      <div class="math-block">
        \\[
        x<2,\\ 3<x
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["nijikansuu", "houbutsusen", "hanbetsushiki"]
  },
  {
    id: "sessuru",
    term: "接する",
    kana: "せっする",
    yomi: "sessuru",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions", "math2_geometry_and_equations", "math3_differentiation"],
    shortDescription: "2つの図形が，ある点で触れ合い，その点の近くで交わり方が重ならない状態にあること．",
    description: "2つの図形が，ある点で触れ合い，その点の近くで交わり方が重ならない状態にあること．",
    bodyHtml: `
      <p>
        2つの図形が，ある点で触れ合い，その点の近くで同じ方向をもつような関係にあるとき，それらは接するという．
      </p>
      <p>
        接するという言葉は，直線と円，2つの円，放物線と直線，曲線と直線，曲線どうしなど，さまざまな場面で使われる．高校数学では，対象によって次のように判定することが多い．
      </p>
      <h3>2次関数のグラフと直線が接する場合</h3>
      <p>
        放物線\\(y=ax^2+bx+c\\)と直線\\(y=mx+n\\)が接することは，連立して得られる2次方程式が重解をもつことと同値である．
      </p>
      <p>
        実際，交点の\\(x\\)座標は，
      </p>
      <div class="math-block">
        \\[
        ax^2+bx+c=mx+n
        \\]
      </div>
      <p>
        すなわち，
      </p>
      <div class="math-block">
        \\[
        ax^2+(b-m)x+(c-n)=0
        \\]
      </div>
      <p>
        の解で与えられる．この2次方程式が異なる2つの実数解をもてば，放物線と直線は異なる2点で交わる．実数解をもたなければ，交点はない．重解をもつときは，交点が1つだけになり，直線はその点で放物線に接する．
      </p>
      <p>
        したがって，この場合は判別式が\\(0\\)であることが接するための条件である．
      </p>
      <div class="math-block">
        \\[
        D=0
        \\]
      </div>
      <h3>円と直線が接する場合</h3>
      <p>
        円と直線が接することは，円の中心から直線までの距離が円の半径に等しいことと同値である．
      </p>
      <p>
        円の中心を\\(\\mathrm{C}\\)，半径を\\(r\\)，直線を\\(l\\)とする．中心\\(\\mathrm{C}\\)から直線\\(l\\)までの距離を\\(d\\)とすると，
      </p>
      <ul>
        <li>\\(d<r\\)のとき，直線は円と異なる2点で交わる．</li>
        <li>\\(d=r\\)のとき，直線は円と1点で接する．</li>
        <li>\\(d>r\\)のとき，直線は円と交わらない．</li>
      </ul>
      <p>
        よって，円と直線が接する条件は，
      </p>
      <div class="math-block">
        \\[
        d=r
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>2つの円が接する場合</h3>
      <p>
        2つの円が外側で接することを外接，内側で接することを内接という．
      </p>
      <p>
        2つの円の半径を\\(r_1,r_2\\)，中心間の距離を\\(d\\)とする．
      </p>
      <ul>
        <li>外接する条件は，\\(d=r_1+r_2\\)である．</li>
        <li>内接する条件は，\\(d=|r_1-r_2|\\)である．</li>
      </ul>
      <p>
        これは，接点が2つの中心を結ぶ直線上にあり，接する瞬間には2つの円が共有する点が1つだけになるためである．
      </p>
      <h3>微分係数による接線の考え方</h3>
      <p>
        数学IIIでは，曲線\\(y=f(x)\\)上の点\\((a,f(a))\\)における接線を，その点における微分係数を用いて表す．\\(f\\)が\\(x=a\\)で微分可能であるとき，接線の傾きは\\(f^{\\prime}(a)\\)であり，接線の方程式は，
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
        したがって，2つの曲線\\(y=f(x)\\)，\\(y=g(x)\\)が\\(x=a\\)で接する典型的な条件は，
      </p>
      <div class="math-block">
        \\[
        f(a)=g(a)
        \\]
      </div>
      <p>
        かつ
      </p>
      <div class="math-block">
        \\[
        f^{\\prime}(a)=g^{\\prime}(a)
        \\]
      </div>
      <p>
        である．前者は同じ点を通ることを表し，後者はその点で同じ傾きをもつことを表す．
      </p>
      <h3>注意</h3>
      <p>
        「交点が1つである」ことだけで，常に接すると判断できるわけではない．たとえば，曲線の端点で1点だけ共有している場合や，定義域の制限によって交点が1つに見えている場合には，接しているとは限らない．高校数学では，対象に応じて，判別式，距離，微分係数などの条件を正しく使い分けることが重要である．
      </p>
    `,
    relatedIds: ["setten", "hanbetsushiki", "juukai", "nijikansuu", "houbutsusen"]
  },
  {
    id: "setten",
    term: "接点",
    kana: "せってん",
    yomi: "setten",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "2次関数",
    unitIds: ["math1_quadratic_functions", "math2_geometry_and_equations", "math3_differentiation"],
    shortDescription: "2つの図形が接している点．",
    description: "2つの図形が接している点．",
    bodyHtml: `
      <p>
        2つの図形が接している点を接点という．
      </p>
      <p>
        たとえば，放物線と直線が接するとき，その共有点が接点である．また，円と直線が接するとき，円と直線が共有するただ1つの点が接点である．
      </p>
      <h3>2次関数と直線の接点</h3>
      <p>
        放物線\\(y=ax^2+bx+c\\)と直線\\(y=mx+n\\)が接するとき，接点の\\(x\\)座標は，
      </p>
      <div class="math-block">
        \\[
        ax^2+(b-m)x+(c-n)=0
        \\]
      </div>
      <p>
        の重解である．その値を\\(x=\\alpha\\)とすれば，接点の座標は，
      </p>
      <div class="math-block">
        \\[
        (\\alpha,\\ m\\alpha+n)
        \\]
      </div>
      <p>
        または
      </p>
      <div class="math-block">
        \\[
        (\\alpha,\\ a\\alpha^2+b\\alpha+c)
        \\]
      </div>
      <p>
        と表せる．
      </p>
      <h3>微分を用いた接点の考え方</h3>
      <p>
        曲線\\(y=f(x)\\)上の点\\((a,f(a))\\)における接線の接点は\\((a,f(a))\\)である．この点における接線は，
      </p>
      <div class="math-block">
        \\[
        y-f(a)=f^{\\prime}(a)(x-a)
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["sessuru", "hanbetsushiki", "juukai"]
  }
);
