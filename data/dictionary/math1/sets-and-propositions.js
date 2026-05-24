window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "shuugou",
    term: "集合",
    kana: "しゅうごう",
    yomi: "shuugou",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "条件によって，どのものが属するかがはっきり決まる集まり．",
    description: "条件によって，どのものが属するかがはっきり決まる集まり．",
    bodyHtml: `
      <p>
        条件によって，どのものが属するかがはっきり決まる集まりを集合という．
      </p>
      <p>
        たとえば，\\(10\\)以下の自然数全体は集合である．この集合は，
      </p>
      <div class="math-block">
        \\[
        \\{1,2,3,4,5,6,7,8,9,10\\}
        \\]
      </div>
      <p>
        と表すことができる．
      </p>
      <p>
        一方，「大きい数の集まり」のように，何が含まれるかがはっきりしないものは，そのままでは集合とはいえない．
      </p>
    `,
    relatedIds: ["youso", "zokusuru", "bubunshuugou", "kuushuugou"]
  },
  {
    id: "youso",
    term: "要素",
    kana: "ようそ",
    yomi: "youso",
    group: "よ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "集合に属している1つ1つのもの．",
    description: "集合に属している1つ1つのもの．",
    bodyHtml: `
      <p>
        集合に属している1つ1つのものを，その集合の要素という．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        A=\\{1,2,3\\}
        \\]
      </div>
      <p>
        とすると，\\(1\\)，\\(2\\)，\\(3\\)は集合\\(A\\)の要素である．
      </p>
      <p>
        このとき，\\(1\\)が\\(A\\)の要素であることを\\(1\\in A\\)と表す．
      </p>
    `,
    relatedIds: ["shuugou", "zokusuru"]
  },
  {
    id: "zokusuru",
    term: "属する",
    kana: "ぞくする",
    yomi: "zokusuru",
    group: "そ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "あるものが，集合の要素であること．",
    description: "あるものが，集合の要素であること．",
    bodyHtml: `
      <p>
        あるものが，ある集合の要素であることを，その集合に属するという．
      </p>
      <p>
        たとえば，
      </p>
      <div class="math-block">
        \\[
        A=\\{1,2,3\\}
        \\]
      </div>
      <p>
        のとき，\\(2\\)は\\(A\\)に属する．これを記号で
      </p>
      <div class="math-block">
        \\[
        2\\in A
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        一方，\\(4\\)は\\(A\\)に属しないので，\\(4\\notin A\\)と表す．
      </p>
    `,
    relatedIds: ["shuugou", "youso"]
  },
  {
    id: "kuushuugou",
    term: "空集合",
    kana: "くうしゅうごう",
    yomi: "kuushuugou",
    group: "く",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "要素を1つももたない集合．",
    description: "要素を1つももたない集合．",
    bodyHtml: `
      <p>
        要素を1つももたない集合を空集合という．
      </p>
      <p>
        空集合は，\\(\\varnothing\\)で表す．
      </p>
      <p>
        たとえば，「\\(x^2=-1\\)を満たす実数\\(x\\)全体の集合」は，実数の範囲では要素をもたないので空集合である．
      </p>
    `,
    relatedIds: ["shuugou", "youso", "bubunshuugou"]
  },
  {
    id: "bubunshuugou",
    term: "部分集合",
    kana: "ぶぶんしゅうごう",
    yomi: "bubunshuugou",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "ある集合の要素が，すべて別の集合の要素にもなっているときの関係．",
    description: "ある集合の要素が，すべて別の集合の要素にもなっているときの関係．",
    bodyHtml: `
      <p>
        集合\\(A\\)の要素がすべて集合\\(B\\)の要素でもあるとき，\\(A\\)は\\(B\\)の部分集合であるという．
      </p>
      <p>
        このことを，
      </p>
      <div class="math-block">
        \\[
        A\\subset B
        \\]
      </div>
      <p>
        または
      </p>
      <div class="math-block">
        \\[
        A\\subseteq B
        \\]
      </div>
      <p>
        と表すことがある．
      </p>
      <p>
        たとえば，\\(A=\\{1,2\\}\\)，\\(B=\\{1,2,3\\}\\)とすると，\\(A\\)の要素\\(1\\)，\\(2\\)はどちらも\\(B\\)の要素であるから，\\(A\\)は\\(B\\)の部分集合である．
      </p>
    `,
    relatedIds: ["shuugou", "fukumareru", "fukumu", "kuushuugou"]
  },
  {
    id: "fukumareru",
    term: "含まれる",
    kana: "ふくまれる",
    yomi: "fukumareru",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "集合の要素が，すべて別の集合の要素にもなっていること．",
    description: "集合の要素が，すべて別の集合の要素にもなっていること．",
    bodyHtml: `
      <p>
        集合\\(A\\)の要素がすべて集合\\(B\\)の要素でもあるとき，\\(A\\)は\\(B\\)に含まれるという．
      </p>
      <p>
        このとき，\\(A\\)は\\(B\\)の部分集合である．
      </p>
      <div class="math-block">
        \\[
        A\\subset B
        \\]
      </div>
      <p>
        たとえば，\\(\\{1,2\\}\\)は\\(\\{1,2,3\\}\\)に含まれる．
      </p>
      <p>
        「要素が集合に属する」と「集合が集合に含まれる」は区別する．たとえば，\\(1\\in A\\)は「\\(1\\)が集合\\(A\\)の要素である」という意味であり，\\(\\{1\\}\\subset A\\)は「\\(\\{1\\}\\)が集合\\(A\\)に含まれる」という意味である．
      </p>
    `,
    relatedIds: ["bubunshuugou", "fukumu", "zokusuru"]
  },
  {
    id: "fukumu",
    term: "含む",
    kana: "ふくむ",
    yomi: "fukumu",
    group: "ふ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "ある集合が，別の集合の要素をすべて自分の要素としてもつこと．",
    description: "ある集合が，別の集合の要素をすべて自分の要素としてもつこと．",
    bodyHtml: `
      <p>
        集合\\(B\\)が集合\\(A\\)の要素をすべて自分の要素としてもつとき，\\(B\\)は\\(A\\)を含むという．
      </p>
      <p>
        これは，\\(A\\)が\\(B\\)に含まれることと同じ意味である．
      </p>
      <div class="math-block">
        \\[
        A\\subset B
        \\]
      </div>
      <p>
        たとえば，\\(\\{1,2,3\\}\\)は\\(\\{1,2\\}\\)を含む．
      </p>
    `,
    relatedIds: ["bubunshuugou", "fukumareru"]
  },
  {
    id: "zentai_shuugou",
    term: "全体集合",
    kana: "ぜんたいしゅうごう",
    yomi: "zentai_shuugou",
    group: "せ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "考えている対象全体の集合．",
    description: "考えている対象全体の集合．",
    bodyHtml: `
      <p>
        ある問題で考えている対象全体の集合を全体集合という．
      </p>
      <p>
        補集合を考えるときは，何を全体集合としているかをはっきりさせる必要がある．
      </p>
      <p>
        たとえば，全体集合を\\(U=\\{1,2,3,4,5\\}\\)とし，\\(A=\\{1,3,5\\}\\)とすると，\\(A\\)に属さない\\(U\\)の要素は\\(2\\)，\\(4\\)である．
      </p>
    `,
    relatedIds: ["shuugou", "hoshuugou"]
  },
  {
    id: "kyoutsuububun",
    term: "共通部分",
    kana: "きょうつうぶぶん",
    yomi: "kyoutsuububun",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "2つの集合に共通して属する要素全体の集合．",
    description: "2つの集合に共通して属する要素全体の集合．",
    bodyHtml: `
      <p>
        2つの集合\\(A\\)，\\(B\\)に共通して属する要素全体の集合を，\\(A\\)と\\(B\\)の共通部分という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        A\\cap B
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        たとえば，\\(A=\\{1,2,3\\}\\)，\\(B=\\{2,3,4\\}\\)のとき，
      </p>
      <div class="math-block">
        \\[
        A\\cap B=\\{2,3\\}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["shuugou", "wagou", "domorugan_no_housoku"]
  },
  {
    id: "wagou",
    term: "和集合",
    kana: "わしゅうごう",
    yomi: "wagou",
    group: "わ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "少なくとも一方の集合に属する要素全体の集合．",
    description: "少なくとも一方の集合に属する要素全体の集合．",
    bodyHtml: `
      <p>
        集合\\(A\\)，\\(B\\)について，\\(A\\)と\\(B\\)の少なくとも一方に属する要素全体の集合を，\\(A\\)と\\(B\\)の和集合という．
      </p>
      <p>
        記号では，
      </p>
      <div class="math-block">
        \\[
        A\\cup B
        \\]
      </div>
      <p>
        と表す．
      </p>
      <p>
        たとえば，\\(A=\\{1,2,3\\}\\)，\\(B=\\{2,3,4\\}\\)のとき，
      </p>
      <div class="math-block">
        \\[
        A\\cup B=\\{1,2,3,4\\}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["shuugou", "kyoutsuububun", "domorugan_no_housoku"]
  },
  {
    id: "hoshuugou",
    term: "補集合",
    kana: "ほしゅうごう",
    yomi: "hoshuugou",
    group: "ほ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "全体集合のうち，ある集合に属さない要素全体の集合．",
    description: "全体集合のうち，ある集合に属さない要素全体の集合．",
    bodyHtml: `
      <p>
        全体集合\\(U\\)の部分集合\\(A\\)について，\\(U\\)の要素のうち\\(A\\)に属さない要素全体の集合を，\\(A\\)の補集合という．
      </p>
      <p>
        補集合は，\\(\\overline{A}\\)などで表す．
      </p>
      <p>
        たとえば，\\(U=\\{1,2,3,4,5\\}\\)，\\(A=\\{1,3,5\\}\\)のとき，
      </p>
      <div class="math-block">
        \\[
        \\overline{A}=\\{2,4\\}
        \\]
      </div>
      <p>
        である．
      </p>
    `,
    relatedIds: ["zentai_shuugou", "domorugan_no_housoku"]
  },
  {
    id: "domorugan_no_housoku",
    term: "ド・モルガンの法則",
    kana: "どもるがんのほうそく",
    yomi: "domorugan_no_housoku",
    group: "と",
    type: "法則",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "和集合・共通部分・補集合の関係を表す法則．",
    description: "和集合・共通部分・補集合の関係を表す法則．",
    bodyHtml: `
      <p>
        集合\\(A\\)，\\(B\\)について，和集合，共通部分，補集合の間には次の関係が成り立つ．これをド・モルガンの法則という．
      </p>
      <div class="math-block">
        \\[
        \\overline{A\\cup B}=\\overline{A}\\cap\\overline{B}
        \\]
      </div>
      <div class="math-block">
        \\[
        \\overline{A\\cap B}=\\overline{A}\\cup\\overline{B}
        \\]
      </div>
      <h3>証明</h3>
      <p>
        任意の要素\\(x\\)について考える．
      </p>
      <p>
        \\(x\\in\\overline{A\\cup B}\\)であることは，\\(x\\)が\\(A\\cup B\\)に属さないことと同じである．これは，\\(x\\)が\\(A\\)にも\\(B\\)にも属さないことと同じである．したがって，\\(x\\in\\overline{A}\\)かつ\\(x\\in\\overline{B}\\)である．
      </p>
      <p>
        よって，
      </p>
      <div class="math-block">
        \\[
        x\\in\\overline{A\\cup B}
        \\]
      </div>
      <p>
        と
      </p>
      <div class="math-block">
        \\[
        x\\in\\overline{A}\\cap\\overline{B}
        \\]
      </div>
      <p>
        は同値である．したがって，
      </p>
      <div class="math-block">
        \\[
        \\overline{A\\cup B}=\\overline{A}\\cap\\overline{B}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
      <p>
        同様に，\\(x\\in\\overline{A\\cap B}\\)であることは，\\(x\\)が\\(A\\cap B\\)に属さないことと同じである．これは，\\(x\\)が\\(A\\)に属さない，または\\(x\\)が\\(B\\)に属さないことと同じである．したがって，
      </p>
      <div class="math-block">
        \\[
        \\overline{A\\cap B}=\\overline{A}\\cup\\overline{B}
        \\]
      </div>
      <p>
        が成り立つ．
      </p>
    `,
    relatedIds: ["wagou", "kyoutsuububun", "hoshuugou"]
  },
  {
    id: "jouken",
    term: "条件",
    kana: "じょうけん",
    yomi: "jouken",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "文字の値などによって，成り立つか成り立たないかが決まる文や式．",
    description: "文字の値などによって，成り立つか成り立たないかが決まる文や式．",
    bodyHtml: `
      <p>
        文字の値などによって，成り立つか成り立たないかが決まる文や式を条件という．
      </p>
      <p>
        たとえば，\\(x\\)を実数とするとき，
      </p>
      <div class="math-block">
        \\[
        x>0
        \\]
      </div>
      <p>
        は条件である．\\(x=2\\)なら成り立ち，\\(x=-1\\)なら成り立たない．
      </p>
      <p>
        条件を満たすもの全体は，集合として考えることができる．
      </p>
    `,
    relatedIds: ["meidai", "shuugou", "hitsuyoujouken", "juubunjouken"]
  },
  {
    id: "meidai",
    term: "命題",
    kana: "めいだい",
    yomi: "meidai",
    group: "め",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "正しいか正しくないかがはっきり決まる文や式．",
    description: "正しいか正しくないかがはっきり決まる文や式．",
    bodyHtml: `
      <p>
        正しいか正しくないかがはっきり決まる文や式を命題という．
      </p>
      <p>
        正しい命題を真であるといい，正しくない命題を偽であるという．
      </p>
      <p>
        たとえば，「\\(2\\)は偶数である」は真の命題であり，「\\(3\\)は偶数である」は偽の命題である．
      </p>
      <p>
        一方，「\\(x\\)は偶数である」は，\\(x\\)の値が決まらないと真偽が定まらないので，そのままでは命題ではなく条件である．
      </p>
    `,
    relatedIds: ["shin", "gi", "jouken", "hanrei"]
  },
  {
    id: "shin",
    term: "真",
    kana: "しん",
    yomi: "shin",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題が正しいこと．",
    description: "命題が正しいこと．",
    bodyHtml: `
      <p>
        命題が正しいことを，その命題は真であるという．
      </p>
      <p>
        たとえば，「\\(4\\)は偶数である」という命題は真である．
      </p>
    `,
    relatedIds: ["meidai", "gi"]
  },
  {
    id: "gi",
    term: "偽",
    kana: "ぎ",
    yomi: "gi",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題が正しくないこと．",
    description: "命題が正しくないこと．",
    bodyHtml: `
      <p>
        命題が正しくないことを，その命題は偽であるという．
      </p>
      <p>
        たとえば，「\\(5\\)は偶数である」という命題は偽である．
      </p>
      <p>
        命題が偽であることを示すには，その命題が成り立たない例を1つ示せばよい．そのような例を反例という．
      </p>
    `,
    relatedIds: ["meidai", "shin", "hanrei"]
  },
  {
    id: "hanrei",
    term: "反例",
    kana: "はんれい",
    yomi: "hanrei",
    group: "は",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題が成り立たないことを示す具体例．",
    description: "命題が成り立たないことを示す具体例．",
    bodyHtml: `
      <p>
        命題が成り立たないことを示す具体例を反例という．
      </p>
      <p>
        たとえば，「すべての素数は奇数である」という命題は偽である．実際，\\(2\\)は素数であるが奇数ではない．このとき，\\(2\\)が反例である．
      </p>
      <p>
        全称的な命題が偽であることを示すには，反例を1つ示せば十分である．
      </p>
    `,
    relatedIds: ["meidai", "gi"]
  },
  {
    id: "gyaku",
    term: "逆",
    kana: "ぎゃく",
    yomi: "gyaku",
    group: "き",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題の仮定と結論を入れ替えた命題．",
    description: "命題の仮定と結論を入れ替えた命題．",
    bodyHtml: `
      <p>
        命題「\\(p\\)ならば\\(q\\)」に対して，仮定と結論を入れ替えた命題「\\(q\\)ならば\\(p\\)」を，もとの命題の逆という．
      </p>
      <p>
        もとの命題が真であっても，その逆が真であるとは限らない．
      </p>
      <p>
        たとえば，「\\(x=2\\)ならば\\(x^2=4\\)」は真である．しかし，その逆「\\(x^2=4\\)ならば\\(x=2\\)」は，\\(x=-2\\)という反例があるので偽である．
      </p>
    `,
    relatedIds: ["meidai", "taiguu", "ura"]
  },
  {
    id: "ura",
    term: "裏",
    kana: "うら",
    yomi: "ura",
    group: "う",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題の仮定と結論をそれぞれ否定した命題．",
    description: "命題の仮定と結論をそれぞれ否定した命題．",
    bodyHtml: `
      <p>
        命題「\\(p\\)ならば\\(q\\)」に対して，仮定と結論をそれぞれ否定した命題「\\(p\\)でないならば\\(q\\)でない」を，もとの命題の裏という．
      </p>
      <p>
        もとの命題が真であっても，その裏が真であるとは限らない．
      </p>
      <p>
        たとえば，「\\(x=2\\)ならば\\(x^2=4\\)」は真である．しかし，その裏「\\(x\\ne 2\\)ならば\\(x^2\\ne 4\\)」は，\\(x=-2\\)という反例があるので偽である．
      </p>
    `,
    relatedIds: ["meidai", "gyaku", "taiguu"]
  },
  {
    id: "taiguu",
    term: "対偶",
    kana: "たいぐう",
    yomi: "taiguu",
    group: "た",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "命題の結論と仮定を入れ替え，それぞれを否定した命題．",
    description: "命題の結論と仮定を入れ替え，それぞれを否定した命題．",
    bodyHtml: `
      <p>
        命題「\\(p\\)ならば\\(q\\)」に対して，「\\(q\\)でないならば\\(p\\)でない」を，もとの命題の対偶という．
      </p>
      <p>
        もとの命題とその対偶の真偽は一致する．つまり，もとの命題が真なら対偶も真であり，もとの命題が偽なら対偶も偽である．
      </p>
      <h3>証明</h3>
      <p>
        命題「\\(p\\)ならば\\(q\\)」が真であるとする．このとき，\\(q\\)でないにもかかわらず\\(p\\)であるものが存在すると，\\(p\\)ならば\\(q\\)に反する．したがって，\\(q\\)でないならば\\(p\\)でない，すなわち対偶は真である．
      </p>
      <p>
        逆に，対偶「\\(q\\)でないならば\\(p\\)でない」が真であるとする．もし\\(p\\)であるのに\\(q\\)でないものが存在すると，対偶に反する．したがって，\\(p\\)ならば\\(q\\)は真である．
      </p>
      <p>
        よって，命題とその対偶の真偽は一致する．
      </p>
    `,
    relatedIds: ["meidai", "gyaku", "ura"]
  },
  {
    id: "hitsuyoujouken",
    term: "必要条件",
    kana: "ひつようじょうけん",
    yomi: "hitsuyoujouken",
    group: "ひ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "\\(p\\)ならば\\(q\\)が成り立つときの，結論側の条件\\(q\\)．",
    description: "\\(p\\)ならば\\(q\\)が成り立つときの，結論側の条件\\(q\\)．",
    bodyHtml: `
      <p>
        \\(p\\)ならば\\(q\\)が成り立つとき，\\(q\\)は\\(p\\)であるための必要条件であるという．
      </p>
      <p>
        これは，\\(p\\)であるためには，少なくとも\\(q\\)であることが必要である，という意味である．
      </p>
      <p>
        たとえば，\\(x=2\\)ならば\\(x^2=4\\)であるから，\\(x^2=4\\)は\\(x=2\\)であるための必要条件である．
      </p>
    `,
    relatedIds: ["juubunjouken", "hitsuyoujuubunjouken", "jouken"]
  },
  {
    id: "juubunjouken",
    term: "十分条件",
    kana: "じゅうぶんじょうけん",
    yomi: "juubunjouken",
    group: "し",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "\\(p\\)ならば\\(q\\)が成り立つときの，仮定側の条件\\(p\\)．",
    description: "\\(p\\)ならば\\(q\\)が成り立つときの，仮定側の条件\\(p\\)．",
    bodyHtml: `
      <p>
        \\(p\\)ならば\\(q\\)が成り立つとき，\\(p\\)は\\(q\\)であるための十分条件であるという．
      </p>
      <p>
        これは，\\(p\\)であれば\\(q\\)であるといえるだけの十分な条件になっている，という意味である．
      </p>
      <p>
        たとえば，\\(x=2\\)ならば\\(x^2=4\\)であるから，\\(x=2\\)は\\(x^2=4\\)であるための十分条件である．
      </p>
    `,
    relatedIds: ["hitsuyoujouken", "hitsuyoujuubunjouken", "jouken"]
  },
  {
    id: "hitsuyoujuubunjouken",
    term: "必要十分条件",
    kana: "ひつようじゅうぶんじょうけん",
    yomi: "hitsuyoujuubunjouken",
    group: "ひ",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "必要条件でもあり，十分条件でもある条件．",
    description: "必要条件でもあり，十分条件でもある条件．",
    bodyHtml: `
      <p>
        ある条件が必要条件でもあり，十分条件でもあるとき，その条件を必要十分条件という．
      </p>
      <p>
        つまり，\\(p\\)ならば\\(q\\)，かつ，\\(q\\)ならば\\(p\\)が成り立つとき，\\(p\\)と\\(q\\)は互いに必要十分条件である．
      </p>
      <p>
        このとき，\\(p\\)と\\(q\\)は同値であるともいう．
      </p>
      <p>
        たとえば，実数\\(x\\)について，\\(x=0\\)であることと\\(x^2=0\\)であることは必要十分条件である．
      </p>
    `,
    relatedIds: ["hitsuyoujouken", "juubunjouken", "douchi"]
  },
  {
    id: "douchi",
    term: "同値",
    kana: "どうち",
    yomi: "douchi",
    group: "と",
    type: "定義",
    subject: "数学I",
    unit: "集合と命題",
    unitIds: ["math1_sets_and_propositions"],
    shortDescription: "2つの条件や命題が，互いに同じ真偽をもつこと．",
    description: "2つの条件や命題が，互いに同じ真偽をもつこと．",
    bodyHtml: `
      <p>
        2つの条件や命題が，互いに同じ真偽をもつことを同値という．
      </p>
      <p>
        特に，\\(p\\)ならば\\(q\\)，かつ，\\(q\\)ならば\\(p\\)が成り立つとき，\\(p\\)と\\(q\\)は同値であるという．
      </p>
      <p>
        このことを，
      </p>
      <div class="math-block">
        \\[
        p\\Longleftrightarrow q
        \\]
      </div>
      <p>
        と表すことがある．
      </p>
      <p>
        たとえば，実数\\(x\\)について，\\(x=0\\)であることと\\(x^2=0\\)であることは同値である．
      </p>
    `,
    relatedIds: ["hitsuyoujuubunjouken", "hitsuyoujouken", "juubunjouken"]
  }
);
