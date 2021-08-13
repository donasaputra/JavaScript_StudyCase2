// var x = 5;
// var y = 8.5;

// document.write('Nilai X adalah ', x, '<br>');
// document.write('Nilai Y adalah ', y, '<br>');

// //buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.
// //penjumlahan
// var hasil_penjumlahan = x + y;
// //pengurangan
// var hasil_pengurangan = y - x;
// //perkalian
// var hasil_perkalian = x * y;
// //pembagian
// var hasil_pembagian = y / x;
// //print
// document.write('Hasil Penjumlahan  x + y adalah ', hasil_penjumlahan,'<br>');
// document.write('Hasil Pengurangan y - x adalah ', hasil_pengurangan,'<br>');
// document.write('Hasil Perkalian x * y adalah ', hasil_perkalian,'<br>');
// document.write('Hasil Pembagian y / x adalah ', hasil_pembagian,'<br>');

var bil1 = parseInt(prompt('Masukkan nilai bilangan pertama '));
var bil2 = parseInt(prompt('Masukkan nilai bilangan kedua '));

function tambah(){
    document.write('hasil penjumlahan kedua bilangan adalah : ' + (bil1 + bil2) + '<br>')
}

function kurang(x,y){
    var hasilKurang = x-y;
    document.write('hasil pengurangan kedua bilangan adalah : ' + hasilKurang+ '<br>')
}

var hasilPerkalian  = function(x,y){
    return x*y;
}

var hasilBagi = function(x,y){
    return x/y
}

function sisaHasilBagi(x,y){
    return x%y;
}

tambah();
kurang(bil1,bil2);