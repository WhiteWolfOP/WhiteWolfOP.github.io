var attackType;
var sign_arr = ["paper", "rock", "scissors"];
var attack = new Audio("music/slice.wav");
var draw = new Audio("music/draw.wav");
var ulti = new Audio("music/dragon.mp3");
var bg = new Audio("music/bg.wav");
var op = new Audio("music/open.mp3");

document.getElementById("choose").style.display = "none";
document.getElementById("result").style.display = "none";
document.getElementById("spotSpark").style.display = "none";
document.getElementById("section3").style.display = "none";
document.getElementById("collect").style.display = "none";

function showType(status) {
    // const health_human = document.getElementById("human_health").innerHTML;
    // const health_monster = document.getElementById("monster_health").innerHTML;
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
    document.getElementById("ulti").disabled = true;
    document.getElementById("attack").disabled = true;
    document.getElementById("ulti").innerHTML = "loading...";
    document.getElementById("attack").innerHTML = "loading...";
    const human_health = document.getElementById("human_health").innerHTML;
    const monster_health = document.getElementById("monster_health").innerHTML;
    var sts;
    var jumlah;

    if (sign === "paper") {
        if (result === "paper") {
            sts = "Draw";
            document.getElementById("spotChar").style.display = "none";
            document.getElementById("spotSpark").style.display = "block";
            draw.play();
            setTimeout(showChar, 1000);
        } else if (result === "rock") {
            sts = "Win";
            if (type > 0) {
                document.getElementById("monster").src = "img/ulti.gif";
                ulti.play();
                setTimeout(setMonster, 1000);
            } else {
                document.getElementById("monster").src = "img/slice.gif";
                document.getElementById("monster").style.width = "90px";
                attack.play();
                setTimeout(setMonster, 1000);
            }

            jumlah = parseInt(monster_health) - parseInt(damage);

            if (jumlah <= 0) {
                bg.pause();
                showWin();
                document.getElementById("monster_health").innerHTML = "0";
                return;
            } else {
                document.getElementById("monster_health").innerHTML = jumlah;
            }

        } else if (result === "scissors") {
            sts = "Lose";
            if (type > 0) {
                document.getElementById("hero").src = "img/ulti2.gif";
                ulti.play();
                setTimeout(setHuman, 1000);
            } else {
                document.getElementById("hero").src = "img/slice.gif";
                document.getElementById("hero").style.width = "90px";
                attack.play();
                setTimeout(setHuman, 1000);
            }

            jumlah = parseInt(human_health) - parseInt(damage);

            if (jumlah <= 0) {
                alert(sts);
                document.getElementById("human_health").innerHTML = "0";
                location.reload();
                return;
            } else {
                document.getElementById("human_health").innerHTML = jumlah;
            }

        }
    } else if (sign === "rock") {
        if (result === "paper") {
            sts = "Lose";
            if (type > 0) {
                document.getElementById("hero").src = "img/ulti2.gif";
                ulti.play();
                setTimeout(setHuman, 1000);
            } else {
                document.getElementById("hero").src = "img/slice.gif";
                document.getElementById("hero").style.width = "90px";
                attack.play();
                setTimeout(setHuman, 1000);
            }

            jumlah = parseInt(human_health) - parseInt(damage);

            if (jumlah <= 0) {
                alert(sts);
                document.getElementById("human_health").innerHTML = "0";
                location.reload();
                return;
            } else {
                document.getElementById("human_health").innerHTML = jumlah;
            }

        } else if (result === "rock") {
            sts = "Draw";
            document.getElementById("spotChar").style.display = "none";
            document.getElementById("spotSpark").style.display = "block";
            draw.play();
            setTimeout(showChar, 1000);
        } else if (result === "scissors") {
            sts = "Win";
            if (type > 0) {
                document.getElementById("monster").src = "img/ulti.gif";
                ulti.play();
                setTimeout(setMonster, 1000);
            } else {
                document.getElementById("monster").src = "img/slice.gif";
                document.getElementById("monster").style.width = "90px";
                attack.play();
                setTimeout(setMonster, 1000);
            }

            jumlah = parseInt(monster_health) - parseInt(damage);

            if (jumlah <= 0) {
                bg.pause();
                showWin();
                document.getElementById("monster_health").innerHTML = "0";
                return;
            } else {
                document.getElementById("monster_health").innerHTML = jumlah;
            }
        }
    } else if (sign === "scissors") {
        if (result === "paper") {
            sts = "Win";
            if (type > 0) {
                document.getElementById("monster").src = "img/ulti.gif";
                ulti.play();
                setTimeout(setMonster, 1000);
            } else {
                document.getElementById("monster").src = "img/slice.gif";
                document.getElementById("monster").style.width = "90px";
                attack.play();
                setTimeout(setMonster, 1000);
            }

            jumlah = parseInt(monster_health) - parseInt(damage);

            if (jumlah <= 0) {
                bg.pause();
                showWin();
                document.getElementById("monster_health").innerHTML = "0";
                return;
            } else {
                document.getElementById("monster_health").innerHTML = jumlah;
            }

        } else if (result === "rock") {
            sts = "Lose";
            if (type > 0) {
                document.getElementById("hero").src = "img/ulti2.gif";
                ulti.play();
                setTimeout(setHuman, 1000);
            } else {
                document.getElementById("hero").src = "img/slice.gif";
                document.getElementById("hero").style.width = "90px";
                attack.play();
                setTimeout(setHuman, 1000);
            }

            jumlah = parseInt(human_health) - parseInt(damage);

            if (jumlah <= 0) {
                alert(sts);
                document.getElementById("human_health").innerHTML = "0";
                location.reload();
                return;
            } else {
                document.getElementById("human_health").innerHTML = jumlah;
            }

        } else if (result === "scissors") {
            sts = "Draw";
            document.getElementById("spotChar").style.display = "none";
            document.getElementById("spotSpark").style.display = "block";
            draw.play();
            setTimeout(showChar, 1000);
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
    setTimeout(setButton, 5000);
    return;
}

function showWin() {

    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
    return;

}

function reloadPage() {
    location.reload();
}

function openChest() {

    op.play();
    const rand_reward = ['warrior.png', 'warrior1.png', 'warrior2.png', 'warrior3.png', 'warrior4.png', 'warrior5.png'];
    const result_rand = rand_reward[Math.floor(Math.random() * rand_reward.length)];

    document.getElementById("opChest").style.display = "none";

    if (result_rand === "warrior5.png") {
        document.getElementById("jenis_reward").innerHTML = "Rare";
        document.getElementById("jenis_reward").style.color = "greenyellow";
        document.getElementById("rew").src = "reward/" + result_rand;
        document.getElementById("collect").setAttribute("href", "reward/" + result_rand);
    } else {
        document.getElementById("jenis_reward").innerHTML = "Common";
        document.getElementById("jenis_reward").style.color = "greenyellow";
        document.getElementById("rew").src = "reward/" + result_rand;
        document.getElementById("collect").setAttribute("href", "reward/" + result_rand);
    }

    document.getElementById("collect").style.display = "block";

    return;

}

function setMonster() {
    document.getElementById("monster").src = "img/hero3.gif";
    document.getElementById("monster").style.width = "160px";
    return;
}

function setHuman() {
    document.getElementById("hero").src = "img/enemy.gif";
    document.getElementById("hero").style.width = "160px";
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