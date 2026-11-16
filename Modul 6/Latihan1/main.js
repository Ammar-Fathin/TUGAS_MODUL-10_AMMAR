const inputAngka1 = document.getElementById("angka1");
const inputAngka2 = document.getElementById("angka2");
const kotakHasil = document.getElementById("hasil");
const nilaiHasil = document.getElementById("nilaiHasil");
const infoHasil = document.getElementById("infoHasil");

function hitung(operasi) {
  const teks1 = inputAngka1.value;
  const teks2 = inputAngka2.value;

  if (teks1 === "" || teks2 === "") {
    tampilkanError("Kolom kosong", "Isi kedua angka terlebih dahulu.");
    return;
  }

  const a = parseFloat(teks1);
  const b = parseFloat(teks2);
  let hasil;
  let simbol;

  switch (operasi) {
    case "jumlah":
      hasil = a + b;
      simbol = "+";
      break;
    case "kurang":
      hasil = a - b;
      simbol = "−";
      break;
    case "kali":
      hasil = a * b;
      simbol = "×";
      break;
    case "bagi":
      if (b === 0) {
        tampilkanError("Tidak bisa dibagi nol", "Ganti angka kedua dengan selain 0.");
        return;
      }
      hasil = a / b;
      simbol = "÷";
      break;
  }

  hasil = Math.round(hasil * 1e10) / 1e10;

  kotakHasil.classList.remove("error");
  nilaiHasil.textContent = hasil;
  infoHasil.textContent = a + " " + simbol + " " + b + " = " + hasil;
}

function tampilkanError(judul, pesan) {
  kotakHasil.classList.add("error");
  nilaiHasil.textContent = judul;
  infoHasil.textContent = pesan;
}

function resetKalkulator() {
  inputAngka1.value = "";
  inputAngka2.value = "";
  kotakHasil.classList.remove("error");
  nilaiHasil.textContent = "0";
  infoHasil.textContent = "Isi kedua angka, lalu pilih operasi.";
  inputAngka1.focus();
}
