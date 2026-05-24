window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "fukusosuu_heimen",
    term: "複素数平面",
    kana: "ふくそすうへいめん",
    yomi: "fukusosuu_heimen",
    group: "ふ",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数を平面上の点として表すための座標平面．",
    description: "複素数を平面上の点として表すための座標平面．",
    bodyHtml: `
      <p>
        複素数\\(z=x+yi\\)を，座標平面上の点\\((x,y)\\)として表すための平面を複素数平面という．
      </p>
      <p>
        横軸を実軸，縦軸を虚軸という．複素数\\(z=x+yi\\)では，実部\\(x\\)を横軸方向，虚部\\(y\\)を縦軸方向にとる．
      </p>
      <p>
        複素数平面を用いると，複素数の加法，減法，乗法，除法などを図形的に理解できる．
      </p>
    `,
    relatedIds: ["jitsujiku", "kyojiku", "jitsubu", "kyobu", "zettai_chi_fukusosuu"]
  },
  {
    id: "jitsujiku",
    term: "実軸",
    kana: "じつじく",
    yomi: "jitsujiku",
    group: "し",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数平面で，実部を表す横軸．",
    description: "複素数平面で，実部を表す横軸．",
    bodyHtml: `
      <p>
        複素数平面で，実部を表す横軸を実軸という．
      </p>
      <p>
        複素数\\(z=x+yi\\)を点\\((x,y)\\)として表すとき，実軸方向の座標は実部\\(x\\)である．
      </p>
      <p>
        実数は虚部が\\(0\\)である複素数なので，実軸上の点として表される．
      </p>
    `,
    relatedIds: ["fukusosuu_heimen", "kyojiku", "jitsubu"]
  },
  {
    id: "kyojiku",
    term: "虚軸",
    kana: "きょじく",
    yomi: "kyojiku",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数平面で，虚部を表す縦軸．",
    description: "複素数平面で，虚部を表す縦軸．",
    bodyHtml: `
      <p>
        複素数平面で，虚部を表す縦軸を虚軸という．
      </p>
      <p>
        複素数\\(z=x+yi\\)を点\\((x,y)\\)として表すとき，虚軸方向の座標は虚部\\(y\\)である．
      </p>
      <p>
        純虚数は，実部が\\(0\\)である複素数なので，虚軸上の点として表される．
      </p>
    `,
    relatedIds: ["fukusosuu_heimen", "jitsujiku", "kyobu"]
  },
  {
    id: "ten_to_fukusosuu",
    term: "点と複素数の対応",
    kana: "てんとふくそすうのたいおう",
    yomi: "ten_to_fukusosuu",
    group: "て",
    type: "用語",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数\\(x+yi\\)と平面上の点\\((x,y)\\)を対応させること．",
    description: "複素数\\(x+yi\\)と平面上の点\\((x,y)\\)を対応させること．",
    bodyHtml: `
      <p>
        複素数\\(z=x+yi\\)に対して，複素数平面上の点\\((x,y)\\)を対応させる．
      </p>
      <p>
        たとえば，複素数\\(3+2i\\)は，複素数平面上の点\\((3,2)\\)に対応する．
      </p>
      <p>
        逆に，複素数平面上の点\\((x,y)\\)には，複素数\\(x+yi\\)が対応する．
      </p>
    `,
    relatedIds: ["fukusosuu_heimen", "jitsujiku", "kyojiku"]
  },
  {
    id: "zettai_chi_fukusosuu",
    term: "絶対値（複素数）",
    kana: "ぜったいち",
    yomi: "zettai_chi_fukusosuu",
    group: "せ",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数平面で，原点からその複素数を表す点までの距離．",
    description: "複素数平面で，原点からその複素数を表す点までの距離．",
    bodyHtml: `
      <p>
        複素数\\(z=x+yi\\)に対して，複素数平面上で原点から点\\((x,y)\\)までの距離を，複素数\\(z\\)の絶対値という．
      </p>
      <p>
        記号では\\(|z|\\)と表し，
      </p>
      <div class="math-block">
        \\[
        |z|=\\sqrt{x^2+y^2}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        実数の絶対値は，数直線上で原点からの距離を表す．複素数の絶対値は，それを平面上の距離に拡張したものである．
      </p>
    `,
    relatedIds: ["fukusosuu_heimen", "kyori_fukusosuu", "kyokukeishiki"]
  },
  {
    id: "kyori_fukusosuu",
    term: "距離（複素数平面）",
    kana: "きょり",
    yomi: "kyori_fukusosuu",
    group: "き",
    type: "公式",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数平面上の2点間の距離を，複素数の絶対値で表したもの．",
    description: "複素数平面上の2点間の距離を，複素数の絶対値で表したもの．",
    bodyHtml: `
      <p>
        複素数\\(z_1\\)，\\(z_2\\)が表す2点間の距離は，
      </p>
      <div class="math-block">
        \\[
        |z_1-z_2|
        \\]
      </div>
      <p>
        で表される．
      </p>
      <p>
        たとえば，\\(z_1=x_1+y_1i\\)，\\(z_2=x_2+y_2i\\)とすると，
      </p>
      <div class="math-block">
        \\[
        |z_1-z_2|=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}
        \\]
      </div>
      <p>
        である．これは座標平面における2点間の距離の公式と同じである．
      </p>
    `,
    relatedIds: ["zettai_chi_fukusosuu", "nitenkan_no_kyori", "fukusosuu_heimen"]
  },
  {
    id: "kyouyaku_fukusosuu_complex_plane",
    term: "共役複素数",
    kana: "きょうやくふくそすう",
    yomi: "kyouyaku_fukusosuu_complex_plane",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数\\(a+bi\\)に対して，虚部の符号を変えた複素数\\(a-bi\\)．",
    description: "複素数\\(a+bi\\)に対して，虚部の符号を変えた複素数\\(a-bi\\)．",
    bodyHtml: `
      <p>
        複素数\\(z=a+bi\\)に対して，虚部の符号を変えた複素数
      </p>
      <div class="math-block">
        \\[
        \\overline{z}=a-bi
        \\]
      </div>
      <p>
        を，\\(z\\)の共役複素数という．
      </p>
      <p>
        複素数平面上では，共役複素数は実軸に関して対称な点として表される．
      </p>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        z\\overline{z}=|z|^2
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["fukusosuu_heimen", "zettai_chi_fukusosuu", "jitsujiku"]
  },
  {
    id: "henkaku",
    term: "偏角",
    kana: "へんかく",
    yomi: "henkaku",
    group: "へ",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数を表す点の方向を，正の実軸から測った角．",
    description: "複素数を表す点の方向を，正の実軸から測った角．",
    bodyHtml: `
      <p>
        \\(0\\)でない複素数\\(z\\)を表す点について，正の実軸からその点へ向かう半直線までの角を，\\(z\\)の偏角という．
      </p>
      <p>
        偏角を\\(\\theta\\)とすると，複素数\\(z\\)は，絶対値\\(r=|z|\\)を用いて
      </p>
      <div class="math-block">
        \\[
        z=r(\\cos\\theta+i\\sin\\theta)
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        偏角は\\(2\\pi\\)の整数倍だけ異なる角を同じ方向として表すため，1つに定まるとは限らない．
      </p>
    `,
    relatedIds: ["kyokukeishiki", "zettai_chi_fukusosuu", "henkaku_no_shuchi"]
  },
  {
    id: "henkaku_no_shuchi",
    term: "偏角の主値",
    kana: "へんかくのしゅち",
    yomi: "henkaku_no_shuchi",
    group: "へ",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複数ある偏角のうち，決められた範囲に入る代表の値．",
    description: "複数ある偏角のうち，決められた範囲に入る代表の値．",
    bodyHtml: `
      <p>
        偏角は\\(2\\pi\\)の整数倍だけ異なる値を同じ方向として表すため，複数存在する．そのうち，決められた範囲に入る代表の値を偏角の主値という．
      </p>
      <p>
        たとえば，偏角の主値を
      </p>
      <div class="math-block">
        \\[
        -\\pi<\\theta\\leqq\\pi
        \\]
      </div>
      <p>
        の範囲で定めることがある．
      </p>
      <p>
        どの範囲を主値として採用するかは，文脈によって異なることがある．
      </p>
    `,
    relatedIds: ["henkaku", "kyokukeishiki"]
  },
  {
    id: "kyokukeishiki",
    term: "極形式",
    kana: "きょくけいしき",
    yomi: "kyokukeishiki",
    group: "き",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数を絶対値と偏角を用いて表した形．",
    description: "複素数を絶対値と偏角を用いて表した形．",
    bodyHtml: `
      <p>
        \\(0\\)でない複素数\\(z\\)について，絶対値を\\(r\\)，偏角を\\(\\theta\\)とするとき，
      </p>
      <div class="math-block">
        \\[
        z=r(\\cos\\theta+i\sin\\theta)
        \\]
      </div>
      <p>
        と表すことができる．この形を複素数の極形式という．
      </p>
      <p>
        ここで，
      </p>
      <div class="math-block">
        \\[
        r=|z|,\quad r>0
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        極形式を用いると，複素数の積や商，累乗，累乗根を図形的に扱いやすくなる．
      </p>
    `,
    relatedIds: ["henkaku", "zettai_chi_fukusosuu", "fukusosuu_no_seki", "de_moivre"]
  },
  {
    id: "fukusosuu_no_seki",
    term: "複素数の積",
    kana: "ふくそすうのせき",
    yomi: "fukusosuu_no_seki",
    group: "ふ",
    type: "性質",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "極形式では，絶対値は積になり，偏角は和になる．",
    description: "極形式では，絶対値は積になり，偏角は和になる．",
    bodyHtml: `
      <p>
        複素数
      </p>
      <div class="math-block">
        \\[
        z_1=r_1(\\cos\\alpha+i\\sin\\alpha),\quad
        z_2=r_2(\\cos\\beta+i\\sin\\beta)
        \\]
      </div>
      <p>
        に対して，積\\(z_1z_2\\)は，
      </p>
      <div class="math-block">
        \\[
        z_1z_2=r_1r_2\\{\\cos(\\alpha+\beta)+i\\sin(\\alpha+\beta)\\}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        つまり，複素数をかけると，絶対値はかけられ，偏角はたされる．
      </p>
    `,
    relatedIds: ["kyokukeishiki", "henkaku", "fukusosuu_no_shou", "de_moivre"]
  },
  {
    id: "fukusosuu_no_shou",
    term: "複素数の商",
    kana: "ふくそすうのしょう",
    yomi: "fukusosuu_no_shou",
    group: "ふ",
    type: "性質",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "極形式では，絶対値は商になり，偏角は差になる．",
    description: "極形式では，絶対値は商になり，偏角は差になる．",
    bodyHtml: `
      <p>
        複素数
      </p>
      <div class="math-block">
        \\[
        z_1=r_1(\\cos\\alpha+i\\sin\\alpha),\quad
        z_2=r_2(\\cos\\beta+i\\sin\\beta)
        \\]
      </div>
      <p>
        について，\\(z_2\\ne 0\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{z_1}{z_2}
        =
        \\frac{r_1}{r_2}\\{\\cos(\\alpha-\beta)+i\\sin(\\alpha-\beta)\\}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        つまり，複素数で割ると，絶対値は割られ，偏角はひかれる．
      </p>
    `,
    relatedIds: ["kyokukeishiki", "fukusosuu_no_seki", "henkaku"]
  },
  {
    id: "de_moivre",
    term: "ド・モアブルの定理",
    kana: "どもあぶるのていり",
    yomi: "de_moivre",
    group: "と",
    type: "定理",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "極形式で表された複素数の累乗を求める定理．",
    description: "極形式で表された複素数の累乗を求める定理．",
    bodyHtml: `
      <p>
        整数\\(n\\)について，
      </p>
      <div class="math-block">
        \\[
        (\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta
        \\]
      </div>
      <p>
        が成り立つ．これをド・モアブルの定理という．
      </p>
      <p>
        より一般に，\\(z=r(\\cos\\theta+i\\sin\\theta)\\)なら，
      </p>
      <div class="math-block">
        \\[
        z^n=r^n(\\cos n\\theta+i\\sin n\\theta)
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>理由</h3>
      <p>
        極形式で表した複素数の積では，絶対値はかけられ，偏角はたされる．したがって，同じ複素数を\\(n\\)回かけると，絶対値は\\(n\\)乗され，偏角は\\(n\\)倍される．
      </p>
    `,
    relatedIds: ["kyokukeishiki", "fukusosuu_no_seki", "ruijoukon_fukusosuu"]
  },
  {
    id: "ruijoukon_fukusosuu",
    term: "累乗根（複素数）",
    kana: "るいじょうこん",
    yomi: "ruijoukon_fukusosuu",
    group: "る",
    type: "定義",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "\\(n\\)乗すると，もとの複素数になる複素数．",
    description: "\\(n\\)乗すると，もとの複素数になる複素数．",
    bodyHtml: `
      <p>
        複素数\\(w\\)について，
      </p>
      <div class="math-block">
        \\[
        w^n=z
        \\]
      </div>
      <p>
        を満たす\\(w\\)を，\\(z\\)の\\(n\\)乗根という．
      </p>
      <p>
        複素数平面では，\\(0\\)でない複素数の\\(n\\)乗根は，原点を中心とする円周上に等間隔に並ぶ．
      </p>
      <p>
        たとえば，\\(1\\)の3乗根は，
      </p>
      <div class="math-block">
        \\[
        1,\quad -\\frac{1}{2}+\\frac{\\sqrt{3}}{2}i,\quad -\\frac{1}{2}-\\frac{\\sqrt{3}}{2}i
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["de_moivre", "kyokukeishiki", "houken_fukusosuu"]
  },
  {
    id: "houken_fukusosuu",
    term: "方程式と複素数平面",
    kana: "ほうていしきとふくそすうへいめん",
    yomi: "houken_fukusosuu",
    group: "ほ",
    type: "用語",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "方程式の複素数解を，複素数平面上の点として考えること．",
    description: "方程式の複素数解を，複素数平面上の点として考えること．",
    bodyHtml: `
      <p>
        方程式の複素数解は，複素数平面上の点として表すことができる．
      </p>
      <p>
        たとえば，方程式
      </p>
      <div class="math-block">
        \\[
        z^3=1
        \\]
      </div>
      <p>
        の解は，複素数平面上で原点を中心とする単位円上に等間隔に並ぶ3点として表される．
      </p>
      <p>
        このように，複素数平面を用いると，複素数解の配置や対称性を図形的に理解できる．
      </p>
    `,
    relatedIds: ["ruijoukon_fukusosuu", "de_moivre", "fukusosuu_heimen"]
  },
  {
    id: "kaiten_fukusosuu",
    term: "回転（複素数平面）",
    kana: "かいてん",
    yomi: "kaiten_fukusosuu",
    group: "か",
    type: "性質",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数をかけることで，点を原点のまわりに回転させること．",
    description: "複素数をかけることで，点を原点のまわりに回転させること．",
    bodyHtml: `
      <p>
        複素数平面上の点を表す複素数\\(z\\)に，
      </p>
      <div class="math-block">
        \\[
        \\cos\\theta+i\\sin\\theta
        \\]
      </div>
      <p>
        をかけると，点は原点を中心に角\\(\\theta\\)だけ回転する．
      </p>
      <p>
        実際，\\(z=r(\\cos\\alpha+i\\sin\\alpha)\\)なら，
      </p>
      <div class="math-block">
        \\[
        z(\\cos\\theta+i\\sin\\theta)
        =
        r\\{\\cos(\\alpha+\theta)+i\\sin(\\alpha+\theta)\\}
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["kyokukeishiki", "fukusosuu_no_seki", "henkaku"]
  },
  {
    id: "kakudai_shukushou_fukusosuu",
    term: "拡大・縮小（複素数平面）",
    kana: "かくだいしゅくしょう",
    yomi: "kakudai_shukushou_fukusosuu",
    group: "か",
    type: "性質",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数をかけることで，原点からの距離を倍率だけ変えること．",
    description: "複素数をかけることで，原点からの距離を倍率だけ変えること．",
    bodyHtml: `
      <p>
        複素数平面上の点を表す複素数\\(z\\)に，絶対値が\\(r\\)である複素数をかけると，原点からの距離は\\(r\\)倍される．
      </p>
      <p>
        たとえば，\\(z\\)に複素数\\(w\\)をかけると，
      </p>
      <div class="math-block">
        \\[
        |wz|=|w||z|
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        したがって，\\(|w|>1\\)なら原点から遠ざかる向きに拡大され，\\(0<|w|<1\\)なら原点に近づく向きに縮小される．
      </p>
    `,
    relatedIds: ["zettai_chi_fukusosuu", "fukusosuu_no_seki", "kaiten_fukusosuu"]
  },
  {
    id: "kiseki_fukusosuu",
    term: "軌跡（複素数平面）",
    kana: "きせき",
    yomi: "kiseki_fukusosuu",
    group: "き",
    type: "用語",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数が条件を満たしながら動くとき，対応する点が描く図形．",
    description: "複素数が条件を満たしながら動くとき，対応する点が描く図形．",
    bodyHtml: `
      <p>
        複素数\\(z\\)が条件を満たしながら動くとき，複素数平面上で対応する点が描く図形を軌跡という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        |z-a|=r
        \\]
      </div>
      <p>
        は，点\\(a\\)を中心とする半径\\(r\\)の円を表す．
      </p>
      <p>
        また，
      </p>
      <div class="math-block">
        \\[
        |z-a|=|z-b|
        \\]
      </div>
      <p>
        は，2点\\(a\\)，\\(b\\)から等距離にある点全体，つまり線分\\(ab\\)の垂直二等分線を表す．
      </p>
    `,
    relatedIds: ["kyori_fukusosuu", "en_no_houteishiki", "suisen_nitou_bunsen"]
  },
  {
    id: "arg",
    term: "arg",
    kana: "あーぎゅめんと",
    yomi: "arg",
    group: "英字",
    type: "記法",
    subject: "数学C",
    unit: "複素数平面",
    unitIds: ["mathC_complex_plane"],
    shortDescription: "複素数の偏角を表す記号．",
    description: "複素数の偏角を表す記号．",
    bodyHtml: `
      <p>
        \\(\\arg z\\)は，複素数\\(z\\)の偏角を表す記号である．
      </p>
      <p>
        ただし，偏角は\\(2\\pi\\)の整数倍だけ異なる値をすべて表せるため，\\(\\arg z\\)が1つの値だけを表すとは限らない．
      </p>
      <p>
        文脈によっては，偏角の主値を表す記号として用いられることもある．
      </p>
    `,
    relatedIds: ["henkaku", "henkaku_no_shuchi"]
  }
);
