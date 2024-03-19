let frm = document.getElementById('online');
let produkpilihan = ["TV", "AC", "Kulkas"];
let pilihproduk = `<option value=""> Pilihan Produk ----</option>`;
for (let p in produkpilihan){
    pilihproduk += `<option value="${produkpilihan[p]}">${produkpilihan[p]}</option>`;
}
frm.produk.innerHTML = pilihproduk;
function transaksi(){
    let nama =frm.nama.value;
    let produk =frm.produk.value;
    let jumlah =frm.jumlah.value;

    let harga;

    switch(produk){
        case 'TV': harga = 2000000; break;
        case 'AC': harga = 3000000; break;
        case 'Kulkas': harga = 5000000; break;
        default: harga  = 0;
    }
    let hargakotor = harga * jumlah;
    //diskon
    let diskon; 
    if (produk == 'Kulkas' && jumlah >= 3) diskon = 0.3 * hargakotor;
    else if (produk == 'AC' && jumlah >= 3) diskon = 0.2 * hargakotor;
    else diskon = 0.1 * hargakotor;

swal(`
Nama Pelanggan : ${nama}
Produk yang dibeli : ${produk}
Harga Produk : ${harga}
Jumlah produk yang dibeli : ${jumlah}
Total yang dibayarkan : ${hargakotor}
Diskon yang didapat : ${diskon}

`)

}

