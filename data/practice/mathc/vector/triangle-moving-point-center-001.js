window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "triangle-moving-point-center-001",
    order: "C-01-0001",
    title: "数学C_ベクトル_三角形と動点（標準）",
    listTitle: "数学C_ベクトル_三角形と動点（標準）",
    subject: "数学C",
    unit: "ベクトル",
    topic: "三角形と動点",
    unitIds: ["mathC_vectors"],
    difficulty: 2,
    questionHtml: `
      <p class="problem-title">《三角形と動点》</p>
      <p>
        平面上に三角形\\(\\mathrm{ABC}\\)と動点\\(\\mathrm{P}\\)がある．
        ある定数\\(k\\)について，
        \\(\\mathrm{PA}^2+\\mathrm{PB}^2+3\\mathrm{PC}^2=k\\)
        を満たすように点\\(\\mathrm{P}\\)が動くとき，点\\(\\mathrm{P}\\)は円を描く．
        この円の中心を\\(\\mathrm{O}\\)とするとき，\\(\\overrightarrow{\\mathrm{OC}}\\)を\\(\\overrightarrow{\\mathrm{OA}}\\)と\\(\\overrightarrow{\\mathrm{OB}}\\)を用いて表せ．
      </p>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p>
          \\(\\mathrm{O}\\)を主役にするしかありません．
          生徒は与式を
        </p>

        <div class="math-block">
          \\[
          |\\overrightarrow{\\mathrm{OA}}-\\overrightarrow{\\mathrm{OP}}|^2
          +2|\\overrightarrow{\\mathrm{OB}}-\\overrightarrow{\\mathrm{OP}}|^2
          +3|\\overrightarrow{\\mathrm{OC}}-\\overrightarrow{\\mathrm{OP}}|^2
          =k
          \\tag{①}
          \\]
        </div>

        <p>
          にするところまではスムーズにいきますが，ここで手が止まります．
        </p>

        <p>
          この手の問題では\\(\\mathrm{P}\\)の位置を問われることが多いですが，今回は解答に\\(\\mathrm{P}\\)の情報は求められておらず，最終的に「\\(\\overrightarrow{\\mathrm{OP}}=\\cdots\\)」の形や「\\(\\overrightarrow{\\mathrm{AP}}=\\cdots\\)」の形がほしいわけではありません．
          残りつかえる条件はせいぜい\\(|\\overrightarrow{\\mathrm{OP}}|=\\)（一定）くらいなので，①を\\(|\\overrightarrow{\\mathrm{OP}}|=\\)（一定）の形に寄せていくと道が開けます．
          「\\(\\mathrm{P}\\)に関係ない部分はすべて定数」という意識も持ちましょう．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        条件より
      </p>

      <div class="math-block">
        \\[
        |\\overrightarrow{\\mathrm{OA}}-\\overrightarrow{\\mathrm{OP}}|^2
        +2|\\overrightarrow{\\mathrm{OB}}-\\overrightarrow{\\mathrm{OP}}|^2
        +3|\\overrightarrow{\\mathrm{OC}}-\\overrightarrow{\\mathrm{OP}}|^2
        =k
        \\]
      </div>

      <div class="math-block">
        \\[
        |\\overrightarrow{\\mathrm{OP}}|^2
        -\\frac{\\overrightarrow{\\mathrm{OA}}+2\\overrightarrow{\\mathrm{OB}}+3\\overrightarrow{\\mathrm{OC}}}{3}
        \\cdot\\overrightarrow{\\mathrm{OP}}
        =\\text{（定数）}
        \\]
      </div>

      <div class="math-block">
        \\[
        \\left|
        \\overrightarrow{\\mathrm{OP}}
        -\\frac{\\overrightarrow{\\mathrm{OA}}+2\\overrightarrow{\\mathrm{OB}}+3\\overrightarrow{\\mathrm{OC}}}{6}
        \\right|^2
        =\\text{（定数）}
        \\]
      </div>

      <p>
        となる．
        \\(\\mathrm{P}\\)と点（位置ベクトル）\\(\\dfrac{\\overrightarrow{\\mathrm{OA}}+2\\overrightarrow{\\mathrm{OB}}+3\\overrightarrow{\\mathrm{OC}}}{6}\\)との距離が一定であるから，これが\\(\\mathrm{P}\\)が描く円の中心そのものであり，
        \\(\\dfrac{\\overrightarrow{\\mathrm{OA}}+2\\overrightarrow{\\mathrm{OB}}+3\\overrightarrow{\\mathrm{OC}}}{6}=\\overrightarrow{0}\\)．
        以上より，
        \\(\\overrightarrow{\\mathrm{OC}}=-\\dfrac{1}{3}\\overrightarrow{\\mathrm{OA}}-\\dfrac{2}{3}\\overrightarrow{\\mathrm{OB}}\\)．
      </p>
    `
  }
);
