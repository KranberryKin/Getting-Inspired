
function _DrawClock() {
  var today = new Date();
  var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear() ;
  var isPM = today.getHours() > 12;
  var time = (isPM ? today.getHours() - 12 : today.getHours()) + ":" + (today.getMinutes().toString().length == 1 ? "0" + today.getMinutes().toString() : today.getMinutes().toString()) + (isPM ? " P.M." : " A.M." );
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