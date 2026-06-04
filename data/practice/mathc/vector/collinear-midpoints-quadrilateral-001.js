window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "collinear-midpoints-quadrilateral-001",
    order: "C-01-0002",
    title: "数学C_ベクトル_一直線上にあることの証明（応用）",
    listTitle: "数学C_ベクトル_一直線上にあることの証明（応用）",
    subject: "数学C",
    unit: "ベクトル",
    topic: "一直線上にあることの証明",
    unitIds: ["mathC_vectors"],
    difficulty: 3,
    questionHtml: `
      <p>
        四角形\\(\\mathrm{ABCD}\\)の\\(\\mathrm{AD}\\)および\\(\\mathrm{BC}\\)の中点を\\(\\mathrm{E}\\),\\(\\mathrm{F}\\)とする．
        このとき，線分\\(\\mathrm{AB}\\),\\(\\mathrm{EF}\\),\\(\\mathrm{DC}\\)の中点\\(\\mathrm{G}\\),\\(\\mathrm{H}\\),\\(\\mathrm{I}\\)は同一直線上にあることを証明せよ．
      </p>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p class="problem-label">考え方</p>

        <p>
          およそ，次のような図を思い浮かべることになったと思います．
          辺上の点はすべて中点です．
        </p>

        <figure class="problem-figure">
          <img
            src="../assets/images/practice/mathc/vector/collinear-midpoints-quadrilateral-001.png"
            alt="一直線上にあることの証明の図"
          >
        </figure>

        <p>
          図形問題では道具の選択が重要です．
          今回のような一般的な状況には，ベクトルは強力な武器となります．
          ここでは，はじめにベクトルを用いた方法を考えることにします．
        </p>

        <p>
          示すべきことは\\(\\overrightarrow{\\mathrm{GI}}=k\\overrightarrow{\\mathrm{GH}}\\)となる実数\\(k\\)が存在することです．
          平面上のベクトルの問題なので，基本となるベクトルを2つ用意してそれらですべてを表そうとするのが最初の一手でしょう．
          しかし，例えば\\(\\overrightarrow{\\mathrm{AB}}\\)と\\(\\overrightarrow{\\mathrm{AD}}\\)を基準にとってみても，\\(\\mathrm{H}\\)や\\(\\mathrm{I}\\)を表せないことに気がつきます．
          とにもかくにも，\\(\\mathrm{G}\\),\\(\\mathrm{H}\\),\\(\\mathrm{I}\\)の位置を（2つといわず）同じ種類のベクトルを用いて表現しようとします．
          ここで証明したいことは点の位置そのものの議論ではなく，相対的な位置関係です．
          \\(\\mathrm{A}(\\vec{a})\\),\\(\\mathrm{B}(\\vec{b})\\),\\(\\mathrm{C}(\\vec{c})\\),\\(\\mathrm{D}(\\vec{d})\\)のようにおいても解くことはできますが，\\(\\overrightarrow{\\mathrm{AB}}\\),\\(\\overrightarrow{\\mathrm{AD}}\\),\\(\\overrightarrow{\\mathrm{BC}}\\)があれば\\(\\mathrm{G}\\),\\(\\mathrm{H}\\),\\(\\mathrm{I}\\)のすべてを表現することができます．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        \\(2\\vec{b}=\\overrightarrow{\\mathrm{AB}}\\),\\(2\\vec{d}=\\overrightarrow{\\mathrm{AD}}\\),\\(2\\vec{c}=\\overrightarrow{\\mathrm{BC}}\\)とおく．
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        \\overrightarrow{\\mathrm{GH}}
        &=\\overrightarrow{\\mathrm{AH}}-\\overrightarrow{\\mathrm{AG}}\\\\
        &=\\frac{1}{2}\\left(\\overrightarrow{\\mathrm{AE}}+\\overrightarrow{\\mathrm{AF}}\\right)-\\overrightarrow{\\mathrm{AG}}\\\\
        &=\\frac{1}{2}\\left(\\vec{d}+2\\vec{b}+\\vec{c}\\right)-\\vec{b}\\\\
        &=\\frac{1}{2}\\left(\\vec{d}+\\vec{c}\\right)
        \\end{aligned}
        \\]
      </div>

      <div class="math-block">
        \\[
        \\begin{aligned}
        \\overrightarrow{\\mathrm{GI}}
        &=\\overrightarrow{\\mathrm{AI}}-\\overrightarrow{\\mathrm{AG}}\\\\
        &=\\frac{1}{2}\\left(\\overrightarrow{\\mathrm{AD}}+\\overrightarrow{\\mathrm{AC}}\\right)-\\overrightarrow{\\mathrm{AG}}\\\\
        &=\\frac{1}{2}\\left(2\\vec{d}+2\\vec{b}+2\\vec{c}\\right)-\\vec{b}\\\\
        &=\\vec{d}+\\vec{c}
        \\end{aligned}
        \\]
      </div>

      <p>
        であるから，\\(\\overrightarrow{\\mathrm{GI}}=2\\overrightarrow{\\mathrm{GH}}\\)であり，\\(\\mathrm{G}\\),\\(\\mathrm{H}\\),\\(\\mathrm{I}\\)は一直線上にある．
      </p>

      <p class="problem-label">別解</p>

      <p>
        \\(\\triangle \\mathrm{ABD}\\)に中点連結定理を適用して，\\(\\mathrm{GE}=\\frac{1}{2}\\mathrm{BD}\\)かつ\\(\\mathrm{GE}//\\mathrm{BD}\\)．
        \\(\\triangle \\mathrm{CDB}\\)に中点連結定理を適用して，\\(\\mathrm{FI}=\\frac{1}{2}\\mathrm{BD}\\)かつ\\(\\mathrm{BD}//\\mathrm{FI}\\)．
        よって，\\(\\mathrm{GE}=\\mathrm{FI}\\)かつ\\(\\mathrm{GE}//\\mathrm{FI}\\)であるから，四角形\\(\\mathrm{EGFI}\\)は平行四辺形である．
        したがって，対角線\\(\\mathrm{EF}\\),\\(\\mathrm{GI}\\)はそれぞれの中点で交わる．
        \\(\\mathrm{H}\\)は線分\\(\\mathrm{EF}\\)の中点であるから，\\(\\mathrm{H}\\)は線分\\(\\mathrm{GI}\\)の中点でもある．
        よって，\\(\\mathrm{G}\\),\\(\\mathrm{H}\\),\\(\\mathrm{I}\\)は一直線上に並ぶ．
      </p>
    `
  }
);
