
function _DrawClock() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  document.getElementById('clock').innerText = time
  document.getElementById('date').innerText = date

}

export class ClockController{
  constructor(){
    this.setClock()
    _DrawClock()
  }
  setClock() {
    setInterval(function () {
      _DrawClock()
    }, 1000)
  }
}