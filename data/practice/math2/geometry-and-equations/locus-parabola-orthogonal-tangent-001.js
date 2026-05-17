window.practiceProblems = window.practiceProblems || [];

window.practiceProblems.push(
  {
    id: "locus-parabola-orthogonal-tangent-001",
    order: "2-02-0002",
    title: "数学II_図形と方程式_軌跡_放物線と直交する接線（応用）",
    listTitle: "数学II_図形と方程式_軌跡_放物線と直交する接線（応用）",
    subject: "数学II",
    unit: "図形と方程式",
    topic: "軌跡",
    unitIds: ["math2_figures_and_equations"],
    difficulty: 3,
    questionHtml: `
      <p>
        2つの放物線\\(y=x^2\\)と\\(y=ax^2+bx+c\\)とは2点で交わり，交点におけるこれら2つの放物線の接線は互いに直交するという．
        \\(a,b,c\\)が変化するとき，このような放物線\\(y=ax^2+bx+c\\)の頂点の全体はどのような集合を作るかを調べ，その集合を図示せよ．
      </p>
    `,
    answerHtml: `
      <div class="thinking-box">
        <p class="problem-label">考え方</p>
        <p>
          図でいくか式でいくかの選択があります．
          図でいくのは，状況が複雑すぎて厳しいでしょう．
          素直に頂点を\\((X,Y)\\)とおいて解くことを考えますが，2つの放物線の交点の\\(x\\)座標を\\(\\alpha,\\beta\\)とおいて，微分して，\\(X=-\\frac{b}{2a}\\)，\\(Y=-\\frac{b^2}{4a}+c\\)，\\(2\\alpha(2a\\alpha+b)=-1\\)，\\(2\\beta(2a\\beta+b)=-1\\)，\\(\\alpha+\\beta=-\\frac{b}{a-1}\\)，…などと条件を列挙しだすと大変です．
          この方針でも処理することは可能ですが，「流石に面倒くさいな」と立ち止まりたいところです．
        </p>
        <p>
          「頂点の軌跡が〜」といわれていますが，つまるところは\\(a,b,c\\)の条件を求める問題です．
          細かいことは忘れて，問題文の条件を満たす\\(a,b,c\\)はどんなものかを考えます．
          その処理をする中で，頂点の軌跡の情報が手に入ることを期待します．
        </p>
      </div>

      <p class="problem-label">解答</p>

      <p>
        題意より，2次方程式
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        x^2&=ax^2+bx+c\\\\
        \\therefore\\quad (a-1)x^2+bx+c&=0
        \\end{aligned}
        \\tag{①}
        \\]
      </div>

      <p>
        は，異なる2つの実数解\\(\\alpha,\\beta\\)をもち，\\(x=\\alpha,x=\\beta\\)の点で2つの放物線上の接線は直交する．
        それぞれの放物線の式を微分すると\\(y^{\\prime}=2x\\)，\\(y^{\\prime}=2ax+b\\)であるから，\\(\\alpha,\\beta\\)は2次方程式
      </p>

      <div class="math-block">
        \\[
        \\begin{aligned}
        2x\\cdot(2ax+b)&=-1\\\\
        \\therefore\\quad 4ax^2+2bx+1&=0
        \\end{aligned}
        \\tag{②}
        \\]
      </div>

      <p>
        の2解でもある．
        したがって，①と②は，解を同じくする2次方程式である．
      </p>

      <p>
        ここから\\(a,b,c\\)の条件を調べる．
        \\(a,b,c\\)が満たすべき条件は，結局①と②の両方を同時に満たす\\(x\\)が2つ存在することである．
        そのような\\(a,b,c\\)を求める．
        そのために，①と②で係数比較のようなことをする．
        ただし，方程式に対しては係数比較という言葉はつかえない．
        \\(x^2-3x+2=0\\)と\\(2x^2-6x+4=0\\)は，解の集合は同じでも係数が異なっているからである．
        しかし，手がかりがないかというとそうではない．
        係数の比は同じである．
        ①と②をみれば，\\(x\\)の係数が\\(b\\)と\\(2b\\)になっているので，\\(b\\)が0でなければ係数の比は\\(1:2\\)である．
        よって，\\(b\\)が0かそうでないかで場合分けをする．
      </p>

      <p>
        (i)\\(b\\neq0\\)のとき．①と②をみて，
      </p>

      <div class="math-block">
        \\[
        2(a-1)=4a,\\quad 2c=1\\quad\\therefore\\quad a=-1,\\quad c=\\frac{1}{2}
        \\]
      </div>

      <p>
        を得る．
        これは2つの方程式を同時に満たす\\(x\\)がある仮定の下で得たものだから，①か②の判別式をみておく．
        ②の方をみると\\(D/4=b^2-4a=b^2+4>0\\)であり，適する．
        このとき，\\(y=ax^2+bx+c=-x^2+bx+\\frac{1}{2}\\)の頂点は\\(\\left(\\frac{b}{2},\\frac{b^2}{4}+\\frac{1}{2}\\right)\\)となるから，これは放物線
      </p>

      <div class="math-block">
        \\[
        y=x^2+\\frac{1}{2}\\quad(x\\neq0)
        \\]
      </div>

      <p>
        上を動く．
      </p>

      <p>
        (ii)\\(b=0\\)のとき．①と②をみて，\\(x^2=-\\frac{c}{a-1}=-\\frac{1}{4a}>0\\)であることが条件である．
        すなわち，\\(c=\\frac{1}{4}\\left(1-\\frac{1}{a}\\right)\\)かつ\\(a<0\\)である．
        このとき，放物線\\(y=ax^2+bx+c=ax^2+c\\)の頂点は\\((0,c)\\)であり，\\(c>\\frac{1}{4}\\)であるから，\\((0,c)\\)は\\(y\\)軸上の\\(y>\\frac{1}{4}\\)の部分を動く．
      </p>

      <p>
        (i)，(ii)から，頂点は下図の太線部分（ただし\\(\\left(0,\\frac{1}{4}\\right)\\)は含まない）を動く．
      </p>

      <figure class="problem-figure">
        <img
          src="../assets/images/practice/math2/geometry-and-equations/locus-parabola-orthogonal-tangent-001.png"
          alt="放物線と直交する接線の条件から得られる頂点の軌跡"
        >
      </figure>
    `
  }
);
