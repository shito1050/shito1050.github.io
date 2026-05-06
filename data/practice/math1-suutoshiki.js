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
          (3)何が\\(\\sqrt{a}\\)で何が\\(\\sqrt{b}\\)かをみつけるのに苦労します．やはり根号の前の“2”が肝になりそうなので，ひとまず\\(2x-2\\sqrt{x^2-1}\\)として眺めましょう．意味ありげな\\(x^2-1\\)に注目して因数分解してみると，\\(a=x+1,b=x-1\\)とみるのかもと思えば，\\(a+b=2x,\\sqrt{ab}=\\sqrt{x^2-1}\\)で見事ビンゴです．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <div class="answer-step">
        <p class="answer-step-number">(1)</p>

        <div
          class="answer-equation"
          style="display: grid; grid-template-columns: max-content max-content max-content max-content; justify-content: center; align-items: center; column-gap: 0.45em; row-gap: 0.35em; overflow-x: auto; padding: 10px 0; font-size: 1.18rem;"
        >
          <div style="text-align: right;">\\(\\sqrt{5+2\\sqrt{6}}\\)</div>
          <div>\\(=\\)</div>
          <div>\\(\\sqrt{(\\sqrt{2}+\\sqrt{3})^2}\\)</div>
          <div></div>

          <div></div>
          <div>\\(=\\)</div>
          <div style="color: var(--deep-pink); font-weight: 700;">\\(\\sqrt{2}+\\sqrt{3}\\)</div>
          <div></div>
        </div>
      </div>

      <div class="answer-step">
        <p class="answer-step-number">(2)</p>

        <div
          class="answer-equation"
          style="display: grid; grid-template-columns: max-content max-content max-content max-content; justify-content: center; align-items: center; column-gap: 0.45em; row-gap: 0.35em; overflow-x: auto; padding: 10px 0; font-size: 1.18rem;"
        >
          <div style="text-align: right;">\\(\\sqrt{2-\\sqrt{3}}\\)</div>
          <div>\\(=\\)</div>
          <div>\\(\\sqrt{\\frac{4-2\\sqrt{3}}{2}}\\)</div>
          <div></div>

          <div></div>
          <div>\\(=\\)</div>
          <div>\\(\\frac{\\sqrt{4-2\\sqrt{3}}}{\\sqrt{2}}\\)</div>
          <div></div>

          <div></div>
          <div>\\(=\\)</div>
          <div>\\(\\frac{\\sqrt{3}-\\sqrt{1}}{\\sqrt{2}}\\)</div>
          <div class="answer-note">ここでやめてもOK</div>

          <div></div>
          <div>\\(=\\)</div>
          <div style="color: var(--deep-pink); font-weight: 700;">\\(\\frac{\\sqrt{6}-\\sqrt{2}}{2}\\)</div>
          <div></div>
        </div>
      </div>

      <div class="answer-step">
        <p class="answer-step-number">(3)</p>

        <div
          class="answer-equation"
          style="display: grid; grid-template-columns: max-content max-content max-content max-content; justify-content: center; align-items: center; column-gap: 0.45em; row-gap: 0.35em; overflow-x: auto; padding: 10px 0; font-size: 1.18rem;"
        >
          <div style="text-align: right;">\\(\\sqrt{x-\\sqrt{x^2-1}}\\)</div>
          <div>\\(=\\)</div>
          <div>\\(\\frac{\\sqrt{2x-2\\sqrt{(x+1)(x-1)}}}{\\sqrt{2}}\\)</div>
          <div></div>

          <div></div>
          <div>\\(=\\)</div>
          <div style="color: var(--deep-pink); font-weight: 700;">\\(\\frac{\\sqrt{x+1}-\\sqrt{x-1}}{\\sqrt{2}}\\)</div>
          <div></div>
        </div>
      </div>
    `
  }
);
