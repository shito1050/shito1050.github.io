window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "moving-range-001",
    order: "2-02-0001",
    title: "数学II_図形と方程式_点の存在範囲_001",
    subject: "数学II",
    unit: "図形と方程式",
    topic: "点の存在範囲",
    unitIds: ["math2_geometry_and_equations"],
    difficulty: 3,
    problemText: "点の存在範囲を求め，図示せよ．",
    questionHtml: `
      <p>
        \\(s,t\\)が\\(0\\leq s\\leq 1,\\ 0\\leq t\\leq 1\\)の範囲を動くとする．
        このとき，
      </p>

      <div class="math-block">
        \\[
        \\begin{cases}
        x=s+t\\\\
        y=s^2
        \\end{cases}
        \\]
      </div>

      <p>
        により定義される\\(xy\\)平面上の点\\((x,y)\\)が動く範囲を求め，図示せよ．
      </p>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p class="problem-label">考え方</p>
        <p>
          2文字動くので，1文字固定で線分を描いてから，その線分を動かします．
          線分の動きを追うには，端点の動きを追うのがよいです．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        \\(s\\)を\\(0\\leq s\\leq 1\\)で固定し，\\(t\\)を動かす．
        このとき，\\(x=s+t\\)より
      </p>

      <div class="math-block">
        \\[
        s\\leq x\\leq s+1
        \\]
      </div>

      <p>
        であり，\\(y=s^2\\)である．
        したがって，高さ\\(s^2\\)のところに，\\(x\\)軸に平行な長さ1の線分を描くことになる．
      </p>

      <p>
        線分の左端は\\((s,s^2)\\)であるから，\\(s\\)を\\(0\\leq s\\leq 1\\)の範囲で動かすと，
        左端は\\(y=x^2\\)の\\(0\\leq x\\leq 1\\)の部分を動く．
      </p>

      <p>
        また，線分の右端は\\((s+1,s^2)\\)であるから，右端は
        \\(y=(x-1)^2\\)の\\(1\\leq x\\leq 2\\)の部分を動く．
      </p>

      <figure class="problem-figure">
        <img
          src="assets/images/practice/math2/geometry-and-equations/moving-range-001.png"
          alt="点の存在範囲を表す図"
        >
      </figure>

      <p>
        よって，求める範囲は図の灰色部分である．
      </p>

      <p>
        別の求め方として，点\\((x,y)\\)の存在範囲を\\(W\\)とする．
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        (x,y)\\in W
        &\\Longleftrightarrow
        0\\leq s\\leq 1,\ 0\\leq t\\leq 1,\ x=s+t,\ y=s^2
        \\text{を満たす }s,t\\text{ が存在する}\\\\
        &\\Longleftrightarrow
        0\\leq s\\leq 1,\ 0\\leq t\\leq 1,\ s=\\sqrt{y},\ t=x-\\sqrt{y}
        \\text{を満たす }s,t\\text{ が存在する}\\\\
        &\\Longleftrightarrow
        0\\leq \\sqrt{y}\\leq 1,\ 0\\leq x-\\sqrt{y}\\leq 1\\\\
        &\\Longleftrightarrow
        0\\leq y\\leq 1,\ \\sqrt{y}\\leq x\\leq \\sqrt{y}+1
        \\end{aligned}
        \\]
      </div>

      <p>
        \\(\\sqrt{y}\\leq x\\leq \\sqrt{y}+1\\)より，
      </p>

      <div class="math-block">
        \\[
        (x-1)^2\\leq y\\leq x^2
        \\]
      </div>

      <p>
        したがって，求める範囲は
      </p>

      <div class="math-block answer">
        \\[
        (x-1)^2\\leq y\\leq x^2,\quad 0\\leq y\\leq 1
        \\]
      </div>

      <p>
        である．
      </p>
    `
  }
);
