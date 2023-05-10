// var selected_exercise = document.getElementsByClassName('exercise-listbtn')
// console.log(selected_exercise)
// var exercise_title = document.getElementById('exercise-title')
// console.log(exercise_title)

// $("modal-SaveBtn").click(function() {
//   exercise_title.append(selected_exercise.value);
// });

// var savedExercises = 

const scheduleFormHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('exercise-title');

  if (title) {
    const response = await fetch('/api/schedule', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};
