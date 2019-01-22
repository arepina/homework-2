//Task 1
var age = 22;
if ((age >= 1) & (age <= 17)) {
  console.log("Учеба");
} else if ((age >= 18) & (age <= 64)) {
  console.log("Работа");
} else if ((age >= 65) & (age <= 100)) {
  console.log("Пенсия");
} else {
  console.log("Некорректный возраст");
}
//Task 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < numbers.length; i++) {
  var devName = "";
  switch (numbers[i]) {
    case 1: {
      devName = "разработчик";
      break;
    }
    case 2: {
      devName = "разработчика";
      break;
    }
    case 3: {
      devName = "разработчика";
      break;
    }
    case 4: {
      devName = "разработчика";
      break;
    }
    case 5: {
      devName = "разработчиков";
      break;
    }
    case 6: {
      devName = "разработчиков";
      break;
    }
    case 7: {
      devName = "разработчиков";
      break;
    }
    case 8: {
      devName = "разработчиков";
      break;
    }
    case 9: {
      devName = "разработчиков";
      break;
    }
  }
  console.log(numbers[i] + " " + devName);
}
