window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "moving-range-001",
    order: "2B010001",
    title: "数学II_図形と方程式_点の存在範囲_001",
    displayTitle: "数学II　図形と方程式　点の存在範囲（媒介変数）",
    subject: "数学II",
    unit: "図形と方程式",
    topic: "点の存在範囲",
    unitIds: ["math2_geometry_and_equations"],
    difficulty: 3,
    problemText: "点の存在範囲を求め，図示する問題です．",
    questionHtml: `
      <p>
        \\(s,t\\)が\\(0\\leq s\\leq 1,\\ 0\\leq t\\leq 1\\)の範囲を動くとする．
        このとき，
      </p>
      <div class="math-block">
        \\[
        \\begin{cases}
        x=s+t \\\\
        y=s^2
        \\end{cases}
        \\]
      </div>
      <p>
        により定義される\\(xy\\)平面上の点\\((x,y)\\)が動く範囲を求め，図示せよ．
      </p>
    `,
    answerHtml: `
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
        であり，\\(y=s^2\\)であるから，高さ\\(s^2\\)のところに，
        \\(x\\)軸に平行な長さ\\(1\\)の線分を描くことになる．
      </p>
      <p>
        線分の左端は\\((s,s^2)\\)であるから，\\(s\\)を動かすと，
        左端は\\(y=x^2\\)の\\(0\\leq x\\leq 1\\)の部分を動く．
        線分の右端は\\((s+1,s^2)\\)であるから，右端は
        \\(y=(x-1)^2\\)の\\(1\\leq x\\leq 2\\)の部分を動く．
      </p>
      <div class="practice-figure">
        <svg viewBox="-40 -40 320 260" role="img" aria-label="点の存在範囲の図">
          <defs>
            <marker id="arrowHeadMovingRange001" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z"></path>
            </marker>
          </defs>

          <line x1="0" y1="200" x2="260" y2="200" class="figure-axis" marker-end="url(#arrowHeadMovingRange001)"></line>
          <line x1="70" y1="230" x2="70" y2="20" class="figure-axis" marker-end="url(#arrowHeadMovingRange001)"></line>

          <path d="M70,200 C90,200 110,180 130,120 C145,75 155,40 160,20" class="figure-dashed"></path>
          <path d="M130,200 C150,200 170,180 190,120 C205,75 215,40 220,20" class="figure-dashed"></path>

          <path d="M70,200 C90,200 110,180 130,120" class="figure-curve"></path>
          <path d="M130,200 C150,200 170,180 190,120" class="figure-curve"></path>

          <path d="M70,200 C90,200 110,180 130,120 L190,120 C170,180 150,200 130,200 L70,200 Z" class="figure-fill"></path>

          <line x1="130" y1="200" x2="130" y2="120" class="figure-guide"></line>
          <line x1="190" y1="200" x2="190" y2="120" class="figure-guide"></line>
          <line x1="70" y1="120" x2="190" y2="120" class="figure-guide"></line>

          <text x="256" y="218" class="figure-label">x</text>
          <text x="48" y="24" class="figure-label">y</text>
          <text x="48" y="224" class="figure-label">O</text>
          <text x="126" y="222" class="figure-label">1</text>
          <text x="186" y="222" class="figure-label">2</text>
          <text x="50" y="126" class="figure-label">1</text>

          <text x="132" y="38" class="figure-label">y=x²</text>
          <text x="198" y="54" class="figure-label">y=(x−1)²</text>
        </svg>
      </div>
      <p>
        また，存在条件で考えると，
      </p>
      <div class="math-block">
        \\[
        \\begin{aligned}
        (x,y)\\in W
        &\\Longleftrightarrow 0\\leq s\\leq 1,\ 0\\leq t\\leq 1,\ x=s+t,\ y=s^2
        \\text{を満たす }s,t\\text{ が存在する} \\\\
        &\\Longleftrightarrow 0\\leq \\sqrt{y}\\leq 1,\ 0\\leq x-\\sqrt{y}\\leq 1 \\\\
        &\\Longleftrightarrow 0\\leq y\\leq 1,\ \\sqrt{y}\\leq x\\leq \\sqrt{y}+1
        \\end{aligned}
        \\]
      </div>
      <p>
        したがって，求める範囲は
      </p>
      <div class="math-block">
        \\[
        \\boxed{(x-1)^2\\leq y\\leq x^2,\ 0\\leq y\\leq 1}
        \\]
      </div>
      <p>
        である．
      </p>
    `
  }
);
