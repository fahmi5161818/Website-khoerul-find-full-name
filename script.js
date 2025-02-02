let namaDepan, namaBelakang, namaLengkap;

document.getElementById("button_merge").onclick = function(){
    namaDepan = document.getElementById("namaDepan").value;
    namaBelakang = document.getElementById("namaBelakang").value;
    if(namaBelakang === "" && namaDepan =="") {
        alert("Jangan biarkan kosong(harap isi!)")
    } else if(namaDepan ===""){
        alert("Jangan biarkan nama depan kosong(harap isi!!)")
    }else if(namaBelakang ===""){
        alert("Jangan biarkan nama belakang kosong(harap isi!!!)")
    } else {
    namaLengkap = namaDepan +" "+ namaBelakang;
    namaLengkap = document.getElementById("namaLengkap").textContent = namaLengkap;
    };
};