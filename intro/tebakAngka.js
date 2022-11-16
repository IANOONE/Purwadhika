var tebak = true


var msg = ""
while (tebak) {
    for (let i = 2; i >= 0; i--) {
        // get user answer
        var p = prompt(`Tebak angka 1 - 10 \n Kamu punya 3 kesempatan mencoba`)
            // get computer answer
        var comp = Math.floor(Math.random() * 10 + 1)

        if (p < comp) {
            msg = "Angka yang kamu tebak terlalu rendah"
        } else if (p > comp) {
            msg = "Angka yang kamu tebak terlalu tinggi"
        } else {
            msg = "Jawaban kamu tepat!"
            tebak = false
        }

        if (i == 0) {
            tebak = false

            alert("Kesempatan menebak kamu sudah habis")
        } else if (p == comp) {
            tebak = false

            alert(`Tebakan kamu benar!`)
        } else {
            alert(`${msg} \n silahkan coba lagi! \n sisa percobaan kamu tinggal : ${i} percobaan`)
        }
    }

    tebak = confirm("Coba lagi?")

    console.log(comp);
}