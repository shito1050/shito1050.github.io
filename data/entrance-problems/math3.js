window.entranceProblemsMath3 = [
  // =========================
  // 数学III：極限
  // =========================
  {
    id: "entrance-math3-limits-001",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}x\\) の値はどれか．",
    choices: [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x\\) が \\(0\\) に近づくと，\\(x\\) の値も \\(0\\) に近づく．したがって，\\(\\lim_{x\\to0}x=0\\) である．"
  },
  {
    id: "entrance-math3-limits-002",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}(x+1)\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x+1\\) は \\(x=0\\) で連続であるから，\\(x=0\\) を代入して \\(1\\) である．"
  },
  {
    id: "entrance-math3-limits-003",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to1}x^2\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(x^2\\) は \\(x=1\\) で連続であるから，\\(x=1\\) を代入して \\(1\\) である．"
  },
  {
    id: "entrance-math3-limits-004",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}\\frac{\\sin x}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "三角関数の基本的な極限より，\\(\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\) である．"
  },
  {
    id: "entrance-math3-limits-005",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}\\frac{e^x-1}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(e\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "指数関数に関する基本的な極限より，\\(\\lim_{x\\to0}\\frac{e^x-1}{x}=1\\) である．"
  },
  {
    id: "entrance-math3-limits-006",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}\\frac{\\log(1+x)}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "対数関数に関する基本的な極限より，\\(\\lim_{x\\to0}\\frac{\\log(1+x)}{x}=1\\) である．"
  },
  {
    id: "entrance-math3-limits-007",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to\\infty}\\frac{1}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\infty\\)",
      "存在しない"
    ],
    correctIndex: 0,
    explanationHtml: "\\(x\\) が限りなく大きくなると，\\(\\frac{1}{x}\\) は \\(0\\) に近づく．"
  },
  {
    id: "entrance-math3-limits-008",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to\\infty}\\frac{x+1}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\infty\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\frac{x+1}{x}=1+\\frac{1}{x}\\) であり，\\(x\\to\\infty\\) のとき \\(\\frac{1}{x}\\to0\\) であるから，極限は \\(1\\) である．"
  },
  {
    id: "entrance-math3-limits-009",
    unitIds: ["math3_limits"],
    questionHtml: "数列 \\(\\left(\\frac{1}{2}\\right)^n\\) の極限はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(\\infty\\)"
    ],
    correctIndex: 0,
    explanationHtml: "公比の絶対値が \\(1\\) より小さい等比数列は \\(0\\) に収束する．"
  },
  {
    id: "entrance-math3-limits-010",
    unitIds: ["math3_limits"],
    questionHtml: "\\(\\lim_{x\\to0}\\frac{\\tan x}{x}\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "存在しない"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\tan x=\\frac{\\sin x}{\\cos x}\\) より，\\(\\frac{\\tan x}{x}=\\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x}\\) である．したがって，極限は \\(1\\) である．"
  },

  // =========================
  // 数学III：微分法
  // =========================
  {
    id: "entrance-math3-differentiation-001",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=\\sin x\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=\\cos x\\)",
      "\\(y^{\\prime}=-\\cos x\\)",
      "\\(y^{\\prime}=\\sin x\\)",
      "\\(y^{\\prime}=-\\sin x\\)"
    ],
    correctIndex: 0,
    explanationHtml: "三角関数の微分公式より，\\((\\sin x)^{\\prime}=\\cos x\\) である．"
  },
  {
    id: "entrance-math3-differentiation-002",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=\\cos x\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=\\sin x\\)",
      "\\(y^{\\prime}=-\\sin x\\)",
      "\\(y^{\\prime}=\\cos x\\)",
      "\\(y^{\\prime}=-\\cos x\\)"
    ],
    correctIndex: 1,
    explanationHtml: "三角関数の微分公式より，\\((\\cos x)^{\\prime}=-\\sin x\\) である．"
  },
  {
    id: "entrance-math3-differentiation-003",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=e^x\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=e^x\\)",
      "\\(y^{\\prime}=xe^{x-1}\\)",
      "\\(y^{\\prime}=\\log x\\)",
      "\\(y^{\\prime}=\\frac{1}{x}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "自然指数関数は微分しても変わらないので，\\((e^x)^{\\prime}=e^x\\) である．"
  },
  {
    id: "entrance-math3-differentiation-004",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=\\log x\\) を微分したものはどれか．ただし，\\(x>0\\) とする．",
    choices: [
      "\\(y^{\\prime}=x\\)",
      "\\(y^{\\prime}=\\frac{1}{x}\\)",
      "\\(y^{\\prime}=\\log x\\)",
      "\\(y^{\\prime}=e^x\\)"
    ],
    correctIndex: 1,
    explanationHtml: "対数関数の微分公式より，\\((\\log x)^{\\prime}=\\frac{1}{x}\\) である．"
  },
  {
    id: "entrance-math3-differentiation-005",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=x^4\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=x^3\\)",
      "\\(y^{\\prime}=3x^2\\)",
      "\\(y^{\\prime}=4x^3\\)",
      "\\(y^{\\prime}=4x^4\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x^n\\) の導関数は \\(nx^{n-1}\\) である．したがって，\\(y=x^4\\) の導関数は \\(y^{\\prime}=4x^3\\) である．"
  },
  {
    id: "entrance-math3-differentiation-006",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=\\tan x\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=\\cos^2x\\)",
      "\\(y^{\\prime}=\\frac{1}{\\cos^2x}\\)",
      "\\(y^{\\prime}=-\\frac{1}{\\sin^2x}\\)",
      "\\(y^{\\prime}=\\sin x\\)"
    ],
    correctIndex: 1,
    explanationHtml: "三角関数の微分公式より，\\((\\tan x)^{\\prime}=\\frac{1}{\\cos^2x}\\) である．"
  },
  {
    id: "entrance-math3-differentiation-007",
    unitIds: ["math3_differentiation"],
    questionHtml: "2つの関数 \\(f(x),g(x)\\) の積 \\(f(x)g(x)\\) の導関数として正しいものはどれか．",
    choices: [
      "\\(f^{\\prime}(x)g^{\\prime}(x)\\)",
      "\\(f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)\\)",
      "\\(f^{\\prime}(x)+g^{\\prime}(x)\\)",
      "\\(f(x)g(x)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "積の微分法より，\\(\\{f(x)g(x)\\}^{\\prime}=f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)\\) である．"
  },
  {
    id: "entrance-math3-differentiation-008",
    unitIds: ["math3_differentiation"],
    questionHtml: "2つの関数 \\(f(x),g(x)\\) について，\\(\\frac{f(x)}{g(x)}\\) の導関数として正しいものはどれか．ただし，\\(g(x)\\ne0\\) とする．",
    choices: [
      "\\(\\frac{f^{\\prime}(x)g(x)-f(x)g^{\\prime}(x)}{\\{g(x)\\}^2}\\)",
      "\\(\\frac{f^{\\prime}(x)}{g^{\\prime}(x)}\\)",
      "\\(\\frac{f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)}{\\{g(x)\\}^2}\\)",
      "\\(\\frac{f(x)}{g^{\\prime}(x)}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "商の微分法より，\\(\\left\\{\\frac{f(x)}{g(x)}\\right\\}^{\\prime}=\\frac{f^{\\prime}(x)g(x)-f(x)g^{\\prime}(x)}{\\{g(x)\\}^2}\\) である．"
  },
  {
    id: "entrance-math3-differentiation-009",
    unitIds: ["math3_differentiation"],
    questionHtml: "\\(y=f(g(x))\\) の導関数として正しいものはどれか．",
    choices: [
      "\\(y^{\\prime}=f^{\\prime}(x)g^{\\prime}(x)\\)",
      "\\(y^{\\prime}=f^{\\prime}(g(x))g^{\\prime}(x)\\)",
      "\\(y^{\\prime}=f(g^{\\prime}(x))\\)",
      "\\(y^{\\prime}=f(x)+g(x)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "合成関数の微分法より，\\(y=f(g(x))\\) の導関数は \\(y^{\\prime}=f^{\\prime}(g(x))g^{\\prime}(x)\\) である．"
  },
  {
    id: "entrance-math3-differentiation-010",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=e^{2x}\\) を微分したものはどれか．",
    choices: [
      "\\(y^{\\prime}=e^{2x}\\)",
      "\\(y^{\\prime}=2e^{2x}\\)",
      "\\(y^{\\prime}=2xe^{2x}\\)",
      "\\(y^{\\prime}=e^x\\)"
    ],
    correctIndex: 1,
    explanationHtml: "合成関数の微分法より，\\((e^{2x})^{\\prime}=2e^{2x}\\) である．"
  },
  {
    id: "entrance-math3-differentiation-011",
    unitIds: ["math3_differentiation"],
    questionHtml: "関数 \\(y=\\log(2x)\\) を微分したものはどれか．ただし，\\(x>0\\) とする．",
    choices: [
      "\\(y^{\\prime}=\\frac{1}{2x}\\)",
      "\\(y^{\\prime}=\\frac{1}{x}\\)",
      "\\(y^{\\prime}=2x\\)",
      "\\(y^{\\prime}=\\log2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\log(2x)=\\log2+\\log x\\) であるから，\\(y^{\\prime}=\\frac{1}{x}\\) である．"
  },

  // =========================
  // 数学III：積分法
  // =========================
  {
    id: "entrance-math3-integration-001",
    unitIds: ["math3_integration"],
    questionHtml: "不定積分 \\(\\int x^2\\,dx\\) はどれか．",
    choices: [
      "\\(2x+C\\)",
      "\\(\\frac{1}{2}x^2+C\\)",
      "\\(\\frac{1}{3}x^3+C\\)",
      "\\(3x^3+C\\)"
    ],
    correctIndex: 2,
    explanationHtml: "\\(x^2\\) の不定積分は，\\(\\int x^2\\,dx=\\frac{1}{3}x^3+C\\) である．"
  },
  {
    id: "entrance-math3-integration-002",
    unitIds: ["math3_integration"],
    questionHtml: "不定積分 \\(\\int \\cos x\\,dx\\) はどれか．",
    choices: [
      "\\(\\sin x+C\\)",
      "\\(-\\sin x+C\\)",
      "\\(\\cos x+C\\)",
      "\\(-\\cos x+C\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(\\sin x\\) を微分すると \\(\\cos x\\) になるので，\\(\\int \\cos x\\,dx=\\sin x+C\\) である．"
  },
  {
    id: "entrance-math3-integration-003",
    unitIds: ["math3_integration"],
    questionHtml: "不定積分 \\(\\int \\sin x\\,dx\\) はどれか．",
    choices: [
      "\\(\\cos x+C\\)",
      "\\(-\\cos x+C\\)",
      "\\(\\sin x+C\\)",
      "\\(-\\sin x+C\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(-\\cos x\\) を微分すると \\(\\sin x\\) になるので，\\(\\int \\sin x\\,dx=-\\cos x+C\\) である．"
  },
  {
    id: "entrance-math3-integration-004",
    unitIds: ["math3_integration"],
    questionHtml: "不定積分 \\(\\int e^x\\,dx\\) はどれか．",
    choices: [
      "\\(e^x+C\\)",
      "\\(xe^x+C\\)",
      "\\(\\log x+C\\)",
      "\\(\\frac{1}{x}+C\\)"
    ],
    correctIndex: 0,
    explanationHtml: "\\(e^x\\) は積分しても \\(e^x\\) であるから，\\(\\int e^x\\,dx=e^x+C\\) である．"
  },
  {
    id: "entrance-math3-integration-005",
    unitIds: ["math3_integration"],
    questionHtml: "不定積分 \\(\\int \\frac{1}{x}\\,dx\\) はどれか．",
    choices: [
      "\\(\\frac{1}{x^2}+C\\)",
      "\\(\\log|x|+C\\)",
      "\\(e^x+C\\)",
      "\\(x+C\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\log|x|\\) を微分すると \\(\\frac{1}{x}\\) になるので，\\(\\int \\frac{1}{x}\\,dx=\\log|x|+C\\) である．"
  },
  {
    id: "entrance-math3-integration-006",
    unitIds: ["math3_integration"],
    questionHtml: "2つの関数 \\(f(x),g(x)\\) について，部分積分の公式として正しいものはどれか．",
    choices: [
      "\\(\\int f^{\\prime}(x)g(x)\\,dx=f(x)g(x)-\\int f(x)g^{\\prime}(x)\\,dx\\)",
      "\\(\\int f^{\\prime}(x)g(x)\\,dx=f(x)g(x)+\\int f(x)g^{\\prime}(x)\\,dx\\)",
      "\\(\\int f(x)g(x)\\,dx=\\int f(x)\\,dx\\int g(x)\\,dx\\)",
      "\\(\\int f^{\\prime}(x)g^{\\prime}(x)\\,dx=f(x)g(x)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "部分積分の公式は，\\(\\int f^{\\prime}(x)g(x)\\,dx=f(x)g(x)-\\int f(x)g^{\\prime}(x)\\,dx\\) である．"
  },
  {
    id: "entrance-math3-integration-007",
    unitIds: ["math3_integration"],
    questionHtml: "定積分 \\(\\int_0^1 x\\,dx\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "\\(\\int_0^1 x\\,dx=\\left[\\frac{1}{2}x^2\\right]_0^1=\\frac{1}{2}\\) である．"
  },
  {
    id: "entrance-math3-integration-008",
    unitIds: ["math3_integration"],
    questionHtml: "定積分の性質として，\\(\\int_a^b f(x)\\,dx=-\\int_b^a f(x)\\,dx\\) は正しいか．",
    choices: [
      "正しい",
      "正しくない",
      "\\(a=0\\) のときだけ正しい",
      "\\(b=0\\) のときだけ正しい"
    ],
    correctIndex: 0,
    explanationHtml: "積分区間の向きを逆にすると，定積分の符号は反対になる．"
  },
  {
    id: "entrance-math3-integration-009",
    unitIds: ["math3_integration"],
    questionHtml: "定積分 \\(\\int_a^a f(x)\\,dx\\) の値はどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(a\\)",
      "\\(f(a)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "積分区間の幅が \\(0\\) であるから，\\(\\int_a^a f(x)\\,dx=0\\) である．"
  }
];
