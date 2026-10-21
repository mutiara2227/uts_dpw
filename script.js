const tombol = document.getElementById("btn-selengkapnya");
const teks = document.getElementById("teks-tambahan");

tombol.addEventListener("click", function(){
    if (teks.hidden){
        teks.hidden = false;
        tombol.textContent = "lebih sedikit";
    }else{
        teks.hidden = true;
        tombol.textContent = "selengkapnya"
    }
});