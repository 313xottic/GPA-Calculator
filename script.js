function addGradeInput() {
    var gradesDiv = document.getElementById('grades');
    var newGradeInput = document.createElement('div');
    newGradeInput.className = 'grade-input';
    newGradeInput.innerHTML = '<input type="text" class="course" placeholder="Course Name"><select class="grade"><option value="4.0">A</option><option value="3.7">A-</option><option value="3.3">B+</option><option value="3.0">B</option><option value="2.7">B-</option><option value="2.3">C+</option><option value="2.0">C</option><option value="1.7">C-</option><option value="1.3">D+</option><option value="1.0">D</option><option value="0.0">F</option></select>';
    gradesDiv.appendChild(newGradeInput);
}
function removeGradeInput() {
    var gradesDiv = document.getElementById('grades');
    var gradeInputs = gradesDiv.getElementsByClassName('grade-input');
    if (gradeInputs.length > 1) gradesDiv.removeChild(gradeInputs[gradeInputs.length - 1]);
}
function calculateGPA() {
    var grades = document.getElementsByClassName('grade');
    var sum = 0;
    for (var i = 0; i < grades.length; i++) sum += parseFloat(grades[i].value);
    var gpa = sum / grades.length;
    document.getElementById('gpa').innerText = gpa.toFixed(2);
    document.getElementById('status').innerText = gpa >= 3.7 ? 'You are on the high honor roll!' : gpa >= 3.0 ? 'You are on the honor roll!' : gpa < 2.0 ? 'You are on academic probation.' : 'NaN';
}
function resetCalculator() {
    var gradesDiv = document.getElementById('grades');
    while (gradesDiv.firstChild) gradesDiv.removeChild(gradesDiv.firstChild);
    for (var i = 0; i < 4; i++) addGradeInput();
    document.getElementById('gpa').innerText = 'NaN';
    document.getElementById('status').innerText = 'NaN';
}
document.getElementById('addGrade').addEventListener('click', addGradeInput);
document.getElementById('removeGrade').addEventListener('click', removeGradeInput);
document.getElementById('calculate').addEventListener('click', calculateGPA);
document.getElementById('reset').addEventListener('click', resetCalculator);