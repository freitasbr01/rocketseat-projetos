const students = [
  {
    name: "Gabigol",
    firstScore: 5,
    secondScore: 9,
  },
  {
    name: "Bruno Henrique",
    firstScore: 6,
    secondScore: 3,
  },
  {
    name: "Arrascaeta",
    firstScore: 8,
    secondScore: 9,
  },
  {
    name: "Cebolinha",
    firstScore: 6,
    secondScore: 7,
  },
]

function calculateAverage(firstScore, secondScore) {
  return ((firstScore + secondScore) / 2)
}

function studentAverage(student) {
  const average = calculateAverage(student.firstScore, student.secondScore)
  const message = average >= 7  
  ? `Parabéns, ! Você foi aprovado(a) no concurso!`
  : `Não foi possível dessa vez, ! Tente novamente!`

  return `A média do(a) aluno(a) ${student.name} é: ${average}\n${message}`
}

for (let student of students) {
let returnMessage = studentAverage(student)
alert(returnMessage)
}
