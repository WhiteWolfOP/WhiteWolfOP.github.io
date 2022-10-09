var attackType;
var sign_arr = ["paper", "rock", "scissors"];
var attack = new Audio("music/slice.wav");
var draw = new Audio("music/draw.wav");
var bg = new Audio("music/bg.wav");

document.getElementById("choose").style.display = "none";
document.getElementById("spotSpark").style.display = "none";

function showType(status) {
  // bg.play();
  document.getElementById("choose").style.display = "block";
  attackType = status;
  return;
}

function attackFunc(sign) {
  if (parseInt(attackType) === 0) {
    const damage = 100;
    const result = sign_arr[Math.floor(Math.random() * sign_arr.length)];
    exeDamage(sign, damage, result);
  } else if (parseInt(attackType) === 1) {
    const damage = 1000;
    const result = sign_arr[Math.floor(Math.random() * sign_arr.length)];
    exeDamage(sign, damage, result);
  } else {
  }
}

function exeDamage(sign, damage, result) {
  const human_health = document.getElementById("human_health").innerHTML;
  const monster_health = document.getElementById("monster_health").innerHTML;
  var jumlah;
  if (sign === "paper") {
    if (result === "paper") {
      document.getElementById("spotChar").style.display = "none";
      document.getElementById("spotSpark").style.display = "block";
      draw.play();
      setTimeout(showChar, 1000);
    } else if (result === "rock") {
      attack.play();
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
    } else if (result === "scissors") {
      attack.play();
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    }
  } else if (sign === "rock") {
    if (result === "paper") {
      attack.play();
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    } else if (result === "rock") {
      document.getElementById("spotChar").style.display = "none";
      document.getElementById("spotSpark").style.display = "block";
      draw.play();
      setTimeout(showChar, 1000);
    } else if (result === "scissors") {
      attack.play();
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
    }
  } else if (sign === "scissors") {
    if (result === "paper") {
      attack.play();
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
    } else if (result === "rock") {
      attack.play();
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    } else if (result === "scissors") {
      document.getElementById("spotChar").style.display = "none";
      document.getElementById("spotSpark").style.display = "block";
      draw.play();
      setTimeout(showChar, 1000);
    }
  }

  return;
}

function showChar() {
  document.getElementById("spotChar").style.display = "block";
  document.getElementById("spotSpark").style.display = "none";
}
