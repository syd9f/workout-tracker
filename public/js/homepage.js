// event listener on schedule button to load the schedule.handlebars
const scheduleButton = document.getElementById('scheduleButton');

function scheduleExercise() {
  const exerciseDate = prompt('Enter a Date')
  alert(exerciseDate);
}
scheduleButton.addEventListener("click", scheduleExercise);

// event listener on "mark complete" button on scheduled exercises to add 1 to the Exercises Completed section of Accomplishments

// event listener on "mark complete" button on goals to add 1 to the Goals Completed section of Accomplishments
