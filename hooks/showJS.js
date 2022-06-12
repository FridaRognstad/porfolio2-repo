export default function showJS() {
  const jsCard = document.getElementById("js");
  const examCard = document.getElementById("exam");
  const semesterCard = document.getElementById("semester");

  if (!jsCard.style.display || jsCard.style.display === "none") {
    jsCard.style.display = "block";
    semesterCard.style.display = "none";
    examCard.style.display = "none";
  } else {
    jsCard.style.display = "none";
  }
}
