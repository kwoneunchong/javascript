var data = ["21-03-22", "21-03-23","21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

// 객체 생성

function Forecast(arr) {
    this.forecastArr = arr;
    this.division;


    switch (arr) {
        case temp: this.division = "temp";
            break;
            
        case rain: this.division = "rain";
            break;
            
        case dust: this.division = "dust";
            break;
    }
}

// 
Forecast.prototype.show = function() {
    var str = "";
    for(var i = 0; i < this.forecastArr.length; i++) {
        str += this.forecastArr[i] + this.unit() + "";
    }
    return str;
};

Forecast.prototype.avgShow = function() {
    var num = 0;
    for (var i = 0; i < this.forecastArr.length; i++) {
        num += this.forecastArr[i];
    }
    var avg = num / this.forecastArr.length;
    return avg.toFixed(1) + this.unit();
};

Forecast.prototype.unit = function() {
    switch(this.division) {
        case "temp" : return "°C";
        break;
        case "rain" : return "mm";
        break;
        case "dust" : return "㎍/m³";
        break;
    }
};

Forecast.prototype.innerHtml = function() {
    var showId ="show_" + this.division;
    var showAvgId = "show_" + this.division + "_avg";

    document.getElementById(showId).innerHTML = this.show();
    document.getElementById(showAvgId).innerHTML = this.avgShow();
};

// 객체 생성
var temp = new Forecast(temp);
var rain = new Forecast(rain);
var dust = new Forecast(dust);

temp.innerHtml();
rain.innerHtml();
dust.innerHtml();
