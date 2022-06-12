export default function showExam() {
  const examCard = document.getElementById("exam");
  const jsCard = document.getElementById("js");
  const semesterCard = document.getElementById("semester");

  if (!examCard.style.display || examCard.style.display === "none") {
    examCard.style.display = "block";
    jsCard.style.display = "none";
    semesterCard.style.display = "none";
  } else {
    examCard.style.display = "none";
  }
}
