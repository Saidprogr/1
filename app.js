
const studentsData = [
    "Nolon",
    "Said",
    "Ruslan",
    "Rustam",
    "Ali",
    "Salah",
    "Valeh",
    "Sakir",
    "Ramazan",
    "Nazar",
    "Israfil",
    "Subhan",
    "Revan"
];

let currentIndex = 0;

function addStudent() {
    const list = document.getElementById('student-list');

    if (currentIndex < studentsData.length) {
        const newEntry = document.createElement('li');
        newEntry.textContent = studentsData[currentIndex];
        list.appendChild(newEntry);
        currentIndex++;
    } else {
        alert("Bütün iştirakçılar siyahıya əlavə edildi.");
    }
}
