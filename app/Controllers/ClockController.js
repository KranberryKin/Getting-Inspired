
function _DrawClock(isMilitaryTime) {
  var today = new Date();
  var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear() ;
  var isPM = today.getHours() > 12;
  var isMidnight = today.getHours() === 0;
  var time = "";

  if(isMilitaryTime){
    time = today.getHours().toString() + ":" +
    (today.getMinutes().toString().length == 1 ? "0" + today.getMinutes().toString() : today.getMinutes().toString());
  } else {
    time = (isPM ? today.getHours() - 12 : isMidnight ? today.getHours() + 12 : today.getHours()) + ":" +
    (today.getMinutes().toString().length == 1 ? "0" + today.getMinutes().toString() : today.getMinutes().toString()) + (isPM ? " P.M." : " A.M." );
  }

  document.getElementById('clock').innerHTML = `
  <div onclick="app.clockController.convertClockTime()" class="interactive" title="${isMilitaryTime ? "Change to A.M/P.M" : "Change To Military Time"}">
    ${time}
  <div/>
  `;

  document.getElementById('date').innerText = date

}

export class ClockController{
  _isMilitary = false;
  _interval = null;

  constructor(){
    this.setClock(this._isMilitary)
    _DrawClock(this._isMilitary)
  }

  setClock(isMilitary) {
    clearInterval(this._interval)
    this._interval = setInterval(function () {
      _DrawClock(isMilitary)
    }, 1000)
  }
  
  convertClockTime(){
    this._isMilitary = !this._isMilitary;
    this.setClock(this._isMilitary);
    _DrawClock(this._isMilitary);
  }
}