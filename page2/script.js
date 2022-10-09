var attackType;
var sign_arr = ["paper", "rock", "scissors"];
var attack = new Audio("music/slice.wav");
var draw = new Audio("music/draw.wav");
var ulti = new Audio("music/dragon.mp3");
var bg = new Audio("music/bg.wav");

document.getElementById("choose").style.display = "none";
document.getElementById("result").style.display = "none";
document.getElementById("spotSpark").style.display = "none";

function showType(status) {
  bg.play();
  document.getElementById("choose").style.display = "block";
  attackType = status;
  return;
}

function attackFunc(sign) {
  if (parseInt(attackType) === 0) {
    const damage = 100;
    const result = sign_arr[Math.floor(Math.random() * sign_arr.length)];
    exeDamage(sign, damage, result, 0);
  } else if (parseInt(attackType) === 1) {
    const damage = 1000;
    const result = sign_arr[Math.floor(Math.random() * sign_arr.length)];
    exeDamage(sign, damage, result, 1);
  } else {
    alert("Opps error!");
  }
}

function exeDamage(sign, damage, result, type) {
  document.getElementById("choose").style.display = "none";
  document.getElementById("ulti").innerHTML = "loading...";
  document.getElementById("attack").innerHTML = "loading...";
  document.getElementById("ulti").disabled = true;
  document.getElementById("attack").disabled = true;
  const human_health = document.getElementById("human_health").innerHTML;
  const monster_health = document.getElementById("monster_health").innerHTML;
  var sts;
  var jumlah;

  if (human_health <= 0) {
    alert("Lose");
    location.reload();
    return;
  } else if (monster_health <= 0) {
    alert("Win");
    location.reload();
    return;
  } else {
    if (sign === "paper") {
      if (result === "paper") {
        sts = "Draw";
        document.getElementById("spotChar").style.display = "none";
        document.getElementById("spotSpark").style.display = "block";
        draw.play();
        setTimeout(showChar, 500);
      } else if (result === "rock") {
        sts = "Win";
        if (type > 0) {
          document.getElementById("monster").src = "img/ulti.gif";
          ulti.play();
          setTimeout(setPicture, 1000);
        } else {
          attack.play();
        }
        jumlah = parseInt(monster_health) - parseInt(damage);
        document.getElementById("monster_health").innerHTML = jumlah;
      } else if (result === "scissors") {
        sts = "Lose";
        attack.play();
        jumlah = parseInt(human_health) - parseInt(damage);
        document.getElementById("human_health").innerHTML = jumlah;
      }
    } else if (sign === "rock") {
      if (result === "paper") {
        sts = "Lose";
        attack.play();
        jumlah = parseInt(human_health) - parseInt(damage);
        document.getElementById("human_health").innerHTML = jumlah;
      } else if (result === "rock") {
        sts = "Draw";
        document.getElementById("spotChar").style.display = "none";
        document.getElementById("spotSpark").style.display = "block";
        draw.play();
        setTimeout(showChar, 500);
      } else if (result === "scissors") {
        sts = "Win";
        if (type > 0) {
          document.getElementById("monster").src = "img/ulti.gif";
          ulti.play();
          setTimeout(setPicture, 1000);
        } else {
          attack.play();
        }
        jumlah = parseInt(monster_health) - parseInt(damage);
        document.getElementById("monster_health").innerHTML = jumlah;
      }
    } else if (sign === "scissors") {
      if (result === "paper") {
        sts = "Win";
        if (type > 0) {
          document.getElementById("monster").src = "img/ulti.gif";
          ulti.play();
          setTimeout(setPicture, 1000);
        } else {
          attack.play();
        }
        jumlah = parseInt(monster_health) - parseInt(damage);
        document.getElementById("monster_health").innerHTML = jumlah;
      } else if (result === "rock") {
        sts = "Lose";
        attack.play();
        jumlah = parseInt(human_health) - parseInt(damage);
        document.getElementById("human_health").innerHTML = jumlah;
      } else if (result === "scissors") {
        sts = "Draw";
        document.getElementById("spotChar").style.display = "none";
        document.getElementById("spotSpark").style.display = "block";
        draw.play();
        setTimeout(showChar, 500);
      }
    }
  }

  showStatus(sign, result, sts);

  return;
}

function showStatus(sign, result, sts) {
  if (sign === "paper") {
    document.getElementById("res1").src = "img/paper.png";
  } else if (sign === "rock") {
    document.getElementById("res1").src = "img/rock.png";
  } else if (sign === "scissors") {
    document.getElementById("res1").src = "img/scissors.png";
  }

  if (result === "paper") {
    document.getElementById("res2").src = "img/paper.png";
  } else if (result === "rock") {
    document.getElementById("res2").src = "img/rock.png";
  } else if (result === "scissors") {
    document.getElementById("res2").src = "img/scissors.png";
  }

  document.getElementById("stat").innerHTML = sts;

  document.getElementById("result").style.display = "block";
  setTimeout(setButton, 2000);
  return;
}

function setPicture() {
  document.getElementById("monster").src = "img/hero3.gif";
  return;
}

function setButton() {
  document.getElementById("ulti").innerHTML = "Ultimate attack";
  document.getElementById("attack").innerHTML = "Basic attack";
  document.getElementById("result").style.display = "none";
  document.getElementById("ulti").disabled = false;
  document.getElementById("attack").disabled = false;
  return;
}

function showChar() {
  document.getElementById("spotChar").style.display = "block";
  document.getElementById("spotSpark").style.display = "none";
  return;
}
