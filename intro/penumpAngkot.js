// 2 function tambah & hapus penumpang
// tampung nama penumpang
// penumpang turun jadi undefined
// penumpang naik jika ada kursi yang turun akan mengisi kursi yang kosong
// pesan jika nama penumpang sudah naik

var penumpang = ['udin', undefined, 'idin']


const tambahPenumpang = function(nama, penumpang){
    
    if(penumpang.length == 0){
        penumpang.push(nama)
        return penumpang
    } else{
    
        // cek array penumpang
        for(var i = 0; i < penumpang.length; i++){


            // jika kursi kosong
            if(penumpang[i] == undefined){
                // penumpang yg baru naik akan mengisi kursi tersebut
                penumpang[i] = nama

                return penumpang
                // jika kursi penuh maka, penumpang akan duduk di kursi baru
            } else if(i == penumpang.length - 1){
                penumpang.push(nama)

                return penumpang
            } else if(penumpang[i] == nama){
                console.log(`${nama} sudah ada di dalam angkot`);

                return penumpang
            }
        }

        return penumpang
    }
}


const hapusPenumpang = function(nama, penumpang){
// jika array penumpang kosong
    if(penumpang.length == 0){
        console.log("penumpang angkot kosong");
    } else {
        // cek seluruh penumpang
        for(i = 0; i < penumpang.length ; i++){

            // jika penumpang yang ingin dihapus ditemukan
            if(penumpang[i] == nama){

                penumpang[i] = undefined
                return penumpang


                // cek seluruh array
            } else if(i == penumpang.length - 1){
                console.log(`${nama} tidak ada di dalam angkot`);

                return penumpang
            }
        }

        return penumpang
    }
}