function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

// membuat fungsi putar
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  // loading ketika di acak
  document.querySelector(".info").innerHTML = "Loading...";

  // mengacak gambar
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    //fungsi acak gambar
    putar();

    // fungsi ketika acak gambar berhenti memunculkan gambar komputer selama 1 detik
    setTimeout(function () {
      const gComputer = document.querySelector(".img-komputer");
      gComputer.setAttribute("src", `img/${pilihanComputer}.png`);
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

console.log(new Date().getTime());

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gComputer = document.querySelector(".img-komputer");
//   gComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gComputer = document.querySelector(".img-komputer");
//   gComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const gComputer = document.querySelector(".img-komputer");
//   gComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
