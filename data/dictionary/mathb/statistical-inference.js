window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "toukeiteki_na_suisoku",
    term: "統計的な推測",
    kana: "とうけいてきなすいそく",
    yomi: "toukeiteki_na_suisoku",
    group: "と",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "一部のデータから，全体の性質を確率的に推測すること．",
    description: "一部のデータから，全体の性質を確率的に推測すること．",
    bodyHtml: `
      <p>
        一部のデータから，全体の性質を確率的に推測することを統計的な推測という．
      </p>
      <p>
        たとえば，すべての人を調べることが難しいとき，一部の人を選んで調査し，その結果から全体の傾向を推測する．
      </p>
      <p>
        統計的な推測では，標本から母集団の平均や比率を推定したり，仮説が妥当かどうかを検定したりする．
      </p>
    `,
    relatedIds: ["boshuudan", "hyouhon", "suitei", "kasetsu_kentei"]
  },
  {
    id: "boshuudan",
    term: "母集団",
    kana: "ぼしゅうだん",
    yomi: "boshuudan",
    group: "ほ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "調査や推測の対象となる全体の集団．",
    description: "調査や推測の対象となる全体の集団．",
    bodyHtml: `
      <p>
        調査や推測の対象となる全体の集団を母集団という．
      </p>
      <p>
        たとえば，ある学校の生徒全体の平均身長を調べたいとき，その学校の生徒全体が母集団である．
      </p>
      <p>
        母集団全体を調べることが難しい場合，一部を標本として取り出し，その標本から母集団の性質を推測する．
      </p>
    `,
    relatedIds: ["hyouhon", "zen_suuchousa", "hyouhon_chousa"]
  },
  {
    id: "hyouhon",
    term: "標本",
    kana: "ひょうほん",
    yomi: "hyouhon",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団から取り出された一部のデータ．",
    description: "母集団から取り出された一部のデータ．",
    bodyHtml: `
      <p>
        母集団から取り出された一部のデータを標本という．
      </p>
      <p>
        たとえば，ある学校の生徒全体から無作為に50人を選んで身長を調べるとき，その50人分の身長データが標本である．
      </p>
      <p>
        標本から計算される平均や分散などを用いて，母集団の性質を推測する．
      </p>
    `,
    relatedIds: ["boshuudan", "hyouhon_heikin", "hyouhon_bunsan", "musakui_chuushutsu"]
  },
  {
    id: "zen_suuchousa",
    term: "全数調査",
    kana: "ぜんすうちょうさ",
    yomi: "zen_suuchousa",
    group: "せ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団のすべての要素を調べる調査．",
    description: "母集団のすべての要素を調べる調査．",
    bodyHtml: `
      <p>
        母集団のすべての要素を調べる調査を全数調査という．
      </p>
      <p>
        全数調査では母集団全体を調べるため，得られる情報は詳しいが，対象が大きい場合には時間や費用がかかる．
      </p>
      <p>
        国勢調査のように，全体を調べることに意味がある場合に用いられる．
      </p>
    `,
    relatedIds: ["boshuudan", "hyouhon_chousa"]
  },
  {
    id: "hyouhon_chousa",
    term: "標本調査",
    kana: "ひょうほんちょうさ",
    yomi: "hyouhon_chousa",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団の一部を標本として調べ，母集団の性質を推測する調査．",
    description: "母集団の一部を標本として調べ，母集団の性質を推測する調査．",
    bodyHtml: `
      <p>
        母集団の一部を標本として調べ，その結果から母集団の性質を推測する調査を標本調査という．
      </p>
      <p>
        標本調査では，標本の選び方が重要である．標本に偏りがあると，母集団の性質を正しく推測できないことがある．
      </p>
      <p>
        そのため，無作為抽出によって標本を選ぶことが基本になる．
      </p>
    `,
    relatedIds: ["boshuudan", "hyouhon", "musakui_chuushutsu"]
  },
  {
    id: "musakui_chuushutsu",
    term: "無作為抽出",
    kana: "むさくいちゅうしゅつ",
    yomi: "musakui_chuushutsu",
    group: "む",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団の各要素が偏りなく選ばれるように標本を取り出すこと．",
    description: "母集団の各要素が偏りなく選ばれるように標本を取り出すこと．",
    bodyHtml: `
      <p>
        母集団の各要素が偏りなく選ばれるように標本を取り出すことを無作為抽出という．
      </p>
      <p>
        無作為抽出では，調査する人の都合や意図によって標本が偏らないようにする．
      </p>
      <p>
        標本が無作為に選ばれていると，確率の考え方を用いて母集団について推測しやすくなる．
      </p>
    `,
    relatedIds: ["hyouhon", "hyouhon_chousa", "random"]
  },
  {
    id: "random",
    term: "ランダム",
    kana: "らんだむ",
    yomi: "random",
    group: "ら",
    type: "用語",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "偶然によって決まり，特定の偏りがないように扱うこと．",
    description: "偶然によって決まり，特定の偏りがないように扱うこと．",
    bodyHtml: `
      <p>
        偶然によって決まり，特定の偏りがないように扱うことをランダムという．
      </p>
      <p>
        統計では，標本をランダムに選ぶことで，母集団の性質を公平に反映しやすくする．
      </p>
      <p>
        ただし，ランダムに選ぶとは，適当に選ぶという意味ではなく，決められた確率的な方法に従って選ぶという意味である．
      </p>
    `,
    relatedIds: ["musakui_chuushutsu", "kakuritsuhensuu"]
  },
  {
    id: "bosu",
    term: "母数",
    kana: "ぼすう",
    yomi: "bosu",
    group: "ほ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団の性質を表す値．",
    description: "母集団の性質を表す値．",
    bodyHtml: `
      <p>
        母集団の性質を表す値を母数という．
      </p>
      <p>
        たとえば，母集団全体の平均である母平均や，母集団全体の分散である母分散は母数である．
      </p>
      <p>
        母数はふつう直接は分からないので，標本から推定する．
      </p>
    `,
    relatedIds: ["boheikin", "bobunsan", "suitei"]
  },
  {
    id: "boheikin",
    term: "母平均",
    kana: "ぼへいきん",
    yomi: "boheikin",
    group: "ほ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団全体の平均．",
    description: "母集団全体の平均．",
    bodyHtml: `
      <p>
        母集団全体の平均を母平均という．
      </p>
      <p>
        母平均は，母集団の中心的な位置を表す母数である．
      </p>
      <p>
        母集団全体を調べられないときは，標本平均を用いて母平均を推定する．
      </p>
    `,
    relatedIds: ["bosu", "hyouhon_heikin", "suitei"]
  },
  {
    id: "bobunsan",
    term: "母分散",
    kana: "ぼぶんさん",
    yomi: "bobunsan",
    group: "ほ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母集団全体の分散．",
    description: "母集団全体の分散．",
    bodyHtml: `
      <p>
        母集団全体の分散を母分散という．
      </p>
      <p>
        母分散は，母集団のデータが母平均のまわりにどれくらい散らばっているかを表す母数である．
      </p>
      <p>
        母分散の正の平方根を母標準偏差という．
      </p>
    `,
    relatedIds: ["bosu", "bohyoujun_hensa", "hyouhon_bunsan"]
  },
  {
    id: "bohyoujun_hensa",
    term: "母標準偏差",
    kana: "ぼひょうじゅんへんさ",
    yomi: "bohyoujun_hensa",
    group: "ほ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母分散の正の平方根．",
    description: "母分散の正の平方根．",
    bodyHtml: `
      <p>
        母分散の正の平方根を母標準偏差という．
      </p>
      <p>
        母標準偏差は，母集団の散らばりをもとのデータと同じ単位で表す値である．
      </p>
    `,
    relatedIds: ["bobunsan", "hyouhon_hyoujun_hensa"]
  },
  {
    id: "hyouhon_heikin",
    term: "標本平均",
    kana: "ひょうほんへいきん",
    yomi: "hyouhon_heikin",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本のデータの平均．",
    description: "標本のデータの平均．",
    bodyHtml: `
      <p>
        標本のデータの平均を標本平均という．
      </p>
      <p>
        標本の大きさを\\(n\\)，標本の値を\\(X_1,X_2,\\cdots,X_n\\)とすると，標本平均\\(\\overline{X}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\overline{X}=\\frac{X_1+X_2+\\cdots+X_n}{n}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        標本平均は，母平均を推定するためによく用いられる．
      </p>
    `,
    relatedIds: ["hyouhon", "boheikin", "suiteiryou", "hyouhon_bunpu"]
  },
  {
    id: "hyouhon_bunsan",
    term: "標本分散",
    kana: "ひょうほんぶんさん",
    yomi: "hyouhon_bunsan",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本のデータの散らばりを表す値．",
    description: "標本のデータの散らばりを表す値．",
    bodyHtml: `
      <p>
        標本のデータの散らばりを表す値を標本分散という．
      </p>
      <p>
        標本の値を\\(X_1,X_2,\\cdots,X_n\\)，標本平均を\\(\\overline{X}\\)とすると，標本分散は，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{n}\\{(X_1-\\overline{X})^2+(X_2-\\overline{X})^2+\\cdots+(X_n-\\overline{X})^2\\}
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        教科書や文脈によっては，母分散の推定に使いやすいように\\(n-1\\)で割る不偏分散を扱うこともある．
      </p>
    `,
    relatedIds: ["hyouhon", "hyouhon_hyoujun_hensa", "fuhen_bunsan"]
  },
  {
    id: "hyouhon_hyoujun_hensa",
    term: "標本標準偏差",
    kana: "ひょうほんひょうじゅんへんさ",
    yomi: "hyouhon_hyoujun_hensa",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本分散の正の平方根．",
    description: "標本分散の正の平方根．",
    bodyHtml: `
      <p>
        標本分散の正の平方根を標本標準偏差という．
      </p>
      <p>
        標本標準偏差は，標本の散らばりをもとのデータと同じ単位で表す値である．
      </p>
    `,
    relatedIds: ["hyouhon_bunsan", "bohyoujun_hensa"]
  },
  {
    id: "fuhen_bunsan",
    term: "不偏分散",
    kana: "ふへんぶんさん",
    yomi: "fuhen_bunsan",
    group: "ふ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "偏りなく母分散を推定するために，偏差平方和を\\(n-1\\)で割った値．",
    description: "偏りなく母分散を推定するために，偏差平方和を\\(n-1\\)で割った値．",
    bodyHtml: `
      <p>
        標本の値を\\(X_1,X_2,\cdots,X_n\\)，標本平均を\\(\\overline{X}\\)とすると，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{n-1}\\{(X_1-\\overline{X})^2+(X_2-\\overline{X})^2+\cdots+(X_n-\\overline{X})^2\\}
        \\]
      </div>
      <p>
        を不偏分散という．
      </p>
      <p>
        母平均が分からず標本平均を使って偏差を計算するため，母分散を推定するときには\\(n\\)ではなく\\(n-1\\)で割ると偏りが補正される．
      </p>
    `,
    relatedIds: ["hyouhon_bunsan", "bobunsan", "suiteiryou"]
  },
  {
    id: "kakuritsuhensuu",
    term: "確率変数",
    kana: "かくりつへんすう",
    yomi: "kakuritsuhensuu",
    group: "か",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "試行の結果によって値が決まる変数．",
    description: "試行の結果によって値が決まる変数．",
    bodyHtml: `
      <p>
        試行の結果によって値が決まる変数を確率変数という．
      </p>
      <p>
        たとえば，さいころを1回投げ，出た目の数を\\(X\\)とすると，\\(X\\)は確率変数である．
      </p>
      <p>
        確率変数は，どの値をどの確率でとるかによって特徴づけられる．
      </p>
    `,
    relatedIds: ["kakuritsu_bunpu", "kitai_chi", "bunsan_kakuritsuhensuu"]
  },
  {
    id: "kakuritsu_bunpu",
    term: "確率分布",
    kana: "かくりつぶんぷ",
    yomi: "kakuritsu_bunpu",
    group: "か",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "確率変数がどの値をどの確率でとるかを表したもの．",
    description: "確率変数がどの値をどの確率でとるかを表したもの．",
    bodyHtml: `
      <p>
        確率変数がどの値をどの確率でとるかを表したものを確率分布という．
      </p>
      <p>
        たとえば，さいころを1回投げて出る目を\\(X\\)とすると，\\(X\\)は\\(1,2,3,4,5,6\\)をそれぞれ確率\\(\\frac{1}{6}\\)でとる．これが\\(X\\)の確率分布である．
      </p>
    `,
    relatedIds: ["kakuritsuhensuu", "nikou_bunpu", "seiki_bunpu"]
  },
  {
    id: "bunsan_kakuritsuhensuu",
    term: "分散（確率変数）",
    kana: "ぶんさん",
    yomi: "bunsan_kakuritsuhensuu",
    group: "ふ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "確率変数の値が期待値のまわりにどれくらい散らばるかを表す値．",
    description: "確率変数の値が期待値のまわりにどれくらい散らばるかを表す値．",
    bodyHtml: `
      <p>
        確率変数の値が期待値のまわりにどれくらい散らばるかを表す値を分散という．
      </p>
      <p>
        確率変数\\(X\\)の期待値を\\(E(X)\\)とすると，分散はふつう\\(V(X)\\)で表す．
      </p>
      <div class="math-block">
        \\[
        V(X)=E\\{(X-E(X))^2\\}
        \\]
      </div>
      <p>
        分散が大きいほど，確率変数の値は期待値のまわりに大きく散らばる．
      </p>
    `,
    relatedIds: ["kakuritsuhensuu", "kitai_chi", "hyoujun_hensa_kakuritsuhensuu"]
  },
  {
    id: "hyoujun_hensa_kakuritsuhensuu",
    term: "標準偏差（確率変数）",
    kana: "ひょうじゅんへんさ",
    yomi: "hyoujun_hensa_kakuritsuhensuu",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "確率変数の分散の正の平方根．",
    description: "確率変数の分散の正の平方根．",
    bodyHtml: `
      <p>
        確率変数の分散の正の平方根を標準偏差という．
      </p>
      <p>
        確率変数\\(X\\)の分散が\\(V(X)\\)であるとき，標準偏差は
      </p>
      <div class="math-block">
        \\[
        \\sqrt{V(X)}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["bunsan_kakuritsuhensuu", "kakuritsuhensuu"]
  },
  {
    id: "nikou_bunpu",
    term: "二項分布",
    kana: "にこうぶんぷ",
    yomi: "nikou_bunpu",
    group: "に",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "独立な試行をくり返したとき，成功回数が従う確率分布．",
    description: "独立な試行をくり返したとき，成功回数が従う確率分布．",
    bodyHtml: `
      <p>
        1回の試行である事象が起こる確率を\\(p\\)とし，その試行を独立に\\(n\\)回くり返す．このとき，その事象が起こる回数\\(X\\)の確率分布を二項分布という．
      </p>
      <p>
        \\(X\\)が二項分布に従うとき，
      </p>
      <div class="math-block">
        \\[
        P(X=r)={}_nC_rp^r(1-p)^{n-r}
        \\]
      </div>
      <p>
        である．このことを，\\(X\\)は二項分布\\(B(n,p)\\)に従うという．
      </p>
    `,
    relatedIds: ["hanpuku_shikou", "seiki_bunpu", "kakuritsu_bunpu"]
  },
  {
    id: "seiki_bunpu",
    term: "正規分布",
    kana: "せいきぶんぷ",
    yomi: "seiki_bunpu",
    group: "せ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "平均を中心として左右対称な，釣鐘型の連続型確率分布．",
    description: "平均を中心として左右対称な，釣鐘型の連続型確率分布．",
    bodyHtml: `
      <p>
        平均を中心として左右対称な，釣鐘型の連続型確率分布を正規分布という．
      </p>
      <p>
        平均\\(m\\)，標準偏差\\(\\sigma\\)の正規分布を，
      </p>
      <div class="math-block">
        \\[
        N(m,\\sigma^2)
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        正規分布は，測定誤差や多数の要因が重なったデータの分布などでよく現れる．
      </p>
    `,
    relatedIds: ["hyoujun_seiki_bunpu", "hyoujunka", "nikou_bunpu"]
  },
  {
    id: "hyoujun_seiki_bunpu",
    term: "標準正規分布",
    kana: "ひょうじゅんせいきぶんぷ",
    yomi: "hyoujun_seiki_bunpu",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "平均\\(0\\)，分散\\(1\\)の正規分布．",
    description: "平均\\(0\\)，分散\\(1\\)の正規分布．",
    bodyHtml: `
      <p>
        平均\\(0\\)，分散\\(1\\)の正規分布を標準正規分布という．
      </p>
      <p>
        標準正規分布は，
      </p>
      <div class="math-block">
        \\[
        N(0,1)
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        正規分布に従う確率変数を標準化すると，標準正規分布に従う確率変数として扱うことができる．
      </p>
    `,
    relatedIds: ["seiki_bunpu", "hyoujunka"]
  },
  {
    id: "hyoujunka",
    term: "標準化",
    kana: "ひょうじゅんか",
    yomi: "hyoujunka",
    group: "ひ",
    type: "操作",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "平均をひき，標準偏差で割ることで，平均\\(0\\)，標準偏差\\(1\\)に直すこと．",
    description: "平均をひき，標準偏差で割ることで，平均\\(0\\)，標準偏差\\(1\\)に直すこと．",
    bodyHtml: `
      <p>
        確率変数\\(X\\)が平均\\(m\\)，標準偏差\\(\\sigma\\)の分布に従うとき，
      </p>
      <div class="math-block">
        \\[
        Z=\\frac{X-m}{\\sigma}
        \\]
      </div>
      <p>
        と変換することを標準化という．
      </p>
      <p>
        標準化すると，平均は\\(0\\)，標準偏差は\\(1\\)になる．
      </p>
      <p>
        特に，正規分布に従う確率変数を標準化すると，標準正規分布に従う確率変数になる．
      </p>
    `,
    relatedIds: ["seiki_bunpu", "hyoujun_seiki_bunpu"]
  },
  {
    id: "hyouhon_bunpu",
    term: "標本分布",
    kana: "ひょうほんぶんぷ",
    yomi: "hyouhon_bunpu",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本から計算される統計量が従う確率分布．",
    description: "標本から計算される統計量が従う確率分布．",
    bodyHtml: `
      <p>
        標本から計算される統計量が従う確率分布を標本分布という．
      </p>
      <p>
        たとえば，標本平均\\(\\overline{X}\\)は標本の選ばれ方によって値が変わるので，確率変数として分布をもつ．この\\(\\overline{X}\\)の分布は標本分布の一例である．
      </p>
      <p>
        標本分布を考えることで，推定や検定を確率的に扱えるようになる．
      </p>
    `,
    relatedIds: ["hyouhon_heikin", "suiteiryou", "chuushin_gokuteiri"]
  },
  {
    id: "chuushin_gokuteiri",
    term: "中心極限定理",
    kana: "ちゅうしんきょくげんていり",
    yomi: "chuushin_gokuteiri",
    group: "ち",
    type: "定理",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本の大きさが大きいとき，標本平均の分布が正規分布で近似できるという定理．",
    description: "標本の大きさが大きいとき，標本平均の分布が正規分布で近似できるという定理．",
    bodyHtml: `
      <p>
        母集団がどのような分布であっても，標本の大きさ\\(n\\)が十分大きいとき，標本平均の分布は正規分布で近似できる．これを中心極限定理という．
      </p>
      <p>
        母平均を\\(m\\)，母標準偏差を\\(\\sigma\\)とすると，標本平均\\(\\overline{X}\\)は，およそ平均\\(m\\)，標準偏差\\(\\frac{\\sigma}{\\sqrt{n}}\\)の正規分布に従う．
      </p>
      <p>
        この定理により，母集団の分布が正規分布でなくても，標本平均を用いた推定や検定を正規分布で近似して扱えることがある．
      </p>
    `,
    relatedIds: ["hyouhon_bunpu", "hyouhon_heikin", "seiki_bunpu"]
  },
  {
    id: "suitei",
    term: "推定",
    kana: "すいてい",
    yomi: "suitei",
    group: "す",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "標本から母集団の母数を推測すること．",
    description: "標本から母集団の母数を推測すること．",
    bodyHtml: `
      <p>
        標本から母集団の母数を推測することを推定という．
      </p>
      <p>
        たとえば，標本平均を用いて母平均を推定したり，標本比率を用いて母比率を推定したりする．
      </p>
      <p>
        推定には，1つの値で推測する点推定と，範囲で推測する区間推定がある．
      </p>
    `,
    relatedIds: ["suiteiryou", "tensuitei", "kukan_suitei"]
  },
  {
    id: "suiteiryou",
    term: "推定量",
    kana: "すいていりょう",
    yomi: "suiteiryou",
    group: "す",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母数を推定するために標本から計算される量．",
    description: "母数を推定するために標本から計算される量．",
    bodyHtml: `
      <p>
        母数を推定するために標本から計算される量を推定量という．
      </p>
      <p>
        たとえば，母平均を推定するために用いる標本平均\\(\\overline{X}\\)は推定量である．
      </p>
      <p>
        推定量は標本の選ばれ方によって値が変わるので，確率変数として考えられる．
      </p>
    `,
    relatedIds: ["suitei", "hyouhon_heikin", "hyouhon_bunpu"]
  },
  {
    id: "tensuitei",
    term: "点推定",
    kana: "てんすいてい",
    yomi: "tensuitei",
    group: "て",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母数を1つの値で推定すること．",
    description: "母数を1つの値で推定すること．",
    bodyHtml: `
      <p>
        母数を1つの値で推定することを点推定という．
      </p>
      <p>
        たとえば，標本平均\\(\\overline{X}\\)の値をそのまま母平均の推定値とすることは，点推定である．
      </p>
      <p>
        点推定は分かりやすいが，その値がどれくらい確からしいかを範囲として示すことはできない．そのため，区間推定を考えることがある．
      </p>
    `,
    relatedIds: ["suitei", "kukan_suitei"]
  },
  {
    id: "kukan_suitei",
    term: "区間推定",
    kana: "くかんすいてい",
    yomi: "kukan_suitei",
    group: "く",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "母数が含まれると考えられる範囲を推定すること．",
    description: "母数が含まれると考えられる範囲を推定すること．",
    bodyHtml: `
      <p>
        母数が含まれると考えられる範囲を推定することを区間推定という．
      </p>
      <p>
        たとえば，母平均がある範囲に入ると考えて，
      </p>
      <div class="math-block">
        \\[
        48.2\leqq \mu \leqq 51.8
        \\]
      </div>
      <p>
        のように推定することが区間推定である．
      </p>
      <p>
        区間推定では，信頼度や信頼区間を考える．
      </p>
    `,
    relatedIds: ["suitei", "shinraikukan", "shinraido"]
  },
  {
    id: "shinraikukan",
    term: "信頼区間",
    kana: "しんらいくかん",
    yomi: "shinraikukan",
    group: "し",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "一定の信頼度で，母数を含むと考えられる区間．",
    description: "一定の信頼度で，母数を含むと考えられる区間．",
    bodyHtml: `
      <p>
        一定の信頼度で，母数を含むと考えられる区間を信頼区間という．
      </p>
      <p>
        たとえば，信頼度\\(95\\%\\)の信頼区間とは，同じ方法で標本を何度も取り直して区間を作ると，そのうち約\\(95\\%\\)の区間が母数を含むような方法で作られる区間である．
      </p>
      <p>
        1回作った具体的な区間について，「母数が\\(95\\%\\)の確率でその中にある」と解釈するのではない点に注意する．
      </p>
    `,
    relatedIds: ["kukan_suitei", "shinraido"]
  },
  {
    id: "shinraido",
    term: "信頼度",
    kana: "しんらいど",
    yomi: "shinraido",
    group: "し",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "信頼区間を作る方法が，母数を含む区間を作る割合．",
    description: "信頼区間を作る方法が，母数を含む区間を作る割合．",
    bodyHtml: `
      <p>
        信頼区間を作る方法が，母数を含む区間を作る割合を信頼度という．
      </p>
      <p>
        たとえば，信頼度\\(95\\%\\)とは，同じ手順で標本を何度も取り直して信頼区間を作ったとき，その約\\(95\\%\\)が母数を含むという意味である．
      </p>
      <p>
        信頼度を高くすると，ふつう信頼区間は広くなる．
      </p>
    `,
    relatedIds: ["shinraikukan", "kukan_suitei"]
  },
  {
    id: "kensutei_toukei",
    term: "検定統計量",
    kana: "けんていとうけいりょう",
    yomi: "kensutei_toukei",
    group: "け",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "仮説検定で，判断のために標本から計算する量．",
    description: "仮説検定で，判断のために標本から計算する量．",
    bodyHtml: `
      <p>
        仮説検定で，帰無仮説を棄却するかどうかを判断するために，標本から計算する量を検定統計量という．
      </p>
      <p>
        検定統計量が，帰無仮説のもとでどのような分布に従うかを考え，実際に得られた値が棄却域に入るかどうかを判断する．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kikyakuiki", "yuui_suijun"]
  },
  {
    id: "p_chi",
    term: "p値",
    kana: "ぴーち",
    yomi: "p_chi",
    group: "ひ",
    type: "定義",
    subject: "数学B",
    unit: "統計的な推測",
    unitIds: ["mathB_statistics"],
    shortDescription: "帰無仮説が正しいと仮定したとき，観測結果以上に極端な結果が起こる確率．",
    description: "帰無仮説が正しいと仮定したとき，観測結果以上に極端な結果が起こる確率．",
    bodyHtml: `
      <p>
        帰無仮説が正しいと仮定したとき，実際に得られた結果以上に極端な結果が起こる確率をp値という．
      </p>
      <p>
        p値が有意水準より小さいとき，帰無仮説を棄却する．
      </p>
      <p>
        p値は「帰無仮説が正しい確率」ではないことに注意する．あくまで，帰無仮説が正しいと仮定したもとでの，データの起こりにくさを表す値である．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kimu_kasetsu", "yuui_suijun"]
  }
);
