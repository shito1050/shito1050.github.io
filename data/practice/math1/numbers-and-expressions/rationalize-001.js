window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "rationalize-001",
    order: "1-01-0001",
    title: "数学I_数と式_分母の有理化_001",
    listTitle: "数学I_数と式_分母の有理化（基本）",
    subject: "数学I",
    unit: "数と式",
    topic: "分母の有理化",
    unitIds: ["math1_numbers_and_expressions"],
    difficulty: 1,
    questionHtml: `
      <p>
        次の数の分母を有理化せよ．
      </p>

      <div class="math-block">
        \\[
        \\frac{1}{1+\\sqrt{2}+\\sqrt{3}}
        \\]
      </div>
    `,
    answerHtml: `
      <p class="problem-label">解答</p>

      <p>
        分母のうち，まず\\(1+\\sqrt{2}\\)を1つのかたまりと見て，
        \\(1+\\sqrt{2}-\\sqrt{3}\\)をかける．
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        &(1+\\sqrt{2}+\\sqrt{3})(1+\\sqrt{2}-\\sqrt{3})\\\\
        &=(1+\\sqrt{2})^2-3\\\\
        &=1+2\\sqrt{2}+2-3\\\\
        &=2\\sqrt{2}
        \\end{aligned}
        \\]
      </div>

      <p>
        よって，
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        \\frac{1}{1+\\sqrt{2}+\\sqrt{3}}
        &=\\frac{1+\\sqrt{2}-\\sqrt{3}}{2\\sqrt{2}}\\\\
        &=\\frac{(1+\\sqrt{2}-\\sqrt{3})\\sqrt{2}}{2\\sqrt{2}\\cdot\\sqrt{2}}\\\\
        &=\\frac{\\sqrt{2}+2-\\sqrt{6}}{4}
        \\end{aligned}
        \\]
      </div>

      <p>
        したがって，答えは
      </p>

      <div class="math-block answer">
        \\[
        \\frac{2+\\sqrt{2}-\\sqrt{6}}{4}
        \\]
      </div>
    `
  }
);
