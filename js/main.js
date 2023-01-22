document.getElementById('red').onclick = partyRed
document.getElementById('white').onclick = partyWhite
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow


function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(247, 63, 63)'
  document.querySelector('body').style.color = 'red'
}

function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'whitesmoke'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'blue'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgb(240, 221, 14)'
  document.querySelector('body').style.color = 'yellow'
}