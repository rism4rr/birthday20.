
const nomorWhatsApp = "085640282207";

document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("guestName").value;
    const kehadiran = document.getElementById("attendance").value;

    const pesan = `Halo, aku ${nama}. Konfirmasi undangan ulang tahun: ${kehadiran}`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
});
