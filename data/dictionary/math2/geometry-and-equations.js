window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "nitenkan_no_kyori",
    term: "2点間の距離",
    kana: "にてんかんのきょり",
    yomi: "nitenkan_no_kyori",
    group: "に",
    type: "公式",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "座標平面上の2点の間の距離を座標から求める公式．",
    description: "座標平面上の2点の間の距離を座標から求める公式．",
    bodyHtml: `
      <p>
        座標平面上の2点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)の距離は，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AB}=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
        \\]
      </div>
      <p>
        で求められる．これを2点間の距離の公式という．
      </p>
      <h3>証明</h3>
      <p>
        2点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)を考える．横方向の差は\\(x_2-x_1\\)，縦方向の差は\\(y_2-y_1\\)である．これらを直角三角形の2つの直角をはさむ辺と考えると，三平方の定理より，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AB}^2=(x_2-x_1)^2+(y_2-y_1)^2
        \\]
      </div>
      <p>
        距離は\\(0\\)以上なので，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AB}=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
        \\]
      </div>
      <p>
        となる．
      </p>
    `,
    relatedIds: ["zahyou", "zahyouheimen", "sankyohou_no_teiri"]
  },
  {
    id: "naibunten",
    term: "内分点",
    kana: "ないぶんてん",
    yomi: "naibunten",
    group: "な",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "線分の内側にあり，その線分を指定された比に分ける点．",
    description: "線分の内側にあり，その線分を指定された比に分ける点．",
    bodyHtml: `
      <p>
        線分\\(\\mathrm{AB}\\)上の点\\(\\mathrm{P}\\)が，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AP}:\\mathrm{PB}=m:n
        \\]
      </div>
      <p>
        を満たすとき，点\\(\\mathrm{P}\\)は線分\\(\\mathrm{AB}\\)を\\(m:n\\)に内分する点であるという．
      </p>
      <p>
        点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)を結ぶ線分を\\(m:n\\)に内分する点\\(\\mathrm{P}\\)の座標は，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{P}\\left(\\frac{nx_1+mx_2}{m+n},\\frac{ny_1+my_2}{m+n}\\right)
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["gaibunten", "chuuten"]
  },
  {
    id: "gaibunten",
    term: "外分点",
    kana: "がいぶんてん",
    yomi: "gaibunten",
    group: "か",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "線分の外側にあり，その線分を指定された比に外分する点．",
    description: "線分の外側にあり，その線分を指定された比に外分する点．",
    bodyHtml: `
      <p>
        直線\\(\\mathrm{AB}\\)上の点\\(\\mathrm{P}\\)が線分\\(\\mathrm{AB}\\)の外側にあり，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{AP}:\\mathrm{PB}=m:n
        \\]
      </div>
      <p>
        を満たすとき，点\\(\\mathrm{P}\\)は線分\\(\\mathrm{AB}\\)を\\(m:n\\)に外分する点であるという．
      </p>
      <p>
        点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)を結ぶ線分を\\(m:n\\)に外分する点\\(\\mathrm{P}\\)の座標は，\\(m\\ne n\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{P}\\left(\\frac{-nx_1+mx_2}{m-n},\\frac{-ny_1+my_2}{m-n}\\right)
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["naibunten", "chuuten"]
  },
  {
    id: "chuuten",
    term: "中点",
    kana: "ちゅうてん",
    yomi: "chuuten",
    group: "ち",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "線分を\\(1:1\\)に内分する点．",
    description: "線分を\\(1:1\\)に内分する点．",
    bodyHtml: `
      <p>
        線分を\\(1:1\\)に内分する点を中点という．
      </p>
      <p>
        点\\(\\mathrm{A}(x_1,y_1)\\)，\\(\\mathrm{B}(x_2,y_2)\\)を結ぶ線分の中点\\(\\mathrm{M}\\)の座標は，
      </p>
      <div class="math-block">
        \\[
        \\mathrm{M}\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["naibunten", "gaibunten"]
  },
  {
    id: "chokusen",
    term: "直線",
    kana: "ちょくせん",
    yomi: "chokusen",
    group: "ち",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "まっすぐに限りなく続く線．",
    description: "まっすぐに限りなく続く線．",
    bodyHtml: `
      <p>
        まっすぐに限りなく続く線を直線という．
      </p>
      <p>
        座標平面上の直線は，方程式によって表すことができる．たとえば，
      </p>
      <div class="math-block">
        \\[
        y=2x+1
        \\]
      </div>
      <p>
        は直線を表す方程式である．
      </p>
    `,
    relatedIds: ["chokusen_no_houteishiki", "katamuki"]
  },
  {
    id: "katamuki",
    term: "傾き",
    kana: "かたむき",
    yomi: "katamuki",
    group: "か",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "直線が右へ1進むとき，縦方向にどれだけ変化するかを表す値．",
    description: "直線が右へ1進むとき，縦方向にどれだけ変化するかを表す値．",
    bodyHtml: `
      <p>
        直線が右へ1進むとき，縦方向にどれだけ変化するかを表す値を傾きという．
      </p>
      <p>
        2点\\((x_1,y_1)\\)，\\((x_2,y_2)\\)を通る直線の傾きは，\\(x_1\\ne x_2\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\frac{y_2-y_1}{x_2-x_1}
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        直線の方程式が\\(y=ax+b\\)の形で表されるとき，\\(a\\)がその直線の傾きである．
      </p>
    `,
    relatedIds: ["chokusen", "chokusen_no_houteishiki"]
  },
  {
    id: "chokusen_no_houteishiki",
    term: "直線の方程式",
    kana: "ちょくせんのほうていしき",
    yomi: "chokusen_no_houteishiki",
    group: "ち",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "座標平面上の直線を表す方程式．",
    description: "座標平面上の直線を表す方程式．",
    bodyHtml: `
      <p>
        座標平面上の直線を表す方程式を，直線の方程式という．
      </p>
      <p>
        傾きが\\(m\\)で，点\\((x_1,y_1)\\)を通る直線は，
      </p>
      <div class="math-block">
        \\[
        y-y_1=m(x-x_1)
        \\]
      </div>
      <p>
        と表される．
      </p>
      <p>
        また，\\(x\\)軸に垂直な直線は，\\(x=a\\)の形で表される．
      </p>
    `,
    relatedIds: ["chokusen", "katamuki", "ippankei"]
  },
  {
    id: "ippankei",
    term: "一般形",
    kana: "いっぱんけい",
    yomi: "ippankei",
    group: "い",
    type: "用語",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "直線を\\(ax+by+c=0\\)の形で表したもの．",
    description: "直線を\\(ax+by+c=0\\)の形で表したもの．",
    bodyHtml: `
      <p>
        直線を
      </p>
      <div class="math-block">
        \\[
        ax+by+c=0
        \\]
      </div>
      <p>
        の形で表したものを，直線の一般形という．ただし，\\(a\\)と\\(b\\)が同時に\\(0\\)になることはない．
      </p>
      <p>
        一般形は，\\(x\\)軸に垂直な直線も含めて表すことができるので便利である．
      </p>
    `,
    relatedIds: ["chokusen_no_houteishiki"]
  },
  {
    id: "heikou",
    term: "平行",
    kana: "へいこう",
    yomi: "heikou",
    group: "へ",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "同じ平面上で，どこまで延長しても交わらない2直線の関係．",
    description: "同じ平面上で，どこまで延長しても交わらない2直線の関係．",
    bodyHtml: `
      <p>
        同じ平面上で，どこまで延長しても交わらない2直線の関係を平行という．
      </p>
      <p>
        座標平面上で，2直線がともに\\(y=mx+b\\)の形で表されるとき，傾きが等しければ2直線は平行である．
      </p>
    `,
    relatedIds: ["katamuki", "chokusen"]
  },
  {
    id: "suichoku",
    term: "垂直",
    kana: "すいちょく",
    yomi: "suichoku",
    group: "す",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "2つの直線が直角に交わること．",
    description: "2つの直線が直角に交わること．",
    bodyHtml: `
      <p>
        2つの直線が直角に交わることを垂直という．
      </p>
      <p>
        傾きが\\(m_1\\)，\\(m_2\\)である2直線が垂直であるとき，
      </p>
      <div class="math-block">
        \\[
        m_1m_2=-1
        \\]
      </div>
      <p>
        が成り立つ．ただし，\\(x\\)軸に垂直な直線と\\(x\\)軸のような場合は，傾きで表せない直線を含むため，別に考える．
      </p>
    `,
    relatedIds: ["katamuki", "chokusen"]
  },
  {
    id: "en",
    term: "円",
    kana: "えん",
    yomi: "en",
    group: "え",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "1つの点から等しい距離にある点全体の図形．",
    description: "1つの点から等しい距離にある点全体の図形．",
    bodyHtml: `
      <p>
        平面上で，1つの点から等しい距離にある点全体の図形を円という．
      </p>
      <p>
        その1つの点を円の中心といい，中心から円周上の点までの距離を半径という．
      </p>
    `,
    relatedIds: ["en_no_houteishiki", "chuushin", "hankei"]
  },
  {
    id: "chuushin",
    term: "中心",
    kana: "ちゅうしん",
    yomi: "chuushin",
    group: "ち",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "円を定める基準となる点．",
    description: "円を定める基準となる点．",
    bodyHtml: `
      <p>
        円を定める基準となる点を，円の中心という．
      </p>
      <p>
        円は，中心から一定の距離にある点全体として定義される．
      </p>
    `,
    relatedIds: ["en", "en_no_houteishiki", "hankei"]
  },
  {
    id: "en_no_houteishiki",
    term: "円の方程式",
    kana: "えんのほうていしき",
    yomi: "en_no_houteishiki",
    group: "え",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "座標平面上の円を表す方程式．",
    description: "座標平面上の円を表す方程式．",
    bodyHtml: `
      <p>
        座標平面上の円を表す方程式を，円の方程式という．
      </p>
      <p>
        中心が\\((a,b)\\)，半径が\\(r\\)である円の方程式は，
      </p>
      <div class="math-block">
        \\[
        (x-a)^2+(y-b)^2=r^2
        \\]
      </div>
      <p>
        である．
      </p>
      <h3>証明</h3>
      <p>
        円上の点を\\((x,y)\\)とする．中心\\((a,b)\\)から点\\((x,y)\\)までの距離が半径\\(r\\)に等しいので，
      </p>
      <div class="math-block">
        \\[
        \\sqrt{(x-a)^2+(y-b)^2}=r
        \\]
      </div>
      <p>
        である．両辺を2乗すると，
      </p>
      <div class="math-block">
        \\[
        (x-a)^2+(y-b)^2=r^2
        \\]
      </div>
      <p>
        を得る．
      </p>
    `,
    relatedIds: ["en", "chuushin", "hankei", "nitenkan_no_kyori"]
  },
  {
    id: "kiseki",
    term: "軌跡",
    kana: "きせき",
    yomi: "kiseki",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "条件を満たしながら動く点が描く図形．",
    description: "条件を満たしながら動く点が描く図形．",
    bodyHtml: `
      <p>
        条件を満たしながら動く点が描く図形を軌跡という．
      </p>
      <p>
        たとえば，点\\((0,0)\\)からの距離が常に\\(3\\)である点全体の軌跡は，原点を中心とする半径\\(3\\)の円である．
      </p>
      <div class="math-block">
        \\[
        x^2+y^2=9
        \\]
      </div>
      <p>
        軌跡を求めるときは，動点の座標を\\((x,y)\\)とおき，条件を方程式で表すことが多い．
      </p>
    `,
    relatedIds: ["en_no_houteishiki", "ryouiki"]
  },
  {
    id: "ryouiki",
    term: "領域",
    kana: "りょういき",
    yomi: "ryouiki",
    group: "り",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "座標平面上で，不等式などの条件を満たす点全体の範囲．",
    description: "座標平面上で，不等式などの条件を満たす点全体の範囲．",
    bodyHtml: `
      <p>
        座標平面上で，不等式などの条件を満たす点全体の範囲を領域という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        y>x+1
        \\]
      </div>
      <p>
        を満たす点全体は，直線\\(y=x+1\\)の上側の領域である．
      </p>
      <p>
        不等号に等号が含まれる場合は境界線を含み，等号が含まれない場合は境界線を含まない．
      </p>
    `,
    relatedIds: ["kyoukaisen", "kiseki"]
  },
  {
    id: "kyoukaisen",
    term: "境界線",
    kana: "きょうかいせん",
    yomi: "kyoukaisen",
    group: "き",
    type: "定義",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "領域を分ける境目となる線．",
    description: "領域を分ける境目となる線．",
    bodyHtml: `
      <p>
        領域を分ける境目となる線を境界線という．
      </p>
      <p>
        たとえば，不等式\\(y>x+1\\)が表す領域の境界線は，
      </p>
      <div class="math-block">
        \\[
        y=x+1
        \\]
      </div>
      <p>
        である．
      </p>
      <p>
        不等式が\\(y\\geqq x+1\\)なら境界線を含み，\\(y>x+1\\)なら境界線を含まない．
      </p>
    `,
    relatedIds: ["ryouiki", "chokusen_no_houteishiki"]
  },
  {
    id: "senkei_keikaku",
    term: "線形計画法",
    kana: "せんけいけいかくほう",
    yomi: "senkei_keikaku",
    group: "せ",
    type: "方法",
    subject: "数学II",
    unit: "図形と方程式",
    unitIds: ["math2_geometry_and_equations"],
    shortDescription: "1次不等式の表す領域の中で，1次式の最大値や最小値を求める方法．",
    description: "1次不等式の表す領域の中で，1次式の最大値や最小値を求める方法．",
    bodyHtml: `
      <p>
        1次不等式の表す領域の中で，1次式の最大値や最小値を求める方法を線形計画法という．
      </p>
      <p>
        高校数学では，条件を満たす領域を図示し，その領域の頂点を調べることで最大値や最小値を求めることが多い．
      </p>
      <p>
        たとえば，\\(x\\)，\\(y\\)がいくつかの1次不等式を満たすとき，\\(x+y\\)の最大値を求める問題などで使われる．
      </p>
    `,
    relatedIds: ["ryouiki", "kyoukaisen", "saidaichi", "saishouchi"]
  }
);
