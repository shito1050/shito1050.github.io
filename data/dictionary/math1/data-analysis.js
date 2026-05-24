window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "data",
    term: "データ",
    kana: "でーた",
    yomi: "data",
    group: "て",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "調査や観察などによって得られた数値や記録．",
    description: "調査や観察などによって得られた数値や記録．",
    bodyHtml: `
      <p>
        調査や観察などによって得られた数値や記録をデータという．
      </p>
      <p>
        たとえば，生徒の身長，テストの点数，ある日の気温，アンケートの回答などはデータである．
      </p>
      <p>
        データを整理すると，集団の特徴や傾向を読み取ることができる．
      </p>
    `,
    relatedIds: ["henryou", "dousuu", "daihyouchi"]
  },
  {
    id: "henryou",
    term: "変量",
    kana: "へんりょう",
    yomi: "henryou",
    group: "へ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データとして観察・測定される数量や性質．",
    description: "データとして観察・測定される数量や性質．",
    bodyHtml: `
      <p>
        データとして観察・測定される数量や性質を変量という．
      </p>
      <p>
        たとえば，生徒の身長を調べるとき，「身長」が変量である．テストの結果を調べるとき，「点数」が変量である．
      </p>
      <p>
        変量の値を集めたものがデータであり，そのデータをもとに平均値や分散などを求める．
      </p>
    `,
    relatedIds: ["data", "heikinchi", "bunsan"]
  },
  {
    id: "dousuu",
    term: "度数",
    kana: "どすう",
    yomi: "dousuu",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "ある値や階級に含まれるデータの個数．",
    description: "ある値や階級に含まれるデータの個数．",
    bodyHtml: `
      <p>
        ある値や階級に含まれるデータの個数を度数という．
      </p>
      <p>
        たとえば，テストの点数を10点ごとの階級に分けたとき，60点以上70点未満の生徒が8人いれば，その階級の度数は8である．
      </p>
    `,
    relatedIds: ["dousuu_bunpuhyou", "kaikyuu", "histogram"]
  },
  {
    id: "dousuu_bunpuhyou",
    term: "度数分布表",
    kana: "どすうぶんぷひょう",
    yomi: "dousuu_bunpuhyou",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データを階級に分け，各階級の度数をまとめた表．",
    description: "データを階級に分け，各階級の度数をまとめた表．",
    bodyHtml: `
      <p>
        データをいくつかの階級に分け，各階級に入るデータの個数をまとめた表を度数分布表という．
      </p>
      <p>
        度数分布表を用いると，データがどの範囲に多く集まっているかを読み取りやすくなる．
      </p>
      <p>
        度数分布表をもとに作る代表的なグラフがヒストグラムである．
      </p>
    `,
    relatedIds: ["dousuu", "kaikyuu", "kaikyuu_chi", "histogram"]
  },
  {
    id: "kaikyuu",
    term: "階級",
    kana: "かいきゅう",
    yomi: "kaikyuu",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データを整理するために区切った値の範囲．",
    description: "データを整理するために区切った値の範囲．",
    bodyHtml: `
      <p>
        データを整理するために区切った値の範囲を階級という．
      </p>
      <p>
        たとえば，点数のデータを「0点以上10点未満」「10点以上20点未満」のように分けたとき，それぞれが階級である．
      </p>
    `,
    relatedIds: ["dousuu_bunpuhyou", "kaikyuu_chi", "kaikyuu_no_haba"]
  },
  {
    id: "kaikyuu_chi",
    term: "階級値",
    kana: "かいきゅうち",
    yomi: "kaikyuu_chi",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "階級の中央の値．",
    description: "階級の中央の値．",
    bodyHtml: `
      <p>
        階級の中央の値を階級値という．
      </p>
      <p>
        たとえば，「10以上20未満」という階級の階級値は，
      </p>
      <div class="math-block">
        \\[
        \\frac{10+20}{2}=15
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        度数分布表から平均値を近似的に求めるときは，各階級の値を階級値で代表させる．
      </p>
    `,
    relatedIds: ["kaikyuu", "dousuu_bunpuhyou", "heikinchi"]
  },
  {
    id: "kaikyuu_no_haba",
    term: "階級の幅",
    kana: "かいきゅうのはば",
    yomi: "kaikyuu_no_haba",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "階級の上端と下端の差．",
    description: "階級の上端と下端の差．",
    bodyHtml: `
      <p>
        階級の上端と下端の差を階級の幅という．
      </p>
      <p>
        たとえば，「10以上20未満」という階級では，階級の幅は，
      </p>
      <div class="math-block">
        \\[
        20-10=10
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["kaikyuu", "dousuu_bunpuhyou", "histogram"]
  },
  {
    id: "histogram",
    term: "ヒストグラム",
    kana: "ひすとぐらむ",
    yomi: "histogram",
    group: "ひ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "度数分布表を柱状の長方形で表したグラフ．",
    description: "度数分布表を柱状の長方形で表したグラフ．",
    bodyHtml: `
      <p>
        度数分布表をもとに，横軸に階級，縦軸に度数をとり，柱状の長方形で表したグラフをヒストグラムという．
      </p>
      <p>
        ヒストグラムを見ると，データがどの範囲に多く集まっているか，分布がどのような形をしているかを読み取りやすい．
      </p>
    `,
    relatedIds: ["dousuu_bunpuhyou", "dousuu", "kaikyuu"]
  },
  {
    id: "daihyouchi",
    term: "代表値",
    kana: "だいひょうち",
    yomi: "daihyouchi",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データ全体の特徴を代表する値．",
    description: "データ全体の特徴を代表する値．",
    bodyHtml: `
      <p>
        データ全体の特徴を代表する値を代表値という．
      </p>
      <p>
        代表値には，平均値，中央値，最頻値などがある．
      </p>
      <p>
        どの代表値が適切かは，データの分布や目的によって変わる．
      </p>
    `,
    relatedIds: ["heikinchi", "chuouchi", "saihinchi"]
  },
  {
    id: "heikinchi",
    term: "平均値",
    kana: "へいきんち",
    yomi: "heikinchi",
    group: "へ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データの値の合計を，データの個数で割った値．",
    description: "データの値の合計を，データの個数で割った値．",
    bodyHtml: `
      <p>
        データの値の合計を，データの個数で割った値を平均値という．
      </p>
      <p>
        データを\\(x_1,x_2,\\cdots,x_n\\)とすると，平均値\\(\\overline{x}\\)は，
      </p>
      <div class="math-block">
        \\[
        \\overline{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        平均値はすべてのデータを使って求めるが，極端に大きい値や小さい値の影響を受けやすい．
      </p>
    `,
    relatedIds: ["daihyouchi", "chuouchi", "saihinchi", "bunsan"]
  },
  {
    id: "chuouchi",
    term: "中央値",
    kana: "ちゅうおうち",
    yomi: "chuouchi",
    group: "ち",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データを小さい順に並べたとき，中央にくる値．",
    description: "データを小さい順に並べたとき，中央にくる値．",
    bodyHtml: `
      <p>
        データを小さい順に並べたとき，中央にくる値を中央値という．
      </p>
      <p>
        データの個数が奇数個のときは，ちょうど中央の値が中央値である．
      </p>
      <p>
        データの個数が偶数個のときは，中央にある2つの値の平均を中央値とする．
      </p>
      <p>
        中央値は，極端に大きい値や小さい値の影響を平均値より受けにくい．
      </p>
    `,
    relatedIds: ["daihyouchi", "heikinchi", "shibun_isuu", "dai2_shibun_isuu"]
  },
  {
    id: "saihinchi",
    term: "最頻値",
    kana: "さいひんち",
    yomi: "saihinchi",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データの中で最も多く現れる値．",
    description: "データの中で最も多く現れる値．",
    bodyHtml: `
      <p>
        データの中で最も多く現れる値を最頻値という．
      </p>
      <p>
        度数分布表では，度数が最も大きい階級の階級値を最頻値とすることが多い．
      </p>
      <p>
        最頻値は，データの中でよく現れる値を知りたいときに使う．
      </p>
    `,
    relatedIds: ["daihyouchi", "dousuu", "heikinchi", "chuouchi"]
  },
  {
    id: "shibun_isuu",
    term: "四分位数",
    kana: "しぶんいすう",
    yomi: "shibun_isuu",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データを小さい順に並べて4等分するときの区切りの値．",
    description: "データを小さい順に並べて4等分するときの区切りの値．",
    bodyHtml: `
      <p>
        データを小さい順に並べて4等分するとき，その区切りとなる値を四分位数という．
      </p>
      <p>
        四分位数には，第1四分位数，第2四分位数，第3四分位数がある．第2四分位数は中央値である．
      </p>
      <p>
        四分位数を用いると，データの散らばりを大まかに把握できる．
      </p>
    `,
    relatedIds: ["dai1_shibun_isuu", "dai2_shibun_isuu", "dai3_shibun_isuu", "shibun_i_hani"]
  },
  {
    id: "dai1_shibun_isuu",
    term: "第1四分位数",
    kana: "だいいちしぶんいすう",
    yomi: "dai1_shibun_isuu",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "小さい方から数えて，およそ4分の1の位置にある値．",
    description: "小さい方から数えて，およそ4分の1の位置にある値．",
    bodyHtml: `
      <p>
        データを小さい順に並べたとき，小さい方から数えておよそ4分の1の位置にある値を第1四分位数という．
      </p>
      <p>
        記号では\\(Q_1\\)と表すことが多い．
      </p>
      <p>
        高校数学では，データを小さい順に並べ，下位半分の中央値として求めることが多い．
      </p>
    `,
    relatedIds: ["shibun_isuu", "dai2_shibun_isuu", "dai3_shibun_isuu"]
  },
  {
    id: "dai2_shibun_isuu",
    term: "第2四分位数",
    kana: "だいにしぶんいすう",
    yomi: "dai2_shibun_isuu",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "データの中央値．",
    description: "データの中央値．",
    bodyHtml: `
      <p>
        第2四分位数とは，データの中央値のことである．
      </p>
      <p>
        記号では\\(Q_2\\)と表すことが多い．
      </p>
      <p>
        データ全体を小さい方と大きい方に分ける中央の値である．
      </p>
    `,
    relatedIds: ["chuouchi", "shibun_isuu", "dai1_shibun_isuu", "dai3_shibun_isuu"]
  },
  {
    id: "dai3_shibun_isuu",
    term: "第3四分位数",
    kana: "だいさんしぶんいすう",
    yomi: "dai3_shibun_isuu",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "小さい方から数えて，およそ4分の3の位置にある値．",
    description: "小さい方から数えて，およそ4分の3の位置にある値．",
    bodyHtml: `
      <p>
        データを小さい順に並べたとき，小さい方から数えておよそ4分の3の位置にある値を第3四分位数という．
      </p>
      <p>
        記号では\\(Q_3\\)と表すことが多い．
      </p>
      <p>
        高校数学では，データを小さい順に並べ，上位半分の中央値として求めることが多い．
      </p>
    `,
    relatedIds: ["shibun_isuu", "dai1_shibun_isuu", "dai2_shibun_isuu", "shibun_i_hani"]
  },
  {
    id: "shibun_i_hani",
    term: "四分位範囲",
    kana: "しぶんいはんい",
    yomi: "shibun_i_hani",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "第3四分位数から第1四分位数をひいた値．",
    description: "第3四分位数から第1四分位数をひいた値．",
    bodyHtml: `
      <p>
        第3四分位数から第1四分位数をひいた値を四分位範囲という．
      </p>
      <div class="math-block">
        \\[
        Q_3-Q_1
        \\]
      </div>
      <p>
        四分位範囲は，中央付近のデータの散らばりを表す値である．極端に大きい値や小さい値の影響を受けにくい．
      </p>
    `,
    relatedIds: ["dai1_shibun_isuu", "dai3_shibun_isuu", "shibun_i_hensa", "hakohigezu"]
  },
  {
    id: "shibun_i_hensa",
    term: "四分位偏差",
    kana: "しぶんいへんさ",
    yomi: "shibun_i_hensa",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "四分位範囲を2で割った値．",
    description: "四分位範囲を2で割った値．",
    bodyHtml: `
      <p>
        四分位範囲を2で割った値を四分位偏差という．
      </p>
      <div class="math-block">
        \\[
        \\frac{Q_3-Q_1}{2}
        \\]
      </div>
      <p>
        四分位偏差は，データの中央付近の散らばりを表す値である．
      </p>
    `,
    relatedIds: ["shibun_i_hani", "dai1_shibun_isuu", "dai3_shibun_isuu"]
  },
  {
    id: "hakohigezu",
    term: "箱ひげ図",
    kana: "はこひげず",
    yomi: "hakohigezu",
    group: "は",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "最小値，四分位数，最大値を用いてデータの分布を表す図．",
    description: "最小値，四分位数，最大値を用いてデータの分布を表す図．",
    bodyHtml: `
      <p>
        最小値，第1四分位数，中央値，第3四分位数，最大値を用いて，データの分布を表す図を箱ひげ図という．
      </p>
      <p>
        箱ひげ図を見ると，データの中心の位置や散らばり，左右の偏りを比較しやすい．
      </p>
      <p>
        箱の左端と右端は第1四分位数と第3四分位数を表し，箱の中の線は中央値を表す．
      </p>
    `,
    relatedIds: ["shibun_isuu", "chuouchi", "shibun_i_hani"]
  },
  {
    id: "bunsan",
    term: "分散",
    kana: "ぶんさん",
    yomi: "bunsan",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "各データと平均値との差の2乗の平均．",
    description: "各データと平均値との差の2乗の平均．",
    bodyHtml: `
      <p>
        各データと平均値との差を偏差という．偏差の2乗の平均を分散という．
      </p>
      <p>
        データを\\(x_1,x_2,\\cdots,x_n\\)，平均値を\\(\\overline{x}\\)とすると，分散\\(s^2\\)は，
      </p>
      <div class="math-block">
        \\[
        s^2=\\frac{1}{n}\\{(x_1-\\overline{x})^2+(x_2-\\overline{x})^2+\\cdots+(x_n-\\overline{x})^2\\}
        \\]
      </div>
      <p>
        である．分散が大きいほど，データは平均値のまわりに大きく散らばっている．
      </p>
    `,
    relatedIds: ["heikinchi", "hyoujun_hensa"]
  },
  {
    id: "hyoujun_hensa",
    term: "標準偏差",
    kana: "ひょうじゅんへんさ",
    yomi: "hyoujun_hensa",
    group: "ひ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "分散の正の平方根．",
    description: "分散の正の平方根．",
    bodyHtml: `
      <p>
        分散の正の平方根を標準偏差という．
      </p>
      <p>
        分散を\\(s^2\\)とすると，標準偏差は\\(s\\)である．
      </p>
      <div class="math-block">
        \\[
        s=\\sqrt{s^2}
        \\]
      </div>
      <p>
        標準偏差は，データの散らばりを，もとのデータと同じ単位で表せる値である．
      </p>
    `,
    relatedIds: ["bunsan", "heikinchi"]
  },
  {
    id: "sanpuzu",
    term: "散布図",
    kana: "さんぷず",
    yomi: "sanpuzu",
    group: "さ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "2つの変量の組を，座標平面上の点として表した図．",
    description: "2つの変量の組を，座標平面上の点として表した図．",
    bodyHtml: `
      <p>
        2つの変量の組を，座標平面上の点として表した図を散布図という．
      </p>
      <p>
        たとえば，身長と体重のように，2つのデータの関係を調べたいときに散布図を用いる．
      </p>
      <p>
        散布図を見ると，2つの変量の間に相関があるかどうかを視覚的に判断できる．
      </p>
    `,
    relatedIds: ["henryou", "soukan", "seino_soukan", "funo_soukan", "soukan_keisuu"]
  },
  {
    id: "kyoubunsan",
    term: "共分散",
    kana: "きょうぶんさん",
    yomi: "kyoubunsan",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "2つの変量が，平均から同じ向きにずれる傾向を表す値．",
    description: "2つの変量が，平均から同じ向きにずれる傾向を表す値．",
    bodyHtml: `
      <p>
        2つの変量が，それぞれの平均からどのようにずれるかを合わせて見た値を共分散という．
      </p>
      <p>
        2つのデータを\\((x_1,y_1),(x_2,y_2),\\cdots,(x_n,y_n)\\)，それぞれの平均を\\(\\overline{x}\\)，\\(\\overline{y}\\)とすると，共分散は，
      </p>
      <div class="math-block">
        \\[
        \\frac{1}{n}\\{(x_1-\\overline{x})(y_1-\\overline{y})+\\cdots+(x_n-\\overline{x})(y_n-\\overline{y})\\}
        \\]
      </div>
      <p>
        である．共分散が正なら，同じ向きにずれる傾向があり，共分散が負なら，反対向きにずれる傾向がある．
      </p>
    `,
    relatedIds: ["soukan", "soukan_keisuu", "sanpuzu"]
  },
  {
    id: "soukan",
    term: "相関",
    kana: "そうかん",
    yomi: "soukan",
    group: "そ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "2つの変量の間にみられる関係．",
    description: "2つの変量の間にみられる関係．",
    bodyHtml: `
      <p>
        2つの変量の間にみられる関係を相関という．
      </p>
      <p>
        一方が大きいときにもう一方も大きくなる傾向があれば，正の相関があるという．一方が大きいときにもう一方が小さくなる傾向があれば，負の相関があるという．
      </p>
      <p>
        相関は，散布図や相関係数を用いて調べる．
      </p>
    `,
    relatedIds: ["seino_soukan", "funo_soukan", "soukan_keisuu", "sanpuzu"]
  },
  {
    id: "seino_soukan",
    term: "正の相関",
    kana: "せいのそうかん",
    yomi: "seino_soukan",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "一方の変量が大きいほど，もう一方の変量も大きくなる傾向．",
    description: "一方の変量が大きいほど，もう一方の変量も大きくなる傾向．",
    bodyHtml: `
      <p>
        一方の変量が大きいほど，もう一方の変量も大きくなる傾向があるとき，正の相関があるという．
      </p>
      <p>
        散布図では，点の集まりが右上がりに分布する傾向として現れる．
      </p>
    `,
    relatedIds: ["soukan", "funo_soukan", "soukan_keisuu"]
  },
  {
    id: "funo_soukan",
    term: "負の相関",
    kana: "ふのそうかん",
    yomi: "funo_soukan",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "一方の変量が大きいほど，もう一方の変量が小さくなる傾向．",
    description: "一方の変量が大きいほど，もう一方の変量が小さくなる傾向．",
    bodyHtml: `
      <p>
        一方の変量が大きいほど，もう一方の変量が小さくなる傾向があるとき，負の相関があるという．
      </p>
      <p>
        散布図では，点の集まりが右下がりに分布する傾向として現れる．
      </p>
    `,
    relatedIds: ["soukan", "seino_soukan", "soukan_keisuu"]
  },
  {
    id: "soukan_ga_nai",
    term: "相関がない",
    kana: "そうかんがない",
    yomi: "soukan_ga_nai",
    group: "そ",
    type: "用語",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "2つの変量の間に，一方が増減すると他方も増減するような傾向がほとんどみられないこと．",
    description: "2つの変量の間に，一方が増減すると他方も増減するような傾向がほとんどみられないこと．",
    bodyHtml: `
      <p>
        2つの変量の間に，一方が増減すると他方も増減するような傾向がほとんどみられないとき，相関がないという．
      </p>
      <p>
        散布図では，点が右上がりや右下がりの傾向をもたず，ばらばらに分布しているように見える．
      </p>
      <p>
        ただし，相関がないということは，必ずしも2つの変量の間にどんな関係もないという意味ではない．
      </p>
    `,
    relatedIds: ["soukan", "soukan_keisuu", "sanpuzu"]
  },
  {
    id: "soukan_keisuu",
    term: "相関係数",
    kana: "そうかんけいすう",
    yomi: "soukan_keisuu",
    group: "そ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "2つの変量の直線的な相関の強さと向きを表す値．",
    description: "2つの変量の直線的な相関の強さと向きを表す値．",
    bodyHtml: `
      <p>
        2つの変量の直線的な相関の強さと向きを表す値を相関係数という．
      </p>
      <p>
        相関係数はふつう\\(r\\)で表し，\\(-1\\leqq r\\leqq 1\\)を満たす．
      </p>
      <ul>
        <li>\\(r\\)が\\(1\\)に近いほど，強い正の相関がある．</li>
        <li>\\(r\\)が\\(-1\\)に近いほど，強い負の相関がある．</li>
        <li>\\(r\\)が\\(0\\)に近いほど，直線的な相関は弱い．</li>
      </ul>
      <h3>公式</h3>
      <p>
        2つのデータを\\((x_1,y_1),(x_2,y_2),\\cdots,(x_n,y_n)\\)，それぞれの平均を\\(\\overline{x}\\)，\\(\\overline{y}\\)とし，標準偏差を\\(s_x,s_y\\)とする．このとき，相関係数\\(r\\)は，
      </p>
      <div class="math-block">
        \\[
        r=
        \\frac{\\frac{1}{n}\\{(x_1-\\overline{x})(y_1-\\overline{y})+\\cdots+(x_n-\\overline{x})(y_n-\\overline{y})\\}}
        {s_xs_y}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["soukan", "kyoubunsan", "seino_soukan", "funo_soukan"]
  },
  {
    id: "kasetsu",
    term: "仮説",
    kana: "かせつ",
    yomi: "kasetsu",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "検証するために，ひとまず正しいものとして立てる主張．",
    description: "検証するために，ひとまず正しいものとして立てる主張．",
    bodyHtml: `
      <p>
        検証するために，ひとまず正しいものとして立てる主張を仮説という．
      </p>
      <p>
        仮説検定では，まず帰無仮説と対立仮説を設定し，データをもとに帰無仮説を棄却するかどうかを判断する．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kimu_kasetsu", "tairitsu_kasetsu"]
  },
  {
    id: "kasetsu_kentei",
    term: "仮説検定",
    kana: "かせつけんてい",
    yomi: "kasetsu_kentei",
    group: "か",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "仮説が妥当かどうかを，データをもとに判断する方法．",
    description: "仮説が妥当かどうかを，データをもとに判断する方法．",
    bodyHtml: `
      <p>
        仮説が妥当かどうかを，データをもとに判断する方法を仮説検定という．
      </p>
      <p>
        仮説検定では，まず帰無仮説を立てる．そのうえで，帰無仮説が正しいと仮定したときに，実際に得られたデータがどの程度起こりにくいかを考える．
      </p>
      <p>
        もし，実際のデータが十分に起こりにくいと判断されるなら，帰無仮説を棄却し，対立仮説を支持する方向に判断する．
      </p>
    `,
    relatedIds: ["kasetsu", "kimu_kasetsu", "tairitsu_kasetsu", "yuui_suijun", "kikyakuiki"]
  },
  {
    id: "kimu_kasetsu",
    term: "帰無仮説",
    kana: "きむかせつ",
    yomi: "kimu_kasetsu",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "仮説検定で，はじめに正しいものとして仮定する主張．",
    description: "仮説検定で，はじめに正しいものとして仮定する主張．",
    bodyHtml: `
      <p>
        仮説検定で，はじめに正しいものとして仮定する主張を帰無仮説という．
      </p>
      <p>
        帰無仮説は，データによって否定できるかどうかを調べる対象である．
      </p>
      <p>
        帰無仮説が正しいと仮定したとき，実際のデータが十分に起こりにくければ，帰無仮説を棄却する．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "tairitsu_kasetsu", "kikyakuiki"]
  },
  {
    id: "tairitsu_kasetsu",
    term: "対立仮説",
    kana: "たいりつかせつ",
    yomi: "tairitsu_kasetsu",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "帰無仮説に対して，示したい主張として立てる仮説．",
    description: "帰無仮説に対して，示したい主張として立てる仮説．",
    bodyHtml: `
      <p>
        帰無仮説に対して，示したい主張として立てる仮説を対立仮説という．
      </p>
      <p>
        仮説検定では，帰無仮説を棄却できるとき，対立仮説を支持する方向に判断する．
      </p>
      <p>
        ただし，対立仮説が完全に証明されたという意味ではなく，得られたデータから帰無仮説を採用しにくいと判断している．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kimu_kasetsu"]
  },
  {
    id: "yuui_suijun",
    term: "有意水準",
    kana: "ゆういすいじゅん",
    yomi: "yuui_suijun",
    group: "ゆ",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "帰無仮説を棄却するかどうかを判断するために，あらかじめ決める基準．",
    description: "帰無仮説を棄却するかどうかを判断するために，あらかじめ決める基準．",
    bodyHtml: `
      <p>
        仮説検定で，帰無仮説を棄却するかどうかを判断するために，あらかじめ決める基準を有意水準という．
      </p>
      <p>
        有意水準は，たとえば\\(5\\%\\)や\\(1\\%\\)のように設定される．
      </p>
      <p>
        帰無仮説が正しいと仮定したとき，実際の結果が有意水準よりも起こりにくい側にあれば，帰無仮説を棄却する．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kikyakuiki"]
  },
  {
    id: "kikyakuiki",
    term: "棄却域",
    kana: "ききゃくいき",
    yomi: "kikyakuiki",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "データの分析",
    unitIds: ["math1_data_analysis"],
    shortDescription: "検定で，帰無仮説を棄却することになる結果の範囲．",
    description: "検定で，帰無仮説を棄却することになる結果の範囲．",
    bodyHtml: `
      <p>
        仮説検定で，帰無仮説を棄却することになる結果の範囲を棄却域という．
      </p>
      <p>
        実際に得られた値が棄却域に入れば，帰無仮説を棄却する．
      </p>
      <p>
        棄却域は，有意水準に基づいて決める．
      </p>
    `,
    relatedIds: ["kasetsu_kentei", "kimu_kasetsu", "yuui_suijun"]
  }
);
