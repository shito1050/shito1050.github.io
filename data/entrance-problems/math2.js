window.entranceProblemsMath2 = [
  // =========================
  // 数学II：いろいろな式
  // =========================
  {
    id: "entrance-math2-various-expressions-001",
    unitIds: ["math2_various_expressions"],
    questionHtml: "多項式 \\(P(x)\\) を \\(x-a\\) で割ったときの余りとして正しいものはどれか．",
    choices: [
      "\\(P(0)\\)",
      "\\(P(a)\\)",
      "\\(P(-a)\\)",
      "\\(P(1)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "剰余の定理より，多項式 \\(P(x)\\) を \\(x-a\\) で割ったときの余りは \\(P(a)\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-002",
    unitIds: ["math2_various_expressions"],
    questionHtml: "多項式 \\(P(x)\\) について \\(P(a)=0\\) が成り立つとき，\\(P(x)\\) が因数にもつものはどれか．",
    choices: [
      "\\(x+a\\)",
      "\\(x-a\\)",
      "\\(a-x^2\\)",
      "\\(x^2-a\\)"
    ],
    correctIndex: 1,
    explanationHtml: "因数定理より，\\(P(a)=0\\) ならば \\(P(x)\\) は \\(x-a\\) を因数にもつ．"
  },
  {
    id: "entrance-math2-various-expressions-003",
    unitIds: ["math2_various_expressions"],
    questionHtml: "方程式 \\(x^3-1=0\\) について，\\(x=1\\) は解であるか．",
    choices: [
      "解である",
      "解ではない",
      "\\(x=0\\) のときだけ解である",
      "\\(x=-1\\) のときだけ解である"
    ],
    correctIndex: 0,
    explanationHtml: "\\(x=1\\) を代入すると，\\(1^3-1=0\\) となる．したがって，\\(x=1\\) は解である．"
  },
  {
    id: "entrance-math2-various-expressions-004",
    unitIds: ["math2_various_expressions"],
    questionHtml: "2次方程式 \\(x^2-5x+6=0\\) の2つの解の和はどれか．",
    choices: [
      "\\(5\\)",
      "\\(6\\)",
      "\\(-5\\)",
      "\\(-6\\)"
    ],
    correctIndex: 0,
    explanationHtml: "2次方程式 \\(x^2-5x+6=0\\) の2つの解を \\(\\alpha,\\beta\\) とすると，解と係数の関係より \\(\\alpha+\\beta=5\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-005",
    unitIds: ["math2_various_expressions"],
    questionHtml: "2次方程式 \\(x^2-5x+6=0\\) の2つの解の積はどれか．",
    choices: [
      "\\(5\\)",
      "\\(6\\)",
      "\\(-5\\)",
      "\\(-6\\)"
    ],
    correctIndex: 1,
    explanationHtml: "2次方程式 \\(x^2-5x+6=0\\) の2つの解を \\(\\alpha,\\beta\\) とすると，解と係数の関係より \\(\\alpha\\beta=6\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-006",
    unitIds: ["math2_various_expressions"],
    questionHtml: "2つの解が \\(2,3\\) である2次方程式として正しいものはどれか．",
    choices: [
      "\\(x^2+5x+6=0\\)",
      "\\(x^2-5x+6=0\\)",
      "\\(x^2+5x-6=0\\)",
      "\\(x^2-6x+5=0\\)"
    ],
    correctIndex: 1,
    explanationHtml: "解が \\(2,3\\) であるから，\\((x-2)(x-3)=0\\) である．展開すると \\(x^2-5x+6=0\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-007",
    unitIds: ["math2_various_expressions"],
    questionHtml: "\\(i^2\\) の値はどれか．",
    choices: [
      "\\(1\\)",
      "\\(-1\\)",
      "\\(i\\)",
      "\\(-i\\)"
    ],
    correctIndex: 1,
    explanationHtml: "虚数単位 \\(i\\) は，\\(i^2=-1\\) を満たす数である．"
  },
  {
    id: "entrance-math2-various-expressions-008",
    unitIds: ["math2_various_expressions"],
    questionHtml: "\\((1+i)+(2-i)\\) を計算したものはどれか．",
    choices: [
      "\\(3\\)",
      "\\(3+2i\\)",
      "\\(-1\\)",
      "\\(1+3i\\)"
    ],
    correctIndex: 0,
    explanationHtml: "実部どうし，虚部どうしを加えると，\\((1+i)+(2-i)=3\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-009",
    unitIds: ["math2_various_expressions"],
    questionHtml: "\\(x=1\\) が方程式 \\(x^3-3x^2+ax+1=0\\) の解であるとき，\\(a\\) の値はどれか．",
    choices: [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x=1\\) を代入すると，\\(1-3+a+1=0\\) である．よって，\\(a=1\\) である．"
  },
  {
    id: "entrance-math2-various-expressions-010",
    unitIds: ["math2_various_expressions"],
    questionHtml: "2次方程式 \\(x^2+1=0\\) の解はどれか．",
    choices: [
      "\\(x=\\pm1\\)",
      "\\(x=\\pm i\\)",
      "\\(x=0,1\\)",
      "解なし"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x^2+1=0\\) より，\\(x^2=-1\\) である．したがって，解は \\(x=\\pm i\\) である．"
  },

  // =========================
  // 数学II：図形と方程式
  // =========================
  {
    id: "entrance-math2-geometry-and-equations-001",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "2点 \\((1,2)\\)，\\((4,2)\\) 間の距離はどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x\\) 座標の差が \\(3\\)，\\(y\\) 座標の差が \\(0\\) なので，距離は \\(3\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-002",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "2点 \\((0,0)\\)，\\((3,4)\\) 間の距離はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(7\\)"
    ],
    correctIndex: 2,
    explanationHtml: "2点間の距離は \\(\\sqrt{3^2+4^2}=5\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-003",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "直線 \\(y=2x+1\\) の傾きはどれか．",
    choices: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(-1\\)",
      "\\(-2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "直線 \\(y=mx+n\\) の傾きは \\(m\\) である．したがって，\\(y=2x+1\\) の傾きは \\(2\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-004",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "円 \\((x+1)^2+(y-2)^2=9\\) の中心と半径として正しいものはどれか．",
    choices: [
      "中心 \\((1,-2)\\)，半径 \\(9\\)",
      "中心 \\((-1,2)\\)，半径 \\(3\\)",
      "中心 \\((1,-2)\\)，半径 \\(3\\)",
      "中心 \\((-1,2)\\)，半径 \\(9\\)"
    ],
    correctIndex: 1,
    explanationHtml: "円 \\((x-a)^2+(y-b)^2=r^2\\) の中心は \\((a,b)\\)，半径は \\(r\\) である．したがって，中心は \\((-1,2)\\)，半径は \\(3\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-005",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "点 \\((1,3)\\) を通り，傾きが \\(2\\) である直線の方程式はどれか．",
    choices: [
      "\\(y=2x+1\\)",
      "\\(y=2x-1\\)",
      "\\(y=x+2\\)",
      "\\(y=-2x+5\\)"
    ],
    correctIndex: 0,
    explanationHtml: "直線を \\(y=2x+b\\) とおく．点 \\((1,3)\\) を通るので，\\(3=2\\cdot1+b\\) より \\(b=1\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-006",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "円 \\((x-3)^2+y^2=4\\) の中心と半径として正しいものはどれか．",
    choices: [
      "中心 \\((3,0)\\)，半径 \\(2\\)",
      "中心 \\((-3,0)\\)，半径 \\(2\\)",
      "中心 \\((3,0)\\)，半径 \\(4\\)",
      "中心 \\((0,3)\\)，半径 \\(2\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\((x-3)^2+(y-0)^2=2^2\\) とみると，中心は \\((3,0)\\)，半径は \\(2\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-007",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "円 \\(x^2+(y+1)^2=16\\) の中心と半径として正しいものはどれか．",
    choices: [
      "中心 \\((0,1)\\)，半径 \\(4\\)",
      "中心 \\((0,-1)\\)，半径 \\(4\\)",
      "中心 \\((1,0)\\)，半径 \\(16\\)",
      "中心 \\((-1,0)\\)，半径 \\(16\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\((x-0)^2+(y+1)^2=4^2\\) とみると，中心は \\((0,-1)\\)，半径は \\(4\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-008",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "2点 \\((x_1,y_1)\\)，\\((x_2,y_2)\\) 間の距離の公式はどれか．",
    choices: [
      "\\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\)",
      "\\((x_2-x_1)+(y_2-y_1)\\)",
      "\\(\\frac{x_1+x_2}{2}+\\frac{y_1+y_2}{2}\\)",
      "\\(\\sqrt{x_1^2+y_1^2}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "2点間の距離は，三平方の定理より \\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\) である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-009",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "2点 \\((x_1,y_1)\\)，\\((x_2,y_2)\\) の中点の座標はどれか．",
    choices: [
      "\\(\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)\\)",
      "\\(\\left(x_2-x_1,y_2-y_1\\right)\\)",
      "\\(\\left(\\frac{x_2-x_1}{2},\\frac{y_2-y_1}{2}\\right)\\)",
      "\\(\\left(x_1+x_2,y_1+y_2\\right)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "中点の座標は，それぞれの座標の平均である．"
  },
  {
    id: "entrance-math2-geometry-and-equations-010",
    unitIds: ["math2_geometry_and_equations"],
    questionHtml: "点 \\((x_0,y_0)\\) と直線 \\(ax+by+c=0\\) の距離の公式はどれか．",
    choices: [
      "\\(\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}\\)",
      "\\(\\frac{ax_0+by_0+c}{a+b}\\)",
      "\\(\\sqrt{(x_0-a)^2+(y_0-b)^2}\\)",
      "\\(|ax_0+by_0+c|\\)"
    ],
    correctIndex: 0,
    explanationHtml: "点 \\((x_0,y_0)\\) と直線 \\(ax+by+c=0\\) の距離は，\\(\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}\\) である．"
  },

  // =========================
  // 数学II：指数関数・対数関数
  // =========================
  {
    id: "entrance-math2-exponential-logarithmic-functions-001",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(2^3\\) の値はどれか．",
    choices: [
      "\\(5\\)",
      "\\(6\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(2^3=2\\cdot2\\cdot2=8\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-002",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(10^0\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(10\\)",
      "定義されない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(a\\ne0\\) のとき，\\(a^0=1\\) である．したがって，\\(10^0=1\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-003",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0\\) とする．\\(a^m a^n\\) を簡単にしたものはどれか．",
    choices: [
      "\\(a^{mn}\\)",
      "\\(a^{m+n}\\)",
      "\\(a^{m-n}\\)",
      "\\(a^{\\frac{m}{n}}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "指数法則より，\\(a^m a^n=a^{m+n}\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-004",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0\\) とする．\\(\\frac{a^m}{a^n}\\) を簡単にしたものはどれか．",
    choices: [
      "\\(a^{m+n}\\)",
      "\\(a^{mn}\\)",
      "\\(a^{m-n}\\)",
      "\\(a^{n-m}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "指数法則より，\\(\\frac{a^m}{a^n}=a^{m-n}\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-005",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0\\) とする．\\((a^m)^n\\) を簡単にしたものはどれか．",
    choices: [
      "\\(a^{m+n}\\)",
      "\\(a^{m-n}\\)",
      "\\(a^{mn}\\)",
      "\\(a^{\\frac{m}{n}}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "指数法則より，\\((a^m)^n=a^{mn}\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-006",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0,\\ a\\ne1,\\ M>0,\\ N>0\\) とする．\\(\\log_a MN\\) を展開したものはどれか．",
    choices: [
      "\\(\\log_a M+\\log_a N\\)",
      "\\(\\log_a M-\\log_a N\\)",
      "\\(\\log_a M\\log_a N\\)",
      "\\(\\frac{\\log_a M}{\\log_a N}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "対数の性質より，\\(\\log_a MN=\\log_a M+\\log_a N\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-007",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0,\\ a\\ne1,\\ M>0,\\ N>0\\) とする．\\(\\log_a\\frac{M}{N}\\) を展開したものはどれか．",
    choices: [
      "\\(\\log_a M+\\log_a N\\)",
      "\\(\\log_a M-\\log_a N\\)",
      "\\(\\log_a N-\\log_a M\\)",
      "\\(\\frac{\\log_a M}{\\log_a N}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "対数の性質より，\\(\\log_a\\frac{M}{N}=\\log_a M-\\log_a N\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-008",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0,\\ a\\ne1,\\ M>0\\) とする．\\(\\log_a M^r\\) を展開したものはどれか．",
    choices: [
      "\\(\\log_a M+r\\)",
      "\\(r\\log_a M\\)",
      "\\(\\frac{1}{r}\\log_a M\\)",
      "\\(\\log_a rM\\)"
    ],
    correctIndex: 1,
    explanationHtml: "対数の性質より，\\(\\log_a M^r=r\\log_a M\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-009",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(\\log_2 8\\) の値はどれか．",
    choices: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(8\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(2^3=8\\) であるから，\\(\\log_2 8=3\\) である．"
  },
  {
    id: "entrance-math2-exponential-logarithmic-functions-010",
    unitIds: ["math2_exponential_logarithmic_functions"],
    questionHtml: "\\(a>0,\\ a\\ne1,\\ b>0,\\ c>0,\\ c\\ne1\\) とする．底の変換公式として正しいものはどれか．",
    choices: [
      "\\(\\log_a b=\\frac{\\log_c b}{\\log_c a}\\)",
      "\\(\\log_a b=\\frac{\\log_c a}{\\log_c b}\\)",
      "\\(\\log_a b=\\log_c a+\\log_c b\\)",
      "\\(\\log_a b=\\log_c a-\\log_c b\\)"
    ],
    correctIndex: 0,
    explanationHtml: "底の変換公式より，\\(\\log_a b=\\frac{\\log_c b}{\\log_c a}\\) である．"
  },

  // =========================
  // 数学II：三角関数
  // =========================
  {
    id: "entrance-math2-trigonometric-functions-001",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(180^\\circ\\) を弧度法で表したものはどれか．",
    choices: [
      "\\(\\frac{\\pi}{2}\\)",
      "\\(\\pi\\)",
      "\\(2\\pi\\)",
      "\\(180\\pi\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(180^\\circ=\\pi\\) ラジアンである．"
  },
  {
    id: "entrance-math2-trigonometric-functions-002",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(90^\\circ\\) を弧度法で表したものはどれか．",
    choices: [
      "\\(\\frac{\\pi}{6}\\)",
      "\\(\\frac{\\pi}{4}\\)",
      "\\(\\frac{\\pi}{2}\\)",
      "\\(\\pi\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(90^\\circ=\\frac{\\pi}{2}\\) ラジアンである．"
  },
  {
    id: "entrance-math2-trigonometric-functions-003",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin0\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(-1\\)"
    ],
    correctIndex: 0,
    explanationHtml: "単位円で考えると，\\(\\sin0=0\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-004",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\cos0\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(-1\\)"
    ],
    correctIndex: 2,
    explanationHtml: "単位円で考えると，\\(\\cos0=1\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-005",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin\\pi\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(-1\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(\\pi\\) は \\(180^\\circ\\) に対応する．したがって，\\(\\sin\\pi=0\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-006",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\cos\\pi\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(\\frac{1}{2}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(\\pi\\) は \\(180^\\circ\\) に対応する．したがって，\\(\\cos\\pi=-1\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-007",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin(\\alpha+\\beta)\\) の加法定理として正しいものはどれか．",
    choices: [
      "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\sin\\beta+\\cos\\alpha\\cos\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha+\\sin\\beta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "正弦の加法定理より，\\(\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-008",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\cos(\\alpha+\\beta)\\) の加法定理として正しいものはどれか．",
    choices: [
      "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha+\\cos\\beta\\)"
    ],
    correctIndex: 1,
    explanationHtml: "余弦の加法定理より，\\(\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-009",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\tan(\\alpha+\\beta)\\) の加法定理として正しいものはどれか．ただし，右辺が定義される場合を考える．",
    choices: [
      "\\(\\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)",
      "\\(\\frac{\\tan\\alpha-\\tan\\beta}{1+\\tan\\alpha\\tan\\beta}\\)",
      "\\(\\tan\\alpha+\\tan\\beta\\)",
      "\\(\\tan\\alpha\\tan\\beta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "正接の加法定理より，\\(\\tan(\\alpha+\\beta)=\\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-010",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin^2\\theta+\\cos^2\\theta\\) を簡単にしたものはどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)"
    ],
    correctIndex: 1,
    explanationHtml: "三角関数の基本公式より，\\(\\sin^2\\theta+\\cos^2\\theta=1\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-011",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\sin(\\theta+2\\pi)\\) を簡単にしたものはどれか．",
    choices: [
      "\\(\\sin\\theta\\)",
      "\\(-\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\cos\\theta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(\\sin x\\) の周期は \\(2\\pi\\) であるから，\\(\\sin(\\theta+2\\pi)=\\sin\\theta\\) である．"
  },
  {
    id: "entrance-math2-trigonometric-functions-012",
    unitIds: ["math2_trigonometric_functions"],
    questionHtml: "\\(\\cos(\\theta+2\\pi)\\) を簡単にしたものはどれか．",
    choices: [
      "\\(\\cos\\theta\\)",
      "\\(-\\cos\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(-\\sin\\theta\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(\\cos x\\) の周期は \\(2\\pi\\) であるから，\\(\\cos(\\theta+2\\pi)=\\cos\\theta\\) である．"
  },

  // =========================
  // 数学II：微分・積分
  // =========================
  {
    id: "entrance-math2-differentiation-integration-001",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "関数 \\(y=x^2\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=x\\)",
      "\\(y^{\\prime}=2x\\)",
      "\\(y^{\\prime}=x^3\\)",
      "\\(y^{\\prime}=2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x^n\\) の導関数は \\(nx^{n-1}\\) である．したがって，\\(y=x^2\\) の導関数は \\(y^{\\prime}=2x\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-002",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "関数 \\(y=3x^2\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=3x\\)",
      "\\(y^{\\prime}=6x\\)",
      "\\(y^{\\prime}=x^3\\)",
      "\\(y^{\\prime}=6x^2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "定数倍はそのまま残して微分する．\\(y=3x^2\\) の導関数は \\(y^{\\prime}=6x\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-003",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "関数 \\(y=x^3\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=3x^2\\)",
      "\\(y^{\\prime}=x^2\\)",
      "\\(y^{\\prime}=3x\\)",
      "\\(y^{\\prime}=x^4\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(x^n\\) の導関数は \\(nx^{n-1}\\) である．したがって，\\(y=x^3\\) の導関数は \\(y^{\\prime}=3x^2\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-004",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "不定積分 \\(\\int 2x\\,dx\\) はどれか．",
    choices: [
      "\\(x^2+C\\)",
      "\\(2x^2+C\\)",
      "\\(x+C\\)",
      "\\(2+C\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(x^2\\) を微分すると \\(2x\\) になるので，\\(\\int 2x\\,dx=x^2+C\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-005",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "不定積分 \\(\\int 1\\,dx\\) はどれか．",
    choices: [
      "\\(1+C\\)",
      "\\(x+C\\)",
      "\\(x^2+C\\)",
      "\\(0\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x\\) を微分すると \\(1\\) になるので，\\(\\int 1\\,dx=x+C\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-006",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "曲線 \\(y=x^2\\) 上の \\(x=1\\) における接線の傾きはどれか．",
    choices: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(y=x^2\\) を微分すると \\(y^{\\prime}=2x\\) である．\\(x=1\\) を代入して，接線の傾きは \\(2\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-007",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "定積分 \\(\\int_0^1 2x\\,dx\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\int_0^1 2x\\,dx=[x^2]_0^1=1\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-008",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "関数 \\(y=x^n\\) の導関数として正しいものはどれか．",
    choices: [
      "\\(y^{\\prime}=x^{n-1}\\)",
      "\\(y^{\\prime}=nx^{n-1}\\)",
      "\\(y^{\\prime}=nx^n\\)",
      "\\(y^{\\prime}=x^{n+1}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "整式の微分の基本公式より，\\(y=x^n\\) の導関数は \\(y^{\\prime}=nx^{n-1}\\) である．"
  },
  {
    id: "entrance-math2-differentiation-integration-009",
    unitIds: ["math2_differentiation_integration"],
    questionHtml: "\\(n\\ne-1\\) とする．不定積分 \\(\\int x^n\\,dx\\) として正しいものはどれか．",
    choices: [
      "\\(nx^{n-1}+C\\)",
      "\\(\\frac{x^{n+1}}{n+1}+C\\)",
      "\\(\\frac{x^{n-1}}{n-1}+C\\)",
      "\\(x^{n+1}+C\\)"
    ],
    correctIndex: 1,
    explanationHtml: "不定積分の基本公式より，\\(n\\ne-1\\) のとき，\\(\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\) である．"
  }
];
