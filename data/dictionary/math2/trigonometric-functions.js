window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "ippankaku",
    term: "一般角",
    kana: "いっぱんかく",
    yomi: "ippankaku",
    group: "い",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "正の向き・負の向きや，1回転を超える回転まで含めて考えた角．",
    description: "正の向き・負の向きや，1回転を超える回転まで含めて考えた角．",
    bodyHtml: `
      <p>
        正の向き・負の向きや，1回転を超える回転まで含めて考えた角を一般角という．
      </p>
      <p>
        座標平面で，始線を\\(x\\)軸の正の向きにとり，そこから反時計回りに回転する向きを正の向き，時計回りに回転する向きを負の向きとする．
      </p>
      <p>
        たとえば，\\(390^\\circ\\)は\\(360^\\circ+30^\\circ\\)であるから，1回転したあとさらに\\(30^\\circ\\)回転した角である．
      </p>
    `,
    relatedIds: ["doukei_kaku", "kodohou", "sankakukansuu"]
  },
  {
    id: "doukei_kaku",
    term: "同径角",
    kana: "どうけいかく",
    yomi: "doukei_kaku",
    group: "と",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "動径の位置が同じになる角．",
    description: "動径の位置が同じになる角．",
    bodyHtml: `
      <p>
        一般角において，動径の位置が同じになる角を同径角という．
      </p>
      <p>
        角\\(\\theta\\)と同じ動径をもつ角は，整数\\(n\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        \\theta+360^\\circ n
        \\]
      </div>
      <p>
        と表される．弧度法では，
      </p>
      <div class="math-block">
        \\[
        \\theta+2n\\pi
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["ippankaku", "doukei", "kodohou"]
  },
  {
    id: "doukei",
    term: "動径",
    kana: "どうけい",
    yomi: "doukei",
    group: "と",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "角を表すとき，始線から回転してできる半直線．",
    description: "角を表すとき，始線から回転してできる半直線．",
    bodyHtml: `
      <p>
        角を表すとき，始線から回転してできる半直線を動径という．
      </p>
      <p>
        座標平面では，ふつう\\(x\\)軸の正の向きを始線とし，そこから回転した半直線を動径として角を表す．
      </p>
    `,
    relatedIds: ["ippankaku", "doukei_kaku"]
  },
  {
    id: "kodohou",
    term: "弧度法",
    kana: "こどほう",
    yomi: "kodohou",
    group: "こ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "半径と弧の長さの比を用いて角の大きさを表す方法．",
    description: "半径と弧の長さの比を用いて角の大きさを表す方法．",
    bodyHtml: `
      <p>
        半径と弧の長さの比を用いて角の大きさを表す方法を弧度法という．
      </p>
      <p>
        半径\\(r\\)の円で，中心角\\(\\theta\\)に対する弧の長さを\\(l\\)とすると，弧度法では
      </p>
      <div class="math-block">
        \\[
        \\theta=\\frac{l}{r}
        \\]
      </div>
      <p>
        と表す．単位はラジアンである．
      </p>
      <p>
        特に，\\(180^\\circ\\)は\\(\\pi\\)ラジアンに対応する．
      </p>
      <div class="math-block">
        \\[
        180^\\circ=\\pi
        \\]
      </div>
    `,
    relatedIds: ["radian", "ippankaku", "enshuu"]
  },
  {
    id: "radian",
    term: "ラジアン",
    kana: "らじあん",
    yomi: "radian",
    group: "ら",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "弧度法で角の大きさを表す単位．",
    description: "弧度法で角の大きさを表す単位．",
    bodyHtml: `
      <p>
        弧度法で角の大きさを表す単位をラジアンという．
      </p>
      <p>
        半径\\(r\\)の円で，弧の長さが\\(r\\)になる中心角の大きさが\\(1\\)ラジアンである．
      </p>
      <p>
        ふつう，数学ではラジアンを単位として使うとき，単位名を省略して角を\\(\\pi\\)，\\(\\frac{\\pi}{2}\\)などと表す．
      </p>
    `,
    relatedIds: ["kodohou"]
  },
  {
    id: "enshuu",
    term: "弧の長さ",
    kana: "このながさ",
    yomi: "enshuu",
    group: "こ",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "半径\\(r\\)，中心角\\(\\theta\\)の弧の長さは\\(l=r\\theta\\)である．ただし，\\(\\theta\\)は弧度法で表す．",
    description: "半径\\(r\\)，中心角\\(\\theta\\)の弧の長さは\\(l=r\\theta\\)である．ただし，\\(\\theta\\)は弧度法で表す．",
    bodyHtml: `
      <p>
        半径\\(r\\)の円で，中心角\\(\\theta\\)に対する弧の長さを\\(l\\)とする．\\(\\theta\\)を弧度法で表すと，
      </p>
      <div class="math-block">
        \\[
        l=r\\theta
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        これは，弧度法の定義\\(\\theta=\\frac{l}{r}\\)を変形したものである．
      </p>
    `,
    relatedIds: ["kodohou", "ougigata_no_menseki"]
  },
  {
    id: "ougigata_no_menseki",
    term: "扇形の面積",
    kana: "おうぎがたのめんせき",
    yomi: "ougigata_no_menseki",
    group: "お",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "半径\\(r\\)，中心角\\(\\theta\\)の扇形の面積は\\(S=\\frac{1}{2}r^2\\theta\\)である．ただし，\\(\\theta\\)は弧度法で表す．",
    description: "半径\\(r\\)，中心角\\(\\theta\\)の扇形の面積は\\(S=\\frac{1}{2}r^2\\theta\\)である．ただし，\\(\\theta\\)は弧度法で表す．",
    bodyHtml: `
      <p>
        半径\\(r\\)の円で，中心角\\(\\theta\\)に対する扇形の面積を\\(S\\)とする．\\(\\theta\\)を弧度法で表すと，
      </p>
      <div class="math-block">
        \\[
        S=\\frac{1}{2}r^2\\theta
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <h3>証明</h3>
      <p>
        円全体の面積は\\(\\pi r^2\\)であり，円全体の中心角は\\(2\\pi\\)である．扇形の面積は中心角に比例するから，
      </p>
      <div class="math-block">
        \\[
        S=\\pi r^2\\cdot\\frac{\\theta}{2\\pi}=\\frac{1}{2}r^2\\theta
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kodohou", "enshuu"]
  },
  {
    id: "sankakukansuu",
    term: "三角関数",
    kana: "さんかくかんすう",
    yomi: "sankakukansuu",
    group: "さ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "一般角\\(\\theta\\)に対して定まる\\(\\sin\\theta\\)，\\(\\cos\\theta\\)，\\(\\tan\\theta\\)などの関数．",
    description: "一般角\\(\\theta\\)に対して定まる\\(\\sin\\theta\\)，\\(\\cos\\theta\\)，\\(\\tan\\theta\\)などの関数．",
    bodyHtml: `
      <p>
        一般角\\(\\theta\\)に対して定まる\\(\\sin\\theta\\)，\\(\\cos\\theta\\)，\\(\\tan\\theta\\)などの関数を三角関数という．
      </p>
      <p>
        数学Iでは主に直角三角形の辺の比として三角比を考えるが，数学IIでは座標平面や単位円を用いて，一般角に対する関数として三角関数を考える．
      </p>
      <p>
        三角関数は周期性をもち，波のようにくり返す現象を表すときにも使われる．
      </p>
    `,
    relatedIds: ["seigen_kansuu", "yogen_kansuu", "seisetsu_kansuu", "tani_en"]
  },
  {
    id: "tani_en",
    term: "単位円",
    kana: "たんいえん",
    yomi: "tani_en",
    group: "た",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "原点を中心とする半径\\(1\\)の円．",
    description: "原点を中心とする半径\\(1\\)の円．",
    bodyHtml: `
      <p>
        原点を中心とする半径\\(1\\)の円を単位円という．
      </p>
      <p>
        単位円は，
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=1
        \\]
      </div>
      <p>
        で表される．
      </p>
      <p>
        一般角\\(\\theta\\)の動径と単位円の交点を\\((x,y)\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\cos\\theta=x,\\quad \\sin\\theta=y
        \\]
      </div>
      <p>
        と定める．
      </p>
    `,
    relatedIds: ["sankakukansuu", "seigen_kansuu", "yogen_kansuu"]
  },
  {
    id: "seigen_kansuu",
    term: "正弦関数",
    kana: "せいげんかんすう",
    yomi: "seigen_kansuu",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(y=\\sin x\\)で表される関数．",
    description: "\\(y=\\sin x\\)で表される関数．",
    bodyHtml: `
      <p>
        \\(y=\\sin x\\)で表される関数を正弦関数という．
      </p>
      <p>
        正弦関数は周期\\(2\\pi\\)をもつ周期関数であり，
      </p>
      <div class="math-block">
        \\[
        \\sin(x+2\\pi)=\\sin x
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        値域は\\(-1\\leqq y\\leqq 1\\)である．
      </p>
    `,
    relatedIds: ["sin", "sankakukansuu", "shuuki", "yogen_kansuu"]
  },
  {
    id: "yogen_kansuu",
    term: "余弦関数",
    kana: "よげんかんすう",
    yomi: "yogen_kansuu",
    group: "よ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(y=\\cos x\\)で表される関数．",
    description: "\\(y=\\cos x\\)で表される関数．",
    bodyHtml: `
      <p>
        \\(y=\\cos x\\)で表される関数を余弦関数という．
      </p>
      <p>
        余弦関数は周期\\(2\\pi\\)をもつ周期関数であり，
      </p>
      <div class="math-block">
        \\[
        \\cos(x+2\\pi)=\\cos x
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        値域は\\(-1\\leqq y\\leqq 1\\)である．
      </p>
    `,
    relatedIds: ["cos", "sankakukansuu", "shuuki", "seigen_kansuu"]
  },
  {
    id: "seisetsu_kansuu",
    term: "正接関数",
    kana: "せいせつかんすう",
    yomi: "seisetsu_kansuu",
    group: "せ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(y=\\tan x\\)で表される関数．",
    description: "\\(y=\\tan x\\)で表される関数．",
    bodyHtml: `
      <p>
        \\(y=\\tan x\\)で表される関数を正接関数という．
      </p>
      <p>
        正接関数は周期\\(\\pi\\)をもつ周期関数であり，
      </p>
      <div class="math-block">
        \\[
        \\tan(x+\\pi)=\\tan x
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        \\(\\tan x=\\frac{\\sin x}{\\cos x}\\)であるため，\\(\\cos x=0\\)となる\\(x\\)では定義されない．
      </p>
    `,
    relatedIds: ["tan", "sankakukansuu", "shuuki", "seigen_kansuu", "yogen_kansuu"]
  },
  {
    id: "shuuki",
    term: "周期",
    kana: "しゅうき",
    yomi: "shuuki",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "関数の値が一定の間隔でくり返されるときの，その間隔．",
    description: "関数の値が一定の間隔でくり返されるときの，その間隔．",
    bodyHtml: `
      <p>
        関数の値が一定の間隔でくり返されるとき，その間隔を周期という．
      </p>
      <p>
        関数\\(f(x)\\)について，正の数\\(p\\)が
      </p>
      <div class="math-block">
        \\[
        f(x+p)=f(x)
        \\]
      </div>
      <p>
        をすべての\\(x\\)について満たすとき，\\(p\\)を周期という．
      </p>
      <p>
        たとえば，\\(\\sin x\\)と\\(\\cos x\\)の周期は\\(2\\pi\\)，\\(\\tan x\\)の周期は\\(\\pi\\)である．
      </p>
    `,
    relatedIds: ["shuukikansuu", "seigen_kansuu", "yogen_kansuu", "seisetsu_kansuu"]
  },
  {
    id: "shuukikansuu",
    term: "周期関数",
    kana: "しゅうきかんすう",
    yomi: "shuukikansuu",
    group: "し",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "一定の間隔で同じ値をくり返す関数．",
    description: "一定の間隔で同じ値をくり返す関数．",
    bodyHtml: `
      <p>
        一定の間隔で同じ値をくり返す関数を周期関数という．
      </p>
      <p>
        関数\\(f(x)\\)について，正の数\\(p\\)が存在して，
      </p>
      <div class="math-block">
        \\[
        f(x+p)=f(x)
        \\]
      </div>
      <p>
        がすべての\\(x\\)で成り立つとき，\\(f(x)\\)は周期関数である．
      </p>
      <p>
        三角関数は代表的な周期関数である．
      </p>
    `,
    relatedIds: ["shuuki", "sankakukansuu"]
  },
  {
    id: "sankakukansuu_no_sougo_kankei",
    term: "三角関数の相互関係",
    kana: "さんかくかんすうのそうごかんけい",
    yomi: "sankakukansuu_no_sougo_kankei",
    group: "さ",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(\\sin\\theta\\)，\\(\\cos\\theta\\)，\\(\\tan\\theta\\)の間に成り立つ基本関係．",
    description: "\\(\\sin\\theta\\)，\\(\\cos\\theta\\)，\\(\\tan\\theta\\)の間に成り立つ基本関係．",
    bodyHtml: `
      <p>
        三角関数には，次の基本的な関係が成り立つ．
      </p>
      <div class="math-block">
        \\[
        \\sin^2\\theta+\\cos^2\\theta=1
        \\]
      </div>
      <div class="math-block">
        \\[
        \\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}
        \\]
      </div>
      <p>
        ただし，\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)は\\(\\cos\\theta\\ne 0\\)のときに成り立つ．
      </p>
      <h3>証明</h3>
      <p>
        単位円上の点を\\((\\cos\\theta,\\sin\\theta)\\)とする．単位円の方程式は
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=1
        \\]
      </div>
      <p>
        であるから，\\(x=\\cos\\theta\\)，\\(y=\\sin\\theta\\)を代入して，
      </p>
      <div class="math-block">
        \\[
        \\cos^2\\theta+\\sin^2\\theta=1
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["sankakukansuu", "tani_en", "seigen_kansuu", "yogen_kansuu", "seisetsu_kansuu"]
  },
  {
    id: "kahouteiri",
    term: "加法定理",
    kana: "かほうていり",
    yomi: "kahouteiri",
    group: "か",
    type: "定理",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(\\alpha+\\beta\\)の三角関数を，\\(\\alpha\\)，\\(\\beta\\)の三角関数で表す定理．",
    description: "\\(\\alpha+\\beta\\)の三角関数を，\\(\\alpha\\)，\\(\\beta\\)の三角関数で表す定理．",
    bodyHtml: `
      <p>
        三角関数について，次の公式が成り立つ．これを加法定理という．
      </p>
      <div class="math-block">
        \\[
        \\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sin(\\alpha-\\beta)=\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta
        \\]
      </div>
      <p>
        また，\\(\\tan\\)についても，分母が\\(0\\)でない範囲で，
      </p>
      <div class="math-block">
        \\[
        \\tan(\\alpha+\\beta)=\\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\tan(\\alpha-\\beta)=\\frac{\\tan\\alpha-\\tan\\beta}{1+\\tan\\alpha\\tan\\beta}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["nibai_kaku", "hanbun_kaku", "sankakukansuu_no_sougo_kankei"]
  },
  {
    id: "nibai_kaku",
    term: "2倍角の公式",
    kana: "にばいかくのこうしき",
    yomi: "nibai_kaku",
    group: "に",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(2\\alpha\\)の三角関数を\\(\\alpha\\)の三角関数で表す公式．",
    description: "\\(2\\alpha\\)の三角関数を\\(\\alpha\\)の三角関数で表す公式．",
    bodyHtml: `
      <p>
        加法定理で\\(\\beta=\\alpha\\)とすると，次の公式が得られる．
      </p>
      <div class="math-block">
        \\[
        \\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos 2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha
        \\]
      </div>
      <p>
        また，\\(\\cos 2\\alpha\\)は，
      </p>
      <div class="math-block">
        \\[
        \\cos 2\\alpha=1-2\\sin^2\\alpha
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos 2\\alpha=2\\cos^2\\alpha-1
        \\]
      </div>
      <p>
        とも表せる．
      </p>
      <p>
        \\(\\tan\\)については，分母が\\(0\\)でない範囲で，
      </p>
      <div class="math-block">
        \\[
        \\tan 2\\alpha=\\frac{2\\tan\\alpha}{1-\tan^2\\alpha}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["kahouteiri", "hanbun_kaku"]
  },
  {
    id: "hanbun_kaku",
    term: "半角の公式",
    kana: "はんかくのこうしき",
    yomi: "hanbun_kaku",
    group: "は",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "\\(\\frac{\\alpha}{2}\\)の三角関数の2乗を\\(\\cos\\alpha\\)で表す公式．",
    description: "\\(\\frac{\\alpha}{2}\\)の三角関数の2乗を\\(\\cos\\alpha\\)で表す公式．",
    bodyHtml: `
      <p>
        2倍角の公式から，次の公式が得られる．
      </p>
      <div class="math-block">
        \\[
        \\sin^2\\frac{\\alpha}{2}=\\frac{1-\cos\\alpha}{2}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos^2\\frac{\\alpha}{2}=\\frac{1+\cos\\alpha}{2}
        \\]
      </div>
      <p>
        また，分母が\\(0\\)でない範囲で，
      </p>
      <div class="math-block">
        \\[
        \\tan^2\\frac{\\alpha}{2}=\\frac{1-\cos\\alpha}{1+\cos\\alpha}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        半角の公式では，\\(\\sin\\frac{\\alpha}{2}\\)，\\(\\cos\\frac{\\alpha}{2}\\)，\\(\\tan\\frac{\\alpha}{2}\\)の符号は，\\(\\frac{\\alpha}{2}\\)がどの象限にあるかで判断する．
      </p>
    `,
    relatedIds: ["nibai_kaku", "kahouteiri"]
  },
  {
    id: "sekika",
    term: "積和公式",
    kana: "せきわこうしき",
    yomi: "sekika",
    group: "せ",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "三角関数の積を和や差の形に変形する公式．",
    description: "三角関数の積を和や差の形に変形する公式．",
    bodyHtml: `
      <p>
        三角関数の積を和や差の形に変形する公式を積和公式という．
      </p>
      <div class="math-block">
        \\[
        \\sin\\alpha\\cos\\beta=\\frac{1}{2}\\{\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos\\alpha\\cos\\beta=\\frac{1}{2}\\{\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sin\\alpha\\sin\\beta=-\\frac{1}{2}\\{\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\}
        \\]
      </div>
      <p>
        これらは加法定理から導かれる．
      </p>
    `,
    relatedIds: ["kahouteiri", "waseki"]
  },
  {
    id: "waseki",
    term: "和積公式",
    kana: "わせきこうしき",
    yomi: "waseki",
    group: "わ",
    type: "公式",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "三角関数の和や差を積の形に変形する公式．",
    description: "三角関数の和や差を積の形に変形する公式．",
    bodyHtml: `
      <p>
        三角関数の和や差を積の形に変形する公式を和積公式という．
      </p>
      <div class="math-block">
        \\[
        \\sin A+\\sin B=2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\sin A-\\sin B=2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos A+\\cos B=2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\cos A-\\cos B=-2\\sin\\frac{A+B}{2}\\sin\\frac{A-B}{2}
        \\]
      </div>
      <p>
        和積公式は，加法定理を組み合わせることで得られる．
      </p>
    `,
    relatedIds: ["kahouteiri", "sekika"]
  },
  {
    id: "sankaku_houteishiki",
    term: "三角方程式",
    kana: "さんかくほうていしき",
    yomi: "sankaku_houteishiki",
    group: "さ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "未知数を含む三角関数が現れる方程式．",
    description: "未知数を含む三角関数が現れる方程式．",
    bodyHtml: `
      <p>
        未知数を含む三角関数が現れる方程式を三角方程式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\sin x=\\frac{1}{2}
        \\]
      </div>
      <p>
        は三角方程式である．
      </p>
      <p>
        三角方程式を解くときは，三角関数の周期性を考えることが重要である．
      </p>
    `,
    relatedIds: ["sankakukansuu", "shuuki", "sankaku_futougou"]
  },
  {
    id: "sankaku_futougou",
    term: "三角不等式",
    kana: "さんかくふとうしき",
    yomi: "sankaku_futougou",
    group: "さ",
    type: "定義",
    subject: "数学II",
    unit: "三角関数",
    unitIds: ["math2_trigonometric_functions"],
    shortDescription: "未知数を含む三角関数が現れる不等式．",
    description: "未知数を含む三角関数が現れる不等式．",
    bodyHtml: `
      <p>
        未知数を含む三角関数が現れる不等式を三角不等式という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        \\sin x>\\frac{1}{2}
        \\]
      </div>
      <p>
        は三角不等式である．
      </p>
      <p>
        三角不等式を解くときは，単位円や三角関数のグラフを用いて，指定された範囲の中で条件を満たす角を調べる．
      </p>
    `,
    relatedIds: ["sankakukansuu", "sankaku_houteishiki", "tani_en"]
  }
);
