window.dictionaryData = window.dictionaryData || [];

window.dictionaryData.push(
  {
    id: "tenkai",
    term: "展開",
    kana: "てんかい",
    yomi: "tenkai",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "かっこのある式を，かっこのない形に変形すること．",
    description: "かっこのある式を，分配法則などを用いて，かっこのない形に変形すること．",
    bodyHtml: `
      <p>
        かっこのある式を，分配法則などを用いて，かっこのない形に変形することを展開という．
      </p>
    `,
    relatedIds: ["insubunkai"]
  }
);

window.dictionaryData.push(
  {
    id: "insubunkai",
    term: "因数分解",
    kana: "いんすうぶんかい",
    yomi: "insubunkai",
    type: "定義",
    subject: "数学I",
    unit: "数と式",
    unitIds: ["math1_numbers_and_expressions"],
    shortDescription: "多項式を，いくつかの因数の積の形に変形すること．",
    description: "多項式を，いくつかの因数の積の形に変形すること．",
    bodyHtml: `
      <p>
        多項式を，いくつかの因数の積の形に変形することを因数分解という．
      </p>
      <p>
        たとえば，$x^2+5x+6$を$(x+2)(x+3)$のような積の形に変形することが因数分解である．
      </p>
    `,
    relatedIds: ["tenkai"]
  }
);
