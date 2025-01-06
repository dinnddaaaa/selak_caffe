// Menu Data
const menuData = {
    beverages: {
        coffee: {
            hot: [
                { name: 'Cappucino', price: '16K', image: 'SELAK/MENU/MINUMAN/Coffe (Hot)-Cappucino 16K.jpg' },
                { name: 'Mochacino', price: '17K', image: 'SELAK/MENU/MINUMAN/Coffe (Hot)-Moccacino 17K.jpg' },
                { name: 'Tubruk Arabika', price: '10K', image: 'SELAK/MENU/MINUMAN/Coffe (Hot)-Tubruk Arabika 10K .jpg' },
                { name: 'Tubruk Moka', price: '12K', image: 'SELAK/MENU/MINUMAN/Coffe (Hot)-Tubruk Moka 12K.jpeg' },
            ],
            ice: [
                { name: 'Es Kopi Jelly', price: '15K', image: 'SELAK/MENU/MINUMAN/Coffe (Ice)-Es Kopi Jelly 15K.jpeg' },
                { name: 'Kopsu Andalan', price: '15K', image: 'SELAK/MENU/MINUMAN/Coffe (Ice)-Kopsu Andalan 15K.jpg' },
                { name: 'Kopsu Aren', price: '16K', image: 'SELAK/MENU/MINUMAN/Coffe (Ice)-Kopsu Aren 16K.jpg' },
                { name: 'Kopsu Regal', price: '17K', image: 'SELAK/MENU/MINUMAN/Coffe (Ice)-Kopsu Regal 17K.jpg' },
                { name: 'Mochacino', price: '17K', image: 'SELAK/MENU/MINUMAN/Coffe (Ice)-Moccacino 17K.jpg' },
            ]
        },
        milkBased: [
            { name: 'Chocolate', price: '16K', image: 'SELAK/MENU/MINUMAN/Milk Based (Ice)-Chocolate 16K.jpg' },
            { name: 'Matcha', price: '16K', image: 'SELAK/MENU/MINUMAN/Milk Based (Ice)-Matcha 16K.jpg' },
            { name: 'Vanilla Milk Tea', price: '15K', image: 'SELAK/MENU/MINUMAN/Milk Based (Ice)-Vanilla Milk Tea 15K.jpg' },
            { name: 'Mango Milk', price: '15K', image: 'SELAK/MENU/MINUMAN/Milk Based-Mango Milk 15K.jpg' },
        ],
        powderAndTea: [
            { name: 'Lemon', price: '8K', image: 'SELAK/MENU/MINUMAN/Powder & Tea Blend (Hot)-Lemon 8K.jpg' },
            { name: 'Chocolate', price: '13K', image: 'SELAK/MENU/MINUMAN/Powder & Tea Blend-Chocolate 13K.jpg' },
            { name: 'Matcha', price: '13K', image: 'SELAK/MENU/MINUMAN/Powder & Tea Blend-Matcha 13K.jpg' },
            { name: 'Sunset Breeze', price: '10K', image: 'SELAK/MENU/MINUMAN/Powder & Tea Blend-Sunset Breeze 10K.jpg' },
        ],
        segerSeger: [
            { name: 'Lemonade', price: '13K', image: 'SELAK/MENU/MINUMAN/Seger-Seger-Lemonade 13K.jpg' },
            { name: 'Mango Tea', price: '13K', image: 'SELAK/MENU//MINUMAN/Seger-Seger-Mango Tea 13K.jpg' },
            { name: 'Mix Fruits', price: '15K', image: 'SELAK/MENU//MINUMAN/Seger-Seger-Mix Fruits 15K.jpeg' },
            { name: 'Teh Serai', price: '12K', image: 'SELAK/MENU//MINUMAN/Seger-Seger-Teh Serai 12K.jpeg' },
        ]
    },
    food: {
        snacks: [
            { name: 'Donat Kentang', price: '10K', image: 'SELAK/MENU/MAKANAN/Snack- Donat Kentang 10K.jpeg' },
            { name: 'Burnt Cheesecake', price: '15K', image: 'SELAK/MENU/MAKANAN/Snack-Burnt Cheesecake 15K.jpg' },
            { name: 'French Fries', price: '15K', image: 'SELAK/MENU/MAKANAN/Snack-French Fries 15K.jpg' },
            { name: 'Gyoza Goreng', price: '15K', image: 'SELAK/MENU/MAKANAN/Snack-Gyoza Goreng 15K.jpg' },
            { name: 'Pisang Goreng', price: '12K', image: 'SELAK/MENU/MAKANAN/Snack-Pisang Goreng 12K.jpeg' },
            { name: 'Tahu Bakso', price: '13K', image: 'SELAK/MENU/MAKANAN/Snack-Tahu Bakso 13K.jpeg' },
        ],
        mainCourse: [
            { name: 'Mi Goreng Telur', price: '13K', image: 'SELAK/MENU/MAKANAN/Main Course-Mie Goreng Telur 13K.jpg' },
            { name: 'Nasi Orak-Arik', price: '15K', image: 'SELAK/MENU/MAKANAN/Main Course-Nasi Orak-Arik 15K.jpg' },
            { name: 'Nasi Telur Pontianak', price: '15K', image: 'SELAK/MENU/MAKANAN/Main Course-Nasi Telur Pontianak 15K.jpg' },
            { name: 'Ayam Bihun', price: '15K', image: 'SELAK/MENU/MAKANAN/Main Course-Yam Bihun 15K.jpg' },
        ]
    }
};

