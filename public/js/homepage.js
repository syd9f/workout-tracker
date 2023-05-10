var selected_exercise = document.getElementsByClassName('exercise-listbtn')
console.log(selected_exercise)
var exercise_title = document.getElementById('exercise-title')
console.log(exercise_title)

$("modal-SaveBtn").click(function() {
  exercise_title.append(selected_exercise.value);
});