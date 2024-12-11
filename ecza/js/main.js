document.addEventListener("DOMContentLoaded", function() {
    const aramaInput = document.getElementById('arama-input');
    const aramaBtn = document.getElementById('arama-btn');

    // Arama butonuna tıklandığında
    aramaBtn.addEventListener('click', function() {
        aramaYap();
    });

    // Kullanıcı "Enter" tuşuna bastığında da arama yapılacak
    aramaInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            aramaYap();
        }
    });

    function aramaYap() {
        // Arama terimi
        const aramaTerimi = aramaInput.value.toLowerCase();

        // Tüm ürün kartlarını al
        const urunKartlari = document.querySelectorAll('.urun-karti');
        
        // Ürünleri gizle
        urunKartlari.forEach(urunKarti => {
            urunKarti.style.display = 'none'; // Önce tüm ürünleri gizle
        });

        // Arama terimiyle eşleşen ürünleri göster
        let bulundu = false;
        urunKartlari.forEach(urunKarti => {
            const urunAdi = urunKarti.querySelector('p').textContent.toLowerCase();

            // Arama terimi ürün adıyla eşleşiyorsa, o ürünü göster
            if (urunAdi.includes(aramaTerimi)) {
                urunKarti.style.display = 'block';
                bulundu = true;
            }
        });

        // Eğer arama terimi ile eşleşen hiçbir ürün bulunmazsa
        if (!bulundu) {
            alert("Aradığınız ilaç bulunamadı!");
        }
    }

    // Scroll ile arama sonucuna gitme
    document.querySelectorAll('.urun-karti').forEach(urunKarti => {
        urunKarti.addEventListener('click', function() {
            // Ürün adına tıklandığında, bu ürünün detayına gidilecektir
            const id = urunKarti.id; // Tıklanan ürünün id'si
            const targetElement = document.getElementById(id);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Üstten biraz boşluk bırak
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Bütün ilaç kartlarına tıklama olayı ekleyeceğiz
document.addEventListener("DOMContentLoaded", function() {
    // Tüm ilaç kartlarını seçiyoruz
    const urunKartlari = document.querySelectorAll(".urun-karti");

    // Her bir ilaç kartı için tıklama olayını tanımlıyoruz
    urunKartlari.forEach(function(kart) {
        kart.addEventListener("click", function() {
            // Tıklanan kartın ismine göre yönlendirme yapıyoruz
            window.location.href = "login.html";
        });
    });
});
// Hedef h2 etiketlerini seç
const h2 = document.querySelectorAll('h2');

h2.forEach(element => {
    element.addEventListener('click', function() {
        window.location.href = 'login.html'; // Yönlendirme yapılacak sayfa
    });
});
