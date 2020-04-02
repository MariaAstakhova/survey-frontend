export default async function getQuestions() {
  return await fetch(
    "https://localhost:5001/api/questionnaire"
  ).then(response => response.json());
}
