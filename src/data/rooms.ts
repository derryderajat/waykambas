export interface Room {
  id: string
  title: string
  client: string
  img: string
  tagline: string
  description: string[]
  features: string[]
  price: string
  priceNote: string
  sqm: string
  occupancy: string
  bed: string
}

export const rooms: Room[] = [
  {
    id: '01',
    title: 'Jungle Trekking',
    client: 'Adventure Package',
    img: 'images/tour-rainforest.jpg',
    tagline: 'Menyusuri hutan hujan tropis Waykambas yang masih alami.',
    description: [
      'Paket Jungle Trekking membawa Anda menyusuri jalur-jalur hutan hujan tropis di Taman Nasional Waykambas. Dipandu oleh pemandu berpengalaman, Anda akan melewati kanopi lebat, mendengar suara alam, dan berpeluang bertemu satwa liar dalam habitat aslinya.',
      'Trekking dilakukan pada pagi hari saat suhu masih sejuk dan aktivitas satwa puncak. Kami menyediakan peralatan keselamatan, makanan ringan, dan air minum sepanjang perjalanan.',
    ],
    features: [
      'Pemandu lokal berpengalaman & bersertifikat',
      'Trekking durasi 4-6 jam',
      'Peralatan keselamatan & first aid kit',
      'Makanan ringan & air minum included',
      'Spotting satwa liar di habitat alami',
      'Foto dokumentasi perjalanan',
    ],
    price: 'Rp 850K',
    priceNote: 'per orang, minimum 2 orang',
    sqm: 'Trek 8km',
    occupancy: 'Max 8 orang',
    bed: 'Tingkat: Medium',
  },
  {
    id: '02',
    title: 'Elephant Safari',
    client: 'Wildlife Package',
    img: 'images/tour-elephant.jpg',
    tagline: 'Bertemu gajah Sumatera langsung di alam bebas Waykambas.',
    description: [
      'Paket Elephant Safari adalah pengalaman tak terlupakan bertemu gajah Sumatera (Elephas maximus sumatranus) di habitat asli mereka. Menggunakan jeep khusus, Anda akan menjelajahi area padang rumput dan tepi sungai tempat gajah sering terlihat.',
      'Selain gajah, Anda juga berpeluang melihat badak sumatera, harimau, beruang, dan berbagai satwa endemik lainnya. Pemandu kami akan menjelaskan ekosistem dan perilaku satwa yang Anda temui.',
    ],
    features: [
      'Safari jeep 4x4 dengan AC',
      'Pemandu satwa berpengalaman',
      'Spotting gajah & badak sumatera',
      'Teleskop & binocular tersedia',
      'Makan siang di alam terbuka',
      'Sertifikat penyelesaian safari',
    ],
    price: 'Rp 1.250K',
    priceNote: 'per orang, termasuk makan siang',
    sqm: 'Durasi 6 jam',
    occupancy: 'Max 6 orang/jeep',
    bed: 'Tingkat: Mudah',
  },
  {
    id: '03',
    title: 'River Adventure',
    client: 'Nature Package',
    img: 'images/tour-river.jpg',
    tagline: 'Menyusuri sungai Waykambas dengan perahu tradisional.',
    description: [
      'Paket River Adventure membawa Anda menyusuri aliran sungai yang membelah Taman Nasional Waykambas menggunakan perahu kayu tradisional. Suasana tenang dengan suara alam di kedua tepi sungai menciptakan pengalaman meditatif yang sulit dilupakan.',
      'Selama perjalanan, Anda akan melewati hutan bakau, melihat burung air, dan berhenti di spot-spot menarik untuk berfoto atau berenang di air terjun kecil. Makan siang disajikan di tepi sungai dengan pemandangan hutan.',
    ],
    features: [
      'Perahu kayu tradisional & pelampung',
      'Nahkoda & pemandu lokal',
      'Melewati hutan bakau & air terjun',
      'Spot berenang di sungai jernih',
      'Makan siang piknik di tepi sungai',
      'Durasi perjalanan 5 jam',
    ],
    price: 'Rp 950K',
    priceNote: 'per orang, termasuk makan siang',
    sqm: 'Sungai 12km',
    occupancy: 'Max 4 orang/perahu',
    bed: 'Tingkat: Mudah',
  },
  {
    id: '04',
    title: 'Bird Watching',
    client: 'Eco Package',
    img: 'images/tour-birdwatching.jpg',
    tagline: 'Mengamati 400+ spesies burung endemik Waykambas.',
    description: [
      'Taman Nasional Waykambas merupakan surga bagi pengamat burung dengan lebih dari 400 spesies burung tercatat, termasuk rangkong badak, kuau raja, dan berbagai burung endemik Sumatera. Paket ini dirancang khusus untuk birdwatcher pemula maupun advanced.',
      'Dengan panduan ornitolog lokal, Anda akan dikunjungi ke spot-spot terbaik pada waktu-waktu optimal untuk melihat burung. Spotting scope, tripod, dan checklist burung tersedia untuk Anda gunakan.',
    ],
    features: [
      'Pemandu ornitolog lokal',
      'Spotting scope & tripod tersedia',
      'Checklist burung 400+ spesies',
      'Kunjungan 3 spot birdwatching',
      'Kopi & sarapan pagi included',
      'Foto referensi burung Waykambas',
    ],
    price: 'Rp 750K',
    priceNote: 'per orang, termasuk sarapan',
    sqm: 'Durasi 5 jam',
    occupancy: 'Max 6 orang',
    bed: 'Tingkat: Mudah',
  },
  {
    id: '05',
    title: 'Camping Night',
    client: 'Outdoor Package',
    img: 'images/tour-camping.jpg',
    tagline: 'Bermalam di tengah hutan dengan pengalaman camping autentik.',
    description: [
      'Paket Camping Night menghadirkan pengalaman menginap di tengah hutan Waykambas yang autentik dan aman. Tenda-tenda berkualitas didirikan di area camping khusus yang dikelilingi oleh suara alam dan langit berbintang yang jernih.',
      'Malam dihiasi dengan api unggan, cerita dari pemandu lokal, dan kemungkinan mendengar suara satwa malam. Bangun di pagi hari dengan suara burung dan kabut tipis yang menyelimuti hutan.',
    ],
    features: [
      'Tenda berkualitas & sleeping bag',
      'Api unggan & BBQ malam',
      'Pemandu keamanan 24 jam',
      'Makan malam & sarapan camping',
      'Observasi satwa malam',
      'Pengalaman stargazing',
    ],
    price: 'Rp 1.500K',
    priceNote: 'per orang, 2D1N termasuk makan',
    sqm: '2 Hari 1 Malam',
    occupancy: 'Max 10 orang',
    bed: 'Tingkat: Medium',
  },
  {
    id: '06',
    title: 'Full Expedition',
    client: 'Premium Package',
    img: 'images/tour-safari.jpg',
    tagline: 'Petualangan komprehensif 3 hari menjelajahi seluruh Waykambas.',
    description: [
      'Paket Full Expedition adalah pengalaman lengkap menjelajahi seluruh kekayaan Taman Nasional Waykambas selama 3 hari 2 malam. Kombinasi safari jeep, trekking hutan, river adventure, camping malam, dan bird watching dalam satu paket premium.',
      'Dengan akomodasi camp yang nyaman dan tim pemandu profesional, Anda akan mendapatkan pengalaman mendalam tentang ekosistem Waykambas termasuk flora, fauna, dan interaksi dengan komunitas lokal.',
    ],
    features: [
      'Safari, trek, river, camp dalam 1 paket',
      'Akomodasi camp premium 2 malam',
      'Private jeep 4x4 sepanjang tur',
      'Semua makanan & minuman included',
      'Tim pemandu profesional (3 orang)',
      'Video dokumentasi perjalanan',
    ],
    price: 'Rp 4.500K',
    priceNote: 'per orang, 3D2N all inclusive',
    sqm: '3 Hari 2 Malam',
    occupancy: 'Max 6 orang',
    bed: 'Tingkat: Medium-Hard',
  },
]
