
let runButton = document.querySelector('#run')
runButton.addEventListener('click', function () {
  let maxValue = document.querySelector('#max').value
  let output = document.querySelector('.output')
  output.innerHTML = ''
  for (let num of numbers) {
    output.innerHTML += '<p>' + num + '</p>'
  }