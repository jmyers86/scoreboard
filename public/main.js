function main() {
  const inputOne = document.querySelector(`.team-one input`)
  const teamOneHeading = document.querySelector('.team-one h2')
  inputOne.addEventListener('input', () => {
    teamOneHeading.textContent = inputOne.value
  })
}

document.addEventListener('DOMContentLoaded', main)
