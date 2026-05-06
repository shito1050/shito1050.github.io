/* =========================
   授業一覧
========================= */

function getLessonsData() {
  if (typeof LESSONS_DATA !== "undefined" && Array.isArray(LESSONS_DATA)) {
    return LESSONS_DATA;
  }

  if (Array.isArray(window.LESSONS_DATA)) {
    return window.LESSONS_DATA;
  }

  return [];
}

function renderLessonIndex() {
  const lessonIndex = document.getElementById("lessonIndex");

  if (!lessonIndex) {
    return;
  }

  const lessonsData = getLessonsData();

  if (lessonsData.length === 0) {
    lessonIndex.innerHTML = `
      <p class="lesson-empty-text">準備中</p>
    `;
    return;
  }

  lessonIndex.innerHTML = "";

  lessonsData.forEach(function (subject) {
    const subjectBlock = document.createElement("section");
    subjectBlock.className = "lesson-subject-block";

    const subjectTitle = document.createElement("h3");
    subjectTitle.className = "lesson-subject-title";
    subjectTitle.textContent = subject.title;
    subjectBlock.appendChild(subjectTitle);

    const unitList = document.createElement("div");
    unitList.className = "lesson-unit-list";

    subject.units.forEach(function (unit) {
      const unitBlock = document.createElement("section");
      unitBlock.className = "lesson-unit-block";

      const unitTitle = document.createElement("h4");
      unitTitle.className = "lesson-unit-title";
      unitTitle.textContent = unit.title;
      unitBlock.appendChild(unitTitle);

      if (!unit.lessons || unit.lessons.length === 0) {
        const emptyText = document.createElement("p");
        emptyText.className = "lesson-empty-text";
        emptyText.textContent = "準備中";
        unitBlock.appendChild(emptyText);
      } else {
        const lessonList = document.createElement("ol");
        lessonList.className = "lesson-list";

        unit.lessons.forEach(function (lesson, index) {
          const lessonItem = document.createElement("li");
          lessonItem.className = "lesson-item";

          const lessonLink = document.createElement("a");
          lessonLink.className = "lesson-link";
          lessonLink.href = makePath(lesson.path);

          const lessonNumber = document.createElement("span");
          lessonNumber.className = "lesson-number";
          lessonNumber.textContent = "第" + (index + 1) + "講";

          const lessonTitle = document.createElement("span");
          lessonTitle.className = "lesson-title";
          lessonTitle.textContent = lesson.title;

          lessonLink.appendChild(lessonNumber);
          lessonLink.appendChild(lessonTitle);
          lessonItem.appendChild(lessonLink);
          lessonList.appendChild(lessonItem);
        });

        unitBlock.appendChild(lessonList);
      }

      unitList.appendChild(unitBlock);
    });

    subjectBlock.appendChild(unitList);
    lessonIndex.appendChild(subjectBlock);
  });
}

renderLessonIndex();
