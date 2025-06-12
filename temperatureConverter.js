console.log("temperature converter");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function TemperaturConverter() {
  const conversionMenu = [
    { name: "Celcius to Fahrenheit", formula: (c) => (9 / 5) * c + 32 },
    { name: "Celcius to Reamur", formula: (c) => (4 / 5) * c },
    { name: "Celcius to Kelvin", formula: (c) => c + 273.15 },
    { name: "Fahrenheit to Celcius", formula: (f) => (f - 32) * (5 / 9) },
    { name: "Fahrenheit to Reamur", formula: (f) => (4 / 9) * (f - 32) },
    {
      name: "Fahrenheit to Kelvin",
      formula: (f) => (5 / 9) * (f - 32) + 273.15,
    },
    { name: "Reamur to Celcius", formula: (r) => (5 / 4) * r },
    { name: "Reamur to Fahrenheit", formula: (r) => (9 / 4) * r + 32 },
    { name: "Reamur to Kelvin", formula: (r) => (5 / 4) * r + 273.15 },
    { name: "Kelvin to Celcius", formula: (k) => k - 273.15 },
    {
      name: "Kelvin to Fahrenheit",
      formula: (k) => ((k - 273.15) * 9) / 5 + 32,
    },
    { name: "Kelvin to Reamur", formula: (k) => ((k - 273.15) * 4) / 5 },
  ];

  // Cetak daftar menu
  console.log("Daftar Konversi Suhu:");
  conversionMenu.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name}`);
  });

  rl.question("pilih menu (1-12) : ", function (input) {
    let a = parseInt(input);

    switch (a) {
      case 1:
        console.log("Convert Celcius to Fahrenheit : ");
        CelciusToFahrenheit(rl);
        break;
      case 2:
        console.log("Convert Celcius to Reamur : ");
        CelciusToReamur(rl);
        break;
      case 3:
        console.log("Convert Celcius to Kelvin : ");
        CelciusToKelvin(rl);
        break;
      case 4:
        console.log("Convert Fahrenheit to Celcius : ");
        fahrenheitToCelcius(rl);
        break;
      case 5:
        console.log("Convert Fahrenheit to Reamur : ");
        fahrenheitToReamur(rl);
        break;
      case 6:
        console.log("Convert Fahrenheit to Kelvin : ");
        fahrenheitToKelvin(rl);
        break;
      case 7:
        console.log("Convert Reamur to Celcius : ");
        ReamurToCelcius(rl);
        break;
      case 8:
        console.log("Convert Reamur to Fahrenheit : ");
        ReamurToFahrenheit(rl);
        break;
      case 9:
        console.log("Convert Reamur to kelvin : ");
        ReamurToKelvin(rl);
        break;
      case 10:
        console.log("Convert Kelvin to Celcius : ");
        KelvinToCelcius(rl);
        break;
      case 11:
        console.log("Convert Kelvin to Fahrenheit : ");
        KelvinToFahrenheit(rl);
        break;
      case 12:
        console.log("Convert Kelvin to Reamur : ");
        KelvinToReamur(rl);
        break;
      default:
        console.log("Pilihan tidak valid.");
        rl.close();
        break;
    }
  });
}
TemperaturConverter();

function CelciusToFahrenheit() {
  rl.question("Masukkan suhu dalam Celcius: ", function (input) {
    let celcius = parseFloat(input);
    let fahrenheit = (9 / 5) * celcius + 32;
    console.log("Fahrenheit : ", fahrenheit.toFixed(2));
    rl.close();
  });
}

function CelciusToReamur() {
  rl.question("Masukkan suhu dalam Celcius: ", function (input) {
    let celcius = parseFloat(input);
    let reamur = (4 / 5) * celcius;
    console.log("Reamur : ", reamur.toFixed(2));
    rl.close();
  });
}

function CelciusToKelvin() {
  rl.question("Masukkan suhu dalam Celcius: ", function (input) {
    let celcius = parseFloat(input);
    let kelvin = celcius + 273.15;
    console.log("Kelvin : ", kelvin.toFixed(2));
    rl.close();
  });
}

function fahrenheitToCelcius() {
  rl.question("Masukkan suhu dalam Fahrenheit : ", function (input) {
    let fahrenheit = parseFloat(input);
    let celcius = (fahrenheit - 32) * (5 / 9);
    console.log("Celcius : ", celcius.toFixed(2));
    rl.close();
  });
}

function fahrenheitToReamur() {
  rl.question("Masukkan suhu dalam Fahrenheit : ", function (input) {
    let fahrenheit = parseFloat(input);
    let reamur = (4 / 9) * (fahrenheit - 32);
    console.log("Reamur : ", reamur.toFixed(2));
    rl.close();
  });
}

function fahrenheitToKelvin() {
  rl.question("Masukkan suhu dalam Fahrenheit : ", function (input) {
    let fahrenheit = parseFloat(input);
    let kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
    console.log("Kelvin : ", kelvin.toFixed(2));
    rl.close();
  });
}

function ReamurToCelcius() {
  rl.question("Masukkan suhu dalam Reamur: ", function (input) {
    let reamur = parseFloat(input);
    let celcius = (5 / 4) * reamur;
    console.log("Celcius : ", celcius.toFixed(2));
    rl.close();
  });
}

function ReamurToFahrenheit() {
  rl.question("Masukkan suhu dalam Reamur: ", function (input) {
    let reamur = parseFloat(input);
    let fahrenheit = (9 / 4) * reamur + 32;
    console.log("Fahrenheit : ", fahrenheit.toFixed(2));
    rl.close();
  });
}

function ReamurToKelvin() {
  rl.question("Masukkan suhu dalam Reamur: ", function (input) {
    let reamur = parseFloat(input);
    let kelvin = (5 / 4) * reamur + 273;
    console.log("Kelvin : ", kelvin.toFixed(2));
    rl.close();
  });
}

function KelvinToCelcius() {
  rl.question("Masukkan suhu dalam Kelvin : ", function (input) {
    let kelvin = parseFloat(input);
    let celcius = kelvin - 273.15;
    console.log("Celcius : ", celcius.toFixed(2));
    rl.close();
  });
}

function KelvinToFahrenheit() {
  rl.question("Masukkan suhu dalam Kelvin : ", function (input) {
    let kelvin = parseFloat(input);
    let fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    console.log("Fahrenheit : ", fahrenheit.toFixed(2));
    rl.close();
  });
}

function KelvinToReamur() {
  rl.question("Masukkan suhu dalam Kelvin : ", function (input) {
    let kelvin = parseFloat(input);
    let reamur = ((kelvin - 273.15) * 4) / 5;
    console.log("Reamur : ", reamur.toFixed(2));
    rl.close();
  });
}
