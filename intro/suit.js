var suit = true

while (suit) {
    // get player choose
    var p = prompt(`Pilih:
1. Gajah
2. Semut
3. Orang
`).toLocaleLowerCase()

    // get computer choose
    // show random number
    var comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang"
    } else {
        comp = "semut"
    }
    // rules
    console.log(p);
    console.log(comp);

    var msg = ""
    if (p == comp) {
        msg += "SERI!"
    } else if (p == "gajah") {
        msg = (comp == "orang") ? "MENANG!" : "KALAH!"
    } else if (p == "orang") {
        msg = (comp == "gajah") ? "MENANG!" : "KALAH!"
    } else if (p == "semut") {
        msg = (comp == "orang") ? "MENANG!" : "KALAH!"
    } else {
        msg = "Memasukkan pilihan yang salah"
    }
    // result
    alert(`Pilihan kamu adalah ${p} dan pilihan komputer adalah ${comp} \n Jadi hasil yang diperoleh adalah kamu ${msg}
    `)


    suit = confirm("Lagi?")
}

alert("Terima Kasih Sudah Bermain")