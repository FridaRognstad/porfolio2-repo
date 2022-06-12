export default function showSemester() {
  const semesterCard = document.getElementById("semester");
  const jsCard = document.getElementById("js");
  const examCard = document.getElementById("exam");

  if (!semesterCard.style.display || semesterCard.style.display === "none") {
    semesterCard.style.display = "block";
    jsCard.style.display = "none";
    examCard.style.display = "none";
  } else {
    semesterCard.style.display = "none";
  }
}
