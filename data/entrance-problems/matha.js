window.entranceProblemsMathA = [
  // =========================
  // 数学A：図形の性質
  // =========================
  {
    id: "entrance-matha-geometry-001",
    unitIds: ["matha_geometry"],
    questionHtml: "三角形の内角の和はどれか．",
    choices: [
      "\\(90^\\circ\\)",
      "\\(180^\\circ\\)",
      "\\(270^\\circ\\)",
      "\\(360^\\circ\\)"
    ],
    correctIndex: 1,
    explanationHtml: "三角形の内角の和は常に \\(180^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-002",
    unitIds: ["matha_geometry"],
    questionHtml: "五角形の内角の和はどれか．",
    choices: [
      "\\(360^\\circ\\)",
      "\\(450^\\circ\\)",
      "\\(540^\\circ\\)",
      "\\(720^\\circ\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(n\\) 角形の内角の和は \\((n-2)\\times180^\\circ\\) である．五角形では，\\((5-2)\\times180^\\circ=540^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-003",
    unitIds: ["matha_geometry"],
    questionHtml: "円周角が \\(40^\\circ\\) であるとき，その円周角と同じ弧に対する中心角はどれか．",
    choices: [
      "\\(20^\\circ\\)",
      "\\(40^\\circ\\)",
      "\\(80^\\circ\\)",
      "\\(120^\\circ\\)"
    ],
    correctIndex: 2,
    explanationHtml: "同じ弧に対する中心角は円周角の2倍である．したがって，中心角は \\(80^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-004",
    unitIds: ["matha_geometry"],
    questionHtml: "直径に対する円周角はどれか．",
    choices: [
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(180^\\circ\\)"
    ],
    correctIndex: 2,
    explanationHtml: "直径に対する円周角は直角である．したがって，\\(90^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-005",
    unitIds: ["matha_geometry"],
    questionHtml: "\\(n\\) 角形の内角の和を表す式はどれか．",
    choices: [
      "\\((n-1)\\times180^\\circ\\)",
      "\\((n-2)\\times180^\\circ\\)",
      "\\(n\\times180^\\circ\\)",
      "\\((n+2)\\times180^\\circ\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(n\\) 角形は \\(n-2\\) 個の三角形に分けられるので，内角の和は \\((n-2)\\times180^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-006",
    unitIds: ["matha_geometry"],
    questionHtml: "円に内接する四角形において，向かい合う角の和はどれか．",
    choices: [
      "\\(90^\\circ\\)",
      "\\(120^\\circ\\)",
      "\\(180^\\circ\\)",
      "\\(360^\\circ\\)"
    ],
    correctIndex: 2,
    explanationHtml: "円に内接する四角形では，向かい合う角の和は \\(180^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-007",
    unitIds: ["matha_geometry"],
    questionHtml: "円の接線と，接点を通る半径がつくる角はどれか．",
    choices: [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    correctIndex: 3,
    explanationHtml: "円の接線は，接点を通る半径に垂直である．したがって，つくる角は \\(90^\\circ\\) である．"
  },
  {
    id: "entrance-matha-geometry-008",
    unitIds: ["matha_geometry"],
    questionHtml: "三角形の外角について正しいものはどれか．",
    choices: [
      "三角形の外角は，その隣にない2つの内角の和に等しい",
      "三角形の外角は，常に \\(90^\\circ\\) である",
      "三角形の外角は，その隣の内角に等しい",
      "三角形の外角は，3つの内角の和に等しい"
    ],
    correctIndex: 0,
    explanationHtml: "三角形の外角は，その隣にない2つの内角の和に等しい．"
  },

  // =========================
  // 数学A：場合の数と確率
  // =========================
  {
    id: "entrance-matha-counting-probability-001",
    unitIds: ["matha_counting_probability"],
    questionHtml: "\\(3!\\) の値はどれか．",
    choices: [
      "\\(3\\)",
      "\\(6\\)",
      "\\(9\\)",
      "\\(12\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(3!=3\\cdot2\\cdot1=6\\) である．"
  },
  {
    id: "entrance-matha-counting-probability-002",
    unitIds: ["matha_counting_probability"],
    questionHtml: "\\(0!\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "定義されない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(0!\\) は \\(1\\) と定める．"
  },
  {
    id: "entrance-matha-counting-probability-003",
    unitIds: ["matha_counting_probability"],
    questionHtml: "異なる \\(5\\) 人から \\(2\\) 人を選ぶ方法は何通りか．",
    choices: [
      "\\(5\\) 通り",
      "\\(10\\) 通り",
      "\\(20\\) 通り",
      "\\(25\\) 通り"
    ],
    correctIndex: 1,
    explanationHtml: "順序を考えずに選ぶので，\\({}_5\\mathrm{C}_2=\\frac{5\\cdot4}{2\\cdot1}=10\\) 通りである．"
  },
  {
    id: "entrance-matha-counting-probability-004",
    unitIds: ["matha_counting_probability"],
    questionHtml: "さいころを1回投げるとき，偶数の目が出る確率はどれか．",
    choices: [
      "\\(\\frac{1}{6}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{2}{3}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "偶数の目は \\(2,4,6\\) の3通りであり，すべての場合は6通りである．したがって，確率は \\(\\frac{3}{6}=\\frac{1}{2}\\) である．"
  },
  {
    id: "entrance-matha-counting-probability-005",
    unitIds: ["matha_counting_probability"],
    questionHtml: "事象 \\(A\\) が起こったという条件のもとで事象 \\(B\\) が起こる条件付き確率 \\(P_A(B)\\) を表す式はどれか．ただし，\\(P(A)>0\\) とする．",
    choices: [
      "\\(P_A(B)=\\frac{P(A\\cup B)}{P(A)}\\)",
      "\\(P_A(B)=\\frac{P(A\\cap B)}{P(A)}\\)",
      "\\(P_A(B)=P(A)P(B)\\)",
      "\\(P_A(B)=P(A)+P(B)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "条件付き確率の定義より，\\(P_A(B)=\\frac{P(A\\cap B)}{P(A)}\\) である．"
  },
  {
    id: "entrance-matha-counting-probability-006",
    unitIds: ["matha_counting_probability"],
    questionHtml: "異なる \\(n\\) 個のものを円形に並べる円順列の総数はどれか．",
    choices: [
      "\\(n!\\)",
      "\\((n-1)!\\)",
      "\\((n+1)!\\)",
      "\\(n^2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "円順列では，回転して一致する並べ方を同じものとみなすため，総数は \\((n-1)!\\) である．"
  },
  {
    id: "entrance-matha-counting-probability-007",
    unitIds: ["matha_counting_probability"],
    questionHtml: "\\(n\\) 種類のものから重複を許して \\(r\\) 個を選んで一列に並べる重複順列の総数はどれか．",
    choices: [
      "\\({}_n\\mathrm{P}_r\\)",
      "\\({}_n\\mathrm{C}_r\\)",
      "\\(n^r\\)",
      "\\(r^n\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(r\\) 個の各位置について \\(n\\) 通りずつ選べるので，重複順列の総数は \\(n^r\\) である．"
  },
  {
    id: "entrance-matha-counting-probability-008",
    unitIds: ["matha_counting_probability"],
    questionHtml: "異なる \\(n\\) 個のものから \\(r\\) 個を選ぶ組合せの総数を表す記号はどれか．",
    choices: [
      "\\({}_n\\mathrm{P}_r\\)",
      "\\({}_n\\mathrm{C}_r\\)",
      "\\(n^r\\)",
      "\\(r!\\)"
    ],
    correctIndex: 1,
    explanationHtml: "順序を考えずに選ぶ場合の数は組合せであり，\\({}_n\\mathrm{C}_r\\) と表す．"
  },
  {
    id: "entrance-matha-counting-probability-009",
    unitIds: ["matha_counting_probability"],
    questionHtml: "異なる \\(n\\) 個のものから \\(r\\) 個を選んで一列に並べる順列の総数を表す記号はどれか．",
    choices: [
      "\\({}_n\\mathrm{P}_r\\)",
      "\\({}_n\\mathrm{C}_r\\)",
      "\\(n+r\\)",
      "\\(n-r\\)"
    ],
    correctIndex: 0,
    explanationHtml: "選んだ後の順序も考える場合の数は順列であり，\\({}_n\\mathrm{P}_r\\) と表す．"
  },
  {
    id: "entrance-matha-counting-probability-010",
    unitIds: ["matha_counting_probability"],
    questionHtml: "\\({}_5\\mathrm{P}_2\\) の値はどれか．",
    choices: [
      "\\(10\\)",
      "\\(15\\)",
      "\\(20\\)",
      "\\(25\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\({}_5\\mathrm{P}_2=5\\cdot4=20\\) である．"
  }
];
