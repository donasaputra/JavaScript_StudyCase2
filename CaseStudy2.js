// function nilaiPeserta (nilai) {
//     /* 
//         Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
//         A = 80 - 100
//         B = 60 - 80
//         C = 40 - 60
//         D = 20 - 40
//         E = >20
//     */
// }

// /*
//     Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
//     1. 5
//     2. 60.5
//     3. 39.5
//     4. 50
//     5. 101
// */


var input = parseInt(prompt('Masukkan nilai peserta'));

function nilaiPeserta(nilai){
    if(nilai>=80 && nilai <=100){
        document.write('Peserta mendapatkan nilai A','<br>');
        }else if(nilai>=60 && nilai<80){
            document.write('Peserta mendapatkan nilai B','<br>');
        }else if(nilai>=40 && nilai<60){
            document.write('Peserta mendapatkan nilai C','<br>');
        }else if(nilai>=20 && nilai<40){
            document.write('Peserta mendapatkan nilai D','<br>');
        }else{
            document.write('Peserta mendapatkan nilai E','<br>');
        }
};


nilaiPeserta(input)