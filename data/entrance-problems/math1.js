window.entranceProblemsMath1 = [
  // =========================
  // 数学I：数と式
  // =========================
  {
    id: "entrance-math1-numbers-and-expressions-001",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\((x+2)(x+3)\\) を展開したものはどれか．",
    choices: [
      "\\(x^2+5x+6\\)",
      "\\(x^2+6x+5\\)",
      "\\(x^2+5x+5\\)",
      "\\(x^2+6\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\((x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6\\) である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-002",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\((x+3)^2\\) を展開したものはどれか．",
    choices: [
      "\\(x^2+3x+9\\)",
      "\\(x^2+6x+9\\)",
      "\\(x^2+9x+9\\)",
      "\\(x^2+6x+3\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\((a+b)^2=a^2+2ab+b^2\\) より，\\((x+3)^2=x^2+6x+9\\) である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-003",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(x^2+5x+6\\) を因数分解したものはどれか．",
    choices: [
      "\\((x+1)(x+6)\\)",
      "\\((x+2)(x+3)\\)",
      "\\((x-2)(x-3)\\)",
      "\\((x+2)(x-3)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "和が\\(5\\)，積が\\(6\\)になる2数は\\(2,3\\)であるから，\\(x^2+5x+6=(x+2)(x+3)\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-004",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(x^2-9\\) を因数分解したものはどれか．",
    choices: [
      "\\((x-9)(x+1)\\)",
      "\\((x-3)^2\\)",
      "\\((x-3)(x+3)\\)",
      "\\((x+3)^2\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x^2-9=x^2-3^2\\)であるから，\\(x^2-9=(x-3)(x+3)\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-005",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(\\frac{1}{\\sqrt{2}}\\) の分母を有理化したものはどれか．",
    choices: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{\\sqrt{2}}{2}\\)",
      "\\(\\sqrt{2}\\)",
      "\\(\\frac{2}{\\sqrt{2}}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "分母と分子に\\(\\sqrt{2}\\)をかけると，\\(\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-006",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(\\sqrt{18}\\) を簡単にしたものはどれか．",
    choices: [
      "\\(9\\sqrt{2}\\)",
      "\\(3\\sqrt{2}\\)",
      "\\(2\\sqrt{3}\\)",
      "\\(6\\sqrt{3}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(18=9\\times2\\)より，\\(\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt{2}\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-007",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\(\\frac{2}{\\sqrt{3}}\\) の分母を有理化したものはどれか．",
    choices: [
      "\\(\\frac{2\\sqrt{3}}{3}\\)",
      "\\(\\frac{\\sqrt{3}}{2}\\)",
      "\\(2\\sqrt{3}\\)",
      "\\(\\frac{3\\sqrt{2}}{2}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "分母と分子に\\(\\sqrt{3}\\)をかけると，\\(\\frac{2}{\\sqrt{3}}=\\frac{2\\sqrt{3}}{3}\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-008",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\((a+b)^2\\) を展開したものはどれか．",
    choices: [
      "\\(a^2+b^2\\)",
      "\\(a^2+ab+b^2\\)",
      "\\(a^2+2ab+b^2\\)",
      "\\(a^2-2ab+b^2\\)"
    ],
    correctIndex: 2,
    explanationHtml: "平方の展開公式より，\\((a+b)^2=a^2+2ab+b^2\\)である．"
  },
  {
    id: "entrance-math1-numbers-and-expressions-009",
    unitIds: ["math1_numbers_and_expressions"],
    questionHtml: "\\((a+b)(a-b)\\) を展開したものはどれか．",
    choices: [
      "\\(a^2+b^2\\)",
      "\\(a^2-b^2\\)",
      "\\(a^2-2ab+b^2\\)",
      "\\(a^2+2ab+b^2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "和と差の積の公式より，\\((a+b)(a-b)=a^2-b^2\\)である．"
  },

  // =========================
  // 数学I：集合と命題
  // =========================
  {
    id: "entrance-math1-sets-and-logic-001",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "\\(A=\\{1,2,3\\}\\)，\\(B=\\{2,3,4\\}\\) のとき，\\(A\\cap B\\) はどれか．",
    choices: [
      "\\(\\{1,2,3,4\\}\\)",
      "\\(\\{2,3\\}\\)",
      "\\(\\{1,4\\}\\)",
      "\\(\\{1,2\\}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(A\\cap B\\) は，\\(A\\) と \\(B\\) の共通部分である．共通している要素は \\(2,3\\) なので，\\(A\\cap B=\\{2,3\\}\\) である．"
  },
  {
    id: "entrance-math1-sets-and-logic-002",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "\\(A=\\{1,2,3\\}\\)，\\(B=\\{2,3,4\\}\\) のとき，\\(A\\cup B\\) はどれか．",
    choices: [
      "\\(\\{2,3\\}\\)",
      "\\(\\{1,4\\}\\)",
      "\\(\\{1,2,3,4\\}\\)",
      "\\(\\{1,2,3\\}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(A\\cup B\\) は，\\(A\\) または \\(B\\) に属する要素全体の集合である．したがって，\\(A\\cup B=\\{1,2,3,4\\}\\) である．"
  },
  {
    id: "entrance-math1-sets-and-logic-003",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "命題「\\(x=2\\) ならば \\(x^2=4\\)」の逆はどれか．",
    choices: [
      "\\(x^2=4\\) ならば \\(x=2\\)",
      "\\(x\\ne2\\) ならば \\(x^2\\ne4\\)",
      "\\(x^2\\ne4\\) ならば \\(x\\ne2\\)",
      "\\(x=2\\) かつ \\(x^2=4\\)"
    ],
    correctIndex: 0,
    explanationHtml: "命題「\\(p\\) ならば \\(q\\)」の逆は，「\\(q\\) ならば \\(p\\)」である．"
  },
  {
    id: "entrance-math1-sets-and-logic-004",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "命題「\\(x=2\\) ならば \\(x^2=4\\)」の対偶はどれか．",
    choices: [
      "\\(x^2=4\\) ならば \\(x=2\\)",
      "\\(x\\ne2\\) ならば \\(x^2\\ne4\\)",
      "\\(x^2\\ne4\\) ならば \\(x\\ne2\\)",
      "\\(x=2\\) ならば \\(x^2\\ne4\\)"
    ],
    correctIndex: 2,
    explanationHtml: "命題「\\(p\\) ならば \\(q\\)」の対偶は，「\\(q\\) でないならば \\(p\\) でない」である．"
  },
  {
    id: "entrance-math1-sets-and-logic-005",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "「すべての実数 \\(x\\) について \\(x^2\\geqq0\\)」は真か偽か．",
    choices: [
      "真",
      "偽",
      "\\(x=0\\) のときだけ真",
      "\\(x>0\\) のときだけ真"
    ],
    correctIndex: 0,
    explanationHtml: "実数の平方は常に \\(0\\) 以上である．したがって，命題は真である．"
  },
  {
    id: "entrance-math1-sets-and-logic-006",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "「\\(x^2=4\\) ならば \\(x=2\\)」は真か偽か．ただし，\\(x\\) は実数とする．",
    choices: [
      "真",
      "偽",
      "\\(x>0\\) のときだけ偽",
      "\\(x=0\\) のときだけ真"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x=-2\\) のとき，\\(x^2=4\\) であるが \\(x=2\\) ではない．反例があるので，命題は偽である．"
  },
  {
    id: "entrance-math1-sets-and-logic-007",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "\\(A\\subset B\\) の意味として正しいものはどれか．",
    choices: [
      "\\(A\\) のすべての要素が \\(B\\) に属する",
      "\\(B\\) のすべての要素が \\(A\\) に属する",
      "\\(A\\) と \\(B\\) は共通部分をもたない",
      "\\(A\\) と \\(B\\) は同じ集合ではない"
    ],
    correctIndex: 0,
    explanationHtml: "\\(A\\subset B\\) は，\\(A\\) が \\(B\\) の部分集合であることを表す．つまり，\\(A\\) のすべての要素が \\(B\\) に属する．"
  },
  {
    id: "entrance-math1-sets-and-logic-008",
    unitIds: ["math1_sets_and_logic"],
    questionHtml: "条件 \\(p\\) が条件 \\(q\\) であるための十分条件であるとき，成り立つ命題はどれか．",
    choices: [
      "\\(q\\) ならば \\(p\\)",
      "\\(p\\) ならば \\(q\\)",
      "\\(p\\) でないならば \\(q\\)",
      "\\(p\\) ならば \\(q\\) でない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(p\\Rightarrow q\\) が成り立つとき，\\(p\\) は \\(q\\) であるための十分条件である．"
  },

  // =========================
  // 数学I：2次関数
  // =========================
  {
    id: "entrance-math1-quadratic-functions-001",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "\\(y=x^2+2x-2\\) において，\\(x=3\\) のときの \\(y\\) の値はどれか．",
    choices: [
      "\\(9\\)",
      "\\(11\\)",
      "\\(13\\)",
      "\\(15\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x=3\\) を代入すると，\\(y=3^2+2\\cdot3-2=9+6-2=13\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-002",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次関数 \\(y=x^2+2\\) のグラフの頂点はどれか．",
    choices: [
      "\\((0,2)\\)",
      "\\((2,0)\\)",
      "\\((0,-2)\\)",
      "\\((-2,0)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(y=x^2+2=(x-0)^2+2\\) であるから，頂点は \\((0,2)\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-003",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次関数 \\(y=(x-1)^2+1\\) のグラフの頂点はどれか．",
    choices: [
      "\\((1,0)\\)",
      "\\((-1,1)\\)",
      "\\((1,1)\\)",
      "\\((-1,0)\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(y=(x-p)^2+q\\) のグラフの頂点は \\((p,q)\\) である．したがって，頂点は \\((1,1)\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-004",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "\\(y=x^2\\) のグラフを \\(x\\) 軸の正の向きに \\(2\\)，\\(y\\) 軸の正の向きに \\(3\\) だけ平行移動したグラフの式はどれか．",
    choices: [
      "\\(y=(x+2)^2+3\\)",
      "\\(y=(x-2)^2+3\\)",
      "\\(y=(x-2)^2-3\\)",
      "\\(y=(x+2)^2-3\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x\\) 軸の正の向きに \\(2\\) だけ平行移動するとは右に \\(2\\)，\\(y\\) 軸の正の向きに \\(3\\) だけ平行移動するとは上に \\(3\\) 移動することである．したがって，\\(y=(x-2)^2+3\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-005",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次関数 \\(y=a(x-p)^2+q\\) のグラフの頂点はどれか．",
    choices: [
      "\\((a,p)\\)",
      "\\((p,q)\\)",
      "\\((-p,q)\\)",
      "\\((q,p)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "2次関数 \\(y=a(x-p)^2+q\\) のグラフの頂点は \\((p,q)\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-006",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "方程式 \\(x^2+1=0\\) は実数解をもつか．",
    choices: [
      "実数解を2つもつ",
      "実数解を1つもつ",
      "実数解をもたない",
      "\\(x=1\\) だけを解にもつ"
    ],
    correctIndex: 2,
    explanationHtml: "実数 \\(x\\) について \\(x^2\\geqq0\\) であるから，\\(x^2+1>0\\) である．したがって，\\(x^2+1=0\\) は実数解をもたない．"
  },
  {
    id: "entrance-math1-quadratic-functions-007",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次不等式 \\(x^2-4<0\\) の解はどれか．",
    choices: [
      "\\(x<-2,\\ 2<x\\)",
      "\\(-2<x<2\\)",
      "\\(x<2\\)",
      "\\(-2<x\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x^2-4=(x-2)(x+2)\\) であり，\\(y=x^2-4\\) のグラフが \\(x\\) 軸より下にある範囲は \\(-2<x<2\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-008",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次方程式 \\(x^2-5x+6=0\\) の解はどれか．",
    choices: [
      "\\(x=1,6\\)",
      "\\(x=-2,-3\\)",
      "\\(x=2,3\\)",
      "\\(x=-1,-6\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x^2-5x+6=(x-2)(x-3)\\) であるから，解は \\(x=2,3\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-009",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次関数 \\(y=(x-2)^2+1\\) の最小値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "最小値はない"
    ],
    correctIndex: 1,
    explanationHtml: "\\((x-2)^2\\geqq0\\) であるから，\\(y=(x-2)^2+1\\geqq1\\) である．したがって，最小値は \\(1\\) である．"
  },
  {
    id: "entrance-math1-quadratic-functions-010",
    unitIds: ["math1_quadratic_functions"],
    questionHtml: "2次関数 \\(y=-(x+1)^2+3\\) の最大値はどれか．",
    choices: [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(3\\)"
    ],
    correctIndex: 3,
    explanationHtml: "\\((x+1)^2\\geqq0\\) より，\\(-(x+1)^2\\leqq0\\) である．したがって，\\(y=-(x+1)^2+3\\leqq3\\) となり，最大値は \\(3\\) である．"
  },

  // =========================
  // 数学I：図形と計量
  // =========================
  {
    id: "entrance-math1-figure-and-measurement-001",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "\\(\\sin30^\\circ\\) の値はどれか．",
    choices: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{\\sqrt{2}}{2}\\)",
      "\\(\\frac{\\sqrt{3}}{2}\\)",
      "\\(1\\)"
    ],
    correctIndex: 0,
    explanationHtml: "特別な角の三角比より，\\(\\sin30^\\circ=\\frac{1}{2}\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-002",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "\\(\\cos60^\\circ\\) の値はどれか．",
    choices: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{\\sqrt{2}}{2}\\)",
      "\\(\\frac{\\sqrt{3}}{2}\\)",
      "\\(1\\)"
    ],
    correctIndex: 0,
    explanationHtml: "特別な角の三角比より，\\(\\cos60^\\circ=\\frac{1}{2}\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-003",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "\\(\\tan45^\\circ\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\sqrt{3}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "特別な角の三角比より，\\(\\tan45^\\circ=1\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-004",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "直角三角形で，斜辺の長さが \\(5\\)，一方の直角をはさむ辺の長さが \\(3\\) であるとき，もう一方の直角をはさむ辺の長さはどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    correctIndex: 2,
    explanationHtml: "三平方の定理より，もう一方の辺の長さを \\(x\\) とすると，\\(x^2+3^2=5^2\\) である．よって，\\(x^2=16\\) なので，\\(x=4\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-005",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "三角形 \\(\\mathrm{ABC}\\) において，辺 \\(\\mathrm{BC}\\)，\\(\\mathrm{CA}\\)，\\(\\mathrm{AB}\\) の長さをそれぞれ \\(a,b,c\\)，外接円の半径を \\(R\\) とするとき，正弦定理として正しいものはどれか．",
    choices: [
      "\\(a^2=b^2+c^2-2bc\\cos A\\)",
      "\\(\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R\\)",
      "\\(S=\\frac{1}{2}bc\\sin A\\)",
      "\\(\\sin^2 A+\\cos^2 A=1\\)"
    ],
    correctIndex: 1,
    explanationHtml: "正弦定理は，辺の長さと向かい合う角の正弦の比に関する定理である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-006",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "三角形 \\(\\mathrm{ABC}\\) において，辺 \\(\\mathrm{BC}\\)，\\(\\mathrm{CA}\\)，\\(\\mathrm{AB}\\) の長さをそれぞれ \\(a,b,c\\) とするとき，余弦定理により \\(a^2\\) を表したものはどれか．",
    choices: [
      "\\(a^2=b^2+c^2-2bc\\cos A\\)",
      "\\(a^2=b^2+c^2+2bc\\cos A\\)",
      "\\(a^2=b^2-c^2-2bc\\cos A\\)",
      "\\(a^2=b^2+c^2-2ab\\cos C\\)"
    ],
    correctIndex: 0,
    explanationHtml: "辺 \\(a\\) は角 \\(A\\) の向かい側の辺である．余弦定理より，\\(a^2=b^2+c^2-2bc\\cos A\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-007",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "三角形の2辺の長さが \\(b,c\\)，その間の角が \\(A\\) であるとき，三角形の面積 \\(S\\) を表す公式はどれか．",
    choices: [
      "\\(S=bc\\sin A\\)",
      "\\(S=\\frac{1}{2}bc\\sin A\\)",
      "\\(S=\\frac{1}{2}bc\\cos A\\)",
      "\\(S=b+c+\\sin A\\)"
    ],
    correctIndex: 1,
    explanationHtml: "2辺とその間の角から面積を求める公式は，\\(S=\\frac{1}{2}bc\\sin A\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-008",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "\\(b=4\\)，\\(c=5\\)，\\(\\sin A=\\frac{1}{2}\\) のとき，\\(S=\\frac{1}{2}bc\\sin A\\) により三角形の面積 \\(S\\) を求めたものはどれか．",
    choices: [
      "\\(5\\)",
      "\\(10\\)",
      "\\(20\\)",
      "\\(40\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(S=\\frac{1}{2}\\cdot4\\cdot5\\cdot\\frac{1}{2}=5\\) である．"
  },
  {
    id: "entrance-math1-figure-and-measurement-009",
    unitIds: ["math1_figure_and_measurement"],
    questionHtml: "\\(\\sin^2\\theta+\\cos^2\\theta\\) を簡単にしたものはどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)"
    ],
    correctIndex: 1,
    explanationHtml: "三角比の相互関係より，\\(\\sin^2\\theta+\\cos^2\\theta=1\\) である．"
  },

  // =========================
  // 数学I：データの分析
  // =========================
  {
    id: "entrance-math1-data-analysis-001",
    unitIds: ["math1_data_analysis"],
    questionHtml: "データ \\(2,4,6\\) の平均値はどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    correctIndex: 2,
    explanationHtml: "平均値は，\\(\\frac{2+4+6}{3}=4\\) である．"
  },
  {
    id: "entrance-math1-data-analysis-002",
    unitIds: ["math1_data_analysis"],
    questionHtml: "データ \\(1,3,5,7\\) の中央値はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correctIndex: 1,
    explanationHtml: "データの個数が偶数なので，中央の2つの値 \\(3,5\\) の平均をとる．したがって，中央値は \\(4\\) である．"
  },
  {
    id: "entrance-math1-data-analysis-003",
    unitIds: ["math1_data_analysis"],
    questionHtml: "データ \\(2,2,3,5,5,5\\) の最頻値はどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correctIndex: 2,
    explanationHtml: "最も多く現れる値は \\(5\\) である．したがって，最頻値は \\(5\\) である．"
  },
  {
    id: "entrance-math1-data-analysis-004",
    unitIds: ["math1_data_analysis"],
    questionHtml: "データ \\(4,7,10\\) の範囲はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(10\\)"
    ],
    correctIndex: 2,
    explanationHtml: "範囲は，最大値から最小値を引いた値である．したがって，\\(10-4=6\\) である．"
  },
  {
    id: "entrance-math1-data-analysis-005",
    unitIds: ["math1_data_analysis"],
    questionHtml: "分散が \\(9\\) であるとき，標準偏差はどれか．",
    choices: [
      "\\(3\\)",
      "\\(9\\)",
      "\\(18\\)",
      "\\(81\\)"
    ],
    correctIndex: 0,
    explanationHtml: "標準偏差は分散の正の平方根である．したがって，\\(\\sqrt{9}=3\\) である．"
  },
  {
    id: "entrance-math1-data-analysis-006",
    unitIds: ["math1_data_analysis"],
    questionHtml: "標準偏差と分散の関係として正しいものはどれか．",
    choices: [
      "標準偏差は分散の正の平方根である",
      "標準偏差は分散の2倍である",
      "標準偏差は分散の半分である",
      "標準偏差と分散は常に等しい"
    ],
    correctIndex: 0,
    explanationHtml: "標準偏差は分散の正の平方根である．"
  },
  {
    id: "entrance-math1-data-analysis-007",
    unitIds: ["math1_data_analysis"],
    questionHtml: "偏差の説明として正しいものはどれか．",
    choices: [
      "データの値から平均値を引いた値",
      "データの最大値から最小値を引いた値",
      "データの値をすべて足した値",
      "データを小さい順に並べたとき中央にくる値"
    ],
    correctIndex: 0,
    explanationHtml: "偏差とは，データの値から平均値を引いた値である．"
  },
  {
    id: "entrance-math1-data-analysis-008",
    unitIds: ["math1_data_analysis"],
    questionHtml: "共分散が正であるとき，散布図はおおよそどのような傾向をもつか．",
    choices: [
      "右上がりの傾向",
      "右下がりの傾向",
      "完全に横一直線の傾向",
      "必ず円形に散らばる傾向"
    ],
    correctIndex: 0,
    explanationHtml: "共分散が正であるとき，一方の値が大きいほど他方の値も大きい傾向があるので，散布図はおおよそ右上がりの傾向をもつ．"
  }
];
