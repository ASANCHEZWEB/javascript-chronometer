class Chronometer {
  constructor() {
    //guardo el tiempo en current time
    this.currentTime = 0;
    //guardo el set interval en intervalId
    this.intervalId;
  }

  startClick()  {
    //cuando le das a start , ejecutas el setinterval que suma 1 al contador casa segundo
      this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  };
  getMinutes() {
    //para obtener los minutos divide currenttime entre 60 y redondea
    let minutes = Math.floor(this.currentTime / 60);

    return minutes;
  }
  getSeconds() {
   //obtiene el resto de currentTime entre 60
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(number) {
    //
    let str = (100 + number).toString();
    let newStr = str.slice(-2);
    return newStr;
  }
  stopClick() {
    //para el setInterval que suma 1
    clearInterval(this.intervalId);
  }
  resetClick() {
    //iguala el contador a 0
    this.currentTime = 0;
  }
}
