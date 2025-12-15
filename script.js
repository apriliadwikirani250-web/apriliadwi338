// ==============================
// LOGIN SEDERHANA
// ==============================
function login() {
    const name = document.getElementById('username').value.trim();
    const region = document.getElementById('region').value.trim();

    if (name === "" || region === "") {
        alert("Silakan isi Nama dan Daerah Asal.");
        return;
    }

    // Sembunyikan halaman login, tampilkan halaman promosi
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('promoPage').style.display = 'block';

    // Simpan data user di window (global)
    window.userName = name;
    window.userRegion = region;
}

// ==============================
// NEXT PAGE KE DASHBOARD
// ==============================
function nextPage() {
    // Sembunyikan halaman promosi, tampilkan dashboard
    document.getElementById('promoPage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'block';

    // Tampilkan nama dan daerah user
    document.getElementById('displayName').innerText = window.userName;
    document.getElementById('displayRegion').innerText = window.userRegion;
}

// ==============================
// LOGOUT
// ==============================
function logout() {
    // Sembunyikan dashboard, kembali ke login
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';

    // Reset input
    document.getElementById('username').value = "";
    document.getElementById('region').value = "";
}

// ==============================
// FORMULIR KONTAK (opsional)
// ==============================
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah reload page

            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if(name === "" || email === "" || message === "") {
                alert("Silakan isi semua kolom formulir.");
                return;
            }

            alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
            contactForm.reset();
        });
    }
});
