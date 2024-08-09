const fake = document.getElementById('fake')
const real = document.getElementById('real')
const streak1 = document.getElementById('streak')
let streak = 0

function game() {
  const id = Math.floor((Math.random() + 6) * 10000)
  const fake_link = 'https://thispersondoesnotexist.com/'
  const real_link = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
  const random_number = Math.floor(Math.random() * 10)
  if (random_number <= 5) {
    real.src = real_link
    real.onclick = real_alert
    fake.src = fake_link
    fake.onclick = fake_alert
  } else {
    real.src = fake_link
    real.onclick = fake_alert
    fake.src = real_link
    fake.onclick = real_alert
  }
}

function real_alert() {
  alert('corect')
  streak++
  streak1.innerText = 'your streak is: ' + streak
  game()
}

function fake_alert() {
  alert('incorect')
  streak = 0
  streak1.innerText = 'your streak is: ' + streak
  game()
}

game()
