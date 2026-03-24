export const jsQuestions = [
  {
    id: 1,
    text: "Apa output dari: console.log(typeof null)?",
    options: ["null", "object", "undefined", "string"],
    answer: "object",
  },
  {
    id: 2,
    text: "Method array mana yang TIDAK mengubah array asli?",
    options: ["push()", "pop()", "map()", "splice()"],
    answer: "map()",
  },
  {
    id: 3,
    text: "Apa output dari: console.log(0.1 + 0.2 === 0.3)?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
  },
  {
    id: 4,
    text: "Keyword mana yang digunakan untuk variable yang tidak bisa di-reassign?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    id: 5,
    text: "Apa yang dimaksud dengan event delegation?",
    options: [
      "Pasang listener di setiap element",
      "Pasang listener di parent untuk handle child events",
      "Hapus event listener setelah dipakai",
      "Copy event dari satu element ke element lain",
    ],
    answer: "Pasang listener di parent untuk handle child events",
  },
  {
    id: 6,
    text: "Apa output dari: console.log([1,2,3].map(x => x * 2))?",
    options: ["[1,2,3]", "[2,4,6]", "[3,6,9]", "undefined"],
    answer: "[2,4,6]",
  },
  {
    id: 7,
    text: "Cara yang benar untuk clone array tanpa mutasi adalah?",
    options: [
      "const b = a",
      "const b = [...a]",
      "const b = a.copy()",
      "const b = a.clone()",
    ],
    answer: "const b = [...a]",
  },
  {
    id: 8,
    text: "Apa perbedaan == dan === di JavaScript?",
    options: [
      "Tidak ada perbedaan",
      "=== lebih cepat dari ==",
      "== membandingkan nilai saja, === nilai dan tipe",
      "=== hanya untuk string",
    ],
    answer: "== membandingkan nilai saja, === nilai dan tipe",
  },
  {
    id: 9,
    text: "Apa output dari: console.log(typeof undefined)?",
    options: ["null", "object", "undefined", "string"],
    answer: "undefined",
  },
  {
    id: 10,
    text: "Method mana yang dipakai untuk cari satu item di array berdasarkan kondisi?",
    options: ["filter()", "find()", "search()", "indexOf()"],
    answer: "find()",
  },
];

export const htmlQuestions = [
  {
    id: 1,
    text: "Tag HTML yang digunakan untuk membuat hyperlink adalah?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    id: 2,
    text: "Atribut mana yang digunakan untuk menentukan URL pada tag <img>?",
    options: ["src", "href", "url", "link"],
    answer: "src",
  },
  {
    id: 3,
    text: "Tag mana yang digunakan untuk membuat list tidak berurutan?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 4,
    text: "Apa fungsi dari tag <meta charset='UTF-8'>?",
    options: [
      "Mengatur ukuran font",
      "Menentukan encoding karakter dokumen",
      "Membuat halaman responsif",
      "Menghubungkan file CSS",
    ],
    answer: "Menentukan encoding karakter dokumen",
  },
  {
    id: 5,
    text: "Tag HTML yang benar untuk membuat tabel adalah?",
    options: ["<tab>", "<tbl>", "<table>", "<tr>"],
    answer: "<table>",
  },
  {
    id: 6,
    text: "Atribut mana yang digunakan untuk memberikan tooltip pada elemen HTML?",
    options: ["title", "alt", "tooltip", "hint"],
    answer: "title",
  },
  {
    id: 7,
    text: "Tag mana yang digunakan untuk membuat form input teks?",
    options: [
      "<input type='text'>",
      "<textfield>",
      "<text>",
      "<field type='text'>",
    ],
    answer: "<input type='text'>",
  },
  {
    id: 8,
    text: "Apa fungsi dari atribut 'alt' pada tag <img>?",
    options: [
      "Mengatur ukuran gambar",
      "Menampilkan teks alternatif jika gambar gagal dimuat",
      "Menentukan format gambar",
      "Memberi border pada gambar",
    ],
    answer: "Menampilkan teks alternatif jika gambar gagal dimuat",
  },
  {
    id: 9,
    text: "Tag mana yang digunakan untuk heading terbesar di HTML?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    id: 10,
    text: "Elemen HTML mana yang digunakan untuk mendefinisikan bagian navigasi?",
    options: ["<nav>", "<menu>", "<navigate>", "<header>"],
    answer: "<nav>",
  },
];

export const cssQuestions = [
  {
    id: 1,
    text: "Property CSS mana yang digunakan untuk mengubah warna teks?",
    options: ["text-color", "font-color", "color", "foreground"],
    answer: "color",
  },
  {
    id: 2,
    text: "Nilai display mana yang membuat elemen tidak terlihat tapi tetap memakan ruang?",
    options: ["none", "hidden", "visibility: hidden", "opacity: 0"],
    answer: "opacity: 0",
  },
  {
    id: 3,
    text: "Selector CSS mana yang menarget elemen dengan id 'header'?",
    options: [".header", "#header", "*header", "header"],
    answer: "#header",
  },
  {
    id: 4,
    text: "Property CSS mana yang digunakan untuk mengatur jarak di dalam elemen?",
    options: ["margin", "spacing", "padding", "border"],
    answer: "padding",
  },
  {
    id: 5,
    text: "Nilai position mana yang membuat elemen relatif terhadap viewport?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: "fixed",
  },
  {
    id: 6,
    text: "Property CSS mana yang digunakan untuk membuat layout flexbox?",
    options: ["display: flex", "position: flex", "layout: flex", "flex: true"],
    answer: "display: flex",
  },
  {
    id: 7,
    text: "Apa fungsi dari property 'z-index' di CSS?",
    options: [
      "Mengatur ukuran elemen",
      "Mengatur urutan tumpukan elemen",
      "Mengatur transparansi elemen",
      "Mengatur jarak antar elemen",
    ],
    answer: "Mengatur urutan tumpukan elemen",
  },
  {
    id: 8,
    text: "Shorthand CSS mana yang benar untuk mengatur semua sisi margin?",
    options: [
      "margin: top right bottom left",
      "margin: 10px 20px 10px 20px",
      "margin: all 10px",
      "margin: 10px, 20px",
    ],
    answer: "margin: 10px 20px 10px 20px",
  },
  {
    id: 9,
    text: "Property CSS mana yang digunakan untuk mengatur ukuran font?",
    options: ["text-size", "font-size", "font-weight", "text-scale"],
    answer: "font-size",
  },
  {
    id: 10,
    text: "Pseudo-class mana yang menarget elemen saat di-hover?",
    options: [":focus", ":active", ":hover", ":visited"],
    answer: ":hover",
  },
];
