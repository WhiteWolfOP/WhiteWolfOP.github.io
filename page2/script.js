var attackType;
var sign_arr = ["paper", "rock", "scissors"];

document.getElementById("choose").style.display = "none";

function showType(status) {
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
      //   alert("Draw");
      //   alert(result);
    } else if (result === "rock") {
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
      //   alert("Win");
      //   alert(result);
    } else if (result === "scissors") {
      //   alert("Lose");
      //   alert(result);
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    }
  } else if (sign === "rock") {
    if (result === "paper") {
      //   alert("Lose");
      //   alert(result);
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    } else if (result === "rock") {
      //   alert("Draw");
      //   alert(result);
    } else if (result === "scissors") {
      //   alert("Win");
      //   alert(result);
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
    }
  } else if (sign === "scissors") {
    if (result === "paper") {
      //   alert("Win");
      //   alert(result);
      jumlah = parseInt(monster_health) - parseInt(damage);
      document.getElementById("monster_health").innerHTML = jumlah;
    } else if (result === "rock") {
      //   alert("Lose");
      //   alert(result);
      jumlah = parseInt(human_health) - parseInt(damage);
      document.getElementById("human_health").innerHTML = jumlah;
    } else if (result === "scissors") {
      //   alert("Draw");
      //   alert(result);
    }
  }

  return;
}
