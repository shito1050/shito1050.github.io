window.entranceProblemsMathC = [
  // =========================
  // 数学C：ベクトル
  // =========================
  {
    id: "entrance-mathc-vectors-001",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}=(1,2)\\)，\\(\\vec{b}=(3,4)\\) のとき，\\(\\vec{a}+\\vec{b}\\) はどれか．",
    choices: [
      "\\((2,2)\\)",
      "\\((3,8)\\)",
      "\\((4,6)\\)",
      "\\((4,8)\\)"
    ],
    correctIndex: 2,
    explanationHtml: "ベクトルの和は成分どうしを加える．したがって，\\(\\vec{a}+\\vec{b}=(1+3,2+4)=(4,6)\\) である．"
  },
  {
    id: "entrance-mathc-vectors-002",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}=(3,5)\\) のとき，\\(2\\vec{a}\\) はどれか．",
    choices: [
      "\\((3,10)\\)",
      "\\((5,7)\\)",
      "\\((6,10)\\)",
      "\\((9,25)\\)"
    ],
    correctIndex: 2,
    explanationHtml: "各成分を \\(2\\) 倍して，\\(2\\vec{a}=(6,10)\\) である．"
  },
  {
    id: "entrance-mathc-vectors-003",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}=(1,2)\\)，\\(\\vec{b}=(3,1)\\) のとき，\\(\\vec{a}\\cdot\\vec{b}\\) はどれか．",
    choices: [
      "\\(3\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(8\\)"
    ],
    correctIndex: 1,
    explanationHtml: "内積は，\\(\\vec{a}\\cdot\\vec{b}=1\\cdot3+2\\cdot1=5\\) である．"
  },
  {
    id: "entrance-mathc-vectors-004",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}=(3,4)\\) の大きさ \\(|\\vec{a}|\\) はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(7\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(|\\vec{a}|=\\sqrt{3^2+4^2}=5\\) である．"
  },
  {
    id: "entrance-mathc-vectors-005",
    unitIds: ["mathc_vectors"],
    questionHtml: "点 \\(\\mathrm{A}(1,2)\\)，\\(\\mathrm{B}(4,6)\\) のとき，\\(\\vec{AB}\\) はどれか．",
    choices: [
      "\\((3,4)\\)",
      "\\((5,8)\\)",
      "\\((-3,-4)\\)",
      "\\((4,3)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(\\vec{AB}\\) は終点 \\(\\mathrm{B}\\) の座標から始点 \\(\\mathrm{A}\\) の座標を引くので，\\(\\vec{AB}=(4-1,6-2)=(3,4)\\) である．"
  },
  {
    id: "entrance-mathc-vectors-006",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}=(a_1,a_2)\\)，\\(\\vec{b}=(b_1,b_2)\\) の内積として正しいものはどれか．",
    choices: [
      "\\(a_1+a_2+b_1+b_2\\)",
      "\\(a_1b_1+a_2b_2\\)",
      "\\(a_1b_2+a_2b_1\\)",
      "\\((a_1+b_1)(a_2+b_2)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "成分表示における内積は，\\(\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2\\) である．"
  },
  {
    id: "entrance-mathc-vectors-007",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta\\) において，\\(\\theta\\) が表すものはどれか．",
    choices: [
      "\\(\\vec{a}\\) の大きさ",
      "\\(\\vec{b}\\) の大きさ",
      "\\(\\vec{a}\\) と \\(\\vec{b}\\) のなす角",
      "\\(\\vec{a}\\) と \\(\\vec{b}\\) の和"
    ],
    correctIndex: 2,
    explanationHtml: "式 \\(\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta\\) における \\(\\theta\\) は，\\(\\vec{a}\\) と \\(\\vec{b}\\) のなす角である．"
  },
  {
    id: "entrance-mathc-vectors-008",
    unitIds: ["mathc_vectors"],
    questionHtml: "点 \\(\\mathrm{A}\\)，\\(\\mathrm{B}\\) の位置ベクトルをそれぞれ \\(\\vec{a}\\)，\\(\\vec{b}\\) とするとき，線分 \\(\\mathrm{AB}\\) の中点の位置ベクトルはどれか．",
    choices: [
      "\\(\\vec{a}+\\vec{b}\\)",
      "\\(\\frac{\\vec{a}+\\vec{b}}{2}\\)",
      "\\(\\vec{b}-\\vec{a}\\)",
      "\\(\\frac{\\vec{b}-\\vec{a}}{2}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "中点の位置ベクトルは，両端の位置ベクトルの平均なので，\\(\\frac{\\vec{a}+\\vec{b}}{2}\\) である．"
  },
  {
    id: "entrance-mathc-vectors-009",
    unitIds: ["mathc_vectors"],
    questionHtml: "\\(\\vec{a}\\perp\\vec{b}\\) のとき，\\(\\vec{a}\\cdot\\vec{b}\\) の値はどれか．",
    choices: [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(|\\vec{a}|+|\\vec{b}|\\)"
    ],
    correctIndex: 1,
    explanationHtml: "垂直な2つのベクトルのなす角は \\(90^\\circ\\) なので，\\(\\cos90^\\circ=0\\) より，内積は \\(0\\) である．"
  },
  {
    id: "entrance-mathc-vectors-010",
    unitIds: ["mathc_vectors"],
    questionHtml: "点 \\(\\mathrm{A}\\)，\\(\\mathrm{B}\\) の位置ベクトルをそれぞれ \\(\\vec{a}\\)，\\(\\vec{b}\\) とするとき，線分 \\(\\mathrm{AB}\\) を \\(m:n\\) に内分する点の位置ベクトルはどれか．",
    choices: [
      "\\(\\frac{m\\vec{a}+n\\vec{b}}{m+n}\\)",
      "\\(\\frac{n\\vec{a}+m\\vec{b}}{m+n}\\)",
      "\\(\\frac{\\vec{a}+\\vec{b}}{m+n}\\)",
      "\\(\\frac{m\\vec{a}-n\\vec{b}}{m+n}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "線分 \\(\\mathrm{AB}\\) を \\(m:n\\) に内分する点の位置ベクトルは，\\(\\frac{n\\vec{a}+m\\vec{b}}{m+n}\\) である．"
  },

  // =========================
  // 数学C：平面上の曲線
  // =========================
  {
    id: "entrance-mathc-plane-curves-001",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "\\(p>0\\) とする．放物線 \\(y^2=4px\\) の焦点はどれか．",
    choices: [
      "\\((p,0)\\)",
      "\\((-p,0)\\)",
      "\\((0,p)\\)",
      "\\((0,-p)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "放物線 \\(y^2=4px\\) の焦点は \\((p,0)\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-002",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "\\(p>0\\) とする．放物線 \\(y^2=4px\\) の準線はどれか．",
    choices: [
      "\\(x=p\\)",
      "\\(x=-p\\)",
      "\\(y=p\\)",
      "\\(y=-p\\)"
    ],
    correctIndex: 1,
    explanationHtml: "放物線 \\(y^2=4px\\) の準線は \\(x=-p\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-003",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "\\(a>b>0\\) とする．楕円 \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\) の長半径はどれか．",
    choices: [
      "\\(a\\)",
      "\\(b\\)",
      "\\(a^2\\)",
      "\\(b^2\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(a>b>0\\) であるから，長軸は \\(x\\) 軸方向であり，長半径は \\(a\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-004",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "楕円 \\(\\frac{x^2}{9}+\\frac{y^2}{4}=1\\) の長半径はどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(9\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(9=3^2\\)，\\(4=2^2\\) であるから，長半径は \\(3\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-005",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "双曲線 \\(\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\) の漸近線はどれか．",
    choices: [
      "\\(y=\\pm\\frac{a}{b}x\\)",
      "\\(y=\\pm\\frac{b}{a}x\\)",
      "\\(x=\\pm\\frac{b}{a}y\\)",
      "\\(y=\\pm abx\\)"
    ],
    correctIndex: 1,
    explanationHtml: "双曲線 \\(\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\) の漸近線は，\\(y=\\pm\\frac{b}{a}x\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-006",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "双曲線 \\(\\frac{x^2}{4}-\\frac{y^2}{9}=1\\) は，どちらの軸方向に開くか．",
    choices: [
      "\\(x\\) 軸方向",
      "\\(y\\) 軸方向",
      "原点を中心に円形に開く",
      "どちらにも開かない"
    ],
    correctIndex: 0,
    explanationHtml: "\\(x^2\\) の項が正であるから，双曲線は \\(x\\) 軸方向に開く．"
  },
  {
    id: "entrance-mathc-plane-curves-007",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "媒介変数 \\(t\\) により \\(x=t\\)，\\(y=t^2\\) と表される曲線を，\\(x,y\\) の方程式で表したものはどれか．",
    choices: [
      "\\(y=x\\)",
      "\\(y=x^2\\)",
      "\\(x=y^2\\)",
      "\\(x^2+y^2=1\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x=t\\) より \\(t=x\\) である．これを \\(y=t^2\\) に代入すると，\\(y=x^2\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-008",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "円 \\(x^2+y^2=4\\) の半径はどれか．",
    choices: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(16\\)"
    ],
    correctIndex: 1,
    explanationHtml: "円 \\(x^2+y^2=r^2\\) の半径は \\(r\\) である．\\(4=2^2\\) より，半径は \\(2\\) である．"
  },
  {
    id: "entrance-mathc-plane-curves-009",
    unitIds: ["mathc_plane_curves"],
    questionHtml: "\\(a>b>0\\) とする．楕円 \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\) の焦点はどの軸上にあるか．",
    choices: [
      "\\(x\\) 軸上",
      "\\(y\\) 軸上",
      "直線 \\(y=x\\) 上",
      "原点だけ"
    ],
    correctIndex: 0,
    explanationHtml: "\\(a>b>0\\) であるから，長軸は \\(x\\) 軸方向であり，焦点は \\(x\\) 軸上にある．"
  },

  // =========================
  // 数学C：複素数平面
  // =========================
  {
    id: "entrance-mathc-complex-plane-001",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(3+4i\\) の実部はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(3i\\)",
      "\\(4i\\)"
    ],
    correctIndex: 0,
    explanationHtml: "複素数 \\(a+bi\\) の実部は \\(a\\) である．したがって，\\(3+4i\\) の実部は \\(3\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-002",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(3+4i\\) の虚部はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(3i\\)",
      "\\(4i\\)"
    ],
    correctIndex: 1,
    explanationHtml: "複素数 \\(a+bi\\) の虚部は \\(b\\) である．したがって，\\(3+4i\\) の虚部は \\(4\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-003",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(3+4i\\) の絶対値はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(7\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(|3+4i|=\\sqrt{3^2+4^2}=5\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-004",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(1+i\\) の絶対値はどれか．",
    choices: [
      "\\(1\\)",
      "\\(\\sqrt{2}\\)",
      "\\(2\\)",
      "\\(1+\\sqrt{2}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(|1+i|=\\sqrt{1^2+1^2}=\\sqrt{2}\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-005",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(a+bi\\) の共役複素数はどれか．",
    choices: [
      "\\(a-bi\\)",
      "\\(-a+bi\\)",
      "\\(-a-bi\\)",
      "\\(b+ai\\)"
    ],
    correctIndex: 0,
    explanationHtml: "共役複素数は，虚部の符号を変えたものである．したがって，\\(a+bi\\) の共役複素数は \\(a-bi\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-006",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(z=r(\\cos\\theta+i\\sin\\theta)\\) の絶対値はどれか．",
    choices: [
      "\\(r\\)",
      "\\(\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(\\sin\\theta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "極形式 \\(z=r(\\cos\\theta+i\\sin\\theta)\\) における \\(r\\) は，複素数 \\(z\\) の絶対値を表す．"
  },
  {
    id: "entrance-mathc-complex-plane-007",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数平面において，\\(\\arg z\\) が表すものはどれか．",
    choices: [
      "\\(z\\) の絶対値",
      "\\(z\\) の実部",
      "\\(z\\) の虚部",
      "\\(z\\) の偏角"
    ],
    correctIndex: 3,
    explanationHtml: "\\(\\arg z\\) は，複素数 \\(z\\) の偏角を表す．"
  },
  {
    id: "entrance-mathc-complex-plane-008",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "ド・モアブルの定理として正しいものはどれか．",
    choices: [
      "\\((\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta\\)",
      "\\((\\cos\\theta+i\\sin\\theta)^n=\\cos\\theta+i\\sin\\theta\\)",
      "\\((\\cos\\theta+i\\sin\\theta)^n=n\\cos\\theta+in\\sin\\theta\\)",
      "\\((\\cos\\theta+i\\sin\\theta)^n=\\cos^n\\theta+i\\sin^n\\theta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "ド・モアブルの定理より，\\((\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-009",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(i\\) の偏角の1つはどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{\\pi}{2}\\)",
      "\\(\\pi\\)",
      "\\(\\frac{3\\pi}{2}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "複素数 \\(i\\) は複素数平面上の点 \\((0,1)\\) に対応するので，偏角の1つは \\(\\frac{\\pi}{2}\\) である．"
  },
  {
    id: "entrance-mathc-complex-plane-010",
    unitIds: ["mathc_complex_plane"],
    questionHtml: "複素数 \\(z=a+bi\\) の絶対値として正しいものはどれか．",
    choices: [
      "\\(a+b\\)",
      "\\(a^2+b^2\\)",
      "\\(\\sqrt{a^2+b^2}\\)",
      "\\(\\sqrt{a+b}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "複素数 \\(z=a+bi\\) の絶対値は，原点から点 \\((a,b)\\) までの距離なので，\\(|z|=\\sqrt{a^2+b^2}\\) である．"
  }
];
