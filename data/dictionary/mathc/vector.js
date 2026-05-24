window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "vector",
    term: "ベクトル",
    kana: "べくとる",
    yomi: "vector",
    group: "へ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "大きさと向きをもつ量．",
    description: "大きさと向きをもつ量．",
    bodyHtml: `
      <p>
        大きさと向きをもつ量をベクトルという．
      </p>
      <p>
        たとえば，点\\(\\mathrm{A}\\)から点\\(\\mathrm{B}\\)へ向かうベクトルを，
      </p>
      <div class="math-block">
        \\[
        \\overrightarrow{\\mathrm{AB}}
        \\]
      </div>
      <p>
        と表す．このとき，点\\(\\mathrm{A}\\)を始点，点\\(\\mathrm{B}\\)を終点という．
      </p>
      <p>
        ベクトルでは，長さだけでなく向きも重要である．同じ長さで同じ向きなら，始点が違っていても同じベクトルとみなす．
      </p>
    `,
    relatedIds: ["ookisa_vector", "muki_vector", "hajimeten", "shuuten", "seibun_vector"]
  },
  {
    id: "hajimeten",
    term: "始点",
    kana: "してん",
    yomi: "hajimeten",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの出発点．",
    description: "ベクトルの出発点．",
    bodyHtml: `
      <p>
        ベクトルの出発点を始点という．
      </p>
      <p>
        ベクトル\\(\\overrightarrow{\\mathrm{AB}}\\)では，点\\(\\mathrm{A}\\)が始点である．
      </p>
    `,
    relatedIds: ["vector", "shuuten"]
  },
  {
    id: "shuuten",
    term: "終点",
    kana: "しゅうてん",
    yomi: "shuuten",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの到着点．",
    description: "ベクトルの到着点．",
    bodyHtml: `
      <p>
        ベクトルの到着点を終点という．
      </p>
      <p>
        ベクトル\\(\\overrightarrow{\\mathrm{AB}}\\)では，点\\(\\mathrm{B}\\)が終点である．
      </p>
    `,
    relatedIds: ["vector", "hajimeten"]
  },
  {
    id: "ookisa_vector",
    term: "大きさ（ベクトル）",
    kana: "おおきさ",
    yomi: "ookisa_vector",
    group: "お",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの長さ．",
    description: "ベクトルの長さ．",
    bodyHtml: `
      <p>
        ベクトルの長さを，ベクトルの大きさという．
      </p>
      <p>
        ベクトル\\(\\vec{a}\\)の大きさは，
      </p>
      <div class="math-block">
        \\[
        |\\vec{a}|
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        点\\(\\mathrm{A}\\)から点\\(\\mathrm{B}\\)へ向かうベクトル\\(\\overrightarrow{\\mathrm{AB}}\\)の大きさは，線分\\(\\mathrm{AB}\\)の長さである．
      </p>
    `,
    relatedIds: ["vector", "nagasa_vector", "seibun_vector"]
  },
  {
    id: "nagasa_vector",
    term: "長さ（ベクトル）",
    kana: "ながさ",
    yomi: "nagasa_vector",
    group: "な",
    type: "用語",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの大きさのこと．",
    description: "ベクトルの大きさのこと．",
    bodyHtml: `
      <p>
        ベクトルの長さは，ベクトルの大きさと同じ意味で使われる．
      </p>
      <p>
        ベクトル\\(\\vec{a}\\)の長さは，
      </p>
      <div class="math-block">
        \\[
        |\\vec{a}|
        \\]
      </div>
      <p>
        と表す．
      </p>
    `,
    relatedIds: ["ookisa_vector", "vector"]
  },
  {
    id: "muki_vector",
    term: "向き（ベクトル）",
    kana: "むき",
    yomi: "muki_vector",
    group: "む",
    type: "用語",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルがどちらの方向を向いているかという性質．",
    description: "ベクトルがどちらの方向を向いているかという性質．",
    bodyHtml: `
      <p>
        ベクトルがどちらの方向を向いているかという性質を，ベクトルの向きという．
      </p>
      <p>
        ベクトルは大きさだけでなく向きももつため，同じ長さでも向きが違えば異なるベクトルである．
      </p>
    `,
    relatedIds: ["vector", "houkou_vector", "gyaku_vector"]
  },
  {
    id: "houkou_vector",
    term: "方向（ベクトル）",
    kana: "ほうこう",
    yomi: "houkou_vector",
    group: "ほ",
    type: "用語",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルが向いている方向．",
    description: "ベクトルが向いている方向．",
    bodyHtml: `
      <p>
        ベクトルが向いている方向を，ベクトルの方向という．
      </p>
      <p>
        同じ方向を向くベクトルや反対方向を向くベクトルは，平行なベクトルとして扱われる．
      </p>
    `,
    relatedIds: ["muki_vector", "heikou_vector", "houkou_vector_yougo"]
  },
  {
    id: "zero_vector",
    term: "ゼロベクトル",
    kana: "ぜろべくとる",
    yomi: "zero_vector",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "大きさが\\(0\\)であるベクトル．",
    description: "大きさが\\(0\\)であるベクトル．",
    bodyHtml: `
      <p>
        大きさが\\(0\\)であるベクトルをゼロベクトルという．
      </p>
      <p>
        ゼロベクトルは，
      </p>
      <div class="math-block">
        \\[
        \\vec{0}
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        ゼロベクトルは大きさをもたないため，向きは考えない．
      </p>
    `,
    relatedIds: ["vector", "ookisa_vector"]
  },
  {
    id: "tanni_vector",
    term: "単位ベクトル",
    kana: "たんいべくとる",
    yomi: "tanni_vector",
    group: "た",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "大きさが\\(1\\)であるベクトル．",
    description: "大きさが\\(1\\)であるベクトル．",
    bodyHtml: `
      <p>
        大きさが\\(1\\)であるベクトルを単位ベクトルという．
      </p>
      <p>
        \\(\\vec{a}\\ne\\vec{0}\\)のとき，\\(\\vec{a}\\)と同じ向きの単位ベクトルは，
      </p>
      <div class="math-block">
        \\[
        \\frac{\\vec{a}}{|\\vec{a}|}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["vector", "ookisa_vector", "zero_vector"]
  },
  {
    id: "gyaku_vector",
    term: "逆ベクトル",
    kana: "ぎゃくべくとる",
    yomi: "gyaku_vector",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "もとのベクトルと大きさが等しく，向きが反対であるベクトル．",
    description: "もとのベクトルと大きさが等しく，向きが反対であるベクトル．",
    bodyHtml: `
      <p>
        もとのベクトルと大きさが等しく，向きが反対であるベクトルを逆ベクトルという．
      </p>
      <p>
        ベクトル\\(\\vec{a}\\)の逆ベクトルは，
      </p>
      <div class="math-block">
        \\[
        -\\vec{a}
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        このとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}+(-\\vec{a})=\\vec{0}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["vector", "zero_vector", "wa_vector"]
  },
  {
    id: "wa_vector",
    term: "和（ベクトル）",
    kana: "わ",
    yomi: "wa_vector",
    group: "わ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "2つ以上のベクトルをたし合わせてできるベクトル．",
    description: "2つ以上のベクトルをたし合わせてできるベクトル．",
    bodyHtml: `
      <p>
        2つ以上のベクトルをたし合わせてできるベクトルを，ベクトルの和という．
      </p>
      <p>
        ベクトル\\(\\vec{a}\\)，\\(\\vec{b}\\)の和を，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}+\\vec{b}
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        図形的には，\\(\\vec{a}\\)の終点に\\(\\vec{b}\\)の始点を重ねたとき，\\(\\vec{a}\\)の始点から\\(\\vec{b}\\)の終点へ向かうベクトルが\\(\\vec{a}+\\vec{b}\\)である．
      </p>
    `,
    relatedIds: ["vector", "sa_vector", "gyaku_vector"]
  },
  {
    id: "sa_vector",
    term: "差（ベクトル）",
    kana: "さ",
    yomi: "sa_vector",
    group: "さ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "一方のベクトルに，他方の逆ベクトルをたすこと．",
    description: "一方のベクトルに，他方の逆ベクトルをたすこと．",
    bodyHtml: `
      <p>
        ベクトル\\(\\vec{a}\\)から\\(\\vec{b}\\)をひくことは，\\(\\vec{a}\\)に\\(\\vec{b}\\)の逆ベクトルをたすこととして定義する．
      </p>
      <div class="math-block">
        \\[
        \\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})
        \\]
      </div>
      <p>
        始点をそろえた2つのベクトル\\(\\vec{a}\\)，\\(\\vec{b}\\)について，\\(\\vec{a}-\\vec{b}\\)は\\(\\vec{b}\\)の終点から\\(\\vec{a}\\)の終点へ向かうベクトルに対応する．
      </p>
    `,
    relatedIds: ["wa_vector", "gyaku_vector"]
  },
  {
    id: "jissuu_bai_vector",
    term: "実数倍",
    kana: "じっすうばい",
    yomi: "jissuu_bai_vector",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの大きさを実数倍し，符号によって向きを決める操作．",
    description: "ベクトルの大きさを実数倍し，符号によって向きを決める操作．",
    bodyHtml: `
      <p>
        ベクトル\\(\\vec{a}\\)と実数\\(k\\)に対して，\\(k\\vec{a}\\)を\\(\\vec{a}\\)の実数倍という．
      </p>
      <p>
        \\(k>0\\)のとき，\\(k\\vec{a}\\)は\\(\\vec{a}\\)と同じ向きで，大きさは\\(|k||\\vec{a}|\\)である．
      </p>
      <p>
        \\(k<0\\)のとき，\\(k\\vec{a}\\)は\\(\\vec{a}\\)と反対向きで，大きさは\\(|k||\\vec{a}|\\)である．
      </p>
      <p>
        \\(k=0\\)のとき，\\(k\\vec{a}=\\vec{0}\\)である．
      </p>
    `,
    relatedIds: ["vector", "heikou_vector", "zero_vector"]
  },
  {
    id: "heikou_vector",
    term: "平行（ベクトル）",
    kana: "へいこう",
    yomi: "heikou_vector",
    group: "へ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "一方が他方の実数倍で表されるような2つのベクトルの関係．",
    description: "一方が他方の実数倍で表されるような2つのベクトルの関係．",
    bodyHtml: `
      <p>
        2つのベクトル\\(\\vec{a}\\)，\\(\\vec{b}\\)について，\\(\\vec{a}\\ne\\vec{0}\\)とする．ある実数\\(k\\)を用いて
      </p>
      <div class="math-block">
        \\[
        \\vec{b}=k\\vec{a}
        \\]
      </div>
      <p>
        と表せるとき，\\(\\vec{a}\\)と\\(\\vec{b}\\)は平行であるという．
      </p>
      <p>
        \\(k>0\\)なら同じ向き，\\(k<0\\)なら反対向きである．
      </p>
    `,
    relatedIds: ["jissuu_bai_vector", "houkou_vector", "zero_vector"]
  },
  {
    id: "seibun_vector",
    term: "成分（ベクトル）",
    kana: "せいぶん",
    yomi: "seibun_vector",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルを座標軸方向に分けたときの各方向の量．",
    description: "ベクトルを座標軸方向に分けたときの各方向の量．",
    bodyHtml: `
      <p>
        ベクトルを座標軸方向に分けたときの各方向の量を，ベクトルの成分という．
      </p>
      <p>
        平面上で，ベクトル\\(\\vec{a}\\)が\\(x\\)方向に\\(a_1\\)，\\(y\\)方向に\\(a_2\\)だけ進むベクトルであるとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}=(a_1,a_2)
        \\]
      </div>
      <p>
        と表す．このとき，\\(a_1\\)を\\(x\\)成分，\\(a_2\\)を\\(y\\)成分という．
      </p>
    `,
    relatedIds: ["seibun_hyouji_vector", "x_seibun_vector", "y_seibun_vector"]
  },
  {
    id: "seibun_hyouji_vector",
    term: "成分表示（ベクトル）",
    kana: "せいぶんひょうじ",
    yomi: "seibun_hyouji_vector",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルを成分を用いて表すこと．",
    description: "ベクトルを成分を用いて表すこと．",
    bodyHtml: `
      <p>
        ベクトルを成分を用いて表すことを，ベクトルの成分表示という．
      </p>
      <p>
        平面上のベクトルは，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}=(a_1,a_2)
        \\]
      </div>
      <p>
        のように表される．空間内のベクトルは，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}=(a_1,a_2,a_3)
        \\]
      </div>
      <p>
        のように表される．
      </p>
    `,
    relatedIds: ["seibun_vector", "x_seibun_vector", "y_seibun_vector", "z_seibun_vector"]
  },
  {
    id: "x_seibun_vector",
    term: "x成分（ベクトル）",
    kana: "えっくすせいぶん",
    yomi: "x_seibun_vector",
    group: "え",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの\\(x\\)軸方向の成分．",
    description: "ベクトルの\\(x\\)軸方向の成分．",
    bodyHtml: `
      <p>
        ベクトルの\\(x\\)軸方向の成分を\\(x\\)成分という．
      </p>
      <p>
        \\(\\vec{a}=(a_1,a_2)\\)のとき，\\(a_1\\)が\\(x\\)成分である．
      </p>
    `,
    relatedIds: ["seibun_vector", "y_seibun_vector", "z_seibun_vector"]
  },
  {
    id: "y_seibun_vector",
    term: "y成分（ベクトル）",
    kana: "わいせいぶん",
    yomi: "y_seibun_vector",
    group: "わ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの\\(y\\)軸方向の成分．",
    description: "ベクトルの\\(y\\)軸方向の成分．",
    bodyHtml: `
      <p>
        ベクトルの\\(y\\)軸方向の成分を\\(y\\)成分という．
      </p>
      <p>
        \\(\\vec{a}=(a_1,a_2)\\)のとき，\\(a_2\\)が\\(y\\)成分である．
      </p>
    `,
    relatedIds: ["seibun_vector", "x_seibun_vector", "z_seibun_vector"]
  },
  {
    id: "z_seibun_vector",
    term: "z成分（ベクトル）",
    kana: "ぜっとせいぶん",
    yomi: "z_seibun_vector",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "ベクトルの\\(z\\)軸方向の成分．",
    description: "ベクトルの\\(z\\)軸方向の成分．",
    bodyHtml: `
      <p>
        空間内のベクトルにおいて，\\(z\\)軸方向の成分を\\(z\\)成分という．
      </p>
      <p>
        \\(\\vec{a}=(a_1,a_2,a_3)\\)のとき，\\(a_3\\)が\\(z\\)成分である．
      </p>
    `,
    relatedIds: ["seibun_vector", "x_seibun_vector", "y_seibun_vector"]
  },
  {
    id: "kihon_vector",
    term: "基本ベクトル",
    kana: "きほんべくとる",
    yomi: "kihon_vector",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "座標軸方向の基準となる単位ベクトル．",
    description: "座標軸方向の基準となる単位ベクトル．",
    bodyHtml: `
      <p>
        座標軸方向の基準となる単位ベクトルを，基本ベクトルという．
      </p>
      <p>
        平面では，\\(x\\)軸方向，\\(y\\)軸方向の基本ベクトルをそれぞれ
      </p>
      <div class="math-block">
        \\[
        \\vec{e}_1=(1,0),\\quad \\vec{e}_2=(0,1)
        \\]
      </div>
      <p>
        と表すことがある．
      </p>
      <p>
        このとき，\\(\\vec{a}=(a_1,a_2)\\)は，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}=a_1\\vec{e}_1+a_2\\vec{e}_2
        \\]
      </div>
      <p>
        と表される．
      </p>
    `,
    relatedIds: ["tanni_vector", "seibun_hyouji_vector"]
  },
  {
    id: "naiseki",
    term: "内積",
    kana: "ないせき",
    yomi: "naiseki",
    group: "な",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "2つのベクトルから定まる実数．角度や垂直条件を調べるのに使う．",
    description: "2つのベクトルから定まる実数．角度や垂直条件を調べるのに使う．",
    bodyHtml: `
      <p>
        2つのベクトル\\(\\vec{a}\\)，\\(\\vec{b}\\)のなす角を\\(\\theta\\)とするとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta
        \\]
      </div>
      <p>
        で定められる実数を，\\(\\vec{a}\\)と\\(\\vec{b}\\)の内積という．
      </p>
      <p>
        成分で\\(\\vec{a}=(a_1,a_2)\\)，\\(\\vec{b}=(b_1,b_2)\\)と表されるとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["nasu_kaku_vector", "suichoku_vector", "seibun_vector"]
  },
  {
    id: "nasu_kaku_vector",
    term: "なす角（ベクトル）",
    kana: "なすかく",
    yomi: "nasu_kaku_vector",
    group: "な",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "2つのベクトルの始点をそろえたときにできる角．",
    description: "2つのベクトルの始点をそろえたときにできる角．",
    bodyHtml: `
      <p>
        2つのベクトルの始点をそろえたときにできる角を，2つのベクトルのなす角という．
      </p>
      <p>
        ふつう，なす角\\(\\theta\\)は
      </p>
      <div class="math-block">
        \\[
        0\\leqq \\theta\\leqq \\pi
        \\]
      </div>
      <p>
        の範囲で考える．
      </p>
      <p>
        \\(\\vec{a}\\ne\\vec{0}\\)，\\(\\vec{b}\\ne\\vec{0}\\)のとき，内積を用いると，
      </p>
      <div class="math-block">
        \\[
        \\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["naiseki", "suichoku_vector"]
  },
  {
    id: "suichoku_vector",
    term: "垂直（ベクトル）",
    kana: "すいちょく",
    yomi: "suichoku_vector",
    group: "す",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "2つのベクトルのなす角が直角であること．内積が\\(0\\)で判定できる．",
    description: "2つのベクトルのなす角が直角であること．内積が\\(0\\)で判定できる．",
    bodyHtml: `
      <p>
        2つのベクトルのなす角が直角であるとき，2つのベクトルは垂直であるという．
      </p>
      <p>
        \\(\\vec{a}\\ne\\vec{0}\\)，\\(\\vec{b}\\ne\\vec{0}\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}\\perp\\vec{b}
        \\quad \\Longleftrightarrow \\quad
        \\vec{a}\\cdot\\vec{b}=0
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <h3>理由</h3>
      <p>
        内積の定義より，
      </p>
      <div class="math-block">
        \\[
        \\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta
        \\]
      </div>
      <p>
        である．\\(\\vec{a}\\ne\\vec{0}\\)，\\(\\vec{b}\\ne\\vec{0}\\)なら\\(|\\vec{a}||\\vec{b}|\\ne 0\\)なので，内積が\\(0\\)であることと\\(\\cos\\theta=0\\)であることは同値である．\\(0\\leqq \\theta\\leqq \\pi\\)では，これは\\(\\theta=\\frac{\\pi}{2}\\)と同値である．
      </p>
    `,
    relatedIds: ["naiseki", "nasu_kaku_vector"]
  },
  {
    id: "ichivector",
    term: "位置ベクトル",
    kana: "いちべくとる",
    yomi: "ichivector",
    group: "い",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "原点を始点として，点の位置を表すベクトル．",
    description: "原点を始点として，点の位置を表すベクトル．",
    bodyHtml: `
      <p>
        原点\\(\\mathrm{O}\\)を始点として，点\\(\\mathrm{P}\\)の位置を表すベクトル\\(\\overrightarrow{\\mathrm{OP}}\\)を，点\\(\\mathrm{P}\\)の位置ベクトルという．
      </p>
      <p>
        点\\(\\mathrm{P}\\)の位置ベクトルを\\(\\vec{p}\\)と表すとき，
      </p>
      <div class="math-block">
        \\[
        \\vec{p}=\\overrightarrow{\\mathrm{OP}}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        点の座標と位置ベクトルの成分は対応している．たとえば，点\\(\\mathrm{P}(a,b)\\)の位置ベクトルは\\((a,b)\\)である．
      </p>
    `,
    relatedIds: ["vector", "seibun_vector", "uchibunten_vector"]
  },
  {
    id: "uchibunten_vector",
    term: "内分（ベクトル）",
    kana: "ないぶん",
    yomi: "uchibunten_vector",
    group: "な",
    type: "公式",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "線分を内分する点の位置ベクトルを求める公式．",
    description: "線分を内分する点の位置ベクトルを求める公式．",
    bodyHtml: `
      <p>
        点\\(\\mathrm{A}\\)，\\(\\mathrm{B}\\)の位置ベクトルをそれぞれ\\(\\vec{a}\\)，\\(\\vec{b}\\)とする．点\\(\\mathrm{P}\\)が線分\\(\\mathrm{AB}\\)を\\(m:n\\)に内分するとき，点\\(\\mathrm{P}\\)の位置ベクトル\\(\\vec{p}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\vec{p}=\\frac{n\\vec{a}+m\\vec{b}}{m+n}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        内分点は線分の内側にある点である．
      </p>
    `,
    relatedIds: ["ichivector", "naibunten", "gaibunten_vector"]
  },
  {
    id: "gaibunten_vector",
    term: "外分（ベクトル）",
    kana: "がいぶん",
    yomi: "gaibunten_vector",
    group: "か",
    type: "公式",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "線分を外分する点の位置ベクトルを求める公式．",
    description: "線分を外分する点の位置ベクトルを求める公式．",
    bodyHtml: `
      <p>
        点\\(\\mathrm{A}\\)，\\(\\mathrm{B}\\)の位置ベクトルをそれぞれ\\(\\vec{a}\\)，\\(\\vec{b}\\)とする．点\\(\\mathrm{P}\\)が線分\\(\\mathrm{AB}\\)を\\(m:n\\)に外分するとき，\\(m\\ne n\\)なら，点\\(\\mathrm{P}\\)の位置ベクトル\\(\\vec{p}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\vec{p}=\\frac{-n\\vec{a}+m\\vec{b}}{m-n}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        外分点は，直線\\(\\mathrm{AB}\\)上で線分\\(\\mathrm{AB}\\)の外側にある点である．
      </p>
    `,
    relatedIds: ["ichivector", "gaibunten", "uchibunten_vector"]
  },
  {
    id: "juushin_vector",
    term: "重心（ベクトル）",
    kana: "じゅうしん",
    yomi: "juushin_vector",
    group: "し",
    type: "公式",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "三角形の3つの中線の交点を位置ベクトルで表す公式．",
    description: "三角形の3つの中線の交点を位置ベクトルで表す公式．",
    bodyHtml: `
      <p>
        三角形\\(\\mathrm{ABC}\\)の3つの中線の交点を重心という．
      </p>
      <p>
        点\\(\\mathrm{A}\\)，\\(\\mathrm{B}\\)，\\(\\mathrm{C}\\)の位置ベクトルをそれぞれ\\(\\vec{a}\\)，\\(\\vec{b}\\)，\\(\\vec{c}\\)とすると，重心\\(\\mathrm{G}\\)の位置ベクトル\\(\\vec{g}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\vec{g}=\\frac{\\vec{a}+\\vec{b}+\\vec{c}}{3}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["ichivector", "chuuten"]
  },
  {
    id: "houkou_vector_yougo",
    term: "方向ベクトル",
    kana: "ほうこうべくとる",
    yomi: "houkou_vector_yougo",
    group: "ほ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "直線の方向を表すベクトル．",
    description: "直線の方向を表すベクトル．",
    bodyHtml: `
      <p>
        直線の方向を表すベクトルを方向ベクトルという．
      </p>
      <p>
        直線上の点を\\(\\mathrm{A}\\)，方向ベクトルを\\(\\vec{d}\\)とすると，直線上の点\\(\\mathrm{P}\\)は実数\\(t\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        \\overrightarrow{\\mathrm{OP}}=\\overrightarrow{\\mathrm{OA}}+t\\vec{d}
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        方向ベクトルは\\(\\vec{0}\\)ではないベクトルであり，同じ直線の方向を表すベクトルは互いに平行である．
      </p>
    `,
    relatedIds: ["vector_houteishiki", "heikou_vector", "housen_vector"]
  },
  {
    id: "housen_vector",
    term: "法線ベクトル",
    kana: "ほうせんべくとる",
    yomi: "housen_vector",
    group: "ほ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "直線や平面に垂直なベクトル．",
    description: "直線や平面に垂直なベクトル．",
    bodyHtml: `
      <p>
        直線や平面に垂直なベクトルを法線ベクトルという．
      </p>
      <p>
        座標平面上の直線
      </p>
      <div class="math-block">
        \\[
        ax+by+c=0
        \\]
      </div>
      <p>
        に対して，\\((a,b)\\)はこの直線の法線ベクトルである．
      </p>
      <p>
        空間内の平面
      </p>
      <div class="math-block">
        \\[
        ax+by+cz+d=0
        \\]
      </div>
      <p>
        に対して，\\((a,b,c)\\)はこの平面の法線ベクトルである．
      </p>
    `,
    relatedIds: ["suichoku_vector", "heimen_no_houteishiki", "houkou_vector_yougo"]
  },
  {
    id: "vector_houteishiki",
    term: "ベクトル方程式",
    kana: "べくとるほうていしき",
    yomi: "vector_houteishiki",
    group: "へ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "点の位置ベクトルを用いて，直線や平面などを表す方程式．",
    description: "点の位置ベクトルを用いて，直線や平面などを表す方程式．",
    bodyHtml: `
      <p>
        点の位置ベクトルを用いて，直線や平面などを表す方程式をベクトル方程式という．
      </p>
      <p>
        たとえば，点\\(\\mathrm{A}\\)を通り，\\(\\vec{d}\\ne\\vec{0}\\)を方向ベクトルにもつ直線は，実数\\(t\\)を用いて，
      </p>
      <div class="math-block">
        \\[
        \\vec{p}=\\vec{a}+t\\vec{d}
        \\]
      </div>
      <p>
        と表される．ここで，\\(\\vec{a}\\)は点\\(\\mathrm{A}\\)の位置ベクトル，\\(\\vec{p}\\)は直線上の点\\(\\mathrm{P}\\)の位置ベクトルである．
      </p>
    `,
    relatedIds: ["ichivector", "houkou_vector_yougo", "chokusen_no_vector_houteishiki"]
  },
  {
    id: "chokusen_no_vector_houteishiki",
    term: "直線のベクトル方程式",
    kana: "ちょくせんのべくとるほうていしき",
    yomi: "chokusen_no_vector_houteishiki",
    group: "ち",
    type: "公式",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "直線を，通る点と方向ベクトルによって表す方程式．",
    description: "直線を，通る点と方向ベクトルによって表す方程式．",
    bodyHtml: `
      <p>
        点\\(\\mathrm{A}\\)を通り，\\(\\vec{d}\\ne\\vec{0}\\)を方向ベクトルにもつ直線上の点\\(\\mathrm{P}\\)の位置ベクトルを\\(\\vec{p}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\vec{p}=\\vec{a}+t\\vec{d}
        \\]
      </div>
      <p>
        と表される．ここで，\\(t\\)は実数であり，\\(\\vec{a}\\)は点\\(\\mathrm{A}\\)の位置ベクトルである．
      </p>
      <p>
        この式を，直線のベクトル方程式という．
      </p>
    `,
    relatedIds: ["vector_houteishiki", "houkou_vector_yougo", "ichivector"]
  },
  {
    id: "heimen_no_houteishiki",
    term: "平面の方程式",
    kana: "へいめんのほうていしき",
    yomi: "heimen_no_houteishiki",
    group: "へ",
    type: "公式",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "空間内の平面を表す方程式．",
    description: "空間内の平面を表す方程式．",
    bodyHtml: `
      <p>
        空間内の平面は，
      </p>
      <div class="math-block">
        \\[
        ax+by+cz+d=0
        \\]
      </div>
      <p>
        の形の方程式で表される．ただし，\\(a,b,c\\)がすべて\\(0\\)であることはない．
      </p>
      <p>
        このとき，\\((a,b,c)\\)はこの平面の法線ベクトルである．
      </p>
    `,
    relatedIds: ["housen_vector", "kuukan_zahyou", "suichoku_vector"]
  },
  {
    id: "kuukan_zahyou",
    term: "空間座標",
    kana: "くうかんざひょう",
    yomi: "kuukan_zahyou",
    group: "く",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "空間内の点の位置を3つの数で表すしくみ．",
    description: "空間内の点の位置を3つの数で表すしくみ．",
    bodyHtml: `
      <p>
        空間内の点の位置を3つの数で表すしくみを空間座標という．
      </p>
      <p>
        空間内の点\\(\\mathrm{P}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{P}(x,y,z)
        \\]
      </div>
      <p>
        のように表される．ここで，\\(x\\)，\\(y\\)，\\(z\\)をそれぞれ\\(x\\)座標，\\(y\\)座標，\\(z\\)座標という．
      </p>
    `,
    relatedIds: ["x_zahyou_kuukan", "y_zahyou_kuukan", "z_zahyou_kuukan", "seibun_hyouji_vector"]
  },
  {
    id: "x_zahyou_kuukan",
    term: "x座標（空間）",
    kana: "えっくすざひょう",
    yomi: "x_zahyou_kuukan",
    group: "え",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "空間座標において，\\(x\\)軸方向の位置を表す値．",
    description: "空間座標において，\\(x\\)軸方向の位置を表す値．",
    bodyHtml: `
      <p>
        空間座標\\((x,y,z)\\)において，\\(x\\)軸方向の位置を表す値を\\(x\\)座標という．
      </p>
    `,
    relatedIds: ["kuukan_zahyou", "y_zahyou_kuukan", "z_zahyou_kuukan"]
  },
  {
    id: "y_zahyou_kuukan",
    term: "y座標（空間）",
    kana: "わいざひょう",
    yomi: "y_zahyou_kuukan",
    group: "わ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "空間座標において，\\(y\\)軸方向の位置を表す値．",
    description: "空間座標において，\\(y\\)軸方向の位置を表す値．",
    bodyHtml: `
      <p>
        空間座標\\((x,y,z)\\)において，\\(y\\)軸方向の位置を表す値を\\(y\\)座標という．
      </p>
    `,
    relatedIds: ["kuukan_zahyou", "x_zahyou_kuukan", "z_zahyou_kuukan"]
  },
  {
    id: "z_zahyou_kuukan",
    term: "z座標（空間）",
    kana: "ぜっとざひょう",
    yomi: "z_zahyou_kuukan",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "ベクトル",
    unitIds: ["mathC_vectors"],
    shortDescription: "空間座標において，\\(z\\)軸方向の位置を表す値．",
    description: "空間座標において，\\(z\\)軸方向の位置を表す値．",
    bodyHtml: `
      <p>
        空間座標\\((x,y,z)\\)において，\\(z\\)軸方向の位置を表す値を\\(z\\)座標という．
      </p>
    `,
    relatedIds: ["kuukan_zahyou", "x_zahyou_kuukan", "y_zahyou_kuukan"]
  }
);
