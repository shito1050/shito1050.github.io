window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "polynomial-root-square-001",
    order: "2-01-0001",
    title: "数学II_いろいろな式_方程式をつくる（応用）",
    listTitle: "数学II_いろいろな式_方程式をつくる（応用）",
    subject: "数学II",
    unit: "いろいろな式",
    topic: "方程式をつくる",
    unitIds: ["math2_various_expressions"],
    difficulty: 3,
    questionHtml: `
      <p>
        方程式 \\(x^{11}+17x+5=0\\) の解を \\(\\alpha_1,\\alpha_2,\\alpha_3,\\cdots,\\alpha_{11}\\) とする．
        11次の多項式 \\(f(x)\\) が次の条件 (i), (ii) を満たすとき，\\(f(x)\\) を求めよ．
      </p>

      <p class="indent-paragraph">
        (i) \\(x^{11}\\) の係数は \\(1\\) である．
      </p>

      <p class="indent-paragraph">
        (ii) 方程式 \\(f(x)=0\\) の解は，\\(\\alpha_1^2,\\alpha_2^2,\\alpha_3^2,\\cdots,\\alpha_{11}^2\\) を解にもつ．
      </p>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p>
          \\(f(x)=(x-\\alpha_1^2)(x-\\alpha_2^2)\\cdots(x-\\alpha_{11}^2)\\) などから始めると大変です．
          係数を決めることが目的なのではなく，方程式をつくることが目的だったはずです
          （厳密には多項式を求めることですが）．
          \\(x\\) の22次式をつくれば，\\(x^2\\) の11次式です．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        \\(x^{11}+17x+5=0\\) のとき，\\(x^{11}+17x=-5\\) として両辺を2乗すると，
      </p>

      <div class="math-block">
        \\[
        (x^{11}+17x)^2=25
        \\]
        \\[
        \\therefore x^{22}+34x^{12}+289x^2-25=0 \\qquad ①
        \\]
      </div>

      <p>
        となる．この式は当然 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\cdots,\\alpha_{11}\\) を代入して成り立つので，
        \\(X=x^2\\) とおけば①は
      </p>

      <div class="math-block">
        \\[
        X^{11}+34X^6+289X-25=0
        \\]
      </div>

      <p>
        となり，これは \\(\\alpha_1^2,\\alpha_2^2,\\alpha_3^2,\\cdots,\\alpha_{11}^2\\) を解にもつ11次の項の係数が1である多項式である．
      </p>

      <p>
        したがって，答えは
      </p>

      <div class="math-block answer">
        \\[
        f(x)=x^{11}+34x^6+289x-25
        \\]
      </div>

      <p class="end-mark">
        （終）
      </p>
    `
  }
);
