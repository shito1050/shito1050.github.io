window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "moving-range-001",
    order: "2-02-0001",
    title: "数学II_図形と方程式_点の存在範囲_001",
    subject: "数学II",
    unit: "図形と方程式",
    topic: "点の存在範囲",
    unitIds: ["math2_figures_and_equations"],
    difficulty: 3,
    problemText: "点の存在範囲を求め，図示せよ．",
    questionHtml: `
      <p>
        \\(s,t\\)が\\(0\\leqq s\\leqq 1,\\ 0\\leqq t\\leqq 1\\)の範囲を動くとする．
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
          2文字動くので，1文字固定で線分を描いてから，線分を動かします．
          線分の動きを追うには端点の動きを追うのがよいでしょう．
          もしくは，今回は\\(s=\\cdots，t=\\cdots\\)にできるので，存在条件を考えてもさほど難しくはありません．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        \\(s\\)を\\(0\\leqq s\\leqq 1\\)で固定し，\\(t\\)を動かす．
        \\((x,y)\\)の動きを追う．
        \\(x\\)は\\(s\\leqq x\\leqq s+1\\)を動き，\\(y\\)は\\(s^2\\)で高さ一定であるから，\\(x\\)軸に平行な長さ1の線分を\\(s\\leqq x\\leqq s+1\\)の部分に描くことになる．
        線分の左端の点は\\((s,s^2)\\)だから，\\(s\\)を自由にしてやればこの点は\\(y=x^2\\)の\\(0\\leqq x\\leqq 1\\)の部分を描く．
        線分はそれに沿って平面を掃過することになるので，求める範囲は次の図のようになる．
      </p>

      <figure class="problem-figure">
        <img
          src="../assets/images/practice/math2/geometry-and-equations/moving-range-001.png"
          alt="点の存在範囲を表す図"
        >
      </figure>

      <div class="thinking-box">
        <p class="problem-label">別解</p>

        <p>
          点\\((x,y)\\)の存在範囲を\\(W\\)とする．
        </p>

        <div class="math-block">
          \\[
          \\begin{aligned}
          (x,y)\\in W
          &\\Longleftrightarrow 0\\leqq s\\leqq 1,\ 0\\leqq t\\leqq 1,\ x=s+t,\ y=s^2\\text{を満たす }s,t\\text{ が存在する．}\\\\
          &\\Longleftrightarrow 0\\leqq s\\leqq 1,\ 0\\leqq t\\leqq 1,\ s=\\sqrt{y},\ t=x-\\sqrt{y}\\text{を満たす }s,t\\text{ が存在する（}s\\geqq 0\\text{）．}\\\\
          &\\Longleftrightarrow 0\\leqq \\sqrt{y}\\leqq 1,\ 0\\leqq x-\\sqrt{y}\\leqq 1\\\\
          &\\Longleftrightarrow 0\\leqq y\\leqq 1,\ \\sqrt{y}\\leqq x\\leqq \\sqrt{y}+1
          \\end{aligned}
          \\]
        </div>

        <p>
          だから，\\(W\\)は\\((x-1)^2\\leqq y\\leqq x^2\\)の\\(0\\leqq y\\leqq 1\\)の部分で，図示すると上図のようになる．
        </p>
      </div>
    `
  }
);
