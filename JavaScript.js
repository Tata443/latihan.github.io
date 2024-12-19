document.getElementById("changeBioBtn").addEventListener("click", function() {
    document.getElementById("changeBioForm").classList.toggle("hidden");
});

document.getElementById("saveBtn").addEventListener("click", function() {
    // Ambil nilai dari input form
    const newName = document.getElementById("newName").value;
    const newAge = document.getElementById("newAge").value;
    const newAddress = document.getElementById("newAddress").value;
    const newHobby = document.getElementById("newHobby").value;

    // Perbarui informasi biodata
    if (newName) document.getElementById("nama").innerText = newName;
    if (newAge) document.getElementById("usia").innerText = newAge;
    if (newAddress) document.getElementById("alamat").innerText = newAddress;
    if (newHobby) document.getElementById("hobi").innerText = newHobby;

    // Sembunyikan form setelah disimpan
    document.getElementById("changeBioForm").classList.add("hidden");
});
