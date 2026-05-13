window.entranceProblemsMathB = [
  // =========================
  // 数学B：数列
  // =========================
  {
    id: "entrance-mathb-sequences-001",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(a\\)，公差 \\(d\\) の等差数列の一般項 \\(a_n\\) として正しいものはどれか．",
    choices: [
      "\\(a_n=a+nd\\)",
      "\\(a_n=a+(n-1)d\\)",
      "\\(a_n=ad^{n-1}\\)",
      "\\(a_n=ar^{n-1}\\)"
    ],
    correctIndex: 1,
    explanationHtml: "初項 \\(a\\)，公差 \\(d\\) の等差数列の一般項は，\\(a_n=a+(n-1)d\\) である．"
  },
  {
    id: "entrance-mathb-sequences-002",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(a\\)，公差 \\(d\\) の等差数列の初めから \\(n\\) 項までの和 \\(S_n\\) として正しいものはどれか．",
    choices: [
      "\\(S_n=\\frac{n}{2}\\{2a+(n-1)d\\}\\)",
      "\\(S_n=\\frac{n}{2}\\{a+(n-1)d\\}\\)",
      "\\(S_n=a+(n-1)d\\)",
      "\\(S_n=\\frac{a(1-r^n)}{1-r}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "等差数列の和の公式より，\\(S_n=\\frac{n}{2}\\{2a+(n-1)d\\}\\) である．"
  },
  {
    id: "entrance-mathb-sequences-003",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(a\\)，公比 \\(r\\) の等比数列の一般項 \\(a_n\\) として正しいものはどれか．",
    choices: [
      "\\(a_n=a+(n-1)r\\)",
      "\\(a_n=ar^{n-1}\\)",
      "\\(a_n=ar^n\\)",
      "\\(a_n=nr\\)"
    ],
    correctIndex: 1,
    explanationHtml: "初項 \\(a\\)，公比 \\(r\\) の等比数列の一般項は，\\(a_n=ar^{n-1}\\) である．"
  },
  {
    id: "entrance-mathb-sequences-004",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(a\\)，公比 \\(r\\ne1\\) の等比数列の初めから \\(n\\) 項までの和 \\(S_n\\) として正しいものはどれか．",
    choices: [
      "\\(S_n=\\frac{a(1-r^n)}{1-r}\\)",
      "\\(S_n=ar^{n-1}\\)",
      "\\(S_n=\\frac{n}{2}\\{2a+(n-1)r\\}\\)",
      "\\(S_n=a+(n-1)r\\)"
    ],
    correctIndex: 0,
    explanationHtml: "等比数列の和の公式より，\\(r\\ne1\\) のとき，\\(S_n=\\frac{a(1-r^n)}{1-r}\\) である．"
  },
  {
    id: "entrance-mathb-sequences-005",
    unitIds: ["mathb_sequences"],
    questionHtml: "\\(1+2+\\cdots+n\\) の和として正しいものはどれか．",
    choices: [
      "\\(n^2\\)",
      "\\(\\frac{1}{2}n(n+1)\\)",
      "\\(\\frac{1}{2}n(n-1)\\)",
      "\\(2n+1\\)"
    ],
    correctIndex: 1,
    explanationHtml: "自然数の和の公式より，\\(1+2+\\cdots+n=\\frac{1}{2}n(n+1)\\) である．"
  },
  {
    id: "entrance-mathb-sequences-006",
    unitIds: ["mathb_sequences"],
    questionHtml: "\\(\\sum_{k=1}^{3}k\\) の値はどれか．",
    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correctIndex: 3,
    explanationHtml: "\\(\\sum_{k=1}^{3}k=1+2+3=6\\) である．"
  },
  {
    id: "entrance-mathb-sequences-007",
    unitIds: ["mathb_sequences"],
    questionHtml: "数列 \\(2,4,6,8,\\cdots\\) の第5項はどれか．",
    choices: [
      "\\(8\\)",
      "\\(9\\)",
      "\\(10\\)",
      "\\(12\\)"
    ],
    correctIndex: 2,
    explanationHtml: "初項 \\(2\\)，公差 \\(2\\) の等差数列なので，第5項は \\(2+4\\cdot2=10\\) である．"
  },
  {
    id: "entrance-mathb-sequences-008",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(3\\)，公差 \\(2\\) の等差数列の第4項はどれか．",
    choices: [
      "\\(7\\)",
      "\\(8\\)",
      "\\(9\\)",
      "\\(11\\)"
    ],
    correctIndex: 2,
    explanationHtml: "等差数列の一般項より，第4項は \\(3+(4-1)\\cdot2=9\\) である．"
  },
  {
    id: "entrance-mathb-sequences-009",
    unitIds: ["mathb_sequences"],
    questionHtml: "初項 \\(2\\)，公比 \\(3\\) の等比数列の第3項はどれか．",
    choices: [
      "\\(6\\)",
      "\\(9\\)",
      "\\(18\\)",
      "\\(27\\)"
    ],
    correctIndex: 2,
    explanationHtml: "等比数列の一般項より，第3項は \\(2\\cdot3^{3-1}=18\\) である．"
  },
  {
    id: "entrance-mathb-sequences-010",
    unitIds: ["mathb_sequences"],
    questionHtml: "\\(\\sum_{k=1}^{n}k\\) として正しいものはどれか．",
    choices: [
      "\\(\\frac{1}{2}n(n+1)\\)",
      "\\(\\frac{1}{2}n(n-1)\\)",
      "\\(n^2+n+1\\)",
      "\\(2n\\)"
    ],
    correctIndex: 0,
    explanationHtml: "自然数の和の公式より，\\(\\sum_{k=1}^{n}k=\\frac{1}{2}n(n+1)\\) である．"
  },

  // =========================
  // 数学B：統計的な推測
  // =========================
  {
    id: "entrance-mathb-statistical-inference-001",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "確率変数 \\(X\\) が二項分布 \\(B(n,p)\\) に従うとき，\\(X\\) の期待値として正しいものはどれか．",
    choices: [
      "\\(p\\)",
      "\\(np\\)",
      "\\(np(1-p)\\)",
      "\\(n(1-p)\\)"
    ],
    correctIndex: 1,
    explanationHtml: "二項分布 \\(B(n,p)\\) に従う確率変数 \\(X\\) の期待値は，\\(E(X)=np\\) である．"
  },
  {
    id: "entrance-mathb-statistical-inference-002",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "確率変数 \\(X\\) が二項分布 \\(B(n,p)\\) に従うとき，\\(X\\) の分散として正しいものはどれか．",
    choices: [
      "\\(np\\)",
      "\\(p(1-p)\\)",
      "\\(np(1-p)\\)",
      "\\(n+p\\)"
    ],
    correctIndex: 2,
    explanationHtml: "二項分布 \\(B(n,p)\\) に従う確率変数 \\(X\\) の分散は，\\(V(X)=np(1-p)\\) である．"
  },
  {
    id: "entrance-mathb-statistical-inference-003",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "確率変数 \\(X\\) が二項分布 \\(B\\left(3,\\frac{1}{2}\\right)\\) に従うとき，\\(X\\) のとり得る値として正しいものはどれか．",
    choices: [
      "\\(0,1,2,3\\)",
      "\\(1,2,3\\)",
      "\\(0,\\frac{1}{2},1\\)",
      "\\(-1,0,1\\)"
    ],
    correctIndex: 0,
    explanationHtml: "二項分布 \\(B\\left(3,\\frac{1}{2}\\right)\\) では，\\(X\\) は3回の試行における成功回数を表すので，\\(0,1,2,3\\) の値をとる．"
  },
  {
    id: "entrance-mathb-statistical-inference-004",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "標準正規分布の平均として正しいものはどれか．",
    choices: [
      "\\(-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "標準正規分布は，平均 \\(0\\)，分散 \\(1\\) の正規分布である．"
  },
  {
    id: "entrance-mathb-statistical-inference-005",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "標準正規分布の分散として正しいものはどれか．",
    choices: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\sigma^2\\)"
    ],
    correctIndex: 1,
    explanationHtml: "標準正規分布は，平均 \\(0\\)，分散 \\(1\\) の正規分布である．"
  },
  {
    id: "entrance-mathb-statistical-inference-006",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "標準正規分布を表す記号として正しいものはどれか．",
    choices: [
      "\\(N(0,1)\\)",
      "\\(N(1,0)\\)",
      "\\(B(n,p)\\)",
      "\\(U(0,1)\\)"
    ],
    correctIndex: 0,
    explanationHtml: "平均 \\(0\\)，分散 \\(1\\) の正規分布を標準正規分布といい，\\(N(0,1)\\) と表す．"
  },
  {
    id: "entrance-mathb-statistical-inference-007",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "母平均 \\(m\\)，母分散 \\(\\sigma^2\\) の母集団から大きさ \\(n\\) の無作為標本を抽出するとき，標本平均 \\(\\overline{X}\\) の期待値として正しいものはどれか．",
    choices: [
      "\\(m\\)",
      "\\(\\sigma^2\\)",
      "\\(\\frac{m}{n}\\)",
      "\\(\\frac{\\sigma^2}{n}\\)"
    ],
    correctIndex: 0,
    explanationHtml: "標本平均 \\(\\overline{X}\\) の期待値は，母平均 \\(m\\) に等しい．"
  },
  {
    id: "entrance-mathb-statistical-inference-008",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "母平均 \\(m\\)，母分散 \\(\\sigma^2\\) の母集団から大きさ \\(n\\) の無作為標本を抽出するとき，標本平均 \\(\\overline{X}\\) の分散として正しいものはどれか．",
    choices: [
      "\\(m\\)",
      "\\(\\sigma^2\\)",
      "\\(\\frac{\\sigma^2}{n}\\)",
      "\\(\\frac{m}{n}\\)"
    ],
    correctIndex: 2,
    explanationHtml: "標本平均 \\(\\overline{X}\\) の分散は，母分散を標本の大きさで割った \\(\\frac{\\sigma^2}{n}\\) である．"
  },
  {
    id: "entrance-mathb-statistical-inference-009",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "確率変数 \\(X\\) が二項分布 \\(B\\left(4,\\frac{1}{2}\\right)\\) に従うとき，\\(X\\) の期待値はどれか．",
    choices: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    correctIndex: 1,
    explanationHtml: "二項分布 \\(B(n,p)\\) の期待値は \\(np\\) である．したがって，\\(4\\cdot\\frac{1}{2}=2\\) である．"
  },
  {
    id: "entrance-mathb-statistical-inference-010",
    unitIds: ["mathb_statistical_inference"],
    questionHtml: "確率変数 \\(X\\) が正規分布 \\(N(m,\\sigma^2)\\) に従うとき，標準化した確率変数として正しいものはどれか．",
    choices: [
      "\\(Z=\\frac{X-m}{\\sigma}\\)",
      "\\(Z=\\frac{X-\\sigma}{m}\\)",
      "\\(Z=\\frac{X}{m}\\)",
      "\\(Z=X-m\\)"
    ],
    correctIndex: 0,
    explanationHtml: "正規分布 \\(N(m,\\sigma^2)\\) に従う確率変数 \\(X\\) を標準化すると，\\(Z=\\frac{X-m}{\\sigma}\\) となる．"
  }
];
