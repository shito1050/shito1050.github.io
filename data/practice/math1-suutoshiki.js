window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "rationalize-001",
    title: "数学I_数と式_分母の有理化_001",
    subject: "数学I",
    unit: "数と式",
    topic: "分母の有理化",
    unitIds: ["math1_numbers_and_expressions"],
    difficulty: 1,
    problemText: "次の数の分母を有理化せよ．",
    questionHtml: `
      <div class="math-block">
        \\[
        \\frac{1}{1+\\sqrt{2}+\\sqrt{3}}
        \\]
      </div>
    `,
    answerHtml: `
      <p>
        分母のうち，まず \\(1+\\sqrt{2}\\) を1つのかたまりと見て，
        \\(1+\\sqrt{2}-\\sqrt{3}\\) をかける．
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

window.practiceProblems.push(
  {
    id: "double-radical-001",
    title: "数学I_数と式_2重根号の外し方_001",
    subject: "数学I",
    unit: "数と式",
    topic: "2重根号の外し方",
    unitIds: ["math1_numbers_and_expressions"],
    difficulty: 1,
    problemText: "次の2重根号を外せ．",
    questionHtml: `
      <div class="math-block">
        \\[
        \\begin{array}{ll}
        (1) & \\sqrt{5+2\\sqrt{6}}\\\\[6pt]
        (2) & \\sqrt{2-\\sqrt{3}}\\\\[6pt]
        (3) & \\sqrt{x-\\sqrt{x^2-1}} \\quad (x>1)
        \\end{array}
        \\]
      </div>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p class="problem-label">考え方</p>

        <div class="math-block">
          \\[
          (\\sqrt{a}+\\sqrt{b})^2=(a+b)+2\\sqrt{ab}
          \\]
          \\[
          (\\sqrt{a}-\\sqrt{b})^2=(a+b)-2\\sqrt{ab}
          \\]
        </div>

        <p>
          が2重根号を外すときの肝になります．
        </p>

        <p>
          (3)何が\\(\\sqrt{a}\\)で何が\\(\\sqrt{b}\\)かをみつけるのに苦労します．やはり根号の前の“2”が肝になりそうなので，ひとまず\\(2x-2\\sqrt{x^2-1}\\)として眺めましょう．意味ありげな\\(x^2-1\\)に注目して因数分解してみると，\\(a=x+1,b=x-1\\)とあるのかもと思えば，\\(a+b=2a,\\sqrt{ab}=\\sqrt{x^2-1}\\)で見事ビンゴです．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        (1)\\quad \\sqrt{5+2\\sqrt{6}}
        &=\\sqrt{(\\sqrt{2}+\\sqrt{3})^2}\\\\
        &=\\sqrt{2}+\\sqrt{3}
        \\end{aligned}
        \\]
      </div>

      <div class="math-block">
        \\[
        \\begin{aligned}
        (2)\\quad \\sqrt{2-\\sqrt{3}}
        &=\\sqrt{\\frac{4-2\\sqrt{3}}{2}}\\\\
        &=\\frac{\\sqrt{4-2\\sqrt{3}}}{\\sqrt{2}}\\\\
        &=\\frac{\\sqrt{3}-\\sqrt{1}}{\\sqrt{2}}\\\\
        &=\\frac{\\sqrt{6}-\\sqrt{2}}{2}
        \\end{aligned}
        \\]
      </div>

      <div class="math-block">
        \\[
        \\begin{aligned}
        (3)\\quad \\sqrt{x-\\sqrt{x^2-1}}
        &=\\frac{\\sqrt{2x-2\\sqrt{(x+1)(x-1)}}}{\\sqrt{2}}\\\\
        &=\\frac{\\sqrt{x+1}-\\sqrt{x-1}}{\\sqrt{2}}
        \\end{aligned}
        \\]
      </div>
    `
  }
);
