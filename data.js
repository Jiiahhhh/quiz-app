// data.js
export const questions = [
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