// Gallery Images
//const galleryImages = [
   // 'SELAK/BG/1.jpeg',
   // 'SELAK/BG/2.jpeg',
   // 'SELAK/BG/3.jpeg',
   // 'SELAK/BG/4.jpeg',
  //  'SELAK/BG/5.jpeg'
//];

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});


//
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const coffeeTypes = document.querySelector(".coffee-types");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Hapus kelas 'active' dari semua tombol kategori
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add("active");

            // Tampilkan atau sembunyikan .coffee-types
            if (button.dataset.category === "coffee") {
                coffeeTypes.classList.remove("hidden");
            } else {
                coffeeTypes.classList.add("hidden");
            }
        });
    });
});
//


const images = document.querySelectorAll(".carousel-container img");
const dotsContainer = document.querySelector(".carousel-dots");
let currentIndex = 0;

// Fungsi untuk membuat dot navigation
function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);

    // Event listener untuk navigasi dengan klik pada dot
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlides();
    });
  });
}

// Fungsi untuk memperbarui status dot
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

// Fungsi untuk memperbarui posisi slide
function updateSlides() {
  const totalImages = images.length;

  images.forEach((img, index) => {
    img.classList.remove("active", "left", "right", "far-left", "far-right");

    const position = (index - currentIndex + totalImages) % totalImages;

    if (position === 0) {
      img.classList.add("active"); // Gambar tengah
    } else if (position === 1) {
      img.classList.add("right"); // Kanan
    } else if (position === 2) {
      img.classList.add("far-right"); // Paling kanan
    } else if (position === totalImages - 1) {
      img.classList.add("left"); // Kiri
    } else if (position === totalImages - 2) {
      img.classList.add("far-left"); // Paling kiri
    }
  });

  // Pusatkan carousel ke gambar aktif
  const activeImage = document.querySelector(".carousel-container img.active");
  const container = document.querySelector(".carousel-container");

  const offset =
    container.offsetWidth / 2 - activeImage.offsetWidth / 2 - activeImage.offsetLeft;

  container.style.transform = `translateX(${offset}px)`;

  // Perbarui dot status
  updateDots();
}

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlides();
}

// Fungsi untuk berpindah ke slide sebelumnya
function previousSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlides();
}

// Inisialisasi awal
createDots();
updateSlides();

// Otomatis geser setiap 3 detik
setInterval(nextSlide, 3000);



// Menu Tabs
const menuTabs = {
    currentTab: 'beverages',
    currentCategory: 'coffee',
    currentType: 'hot'
};

// Tab Buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const tab = btn.dataset.tab;
        console.log(`Tab yang dipilih: ${tab}`); // Debugging

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tab).classList.add('active');
        
        menuTabs.currentTab = tab;
        
        // Set default category dan type berdasarkan tab yang dipilih
        if (tab === 'beverages') {
            menuTabs.currentCategory = 'coffee';
            menuTabs.currentType = 'hot';
        } else {
            menuTabs.currentCategory = 'snacks'; // Atur kategori default untuk makanan
            menuTabs.currentType = ''; // Tidak perlu jenis untuk makanan
        }
        
        console.log(`Kategori saat ini: ${menuTabs.currentCategory}`); // Debugging
        console.log(`Tipe saat ini: ${menuTabs.currentType}`); // Debugging

        renderMenu();
    });
});

// Category Buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.closest('.tab-content');
        container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        menuTabs.currentCategory = btn.dataset.category;
        console.log(`Kategori yang dipilih: ${menuTabs.currentCategory}`); // Debugging
        renderMenu();
    });
});

// Coffee Type Buttons
document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        menuTabs.currentType = btn.dataset.type;
        console.log(`Tipe yang dipilih: ${menuTabs.currentType}`); // Debugging
        renderMenu();
    });
});

// Fungsi renderMenu
function renderMenu() {
  const menuGrid = document.querySelectorAll('.menu-grid');
  menuGrid.forEach(container => {
    container.innerHTML = '';
    let items;
    if (menuTabs.currentTab === 'beverages' && menuTabs.currentCategory === 'coffee') {
      items = menuData.beverages.coffee[menuTabs.currentType];
    } else if (menuTabs.currentTab === 'beverages') {
      items = menuData.beverages[menuTabs.currentCategory];
    } else if (menuTabs.currentTab === 'food') {
      items = menuData.food[menuTabs.currentCategory];
    }
    items.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      `;
      container.appendChild(div);
    });
  });
}


// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();
