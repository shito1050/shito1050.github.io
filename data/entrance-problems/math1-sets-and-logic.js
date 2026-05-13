window.entranceProblemsMath1SetsAndLogic = [
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
  }
];
