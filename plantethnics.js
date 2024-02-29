/*
 Navicat Premium Data Transfer

 Source Server         : [PROD]KMSJAMUMEDICINE
 Source Server Type    : MongoDB
 Source Server Version : 30608 (3.6.8)
 Source Host           : localhost:27017
 Source Schema         : kmsjamu

 Target Server Type    : MongoDB
 Target Server Version : 30608 (3.6.8)
 File Encoding         : 65001

 Date: 27/05/2023 09:12:25
*/


// ----------------------------
// Collection structure for plantethnics
// ----------------------------
db.getCollection("plantethnics").drop();
db.createCollection("plantethnics");

// ----------------------------
// Documents of plantethnics
// ----------------------------
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e4e"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Diabetes Melitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "Kaca Piring",
    species: "Gardenia jasminoides Ellis",
    family: "Rubiaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e4f"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Hanjuang",
    species: "Cordyline terminalis Planch",
    family: "Agavaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e50"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Ambeien",
    disease_ing: "Hemorrhoid",
    name_ina: "Jawer Kotok",
    species: "Coleus lumei L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e4b"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Jawer Kotok",
    species: "Coleus lumei L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e4c"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Mengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e4d"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Diabetes Melitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "Jawer Kotok",
    species: "Coleus lumei L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e53"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Hanjuang",
    species: "Cordyline terminalis Planch",
    family: "Agavaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e51"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e52"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Alergi Kulit",
    disease_ing: "Skin allergies",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e54"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Gangguan Pencernaan",
    disease_ing: "Indigestion",
    name_ina: "Temulawak",
    species: "Curcuma xanthoriza Robx",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e55"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Jawer Kotok",
    species: "Coleus lumei L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e56"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e57"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Menguatkan Gusi",
    disease_ing: "strengthen gums",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e58"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Mengurangi Pendaraha Saat Melahirkan",
    disease_ing: "Reducing Pendaraha During Delivery",
    name_ina: "Mengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e59"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Melancarkan Air Seni",
    disease_ing: "Staged Urine",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus (Bl.) Miq.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5a"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Mengurangi Produksi ASI",
    disease_ing: "Reduce milk production",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5b"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Penyubur Rambut",
    disease_ing: "Hair conditioner",
    name_ina: "Lidah Buaya",
    species: "Aloe vera (L). Webb.",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5d"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5e"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5f"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Sirih",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e60"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Kembang Sepatu",
    species: "Hibiscus rosa-sinensis L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e5c"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Mengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e62"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus (Bl.) Miq.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e61"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Kaca Piring",
    species: "Gardenia jasminoides Ellis",
    family: "Rubiaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e65"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Beri - beri",
    disease_ing: "Beri-beri",
    name_ina: "",
    species: "Pongamia pinnata (L.) Pierre",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e64"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Beri - beri",
    disease_ing: "Beri-beri",
    name_ina: "",
    species: "Phaseolus radiatus L.",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e66"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Pericamphylus glacus (L.) Merr",
    family: "Menispermaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e67"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Beri - beri",
    disease_ing: "Beri-beri",
    name_ina: "",
    species: "Allium sativum L.",
    family: "Amaryllidaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e68"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e69"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "",
    species: "Litsea odorifera Vahl.",
    family: "Lauraceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6b"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Vitex pubescens Valh",
    family: "Verbenaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6a"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Paricamphylus glacus (L.) Merr.",
    family: "Menispermaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6c"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Melastoma malabathricum L.",
    family: "Melastomaceae",
    section_ina: "(tuggal) ramuan",
    section_ing: "(Tuggal) herb"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6e"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Meningkatkan Produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Litsea odorifera Vahl.",
    family: "Lauraceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6d"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Michelia champaca L.",
    family: "Magnoliaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ced")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e6f"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Meningkatkan Produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Zingiber cassumunar Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e70"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Brucea amarissima",
    family: "Simarubaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e71"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e72"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Melastoma malabathricum L.",
    family: "Melastomaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e73"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Eurycoma longifolia Jack.",
    family: "Simarubaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e74"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Pongamia pinnata (L.) Pierre",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e63"),
    ethnic: "MELAYU SUMUT",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jawer Kotok",
    species: "Coleus lumei L.",
    family: "Lamiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e75"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e77"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "",
    species: "Litsea odorifera Vahl.",
    family: "Lauraceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e76"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Wound",
    disease_ing: "wound",
    name_ina: "",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e78"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Eurycoma longifolia Jack.",
    family: "Simarubaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7a"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Wound",
    disease_ing: "wound",
    name_ina: "",
    species: "Pometia pinnata Forster & Forster f.",
    family: "Sapindaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e79"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Wound",
    disease_ing: "wound",
    name_ina: "",
    species: "Zingiber cassumunar Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7b"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7c"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Clausena excavata Burm. F.",
    family: "Rutaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bbe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7d"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimapang (ramuan)",
    section_ing: "rimapang (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e80"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7e"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Macaranga",
    species: "Macaranga tanarius Muell.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e81"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Cabe Rawit",
    species: "Capsicum sp.",
    family: "Solanaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e82"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Delima Putih",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e83"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Macaranga",
    species: "Macaranga rubiginosa Ridl.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e84"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Luka Potong",
    disease_ing: "wounds Cut",
    name_ina: "Macaranga",
    species: "Macaranga subfalcata Muell. Arg.",
    family: "Euphorbiaceae",
    section_ina: "daun muda (ramuan)",
    section_ing: "The young leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e7f"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Gonorrhoe",
    disease_ing: "gonorrhoe",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e88"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bawang Merah",
    species: "Allium sepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e86"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Obat Tenggorokan",
    disease_ing: "Throat medicine",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e85"),
    ethnic: "MELAYU RIAU",
    disease_ina: "Murus",
    disease_ing: "Diarrhea",
    name_ina: "Macaranga",
    species: "Macaranga tribola Muell. Arg.",
    family: "Euphorbiaceae",
    section_ina: "daun, buah (ramuan)",
    section_ing: "leaves, fruits (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e89"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bawang Putih",
    species: "Allium sativum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e8a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bungo Rayo",
    species: "Hibicur rosa-sinensis L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e8c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Gambia",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Rubiaceae",
    section_ina: "getah (tunggal), daun (tunggal)",
    section_ing: "sap (single), leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e8d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kacang Tujuh Alai Daun",
    species: "Phaseolus lunatus L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e8e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Baru",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e8f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar, buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e90"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kunyik",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e91"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Limau Kapeh",
    species: "Citrus aurantifolia (Chris. & Panz.) Swing",
    family: "Rutaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e92"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Ruku - ruku",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e93"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sadingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "akar, batang",
    section_ing: "roots, stems"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e94"),
    ethnic: "MINANGKABAU",
    disease_ina: "Bibir Pecah-Pecah",
    disease_ing: "Dry lips",
    name_ina: "Bodi",
    species: "Homalanthus populneus (Geiseal.) Pox.",
    family: "Euphorbiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e95"),
    ethnic: "MINANGKABAU",
    disease_ina: "Bibir Pecah-Pecah",
    disease_ing: "Dry lips",
    name_ina: "Dama",
    species: "Aleurites moluccana (L.) Wild.",
    family: "Euphorbiaceae",
    section_ina: "akar, buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e96"),
    ethnic: "MINANGKABAU",
    disease_ina: "Bibir Pecah-Pecah",
    disease_ing: "Dry lips",
    name_ina: "Sipiciak",
    species: "Piper umbellatum",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc018f5f9c6046a6a9e87"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Anau",
    species: "Arenga pinnata (Wurmb) Merr",
    family: "Arecaceae",
    section_ina: "daun, nira (tunggal)",
    section_ing: "leaves, sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e97"),
    ethnic: "MINANGKABAU",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e98"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Dadok",
    species: "Erythrina variegata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c29")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e99"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Jarak",
    species: "Jatropa curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Batiak",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar, batang, daun, kulit batang (tunggal)",
    section_ing: "roots, stems, leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9b"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Sidingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Sikarau",
    species: "Enhydra fluctuans Lour.",
    family: "Asteraceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Sikumpai",
    species: "Sacciolepsis interupta (Wild.) Stapf.",
    family: "Poaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sidingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9e9f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lintabung",
    species: "Laphaterum gracile Brogn.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar, buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sikarau",
    species: "Enhydra fluctuans Lour.",
    family: "Asteraceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sikumpai",
    species: "Sacciolepsis interupta (Wild.) Stapf.",
    family: "Poaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Salasiah",
    species: "Ocimum basilicum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Pacah Baliang",
    species: "Strobilanthes criptus L.",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Galigato",
    disease_ing: "Galigato",
    name_ina: "Siriah",
    species: "Piper betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eaa"),
    ethnic: "MINANGKABAU",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar, buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eab"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang Merah",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eac"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Cangkiang",
    species: "Erythrina lithosperma Miq.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ea8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Galigato",
    disease_ing: "Galigato",
    name_ina: "Limau Puruik",
    species: "Citrus histryx D.C.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ead"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Inai",
    species: "Impatiens balsamina L.",
    family: "Balsaminaceae",
    section_ina: "daun, bunga (tunggal",
    section_ing: "leaves, flowers (single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c8f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eae"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kunyik",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eaf"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Limau Sundai",
    species: "Citrus amblycarpa (Hassk.) Ochse.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pisang Gadang",
    species: "Musa sapientum L.",
    family: "Musaceae",
    section_ina: "buah, batang (tunggal)",
    section_ing: "fruit, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pucuak Ubi",
    species: "Manihot ultilissima Pohl.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Rumpuik Saruik",
    species: "Eleusine indica (L.) Gaertn.",
    family: "Poaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Talauh",
    species: "Clibadium surinamense L.",
    family: "Asteraceae",
    section_ina: "daun, bunga",
    section_ing: "flower leaf"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Duku",
    species: "Lansium domesticum Corr.",
    family: "Meliaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Asam Balimbiang",
    species: "Averrhoa carambola L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Laban",
    species: "Vitex pubescens Valh",
    family: "Verbenaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Surian",
    species: "Toona sureni (Bl.) Merr.",
    family: "Myristicaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eba"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Limau Puruik",
    species: "Citrus histryx D.C.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ebb"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Limau Sundai",
    species: "Citrus amblycarpa (Hassk.) Ochse.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ebc"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Limau Kapeh",
    species: "Citrus aurantifolia (Chris. & Panz.) Swing",
    family: "Rutaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ebd"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Manggieh",
    species: "Garcinia mangostana L,",
    family: "Clausiaciae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Mangun - mangun",
    species: "Coleus atropurpureus Benth.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ebf"),
    ethnic: "MINANGKABAU",
    disease_ina: "Melancarkan Aliran Darah",
    disease_ing: "Unleash Blood Flow",
    name_ina: "Anau",
    species: "Arenga pinnata (Wurmb) Merr",
    family: "Arecaceae",
    section_ina: "daun, nira (tunggal)",
    section_ing: "leaves, sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ebe"),
    ethnic: "MINANGKABAU",
    disease_ina: "Melancarkan Aliran Darah",
    disease_ing: "Unleash Blood Flow",
    name_ina: "Lampuyang",
    species: "Zingiber ovoideum Bl.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Melancarkan Aliran Darah",
    disease_ing: "Unleash Blood Flow",
    name_ina: "Langkuweh",
    species: "Alpinia galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Melancarkan Aliran Darah",
    disease_ing: "Unleash Blood Flow",
    name_ina: "Palo",
    species: "Myristica fragrans Houtt.",
    family: "Myristicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Anau",
    species: "Arenga pinnata (Wurmb) Merr",
    family: "Arecaceae",
    section_ina: "daun, nira (tunggal)",
    section_ing: "leaves, sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Dalimo",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eb7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Batiak",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar, batang, daun, kulit batang (tunggal)",
    section_ing: "roots, stems, leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Baru",
    species: "Hibicus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Sidukuang Anak",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "akar, batang, buah, daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Bungo Rayo",
    species: "Hibicus rosa-sinersis L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Kacang Tujuh Alai Daun",
    species: "Phaseolus lunatus L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Tabu",
    species: "Saccharum officinarum L.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eca"),
    ethnic: "MINANGKABAU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Limau Gadang",
    species: "Citrus maxima Merr.",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ecb"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar, buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ecd"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Sidingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ecc"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Rambutan",
    species: "Nephelium lappaceceum L.",
    family: "Sapindaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ece"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Tabu",
    species: "Saccharum officinarum L.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ecf"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Ampadu Tanah",
    species: "Andrographis paniculata (Burm. F.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Galinggang",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "",
    species: "Jatropa curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Jariangau",
    species: "Acorus Calamus L.",
    family: "Arecaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Kapencong",
    species: "Pangium Edule Reinw",
    family: "Flacortiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Kunyik",
    species: "Curcuma Domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Sikarau",
    species: "Enhydra fluctuans Lour.",
    family: "Asteraceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Sikumpai",
    species: "Sacciolepsis interupta (Wild.) Stapf.",
    family: "Poaceae",
    section_ina: "akar, batang, daun (tunggal).",
    section_ing: "roots, stems, leaves (singular)."
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Kunyik Bolai",
    species: "Curcuma Zedoaria Borg. Roscoe",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ed9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Langkuweh",
    species: "Alpinia galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eda"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Pensi-pensi",
    species: "Drymaria cordata (L.) Wild. ex Rds.",
    family: "Caryophillaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ec9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Kapuak",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9edb"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Sarai",
    species: "Cymbopogon nardus (L.) Rendle.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9edc"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9edd"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Siriah",
    species: "Piper Betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ede"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Sipadeh",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9edf"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Suji",
    species: "Justica gendarussa Burm. f.",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "AmBACAN NUAULUg",
    species: "Mangifera foetida Lour.",
    family: "Anacardiaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Batiak",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar,batang,daun,kulit batang (tunggal)",
    section_ing: "roots, stems, leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Lado Kaciak",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Birah",
    species: "Alocasia machorrhiza (L.) Schoot",
    family: "Arecaceae",
    section_ina: "batang,daun,kulit batang (tunggal)",
    section_ing: "stems, leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Dalimo",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Cubadak",
    species: "Artocarpus heterophylus Lamk",
    family: "Moraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Jariangau",
    species: "Acorus Calamus L.",
    family: "Araceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Duku",
    species: "Lansium domesticum Corr.",
    family: "Meliaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eea"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Durian",
    species: "Durio zibethinus Murr.",
    family: "Bombaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eec"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Patai",
    species: "Parkia speciosa Hassk",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d29")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Kacang Tujuah Alai Daun",
    species: "Phaseolus lunatus L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eed"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Manggieh",
    species: "Garcinia mangostana L,",
    family: "Clausiaciae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eeb"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Laban",
    species: "Vitex pubescens Valh",
    family: "Verbenaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eee"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Pudiang Itam",
    species: "Graptophyllum pictum (L.) Griff",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c6b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eef"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Pigago",
    species: "Centella asiatica L. (Urb.)",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef2"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Durian",
    species: "Durio zibethinus Murr.",
    family: "Bombaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef1"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Anjalai",
    species: "Coix lacryma-jobi L",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bcd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef0"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Sidukuang Anak",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ee9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Kopi",
    species: "Coffea robusta L.",
    family: "Rubiaceae",
    section_ina: "daun,kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef3"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Gambia",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Rubiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef4"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kunyik",
    species: "Curcuma Domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef8"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sicerek",
    species: "Clausena excavata Burm. F.",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bbe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef5"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Lintabung",
    species: "Laphaterum gracile Brogn.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef9"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sipadeh",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef7"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cangkeh",
    species: "Syzgium aromaticum (L.) Merr. & Perry.",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9efb"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Bawang Merah",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9efc"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Siriah",
    species: "Piper Betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9efd"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Surian",
    species: "Toona sureni (Bl.) Merr.",
    family: "Myristicaceae",
    section_ina: "daun,kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9efe"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Gambia",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Rubiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9efa"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cubadak",
    species: "Artocarpus heterophylus Lamk",
    family: "Moraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ef6"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9eff"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Kantang",
    species: "Solanum tuberosum L",
    family: "Solanaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f00"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Limau Kapeh",
    species: "Citrus aurantifolia (Chris. & Panz.) Swing",
    family: "Rutaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f03"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Sidingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "akar,batang,daun (tunggal)",
    section_ing: "roots, stems, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f04"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Sikumpai",
    species: "Sacciolepsis interupta (Wild.) Stapf.",
    family: "Poaceae",
    section_ina: "akar,batang,daun (tunggal)",
    section_ing: "roots, stems, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f01"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Palo",
    species: "Myristica fragrans Houtt.",
    family: "Myristicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f02"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Salasiah",
    species: "Ocimum basilicum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f05"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Sikarau",
    species: "Enhydra fluctuans Lour.",
    family: "Asteraceae",
    section_ina: "akar,batang,daun (tunggal)",
    section_ing: "roots, stems, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f06"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f08"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kunyik",
    species: "Curcuma Domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f07"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sarai",
    species: "Cymbopogon nardus (L.) Rendle.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Naneh",
    species: "Ananas comosus (L.) Merr.",
    family: "Bromeliaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0b"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Ampadu Tanah",
    species: "Andrographis paniculata (Burm. F.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun,batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bawang Merah",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Araceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Batiak",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar,batang,daun,kulit batang (tunggal)",
    section_ing: "roots, stems, leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f09"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Limau Kapeh",
    species: "Citrus aurantifolia (Chris. & Panz.) Swing",
    family: "Rutaceae",
    section_ina: "akar,batang,buah (tunggal)",
    section_ing: "roots, stems, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f11"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bawang Putieh",
    species: "Allium sativum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f10"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bodi",
    species: "Homalanthus populneus (Geiseal.) Pox.",
    family: "Euphorbiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f12"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Siriah",
    species: "Piper Betle L",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f13"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Dalimo",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f0f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bungo Rayo",
    species: "Hibiscus rosa-sinensis L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f16"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Kunyik",
    species: "Curcuma Domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang, buah(tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f17"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Mangun-mangun",
    species: "Coleus atropurpureus Benth.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f18"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Pudiang Itam",
    species: "Graptophyllum pictum (L.) Griff",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c6b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f19"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Sipadeh",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1b"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Sicerek",
    species: "Clausena excavata Burm. F.",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bbe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Dama",
    species: "Aleurites moluccana (L.) Willd",
    family: "Euphorbiaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f14"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Dadok",
    species: "Erythrina variegata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c29")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Galinggang",
    species: "Cassia alata L.",
    family: "Caeslpiniaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kunyik Bolai",
    species: "Curcuma Zedoaria Borg. Roscoe",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Sipadeh",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f1f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Bawang Merah",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f15"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Karambie",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f20"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Bawang Putieh",
    species: "Allium sativum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f21"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Inai",
    species: "Impatiens balsamina L.",
    family: "Balsaminaceae",
    section_ina: "daun,bunga (tunggal)",
    section_ing: "leaves, flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c8f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f23"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f22"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Dama",
    species: "Aleurites moluccana (L.) Willd",
    family: "Euphorbiaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f25"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Tulang",
    disease_ing: "Bone pain",
    name_ina: "Sidingin",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "",
    section_ing: "#VALUE!"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f24"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Ruku-ruku",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f26"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Salasiah",
    species: "Ocimum basilicum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f27"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Limau Gadang",
    species: "Citrus Maxima Merr.",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Limau puruik",
    species: "Citrus histryx D.C.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f29"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Limau Kapeh",
    species: "Citrus aurantifolia (Chris. & Panz.) Swing",
    family: "Rutaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2b"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Tulang",
    disease_ing: "Bone pain",
    name_ina: "Sitawa",
    species: "Costus specious (Koening.) J. E. Smith.",
    family: "Zingiberaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Naneh",
    species: "Ananas comosus (L.) Merr.",
    family: "Bromeliaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Limau sundai",
    species: "Citrus amblycarpa (Hassk.) Ochse.",
    family: "Rutaceae",
    section_ina: "kulit batang, buah (tunggal)",
    section_ing: "bark, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Galinggang",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f2e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Pisau Gadang",
    species: "Musa sapientum L.",
    family: "Musaceae",
    section_ina: "buah,batang (tunggal)",
    section_ing: "fruit, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f30"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Naneh",
    species: "Ananas comosus (L.) Merr.",
    family: "Bromeliaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f31"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Pigago",
    species: "Centella asiatica L. (Urb.)",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f32"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Batiak",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar,batang,daun,kulit batang (tunggal)",
    section_ing: "roots, stems, leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f33"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Dama",
    species: "Aleurites moluccana (L.) Willd",
    family: "Euphorbiaceae",
    section_ina: "akar,buah (tunggal)",
    section_ing: "roots, fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f34"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Pisau Gadang",
    species: "Musa sapientum L.",
    family: "Musaceae",
    section_ina: "buah,batang (tunggal)",
    section_ing: "fruit, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f35"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Rumpuik Saruik",
    species: "Eleusine indica (L.) Gaertn.",
    family: "",
    section_ina: "",
    section_ing: "#VALUE!"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f37"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Sidukuang Anak",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "akar,batang,buah,daun (tunggal)",
    section_ing: "roots, stems, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f36"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Sarai",
    species: "Cymbopogon nardus (L.) Rendle.",
    family: "poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f38"),
    ethnic: "MINANGKABAU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Rubiaceae",
    section_ina: "getah (ramuan)",
    section_ing: "sap (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f39"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Kunyik",
    species: "Curcuma Domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang,buah (tunggal)",
    section_ing: "rhizome, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f28"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sakit Tulang",
    disease_ing: "Bone pain",
    name_ina: "Kunyik Bolai",
    species: "Curcuma Zedoaria Borg. Roscoe",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3a"),
    ethnic: "MINANGKABAU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Sosor Bebek",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3b"),
    ethnic: "MINANGKABAU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Euphorbiaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3c"),
    ethnic: "MINANGKABAU",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3d"),
    ethnic: "MINANGKABAU",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3e"),
    ethnic: "MINANGKABAU",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f3f"),
    ethnic: "MINANGKABAU",
    disease_ina: "Terkilir",
    disease_ing: "dislocate",
    name_ina: "Jariangau",
    species: "Acorus Calamus L.",
    family: "Araceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f40"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f44"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f43"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "",
    species: "Alstonia Scholaris R, Br,",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f45"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Brucea Amarissima",
    family: "Simarubaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f46"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "",
    disease_ing: "",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f47"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Curculigo latifolia Dryand ex. W. T. Ait",
    family: "Amaryllidaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f48"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f41"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Alstonia Scholaris R, Br,",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f49"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Dioscorea aculeata Auct",
    family: "Dioscoreaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4a"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Justicia gendarussa Burmf",
    family: "Acanthaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4b"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Polyalthia sumatrana King",
    family: "Annonaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4c"),
    ethnic: "MENTAWAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f42"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4d"),
    ethnic: "MENTAWAI",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4e"),
    ethnic: "MENTAWAI",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f4f"),
    ethnic: "MENTAWAI",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "",
    species: "Leea sp.",
    family: "Leeaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f50"),
    ethnic: "MELAYU SUMBAR",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "",
    species: "Alstonia Scholaris R, Br,",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f51"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Abelmoschus moschatus L",
    family: "Malvaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce213bc061d4cd98ae5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f52"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Donax cannaeformis (G. Forst.) K. Schum",
    family: "Marantaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f54"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Lasianthrus inaequalis BI.",
    family: "Rubiaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f53"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f55"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Derris eliptica (Roxb.) Bth. / Fabaceae Schum",
    family: "Marantaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f56"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Merremia peltata (L.) Merr",
    family: "Convolvulaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f57"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Merremia vitifolia (Burm. f.) Hallier. f.",
    family: "Convolvulaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f59"),
    ethnic: "MENTAWAI",
    disease_ina: "Jantung berdebar debar",
    disease_ing: "Heart pounding pounding",
    name_ina: "",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5a"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Begonia sp.",
    family: "Begoniaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5b"),
    ethnic: "MENTAWAI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Antrophyum callifolium",
    family: "Adiantaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5c"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Camanga odorata (Lmk.) Hook. f. & T",
    family: "Annonaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5d"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5e"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Evaria littoralis",
    family: "",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f5f"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Palaquium sp",
    family: "Sapotaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f60"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Piper sarmentosum Roxb. ex Hunter",
    family: "Piperaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f61"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f62"),
    ethnic: "MENTAWAI",
    disease_ina: "Kembung",
    disease_ing: "bloating",
    name_ina: "",
    species: "Commelina palaeta Hassk",
    family: "Commelinaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f63"),
    ethnic: "MENTAWAI",
    disease_ina: "Kembung",
    disease_ing: "bloating",
    name_ina: "",
    species: "Polygonum barbatum L.",
    family: "Polygonaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f64"),
    ethnic: "MENTAWAI",
    disease_ina: "Sakit kuning",
    disease_ing: "Jaundice",
    name_ina: "",
    species: "Curcuma longa L",
    family: "Zingiberaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f65"),
    ethnic: "MENTAWAI",
    disease_ina: "Sakit kuning",
    disease_ing: "Jaundice",
    name_ina: "",
    species: "Amomum aculeatum Roxb",
    family: "Zingiberaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f66"),
    ethnic: "MENTAWAI",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Psychotria montana BI.",
    family: "Rubiaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f67"),
    ethnic: "MENTAWAI",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Sarcocephalus undulatus Miq",
    family: "Rubiaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f68"),
    ethnic: "MENTAWAI",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Stemonurus secundiflorus BI",
    family: "Icacinaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f69"),
    ethnic: "MENTAWAI",
    disease_ina: "Suara serak",
    disease_ing: "Hoarseness",
    name_ina: "",
    species: "Tetracera indica Merr",
    family: "Dilleniaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f58"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Alpinia malaccensis (Burm. f.) Rose",
    family: "Zingiberaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6b"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Selaginella plana Hieron",
    family: "Selaginellaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6a"),
    ethnic: "MENTAWAI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6c"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Asam Gelugur",
    species: "Garnicia sp",
    family: "Clusiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6d"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantifolia L. Subspec",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6e"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Akar kelobosan",
    species: "Rourea sp",
    family: "Commaraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f6f"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Kayu Manau",
    species: "Canarium littorale BI",
    family: "Burseraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f70"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Digigigt Binatang Berbisa",
    disease_ing: "Venomous Animals Digigigt",
    name_ina: "Jerangau",
    species: "Acorus calamus L",
    family: "Araceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f71"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Digigigt Binatang Berbisa",
    disease_ing: "Venomous Animals Digigigt",
    name_ina: "Daun Capo",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f72"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "BACAN NUAULUg",
    species: "Mangifera sp",
    family: "Anacardiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f73"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Ketepeng",
    species: "Cassia alata L",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f77"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Paku Gajah",
    species: "Angiopteris cf. evecta (Forst) Hoff",
    family: "Marattiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f76"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Bidaro putih",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f78"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pulai",
    species: "Alstonia angustiloba Miq.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f79"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Rumput Tae Ayam",
    species: "Ageratum conyzoides L",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7a"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Sungkai",
    species: "Peronema canescens Jack",
    family: "Verbenaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f75"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Durian",
    species: "Durio zibethinus Murr",
    family: "Bombaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7b"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Sungkai",
    species: "Peronema canescens Jack",
    family: "Verbenaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f74"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Akar kuning",
    species: "Arcangelisia flava (L.) Merr",
    family: "Menispermaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7c"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Aro lemak",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7d"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Mampat",
    species: "Cratoxylum sumatranum (Jack.) BI",
    family: "Hyperiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7e"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Pilek",
    disease_ing: "Cold",
    name_ina: "Daun Capo",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f7f"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f80"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Setawar",
    species: "Costus sp",
    family: "Zingiberaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f81"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Telinga Bernanah",
    disease_ing: "ear Bernanah",
    name_ina: "Setanggi",
    species: "Dianella Cantoniensis",
    family: "Liliaceae",
    section_ina: "",
    section_ing: ""
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f82"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Angin duduk",
    disease_ing: "wind seated",
    name_ina: "Temu kunyit",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f83"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Biduran",
    disease_ing: "Urticaria",
    name_ina: "Gandasuli",
    species: "Hedychium coronarium Koenig",
    family: "Zingiberaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f84"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Demam panas",
    disease_ing: "Fever",
    name_ina: "Gandasuli",
    species: "Hedychium coronarium Koenig",
    family: "Zingiberaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f86"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Demam sesudah melahirkan",
    disease_ing: "Fever after childbirth",
    name_ina: "Pro Rum/Kemilu",
    species: "Catimbium malaccensis (Burm.f.)",
    family: "",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f85"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Demam sesudah melahirkan",
    disease_ing: "Fever after childbirth",
    name_ina: "Pandan",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f88"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Ketan",
    species: "Oryza sativa L forma glutinosa",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f89"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Demam sesudah melahirkan",
    disease_ing: "Fever after childbirth",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8a"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Staro",
    species: "Costus speciosus (Koenig) J.E. Smith",
    family: "Zingiberaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f87"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Demam sesudah melahirkan",
    disease_ing: "Fever after childbirth",
    name_ina: "Beras",
    species: "Oryza sativa L",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8d"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Gatal-gatal",
    disease_ing: "Itchy",
    name_ina: "Pro Rum/Kemilu",
    species: "Catimbium malaccensis (Burm.f.)",
    family: "",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8e"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Maro Kepayang",
    species: "Scaphium macropodum Beumee",
    family: "Sterculiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8f"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Lakuas Puti",
    species: "Alpinia galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f90"),
    ethnic: "MELAYU TRADISIONAL",
    disease_ina: "Pening",
    disease_ing: "Dizziness",
    name_ina: "Daun Capo",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f91"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Lapuing",
    species: "Zingiber aromaticum val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8b"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Gatal-gatal",
    disease_ing: "Itchy",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f92"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Lever",
    disease_ing: "Lever",
    name_ina: "Temu kunyit",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f93"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Gandasuli",
    species: "Hedychium coronarium Koenig",
    family: "Zingiberaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f94"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f95"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Mempercepat putus pusar pada bayi",
    disease_ing: "Accelerating broke navel in infants",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f96"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Menghilangkan bau mulut",
    disease_ing: "Eliminate bad breath",
    name_ina: "Lapuing",
    species: "Zingiber aromaticum val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f98"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Lakuas Puti",
    species: "Alpinia galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f97"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Panas",
    disease_ing: "Hot",
    name_ina: "Sepedas Abang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f99"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Panas",
    disease_ing: "Hot",
    name_ina: "Pro Rum/Kemilu",
    species: "Catimbium malaccensis (Burm.f.)",
    family: "",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9a"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Lakuas abang",
    species: "Alpinia officinarum Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9c"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Pro pedas",
    species: "Elletaria cardamomum (L.) Maton",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f8c"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Gatal-gatal",
    disease_ing: "Itchy",
    name_ina: "Beras",
    species: "Oryza sativa L",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9b"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Paru-paru",
    disease_ing: "Lungs",
    name_ina: "Ceko",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9e"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Sepedas",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa0"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Pro pedas",
    species: "Elletaria cardamomum (L.) Maton",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa1"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Sirih",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9d"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Pembersih darah nifas",
    disease_ing: "Postpartum blood purifier",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9f9f"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Pencahar perut",
    disease_ing: "Laxatives stomach",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa2"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Sepedas",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa4"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kepala",
    disease_ing: "Headache",
    name_ina: "Cocor bebek",
    species: "Kalanchoe pinnata pers",
    family: "Crassulaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa3"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Sepedas Abang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa5"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kepala",
    disease_ing: "Headache",
    name_ina: "Staro",
    species: "Costus speciosus (Koenig) J.E. Smith",
    family: "Zingiberaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa6"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kepala",
    disease_ing: "Headache",
    name_ina: "Ketan",
    species: "Oryza sativa L. forma glutinosa",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa8"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kepala sesudah melahirkan",
    disease_ing: "Headache after childbirth",
    name_ina: "Belai",
    species: "Zingiber purpureum Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e32")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa7"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Sepedas Abang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fa9"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kuning",
    disease_ing: "Jaundice",
    name_ina: "Pro kale",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "tangkai bunga (tunggal)",
    section_ing: "flower stalk (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fab"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Temu kunyit",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9faa"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit kuning",
    disease_ing: "Jaundice",
    name_ina: "Belai",
    species: "Zingiber purpureum Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (tunggal)",
    section_ing: "Rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e32")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fac"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Belai Hantu",
    species: "Zingiber ottensii val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fad"),
    ethnic: "LAMPUNG",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bambu",
    species: "Dinochloa scandens (Blume ex Nees.) O.K.",
    family: "Poaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb0"),
    ethnic: "LAMPUNG",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fae"),
    ethnic: "LAMPUNG",
    disease_ina: "Batuk Karena Flu",
    disease_ing: "Cough Due to Flu",
    name_ina: "Kencur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb2"),
    ethnic: "LAMPUNG",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Macaranga",
    species: "Macaranga tanarius Muell. Arg",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb1"),
    ethnic: "LAMPUNG",
    disease_ina: "Flu",
    disease_ing: "Flu",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb3"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Temu Hitam",
    species: "Curcuma aeruginosa Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bef")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb4"),
    ethnic: "LAMPUNG",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Akar jelatung",
    species: "Myriocarpa longipes",
    family: "Urticaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9faf"),
    ethnic: "LAMPUNG",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb8"),
    ethnic: "LAMPUNG",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Delima putih",
    species: "",
    family: "",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb7"),
    ethnic: "LAMPUNG",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Cabe rawit",
    species: "Capsicum sp",
    family: "Solanaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb5"),
    ethnic: "LAMPUNG",
    disease_ina: "Gonorrhoe",
    disease_ing: "gonorrhoe",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb9"),
    ethnic: "LAMPUNG",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Cabe",
    species: "Capsicum frutescens L.",
    family: "Solanaceae",
    section_ina: "buah tua (tunggal)",
    section_ing: "old fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fba"),
    ethnic: "LAMPUNG",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Kates",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fbb"),
    ethnic: "LAMPUNG",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Lantoro",
    species: "Leucaena leucocephala (Lmk.) De Wit",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fbc"),
    ethnic: "LAMPUNG",
    disease_ina: "Luka pototng",
    disease_ing: "Luka pototng",
    name_ina: "Macaranga",
    species: "Macaranga tanarius Muell. Arg",
    family: "Euphorbiaceae",
    section_ina: "daun muda (ramuan)",
    section_ing: "The young leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fbd"),
    ethnic: "LAMPUNG",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Dadap serep",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc0"),
    ethnic: "LAMPUNG",
    disease_ina: "Menguatkan Gigi",
    disease_ing: "strengthens Teeth",
    name_ina: "Mbako",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fbe"),
    ethnic: "LAMPUNG",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fbf"),
    ethnic: "LAMPUNG",
    disease_ina: "Menghilangkan bau keringat",
    disease_ing: "Remove the smell of sweat",
    name_ina: "Kemangi",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc1"),
    ethnic: "LAMPUNG",
    disease_ina: "Obat tenggorokan",
    disease_ing: "drug throat",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc3"),
    ethnic: "LAMPUNG",
    disease_ina: "Kontrasepsi",
    disease_ing: "Contraception",
    name_ina: "Macaranga",
    species: "Macaranga rubiginosa Ridl",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc2"),
    ethnic: "LAMPUNG",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Jagung",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji tua (tunggal)",
    section_ing: "old seed (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc4"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Cengkeh",
    species: "Syzgium aromaticum (L.) Merr. & Perry.",
    family: "Myrtaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc5"),
    ethnic: "LAMPUNG",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Laos",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc6"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Jeruk Pecel",
    species: "Citrus aurantifolia (Chris. & Panz) Swing",
    family: "Rutaceae",
    section_ina: "buah tua (tunggal)",
    section_ing: "old fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc7"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Kapulogo",
    species: "Amomum companctum",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc8"),
    ethnic: "LEMBAK DELAPAN",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Merica",
    species: "Myrica esculenta Ham. ex D. Don",
    family: "Myricaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fc9"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Kemukus",
    species: "Piper cubeba L.f",
    family: "Piperaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fca"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fcb"),
    ethnic: "LAMPUNG",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "-",
    species: "Helicteres isora L.",
    family: "Sterculiaceae",
    section_ina: "buah kering (ramuan)",
    section_ing: "dried fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fcc"),
    ethnic: "LAMPUNG",
    disease_ina: "Perut dingin",
    disease_ing: "cold stomach",
    name_ina: "Cincau",
    species: "Stephania sp.",
    family: "Menispermaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fb6"),
    ethnic: "LAMPUNG",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Macaranga",
    species: "Macaranga involucrata Baill.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fcd"),
    ethnic: "SUNDA",
    disease_ina: "Ayan",
    disease_ing: "epilepsy",
    name_ina: "Ceplukan",
    species: "Physalisangulata L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fce"),
    ethnic: "LAMPUNG",
    disease_ina: "Tolak Angin",
    disease_ing: "Reject Wind",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fcf"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Paria belut",
    species: "Trichosanthes anguina L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd0"),
    ethnic: "SUNDA",
    disease_ina: "Banyak meludah",
    disease_ing: "lots of spit",
    name_ina: "Manggis",
    species: "Garcinia mangostana L.",
    family: "Clusiaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd1"),
    ethnic: "SUNDA",
    disease_ina: "Cacing pita",
    disease_ing: "Tapeworm",
    name_ina: "Wudani",
    species: "Quisqualis indica L.",
    family: "Combretaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd2"),
    ethnic: "SUNDA",
    disease_ina: "Cacar Air",
    disease_ing: "Chicken pox",
    name_ina: "Trengguli Wungwang",
    species: "Casia javanica L.",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd4"),
    ethnic: "LAMPUNG",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jengkol",
    species: "Archidendron jiringa (Jack.) L. C. Nielsen",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd3"),
    ethnic: "SUNDA",
    disease_ina: "Cacing tambang",
    disease_ing: "Hookworm",
    name_ina: "Wudani",
    species: "Quisqualis indica L.",
    family: "Combretaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd5"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Belimbing",
    species: "Averrhoa carambola L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd6"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Lobi-lobi",
    species: "Flacourtia inermis Roxb",
    family: "Flacourticaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd7"),
    ethnic: "SUNDA",
    disease_ina: "Batuk Rejan",
    disease_ing: "Whooping cough",
    name_ina: "Adas",
    species: "Foeniculum vulgare Mill.",
    family: "Apiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd8"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Mengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fd9"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Mentimun",
    species: "Cucumis sativus Linn",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bea")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fdb"),
    ethnic: "SUNDA",
    disease_ina: "Murus",
    disease_ing: "Diarrhea",
    name_ina: "Macaranga",
    species: "Macaranga tanarius Muell. Arg",
    family: "Euphorbiaceae",
    section_ina: "daun,buah (ramuan)",
    section_ing: "leaves, fruits (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fda"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Semangka",
    species: "Citrullus vulgaris Schrad.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fde"),
    ethnic: "SUNDA",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Jinten",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "biji,buah (tunggal)",
    section_ing: "seeds, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fdd"),
    ethnic: "SUNDA",
    disease_ina: "Gusi berdarah",
    disease_ing: "bleeding gums",
    name_ina: "Belimbing wuluh",
    species: "Averrhoa bilimbi L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe0"),
    ethnic: "SUNDA",
    disease_ina: "Kencing darah",
    disease_ing: "blood urine",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fdc"),
    ethnic: "SUNDA",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe3"),
    ethnic: "SUNDA",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Kelapa Hijau",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe2"),
    ethnic: "SUNDA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Delima putih",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "Kulit buah (tunggal)",
    section_ing: "The skin of fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fdf"),
    ethnic: "SUNDA",
    disease_ina: "Kegemukan",
    disease_ing: "Obesity",
    name_ina: "Jati Belanda",
    species: "Guazuma tomentosa K. Schum",
    family: "Sterculiaceae",
    section_ina: "daun,buah (tunggal)",
    section_ing: "leaves, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c6f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe4"),
    ethnic: "SUNDA",
    disease_ina: "Koreng",
    disease_ing: "Ulceration",
    name_ina: "Bestru",
    species: "Luffa cylindrica Auct",
    family: "Cucurbitaceae",
    section_ina: "daun,buah (tunggal)",
    section_ing: "leaves, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe5"),
    ethnic: "SUNDA",
    disease_ina: "Lambung lemah",
    disease_ing: "gastric weak",
    name_ina: "Lengkuas",
    species: "Alpinia galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe6"),
    ethnic: "SUNDA",
    disease_ina: "Kurang darah",
    disease_ing: "Less blood",
    name_ina: "Terung belanda",
    species: "Cyphomandra betacea Cav. Sendtn",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe7"),
    ethnic: "SUNDA",
    disease_ina: "Lemah syahwaat",
    disease_ing: "weak syahwaat",
    name_ina: "Cabe",
    species: "Capsicum retrofractum",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe8"),
    ethnic: "SUNDA",
    disease_ina: "Lesu",
    disease_ing: "Sluggish",
    name_ina: "Panili",
    species: "Vanilla planifolia Andr",
    family: "Orchidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e1c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe9"),
    ethnic: "SUNDA",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Lombok",
    species: "Capsicum annum L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fea"),
    ethnic: "SUNDA",
    disease_ina: "Membersihkan darah kotor",
    disease_ing: "Cleanse dirty blood",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9feb"),
    ethnic: "SUNDA",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Takokak",
    species: "Solanum torvum Swartz",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fec"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Sawo Menila",
    species: "Achras zapota Auct",
    family: "Sapotaceae",
    section_ina: "buah,getah (tunggal)",
    section_ing: "fruit, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fed"),
    ethnic: "SUNDA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Ceremai",
    species: "Phyllanthus acidus (L.) Skeels",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d3d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fee"),
    ethnic: "SUNDA",
    disease_ina: "Mulas",
    disease_ing: "Heartburn",
    name_ina: "Salak",
    species: "Salacca edulis Reinw",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fef"),
    ethnic: "SUNDA",
    disease_ina: "Nyeri sendi jari kaki",
    disease_ing: "Joint pain toe",
    name_ina: "Terung Ngor",
    species: "Solanum indicum L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff1"),
    ethnic: "SUNDA",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Srigading",
    species: "Nyctanthes arbo-dica charantia L.",
    family: "Oleaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff2"),
    ethnic: "SUNDA",
    disease_ina: "Raja singa",
    disease_ing: "Lion King",
    name_ina: "Gandaria",
    species: "Bouea macrophylla Griff",
    family: "Anacardiaceae",
    section_ina: "daun,buah (tunggal)",
    section_ing: "leaves, fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff0"),
    ethnic: "SUNDA",
    disease_ina: "Darah rendah",
    disease_ing: "Low blood pressure",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff3"),
    ethnic: "SUNDA",
    disease_ina: "Raja singa",
    disease_ing: "Lion King",
    name_ina: "Markisa",
    species: "Passiflora quadrangularis L",
    family: "Passifloraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d2a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff4"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kemloko",
    species: "Phyllanthus emblica L.",
    family: "Euphorbiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3e")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff5"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Labu siam",
    species: "Sechium edule Jacq. Swartz",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98db5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff6"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Apokat",
    species: "Persea gratissima Gaertn.",
    family: "Lauraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff8"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Pisang biji",
    species: "Musa brachycarpa Back",
    family: "Musaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fe1"),
    ethnic: "SUNDA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Mahoni",
    species: "Swietenia mahagoni Jacq",
    family: "Meliaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98de8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff7"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Sirsak",
    species: "Annona muricata L.",
    family: "Amonaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ff9"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ffa"),
    ethnic: "SUNDA",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Kemangi",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ffb"),
    ethnic: "SUNDA",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Maja Gedang",
    species: "Aegle marmelos (L.)",
    family: "Rutaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ffc"),
    ethnic: "SUNDA",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Oyong",
    species: "Luffa acutangula Roxb",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ffd"),
    ethnic: "SUNDA",
    disease_ina: "Skorbut",
    disease_ing: "skorbut",
    name_ina: "Mangga",
    species: "Mangifera indica L",
    family: "Anacardiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9fff"),
    ethnic: "SUNDA",
    disease_ina: "Urat saraf lemah",
    disease_ing: "Weak nerves",
    name_ina: "Gandarukam",
    species: "Resina carneola",
    family: "",
    section_ina: "buah, kulit batang (tunggal)",
    section_ing: "fruit, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa000"),
    ethnic: "SUNDA",
    disease_ina: "Urat saraf lemah",
    disease_ing: "Weak nerves",
    name_ina: "Nanas",
    species: "Ananas comosus Merr.",
    family: "Bromeliaceae",
    section_ina: "sari buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa002"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bitung",
    species: "Dendrocalamus asper Back",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6a9ffe"),
    ethnic: "SUNDA",
    disease_ina: "Tulang Lemah",
    disease_ing: "Weak bones",
    name_ina: "Kenari",
    species: "Canarium commune L.",
    family: "Burseraceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa004"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Taleus Hideung",
    species: "Xanthosoma nigrum (Vell.) Masf",
    family: "Araceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa005"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Blimbing Haseum",
    species: "Averrhoa blimbi L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa007"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Buntiris",
    species: "Kalanchoe pinmata Pers",
    family: "Crassulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa006"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Gedung Ranti",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa008"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Tapak dara",
    species: "Catharanthus rosetus (L.) G. Don",
    family: "Apocynaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa001"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sereh",
    species: "Cymbopogon nardus (L.) Rendle",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00b"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Dadap Ayam",
    species: "Erythrina variegata (Hassle.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c29")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00a"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Honje",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00c"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Kapol",
    species: "Amomum cardamomun L.",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00e"),
    ethnic: "SUNDA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa003"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00f"),
    ethnic: "SUNDA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Panglay",
    species: "Zingiber cassumunar Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa010"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Pace",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa011"),
    ethnic: "SUNDA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Sidaguri",
    species: "Sida rhombifolia L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa013"),
    ethnic: "SUNDA",
    disease_ina: "Koreng",
    disease_ing: "Ulceration",
    name_ina: "Selasih",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa012"),
    ethnic: "SUNDA",
    disease_ina: "kebugaran tubuh",
    disease_ing: "body fitness",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) Gaud",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa00d"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Singa Depa",
    species: "Abelmoschus manihot (L.) Medik",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa009"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Cingcau",
    species: "Cyclea barbata (Wall.) Miers.",
    family: "Menispermaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa016"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Ki Urat",
    species: "Plantego major L.",
    family: "Plantaginaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa017"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Babadotan",
    species: "Ageratum conyzoides L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa015"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Jukut riut",
    species: "Mimosa pudica L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cef")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa018"),
    ethnic: "SUNDA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Selasih",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa019"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Hanjuang",
    species: "Cordyline fruticosa (L.) A. Chev",
    family: "Agavaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01a"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Harendong bulu",
    species: "Clidemia hirta (L.) G. Don.",
    family: "Melastomaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01b"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kirinyuh",
    species: "Eupatorium riparium Regel.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01c"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Nanangkaan",
    species: "Euphorbia hirta L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c35")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01d"),
    ethnic: "SUNDA",
    disease_ina: "Melancarkan persalinan",
    disease_ing: "expedite delivery",
    name_ina: "Haraway",
    species: "Boehmeria nivea (L.) Gaud",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01e"),
    ethnic: "SUNDA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Hiris",
    species: "Cajanus cajan (L.) Huth",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa01f"),
    ethnic: "SUNDA",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Ki remek",
    species: "Hemigraphis sp",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa020"),
    ethnic: "SUNDA",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Pacing",
    species: "Costus speciosus (Koenig) J.E. Smith",
    family: "Zingiberaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa021"),
    ethnic: "SUNDA",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Kunyit",
    species: "Curcuma domestica Va.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa022"),
    ethnic: "SUNDA",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Kunyit bodas",
    species: "Curcuma aurantiaca Zijp",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa023"),
    ethnic: "SUNDA",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Kunyit gede",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa024"),
    ethnic: "SUNDA",
    disease_ina: "Menghilangkan bau badan",
    disease_ing: "Eliminate body odor",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa025"),
    ethnic: "SUNDA",
    disease_ina: "Menghangatkan badan",
    disease_ing: "keep warm",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa026"),
    ethnic: "SUNDA",
    disease_ina: "Menghilangkan bau badan",
    disease_ing: "Eliminate body odor",
    name_ina: "Salam",
    species: "Eugenia polyantha Wight",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa027"),
    ethnic: "SUNDA",
    disease_ina: "Obat khusus pria",
    disease_ing: "Special medicine man",
    name_ina: "Ki cengceng",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa028"),
    ethnic: "SUNDA",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Kaca piring",
    species: "Gardenia angusta (L.) Merr.",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa014"),
    ethnic: "SUNDA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Alang-alang",
    species: "Imperata cylindrica Nees",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02a"),
    ethnic: "SUNDA",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Sesawi tanah",
    species: "Nasturtium montanum",
    family: "Brassicaeae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa029"),
    ethnic: "SUNDA",
    disease_ina: "Obat khusus pria",
    disease_ing: "Special medicine man",
    name_ina: "Takokak",
    species: "Solanum torvum Swartz",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02b"),
    ethnic: "SUNDA",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Suji",
    species: "Pleomele angustiloba Roxb N.E Br",
    family: "Agavaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02c"),
    ethnic: "SUNDA",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Laja",
    species: "Alpinia galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02d"),
    ethnic: "SUNDA",
    disease_ina: "Pegal-pegal",
    disease_ing: "Aches",
    name_ina: "Haras Tulang",
    species: "Chloranthus elation R. Br.",
    family: "Chloranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02e"),
    ethnic: "SUNDA",
    disease_ina: "Pegal-pegal",
    disease_ing: "Aches",
    name_ina: "Kencur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa031"),
    ethnic: "SUNDA",
    disease_ina: "Obat khusus wanita",
    disease_ing: "Special medicine woman",
    name_ina: "Antanan",
    species: "Centella asiatica (L.) Urb",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa032"),
    ethnic: "SUNDA",
    disease_ina: "Peluruh air seni",
    disease_ing: "Urine laxative",
    name_ina: "Pecah beling",
    species: "Seriocalyx crispus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa033"),
    ethnic: "SUNDA",
    disease_ina: "Peluruh air seni",
    disease_ing: "Urine laxative",
    name_ina: "Ginseng jawa",
    species: "Talinum paniculatum (Jacq) Faertn",
    family: "Portulacaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa034"),
    ethnic: "SUNDA",
    disease_ina: "Penyubur rambut",
    disease_ing: "hair growth",
    name_ina: "Lidah buaya",
    species: "Aloe vera (L.) Webb",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa035"),
    ethnic: "SUNDA",
    disease_ina: "Penyubur rambut",
    disease_ing: "hair growth",
    name_ina: "Seledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa02f"),
    ethnic: "SUNDA",
    disease_ina: "Pegal-pegal",
    disease_ing: "Aches",
    name_ina: "Panglay Hitam",
    species: "Zingiber sp.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa030"),
    ethnic: "SUNDA",
    disease_ina: "Peluruh air seni",
    disease_ing: "Urine laxative",
    name_ina: "Alpukat",
    species: "Persea americana Mill",
    family: "Lauraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa036"),
    ethnic: "SUNDA",
    disease_ina: "Penghangat perut",
    disease_ing: "belly warmers",
    name_ina: "Jotang",
    species: "Spilanthes acmela (L.) Murr",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa037"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Jawer Kotok",
    species: "Coleus sp.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa039"),
    ethnic: "SUNDA",
    disease_ina: "Perut kembung",
    disease_ing: "Bloated",
    name_ina: "Bawang merah",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi,daun (tunggal)",
    section_ing: "tubers, leaves (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03a"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Gandarusa",
    species: "Justicia gendarussa Burm",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03c"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Singgugu",
    species: "Clerodendrum serratum (L.) Moon",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03b"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Sampeu",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03e"),
    ethnic: "SUNDA",
    disease_ina: "Sakit gigi",
    disease_ing: "Tooth ache",
    name_ina: "Tikeul Balung",
    species: "Euphorbia tirucalli L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03d"),
    ethnic: "SUNDA",
    disease_ina: "Sakit badan",
    disease_ing: "Body ache",
    name_ina: "cecenet",
    species: "Physalis minima L.",
    family: "Solanaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa03f"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus (BI.) Miq",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa042"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Tamiang",
    species: "Schizotachyum sp.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa041"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Katu",
    species: "Sauropus androgynus (L.) Merr",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa040"),
    ethnic: "SUNDA",
    disease_ina: "Pencahar perut",
    disease_ing: "Laxatives stomach",
    name_ina: "Handeuleum",
    species: "Graptophyllum pictum (L.) Griff",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c6b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa043"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Cengek",
    species: "Capcisum frutescens L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa044"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jambu Biji",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa045"),
    ethnic: "SUNDA",
    disease_ina: "Pencahar perut",
    disease_ing: "Laxatives stomach",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa047"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kalingsir",
    species: "Gynura procumbens (Lour.) Merr",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c74")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa046"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Patrawali",
    species: "Tinospora crispa (L.) Diels",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e03")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa048"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Saga",
    species: "Abrus precatorius L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98ae6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa049"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Sirih Putih",
    species: "Piper sp.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa038"),
    ethnic: "SUNDA",
    disease_ina: "Perut kembung",
    disease_ing: "Bloated",
    name_ina: "Bawang daun",
    species: "Allium fistulosum L.",
    family: "Amaryllidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b05")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04a"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Ulu Hati",
    disease_ing: "Ulu Sick Hearts",
    name_ina: "Beungbeureuman",
    species: "Iresine herbstii Hook f.",
    family: "Amaranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04b"),
    ethnic: "SUNDA",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Karuk",
    species: "Piper sarmentosum Roxb.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04c"),
    ethnic: "SUNDA",
    disease_ina: "Anak Susah Jalan",
    disease_ing: "Kids Hard Way",
    name_ina: "Kisampang",
    species: "Evodia latifolia DC.",
    family: "Rutaceae",
    section_ina: "ranting,daun (tunggal)",
    section_ing: "twig, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04d"),
    ethnic: "SUNDA",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "Hahapaan",
    species: "Moghania strobilifera (L.) St Hill ex O.K",
    family: "",
    section_ina: "buah (tunggal), bunga (ramuan)",
    section_ing: "fruit (singular), flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04e"),
    ethnic: "SUNDA",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "Kingkilaban",
    species: "Mussaenda frondosa Lindd",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa04f"),
    ethnic: "SUNDA",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "Seureuh",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa050"),
    ethnic: "SUNDA",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "Tebu",
    species: "Saccharum officinarum L.",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa053"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Awi Temen/Awi Surat",
    species: "Gigantochloa atter (Hassl.) Kurz",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa054"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Combrang",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa055"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Hampelas",
    species: "Ficus ampelas Burm. f.",
    family: "Moraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa056"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Harendong",
    species: "Melastoma affine D. Don",
    family: "Melastomaceae",
    section_ina: "daun (tunggal,ramuan)",
    section_ing: "leaf (single, herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa057"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Hoe Seuti",
    species: "Calamus ornatus BI.",
    family: "Arecaceae",
    section_ina: "umbut (tunggal)",
    section_ing: "umbut (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa058"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kapol",
    species: "Elletaria cardamomum (L.) Maton",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa059"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantifolia (Chris. & Panz) Swing",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05a"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa051"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Awi Haur Hejo",
    species: "Bambusa vulgaris Schrad",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05b"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Karuk",
    species: "Piper sarmentosum Roxb.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05d"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sampeu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05e"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Seureuh",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05f"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Seureuh Bodas",
    species: "Piper cubeba L",
    family: "Piperaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa060"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Bawang Beureum",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan",
    section_ing: "tuber (herb",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa061"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Wewelutan",
    species: "Merremia umbellata (L.) Hallier. f.",
    family: "Convolvulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa062"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa052"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Cangkore",
    species: "Dinochloa scandens (Blume ex Nees) O.K",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa063"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa05c"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kawawo",
    species: "Milletia sericea (Vent.) W. & A. ex Hassk",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cee")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa064"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Ketan Hideung",
    species: "Oryza sativa L. forma gultinosa Auct",
    family: "Poaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa065"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Sadagori",
    species: "Sida rhombifolia L.",
    family: "Malvaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa066"),
    ethnic: "SUNDA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Laja",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa068"),
    ethnic: "SUNDA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Jukut Carculang",
    species: "Eleusine indica (L.) Gaertn.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa067"),
    ethnic: "SUNDA",
    disease_ina: "Beri-beri",
    disease_ing: "Beri-beri",
    name_ina: "Godobos",
    species: "Sonchus asper (L.) Hill",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa069"),
    ethnic: "SUNDA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Katumpang",
    species: "Tridax procumbens L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e09")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06a"),
    ethnic: "SUNDA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kihileud",
    species: "Desmodium triquetrum (L.) DC",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c07")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06b"),
    ethnic: "SUNDA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kingkilaban",
    species: "Mussaenda frondosa Lindd",
    family: "Rubiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06c"),
    ethnic: "SUNDA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "kullit batang (tunggal)",
    section_ing: "Kullit rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06d"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Balingbing",
    species: "Averrhoa carambola L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa070"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Nangka Walanda",
    species: "Annona montana Macfad",
    family: "Annonaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06e"),
    ethnic: "SUNDA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Saledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa071"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lame Hideung",
    species: "Alstonia scholaris (L.) R. Br",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa072"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Momordicaceae",
    section_ina: "daun (tunggal,ramuan)",
    section_ing: "leaf (single, herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa073"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Seureuh",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa074"),
    ethnic: "SUNDA",
    disease_ina: "Gatal Karena Getah Kawung",
    disease_ing: "Itching Due to sap Kawung",
    name_ina: "Kawung",
    species: "Arenga pinnata (Wurmb.) Merr.",
    family: "Arecaceae Asteraceae",
    section_ina: "batang muda (tunggal)",
    section_ing: "young stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa075"),
    ethnic: "SUNDA",
    disease_ina: "Gatal Karena Getah Kawung",
    disease_ing: "Itching Due to sap Kawung",
    name_ina: "Kirinyuh",
    species: "Eupatorium inulifolium H.B. K",
    family: "Asteraceae",
    section_ina: "batang muda (tunggal)",
    section_ing: "young stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa06f"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Jawer Kotok",
    species: "Coleus atropurpureus (L.) Benth",
    family: "Lamiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa077"),
    ethnic: "SUNDA",
    disease_ina: "Gatal Karena Getah Kawung",
    disease_ing: "Itching Due to sap Kawung",
    name_ina: "Singawalang",
    species: "Glochidion molle BI.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa076"),
    ethnic: "SUNDA",
    disease_ina: "Gatal Karena Getah Kawung",
    disease_ing: "Itching Due to sap Kawung",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Momordicaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07a"),
    ethnic: "SUNDA",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Antanan Ageung",
    species: "Centella asiatica (L.) Urb",
    family: "Apiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07b"),
    ethnic: "SUNDA",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Jambu Batu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07c"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Mamaniran",
    species: "Rorippa indica (L.) Hiern",
    family: "Brassicaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07d"),
    ethnic: "SUNDA",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07e"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Jambu Batu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa07f"),
    ethnic: "SUNDA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Leunca Hayam",
    species: "Solanum nigrum L.",
    family: "Solanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa078"),
    ethnic: "SUNDA",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Kawawo",
    species: "Milletia sericea (Vent.) W. & A. ex Hassk",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cee")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa081"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Mamaniran",
    species: "Rorippa indica (L.) Hiern",
    family: "Brassicaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa080"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Koneng",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa082"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Sereh",
    species: "Cymbopogon citratus (DC.) Stapf",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa084"),
    ethnic: "SUNDA",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Bawang Beureum",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa083"),
    ethnic: "SUNDA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Tajam",
    species: "Hemigraphis alternata (Burm.f.) T. Anders",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c7e")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa079"),
    ethnic: "SUNDA",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Tepus",
    species: "Amomum megalocheilos (Griff.) Baker.",
    family: "Zingiberaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa085"),
    ethnic: "SUNDA",
    disease_ina: "Menjaga Kesehatan",
    disease_ing: "Maintain health",
    name_ina: "Kipait",
    species: "Hoya diversifolia BI",
    family: "Asclepiadaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa087"),
    ethnic: "SUNDA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Ceuri",
    species: "Garcinia salakensis Pierre",
    family: "Clusiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa086"),
    ethnic: "SUNDA",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Limus",
    species: "Mangifera foetida Lour",
    family: "Anacardiaceae",
    section_ina: "daun kering (tunggal)",
    section_ing: "dried leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa088"),
    ethnic: "SUNDA",
    disease_ina: "Menjaga Kesehatan",
    disease_ing: "Maintain health",
    name_ina: "Koneng Gede",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa089"),
    ethnic: "SUNDA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Kaliki",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08a"),
    ethnic: "SUNDA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Koneng Gede",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08b"),
    ethnic: "SUNDA",
    disease_ina: "Muntaber",
    disease_ing: "vomiting",
    name_ina: "Babadotan",
    species: "Ageratum conyzoides L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08d"),
    ethnic: "SUNDA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Rinu",
    species: "Piper baccatum BI.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08c"),
    ethnic: "SUNDA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Momordicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08e"),
    ethnic: "SUNDA",
    disease_ina: "Muntaber",
    disease_ing: "vomiting",
    name_ina: "Jukut Carulang",
    species: "Eleusine indica (L.) Gaertn.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa090"),
    ethnic: "SUNDA",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Camcauh Areuy Bulu",
    species: "Cyclea barbata (Wall.) Miers.",
    family: "Menispermaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa091"),
    ethnic: "SUNDA",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Camcauh Areuy Bulu",
    species: "Stephania capita BI",
    family: "Menispermaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa092"),
    ethnic: "SUNDA",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Kaca piring",
    species: "Gardenia jasminoides Ellis",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa093"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Bintinu",
    species: "Melochia umbellata (Houtt.) Stapf",
    family: "Sterculiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa094"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa095"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa096"),
    ethnic: "SUNDA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Lampuyang",
    species: "Zingiber aromaticum Val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa097"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Kiurat",
    species: "Plantago major L.",
    family: "Plantaginaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d58")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa098"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Sereh Wangi",
    species: "Cymbopogon nardus (L.) Rendle",
    family: "Poaceae",
    section_ina: "pelepah tulang (ramuan)",
    section_ing: "midrib bone (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa08f"),
    ethnic: "SUNDA",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Alpuket",
    species: "Persea americana Mill",
    family: "Lauraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09c"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Rambut",
    disease_ing: "Shampoo",
    name_ina: "Jukut Juuh",
    species: "Indigofera spicata Forsk",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09b"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Ketan Hideung",
    species: "Oryza sativa L. forma gultinosa Auct",
    family: "Poaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09d"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Rambut",
    disease_ing: "Shampoo",
    name_ina: "Kapirit",
    species: "Pouzolzia sanguinea (BI.) Merr",
    family: "Urticaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09e"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Rambut",
    disease_ing: "Shampoo",
    name_ina: "Korejat",
    species: "Polygala paniculata L.",
    family: "Polygalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09f"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Rambut",
    disease_ing: "Shampoo",
    name_ina: "Paku Lubang",
    species: "Macrothelypteris torresiana (Gaud.) Ching",
    family: "Thelypteridaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a0"),
    ethnic: "SUNDA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Jawer Kotok",
    species: "Coleus atropurpureus (L.) Benth",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa099"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Mata Bayi",
    disease_ing: "Eye Wash Baby",
    name_ina: "Awi Tamiang",
    species: "Schizotachyum blumei Ness",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa09a"),
    ethnic: "SUNDA",
    disease_ina: "Pencuci Rambut",
    disease_ing: "Shampoo",
    name_ina: "Hariang Ageung",
    species: "Cissus repens Lamk",
    family: "Vitaceae",
    section_ina: "daun,batang (tunggal)",
    section_ing: "leaves, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a1"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Bawang Beureum",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a2"),
    ethnic: "SUNDA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Kapas",
    species: "Gossypiumacuminatum Roxb",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a3"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Jukut Harewos",
    species: "Wedelia montana (BI.) Boerl.",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a4"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Beubeunteuran",
    species: "Maoutia diversifolia (BI.) Wedd",
    family: "",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a5"),
    ethnic: "SUNDA",
    disease_ina: "Penyubur Rambut",
    disease_ing: "Hair conditioner",
    name_ina: "Urang-Aring",
    species: "Eclipta prostata (L.) L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a6"),
    ethnic: "SUNDA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Laja",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a7"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Kihiyang",
    species: "Albizia procera (Roxb.) Benth.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a8"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Kondang",
    species: "Ficus variegeta BI.",
    family: "Moraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0a9"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Nangka",
    species: "Artocarpus heterophyllus Lmk.",
    family: "Moraceae",
    section_ina: "buah muda (ramuan)",
    section_ing: "Young fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b4a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0aa"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Sereh",
    species: "Cymbopogon citarus (DC.) Stapf",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ab"),
    ethnic: "SUNDA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Singugu",
    species: "Clerodendrum serratum (L.) Moon",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ad"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ac"),
    ethnic: "SUNDA",
    disease_ina: "Perut Buncit",
    disease_ing: "Distended stomach",
    name_ina: "Dadap Cucuk",
    species: "Erythrina subumbrans",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ae"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Combrang",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "tangkai bunga (tunggal)",
    section_ing: "flower stalk (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0af"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Bawang Beureum",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b0"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Jukut Carulang",
    species: "Eleusine indica (L.) Gaertn.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b2"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Babadotan",
    species: "Ageratum conyzoides L.",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b3"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Korejat",
    species: "Polygala paniculata L.",
    family: "Polygalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b4"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Cabe",
    species: "Capsicum annum L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b5"),
    ethnic: "SUNDA",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Momordicaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b7"),
    ethnic: "SUNDA",
    disease_ina: "Perut Panas",
    disease_ing: "stomach Heat",
    name_ina: "Kangkung Bandung",
    species: "Abelmoschus manihot (L.) Medik",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b6"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Badan",
    disease_ing: "Body ache",
    name_ina: "Kikoneng",
    species: "Arcangelisia flava (L.) Merr.",
    family: "Menispermaceae",
    section_ina: "akar,batang (tunggal)",
    section_ing: "roots, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b8"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Badan",
    disease_ing: "Body ache",
    name_ina: "Kipait",
    species: "Hoya diversifolia BI",
    family: "Asclepiadaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b1"),
    ethnic: "SUNDA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Jangat",
    species: "Laurentia longiflora (L.) peterm",
    family: "Campanulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0b9"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Badan",
    disease_ing: "Body ache",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) Gaud",
    family: "Asteraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0bb"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Angsana",
    species: "Pterocarpus indicus Willd",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0bc"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ba"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cantigi",
    species: "Dodonaea viscosa Jacq",
    family: "Sapindaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0be"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Jalantir",
    species: "Erigerib sumatrensis Restz",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c0"),
    ethnic: "SUNDA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Kahitutan",
    species: "Paederia scandens (Lour.) Merr.",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0bf"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kikoneng",
    species: "Arcangelisia flava (L.) Merr.",
    family: "Menispermaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c1"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Cangkore",
    species: "Dinochloa scandens (Blume ex Nees) O.K",
    family: "Poaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c2"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kosta/Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0bd"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Badan",
    disease_ing: "Body ache",
    name_ina: "Cecendet",
    species: "Physalis angulata L.",
    family: "Solanaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c3"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Dadap Cucuck",
    species: "Erythrina subumbrans",
    family: "Fabaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c4"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Hanjuang",
    species: "Cordyline fruticosa (L.) A. Chev",
    family: "Agavaceae",
    section_ina: "pucuk (tunggal)",
    section_ing: "shoots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c5"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Hangasa",
    species: "Amomum maximum Roxb",
    family: "Zingiberaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c6"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Hareueus",
    species: "Rubus rosaefollius Poir",
    family: "Rosaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c7"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jukut Lameta",
    species: "Leersia hexandra Swart",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c8"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Kikoneng",
    species: "Arcangelisia flava (L.) Merr.",
    family: "Menispermaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ca"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Babadotan",
    species: "Ageratum conyzoides L.",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0c9"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Antanan Ageung",
    species: "Centella asiatica (L.) Urb",
    family: "Apiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0cb"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Cau Raja",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0cc"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Dadap Belendung",
    species: "Erythrina orientalis (L.) Murr.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0cd"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Seuseureuhan",
    species: "Piper aduncum L.",
    family: "Piperaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0cf"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Handeuleum Hideung",
    species: "Graptophyllum pictum (L.) Griff",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c6b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ce"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Dadap Cucuk",
    species: "Erythrina subumbrans",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d1"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jotang",
    species: "Spilanthes iabadicensis A.H. Moore",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d2"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jukut Carulang",
    species: "Eleusine indica (L.) Gaertn.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d4"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Sampeu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d3"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Pacing",
    species: "Costus speciosus (Koenig) J.E. Smith",
    family: "Zingiberaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d5"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Lame Hideung",
    species: "Alstonia scholaris (L.) R. Br",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d6"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Wewelutan",
    species: "Merremia umbellata (L.) Hallier. f.",
    family: "Convolvulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d7"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Dadap Cucuk",
    species: "Erythrina subumbrans",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d8"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kaliki",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d9"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Tulang Rusuk",
    disease_ing: "Rib Bone pain",
    name_ina: "Suliga",
    species: "Belamcanda chinensis (L.) DC.",
    family: "Iridaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b66")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0d0"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jarong",
    species: "Stachytarpheta jamaicensis (L.) Vahl",
    family: "Verbenaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0db"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Panas",
    disease_ing: "Fever",
    name_ina: "Bawang Beureum",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0dc"),
    ethnic: "SUNDA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Mareme",
    species: "Glochidion zeylanicum A. Juss",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0dd"),
    ethnic: "SUNDA",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Cecendet",
    species: "Physalis angulata L.",
    family: "Solanaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0de"),
    ethnic: "SUNDA",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e0"),
    ethnic: "SUNDA",
    disease_ina: "Telinga Bernanah",
    disease_ing: "ear Bernanah",
    name_ina: "Kembang Tere",
    species: "Impatiens platypetala Lindl",
    family: "Balsaminaceae",
    section_ina: "daun,bunga (tunggal)",
    section_ing: "leaves, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e1"),
    ethnic: "SUNDA",
    disease_ina: "Jantung",
    disease_ing: "Heart",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e2"),
    ethnic: "SUNDA",
    disease_ina: "Memutihkan Gigi",
    disease_ing: "whiten Teeth",
    name_ina: "Kayu Manis",
    species: "Cinnamomum burmanii Nees. ex BI",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e3"),
    ethnic: "SUNDA",
    disease_ina: "Gangguan Pencernaan",
    disease_ing: "Indigestion",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e4"),
    ethnic: "SUNDA",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e5"),
    ethnic: "SUNDA",
    disease_ina: "Menambah Napsu Makan",
    disease_ing: "Adding Napsu Spot",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e6"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Cau Jurig",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e7"),
    ethnic: "SUNDA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Kayu Manis",
    species: "Cinnamomum burmanii Nees. ex BI",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0df"),
    ethnic: "SUNDA",
    disease_ina: "Sulit Kencing",
    disease_ing: "difficult urination",
    name_ina: "Babasaran",
    species: "Morus australis Poir",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e8"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Bakung",
    species: "Crinum asiaticum L.",
    family: "Amaryllidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ea"),
    ethnic: "SUNDA",
    disease_ina: "Meningkatkan Napsu Makan",
    disease_ing: "Increase Napsu Spot",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0e9"),
    ethnic: "SUNDA",
    disease_ina: "Menghilangkan Bau Mulut",
    disease_ing: "Eliminate Bad Breath",
    name_ina: "Kapolaga",
    species: "Amomum cardamomum L.",
    family: "Zingiberaceae",
    section_ina: "buah,biji (tunggal)",
    section_ing: "fruit, seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0da"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Panas",
    disease_ing: "Fever",
    name_ina: "Buntiris",
    species: "Kalanchoe pinnata Pers.",
    family: "Crassulaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0eb"),
    ethnic: "SUNDA",
    disease_ina: "Nyeri Terkilir",
    disease_ing: "pain Sprains",
    name_ina: "Kencur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ec"),
    ethnic: "SUNDA",
    disease_ina: "Obat Gosok",
    disease_ing: "Rub medicine",
    name_ina: "Kencur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ed"),
    ethnic: "SUNDA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ee"),
    ethnic: "SUNDA",
    disease_ina: "Obat Gosok",
    disease_ing: "Rub medicine",
    name_ina: "Sereh Wangi",
    species: "Cymbopogon nardus (L.) Rendle",
    family: "Poaceae",
    section_ina: "daun,batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ef"),
    ethnic: "SUNDA",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Lengkuas",
    species: "Alpania galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f1"),
    ethnic: "SUNDA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Cau Batu",
    species: "Musa balbisiana Colla",
    family: "Musaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f0"),
    ethnic: "SUNDA",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f4"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Cau Batu",
    species: "Musa balbisiana Colla",
    family: "Musaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f2"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Pete Selong",
    species: "Leucaena glauca L.",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f5"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f6"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Nangkaan",
    species: "Euphorbia hirta L.",
    family: "Euphoriaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c35")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f7"),
    ethnic: "SUNDA",
    disease_ina: "Pegel Linu",
    disease_ing: "pegel Linu",
    name_ina: "Kencur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f8"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Patah Tulang",
    species: "Euphorbia tirucalli L.",
    family: "Euphoriaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f9"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Pete Selong",
    species: "Leucaena glauca L.",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0fa"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Pinisili Putih",
    species: "Jatropha multifida L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0fc"),
    ethnic: "SUNDA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Lengkuas",
    species: "Alpania galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0fd"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Sereh",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0fe"),
    ethnic: "SUNDA",
    disease_ina: "Mimisan",
    disease_ing: "Nosebleed",
    name_ina: "Sereh",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0ff"),
    ethnic: "SUNDA",
    disease_ina: "Pegal-Pegal",
    disease_ing: "Sore-sore",
    name_ina: "Alang-Alang",
    species: "Imperata cylindrica Nees",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0f3"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Cau",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa100"),
    ethnic: "SUNDA",
    disease_ina: "Pening",
    disease_ing: "Dizziness",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa101"),
    ethnic: "SUNDA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa102"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Nangkaan",
    species: "Euphorbia hirta L.",
    family: "Euphoriaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c35")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa103"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Cau",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa104"),
    ethnic: "SUNDA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa105"),
    ethnic: "BADUY DALAM",
    disease_ina: "Disengat Binatang Berbisa",
    disease_ing: "Stung Venomous Animals",
    name_ina: "Honje",
    species: "Etlingera hemiphaerica (BI) R.M Smith",
    family: "",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa106"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Untuk Pekerja Berat",
    disease_ing: "Herbal Medicine For Weight Workers",
    name_ina: "Kecapi",
    species: "Sandoricum koetjape (Burm.f.) Merr",
    family: "Meliaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa107"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Untuk Pekerja Berat",
    disease_ing: "Herbal Medicine For Weight Workers",
    name_ina: "Kisabrang",
    species: "Peronema canescens Jack",
    family: "Verbenaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa108"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10a"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Untuk Pekerja Berat",
    disease_ing: "Herbal Medicine For Weight Workers",
    name_ina: "Lempuyang",
    species: "Zingiber amaricans BI.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa109"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Untuk Pekerja Berat",
    disease_ing: "Herbal Medicine For Weight Workers",
    name_ina: "Lame Putih",
    species: "Alstonia scholaris (L.) R. Br",
    family: "Apocynaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10b"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Untuk Pekerja Berat",
    disease_ing: "Herbal Medicine For Weight Workers",
    name_ina: "Pisang Ambon",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "jantung (ramuan)",
    section_ing: "heart (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10d"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Sesudah Persalinan",
    disease_ing: "Jamu After Childbirth",
    name_ina: "Singugu",
    species: "Clerodendrum serratum (L.) Moon",
    family: "Verbenaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10c"),
    ethnic: "BADUY DALAM",
    disease_ina: "Jamu Sesudah Persalinan",
    disease_ing: "Jamu After Childbirth",
    name_ina: "Kunyit",
    species: "Curcuma longa L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10e"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Tales Toho",
    species: "Alocasia indica (Lour.) Koch",
    family: "Araceae",
    section_ina: "air tangkai bunga (tunggal)",
    section_ing: "water flower stalk (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa10f"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Timun Cairan",
    species: "Curcumis sativus Linn",
    family: "Cucuritaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa110"),
    ethnic: "BADUY DALAM",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Bonteng",
    species: "Curcumis sativus Linn",
    family: "Cucurbitaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa0fb"),
    ethnic: "SUNDA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Sampeu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa112"),
    ethnic: "BADUY DALAM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Harendong",
    species: "Melastoma malabathricum L",
    family: "Melastomaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa111"),
    ethnic: "BADUY DALAM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Durian",
    species: "Durio zibethinus Murr",
    family: "Bombacaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa113"),
    ethnic: "BADUY DALAM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Jambu Batu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa114"),
    ethnic: "BADUY DALAM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Kelapa Hijau",
    species: "Cocos nucifera L",
    family: "Arecaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa115"),
    ethnic: "BADUY DALAM",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Jampang Pahit",
    species: "Paspalum conjugatum Bergius",
    family: "Poaceae",
    section_ina: "",
    section_ing: "#VALUE!"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa116"),
    ethnic: "BADUY DALAM",
    disease_ina: "Obat Bayi Merah",
    disease_ing: "Red Baby Drugs",
    name_ina: "Sirih",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa117"),
    ethnic: "BADUY DALAM",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa119"),
    ethnic: "BADUY DALAM",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Limus",
    species: "Mangifera foetida Lour",
    family: "Anacardiaceae",
    section_ina: "daun,batang (ramuan)",
    section_ing: "leaves, stems (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa118"),
    ethnic: "BADUY DALAM",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Kawung",
    species: "Arenga pinnata (Wurmb.) Merr.",
    family: "Arecaceae",
    section_ina: "Kawung (ramuan)",
    section_ing: "Kawung (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11a"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penguat Bayi",
    disease_ing: "Strengthening Baby",
    name_ina: "Beras Merah",
    species: "Oryza sativa L",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11b"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penguat Bayi",
    disease_ing: "Strengthening Baby",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11c"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penurun Panas untuk Anak",
    disease_ing: "Heat Reducer for Kids",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantifolia (Chris. & Panz) Swing",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11e"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penurun Panas untuk Dewasa",
    disease_ing: "Heat Loss for Adults",
    name_ina: "Rambutan Aceh",
    species: "Nephelium lappaceum L",
    family: "Sapindaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11f"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penurun Panas untuk Dewasa",
    disease_ing: "Heat Loss for Adults",
    name_ina: "Sirsak",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa121"),
    ethnic: "BADUY DALAM",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Angsana",
    species: "Pterocarpus indicus Willd",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa122"),
    ethnic: "BADUY DALAM",
    disease_ina: "Kesehatan Kandungan",
    disease_ing: "Health content",
    name_ina: "Kelapa Hijau",
    species: "Cocos nucifera L",
    family: "Arecaceae",
    section_ina: "air buah (ramuan)",
    section_ing: "juice (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa11d"),
    ethnic: "BADUY DALAM",
    disease_ina: "Penurun Panas untuk Anak",
    disease_ing: "Heat Reducer for Kids",
    name_ina: "Babandotan",
    species: "Ageratum conyzoides L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa123"),
    ethnic: "BADUY DALAM",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Beras Merah",
    species: "Oryza sativa L",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa124"),
    ethnic: "BADUY DALAM",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Cikur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa126"),
    ethnic: "MADURA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Mimba",
    species: "Azadirachta indica A. Juss.",
    family: "Meliaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5e")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa127"),
    ethnic: "MADURA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Delima Putih",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "kulit buah (ramuan)",
    section_ing: "rind (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa120"),
    ethnic: "BADUY DALAM",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Angsana",
    species: "Pterocarpus indicus Willd",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa128"),
    ethnic: "MADURA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Kayu Rapat",
    species: "Parameria laevigata (Juss.) Moldenke",
    family: "Apocynaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d25")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa129"),
    ethnic: "MADURA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Kunci",
    species: "Kaempferia angustifolia Roscoe.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12a"),
    ethnic: "MADURA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Kunyit",
    species: "Curcuma domestica L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12b"),
    ethnic: "MADURA",
    disease_ina: "Kuat Jalan",
    disease_ing: "strong Road",
    name_ina: "Sirih",
    species: "Piper bettle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12c"),
    ethnic: "MADURA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Sirih",
    species: "Piper bettle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12d"),
    ethnic: "MADURA",
    disease_ina: "Menahan Haus dan Lapar",
    disease_ing: "Restraining Haus and Hunger",
    name_ina: "Penang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12e"),
    ethnic: "MADURA",
    disease_ina: "Menahan Haus dan Lapar",
    disease_ing: "Restraining Haus and Hunger",
    name_ina: "Pinang",
    species: "Arenga Pinnata Linn.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa12f"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Delima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "kulit buah (ramuan)",
    section_ing: "rind (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa130"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Kayu Rapat",
    species: "Parameria laevigata (Juss.) Moldenke",
    family: "Apocynaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d25")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa131"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Kunci",
    species: "Kaempferia angustifolia Roscoe.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa132"),
    ethnic: "MADURA",
    disease_ina: "Kesehatan Gigi",
    disease_ing: "Dental health",
    name_ina: "Penang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa133"),
    ethnic: "MADURA",
    disease_ina: "Kuat Jalan",
    disease_ing: "strong Road",
    name_ina: "Penang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa135"),
    ethnic: "BALI",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Siwalan",
    species: "Borrasus flabellifer L.",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa134"),
    ethnic: "MADURA",
    disease_ina: "Tidak Mudah Capek",
    disease_ing: "Not Easy Tired",
    name_ina: "Pinang",
    species: "Arenga Pinnata Linn.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa136"),
    ethnic: "BALI",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Kayu Cang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa137"),
    ethnic: "BALI",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Kayu Cang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa139"),
    ethnic: "BALI",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Aren",
    species: "Arenga Pinnata (Wumb.) Merr.",
    family: "Areacaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13a"),
    ethnic: "BALI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Brambang",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13b"),
    ethnic: "BALI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Dadap",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13c"),
    ethnic: "BALI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Siwalan",
    species: "Borrasus flabellifer L.",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13d"),
    ethnic: "BALI",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "Siwalan",
    species: "Borrasus flabellifer L.",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13e"),
    ethnic: "BALI",
    disease_ina: "Melancarkan ASI",
    disease_ing: "smooth milk",
    name_ina: "Kayu Manis",
    species: "Sauropus androgynus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa13f"),
    ethnic: "BALI",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Adas",
    species: "Foeniculum vulgare Mill",
    family: "Apiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa140"),
    ethnic: "BALI",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Beras",
    species: "Oryza sativa L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa141"),
    ethnic: "BALI",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Brambang",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa142"),
    ethnic: "BALI",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Dadap",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa138"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa143"),
    ethnic: "BALI",
    disease_ina: "Panas pada Pinggang",
    disease_ing: "Hot on the waist",
    name_ina: "Dadap",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa144"),
    ethnic: "BALI",
    disease_ina: "Panas pada Pinggang",
    disease_ing: "Hot on the waist",
    name_ina: "Brambang",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa145"),
    ethnic: "BALI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Brambang",
    species: "Allium cepa L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa146"),
    ethnic: "BALI",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Dadap",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa125"),
    ethnic: "MADURA",
    disease_ina: "Capek",
    disease_ing: "Tired",
    name_ina: "Penang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa147"),
    ethnic: "BALI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Dadap",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa148"),
    ethnic: "SASAK",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Blumea balsamifera (L.) DC.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa149"),
    ethnic: "SASAK",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Leta",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14a"),
    ethnic: "SASAK",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Bajur",
    species: "Pterospermum javanicum Junghn.",
    family: "Sterculiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d82")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14b"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Kunci Pepet",
    species: "Kaempferia angustifolia Roscoe.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14d"),
    ethnic: "SASAK",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "",
    species: "Desmodium triquetrum (L.) DC.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c07")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14e"),
    ethnic: "SASAK",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "",
    species: "Selaginella plana Hieron.",
    family: "Selaginellaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14f"),
    ethnic: "SASAK",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Decaspermum fruticosum J. R & G. Forst.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa14c"),
    ethnic: "SASAK",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Jelatang",
    species: "Laportea stimulans Miq.",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa150"),
    ethnic: "SASAK",
    disease_ina: "Murus",
    disease_ing: "Diarrhea",
    name_ina: "Slopan",
    species: "Macaranga tanarius Muell. Arg.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa151"),
    ethnic: "MADURA",
    disease_ina: "Sari Rapat",
    disease_ing: "Sari Meeting",
    name_ina: "Merica",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa152"),
    ethnic: "SASAK",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa153"),
    ethnic: "SASAK",
    disease_ina: "Penghangat Tubuh",
    disease_ing: "heating Body",
    name_ina: "",
    species: "Alpinia officinarum Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa155"),
    ethnic: "SASAK",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Hariang Ageung",
    species: "Cissus javana Lamk.",
    family: "Vitaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa156"),
    ethnic: "SASAK",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "",
    species: "Wedelia montana (BI.) Boerl.",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa158"),
    ethnic: "SASAK",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "",
    species: "Piper caninum BI.",
    family: "Piperaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa157"),
    ethnic: "SASAK",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Koa",
    species: "Ficus variegata BI.",
    family: "Moraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa159"),
    ethnic: "SASAK",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "",
    species: "Elaeocarpus floribundus BI.",
    family: "Elaeocarpaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15a"),
    ethnic: "SASAK",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Melastoma affine D. Don.",
    family: "Melastomaceae",
    section_ina: "daun (tunggal, ramuan)",
    section_ing: "leaf (single, herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15b"),
    ethnic: "SASAK",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "",
    species: "Rubus fraxinifolius Poir.",
    family: "Rosaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15d"),
    ethnic: "SASAK",
    disease_ina: "Tetanus",
    disease_ing: "Tetanus",
    name_ina: "Kayu Agel",
    species: "Actinodaphne procera Ness.",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15e"),
    ethnic: "DOMPU",
    disease_ina: "Alergi pada Bayi",
    disease_ing: "Allergies in Infants",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15f"),
    ethnic: "DOMPU",
    disease_ina: "Bengkak karena Benturan",
    disease_ing: "Swelling due to Conflict",
    name_ina: "Kemangi",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa160"),
    ethnic: "SASAK",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "",
    species: "Erigeron linifolius Willd.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa161"),
    ethnic: "DOMPU",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa162"),
    ethnic: "SASAK",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Laja",
    species: "Alpinia galanga (L.) Swartz.",
    family: "Zingiberaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa154"),
    ethnic: "SASAK",
    disease_ina: "Pegal-pegal",
    disease_ing: "Aches",
    name_ina: "Ketut Manuk",
    species: "Chloranthus officinalis R. Br.",
    family: "Chloranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa163"),
    ethnic: "SASAK",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "",
    species: "Rubus lineatus Reinw. ex BI.",
    family: "Rosaceae",
    section_ina: "tuak batang (tunggal)",
    section_ing: "wine rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa164"),
    ethnic: "DOMPU",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa165"),
    ethnic: "DOMPU",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Srikaya",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa166"),
    ethnic: "DOMPU",
    disease_ina: "Menghilangkan Benjolan",
    disease_ing: "eliminate lump",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa168"),
    ethnic: "DOMPU",
    disease_ina: "Pembersih mata",
    disease_ing: "eye Cleanser",
    name_ina: "Kemangi",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa167"),
    ethnic: "DOMPU",
    disease_ina: "Menghilangkan Benjolan",
    disease_ing: "eliminate lump",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa169"),
    ethnic: "DOMPU",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16b"),
    ethnic: "DOMPU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Kemangi",
    species: "Ocimum basillicum L.",
    family: "Lamiaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16a"),
    ethnic: "DOMPU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16c"),
    ethnic: "DOMPU",
    disease_ina: "Obat Penjarang Kehamilan",
    disease_ing: "Penjarang Drug Pregnancy",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16d"),
    ethnic: "SUMBA",
    disease_ina: "Kuat Jalan",
    disease_ing: "strong Road",
    name_ina: "Siwu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16e"),
    ethnic: "DOMPU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang Merah",
    species: "Allium cepa L.",
    family: "Amarillidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa16f"),
    ethnic: "MANGGARAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Lema Ular",
    species: "Stachytarpheta indica (L.) Vahl.",
    family: "Verbenaceae",
    section_ina: "daun, batang, akar (tunggal)",
    section_ing: "leaves, stems, roots (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa170"),
    ethnic: "SUMBA",
    disease_ina: "Kesehatan Gigi",
    disease_ing: "Dental health",
    name_ina: "Siwu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa171"),
    ethnic: "MANGGARAI",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Kapok",
    species: "Ceiba petandra (L.) Gaertn.",
    family: "Bombacaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa173"),
    ethnic: "MANGGARAI",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Nangker",
    species: "Marratia sp.",
    family: "Marattiaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa15c"),
    ethnic: "SASAK",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Juwetan",
    species: "Glochidion macrocarpum",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa172"),
    ethnic: "MANGGARAI",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Jimbu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa174"),
    ethnic: "MANGGARAI",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Sita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa175"),
    ethnic: "MANGGARAI",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Wene",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa176"),
    ethnic: "MANGGARAI",
    disease_ina: "Cuci Perut",
    disease_ing: "purge",
    name_ina: "Loi",
    species: "Alstonia spectabile R. Br.",
    family: "Apocynaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa177"),
    ethnic: "MANGGARAI",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Bawang Putih",
    species: "Allium cepa Linn.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa178"),
    ethnic: "MANGGARAI",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus (BI.) Miq.",
    family: "Lamiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa179"),
    ethnic: "MANGGARAI",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Lasang",
    species: "Myrica esculenta Ham. ex D. Don.",
    family: "Myricaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17a"),
    ethnic: "MANGGARAI",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Merak",
    species: "Azadirachta indica A. Juss.",
    family: "Meliaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5e")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17b"),
    ethnic: "SUMBA",
    disease_ina: "Penahan Haus dan Lapar",
    disease_ing: "Retaining Haus and Hunger",
    name_ina: "Siwu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17d"),
    ethnic: "MANGGARAI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Jingo",
    species: "Acorus calamus L.",
    family: "Araceae",
    section_ina: "daun, rimpang (tunggal)",
    section_ing: "leaf, rhizome (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17c"),
    ethnic: "MANGGARAI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Jimbu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa180"),
    ethnic: "MANGGARAI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Pau",
    species: "Mangifera indica L.",
    family: "Anacardiaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa181"),
    ethnic: "SUMBA",
    disease_ina: "Menghilangkan Capek",
    disease_ing: "Eliminating Capek",
    name_ina: "Siwu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa182"),
    ethnic: "MANGGARAI",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Rua",
    species: "Albizia procera (Roxb.) Bth.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17f"),
    ethnic: "MANGGARAI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Ndusuk",
    species: "Melastoma affine D. Don.",
    family: "Melastomaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa183"),
    ethnic: "MANGGARAI",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Lindang",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa184"),
    ethnic: "MANGGARAI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Loi",
    species: "Alstonia spectabile R. Br.",
    family: "Apocynaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa185"),
    ethnic: "MANGGARAI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Mpui",
    species: "Decaspermum fruticosum J. R & G. Forst.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa186"),
    ethnic: "MANGGARAI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Sita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa187"),
    ethnic: "MANGGARAI",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa189"),
    ethnic: "MANGGARAI",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Kole/Mbega",
    species: "Colotropis gigantea (Willd.) Dryand. ex W. T Ait.",
    family: "Asclepiadaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa188"),
    ethnic: "MANGGARAI",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Rii",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18b"),
    ethnic: "MANGGARAI",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Legi",
    species: "Axonopus compressus (Swartz.) Beauv.",
    family: "Poaceae",
    section_ina: "batang, daun (tunggal)",
    section_ing: "stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18a"),
    ethnic: "MANGGARAI",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Lindang",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18c"),
    ethnic: "MANGGARAI",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pandu/Kejoli",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18d"),
    ethnic: "MANGGARAI",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18f"),
    ethnic: "MANGGARAI",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Merak",
    species: "Azadirachta indica A. Juss.",
    family: "Meliaceae",
    section_ina: "daun, kulit batang (ramuan)",
    section_ing: "leaves, bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5e")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa18e"),
    ethnic: "MANGGARAI",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Bawang Putih",
    species: "Allium cepa Linn.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa17e"),
    ethnic: "MANGGARAI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Mpui",
    species: "Decaspermum fruticosum J. R & G. Forst.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa190"),
    ethnic: "MANGGARAI",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus (BI.) Miq.",
    family: "Lamiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa191"),
    ethnic: "MANGGARAI",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Waso",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa193"),
    ethnic: "MANGGARAI",
    disease_ina: "Mata Merah",
    disease_ing: "Red eye",
    name_ina: "Aur",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "air rebung (tunggal)",
    section_ing: "water bamboo shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa194"),
    ethnic: "MANGGARAI",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Pak",
    species: "Evodia latifolia DC.",
    family: "Rutaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa192"),
    ethnic: "MANGGARAI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Sita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa195"),
    ethnic: "MANGGARAI",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Ria",
    species: "Momorica Charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa196"),
    ethnic: "MANGGARAI",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Woing",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa199"),
    ethnic: "MANGGARAI",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Mene",
    species: "Vernonia cinerea (L.) Less.",
    family: "Asteraceae",
    section_ina: "akar, batang, daun (tunggal)",
    section_ing: "roots, stems, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19a"),
    ethnic: "MANGGARAI",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Ria",
    species: "Momorica Charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19b"),
    ethnic: "MANGGARAI",
    disease_ina: "Menghitamkan Rambut",
    disease_ing: "blacken Hair",
    name_ina: "Woing",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa197"),
    ethnic: "MANGGARAI",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "Redong",
    species: "Trema orientalis (L.) BI.",
    family: "Ulmaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19d"),
    ethnic: "MANGGARAI",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Redong",
    species: "Trema orientalis (L.) BI.",
    family: "Ulmaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19e"),
    ethnic: "MANGGARAI",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Lindang",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19f"),
    ethnic: "MANGGARAI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Mborong",
    species: "Corypha gembanga (BI.) BI.",
    family: "Arecaceae",
    section_ina: "pucuk batang (tunggal)",
    section_ing: "shoots rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a0"),
    ethnic: "MANGGARAI",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Duul",
    species: "Cryptocarya laevigata BI.",
    family: "Lauraceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a2"),
    ethnic: "MANGGARAI",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Tega",
    species: "Pittosporum moluccanum (Lmk.) Miq.",
    family: "Pittoporaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a1"),
    ethnic: "MANGGARAI",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Loi",
    species: "Alstonia spectabile R. Br.",
    family: "Apocynaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a4"),
    ethnic: "MANGGARAI",
    disease_ina: "Kencing Darah",
    disease_ing: "Urination Blood",
    name_ina: "Lasang",
    species: "Myrica esculenta Ham. ex D. Don.",
    family: "Myricaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a3"),
    ethnic: "MANGGARAI",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Lasang",
    species: "Myrica esculenta Ham. ex D. Don.",
    family: "Myricaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa198"),
    ethnic: "MANGGARAI",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Jingo",
    species: "Acorus calamus L.",
    family: "Araceae",
    section_ina: "daun, rimpang (tunggal)",
    section_ing: "leaf, rhizome (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa19c"),
    ethnic: "MANGGARAI",
    disease_ina: "Muntah Darah",
    disease_ing: "Vomiting blood",
    name_ina: "Kala",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a6"),
    ethnic: "MANGGARAI",
    disease_ina: "Penambah Tenaga",
    disease_ing: "Energy enhancer",
    name_ina: "Duul",
    species: "Cryptocarya laevigata BI.",
    family: "Lauraceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a7"),
    ethnic: "MANGGARAI",
    disease_ina: "Penambah Tenaga",
    disease_ing: "Energy enhancer",
    name_ina: "Tega",
    species: "Pittosporum moluccanum (Lmk.) Miq.",
    family: "Pittoporaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a5"),
    ethnic: "MANGGARAI",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Lembur",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a8"),
    ethnic: "MANGGARAI",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Lembur",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1a9"),
    ethnic: "MANGGARAI",
    disease_ina: "Penguat Gigi dan Gusi",
    disease_ing: "Strengthening Teeth and Gums",
    name_ina: "Wene",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ac"),
    ethnic: "MANGGARAI",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Welu",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1aa"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kala",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ae"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Rua",
    species: "Albizia procera (Roxb.) Bth.",
    family: "Fabaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1af"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Duul",
    species: "Cryptocarya laevigata BI.",
    family: "Lauraceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b0"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kenti",
    species: "Leptosperum flavescens (L.)",
    family: "Myrtaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ab"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Nio",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar muda (tunggal)",
    section_ing: "young roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b1"),
    ethnic: "MANGGARAI",
    disease_ina: "Penyakit Tampa pada Anak",
    disease_ing: "Tampa Disease in Children",
    name_ina: "Lusa",
    species: "Cajanus cajan (L.) Hurth.",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b3"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Loi",
    species: "Alstonia spectabile R. Br.",
    family: "Apocynaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b2"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b4"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Tega",
    species: "Pittosporum moluccanum (Lmk.) Miq.",
    family: "Pittoporaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b5"),
    ethnic: "MANGGARAI",
    disease_ina: "Selesma",
    disease_ing: "Cold",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b6"),
    ethnic: "MANGGARAI",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Lui",
    species: "Fraxinus griffithii Clarke.",
    family: "Oleaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b7"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b9"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Laru",
    species: "Knema spp.",
    family: "Myristicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ba"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt.",
    family: "Myristicaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1bb"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Rii",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1bc"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Pandu/Kejoli",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1bd"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Walek",
    species: "Croton sp.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1bf"),
    ethnic: "MANGGARAI",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1be"),
    ethnic: "MANGGARAI",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Rea",
    species: "Pandanus tectorius Park.",
    family: "Pandaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1b8"),
    ethnic: "MANGGARAI",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Waso",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ad"),
    ethnic: "MANGGARAI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Boto",
    species: "Ervatamia sp.",
    family: "Apocynaceae",
    section_ina: "kulir batang (tunggal)",
    section_ing: "trowels rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c0"),
    ethnic: "MANGGARAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c1"),
    ethnic: "ENDE",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Goawa",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c2"),
    ethnic: "ENDE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Lamtoro",
    species: "Leucaena Leucocephala (Lmk.) De Wit.",
    family: "Fabaceae",
    section_ina: "polong, biji muda (tunggal)",
    section_ing: "peas, young seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c3"),
    ethnic: "ENDE",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Saledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun, batang muda (tunggal)",
    section_ing: "leaves, young stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c4"),
    ethnic: "ENDE",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Goawa",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c5"),
    ethnic: "ENDE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Jita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c6"),
    ethnic: "ENDE",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Pau",
    species: "Mangifera indica L.",
    family: "Anacardiaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c7"),
    ethnic: "ENDE",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Jita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c8"),
    ethnic: "ENDE",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ca"),
    ethnic: "ENDE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Eu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1c9"),
    ethnic: "ENDE",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Huta",
    species: "Carbera manghas L.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1cc"),
    ethnic: "ENDE",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Huta",
    species: "Cerbera manghas L.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1cb"),
    ethnic: "ENDE",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Jita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1cf"),
    ethnic: "ENDE",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Mboro",
    species: "Corypha gembanga (BI.) BI.",
    family: "Arecaceae",
    section_ina: "pucuk batang (tunggal)",
    section_ing: "shoots rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1cd"),
    ethnic: "ENDE",
    disease_ina: "Mata Merah",
    disease_ing: "Red eye",
    name_ina: "Au",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "air rebung (tunggal)",
    section_ing: "water bamboo shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ce"),
    ethnic: "ENDE",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Pa Fai",
    species: "Mussaenda frandosa Linn.",
    family: "Rubiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d1"),
    ethnic: "ENDE",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Galawawi",
    species: "Uvaria rufa BI.",
    family: "Annonaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d0"),
    ethnic: "ENDE",
    disease_ina: "Nyeri Ulu Hati",
    disease_ing: "Ulu Heart Pain",
    name_ina: "Karo Anga",
    species: "Gmelina elliptica J. E. Smith.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d2"),
    ethnic: "ENDE",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Karongguru",
    species: "Cudrania cochinchinensis (Lour.) Kudo & Masamune.",
    family: "Moraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d5"),
    ethnic: "ENDE",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Waru",
    species: "Hisbicus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d3"),
    ethnic: "ENDE",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Tokometa",
    species: "Capparis sepiaria",
    family: "Capparidaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d6"),
    ethnic: "ENDE",
    disease_ina: "Perut Bengkak",
    disease_ing: "abdominal swelling",
    name_ina: "Karo Anga",
    species: "Gmelina elliptica J. E. Smith.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d9"),
    ethnic: "ENDE",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Ganagole",
    species: "Capparis micracantha DC.",
    family: "Capparidaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d7"),
    ethnic: "ENDE",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Feo",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d8"),
    ethnic: "ENDE",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Nio",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar muda (tunggal)",
    section_ing: "young roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1db"),
    ethnic: "ENDE",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Galawawi",
    species: "Uvaria rufa BI.",
    family: "Annonaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1dd"),
    ethnic: "ENDE",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Ganagole",
    species: "Capparis micracantha DC.",
    family: "Capparidaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1d4"),
    ethnic: "ENDE",
    disease_ina: "Penguat Gigi dan Gusi",
    disease_ing: "Strengthening Teeth and Gums",
    name_ina: "Eu",
    species: "Areca catechu L.",
    family: "Areacaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1da"),
    ethnic: "ENDE",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Kumi Rongo",
    species: "Euphorbia hirta L.",
    family: "Euphorbiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c35")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1df"),
    ethnic: "ENDE",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Tokometa",
    species: "Capparis sepiaria",
    family: "Capparidaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1de"),
    ethnic: "ENDE",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Karongguru",
    species: "Cudrania cochinchinensis (Lour.) Kudo & Masamune.",
    family: "Moraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e0"),
    ethnic: "ENDE",
    disease_ina: "Sakit Saraf",
    disease_ing: "neuralgia",
    name_ina: "Pa Aki",
    species: "Clerodendrum serratum (L.) Moon.",
    family: "Verbenaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e1"),
    ethnic: "ENDE",
    disease_ina: "Sakit Saraf",
    disease_ing: "neuralgia",
    name_ina: "Ndawa Ataaki",
    species: "Clausena excavata Burm. f.",
    family: "Rutaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bbe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e2"),
    ethnic: "ENDE",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Keba",
    species: "Croton tiglium L.",
    family: "Euphorbiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e3"),
    ethnic: "ENDE",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Rea",
    species: "Pandanus tectorius Park.",
    family: "Pandaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1dc"),
    ethnic: "ENDE",
    disease_ina: "Sakit pada Bagian Pusar",
    disease_ing: "Pain in Section Navel",
    name_ina: "Karo Anga",
    species: "Gmelina elliptica J. E. Smith.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e5"),
    ethnic: "NGADA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kaju Mani",
    species: "Cinnamomum burmanii Ness. ex BI.",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e4"),
    ethnic: "ENDE",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e6"),
    ethnic: "NGADA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Mboa",
    species: "Ceiba petandra (L.) Gaertn.",
    family: "Bombacaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e7"),
    ethnic: "ENDE",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Waru",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e8"),
    ethnic: "NGADA",
    disease_ina: "Beri-beri",
    disease_ing: "Beri-beri",
    name_ina: "Mesi",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1eb"),
    ethnic: "NGADA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Kopi Gege",
    species: "Leucaena Leucocephala (Lmk.) De Wit.",
    family: "Fabaceae",
    section_ina: "polong, biji muda (tunggal)",
    section_ing: "peas, young seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1e9"),
    ethnic: "NGADA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Goawa",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ed"),
    ethnic: "NGADA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Saledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun, batang muda (tunggal)",
    section_ing: "leaves, young stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ee"),
    ethnic: "NGADA",
    disease_ina: "Diabetes Mellitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "Maja",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ef"),
    ethnic: "NGADA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Goawa",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f0"),
    ethnic: "NGADA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Hazalea",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ec"),
    ethnic: "NGADA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Rita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f1"),
    ethnic: "NGADA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Pau",
    species: "Mangifera indica L.",
    family: "Anacardiaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f2"),
    ethnic: "NGADA",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Fai",
    species: "Albizia procera (Roxb.) Bth.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ea"),
    ethnic: "NGADA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Eu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f3"),
    ethnic: "NGADA",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Ketepeng",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f4"),
    ethnic: "NGADA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Tobomboa",
    species: "Melastoma affine D. Don.",
    family: "Melastomaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f5"),
    ethnic: "NGADA",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Kode",
    species: "Calotropis gigantea (Willd.) Dryand ex W. T Ait.",
    family: "Asclepiadaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f6"),
    ethnic: "NGADA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Dalu/Dhelo",
    species: "Erythrina orientalis (L.) Murr.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f9"),
    ethnic: "NGADA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Ida Jama",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f8"),
    ethnic: "NGADA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Rita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1fb"),
    ethnic: "NGADA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt.",
    family: "Myristicaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1fc"),
    ethnic: "NGADA",
    disease_ina: "Infeksi pada Tulang Patah",
    disease_ing: "Infection in Bone Fracture",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (ramuan)",
    section_ing: "pulp (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1fd"),
    ethnic: "NGADA",
    disease_ina: "Infeksi pada Tulang Patah",
    disease_ing: "Infection in Bone Fracture",
    name_ina: "Ndalu",
    species: "Caesalpinia bundoc (L.) Roxb.",
    family: "Fabaceae",
    section_ina: "daging biji (ramuan)",
    section_ing: "meat seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1fa"),
    ethnic: "ENDE",
    disease_ina: "Selesma",
    disease_ing: "Cold",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1fe"),
    ethnic: "NGADA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1ff"),
    ethnic: "NGADA",
    disease_ina: "Infeksi pada Tulang Patah",
    disease_ing: "Infection in Bone Fracture",
    name_ina: "Uta Kalo",
    species: "Acacia concina (Willd.) DC.",
    family: "Fabaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa201"),
    ethnic: "NGADA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa200"),
    ethnic: "NGADA",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Ki",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa1f7"),
    ethnic: "NGADA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Hazalea",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa202"),
    ethnic: "MANGGARAI",
    disease_ina: "Menurunkan Panas",
    disease_ing: "Heat Lose",
    name_ina: "Garit",
    species: "Rhus taetensis Guillem.",
    family: "Anacardiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa205"),
    ethnic: "NGADA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Ida Jama",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa207"),
    ethnic: "NGADA",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Walu",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa203"),
    ethnic: "NGADA",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa208"),
    ethnic: "NGADA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Beo",
    species: "Picrasma javanica BI.",
    family: "Simarubaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa209"),
    ethnic: "NGADA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Hazalea",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20a"),
    ethnic: "NGADA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Rita",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20b"),
    ethnic: "NGADA",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Deke",
    species: "Entada phaseoloides (L.) Merr.",
    family: "Fabaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20c"),
    ethnic: "NGADA",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Ndalu",
    species: "Caesalpinia bundoc (L.) Roxb.",
    family: "Fabaceae",
    section_ina: "daging biji (tunggal)",
    section_ing: "meat seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa204"),
    ethnic: "NGADA",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Ketepeng",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20d"),
    ethnic: "NGADA",
    disease_ina: "Kholera",
    disease_ing: "kholera",
    name_ina: "Hazalea",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa210"),
    ethnic: "NGADA",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Deba",
    species: "Momorica Charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa211"),
    ethnic: "NGADA",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Mesi",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa212"),
    ethnic: "NGADA",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Kajuanga",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20f"),
    ethnic: "NGADA",
    disease_ina: "Mata Merah",
    disease_ing: "Red eye",
    name_ina: "Au",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "air rebung (tunggal)",
    section_ing: "water bamboo shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa206"),
    ethnic: "NGADA",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa20e"),
    ethnic: "NGADA",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Deba",
    species: "Momorica Charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa213"),
    ethnic: "NGADA",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Uta Kinggo",
    species: "Sonchus arvensis L.",
    family: "Asteaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa214"),
    ethnic: "NGADA",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa215"),
    ethnic: "NGADA",
    disease_ina: "Menghitamkan Rambut",
    disease_ing: "blacken Hair",
    name_ina: "Kajuanga",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa216"),
    ethnic: "NGADA",
    disease_ina: "Muntaber",
    disease_ing: "vomiting",
    name_ina: "Hazalea",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa217"),
    ethnic: "NGADA",
    disease_ina: "Muntah Darah",
    disease_ing: "Vomiting blood",
    name_ina: "Mengi",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa218"),
    ethnic: "NGADA",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Ketepeng",
    species: "Cassia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa219"),
    ethnic: "NGADA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Uta Kinggo",
    species: "Sonchus arvensis L.",
    family: "Asteaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21a"),
    ethnic: "NGADA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Uta Mboti",
    species: "Amaranthus spp.",
    family: "Amaranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21d"),
    ethnic: "NGADA",
    disease_ina: "Penguat Gigi dan Gusi",
    disease_ing: "Strengthening Teeth and Gums",
    name_ina: "Eu",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21b"),
    ethnic: "NGADA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Ngadhu",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21c"),
    ethnic: "NGADA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Uta Kinggo",
    species: "Sonchus arvensis L.",
    family: "Asteaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21e"),
    ethnic: "NGADA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Ngadhu",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa220"),
    ethnic: "NGADA",
    disease_ina: "Perawatan Sesudah Melahirkan",
    disease_ing: "Care After Childbirth",
    name_ina: "Uta Mboti",
    species: "Amaranthus spp.",
    family: "Amaranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa21f"),
    ethnic: "NGADA",
    disease_ina: "Penyakit Tampa pada Anak",
    disease_ing: "Tampa Disease in Children",
    name_ina: "Ure",
    species: "Cajanus cajan (L.) Hurth.",
    family: "Fabaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa223"),
    ethnic: "NGADA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Mengi",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa224"),
    ethnic: "NGADA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Mbolo",
    species: "Corypha gembanga (BI.) BI.",
    family: "Arecaceae",
    section_ina: "pucuk batang (tunggal)",
    section_ing: "shoots rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa225"),
    ethnic: "NGADA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Beo",
    species: "Picrasma javanica BI.",
    family: "Simarubaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa226"),
    ethnic: "NGADA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Kaju Mani",
    species: "Cinnamomum burmanii Ness. ex BI.",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa227"),
    ethnic: "NGADA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Dalu/Dhelo",
    species: "Erythrina orientalis (L.) Murr.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa228"),
    ethnic: "NGADA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Ki",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa229"),
    ethnic: "NGADA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Masoi",
    species: "Cryptocarya massoy (Oken.) Kosterm.",
    family: "Lauraceae",
    section_ina: "kulit batang, akar (tunggal)",
    section_ing: "bark, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22a"),
    ethnic: "NGADA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Fai",
    species: "Albizia procera (Roxb.) Bth.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22b"),
    ethnic: "NGADA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Ndalu",
    species: "Caesalpinia bundoc (L.) Roxb.",
    family: "Fabaceae",
    section_ina: "daging biji (tunggal)",
    section_ing: "meat seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22c"),
    ethnic: "NGADA",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22d"),
    ethnic: "NGADA",
    disease_ina: "Selesma",
    disease_ing: "Cold",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22e"),
    ethnic: "NGADA",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Walu",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa22f"),
    ethnic: "NGADA",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Ida Jama",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa230"),
    ethnic: "NGADA",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa222"),
    ethnic: "NGADA",
    disease_ina: "Sakit Dada",
    disease_ing: "Chest pain",
    name_ina: "Masoi",
    species: "Cryptocarya massoy (Oken.) Kosterm.",
    family: "Lauraceae",
    section_ina: "kulit batang, akar (tunggal)",
    section_ing: "bark, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa231"),
    ethnic: "NGADA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Maja",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa232"),
    ethnic: "NGADA",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa233"),
    ethnic: "NGADA",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt.",
    family: "Myristicaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa235"),
    ethnic: "NGADA",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Rea",
    species: "Pandanus tectorius Park.",
    family: "Pandaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc019f5f9c6046a6aa221"),
    ethnic: "NGADA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Feo",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa236"),
    ethnic: "NGADA",
    disease_ina: "TBC",
    disease_ing: "TBC",
    name_ina: "Uma",
    species: "Sesbania grandiflora Pers.",
    family: "Fabaceae",
    section_ina: "kulit batang, daun (tunggal)",
    section_ing: "bark, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa239"),
    ethnic: "LARANTUKA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Saledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun, batang muda (tunggal)",
    section_ing: "leaves, young stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23a"),
    ethnic: "LARANTUKA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Dringo",
    species: "Arocus calamus L.",
    family: "Araceae",
    section_ina: "daun, rimpang (tunggal)",
    section_ing: "leaf, rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23b"),
    ethnic: "LARANTUKA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Jambu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa238"),
    ethnic: "LARANTUKA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Jambu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23c"),
    ethnic: "LARANTUKA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kayu Berwada",
    species: "Zanthoxylum rhetsa",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23e"),
    ethnic: "LARANTUKA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Wraat",
    species: "Pongamia pinnata (L.) Pierre.",
    family: "Fabaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23d"),
    ethnic: "LARANTUKA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Sapu - Sapu",
    species: "Sida rhombifolia L.",
    family: "Malvaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa23f"),
    ethnic: "LARANTUKA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Beo",
    species: "Picrasma javanica Bl.",
    family: "Simarubaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa240"),
    ethnic: "LARANTUKA",
    disease_ina: "Menurunkan Panas",
    disease_ing: "Heat Lose",
    name_ina: "Damar",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa237"),
    ethnic: "SIKKA",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Saledri",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "daun, batang muda (tunggal)",
    section_ing: "leaves, young stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa243"),
    ethnic: "LARANTUKA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa244"),
    ethnic: "LARANTUKA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa245"),
    ethnic: "LARANTUKA",
    disease_ina: "Diabetes melitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "Kedilak",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa242"),
    ethnic: "LARANTUKA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Damar",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa246"),
    ethnic: "LARANTUKA",
    disease_ina: "Impotensi",
    disease_ing: "impotence",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa247"),
    ethnic: "LAKADEI",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Subete",
    species: "Euphorbia schumanii",
    family: "Euphorbiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa248"),
    ethnic: "LAKADEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jagung Putih",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa241"),
    ethnic: "LARANTUKA",
    disease_ina: "Menurunkan Panas",
    disease_ing: "Heat Lose",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa249"),
    ethnic: "LARANTUKA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Lamtoro",
    species: "Leucaena leucocephala (Lmk.) De Wit",
    family: "Fabaceae",
    section_ina: "polong,biji muda (tunggal)",
    section_ing: "peas, young seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24a"),
    ethnic: "LAKADEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kakuit",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24c"),
    ethnic: "LAKADEI",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24b"),
    ethnic: "LAKADEI",
    disease_ina: "Bayi Meninggal dalam Kandungan",
    disease_ing: "Baby Dies in Gynecology",
    name_ina: "Nangka",
    species: "Artocarpus integra L.",
    family: "Moraceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b4b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24d"),
    ethnic: "LAKADEI",
    disease_ina: "Bayi Meninggal dalam Kandungan",
    disease_ing: "Baby Dies in Gynecology",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24e"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Adus",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa24f"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Enau",
    species: "Arenga pinnata Merr.",
    family: "Arecaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa250"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Jambu Batu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa251"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Lontar",
    species: "Borrasus sundaica Becc.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa252"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kapuk",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa253"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Katimu",
    species: "Timonius sp.",
    family: "Rubiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa255"),
    ethnic: "LAKADEI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Kakuit",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa256"),
    ethnic: "LAKADEI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Jagung Putih",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa254"),
    ethnic: "LAKADEI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Buk Merah",
    species: "Cordyline terminalis Planch.",
    family: "Agavaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa257"),
    ethnic: "LAKADEI",
    disease_ina: "Kejang pada Bayi",
    disease_ing: "Spasms in Infants",
    name_ina: "Jeruk Manis",
    species: "Citrus nobilis Lour.",
    family: "Rutaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25a"),
    ethnic: "LAKADEI",
    disease_ina: "Kencing darah",
    disease_ing: "blood urine",
    name_ina: "Banut",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa258"),
    ethnic: "LAKADEI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Banut",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25b"),
    ethnic: "LAKADEI",
    disease_ina: "Kencing darah",
    disease_ing: "blood urine",
    name_ina: "Buk Merah",
    species: "Cordyline terminalis Planch.",
    family: "Agavaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25d"),
    ethnic: "LAKADEI",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Riit",
    species: "Opuntina vulgaris",
    family: "Cactaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25c"),
    ethnic: "LAKADEI",
    disease_ina: "Kencing darah",
    disease_ing: "blood urine",
    name_ina: "Jagung Putih",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25f"),
    ethnic: "LAKADEI",
    disease_ina: "Luka Kena Benda Tajam",
    disease_ing: "Taxable wound Sharps",
    name_ina: "Tembakau Fuik",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa260"),
    ethnic: "LAKADEI",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa259"),
    ethnic: "LAKADEI",
    disease_ina: "Kejang pada Bayi",
    disease_ing: "Spasms in Infants",
    name_ina: "Banut",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "Kulit batang (ramuan)",
    section_ing: "The bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa261"),
    ethnic: "LAKADEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Jagung",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa262"),
    ethnic: "LAKADEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Kacang Hijau",
    species: "Phaseolus radiatus L.",
    family: "Fabaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa263"),
    ethnic: "LAKADEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa264"),
    ethnic: "LAKADEI",
    disease_ina: "Muntah Darah",
    disease_ing: "Vomiting blood",
    name_ina: "Jagung Putih",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa265"),
    ethnic: "LAKADEI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Adus",
    species: "Cassia fistula L.",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa266"),
    ethnic: "LAKADEI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Kacang Merah",
    species: "Phaseolus vulgaris L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d38")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa268"),
    ethnic: "LAKADEI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Kloe",
    species: "Capillipedium assimle (Steud.) A. Camus",
    family: "Poaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa267"),
    ethnic: "LAKADEI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji, kulit batang (ramuan)",
    section_ing: "seeds, bark (herbs)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa269"),
    ethnic: "LAKADEI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Maenmata",
    species: "Lindernia sp.",
    family: "",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26b"),
    ethnic: "LAKADEI",
    disease_ina: "Muntah Darah",
    disease_ing: "Vomiting blood",
    name_ina: "Kakuit",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26a"),
    ethnic: "LAKADEI",
    disease_ina: "Payudara Bengkak",
    disease_ing: "breast Swelling",
    name_ina: "Kacang Merah",
    species: "Phaseolus vulgaris L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d38")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26c"),
    ethnic: "LAKADEI",
    disease_ina: "Penyakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26d"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kaktus",
    species: "Opuntia sp.",
    family: "",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26e"),
    ethnic: "LAKADEI",
    disease_ina: "Penyakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Manhidiruni",
    species: "Macrosolen coachinchinensis (Lour.) Tiegh",
    family: "Loranthaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa270"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa26f"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Alang - alang",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa271"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Kaktus",
    species: "Opuntia sp.",
    family: "Cactaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa25e"),
    ethnic: "LAKADEI",
    disease_ina: "Kencing darah",
    disease_ing: "blood urine",
    name_ina: "Kakuit",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa272"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Mangga",
    species: "Mangifera indica L.",
    family: "Anacardiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa273"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Leher Bengkak",
    disease_ing: "Neck Pain Swelling",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa275"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Kakuit Muntin",
    species: "Sida acuta Burm.",
    family: "Malvaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa274"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Leher Bengkak",
    disease_ing: "Neck Pain Swelling",
    name_ina: "Sikbor",
    species: "Acriopsis javanica Blume.",
    family: "Orchidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa276"),
    ethnic: "LAKADEI",
    disease_ina: "Panas",
    disease_ing: "Hot",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa277"),
    ethnic: "LAKADEI",
    disease_ina: "Tharchom",
    disease_ing: "Tharchom",
    name_ina: "Takvok",
    species: "Plectranthus teysmanni",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa278"),
    ethnic: "LAKADEI",
    disease_ina: "Telinga Bernanah",
    disease_ing: "ear Bernanah",
    name_ina: "Kabkau",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27a"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Ketelawang",
    species: "Bauhinia glabrifolia",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa279"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Ceremei Palsu",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27b"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Meteringi",
    species: "Aporosa grandistipula",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27c"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Mokotoa",
    species: "Callophyllum dasypodum Miq.",
    family: "Clusiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27d"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Ketepeng",
    species: "Casia alata L.",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27e"),
    ethnic: "DAYAK PUNAH HOVONGAN",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Urobadaha",
    species: "Euphorbia orbiculata Miq.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa27f"),
    ethnic: "JAWA",
    disease_ina: "Agar Anak Kuat Jalan",
    disease_ing: "In order for Strong Kids Way",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa281"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kunyit",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa282"),
    ethnic: "JAWA",
    disease_ina: "Borok",
    disease_ing: "ulcer",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa284"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa285"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa280"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (ramuan)",
    section_ing: "pulp (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa286"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa289"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Krangeyan",
    species: "Litsea cubeba Pers",
    family: "Lauraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28a"),
    ethnic: "JAWA",
    disease_ina: "Digigit Serangga",
    disease_ing: "Insects bitten",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa283"),
    ethnic: "JAWA",
    disease_ina: "Bronkitis",
    disease_ing: "Bronchitis",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28b"),
    ethnic: "LAKADEI",
    disease_ina: "Sakit perut",
    disease_ing: "Stomach ache",
    name_ina: "Jambu Batu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "pucuk daun",
    section_ing: "shoots",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa288"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Telasih",
    species: "Cinnamomum parthenoxylon Meissn",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28d"),
    ethnic: "JAWA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28e"),
    ethnic: "JAWA",
    disease_ina: "Eksim",
    disease_ing: "Eczema",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28f"),
    ethnic: "JAWA",
    disease_ina: "Eksim",
    disease_ing: "Eczema",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (ramuan)",
    section_ing: "pulp (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa287"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa290"),
    ethnic: "JAWA",
    disease_ina: "Eksim",
    disease_ing: "Eczema",
    name_ina: "Kunyit",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa291"),
    ethnic: "JAWA",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa292"),
    ethnic: "JAWA",
    disease_ina: "Gatal-Gatal",
    disease_ing: "Itchy",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa28c"),
    ethnic: "JAWA",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa294"),
    ethnic: "JAWA",
    disease_ina: "Gondong",
    disease_ing: "goitre",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa295"),
    ethnic: "JAWA",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa293"),
    ethnic: "JAWA",
    disease_ina: "Influensa",
    disease_ing: "Influenza",
    name_ina: "Krangeyan",
    species: "Litsea cubeba Pers",
    family: "Lauraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa296"),
    ethnic: "JAWA",
    disease_ina: "Guam",
    disease_ing: "Thrush",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa297"),
    ethnic: "JAWA",
    disease_ina: "Kesehatan Gigi",
    disease_ing: "Dental health",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa298"),
    ethnic: "JAWA",
    disease_ina: "Kulit Bersisik",
    disease_ing: "scaly skin",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa299"),
    ethnic: "JAWA",
    disease_ina: "Kurang Darah",
    disease_ing: "Less blood",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29a"),
    ethnic: "JAWA",
    disease_ina: "Kutu Air",
    disease_ing: "Water fleas",
    name_ina: "Gringsingan",
    species: "Hyptis suaveolens (L.) Poir",
    family: "Lamiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29b"),
    ethnic: "JAWA",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Telasih",
    species: "Cinnamomum parthenoxylon Meissn",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29c"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29d"),
    ethnic: "JAWA",
    disease_ina: "Membersihkan Darah Kotor",
    disease_ing: "Cleaning Dirty Blood",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a1"),
    ethnic: "JAWA",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29e"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa29f"),
    ethnic: "JAWA",
    disease_ina: "Menambah Napsu Makan",
    disease_ing: "Adding Napsu Spot",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a2"),
    ethnic: "JAWA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "kulit batang,akar (tunggal)",
    section_ing: "bark, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a3"),
    ethnic: "JAWA",
    disease_ina: "Pencuci Luka",
    disease_ing: "Washer Luka",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a4"),
    ethnic: "JAWA",
    disease_ina: "Penghilang Rasa Nyeri",
    disease_ing: "Pain relievers",
    name_ina: "Telasih",
    species: "Cinnamomum parthenoxylon Meissn",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a5"),
    ethnic: "JAWA",
    disease_ina: "Penyakit Kelamin",
    disease_ing: "Sexually transmitted diseases",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a6"),
    ethnic: "JAWA",
    disease_ina: "Pusing",
    disease_ing: "Dizzy",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a7"),
    ethnic: "JAWA",
    disease_ina: "Radang Selaput Sendi",
    disease_ing: "Inflammation of the membrane joints",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "daun, bunga (tunggal)",
    section_ing: "leaves, flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a8"),
    ethnic: "JAWA",
    disease_ina: "Radang Sendi",
    disease_ing: "Arthritis",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "daun(tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a9"),
    ethnic: "JAWA",
    disease_ina: "Radang Tonsil",
    disease_ing: "inflammation of the tonsils",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2aa"),
    ethnic: "JAWA",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ab"),
    ethnic: "JAWA",
    disease_ina: "Radang Usus Buntu",
    disease_ing: "Appendicitis",
    name_ina: "Kayu Mas",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ac"),
    ethnic: "JAWA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Krangeyan",
    species: "Litsea cubeba Pers",
    family: "Lauraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cc4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ad"),
    ethnic: "JAWA",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (ramuan)",
    section_ing: "pulp (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ae"),
    ethnic: "JAWA",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Kunyit",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2af"),
    ethnic: "JAWA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Telasih",
    species: "Cinnamomum parthenoxylon Meissn",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b0"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b2"),
    ethnic: "JAWA",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "daging buah (tunggal)",
    section_ing: "meat fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b1"),
    ethnic: "JAWA",
    disease_ina: "Skorbut",
    disease_ing: "skorbut",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2a0"),
    ethnic: "JAWA",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b3"),
    ethnic: "JAWA",
    disease_ina: "Tukak Lambung",
    disease_ing: "Gastric",
    name_ina: "Johar",
    species: "Cassia siamea Lamk",
    family: "Fabaceae",
    section_ina: "kulit batang,akar (tunggal)",
    section_ing: "bark, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b5"),
    ethnic: "JAWA",
    disease_ina: "Penahan Haus dan Lapar",
    disease_ing: "Retaining Haus and Hunger",
    name_ina: "Pinang",
    species: "Arenga pinnata Linn",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b4"),
    ethnic: "JAWA",
    disease_ina: "Penahan Haus dan Lapar",
    disease_ing: "Retaining Haus and Hunger",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b6"),
    ethnic: "JAWA",
    disease_ina: "Tidak Mudah Capek",
    disease_ing: "Not Easy Tired",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b7"),
    ethnic: "JAWA",
    disease_ina: "Agar Kuat Jalan",
    disease_ing: "To Strength Road",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b8"),
    ethnic: "JAWA",
    disease_ina: "Capek",
    disease_ing: "Tired",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2b9"),
    ethnic: "JAWA",
    disease_ina: "Tidak Mudah Capek",
    disease_ing: "Not Easy Tired",
    name_ina: "Pinang",
    species: "Arenga pinnata Linn",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ba"),
    ethnic: "JAWA",
    disease_ina: "Gatal-gatal",
    disease_ing: "Itchy",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2bd"),
    ethnic: "JAWA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2be"),
    ethnic: "JAWA",
    disease_ina: "Menahan Haus dan Lapar",
    disease_ing: "Restraining Haus and Hunger",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2bf"),
    ethnic: "JAWA",
    disease_ina: "Menambah Napsu Makan",
    disease_ing: "Adding Napsu Spot",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2bb"),
    ethnic: "JAWA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c0"),
    ethnic: "JAWA",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c1"),
    ethnic: "JAWA",
    disease_ina: "Menguatkan Gigi",
    disease_ing: "strengthens Teeth",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c2"),
    ethnic: "JAWA",
    disease_ina: "Ambeien",
    disease_ing: "Hemorrhoid",
    name_ina: "Jamu Dersono",
    species: "Eugenia javanica Lamk",
    family: "Myrtaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c3"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c4"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kapulogo",
    species: "Amomum cardamomum L.",
    family: "zingiberaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c5"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kayu Manis",
    species: "Cinnamomum cardamomum L",
    family: "Lauraceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c6"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c7"),
    ethnic: "JAWA",
    disease_ina: "Darah Rendah",
    disease_ing: "Low blood pressure",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "daun tua (tunggal)",
    section_ing: "older leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c8"),
    ethnic: "JAWA",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2c9"),
    ethnic: "JAWA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2cb"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Asem",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ca"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2cc"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Cengkih",
    species: "Eugenia aromatica O.K",
    family: "Myrtaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ce"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Gayam",
    species: "Inocarpus edulis J.R. & G. Forst",
    family: "Fabaceae",
    section_ina: "kulit (ramuan)",
    section_ing: "leather (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2cd"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sirih",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal) (ramuan)",
    section_ing: "leaf (singular) (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2cf"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kayu Manis",
    species: "Cinnamomum cardamomum L",
    family: "Lauraceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d0"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Pisang Ambon",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "jantung (ramuan)",
    section_ing: "heart (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2bc"),
    ethnic: "JAWA",
    disease_ina: "Kesehatan Gigi",
    disease_ing: "Dental health",
    name_ina: "Jambe",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d1"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Pisang Kluthuk",
    species: "Musa balbisiana Colla",
    family: "Musaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d2"),
    ethnic: "JAWA",
    disease_ina: "Diare Berdarah",
    disease_ing: "Bloody diarrhea",
    name_ina: "Gayam",
    species: "Inocarpus edulis J.R. & G. Forst",
    family: "Fabaceae",
    section_ina: "kulit (ramuan)",
    section_ing: "leather (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d3"),
    ethnic: "JAWA",
    disease_ina: "Diare Berdarah",
    disease_ing: "Bloody diarrhea",
    name_ina: "Pisang",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "jantung (ramuan)",
    section_ing: "heart (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d4"),
    ethnic: "JAWA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Keben",
    species: "Barringtonia asiatica (L.) Kurz",
    family: "Lecythidaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d5"),
    ethnic: "JAWA",
    disease_ina: "Gusi Bengkak",
    disease_ing: "Swollen gums",
    name_ina: "Serai",
    species: "Andropogon citratus DC.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b20")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d6"),
    ethnic: "JAWA",
    disease_ina: "Haid Berlebihan",
    disease_ing: "Excessive menstrual",
    name_ina: "Adas pulasari",
    species: "Foeniculum vulgare Mill",
    family: "Apiacaeae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d7"),
    ethnic: "JAWA",
    disease_ina: "Kejang Lambung",
    disease_ing: "seizures Stomach",
    name_ina: "Pala",
    species: "Myristica argentea Warb",
    family: "Myristicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d8"),
    ethnic: "JAWA",
    disease_ina: "Kelelahan",
    disease_ing: "Fatigue",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "daun tua (tunggal)",
    section_ing: "older leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2d9"),
    ethnic: "JAWA",
    disease_ina: "Kelelahan",
    disease_ing: "Fatigue",
    name_ina: "Kayu Manis",
    species: "Cinnamomum cardamomum L",
    family: "Lauraceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2da"),
    ethnic: "JAWA",
    disease_ina: "Demam Pada Anak",
    disease_ing: "Fever In Children",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2db"),
    ethnic: "JAWA",
    disease_ina: "Kelelahan",
    disease_ing: "Fatigue",
    name_ina: "Soka",
    species: "Saraca declinata Miq",
    family: "Fabaceae",
    section_ina: "kulit batang",
    section_ing: "bark"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2dc"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Temulawak",
    species: "Curcuma xanthoriza Roxb",
    family: "zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2de"),
    ethnic: "JAWA",
    disease_ina: "Demam Pada Anak",
    disease_ing: "Fever In Children",
    name_ina: "Nangka Sabrang",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2dd"),
    ethnic: "JAWA",
    disease_ina: "Lemas",
    disease_ing: "Limp",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "daun tua (tunggal)",
    section_ing: "older leaves (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e1"),
    ethnic: "JAWA",
    disease_ina: "Membersihkan Darah Kotor",
    disease_ing: "Cleaning Dirty Blood",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn",
    family: "Fabaceae",
    section_ina: "daun, buah (tunggal)",
    section_ing: "leaves, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e2"),
    ethnic: "JAWA",
    disease_ina: "Mempercepat Putus Pusar pada Bayi",
    disease_ing: "Disconnect accelerate Navel in Infants",
    name_ina: "Kelapa Cengkir",
    species: "Cocos nucifera L",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2df"),
    ethnic: "JAWA",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Serai",
    species: "Cymbopogon citratus (DC.) Stapf",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e3"),
    ethnic: "JAWA",
    disease_ina: "Menambah Napsu Makan",
    disease_ing: "Adding Napsu Spot",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Arecaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e0"),
    ethnic: "JAWA",
    disease_ina: "Membersihkan Darah Kotor",
    disease_ing: "Cleaning Dirty Blood",
    name_ina: "Pare Ayam",
    species: "Momordica charantia L",
    family: "Cucurbitaceae",
    section_ina: "daun, buah (tunggal)",
    section_ing: "leaves, fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e4"),
    ethnic: "JAWA",
    disease_ina: "Menambah Napsu Makan",
    disease_ing: "Adding Napsu Spot",
    name_ina: "Lombok",
    species: "Capsicum frutescens L",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e5"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Kemuning",
    species: "Murraya paniculata (L.) Jack",
    family: "Rutaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e8"),
    ethnic: "JAWA",
    disease_ina: "Mengharumkan Bau Kencing",
    disease_ing: "Urine Odor scent",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e9"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Pandan",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ea"),
    ethnic: "JAWA",
    disease_ina: "Menjernihkan Mata",
    disease_ing: "Eye purify",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e6"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Kepel",
    species: "Stelechocarpus burahol Hook. F. & Th",
    family: "Annonaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2eb"),
    ethnic: "JAWA",
    disease_ina: "Menjernihkan Mata",
    disease_ing: "Eye purify",
    name_ina: "Temugiring",
    species: "Curcuma heyneana Val. & V Zijp",
    family: "zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ec"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Temugiring",
    species: "Curcuma heyneana Val. & V Zijp",
    family: "zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ed"),
    ethnic: "JAWA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Arecaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ee"),
    ethnic: "JAWA",
    disease_ina: "Mulas",
    disease_ing: "Heartburn",
    name_ina: "Gayam",
    species: "Inocarpus edulis J.R. & G. Forst",
    family: "Fabaceae",
    section_ina: "kulit (ramuan)",
    section_ing: "leather (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ef"),
    ethnic: "JAWA",
    disease_ina: "Mulas",
    disease_ing: "Heartburn",
    name_ina: "Pisang",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "jantung (ramuan)",
    section_ing: "heart (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f0"),
    ethnic: "JAWA",
    disease_ina: "Mulas",
    disease_ing: "Heartburn",
    name_ina: "Cengkih",
    species: "Eugenia aromatica O.K",
    family: "Myrtaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f1"),
    ethnic: "JAWA",
    disease_ina: "Muntah-muntah",
    disease_ing: "Throws up",
    name_ina: "Kayu Manis",
    species: "Cinnamomum cardamomum L",
    family: "Lauraceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f2"),
    ethnic: "JAWA",
    disease_ina: "Muntah-muntah",
    disease_ing: "Throws up",
    name_ina: "Pala",
    species: "Myristica argentea Warb",
    family: "Myristicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f4"),
    ethnic: "JAWA",
    disease_ina: "Obat Tidur",
    disease_ing: "Sleeping pills",
    name_ina: "Pala",
    species: "Myristica argentea Warb",
    family: "Myristicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f3"),
    ethnic: "JAWA",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Puyang",
    species: "Zingiber aromaticum Val",
    family: "zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f5"),
    ethnic: "JAWA",
    disease_ina: "Panas Dalam",
    disease_ing: "Heartburn",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Arecaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f6"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Arecaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f7"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bekas Cacar",
    disease_ing: "Former eliminate Smallpox",
    name_ina: "Kelapa Cengkir",
    species: "Cocos nucifera L",
    family: "Areaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f8"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Keringat",
    disease_ing: "Sweat laxative",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2e7"),
    ethnic: "JAWA",
    disease_ina: "Menghaluskan Wajah",
    disease_ing: "Smooth the face",
    name_ina: "Jambu Dersono",
    species: "Eugenia javanica Lamk",
    family: "Myrtaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2f9"),
    ethnic: "JAWA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2fa"),
    ethnic: "JAWA",
    disease_ina: "Perawatan kulit",
    disease_ing: "Skin care",
    name_ina: "Beras",
    species: "Oryza sativa L forma glutinosa Auct",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2fb"),
    ethnic: "JAWA",
    disease_ina: "Perawatan kulit",
    disease_ing: "Skin care",
    name_ina: "Kemuning",
    species: "Murraya paniculata (L.) Jack",
    family: "Rutaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2fc"),
    ethnic: "JAWA",
    disease_ina: "Perawatan kulit",
    disease_ing: "Skin care",
    name_ina: "Pandan",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2fd"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Kapulogo",
    species: "Amomum cardamomum L.",
    family: "zingiberaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2fe"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa2ff"),
    ethnic: "JAWA",
    disease_ina: "Radang Anak Telinga",
    disease_ing: "Child Ear Inflammation",
    name_ina: "Pala",
    species: "Myristica argentea Warb",
    family: "Myristicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa300"),
    ethnic: "JAWA",
    disease_ina: "Radang Selaput Lendir Mata",
    disease_ing: "Inflammation of the mucus membrane Eyes",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa301"),
    ethnic: "JAWA",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Serai",
    species: "Andropogon citratus DC.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b20")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa302"),
    ethnic: "JAWA",
    disease_ina: "Raja Singa",
    disease_ing: "Lion King",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa303"),
    ethnic: "JAWA",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa304"),
    ethnic: "JAWA",
    disease_ina: "Penawar Racun",
    disease_ing: "bidder Toxins",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa306"),
    ethnic: "JAWA",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Ketela Kaspo",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa305"),
    ethnic: "JAWA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cengkih",
    species: "Eugenia aromatica O.K",
    family: "Myrtaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa309"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Gayam",
    species: "Inocarpus edulis J.R. & G. Forst",
    family: "Fabaceae",
    section_ina: "kulit (ramuan)",
    section_ing: "leather (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa308"),
    ethnic: "JAWA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Cengkih",
    species: "Eugenia aromatica O.K",
    family: "Myrtaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c30")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30a"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Temugiring",
    species: "Curcuma heyneana Val. & V Zijp",
    family: "Zingiberaceae",
    section_ina: "rimpang",
    section_ing: "rhizome",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30c"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Areacaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30b"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Pisang",
    species: "Musa paradisiaca L.",
    family: "Musaceae",
    section_ina: "jantung (ramuan)",
    section_ing: "heart (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30e"),
    ethnic: "JAWA",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Aren",
    species: "Arenga pinnata Merr",
    family: "Arecaceae",
    section_ina: "nira (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30f"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Pisang Kluthuk",
    species: "Musa balbisiana Colla",
    family: "Musaceae",
    section_ina: "daun, buah (tunggal)",
    section_ing: "leaves, fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa310"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Pala",
    species: "Myristica argentea Warb",
    family: "Myristicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa311"),
    ethnic: "JAWA",
    disease_ina: "Sesak Napas",
    disease_ing: "Hard to breathe",
    name_ina: "Lada",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa30d"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kayu Manis",
    species: "Cinnamomum cardamomum L",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa307"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Keringat",
    disease_ing: "Sweat laxative",
    name_ina: "Serai",
    species: "Andropogon citratus DC.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b20")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa312"),
    ethnic: "JAWA",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Sirih",
    species: "Piper Betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa314"),
    ethnic: "JAWA",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Adas pulasari",
    species: "Foeniculum vulgare Mill",
    family: "Apiacaeae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa313"),
    ethnic: "JAWA",
    disease_ina: "Urat Saraf Lemah",
    disease_ing: "Cord Weak",
    name_ina: "Nanas",
    species: "Ananas comosus (L.) Merr",
    family: "Bromeliaceae",
    section_ina: "sari buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa315"),
    ethnic: "JAWA",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Soka",
    species: "Saraca declinata Miq",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa316"),
    ethnic: "JAWA",
    disease_ina: "Urat Saraf Lemah",
    disease_ing: "Cord Weak",
    name_ina: "Belimbing Wuluh",
    species: "Averrhoa bilimbi L",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa317"),
    ethnic: "JAWA",
    disease_ina: "Urat Saraf Lemah",
    disease_ing: "Cord Weak",
    name_ina: "Kencur",
    species: "Kaempfera galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa318"),
    ethnic: "JAWA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Tapak doro",
    species: "Vinca rosea L.",
    family: "Apocynaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa319"),
    ethnic: "JAWA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Temu Hitam",
    species: "Curcuma aeruginosa Roxb.",
    family: "Zingiberaceae",
    section_ina: "",
    section_ing: "",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bef")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31a"),
    ethnic: "JAWA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Temu Giring",
    species: "Curcuma heyneana Val. & Zijp.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31b"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Belimbing manis",
    species: "Averrhoa carambola L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31c"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata Ness.",
    family: "Sterculiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31e"),
    ethnic: "JAWA",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31f"),
    ethnic: "JAWA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Jambu Biji",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa320"),
    ethnic: "JAWA",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Kunyit",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa321"),
    ethnic: "JAWA",
    disease_ina: "Menguruskan Badan",
    disease_ing: "Body Slimming",
    name_ina: "Jati Belanda",
    species: "Guazuma ulmifolia Lamk. Benth.",
    family: "Labiataceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa322"),
    ethnic: "JAWA",
    disease_ina: "Menguruskan Badan",
    disease_ing: "Body Slimming",
    name_ina: "Tempuyung",
    species: "Sonchus arvensis L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa31d"),
    ethnic: "JAWA",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Ketepeng Kebo",
    species: "Cassia alata L",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa323"),
    ethnic: "JAWA",
    disease_ina: "Meningkatkan Produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Katu",
    species: "Sauropus androgynus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da8")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa325"),
    ethnic: "JAWA",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa326"),
    ethnic: "JAWA",
    disease_ina: "Pelega Perut",
    disease_ing: "Stomach salve",
    name_ina: "Dringo",
    species: "Acorus calamus L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa327"),
    ethnic: "JAWA",
    disease_ina: "Peluruh air seni",
    disease_ing: "Urine laxative",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon stamineus Bth.",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa329"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Jinten",
    species: "Coleus amboinicus Lour.",
    family: "Labiataceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa328"),
    ethnic: "JAWA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32a"),
    ethnic: "JAWA",
    disease_ina: "Mimisan",
    disease_ing: "Nosebleed",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32b"),
    ethnic: "JAWA",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32c"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Blumea balsamifera (L.) DC.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32d"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Mentha arvensis L.",
    family: "Labiataceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ce6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32e"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Thymus vulgaris (L.) DC.",
    family: "Labiataceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98e02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa32f"),
    ethnic: "JAWA",
    disease_ina: "Batu Ginjal",
    disease_ing: "Kidney stones",
    name_ina: "",
    species: "Orthosiphon spicatus (Turb.) B. B. S.",
    family: "Labiataceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa330"),
    ethnic: "JAWA",
    disease_ina: "Bronchitis",
    disease_ing: "bronchitis",
    name_ina: "",
    species: "Physalis minima L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa331"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "",
    species: "Allium sativum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa332"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Alyxia reinwardtii BI.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa333"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Blumea balsamifera (L.) DC.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa334"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Morus alba L.",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa335"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Physalis minima L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa324"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa336"),
    ethnic: "JAWA",
    disease_ina: "Diabetes Mellitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "",
    species: "Momordica charantia L.",
    family: "Cucurbitacea",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa337"),
    ethnic: "JAWA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Rosa chinensis Jack.",
    family: "Rosaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa339"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "",
    species: "Tinospora tuberculata (Lmk.) Beume ex K. Heyne",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e05")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa338"),
    ethnic: "JAWA",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "",
    species: "Valeriana javanica",
    family: "Asteraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e1b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33a"),
    ethnic: "JAWA",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "",
    species: "Cyperus rotundus L.",
    family: "Cyperaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c01")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33b"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33c"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "",
    species: "Stevia rebaudeana Bertoni",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33d"),
    ethnic: "JAWA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "",
    species: "Cyperus rotundus L.",
    family: "Cyperaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c01")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33e"),
    ethnic: "JAWA",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa33f"),
    ethnic: "JAWA",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa340"),
    ethnic: "JAWA",
    disease_ina: "Menghilangkan Bau Mulut",
    disease_ing: "Eliminate Bad Breath",
    name_ina: "",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa341"),
    ethnic: "JAWA",
    disease_ina: "Penambah Napsu Makan",
    disease_ing: "Napsu enhancer Spot",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaeae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa342"),
    ethnic: "JAWA",
    disease_ina: "Meningkatkan Produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Curcuma xanthorriza Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa343"),
    ethnic: "JAWA",
    disease_ina: "Meningkatkan Produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Taraxacum officinale",
    family: "Asteraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa344"),
    ethnic: "JAWA",
    disease_ina: "Memperlancar Persalinan",
    disease_ing: "Streamlining Labor",
    name_ina: "",
    species: "Piper retrofractum Vahl.",
    family: "Piperaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d54")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa346"),
    ethnic: "JAWA",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa347"),
    ethnic: "JAWA",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "",
    species: "Kaempferia galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa348"),
    ethnic: "JAWA",
    disease_ina: "Obat Penenang",
    disease_ing: "Sedative",
    name_ina: "",
    species: "Valeriana javanica",
    family: "Asteraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e1b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa349"),
    ethnic: "JAWA",
    disease_ina: "Pelega Perut",
    disease_ing: "Stomach salve",
    name_ina: "",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34a"),
    ethnic: "JAWA",
    disease_ina: "Pelega Perut",
    disease_ing: "Stomach salve",
    name_ina: "",
    species: "Curcuma domestica Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34b"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Coix lacryma-jobi L.",
    family: "Poaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bcd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34d"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34e"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Plantago major L.",
    family: "Plantaginaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d58")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34f"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Physalis minima L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa350"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Sonchus arvensis L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa345"),
    ethnic: "JAWA",
    disease_ina: "Mimisan",
    disease_ing: "Nosebleed",
    name_ina: "",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa351"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Dahak",
    disease_ing: "Sputum laxative",
    name_ina: "",
    species: "Allium cepa Linn.",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa352"),
    ethnic: "JAWA",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "",
    species: "Sambucus arvensis",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa353"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Dahak",
    disease_ing: "Sputum laxative",
    name_ina: "",
    species: "Polygala tenuifolia",
    family: "Polygalaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d68")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa354"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Dahak",
    disease_ing: "Sputum laxative",
    name_ina: "",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa355"),
    ethnic: "JAWA",
    disease_ina: "Penghangat Tubuh",
    disease_ing: "heating Body",
    name_ina: "",
    species: "Eclipta alba",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa356"),
    ethnic: "JAWA",
    disease_ina: "Penghangat Tubuh",
    disease_ing: "heating Body",
    name_ina: "",
    species: "Thea sinensis Linn.",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa357"),
    ethnic: "JAWA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "",
    species: "Usnea misaminensis",
    family: "Usneaceae",
    section_ina: "thallus (tunggal)",
    section_ing: "thallus (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa358"),
    ethnic: "JAWA",
    disease_ina: "Penyubur Rambut",
    disease_ing: "Hair conditioner",
    name_ina: "",
    species: "Aloe vera (L.) Webb.",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa359"),
    ethnic: "JAWA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "",
    species: "Equisetum debile Roxb.",
    family: "Equisentaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c25")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35a"),
    ethnic: "JAWA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35b"),
    ethnic: "JAWA",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35c"),
    ethnic: "JAWA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "",
    species: "Euphorbia hirta L.",
    family: "Euphorbiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c35")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35d"),
    ethnic: "JAWA",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35e"),
    ethnic: "JAWA",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa35f"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Haid",
    disease_ing: "peluruh Haid",
    name_ina: "",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa360"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Taraxacum officinale",
    family: "Asteraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa361"),
    ethnic: "JAWA",
    disease_ina: "Penghangat Tubuh",
    disease_ing: "heating Body",
    name_ina: "",
    species: "Alpinia officinarum Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa34c"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "",
    species: "Equisetum debile Roxb.",
    family: "Equisentaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c25")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa362"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Apium graveolens L.",
    family: "Apiaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa363"),
    ethnic: "JAWA",
    disease_ina: "Urus-Urus",
    disease_ing: "Depletory",
    name_ina: "",
    species: "Aloe vera (L.) Webb.",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa364"),
    ethnic: "JAWA",
    disease_ina: "Antipiretik",
    disease_ing: "antipyretics",
    name_ina: "Kwalot/Walot",
    species: "Brucea javanica Merr.",
    family: "Simarubaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b7c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa365"),
    ethnic: "JAWA",
    disease_ina: "Antipiretik",
    disease_ing: "antipyretics",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa366"),
    ethnic: "JAWA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Srenggani",
    species: "Melastoma malabathricum L.",
    family: "Melastomaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa367"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Poncosudo",
    species: "Jasminum multiflorum Andr.",
    family: "Oleaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa369"),
    ethnic: "JAWA",
    disease_ina: "Borok",
    disease_ing: "ulcer",
    name_ina: "Poncosudo",
    species: "Jasminum multiflorum Andr.",
    family: "Oleaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa368"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Lame",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36a"),
    ethnic: "JAWA",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36b"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Kwalot/Walot",
    species: "Brucea javanica Merr.",
    family: "Simarubaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b7c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36c"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lame",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36d"),
    ethnic: "JAWA",
    disease_ina: "Antipiretik",
    disease_ing: "antipyretics",
    name_ina: "Poncosudo",
    species: "Jasminum multiflorum Andr.",
    family: "Oleaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36e"),
    ethnic: "JAWA",
    disease_ina: "Batu Ginjal",
    disease_ing: "Kidney stones",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa370"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kedawung",
    species: "Parkia timoriana DC. Merr.",
    family: "Simarubaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa36f"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa372"),
    ethnic: "JAWA",
    disease_ina: "Demam Berdarah",
    disease_ing: "Dengue fever",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa371"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kwalot/Walot",
    species: "Brucea javanica Merr.",
    family: "Simarubaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b7c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa375"),
    ethnic: "JAWA",
    disease_ina: "Katarak",
    disease_ing: "Cataract",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa373"),
    ethnic: "JAWA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa374"),
    ethnic: "JAWA",
    disease_ina: "Diuretik",
    disease_ing: "diuretics",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa377"),
    ethnic: "JAWA",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa378"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa379"),
    ethnic: "JAWA",
    disease_ina: "Kholera",
    disease_ing: "kholera",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang (tunggal)",
    section_ing: "roots, leaves, stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37a"),
    ethnic: "JAWA",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Srenggani",
    species: "Melastoma malabathricum L.",
    family: "Melastomaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37b"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37c"),
    ethnic: "JAWA",
    disease_ina: "Membersihkan Darah",
    disease_ing: "Cleaning Blood",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37d"),
    ethnic: "JAWA",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37e"),
    ethnic: "JAWA",
    disease_ina: "Mulas",
    disease_ing: "Heartburn",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa37f"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa376"),
    ethnic: "JAWA",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa382"),
    ethnic: "JAWA",
    disease_ina: "Radang Jantung",
    disease_ing: "inflammation of the heart",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa383"),
    ethnic: "JAWA",
    disease_ina: "Peluruh Kentut",
    disease_ing: "peluruh Fart",
    name_ina: "Kapol",
    species: "Amomum cardamomum Auct.",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa384"),
    ethnic: "JAWA",
    disease_ina: "Radang Usus Buntu",
    disease_ing: "Appendicitis",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa385"),
    ethnic: "JAWA",
    disease_ina: "Raja Singa",
    disease_ing: "Lion King",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa386"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa387"),
    ethnic: "JAWA",
    disease_ina: "Serak",
    disease_ing: "hoarse",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa380"),
    ethnic: "JAWA",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Sambiloto",
    species: "Andrographis paniculata (Burm.f.) Ness.",
    family: "Acanthaceae",
    section_ina: "daun, batang (tunggal)",
    section_ing: "leaves, stems (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa388"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Lame",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa389"),
    ethnic: "JAWA",
    disease_ina: "Abortus",
    disease_ing: "Abortion",
    name_ina: "Kepuh",
    species: "Sterculia foetida Linn.",
    family: "Sterculiaceae",
    section_ina: "kulit buah (tunggal)",
    section_ing: "rind (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38a"),
    ethnic: "JAWA",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Mundung",
    species: "Baccaurea racemosa M. A.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38b"),
    ethnic: "JAWA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Bayur/Wadang",
    species: "Pterospermum javanicum Junghn.",
    family: "Sterculiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d82")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38d"),
    ethnic: "JAWA",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38e"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Asam",
    species: "Tamarindus indica L.",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa381"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Srigunggu",
    species: "Clerodendron serratum Spreng.",
    family: "Verbenaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bc5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38c"),
    ethnic: "JAWA",
    disease_ina: "Beri-beri",
    disease_ing: "Beri-beri",
    name_ina: "Pulai",
    species: "Alstonia scholaris (L.) R. Br.",
    family: "Apocynaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa38f"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Apokat",
    species: "Persea americana Gaertn.",
    family: "Lauraceae",
    section_ina: "buah, daun (tunggal)",
    section_ing: "fruit, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa390"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Mundung",
    species: "Baccaurea racemosa M. A.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa391"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Dadap Serep",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa392"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bambu Gading",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "air rebung (tunggal)",
    section_ing: "water bamboo shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa393"),
    ethnic: "JAWA",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Wungu/Bungu",
    species: "Lagerstroemia speciosa Pers.",
    family: "Lythraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa394"),
    ethnic: "JAWA",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Mundung",
    species: "Baccaurea racemosa M. A.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa396"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Kenanga",
    species: "Canangium adoratum Boill.",
    family: "Annonaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa395"),
    ethnic: "JAWA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Bayur/Wadang",
    species: "Pterospermum javanicum Junghn.",
    family: "Sterculiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d82")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa399"),
    ethnic: "JAWA",
    disease_ina: "Kholera",
    disease_ing: "kholera",
    name_ina: "Jati Sari/Sungkai",
    species: "Peronema canescens Jack.",
    family: "Verbenaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa397"),
    ethnic: "JAWA",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Johar",
    species: "Cassia siamea Lamk.",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39a"),
    ethnic: "JAWA",
    disease_ina: "Diabetes Mellitus",
    disease_ing: "Diabetes mellitus",
    name_ina: "Kandri",
    species: "Bridelia monoica Merr.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39b"),
    ethnic: "JAWA",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Kenanga",
    species: "Canangium adoratum Boill.",
    family: "Annonaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39c"),
    ethnic: "JAWA",
    disease_ina: "Lemas",
    disease_ing: "Limp",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39e"),
    ethnic: "JAWA",
    disease_ina: "Liver",
    disease_ing: "liver",
    name_ina: "Dadap Serep",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39f"),
    ethnic: "JAWA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Awar-awar",
    species: "Ficus septica Burm. f.",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a0"),
    ethnic: "JAWA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kandri",
    species: "Bridelia monoica Merr.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a1"),
    ethnic: "JAWA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pulai",
    species: "Alstonia scholaris (L.) R. Br.",
    family: "Apocynaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa398"),
    ethnic: "JAWA",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Pulai",
    species: "Alstonia scholaris (L.) R. Br.",
    family: "Apocynaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a2"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Mahoni",
    species: "Swietenia macrophylla King.",
    family: "Meliaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98de7")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a3"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Mundung",
    species: "Baccaurea racemosa M. A.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a4"),
    ethnic: "JAWA",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "Laban",
    species: "Vitex pubescens Vahl.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a5"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Kenanga",
    species: "Canangium adoratum Boill.",
    family: "Annonaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a6"),
    ethnic: "JAWA",
    disease_ina: "Panu",
    disease_ing: "Panu",
    name_ina: "Johar",
    species: "Cassia siamea Lamk.",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a7"),
    ethnic: "JAWA",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Kepuh",
    species: "Sterculia foetida Linn.",
    family: "Sterculiaceae",
    section_ina: "kulit buah (tunggal)",
    section_ing: "rind (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a8"),
    ethnic: "JAWA",
    disease_ina: "Penurun Panas",
    disease_ing: "Heat loss",
    name_ina: "Kenanga",
    species: "Canangium adoratum Boill.",
    family: "Annonaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3a9"),
    ethnic: "JAWA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Johar",
    species: "Cassia siamea Lamk.",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3aa"),
    ethnic: "JAWA",
    disease_ina: "Penyakit Kelamin",
    disease_ing: "Sexually transmitted diseases",
    name_ina: "Kepuh",
    species: "Sterculia foetida Linn.",
    family: "Sterculiaceae",
    section_ina: "kulit buah (tunggal)",
    section_ing: "rind (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98ddf")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ab"),
    ethnic: "JAWA",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Kesambi",
    species: "Schleichera oleosa Merr.",
    family: "Sapindaceae",
    section_ina: "minyak biji (tunggal)",
    section_ing: "seed oil (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ac"),
    ethnic: "JAWA",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jati Sari/Sungkai",
    species: "Peronema canescens Jack.",
    family: "Verbenaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ad"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kayu Jaran",
    species: "Lannea coromandelica (Houtt.) Merr.",
    family: "Anacardiaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ae"),
    ethnic: "JAWA",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Bambu Gading",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "air rebung (tunggal)",
    section_ing: "water bamboo shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b0"),
    ethnic: "JAWA",
    disease_ina: "Wasir",
    disease_ing: "Hemorrhoids",
    name_ina: "Awar-awar",
    species: "Ficus septica Burm. f.",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3af"),
    ethnic: "JAWA",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Secang",
    species: "Caesalpinia sappan Linn.",
    family: "Fabaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b81")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b1"),
    ethnic: "JAWA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Ficus ampelas Burm. f.",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b2"),
    ethnic: "JAWA",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Pulai",
    species: "Alstonia scholaris (L.) R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa39d"),
    ethnic: "JAWA",
    disease_ina: "Liver",
    disease_ing: "liver",
    name_ina: "Sirih",
    species: "Piper bettle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b3"),
    ethnic: "JAWA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "",
    species: "Corchorus acutangulus Lamk.",
    family: "Tiliaceae",
    section_ina: "tunggal, ramuan",
    section_ing: "single, herb"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b4"),
    ethnic: "JAWA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Pule Pandak",
    species: "Rauvolfia serpentina (L.) Benth. ex Kurz.",
    family: "Apocynaceae",
    section_ina: "akar, daun, batang, bunga (tunggal)",
    section_ing: "roots, leaves, stems, flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b7"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Ruellia formosa Andr.",
    family: "Acanthaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b5"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Allium cepa Linn.",
    family: "Amaryllidaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b6"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Foeniculum vulgare Mill",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b8"),
    ethnic: "JAWA",
    disease_ina: "Distorsio/Murus",
    disease_ing: "Distorsio / Murus",
    name_ina: "",
    species: "Cinnamomum sp.",
    family: "Lauraceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3b9"),
    ethnic: "JAWA",
    disease_ina: "Distorsio/Murus",
    disease_ing: "Distorsio / Murus",
    name_ina: "",
    species: "Cymbopogon nardus (L.) Rendle",
    family: "Poaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ba"),
    ethnic: "JAWA",
    disease_ina: "Distorsio/Murus",
    disease_ing: "Distorsio / Murus",
    name_ina: "",
    species: "Desmodium triflorum DC.",
    family: "Fabaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3bb"),
    ethnic: "JAWA",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "",
    species: "Croton argyratus BI.",
    family: "Euphorbiaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3bc"),
    ethnic: "JAWA",
    disease_ina: "Obat Singkep",
    disease_ing: "drug Singkep",
    name_ina: "",
    species: "Curcuma xanthorriza Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3bf"),
    ethnic: "JAWA",
    disease_ina: "Obat Singkep",
    disease_ing: "drug Singkep",
    name_ina: "",
    species: "Piper sp.",
    family: "Piperaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c0"),
    ethnic: "JAWA",
    disease_ina: "Obat Tidur",
    disease_ing: "Sleeping pills",
    name_ina: "",
    species: "Tacca palmata BI.",
    family: "Taccaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c1"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Lantana camara L.",
    family: "Verbenaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98caa")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c2"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut Berdarah",
    disease_ing: "Stomach pain Bloody",
    name_ina: "",
    species: "Allium fistulosum L.",
    family: "Amaryllidaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b05")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c3"),
    ethnic: "JAWA",
    disease_ina: "Distorsio/Murus",
    disease_ing: "Distorsio / Murus",
    name_ina: "",
    species: "Imperata cylindrica Nees.",
    family: "Poaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c4"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Erythrina subumbrans (Hassk.) Merr.",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3bd"),
    ethnic: "JAWA",
    disease_ina: "Obat Singkep",
    disease_ing: "drug Singkep",
    name_ina: "",
    species: "Curcuma colorata Val.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c5"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut Berdarah",
    disease_ing: "Stomach pain Bloody",
    name_ina: "",
    species: "Justicia gendarussa Burm. f.",
    family: "Acanthaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c7"),
    ethnic: "JAWA",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c6"),
    ethnic: "JAWA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Paederia foetida Auct. non L.",
    family: "Rubiaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d1a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ca"),
    ethnic: "JAWA",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3cb"),
    ethnic: "JAWA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "",
    species: "Agelaea macrophylla (Zol.) Leenh.",
    family: "Connaraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c9"),
    ethnic: "JAWA",
    disease_ina: "Jantung",
    disease_ing: "Heart",
    name_ina: "Maja",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3c8"),
    ethnic: "JAWA",
    disease_ina: "Gatal-gatal",
    disease_ing: "Itchy",
    name_ina: "Tango",
    species: "Bridelia monoica Merr.",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3be"),
    ethnic: "JAWA",
    disease_ina: "Obat Singkep",
    disease_ing: "drug Singkep",
    name_ina: "",
    species: "Desmodium triquetrum (L.) DC.",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c07")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3cc"),
    ethnic: "JAWA",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "",
    species: "Globba marantina L.",
    family: "Zingiberaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ce"),
    ethnic: "JAWA",
    disease_ina: "Menambah Nafsu Makan",
    disease_ing: "Increase appetite",
    name_ina: "",
    species: "Amomum Cardamomum L.",
    family: "Zingiberaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b16")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3cd"),
    ethnic: "JAWA",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "",
    species: "Alstonia scholaris (L.) R. Br.",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3cf"),
    ethnic: "JAWA",
    disease_ina: "Mencegah Kehamilan",
    disease_ing: "prevent Pregnancy",
    name_ina: "",
    species: "Aglaonema sp.",
    family: "Araceae",
    section_ina: "(tunggal)",
    section_ing: "(single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d0"),
    ethnic: "JAWA",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Bayemwe",
    species: "Spigelia anthelmia L.",
    family: "Loganiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d1"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "",
    species: "Rafflesia zollingeriana Kds.",
    family: "Rafflesiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d2"),
    ethnic: "JAWA",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Kedawung",
    species: "Parkia javanica",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d5"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Daun Dapat",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d6"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Derusih",
    species: "Justicia gendarussa Burmf",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d7"),
    ethnic: "JAWA",
    disease_ina: "Scabies",
    disease_ing: "Scabies",
    name_ina: "",
    species: "Hernandia peltata Meissn.",
    family: "Hermandiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d8"),
    ethnic: "JAWA",
    disease_ina: "Wound",
    disease_ing: "wound",
    name_ina: "",
    species: "Ficus septica Burm. f.",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3da"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Leban",
    species: "Vitex pinnata L.",
    family: "Verbenaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d9"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Lengkuas",
    species: "Alpinia galanga (L.) Swartz",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d3"),
    ethnic: "JAWA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "",
    species: "Physalis angulata L.",
    family: "Solanaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d43")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3dc"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Wo Berinang",
    species: "Averrhoa bilimbi L.",
    family: "Oxalidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3db"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Wo Berinang",
    species: "Averrhoa bilimbi L.",
    family: "Oxalidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3dd"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Nanke Belante",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3de"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Semangkuk",
    species: "Scaphium macropodum Beumee",
    family: "Sterculiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3df"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kuning",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e0"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Penawar / Penyapu",
    species: "Scoparia dulcis L.",
    family: "Scrophulariaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e1"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Bawang Rusak",
    species: "Eleutherine americana (Aubl.) Merr.",
    family: "Liliaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c1c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e2"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Gondok",
    disease_ing: "goiter",
    name_ina: "Leak Jerenang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e3"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Gondok",
    disease_ing: "goiter",
    name_ina: "-",
    species: "Syzgium aromaticum (L.) Merr. & Perry.",
    family: "Myrtaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e4"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Segundi",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e5"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Kuning",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e6"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Kuning",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e7"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Gondongan",
    disease_ing: "mumps",
    name_ina: "Teleng",
    species: "Elatostema integrifolium (D. Don.) Wedd.",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e8"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Keguguran",
    disease_ing: "Miscarriage",
    name_ina: "Sawano",
    species: "Polygonum barbatum L.",
    family: "Polygonaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3e9"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ea"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Telinga Kambing",
    species: "Sida acuta Burm.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3eb"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Losat",
    species: "Lansium domesticum Corr.",
    family: "Meliaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3d4"),
    ethnic: "JAWA",
    disease_ina: "Sakit Perut Berdarah",
    disease_ing: "Stomach pain Bloody",
    name_ina: "",
    species: "Euphorbia prostata",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c36")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ec"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Nanke Belante",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ed"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ee"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Daun Dapat",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ef"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Muntah Darah",
    disease_ing: "Vomiting blood",
    name_ina: "Penawar / Penyapu",
    species: "Scoparia dulcis L.",
    family: "Scrophulariaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f0"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Peluntan",
    species: "Artocarpus elacticus Bl.",
    family: "Moraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f1"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Menghilangkan Putih- Putih pada Bayi",
    disease_ing: "Eliminate white-White Infant",
    name_ina: "Jelumpang",
    species: "Urena lobata L.",
    family: "Malvaceae",
    section_ina: "bunga (tuunggal)",
    section_ing: "flowers (tuunggal)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f2"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Mabuk Alkohol",
    disease_ing: "drunk Alcohol",
    name_ina: "Leak Jerenang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f3"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f6"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Banseng",
    species: "Saurauia reinwardtiana Bl.",
    family: "Actinidiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f4"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Semangkuk",
    species: "Scaphium macropodum Beumee",
    family: "Sterculiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f8"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Leak Jerenang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f5"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah muda, umbut (tunggal)",
    section_ing: "young fruit, umbut (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3fa"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Pelongso",
    species: "Labisia pumila (Bl.) F.Vill.",
    family: "Myrsinaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f7"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Pegal linu",
    disease_ing: "Sore",
    name_ina: "Pelampun",
    species: "Tinomiscium phytocrenoides Kurz.",
    family: "Menispermaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3fd"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Baseng",
    species: "Saurauia reinwardtiana Bl.",
    family: "Actinidiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3fc"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Pinggang Panas",
    disease_ing: "waist Heat",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah muda, umbut (tunggal)",
    section_ing: "young fruit, umbut (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3f9"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Segundi",
    species: "Vitex trifolia L.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e24")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3fe"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cakur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3ff"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jeruk",
    species: "Citrus aurantifolia (Chris. & Panz) Swing",
    family: "Rutaceae",
    section_ina: "air buah (ramuan)",
    section_ing: "juice (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa400"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sare",
    species: "Cymbopogon nardus (L.) Rendle",
    family: "Poaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa402"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "-",
    species: "Syzgium aromaticum (L.) Merr. & Perry.",
    family: "Myrtaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa401"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "-",
    species: "Ocimum basilicum L.",
    family: "Lamiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa403"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Penawar / Penyapu",
    species: "Scoparia dulcis L.",
    family: "Scrophulariaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa404"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakir Leher pada Anak",
    disease_ing: "Sakir Neck in Children",
    name_ina: "Belian",
    species: "Eusideroxylon zwageri T. & B.",
    family: "Lauraceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa405"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Kembang patma",
    species: "Rafflesia sp.",
    family: "Rafflesiaceae",
    section_ina: "kuncup bunga (ramuan)",
    section_ing: "flower buds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa406"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah muda, umbut (tunggal)",
    section_ing: "young fruit, umbut (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa407"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sakit Waktu Kencing",
    disease_ing: "Sick Time Urination",
    name_ina: "Telinga Kambing",
    species: "Sida acuta Burm.",
    family: "Malvaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa408"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "Leak Jerenang",
    species: "Zingiber officinale var Rubra",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa409"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "-",
    species: "Syzgium aromaticum (L.) Merr. & Perry.",
    family: "Myrtaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40b"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Tengkawang",
    species: "Shorea sp.",
    family: "Dipterocarpaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40a"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Penyegar Tubuh",
    disease_ing: "Body Toning",
    name_ina: "Alang - alang",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40c"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Tonik",
    disease_ing: "Tonic",
    name_ina: "Banseng",
    species: "Saurauia reinwardtiana Bl.",
    family: "Actinidiaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40d"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Tonik",
    disease_ing: "Tonic",
    name_ina: "Hanjuang",
    species: "Cordyline fruticosa (L.) A. chev.",
    family: "Agavaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40e"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Tonik",
    disease_ing: "Tonic",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Labiataceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa3fb"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Selusuh",
    species: "Grewia glabra Bl.",
    family: "Tiliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa40f"),
    ethnic: "DAYAK KENYAH",
    disease_ina: "Melancarkan ASI",
    disease_ing: "smooth milk",
    name_ina: "Jowaluk",
    species: "Sauropus androgymus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa410"),
    ethnic: "DAYAK KENDAYAN",
    disease_ina: "Tumor",
    disease_ing: "Tumor",
    name_ina: "Bawang Rusak",
    species: "Eleutherine americana (Aubl.) Merr.",
    family: "Liliaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c1c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa412"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa411"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Ambeien",
    disease_ing: "Hemorrhoid",
    name_ina: "Jambu Biji",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa413"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Tembakau Jawa",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa415"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Ambeien",
    disease_ing: "Hemorrhoid",
    name_ina: "Pisang Menggala",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa414"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Ayan",
    disease_ing: "epilepsy",
    name_ina: "Delima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa416"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bau Badan dan Ketiak",
    disease_ing: "Body and Underarm Odor",
    name_ina: "Sahang",
    species: "Piper ningrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa418"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa417"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bau Badan dan Ketiak",
    disease_ing: "Body and Underarm Odor",
    name_ina: "Pandan Wangi",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa419"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Padi",
    species: "Oryza sativa L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kamboja",
    species: "Plumeria acuminate Wit. Ait.",
    family: "Apocynaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Kencur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa420"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Borok",
    disease_ing: "ulcer",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah, minyak (tunggal)",
    section_ing: "fruits, oils (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa421"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa422"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Petal Cina",
    species: "Leucaena glauca Auct.",
    family: "Fabaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa423"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Jambu",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa424"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa425"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa426"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Belinjo",
    species: "Gnetum gnemon L.",
    family: "Gnetaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa427"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa429"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Disengat Serangga",
    disease_ing: "Insect stings",
    name_ina: "Pisang",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "ati batang (tunggal)",
    section_ing: "ati rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa428"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Disengat Kelabang",
    disease_ing: "stung by a centipede",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Randu",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa41c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Frambusia",
    disease_ing: "yaws",
    name_ina: "Tembakau Jawa",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa42f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa430"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa431"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Gila",
    disease_ing: "Crazy",
    name_ina: "Waru",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa432"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Gusi Bengkak",
    disease_ing: "Swollen gums",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa434"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Hidung Berdarah",
    disease_ing: "Bloody nose",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa433"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa435"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Hidung Berdarah",
    disease_ing: "Bloody nose",
    name_ina: "Tebu",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa436"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa437"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa438"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa439"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "Kendila",
    species: "Scurrula atropurpurea (Bl.) Dans",
    family: "Loranthaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98db1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kecanduan",
    disease_ing: "Addiction",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Keji Beling",
    species: "Serioclyx scripus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Luntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa440"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa441"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Akar Sampai",
    species: "Tinospra tuberculata (Lmk.) Beumee ex. K. Heyne",
    family: "Menispermaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa442"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa443"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "Nyiur Habang",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (tunggal)",
    section_ing: "oils (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa444"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kutil",
    disease_ing: "wart",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa445"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Lemah Badan",
    disease_ing: "weak Agency",
    name_ina: "Jahe",
    species: "Zingiber officinarum Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa447"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Lemah syahwaat",
    disease_ing: "weak syahwaat",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa446"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Lemah Badan",
    disease_ing: "weak Agency",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa448"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Lemah syahwaat",
    disease_ing: "weak syahwaat",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa449"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Jambu",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Mabuk Alkohol",
    disease_ing: "drunk Alcohol",
    name_ina: "Pisang",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa43b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Mabuk Alkohol",
    disease_ing: "drunk Alcohol",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantinum L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Lemah syahwaat",
    disease_ing: "weak syahwaat",
    name_ina: "Limau Purut",
    species: "Citrus sp.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa44f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa450"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa451"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Lombok",
    species: "Capsicum sp",
    family: "Solanaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa455"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melangsingkan Badan",
    disease_ing: "Body slimming",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa454"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melancarkan Kencing",
    disease_ing: "Urinary staged",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa452"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Kencur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa457"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melangsingkan Badan",
    disease_ing: "Body slimming",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "buah muda (ramuan)",
    section_ing: "Young fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa458"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa456"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa459"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa453"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Kentang",
    species: "Solanum tuberosum L",
    family: "Solanaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "",
    section_ing: "#VALUE!",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Menghilangkan Rasa Gelisah",
    disease_ing: "Eliminate Sense Restless",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa460"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Kelapa Hijau",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Obat Tidur",
    disease_ing: "Sleeping pills",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa461"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Penambah Napsu Makan",
    disease_ing: "Napsu enhancer Spot",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantinum L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa462"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Serai",
    species: "Cymbopogon citratus (DC.) Stapf.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa463"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pendarahan Akibat Luka",
    disease_ing: "Bleeding Due to Injury",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi muda (tunggal)",
    section_ing: "young tubers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa464"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Menyuburkan Rambut",
    disease_ing: "nourish Hair",
    name_ina: "Kangkung",
    species: "Ipomoea aquatica Forsk.",
    family: "Convolvulaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa465"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Ilalang",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa45e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Sirih Yang",
    species: "Piper sp",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa466"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa469"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pilek",
    disease_ing: "Cold",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa468"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Muntah - muntah",
    disease_ing: "Throws up",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Katu",
    species: "Sauropus androgymus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pingsan",
    disease_ing: "fainting",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "tempurung (tunggal)",
    section_ing: "shell (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Rambut Rontok",
    disease_ing: "Hair loss",
    name_ina: "Tebu",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa467"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Bengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa470"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Keji Beling",
    species: "Serioclyx scripus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa471"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa472"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa473"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kenanga",
    species: "Cananga odorata (Lmk.) Hook.f. & Th.",
    family: "Annonaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa474"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa475"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Serai Wangi",
    species: "Andropogon sp.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa46f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Jagung",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa476"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Terung Pipit",
    species: "Solanum sp.",
    family: "Solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa479"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa478"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Delima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa477"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa480"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa482"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Tenggorokan",
    disease_ing: "Sore throat",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa481"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kaca Piring",
    species: "Gardenia jasminoides Ellis",
    family: "Rubiaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa483"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Bawang Putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa484"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa485"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa47f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Bawang Putih",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa486"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Lombok",
    species: "Capsicum sp.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa487"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Cendana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48b"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48c"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Luntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48d"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Tomat",
    species: "Lycopersicon esculentum Mill",
    family: "Solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ccb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48e"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang",
    section_ing: "rhizome",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa48f"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa490"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Wortel",
    species: "Daucus carita L",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa491"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tertusuk Duri",
    disease_ing: "punctured Duri",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa492"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tertusuk Duri",
    disease_ing: "punctured Duri",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa493"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tuli",
    disease_ing: "Deaf",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa494"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "Nyiur Habang",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa489"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Kemumus",
    species: "Piper cubeba L.f",
    family: "Piperaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa495"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tertusuk Ikan Sembilang",
    disease_ing: "Fish punctured Sembilang",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa497"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Typhus",
    disease_ing: "typhus",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa496"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Tuli",
    disease_ing: "Deaf",
    name_ina: "Lengkuas",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa498"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Typhus",
    disease_ing: "typhus",
    name_ina: "Labu Putih",
    species: "Sechium edule Jacq. Swartz",
    family: "Cucurbitaceae",
    section_ina: "",
    section_ing: "",
    refPlant: ObjectId("5cf8cce413bc061d4cd98db5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa488"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa499"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Usus Buntu",
    disease_ing: "Appendix",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "",
    section_ing: "",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49b"),
    ethnic: "KUTAI",
    disease_ina: "Ambeien",
    disease_ing: "Hemorrhoid",
    name_ina: "Jambu Biji",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49a"),
    ethnic: "DAYAK SA'BAN",
    disease_ina: "Usus Buntu",
    disease_ing: "Appendix",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49d"),
    ethnic: "KUTAI",
    disease_ina: "Ayan",
    disease_ing: "epilepsy",
    name_ina: "Delima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49c"),
    ethnic: "KUTAI",
    disease_ina: "Bau Badan dan Ketiak",
    disease_ing: "Body and Underarm Odor",
    name_ina: "Pandan Wangi",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49f"),
    ethnic: "KUTAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa49e"),
    ethnic: "KUTAI",
    disease_ina: "Bau Badan dan Ketiak",
    disease_ing: "Body and Underarm Odor",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a0"),
    ethnic: "KUTAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a1"),
    ethnic: "KUTAI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a2"),
    ethnic: "KUTAI",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a3"),
    ethnic: "KUTAI",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Tembakau Jawa",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a5"),
    ethnic: "KUTAI",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Kencur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a6"),
    ethnic: "KUTAI",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a7"),
    ethnic: "KUTAI",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Padi",
    species: "Oryza sativa L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a8"),
    ethnic: "KUTAI",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a9"),
    ethnic: "KUTAI",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Kamboja",
    species: "Plumeria acuminate Wit. Ait.",
    family: "Apocynaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4aa"),
    ethnic: "KUTAI",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Jambu",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ab"),
    ethnic: "KUTAI",
    disease_ina: "Borok",
    disease_ing: "ulcer",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah, minyak (tunggal)",
    section_ing: "fruits, oils (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ac"),
    ethnic: "KUTAI",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Petal Cina",
    species: "Leucaena glauca Auct.",
    family: "Fabaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4a4"),
    ethnic: "KUTAI",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ae"),
    ethnic: "KUTAI",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Bawag Hutan",
    species: "Scorodocarpus bornensis Becc",
    family: "Olacaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4af"),
    ethnic: "KUTAI",
    disease_ina: "Bengkak Terkena Pukulan",
    disease_ing: "Affected swollen Punch",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b1"),
    ethnic: "KUTAI",
    disease_ina: "Disengat Kelabang",
    disease_ing: "stung by a centipede",
    name_ina: "Pisang",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "ati batang (tunggal)",
    section_ing: "ati rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b0"),
    ethnic: "KUTAI",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b2"),
    ethnic: "KUTAI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b3"),
    ethnic: "KUTAI",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ad"),
    ethnic: "KUTAI",
    disease_ina: "Cacingan",
    disease_ing: "wormy",
    name_ina: "Randu",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b5"),
    ethnic: "KUTAI",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b4"),
    ethnic: "KUTAI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b6"),
    ethnic: "KUTAI",
    disease_ina: "Frambusia",
    disease_ing: "yaws",
    name_ina: "Tembakau Jawa",
    species: "Nicotiana tabacum L.",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b7"),
    ethnic: "KUTAI",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Kecubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b8"),
    ethnic: "KUTAI",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4b9"),
    ethnic: "KUTAI",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ba"),
    ethnic: "KUTAI",
    disease_ina: "Gila",
    disease_ing: "Crazy",
    name_ina: "Waru",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4bb"),
    ethnic: "KUTAI",
    disease_ina: "Digigit Anjing Gila, Kera, Ular",
    disease_ing: "Bitten by Mad Dog, Monkey, Snake",
    name_ina: "Belinjo",
    species: "Gnetum gnemon L.",
    family: "Gnetaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4bc"),
    ethnic: "KUTAI",
    disease_ina: "Hidung Berdarah",
    disease_ing: "Bloody nose",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4bd"),
    ethnic: "KUTAI",
    disease_ina: "Gusi Bengkak",
    disease_ing: "Swollen gums",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4be"),
    ethnic: "KUTAI",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Gambir",
    species: "Uncaria gambir (Hunt.) Rox",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4bf"),
    ethnic: "KUTAI",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c0"),
    ethnic: "KUTAI",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c1"),
    ethnic: "KUTAI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "Kendila",
    species: "Scurrula atropurpurea (Bl.) Dans",
    family: "Loranthaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98db1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c2"),
    ethnic: "KUTAI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c3"),
    ethnic: "KUTAI",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "Nyiur Habang",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (tunggal)",
    section_ing: "oils (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c5"),
    ethnic: "KUTAI",
    disease_ina: "Kecanduan",
    disease_ing: "Addiction",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c4"),
    ethnic: "KUTAI",
    disease_ina: "Hidung Berdarah",
    disease_ing: "Bloody nose",
    name_ina: "Tebu",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c8"),
    ethnic: "KUTAI",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Keji Beling",
    species: "Serioclyx scripus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c6"),
    ethnic: "KUTAI",
    disease_ina: "Kecanduan",
    disease_ing: "Addiction",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c9"),
    ethnic: "KUTAI",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ca"),
    ethnic: "KUTAI",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4cc"),
    ethnic: "KUTAI",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4c7"),
    ethnic: "KUTAI",
    disease_ina: "Kecanduan",
    disease_ing: "Addiction",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4cb"),
    ethnic: "KUTAI",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Luntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ce"),
    ethnic: "KUTAI",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Belinjo",
    species: "Gnetum gnemon L.",
    family: "Gnetaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4cf"),
    ethnic: "KUTAI",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d1"),
    ethnic: "KUTAI",
    disease_ina: "Lemah Badan",
    disease_ing: "weak Agency",
    name_ina: "Jahe",
    species: "Zingiber officinarum Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d0"),
    ethnic: "KUTAI",
    disease_ina: "Kutil",
    disease_ing: "wart",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d2"),
    ethnic: "KUTAI",
    disease_ina: "Lemah Badan",
    disease_ing: "weak Agency",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d3"),
    ethnic: "KUTAI",
    disease_ina: "Lemah syahwaat",
    disease_ing: "weak syahwaat",
    name_ina: "Limau Purut",
    species: "Citrus sp.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d4"),
    ethnic: "KUTAI",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d5"),
    ethnic: "KUTAI",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bawang Putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d6"),
    ethnic: "KUTAI",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Jambu",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d7"),
    ethnic: "KUTAI",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Bawang Putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d8"),
    ethnic: "KUTAI",
    disease_ina: "Mabuk Alkohol",
    disease_ing: "drunk Alcohol",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4d9"),
    ethnic: "KUTAI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Akar Sampai",
    species: "Tinospra tuberculata (Lmk.) Beumee ex. K. Heyne",
    family: "Menispermaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4da"),
    ethnic: "KUTAI",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4dc"),
    ethnic: "KUTAI",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Lombok",
    species: "Capsicum sp.",
    family: "Solanaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4db"),
    ethnic: "KUTAI",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Kencur",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4de"),
    ethnic: "KUTAI",
    disease_ina: "Melancarkan Kencing",
    disease_ing: "Urinary staged",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4dd"),
    ethnic: "KUTAI",
    disease_ina: "Melancarkan Buang Air Besar",
    disease_ing: "Staged defecation",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4cd"),
    ethnic: "KUTAI",
    disease_ina: "Keracunan Makanan",
    disease_ing: "Food poisoning",
    name_ina: "Bawang Putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4df"),
    ethnic: "KUTAI",
    disease_ina: "Melangsingkan Badan",
    disease_ing: "Body slimming",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e0"),
    ethnic: "KUTAI",
    disease_ina: "Melangsingkan Badan",
    disease_ing: "Body slimming",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "buah muda (ramuan)",
    section_ing: "Young fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e1"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Lalan",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e2"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Kemiri",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e3"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Lolong Gajah",
    species: "Helitropium indicum L.",
    family: "Boraginaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e4"),
    ethnic: "KUTAI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pasak Bumi",
    species: "Eurycoma longifolia Jack",
    family: "Simarubaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e5"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Nyiur Sekaleng",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e6"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e7"),
    ethnic: "KUTAI",
    disease_ina: "Melebatkan Kumis",
    disease_ing: "melebatkan Mustache",
    name_ina: "Sumit Kucing",
    species: "Orthosiphon aristatus (Bl.) Miq.",
    family: "Lamiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e8"),
    ethnic: "KUTAI",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4e9"),
    ethnic: "KUTAI",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Kentang",
    species: "Solanum tuberosum L",
    family: "Solanaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ea"),
    ethnic: "KUTAI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "pucuk (tunggal)",
    section_ing: "shoots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4eb"),
    ethnic: "KUTAI",
    disease_ina: "Menghilangkan Rasa Gelisah",
    disease_ing: "Eliminate Sense Restless",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ec"),
    ethnic: "KUTAI",
    disease_ina: "Menyuburkan Rambut",
    disease_ing: "nourish Hair",
    name_ina: "Pisang",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ee"),
    ethnic: "KUTAI",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Sirih Yang",
    species: "Piper sp",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ef"),
    ethnic: "KUTAI",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "Teh",
    species: "Thea sinensis Linn",
    family: "Theaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f0"),
    ethnic: "KUTAI",
    disease_ina: "Menyuburkan Rambut",
    disease_ing: "nourish Hair",
    name_ina: "Kangkung",
    species: "Ipomoea aquatica Forsk.",
    family: "Convolvulaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f2"),
    ethnic: "KUTAI",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Cula Adam",
    species: "Psychotria malayana Jack",
    family: "Rubiaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f3"),
    ethnic: "KUTAI",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Huibini",
    species: "Flagellaria indica L.",
    family: "Flagellariaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ed"),
    ethnic: "KUTAI",
    disease_ina: "Muntah - muntah",
    disease_ing: "Throws up",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f4"),
    ethnic: "KUTAI",
    disease_ina: "Muntah - muntah",
    disease_ing: "Throws up",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f5"),
    ethnic: "KUTAI",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f7"),
    ethnic: "KUTAI",
    disease_ina: "Obat Tidur",
    disease_ing: "Sleeping pills",
    name_ina: "Pisang Menggala",
    species: "Musa sp.",
    family: "Musaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f6"),
    ethnic: "KUTAI",
    disease_ina: "Obat Tidur",
    disease_ing: "Sleeping pills",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myristicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f8"),
    ethnic: "KUTAI",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "Serai",
    species: "Cymbopogon citratus (DC.) Stapf.",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f9"),
    ethnic: "KUTAI",
    disease_ina: "Penambah Napsu Makan",
    disease_ing: "Napsu enhancer Spot",
    name_ina: "Jeruk nipis",
    species: "Citrus aurantinum L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4fa"),
    ethnic: "KUTAI",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Ilalang",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4fb"),
    ethnic: "KUTAI",
    disease_ina: "Pendarahan Akibat Luka",
    disease_ing: "Bleeding Due to Injury",
    name_ina: "Singkong",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi muda (tunggal)",
    section_ing: "young tubers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4fc"),
    ethnic: "KUTAI",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Bawang Hutan",
    species: "Scorodocarpus bornensis Becc",
    family: "Olacaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4fd"),
    ethnic: "KUTAI",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Katu",
    species: "Sauropus androgymus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4fe"),
    ethnic: "KUTAI",
    disease_ina: "Pendarahan Setelah Persalinan",
    disease_ing: "Bleeding After Childbirth",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4ff"),
    ethnic: "KUTAI",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Bengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa500"),
    ethnic: "KUTAI",
    disease_ina: "Pilek",
    disease_ing: "Cold",
    name_ina: "Gedang",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa501"),
    ethnic: "KUTAI",
    disease_ina: "Pilek",
    disease_ing: "Cold",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa502"),
    ethnic: "KUTAI",
    disease_ina: "Pingsan",
    disease_ing: "fainting",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa503"),
    ethnic: "KUTAI",
    disease_ina: "Rambut Rontok",
    disease_ing: "Hair loss",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa504"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "tempurung (tunggal)",
    section_ing: "shell (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa505"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa506"),
    ethnic: "KUTAI",
    disease_ina: "Rambut Rontok",
    disease_ing: "Hair loss",
    name_ina: "Tebu",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa507"),
    ethnic: "KUTAI",
    disease_ina: "Panas dalam",
    disease_ing: "heat in",
    name_ina: "Kelapa Hijau",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa508"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Jagung",
    species: "Zea mays L.",
    family: "Poaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa509"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50a"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Keji Beling",
    species: "Serioclyx scripus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa4f1"),
    ethnic: "KUTAI",
    disease_ina: "Obat Kuat",
    disease_ing: "Strong medicine",
    name_ina: "Bende",
    species: "Arenga pinnata Merr.",
    family: "Arecaceae",
    section_ina: "akar (ramuan)",
    section_ing: "root (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50b"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50c"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Sirih",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50d"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kenanga",
    species: "Cananga odorata (Lmk.) Hook.f. & Th.",
    family: "Annonaceae",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50e"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa50f"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Ginjal",
    disease_ing: "Kidney disease",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa511"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Serai Wangi",
    species: "Andropogon sp.",
    family: "Poaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa510"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Jantung",
    disease_ing: "Heart disease",
    name_ina: "Bawang Putih",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa512"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Terung Pipit",
    species: "Solanum sp.",
    family: "Solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa514"),
    ethnic: "KUTAI",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Delima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa515"),
    ethnic: "KUTAI",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Kemumus",
    species: "Piper cubeba L.f",
    family: "Piperaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d51")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa513"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa516"),
    ethnic: "KUTAI",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa519"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Temulawak",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa517"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51a"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Tenggorokan",
    disease_ing: "Sore throat",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51b"),
    ethnic: "KUTAI",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "Nyiur Habang",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51c"),
    ethnic: "KUTAI",
    disease_ina: "Salah Urat",
    disease_ing: "twist",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51e"),
    ethnic: "KUTAI",
    disease_ina: "Sembelit",
    disease_ing: "Constipation",
    name_ina: "Bawang Putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51f"),
    ethnic: "KUTAI",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa520"),
    ethnic: "KUTAI",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Lombok",
    species: "Capsicum sp.",
    family: "Solanaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa518"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Bengkudu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa521"),
    ethnic: "KUTAI",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Sahang",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa523"),
    ethnic: "KUTAI",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa524"),
    ethnic: "KUTAI",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa522"),
    ethnic: "KUTAI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Cendana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa525"),
    ethnic: "KUTAI",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Lengkuas",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa526"),
    ethnic: "KUTAI",
    disease_ina: "Tekanan Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Luntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa527"),
    ethnic: "KUTAI",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang",
    section_ing: "rhizome",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa528"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52a"),
    ethnic: "KUTAI",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa529"),
    ethnic: "KUTAI",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Tomat",
    species: "Lycopersicon esculentum Mill",
    family: "Solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ccb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52b"),
    ethnic: "KUTAI",
    disease_ina: "Terlambat Haid",
    disease_ing: "late menstruation",
    name_ina: "Wortel",
    species: "Daucus carita L",
    family: "Apiaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52c"),
    ethnic: "KUTAI",
    disease_ina: "Tertusuk Duri",
    disease_ing: "punctured Duri",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52d"),
    ethnic: "KUTAI",
    disease_ina: "Tertusuk Duri",
    disease_ing: "punctured Duri",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52e"),
    ethnic: "KUTAI",
    disease_ina: "Tertusuk Ikan Sembilang",
    disease_ing: "Fish punctured Sembilang",
    name_ina: "Sahang",
    species: "Piper nigrum L.",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa52f"),
    ethnic: "KUTAI",
    disease_ina: "Tuli",
    disease_ing: "Deaf",
    name_ina: "Asam Jawa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa530"),
    ethnic: "KUTAI",
    disease_ina: "Typhus",
    disease_ing: "typhus",
    name_ina: "Jintan Putih",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa51d"),
    ethnic: "KUTAI",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kaca Piring",
    species: "Gardenia jasminoides Ellis",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa531"),
    ethnic: "KUTAI",
    disease_ina: "Typhus",
    disease_ing: "typhus",
    name_ina: "Labu Putih",
    species: "Sechium edule Jacq. Swartz",
    family: "Cucurbitaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98db5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa532"),
    ethnic: "KUTAI",
    disease_ina: "Usus Buntu",
    disease_ing: "Appendix",
    name_ina: "Jeruk Nipis",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa533"),
    ethnic: "KUTAI",
    disease_ina: "Usus Buntu",
    disease_ing: "Appendix",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa534"),
    ethnic: "MAKASSAR",
    disease_ina: "Batuk Rejan",
    disease_ing: "Whooping cough",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa535"),
    ethnic: "MAKASSAR",
    disease_ina: "Amandel",
    disease_ing: "tonsil",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa536"),
    ethnic: "MAKASSAR",
    disease_ina: "Anemia",
    disease_ing: "Anemia",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa537"),
    ethnic: "MAKASSAR",
    disease_ina: "Batuk 100 Hari",
    disease_ing: "Cough 100 Days",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa538"),
    ethnic: "MAKASSAR",
    disease_ina: "Batuk 100 Hari",
    disease_ing: "Cough 100 Days",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53c"),
    ethnic: "MAKASSAR",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Bandotan",
    species: "Ageratum conyzoides L",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa539"),
    ethnic: "MAKASSAR",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53d"),
    ethnic: "MAKASSAR",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Sawi Langit",
    species: "Vernonia cinerea (L.) Less",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53e"),
    ethnic: "MAKASSAR",
    disease_ina: "Campak",
    disease_ing: "Measles",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53f"),
    ethnic: "MAKASSAR",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53a"),
    ethnic: "MAKASSAR",
    disease_ina: "Bronchitis",
    disease_ing: "bronchitis",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa540"),
    ethnic: "MAKASSAR",
    disease_ina: "Digigit Binatang Berbisa",
    disease_ing: "Bitten by Venomous Animals",
    name_ina: "Daun Dewa",
    species: "Gynura segetum (Lour.) Merr",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c76")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa541"),
    ethnic: "MAKASSAR",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa542"),
    ethnic: "MAKASSAR",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa543"),
    ethnic: "MAKASSAR",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Baru Cina",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa544"),
    ethnic: "MAKASSAR",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Sawi Langit",
    species: "Vernonia cinerea (L.) Less",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa545"),
    ethnic: "MAKASSAR",
    disease_ina: "Gondog",
    disease_ing: "Gondog",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa546"),
    ethnic: "MAKASSAR",
    disease_ina: "Hepatitis",
    disease_ing: "Hepatitis",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa547"),
    ethnic: "MAKASSAR",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa548"),
    ethnic: "MAKASSAR",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Anjeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa549"),
    ethnic: "MAKASSAR",
    disease_ina: "Hepatitis",
    disease_ing: "Hepatitis",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54a"),
    ethnic: "MAKASSAR",
    disease_ina: "Infeksi Kerongkongan",
    disease_ing: "infection Esophagus",
    name_ina: "Daun Dewa",
    species: "Gynura segetum (Lour.) Merr",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c76")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54b"),
    ethnic: "MAKASSAR",
    disease_ina: "Infeksi Saluran Kencing",
    disease_ing: "Urinary tract infection",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54c"),
    ethnic: "MAKASSAR",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54d"),
    ethnic: "MAKASSAR",
    disease_ina: "Kantong Empedu",
    disease_ing: "Gall bladder",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54e"),
    ethnic: "MAKASSAR",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Baru Cina",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa54f"),
    ethnic: "MAKASSAR",
    disease_ina: "Keseleo",
    disease_ing: "Sprain",
    name_ina: "Sawi Langit",
    species: "Vernonia cinerea (L.) Less",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa53b"),
    ethnic: "MAKASSAR",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Mungsi Arab",
    species: "Artemisia cina Berg.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa550"),
    ethnic: "MAKASSAR",
    disease_ina: "Kurang Gizi pada Anak",
    disease_ing: "Lack of Nutrition in Children",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa552"),
    ethnic: "MAKASSAR",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa553"),
    ethnic: "MAKASSAR",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa551"),
    ethnic: "MAKASSAR",
    disease_ina: "Keputihan",
    disease_ing: "whitish",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa555"),
    ethnic: "MAKASSAR",
    disease_ina: "Melarutkan Batu Ginjal",
    disease_ing: "Dissolves Kidney Stones",
    name_ina: "Tempuyung",
    species: "Sonchus arvenisL.",
    family: "Asteraceae",
    section_ina: "batang, daun (tunggal)",
    section_ing: "stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa554"),
    ethnic: "MAKASSAR",
    disease_ina: "Mata Merah",
    disease_ing: "Red eye",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa557"),
    ethnic: "MAKASSAR",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Sawi Langit",
    species: "Vernonia cinerea (L.) Less",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa556"),
    ethnic: "MAKASSAR",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa558"),
    ethnic: "MAKASSAR",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Baru Cina",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa559"),
    ethnic: "MAKASSAR",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Daun Dewa",
    species: "Gynura segetum (Lour.) Merr",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c76")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55a"),
    ethnic: "MAKASSAR",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55d"),
    ethnic: "MAKASSAR",
    disease_ina: "Mengurangi Rasa Nyeri",
    disease_ing: "Reduce Pain",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55e"),
    ethnic: "MAKASSAR",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Bandotan",
    species: "Ageratum conyzoides L",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55f"),
    ethnic: "MAKASSAR",
    disease_ina: "Mengurangi Rasa Nyeri",
    disease_ing: "Reduce Pain",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa560"),
    ethnic: "MAKASSAR",
    disease_ina: "Menurunkan Panas",
    disease_ing: "Heat Lose",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55b"),
    ethnic: "MAKASSAR",
    disease_ina: "Menghilangkan Bau Badan",
    disease_ing: "Eliminate Body Odor",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa561"),
    ethnic: "MAKASSAR",
    disease_ina: "Menyuburkan Rambut",
    disease_ing: "nourish Hair",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa562"),
    ethnic: "MAKASSAR",
    disease_ina: "Penggulangan Menstruasi",
    disease_ing: "Penggulangan Menstruation",
    name_ina: "Baru Cina",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa563"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang",
    disease_ing: "Inflammation",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa564"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang",
    disease_ing: "Inflammation",
    name_ina: "Tapak Liman",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa565"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang Kulit",
    disease_ing: "Dermatitis",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa566"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang Payudara",
    disease_ing: "mastitis",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa567"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Ajeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa568"),
    ethnic: "MAKASSAR",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56a"),
    ethnic: "MAKASSAR",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Bunga Matahari",
    species: "Helianthus annus L.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa569"),
    ethnic: "MAKASSAR",
    disease_ina: "Radang Selaput Otak",
    disease_ing: "Inflammation of the brain membrane",
    name_ina: "Ajeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56b"),
    ethnic: "MAKASSAR",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Mungsi Arab",
    species: "Artemisia cina Berg.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b44")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56c"),
    ethnic: "MAKASSAR",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Sembung",
    species: "Blumea balsamifera (L.) DC",
    family: "Asteraceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b70")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56d"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Ajeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56e"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa56f"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa570"),
    ethnic: "MAKASSAR",
    disease_ina: "Maag Kronis",
    disease_ing: "Chronic Gastritis",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa571"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Kuku Jari",
    disease_ing: "Finger Nails pain",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa55c"),
    ethnic: "MAKASSAR",
    disease_ina: "Menghilangkan Haemoton",
    disease_ing: "Eliminating Haemoton",
    name_ina: "Daun Dewa",
    species: "Gynura segetum (Lour.) Merr",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c76")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa572"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Bandotan",
    species: "Ageratum conyzoides L",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa574"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa573"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit mata",
    disease_ing: "Sore eyes",
    name_ina: "Kemiri",
    species: "Tagetes erecta L.",
    family: "Asteraceae",
    section_ina: "bunga, akar, daun (tunggal)",
    section_ing: "flowers, roots, leaves (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98def")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa575"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa576"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Tenggorokan",
    disease_ing: "Sore throat",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa577"),
    ethnic: "MAKASSAR",
    disease_ina: "Sakit Tenggorokan",
    disease_ing: "Sore throat",
    name_ina: "Ajeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa578"),
    ethnic: "MAKASSAR",
    disease_ina: "Usus Buntu",
    disease_ing: "Appendix",
    name_ina: "Jombang",
    species: "Taraxacum mongolicum Hand. Mazz",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df6")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa579"),
    ethnic: "BONE",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Bila",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57b"),
    ethnic: "BONE",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Kasubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57c"),
    ethnic: "BONE",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57d"),
    ethnic: "MAKASSAR",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Urang - aring",
    species: "Eclipta alba (L.) Hassk.",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c15")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57a"),
    ethnic: "BONE",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57e"),
    ethnic: "BONE",
    disease_ina: "Asma",
    disease_ing: "Asthma",
    name_ina: "Panini",
    species: "Vanilla cassumar",
    family: "Orchidaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa581"),
    ethnic: "BONE",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Panini",
    species: "Vanilla cassumar",
    family: "Orchidaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa582"),
    ethnic: "BONE",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa57f"),
    ethnic: "MAKASSAR",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Tempuh Wiyang",
    species: "Emilia sonchifolia Linn",
    family: "Asteraceae",
    section_ina: "seluruh bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa583"),
    ethnic: "BONE",
    disease_ina: "Bau Badan",
    disease_ing: "Body odor",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa584"),
    ethnic: "BONE",
    disease_ina: "Bau Badan",
    disease_ing: "Body odor",
    name_ina: "Temmu",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa585"),
    ethnic: "BONE",
    disease_ina: "Bau Mulut",
    disease_ing: "Bad breath",
    name_ina: "Wellulu",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa586"),
    ethnic: "BONE",
    disease_ina: "Bengkak - bengkak",
    disease_ing: "Swelling - swelling",
    name_ina: "Aju Cenrana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa587"),
    ethnic: "BONE",
    disease_ina: "Bengkak - bengkak",
    disease_ing: "Swelling - swelling",
    name_ina: "Jampu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa588"),
    ethnic: "MAKASSAR",
    disease_ina: "Wasir",
    disease_ing: "Hemorrhoids",
    name_ina: "Ajeran",
    species: "Bidens pilosa L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa580"),
    ethnic: "BONE",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Api - api",
    species: "Avicennia sp",
    family: "Rhizophoraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa589"),
    ethnic: "BONE",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kessi",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58a"),
    ethnic: "BONE",
    disease_ina: "Bengkak - bengkak",
    disease_ing: "Swelling - swelling",
    name_ina: "Lame Kalolo",
    species: "Ipomoea batatas L.",
    family: "Convolvulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58d"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Coppeng",
    species: "Eugenia sp",
    family: "Myrtaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58e"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58f"),
    ethnic: "BONE",
    disease_ina: "Bengkak - bengkak",
    disease_ing: "Swelling - swelling",
    name_ina: "Paria",
    species: "Morinda citrifolia L.",
    family: "Cucurbitaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa591"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Kopi",
    species: "Coffea robusta Linden ex. De Wildem",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa590"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa593"),
    ethnic: "BONE",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Dalima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa592"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Pao",
    species: "Mangifera indica L.",
    family: "Anacardiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58c"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Jintang Pute",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa595"),
    ethnic: "BONE",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Lame",
    species: "Manihot utilissima Pohl",
    family: "Euphorbiaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa594"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa597"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Kance",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa596"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa598"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Rappo - rappo",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa58b"),
    ethnic: "BONE",
    disease_ina: "Berak - berak",
    disease_ing: "Defecation - defecating",
    name_ina: "Jampu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa599"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59a"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59b"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Paria",
    species: "Momordica charantia L.",
    family: "Cucurbitaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59d"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59c"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Kiloro",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59e"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa59f"),
    ethnic: "BONE",
    disease_ina: "Cacar",
    disease_ing: "Smallpox",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a2"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Gambere",
    species: "Uncaria gambir (Hunt.) Rox",
    family: "Rubiaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e11")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a3"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Ota",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "tangkai batang (ramuan)",
    section_ing: "stalk stem (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a4"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Jampu Monyet",
    species: "Anacardium occidentale L",
    family: "Anacardiaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a5"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Kessi",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a6"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a7"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lawo",
    species: "Cucurbita sp.",
    family: "Cucurbitaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a9"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a8"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Temu Lontong",
    species: "Curcuma aeruginosa Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bef")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5aa"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Manjawale",
    species: "Elaeocarpus sp",
    family: "Elaeocarpaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ab"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Ota",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a0"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ac"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Pacci",
    species: "Lawsonia inermis L",
    family: "Lythraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cac")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ad"),
    ethnic: "BONE",
    disease_ina: "Diuretik",
    disease_ing: "diuretics",
    name_ina: "Jintang Pute",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ae"),
    ethnic: "BONE",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Panini",
    species: "Vanilla cassumar",
    family: "Orchidaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5a1"),
    ethnic: "BONE",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5af"),
    ethnic: "BONE",
    disease_ina: "Diuretik",
    disease_ing: "diuretics",
    name_ina: "Lawo",
    species: "Cucurbita sp.",
    family: "Cucurbitaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b0"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b2"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "saitung",
    species: "Oleum olive",
    family: "",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b1"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b3"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Wellulu",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b4"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b5"),
    ethnic: "BONE",
    disease_ina: "Diuretik",
    disease_ing: "diuretics",
    name_ina: "Lobba",
    species: "Raphanus sativus L",
    family: "Brassicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b6"),
    ethnic: "BONE",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Pacci - pacci",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b8"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Jaddang",
    species: "Aloe sp",
    family: "Liliaceae",
    section_ina: "ramuan",
    section_ing: "potion"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b9"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5bb"),
    ethnic: "BONE",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Canging - canging",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ba"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Jintang Pute",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5b7"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Cengke",
    species: "Syzygiym aromaticum (L.) Merr. & Perry",
    family: "Myrtaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5be"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Kuma - kuma",
    species: "Crocus sativus Linn",
    family: "Iridaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5bd"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Likku",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5bc"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c0"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Pesse",
    species: "Zingiber officinale Robx",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5bf"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Marica",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c3"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Aju Cenning",
    species: "Cinnamomum sp",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c4"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Ape",
    species: "Gossypium acuminatum Roxb",
    family: "Malvaceae",
    section_ina: "pucuk daun (ramuan)",
    section_ing: "shoots (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c5"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Binang",
    species: "Averrhoa bilimbi L.",
    family: "Oxalidaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c6"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c7"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c8"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Dalima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c1"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "saitung",
    species: "Oleum olive",
    family: "",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c9"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ca"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5cb"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Saitung",
    species: "Oleum olive",
    family: "",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5cc"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Aju Cenning",
    species: "Cinnamomum sp",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5cd"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ce"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Jintang Pute",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5cf"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d0"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d1"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Kawu - kawu",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d2"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Lemo Ape",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d3"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Kiloro",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d4"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Ladang",
    species: "Capsicum frutescens L.",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d5"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Maloloe",
    species: "Borrasus sundaica Becc.",
    family: "Fabaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d6"),
    ethnic: "BONE",
    disease_ina: "Jerawat",
    disease_ing: "pimple",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d7"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Pesse",
    species: "Zingiber officinale Roxb.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d8"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Pude",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5d9"),
    ethnic: "BONE",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Awo Lagading",
    species: "Bambusa vulgaris Schrad.",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b62")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5c2"),
    ethnic: "BONE",
    disease_ina: "Influenza",
    disease_ing: "influenza",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5da"),
    ethnic: "BONE",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "Lappe -lappe Tana",
    species: "Elephanthopus scaber L.",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5db"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5dc"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Aju Cenrana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5dd"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5df"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5de"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e0"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Likku",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e1"),
    ethnic: "BONE",
    disease_ina: "Kehatan Mata dan Telinga",
    disease_ing: "Kehatan Eye and Ear",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "embun batang (tunggal)",
    section_ing: "dew rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e2"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Pacci - pacci",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e3"),
    ethnic: "BONE",
    disease_ina: "Limpha Bengkak",
    disease_ing: "Swollen spleen",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e6"),
    ethnic: "BONE",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e4"),
    ethnic: "BONE",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "biji, buah, daun (tunggal)",
    section_ing: "seeds, fruits, leaves (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e5"),
    ethnic: "BONE",
    disease_ina: "Lepra",
    disease_ing: "Leprosy",
    name_ina: "Were",
    species: "Oryza sativa L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e8"),
    ethnic: "BONE",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e9"),
    ethnic: "BONE",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Taluma",
    species: "Sesbania grandiflora Pers",
    family: "Fabaceae",
    section_ina: "",
    section_ing: "#VALUE!",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ea"),
    ethnic: "BONE",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5eb"),
    ethnic: "BONE",
    disease_ina: "Luka Terkena Benda Tajam, Duri",
    disease_ing: "Affected wound Sharps, Duri",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5e7"),
    ethnic: "BONE",
    disease_ina: "Limpha Bengkak",
    disease_ing: "Swollen spleen",
    name_ina: "Marica",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ec"),
    ethnic: "BONE",
    disease_ina: "Luka Terkena Benda Tajam, Duri",
    disease_ing: "Affected wound Sharps, Duri",
    name_ina: "Kiloro",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ee"),
    ethnic: "BONE",
    disease_ina: "Luka Terkena Benda Tajam, Duri",
    disease_ing: "Affected wound Sharps, Duri",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ed"),
    ethnic: "BONE",
    disease_ina: "Limpha Bengkak",
    disease_ing: "Swollen spleen",
    name_ina: "Kuma - kuma",
    species: "Crocus sativus Linn",
    family: "Iridaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f0"),
    ethnic: "BONE",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pesse",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f1"),
    ethnic: "BONE",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Jampu",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f3"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f4"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Kasubung",
    species: "Stramonii sp",
    family: "",
    section_ina: "bunga (ramuan)",
    section_ing: "flower (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f6"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Majalingkang",
    species: "Glorisae sp",
    family: "",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f5"),
    ethnic: "BONE",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f7"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Lippuyang",
    species: "Zingiber aromaticum val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f8"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Marica",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f9"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Pepang",
    species: "Monochoria sp",
    family: "Pontederiaceae",
    section_ina: "semua bagian (ramuan)",
    section_ing: "all parts (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5fa"),
    ethnic: "BONE",
    disease_ina: "Menghilangkan Bau Tidak Sedap Sehabis Melahirkan",
    disease_ing: "Eliminate Odor Nuisance After Childbirth",
    name_ina: "Katumbara",
    species: "Coriandrum sativum L",
    family: "Apiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bdb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ef"),
    ethnic: "BONE",
    disease_ina: "Luka Terkena Benda Tajam, Duri",
    disease_ing: "Affected wound Sharps, Duri",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5fb"),
    ethnic: "BONE",
    disease_ina: "Menguatkan Gigi dan Gusi",
    disease_ing: "Strengthens Teeth and Gums",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5fc"),
    ethnic: "BONE",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Jara",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5fd"),
    ethnic: "BONE",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Cekku",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa600"),
    ethnic: "BONE",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Were",
    species: "Oryza sativa L.",
    family: "Poaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d17")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5f2"),
    ethnic: "BONE",
    disease_ina: "Menghentikan Pendarahan",
    disease_ing: "stop the Bleeding",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa601"),
    ethnic: "BONE",
    disease_ina: "Melancarkan ASI",
    disease_ing: "smooth milk",
    name_ina: "Katumbara",
    species: "Coriandrum sativum L",
    family: "Apiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bdb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5fe"),
    ethnic: "BONE",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa602"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Kance",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa603"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa5ff"),
    ethnic: "BONE",
    disease_ina: "Menyegarkan Badan",
    disease_ing: "refreshing Body",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa605"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (tunggal)",
    section_ing: "seed oil (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa604"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Kapulaga",
    species: "Cardamori sp",
    family: "",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa606"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Ota",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa607"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "air batang (tunggal)",
    section_ing: "water rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60a"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Kance",
    species: "Hibiscus tiliaceus L.",
    family: "Malvaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c84")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa609"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Laiya",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60c"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Lasuna cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60b"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Kiloro",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60d"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60e"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Wellulu",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "biji bunga (ramuan)",
    section_ing: "flower seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa60f"),
    ethnic: "BONE",
    disease_ina: "Mual Muntah",
    disease_ing: "Nauseous vomit",
    name_ina: "Kuma - kuma",
    species: "Crocus sativus Linn",
    family: "Iridaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa610"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Aju Cenrana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa611"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa612"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Marica",
    species: "Piper nigrum L",
    family: "Piperaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d53")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa613"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Pai - pai",
    species: "Andrographis paniculata Ness",
    family: "Acanthaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa614"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Temmu",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa615"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Cengke",
    species: "Caryophyllum sp",
    family: "",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa616"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Kopi",
    species: "Coffea robusta Linden ex. De Wildem",
    family: "Rubiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa617"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Laiya",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa618"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa619"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Lamo Ape",
    species: "Citrus aurantium L.",
    family: "Rutaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bb3")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa61a"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa61b"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa608"),
    ethnic: "BONE",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Canging - canging",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa61c"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Likku",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "Rimpang (ramuan)",
    section_ing: "Rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa61e"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa61f"),
    ethnic: "BONE",
    disease_ina: "Obat Khusus Wanita",
    disease_ing: "Drug for Women",
    name_ina: "Kasubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa620"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Peppang",
    species: "Monochoria sp",
    family: "Pontederiaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa621"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Ota",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "tangkai batang (ramuan)",
    section_ing: "stalk stem (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa622"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "saitung",
    species: "Oleum olive",
    family: "",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa623"),
    ethnic: "BONE",
    disease_ina: "Pegal - pegal",
    disease_ing: "Sore - sore",
    name_ina: "Kasubung",
    species: "Datura metel L.",
    family: "Solanaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa627"),
    ethnic: "BONE",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Dalima",
    species: "Punica granatum L.",
    family: "Punicaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d86")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa628"),
    ethnic: "BONE",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Alosi",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa629"),
    ethnic: "BONE",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Galingkang",
    species: "Cassia alata L",
    family: "Fabaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa626"),
    ethnic: "BONE",
    disease_ina: "Pencuci Perut",
    disease_ing: "Cathartic",
    name_ina: "Sao Manila",
    species: "Achras zapota Auct",
    family: "Sapotaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62a"),
    ethnic: "BONE",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62b"),
    ethnic: "BONE",
    disease_ina: "Obat Kuat Pria",
    disease_ing: "Strong Medicine Men",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62c"),
    ethnic: "BONE",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Lare",
    species: "Ipomoea aquatica Forsk.",
    family: "Convolvulaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c93")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa624"),
    ethnic: "BONE",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Unnyi",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62e"),
    ethnic: "BONE",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Temulawak",
    species: "Curcuma sp",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa625"),
    ethnic: "BONE",
    disease_ina: "Pegal - pegal",
    disease_ing: "Sore - sore",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62f"),
    ethnic: "BONE",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Jara",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa632"),
    ethnic: "BONE",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak, santan (ramuan)",
    section_ing: "oil, coconut milk (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa62d"),
    ethnic: "BONE",
    disease_ina: "Pegal - pegal",
    disease_ing: "Sore - sore",
    name_ina: "Cemangi",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa630"),
    ethnic: "BONE",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa631"),
    ethnic: "BONE",
    disease_ina: "Perawatan Rambut",
    disease_ing: "Hair Care",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa634"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "",
    section_ing: "#VALUE!",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa633"),
    ethnic: "BONE",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa635"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Canging - canging",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa637"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "saitung",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa636"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa638"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Wellulu",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa639"),
    ethnic: "BONE",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Unnyi Lontong",
    species: "Curcuma phaseocaulis",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63a"),
    ethnic: "BONE",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Aju Cenning",
    species: "Cinnamomum sp",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63c"),
    ethnic: "BONE",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Lemo Kopassa",
    species: "Citrus aurantifolium (Chris & Panz.) Swig",
    family: "Rutaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63d"),
    ethnic: "BONE",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Cempa",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63e"),
    ethnic: "BONE",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63f"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Aju Cenning",
    species: "Cinnamomum sp",
    family: "Lauraceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa63b"),
    ethnic: "BONE",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Baka",
    species: "Artocarpus sp",
    family: "Moraceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa640"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Cengke",
    species: "Caryophyllum sp",
    family: "",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa641"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jintang Lontong",
    species: "Nigella sativa L",
    family: "Ranunculaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa644"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Laiya",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa642"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa643"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Lita",
    species: "Daemonorops sp",
    family: "Arecaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa646"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Lobba",
    species: "Raphanus sativus L",
    family: "Brassicaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa647"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Pacci - pacci",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa648"),
    ethnic: "BONE",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Ading",
    species: "Cinnamomum burmanii Nees. Ex. Bl.",
    family: "Lauraceae",
    section_ina: "pucuk daun (ramuan)",
    section_ing: "shoots (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64a"),
    ethnic: "BONE",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kaluku",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "minyak (ramuan)",
    section_ing: "oil (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa649"),
    ethnic: "BONE",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Canging - canging",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64b"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jintang Pute",
    species: "Cuminum cyminum L.",
    family: "Apiaceae",
    section_ina: "ramuan",
    section_ing: "potion",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bed")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64c"),
    ethnic: "BONE",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Lasuna Cella",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa645"),
    ethnic: "BONE",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Kaliki",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "pucuk daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64f"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Lenga",
    species: "Sesamum orientale L",
    family: "Pedalidceae",
    section_ina: "minyak biji (ramuan)",
    section_ing: "oil seeds (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa650"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Likku",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa651"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Aju Cenning",
    species: "Cinnamomum sp",
    family: "Lauraceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa652"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Utti",
    species: "Musa paradiciaca L.",
    family: "Musaceae",
    section_ina: "embun batang (tunggal)",
    section_ing: "dew rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa653"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Tebbu",
    species: "Saccharum officinarum L",
    family: "Poaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d9f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa654"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Bila",
    species: "Aegle marmelos (L.) Corr.",
    family: "Rutaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98af5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa655"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Beri - Beri",
    disease_ing: "Give - Give",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64d"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Kuma - kuma",
    species: "Crocus sativus Linn",
    family: "Iridaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98be5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa657"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Darah rendah",
    disease_ing: "Low blood pressure",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa656"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Canging - canging",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa658"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Benkak Kaki dan Tangan",
    disease_ing: "Benkak Foot and Hand",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa64e"),
    ethnic: "BONE",
    disease_ina: "Tonikum",
    disease_ing: "tonic",
    name_ina: "Lasuna pute",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa659"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65b"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Genorrhoe",
    disease_ing: "Genorrhoe",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65c"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Kencing Manis",
    disease_ing: "Diabetes",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65d"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65e"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Masuk Angin",
    disease_ing: "Colds",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65f"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa660"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa661"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Pencahar Perut",
    disease_ing: "Laxatives Stomach",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa65a"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Encok",
    disease_ing: "Gout",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa663"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa664"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa665"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa666"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa667"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Api - api",
    species: "Avicennia sp",
    family: "Verbenaceae",
    section_ina: "daun, kulit (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa668"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Urat Saraf Tegang",
    disease_ing: "Cord Tense",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa669"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "-",
    species: "Rhizophora sp",
    family: "Rhizophoraceae",
    section_ina: "getah, daun (tunggal)",
    section_ing: "sap, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa662"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Mengurangi Gelisah",
    disease_ing: "reduce Agitated",
    name_ina: "Bakung",
    species: "Pandanus amaryllifolius Roxb",
    family: "Pandanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d23")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66a"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Tacang",
    species: "Bruguiera gymnorhiza (L.) Lmk.",
    family: "Rhizophoraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66b"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Bunga Tai Ayam",
    species: "Lantana camara L",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98caa")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66d"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "-",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66c"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Sakit Saraf",
    disease_ing: "neuralgia",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa670"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Bawang putih",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa671"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Darah tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Belimbing",
    species: "Averrhoa bilimbi L.",
    family: "Oxalidaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b5c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa672"),
    ethnic: "BOLAANG MONGONDOW",
    disease_ina: "Melancarkan Haid",
    disease_ing: "staged Haid",
    name_ina: "Kokuru/Balakama",
    species: "Ocimum sanctum L.",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d0d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa673"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Bunga Tai Ayam",
    species: "Lantana camara L",
    family: "Verbenaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98caa")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa674"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "-",
    species: "Ipomoea batatas L.",
    family: "Convolvulaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c94")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa675"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Cendana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa676"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Gijawas",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa677"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "-",
    species: "Rhizophora sp",
    family: "Rhizophoraceae",
    section_ina: "getah, daun (tunggal)",
    section_ing: "sap, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa678"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66f"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Arecaceae",
    section_ina: "biji muda (tunggal)",
    section_ing: "young seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa679"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Hepatitis",
    disease_ing: "Hepatitis",
    name_ina: "Akar Kuning",
    species: "Arcangelisia flava (L.) Merr",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67a"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "Api - api",
    species: "Avicennia sp",
    family: "Verbenaceae",
    section_ina: "daun, kulit (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67b"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "-",
    species: "Allium odorum L",
    family: "Amaryllidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67c"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "-",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "",
    section_ing: "#VALUE!"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa66e"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "-",
    species: "Coleus atropurpureus Bebth",
    family: "Lamiaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67d"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kesurupan",
    disease_ing: "Trance",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Liliaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67f"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Lemas",
    disease_ing: "Limp",
    name_ina: "Lempuyang",
    species: "Zingiber zerumbet (L.) J. E. Smith",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e33")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa67e"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kesurupan",
    disease_ing: "Trance",
    name_ina: "Cedana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa683"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Tancang",
    species: "Bruguiera gymnorhiza (L.) Lmk.",
    family: "Rhizophoraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa682"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pepaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa684"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Melancarkan Aliran Darah",
    disease_ing: "Unleash Blood Flow",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa685"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Bangle",
    species: "Zingiber purpureum Roxb",
    family: "Zingiberaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e32")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa680"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Lemas",
    disease_ing: "Limp",
    name_ina: "-",
    species: "Rhizophora sp",
    family: "Rhizophoraceae",
    section_ina: "getah, daun (tunggal)",
    section_ing: "sap, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa686"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Kejang",
    disease_ing: "convulsions",
    name_ina: "Kayu Pedada",
    species: "Sonneratia sp",
    family: "Solanaceae",
    section_ina: "daun, kulit (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa688"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Menambah napsu makan",
    disease_ing: "Increase appetite",
    name_ina: "Pecah Beling",
    species: "Serioclyx crispus (L.) Bremek",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa687"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa689"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Menghaluskan Kulit",
    disease_ing: "Smooth Skin",
    name_ina: "Nangka",
    species: "Artocarpus integra L.",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b4b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68b"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68a"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Menghilagkan Bau Badam",
    disease_ing: "Odor Menghilagkan Badam",
    name_ina: "Beluntas",
    species: "Pluchea indica (L.) Less",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d61")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68c"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Cengkeh",
    species: "Syzygiym aromaticum (L.) Merr. & Perry",
    family: "Myrtaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68e"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68d"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Gandarusa",
    species: "Justicia gendarussa Burmf",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa68f"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Antawale",
    species: "Tinospora crispa (L.) Diels,",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e03")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa690"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Bunga Tai Ayam",
    species: "Lantana camara L",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98caa")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa691"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Kelor",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa692"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "-",
    species: "Artemisia vulgaris L.",
    family: "Asteraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa693"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Peluruh Air Seni",
    disease_ing: "Peluruh Urine",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon grandiflorus Auct",
    family: "Lamiaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa694"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa695"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Penguat Saraf",
    disease_ing: "Strengthening Nerves",
    name_ina: "Kelor",
    species: "Moringa oleifera Lmk",
    family: "Moringaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa696"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Nyeri Lambung",
    disease_ing: "Stomach pain",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa681"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Asteraceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa697"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Johar",
    species: "Cassia alata L",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa698"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Pare",
    species: "Momordica charantia L.",
    family: "Cucurbitaceae",
    section_ina: "buah muda (tunggal)",
    section_ing: "Young fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa699"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "-",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69a"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan Kulit",
    disease_ing: "Skin care",
    name_ina: "Api - api",
    species: "Avicennia sp",
    family: "Verbenaceae",
    section_ina: "daun, kulit (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69b"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan Kulit",
    disease_ing: "Skin care",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers",
    family: "Fabaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69c"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan Kulit",
    disease_ing: "Skin care",
    name_ina: "Gijawas",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69d"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan Kulit",
    disease_ing: "Skin care",
    name_ina: "Tumbu Lawang",
    species: "Curcuma xanthorriza Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69e"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Jawer Kotok",
    species: "Coleus atropurpureus Bebth",
    family: "Lamiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bd2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa69f"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a3"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Cengkeh",
    species: "Syzygiym aromaticum (L.) Merr. & Perry",
    family: "Myrtaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a2"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Bawang merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a0"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "-",
    species: "Impatiens balsamina L",
    family: "Balsaminaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c8f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a5"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Bawa Merah",
    species: "Allium cepa L",
    family: "Amaryllidaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b04")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a4"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Pala",
    species: "Myristica fragrans Houtt",
    family: "Myrtaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cfe")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a6"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perawatan Kulit",
    disease_ing: "Skin care",
    name_ina: "Daun Konto",
    species: "Paederia foetida Auct. Non L.",
    family: "Rubiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d1a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a8"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Gandarusa",
    species: "Justicia gendarussa Burmf",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c9d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a7"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Pinang",
    species: "Areca catechu L.",
    family: "Fabaceae",
    section_ina: "biji muda (tunggal)",
    section_ing: "young seed (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a9"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Radang Usus",
    disease_ing: "enteritis",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers",
    family: "Fabaceae",
    section_ina: "pepagan (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6aa"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Cengkeh",
    species: "Syzygiym aromaticum (L.) Merr. & Perry",
    family: "Myrtaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ab"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ac"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Melati",
    species: "Jasminum sambac Ait",
    family: "Oleaceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c97")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ae"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Api - api",
    species: "Avicennia sp",
    family: "Verbenaceae",
    section_ina: "daun, kulit (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ad"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Lele / Tongkal",
    species: "Piper betle L.",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d50")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6af"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Gijawas",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b1"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "-",
    species: "Rhizophora sp",
    family: "Rhizophoraceae",
    section_ina: "getah, daun (tunggal)",
    section_ing: "sap, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b0"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b2"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Gijawas",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "kulit batang",
    section_ing: "bark",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b3"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Sariawan",
    disease_ing: "Sprue",
    name_ina: "Jarak",
    species: "Jantropha curcas L",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b4"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Rheumatik",
    disease_ing: "rheumatik",
    name_ina: "Bunga Tai Ayam",
    species: "Lantana camara L",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98caa")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6a1"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Bangle",
    species: "Zingiber purpureum Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e32")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b5"),
    ethnic: "BACAN NUAULU",
    disease_ina: "Urat Saraf Tegang",
    disease_ing: "Cord Tense",
    name_ina: "Cendana",
    species: "Santalum album L.",
    family: "Santalaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98da5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b6"),
    ethnic: "NUAULU",
    disease_ina: "Batuk Darah",
    disease_ing: "coughing Blood",
    name_ina: "Pepait",
    species: "Andrographis paniculata Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b7"),
    ethnic: "NUAULU",
    disease_ina: "Batuk Kering",
    disease_ing: "hacking cough",
    name_ina: "Awanekunie",
    species: "Arcangelisia flava (L.) Merr",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b8"),
    ethnic: "NUAULU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Rori",
    species: "Begonia isoptera Dryand",
    family: "Begoniaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ba"),
    ethnic: "NUAULU",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Mangga Berabu",
    species: "Cerbera manghas L",
    family: "Apocynaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6b9"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Jarak",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6bb"),
    ethnic: "NUAULU",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "Aituinate",
    species: "Clerodendrum vissolum Bl.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6bd"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Kinar",
    species: "Kleinhovia hospita L",
    family: "Sterculiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6bc"),
    ethnic: "NUAULU",
    disease_ina: "Kekebalan",
    disease_ing: "Immunity",
    name_ina: "Soi",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c0"),
    ethnic: "NUAULU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Monote",
    species: "Cyrtococceum sp",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6be"),
    ethnic: "NUAULU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Karosin",
    species: "Pipturus argenteus (Forst. F) Wedd",
    family: "Urticaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c2"),
    ethnic: "NUAULU",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Anapakane",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c3"),
    ethnic: "NUAULU",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Awoine",
    species: "Endospermium moluccanum Becc",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c4"),
    ethnic: "NUAULU",
    disease_ina: "Lumpuh",
    disease_ing: "paralyzed",
    name_ina: "Onate",
    species: "Smilax zeylanica L",
    family: "smilacaceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dc9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c5"),
    ethnic: "NUAULU",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Gadehu",
    species: "Codiaeum sp",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c6"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Linggua",
    species: "Pterocarpus indicus Willd",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c7"),
    ethnic: "NUAULU",
    disease_ina: "Mabuk",
    disease_ing: "Drunk",
    name_ina: "Tunewerata",
    species: "Annona muricata L.",
    family: "Annonaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b2f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6bf"),
    ethnic: "NUAULU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Lumute",
    species: "Neckeropsis sp",
    family: "Neckeroceae",
    section_ina: "semua bagian (tunggal)",
    section_ing: "all parts (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c8"),
    ethnic: "NUAULU",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pohu",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c9"),
    ethnic: "NUAULU",
    disease_ina: "Mandi Setelah Sakit Demam",
    disease_ing: "Bathing After Fever Hospital",
    name_ina: "Monote",
    species: "Cyrtococceum sp",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ca"),
    ethnic: "NUAULU",
    disease_ina: "Membersihkan Bayi dalam Kandungan",
    disease_ing: "Cleaning Baby in Gynecology",
    name_ina: "Pasite",
    species: "Elatostema integrifolium (D. Don.) Wedd.",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6cb"),
    ethnic: "NUAULU",
    disease_ina: "Ngompol",
    disease_ing: "bedwetting",
    name_ina: "Kahinutae",
    species: "Sterculia ceramina R. Br.",
    family: "Sterculiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6cc"),
    ethnic: "NUAULU",
    disease_ina: "Menguatkan Gigi",
    disease_ing: "strengthens Teeth",
    name_ina: "Sirih Hutan",
    species: "Piper corylistaciom C. DC.",
    family: "Piperaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6cd"),
    ethnic: "NUAULU",
    disease_ina: "Pegal Linu",
    disease_ing: "Sore",
    name_ina: "Daun Gatal",
    species: "Laportea decumana Wedd",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6cf"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Kaote",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ce"),
    ethnic: "NUAULU",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "Nakuasi",
    species: "Languas galanga L.",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d0"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Awanekunie",
    species: "Arcangelisia flava (L.) Merr",
    family: "Menispermaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b37")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d1"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Awoine",
    species: "Endospermium moluccanum Becc",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d2"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Katang - Katang",
    species: "Ipomoea pes-carpe (L.) R. Br.",
    family: "Convolvulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d3"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Tali Mas",
    species: "Merremia peltata (L.) Merr",
    family: "Convolvulaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d5"),
    ethnic: "NUAULU",
    disease_ina: "Mabuk",
    disease_ing: "Drunk",
    name_ina: "Asaherane",
    species: "Myristica lepidota Bl",
    family: "Myrtaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d4"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Nimunone",
    species: "Wollastonia biflora (L.) DC.",
    family: "Compositaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d6"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Mate",
    species: "Premna obstusifolia R. Br.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d7"),
    ethnic: "NUAULU",
    disease_ina: "Mabuk",
    disease_ing: "Drunk",
    name_ina: "Tahola",
    species: "Ficus variegata Bl",
    family: "Moraceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d8"),
    ethnic: "NUAULU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Intsia bijuga (Colebr.) O. Kuntze",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6c1"),
    ethnic: "NUAULU",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Niteuneu",
    species: "Antrophylum callofolium Bl.",
    family: "Vitaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6d9"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Pinggang",
    disease_ing: "Back pain",
    name_ina: "Pecah Piring",
    species: "Clerodendrum umbellatum Poir.",
    family: "Verbenaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6da"),
    ethnic: "NUAULU",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Lansium domesticum Corr.",
    family: "Meliaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6dc"),
    ethnic: "NUAULU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Endospermium moluccanum Becc",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6db"),
    ethnic: "NUAULU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Anadendrum mirostachyum (Miq.) Back.& v. A. V. R.",
    family: "Araceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6dd"),
    ethnic: "NUAULU",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Kleinhovia hospita L",
    family: "Sterculiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6de"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Maranta arundinaceae L",
    family: "Marantaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6df"),
    ethnic: "NUAULU",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "",
    species: "Erigeron sumatrensis Retz",
    family: "Asteraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e0"),
    ethnic: "NUAULU",
    disease_ina: "Gatal - gatal",
    disease_ing: "Itchy",
    name_ina: "",
    species: "Cyathula prostata (L.) Blume",
    family: "Amaranthaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e1"),
    ethnic: "NUAULU",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "",
    species: "Aglaonema latius",
    family: "Araceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e2"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e3"),
    ethnic: "NUAULU",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Knoxia corymborbosa Auct. Non Willd.",
    family: "Rubiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e6"),
    ethnic: "NUAULU",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Epipremnopsis zippeliana",
    family: "Araceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e7"),
    ethnic: "NUAULU",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Mallotus molucanna (Muell.) Arg",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e4"),
    ethnic: "NUAULU",
    disease_ina: "Pendarahan Saat Melahirkan",
    disease_ing: "Bleeding During Delivery",
    name_ina: "",
    species: "Nephrolepis hirsuta",
    family: "Polypodiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e8"),
    ethnic: "NUAULU",
    disease_ina: "Reumatik",
    disease_ing: "Rheumatic",
    name_ina: "",
    species: "Forrestiana mollissima (Bl.) Kds",
    family: "Compositaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e9"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Anadendrum mirostachyum (Miq.) Back.& v. A. V. R.",
    family: "Araceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ea"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Endospermium moluccanum Becc",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6eb"),
    ethnic: "KEI",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "",
    species: "Ficus variegata Bl",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ec"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Kleinhovia hospita L",
    family: "Sterculiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ed"),
    ethnic: "KEI",
    disease_ina: "Antifertilitas",
    disease_ing: "antifertilitas",
    name_ina: "",
    species: "Scleria purpurascens Steud",
    family: "Cyperaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ee"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ef"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Arenga pinnata Merr.",
    family: "Arecaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b3b")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f0"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f1"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Codiaeum variegatum (L.) Bl.",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f2"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Corymborchis veratrifolia Bl.",
    family: "Orchidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f4"),
    ethnic: "NUAULU",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "",
    species: "Myristica inners",
    family: "Myristicaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f3"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Crinum asiaticum L",
    family: "Amaryllidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f5"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Eryngium maritimum L",
    family: "Apiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f7"),
    ethnic: "KEI",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "",
    species: "Medinilla sp",
    family: "Melastomataceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f6"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Talinum paniculatum (Jacq) Gaertn",
    family: "Portulacaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df1")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f8"),
    ethnic: "KEI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "",
    species: "Artocarpus altilis (Z.) Fosb",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b48")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6e5"),
    ethnic: "NUAULU",
    disease_ina: "Wound",
    disease_ing: "wound",
    name_ina: "",
    species: "Visit sp",
    family: "Vitaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6fa"),
    ethnic: "KEI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "",
    species: "Loranthus sp",
    family: "Loranthaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6fb"),
    ethnic: "KEI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6f9"),
    ethnic: "KEI",
    disease_ina: "Kanker",
    disease_ing: "Cancer",
    name_ina: "",
    species: "Catharanthus roseus (L.) G. Don",
    family: "Acanthaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b99")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6fc"),
    ethnic: "KEI",
    disease_ina: "Leukimia",
    disease_ing: "leukemia",
    name_ina: "",
    species: "Artocarpus altilis (Z.) Fosb",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b48")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6fd"),
    ethnic: "KEI",
    disease_ina: "Leukimia",
    disease_ing: "leukemia",
    name_ina: "",
    species: "Catharanthus roseus (L.) G. Don",
    family: "Acanthaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b99")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6ff"),
    ethnic: "KEI",
    disease_ina: "Leukimia",
    disease_ing: "leukemia",
    name_ina: "",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa6fe"),
    ethnic: "KEI",
    disease_ina: "Leukimia",
    disease_ing: "leukemia",
    name_ina: "",
    species: "Loranthus sp",
    family: "Loranthaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa702"),
    ethnic: "KEI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "",
    species: "Timonius timon (Spreng) Merr",
    family: "Rubiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa701"),
    ethnic: "KEI",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa704"),
    ethnic: "KEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Ananas comosus(L.) Merr",
    family: "Bromeliaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa703"),
    ethnic: "KEI",
    disease_ina: "Mencegah Infeksi",
    disease_ing: "prevent Infection",
    name_ina: "",
    species: "Stachytarpheta jamaicensis (L.) Vahl.",
    family: "Verbenaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dda")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa705"),
    ethnic: "KEI",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa706"),
    ethnic: "KEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Canarium amboinense",
    family: "Burseraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa707"),
    ethnic: "KEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Canarium sp",
    family: "Burseraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa708"),
    ethnic: "KEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Sauropus androgymus (L.) Merr.",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa709"),
    ethnic: "KEI",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "",
    species: "Ficus ssp",
    family: "Moraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa700"),
    ethnic: "KEI",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "",
    species: "Maranta arundinaceae L",
    family: "Marantaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70a"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Crinum asiaticum L",
    family: "Amaryllidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70b"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Cerbera manghas L",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70d"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Derris eliptica (Roxb.) Bth. / Fabaceae Schum",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70c"),
    ethnic: "KEI",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "",
    species: "Tamarindus indica L",
    family: "Fabaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98df4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70e"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Gnetum gnemon L.",
    family: "Gnetaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa70f"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Litsea noronhoe Bl",
    family: "Lauraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa710"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Litsea grandis",
    family: "Lauraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa711"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa713"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Wedelia biflora (L.) DC",
    family: "Asteraceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa712"),
    ethnic: "KEI",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "",
    species: "Terminalia catappa L",
    family: "Compositaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa714"),
    ethnic: "KEI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa716"),
    ethnic: "KEI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "",
    species: "Smilax leucophylla BL",
    family: "smilacaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa718"),
    ethnic: "KANUM",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Bano / Komben",
    species: "Eugenia branderbortsii",
    family: "Myrtaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa719"),
    ethnic: "KANUM",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Guanggau / Kuyiu",
    species: "Vigna marina (Burm. F.) Merr",
    family: "Fabaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa715"),
    ethnic: "KEI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71a"),
    ethnic: "KANUM",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Demaka",
    species: "Kalanchoe pinnata pers",
    family: "Crassulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71b"),
    ethnic: "KANUM",
    disease_ina: "Batuk Berlendir",
    disease_ing: "cough Slimy",
    name_ina: "Pepari / Parai",
    species: "Momordica charantia L.",
    family: "Cucurbitaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71c"),
    ethnic: "KANUM",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Mberkeh",
    species: "Curcuma longa L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71d"),
    ethnic: "KANUM",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "Ruu",
    species: "Melaleuca angustifolia",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71e"),
    ethnic: "KANUM",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Merro / Rofer",
    species: "Dillenia alata",
    family: "Dilleniaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa71f"),
    ethnic: "KANUM",
    disease_ina: "Berak Darah",
    disease_ing: "Dysentery",
    name_ina: "Suji",
    species: "Pleomele angustifolia (Roxb.) N.E. Br",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d60")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa717"),
    ethnic: "KEI",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "",
    species: "Spathoglottis plicata Bl",
    family: "Orchidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa722"),
    ethnic: "KANUM",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Ndamas",
    species: "Jantropha curcas L",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa723"),
    ethnic: "KANUM",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Ngoku / Ukep",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa724"),
    ethnic: "KANUM",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sambitilo",
    species: "Andrographis paniculata Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa725"),
    ethnic: "KANUM",
    disease_ina: "Batuk Berlendir",
    disease_ing: "cough Slimy",
    name_ina: "Tapok / Pes - pesel",
    species: "Tetracera nordtiana",
    family: "Dilleniaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa720"),
    ethnic: "KANUM",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Demaka",
    species: "Kalanchoe pinnata pers",
    family: "Crassulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa726"),
    ethnic: "KANUM",
    disease_ina: "Digigit Babi",
    disease_ing: "bitten Pig",
    name_ina: "Tete",
    species: "Wedelia biflora (L.) DC",
    family: "Compositaceae",
    section_ina: "pucuk daun, daun, akar (tunggal)",
    section_ing: "shoots, leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa727"),
    ethnic: "KANUM",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Ruu",
    species: "Malaleuca angustifolia",
    family: "Myetaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa721"),
    ethnic: "KANUM",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Seeh",
    species: "Alpithonia incana",
    family: "Rhamnaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa728"),
    ethnic: "KANUM",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Mamek",
    species: "Caesalpinia bundoc (L.) Roxb",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa729"),
    ethnic: "KANUM",
    disease_ina: "Kelelahan",
    disease_ing: "Fatigue",
    name_ina: "Ruu",
    species: "Malaleuca angustifolia",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72a"),
    ethnic: "KANUM",
    disease_ina: "Kulit Bernanah",
    disease_ing: "leather Bernanah",
    name_ina: "Merro / Rofer",
    species: "Dillenia alata",
    family: "Dilleniaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72c"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Danggor / Buol",
    species: "Buchanania essifolia",
    family: "Anacardiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72b"),
    ethnic: "KANUM",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Ketepeg / Samani Kwi",
    species: "Cassia alata L",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72d"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Mberkeh",
    species: "Curcuma longa L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf2")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72e"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Mel - melu",
    species: "Ageratum conyzoides L",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa731"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Rura - rura",
    species: "Glochidion novoguineens",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa72f"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pere Samdai / Pol - polu",
    species: "Gardenia gjellerupii Valet",
    family: "Rubiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa733"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Seeh",
    species: "Alpithonia incana",
    family: "Rhamnaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa734"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Sulli / Sindi",
    species: "Alstonia actinophylla",
    family: "Apocynaceae",
    section_ina: "kulit batang, getah (tunggal)",
    section_ing: "bark, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa730"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Pra Wat - wati",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "pucuk batang, daun (tunggal)",
    section_ing: "the top of the stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa736"),
    ethnic: "KANUM",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Mbotor - mbotor / Kedelai Hutan",
    species: "Aristolochia tagala Cham",
    family: "Aristolochiaceae",
    section_ina: "akar, kulit batang (tunggal)",
    section_ing: "roots, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa735"),
    ethnic: "KANUM",
    disease_ina: "Luka Bekas Ikan",
    disease_ing: "Former Luka Fish",
    name_ina: "Kur - kur",
    species: "Smilax zeylanica L",
    family: "smilacaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dc9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa737"),
    ethnic: "KANUM",
    disease_ina: "Luka Berdarah",
    disease_ing: "Bleeding wounds",
    name_ina: "Bakung / Debolek",
    species: "Crinum asiaticum L",
    family: "Amaryllidaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa738"),
    ethnic: "KANUM",
    disease_ina: "Luka Berdarah",
    disease_ing: "Bleeding wounds",
    name_ina: "Den - denar / Gorongbreng",
    species: "Melastoma affine D. Don",
    family: "Melastomataceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73a"),
    ethnic: "KANUM",
    disease_ina: "Luka pada Mulut Bayi",
    disease_ing: "Injuries to the mouth Baby",
    name_ina: "Kemiri / Koklan",
    species: "Aleurites moluccana (L.) Willd.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73b"),
    ethnic: "KANUM",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Tete",
    species: "Wedelia biflora (L.) DC",
    family: "Compositaceae",
    section_ina: "pucuk daun, daun, akar (tunggal)",
    section_ing: "shoots, leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73c"),
    ethnic: "KANUM",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Bersasik / Karau",
    species: "Sceria levis",
    family: "Cyperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa732"),
    ethnic: "KANUM",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Se",
    species: "Pipturus argenteus (Forst. F) Wedd",
    family: "Urticaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73d"),
    ethnic: "KANUM",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Papaya",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "akar, daun (tunggal)",
    section_ing: "root, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73f"),
    ethnic: "KANUM",
    disease_ina: "Mata Kuning",
    disease_ing: "Yellow eyes",
    name_ina: "Hoyom",
    species: "Vatica papuana",
    family: "Dipterocarpaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa73e"),
    ethnic: "KANUM",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Sambitilo",
    species: "Andrographis paniculata Ness",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b1f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa740"),
    ethnic: "KANUM",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Sulli / Sindi",
    species: "Alstonia actinophylla",
    family: "Apocynaceae",
    section_ina: "kulit batang, getah (tunggal)",
    section_ing: "bark, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa742"),
    ethnic: "KANUM",
    disease_ina: "Memandikan Bayi",
    disease_ing: "Baby bathing",
    name_ina: "Mbitau",
    species: "Amilotheca djamuensis",
    family: "Loranthaceae",
    section_ina: "batang, daun (tunggal)",
    section_ing: "stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa741"),
    ethnic: "KANUM",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "Turi",
    species: "Sesbania grandiflora Pers",
    family: "Fabaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dbb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa743"),
    ethnic: "KANUM",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Lempuyang",
    species: "Zingiber amaricans Bl",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa745"),
    ethnic: "KANUM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Bano / Komben",
    species: "Eugenia branderbortsii",
    family: "Myrtaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa744"),
    ethnic: "KANUM",
    disease_ina: "Membersihkan Darah Nifas",
    disease_ing: "Cleaning Blood Ruling",
    name_ina: "Meniran",
    species: "Phyllanthus niruri L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa746"),
    ethnic: "KANUM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Guanggau / Kuyiu",
    species: "Vigna marina (Burm. F.) Merr",
    family: "Fabaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa748"),
    ethnic: "KANUM",
    disease_ina: "Infeksi Kerongkongan",
    disease_ing: "infection Esophagus",
    name_ina: "Bano / Komben",
    species: "Eugenia branderbortsii",
    family: "Myrtaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa747"),
    ethnic: "KANUM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Jambu Biji / Kejawes",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa749"),
    ethnic: "KANUM",
    disease_ina: "Mencret",
    disease_ing: "diarrhea",
    name_ina: "Njomor",
    species: "Timonius timon (Spreng) Merr",
    family: "Rubiaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74a"),
    ethnic: "KANUM",
    disease_ina: "Menghilangkan Lendir pada Mulut Bayi",
    disease_ing: "Eliminate Mucus in mouth Baby",
    name_ina: "Ndamas",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74b"),
    ethnic: "KANUM",
    disease_ina: "Meningkatkan produksi ASI",
    disease_ing: "Increase milk production",
    name_ina: "Balau / Belau",
    species: "Artocarpus altilis (Z.) Fosb",
    family: "Moraceae",
    section_ina: "bunga (tunggal)",
    section_ing: "flowers (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b48")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa739"),
    ethnic: "KANUM",
    disease_ina: "Luka Dalam",
    disease_ing: "wounds In",
    name_ina: "Merro",
    species: "Dillenia alata",
    family: "Dilleniaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74c"),
    ethnic: "KANUM",
    disease_ina: "Mual",
    disease_ing: "Nausea",
    name_ina: "Jahe Merah / Mudod",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74d"),
    ethnic: "KANUM",
    disease_ina: "Muntah Berak",
    disease_ing: "vomiting Berak",
    name_ina: "Njomor",
    species: "Timonius timon (Spreng) Merr",
    family: "Rubiaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74e"),
    ethnic: "KANUM",
    disease_ina: "Nyeri Lutut",
    disease_ing: "Knee pain",
    name_ina: "Ndamas",
    species: "Jatropha curcas L.",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c98")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa74f"),
    ethnic: "KANUM",
    disease_ina: "Nyeri Dada",
    disease_ing: "Chest pain",
    name_ina: "Sereh",
    species: "Cymbopogon citratus (DC.) Stapf.",
    family: "Poaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa751"),
    ethnic: "KANUM",
    disease_ina: "Nyeri Otot",
    disease_ing: "Muscle ache",
    name_ina: "Wat - wati",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa750"),
    ethnic: "KANUM",
    disease_ina: "Nyeri Otot",
    disease_ing: "Muscle ache",
    name_ina: "Mosi / Gandarusa",
    species: "Gendarusa vulgaris Nees",
    family: "Acanthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa752"),
    ethnic: "KANUM",
    disease_ina: "Nyeri Seluruh Badan",
    disease_ing: "Whole Body Pain",
    name_ina: "Mosi / Gandarusa",
    species: "Gendarusa vulgaris Nees",
    family: "Poaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa753"),
    ethnic: "KANUM",
    disease_ina: "Panas Tinggi",
    disease_ing: "High fever",
    name_ina: "Bawang",
    species: "Allium sativum Linn",
    family: "Amaryllidaceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98b06")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa754"),
    ethnic: "KANUM",
    disease_ina: "Panas Tinggi",
    disease_ing: "High fever",
    name_ina: "Kidu",
    species: "Morinda citrifolia L.",
    family: "Rubiaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cf4")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa755"),
    ethnic: "KANUM",
    disease_ina: "Penawar Bisa",
    disease_ing: "Can bidder",
    name_ina: "Bar - dewar / Kafkwi",
    species: "Polyosma cf. cryphocalix",
    family: "saxifragaceae",
    section_ina: "buah, kulit batang (tunggal)",
    section_ing: "fruit, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa756"),
    ethnic: "KANUM",
    disease_ina: "Penawar Bisa",
    disease_ing: "Can bidder",
    name_ina: "Yapepla / Patah",
    species: "Ipomoea pes-carpe (L.) R. Br.",
    family: "Convolvulaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa757"),
    ethnic: "KANUM",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Jahe Merah / Mudod",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa758"),
    ethnic: "KANUM",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Kanta",
    species: "Pongamia pinnata (L.) Pierre.",
    family: "Fabaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75a"),
    ethnic: "KANUM",
    disease_ina: "Perut Kembung",
    disease_ing: "Bloated",
    name_ina: "Mbitau",
    species: "Amilotheca djamuensis",
    family: "Loranthaceae",
    section_ina: "batang, daun (tunggal)",
    section_ing: "stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75d"),
    ethnic: "KANUM",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Ngoku / Ukep",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75c"),
    ethnic: "KANUM",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Jahe Merah / Mudod",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa759"),
    ethnic: "KANUM",
    disease_ina: "Perawatan sesudah melahirkan",
    disease_ing: "Care after childbirth",
    name_ina: "Lempuyang",
    species: "Zingiber amaricans Bl",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75e"),
    ethnic: "KANUM",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Demaka",
    species: "Kalanchoe pinnata pers",
    family: "Crassulaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75f"),
    ethnic: "KANUM",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Tetewely / Sus",
    species: "Urena lobata L",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa760"),
    ethnic: "KANUM",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Pessel / Pojor",
    species: "Eucalyptus deglupta",
    family: "Myrtaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa761"),
    ethnic: "KANUM",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Sulli / Sindi",
    species: "Alstonia actinophylla",
    family: "Apocynaceae",
    section_ina: "kulit batang, getah (tunggal)",
    section_ing: "bark, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa762"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Guanggau / Kuyiu",
    species: "Vigna marina (Burm. F.) Merr",
    family: "Fabaceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa764"),
    ethnic: "KANUM",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Seringga",
    species: "Licula sp",
    family: "Arecaceae",
    section_ina: "pucuk (tunggal)",
    section_ing: "shoots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa763"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Jahe Merah / Mudod",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa765"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Ngoku / Ukep",
    species: "Kaempferia galanga L",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa766"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Njomor",
    species: "Timonius timon (Spreng) Merr",
    family: "Rubiaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa767"),
    ethnic: "KANUM",
    disease_ina: "Penambah Darah",
    disease_ing: "Blood booster",
    name_ina: "Hoyom",
    species: "Vatica papuana",
    family: "Dipterocarpaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa768"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Tangge",
    species: "Glycosmis pentaphylla Retz Corr. Serr",
    family: "Rutaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa769"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Ruu",
    species: "Melaleuca angustifolia",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76a"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Pra Wat - wati",
    species: "Leea rubra Bl",
    family: "Leeaceae",
    section_ina: "pucuk batang, daun (tunggal)",
    section_ing: "the top of the stem, leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76b"),
    ethnic: "KANUM",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Wat - wati",
    species: "Leea indica (Burm. f.) Merr.",
    family: "Leeaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76c"),
    ethnic: "KANUM",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Pessel / Pojor",
    species: "Eucalyptus deglupta",
    family: "Myrtaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76d"),
    ethnic: "KANUM",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Mamek",
    species: "Caesalpinia bundoc (L.) Roxb",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76e"),
    ethnic: "KANUM",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Pinta - pinta / Sim",
    species: "Neolitsea brassii",
    family: "Lauraceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa75b"),
    ethnic: "KANUM",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Ketapang / Rup",
    species: "Terminalia catappa L",
    family: "Combretaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dfb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa76f"),
    ethnic: "KANUM",
    disease_ina: "Sesak napas",
    disease_ing: "Hard to breathe",
    name_ina: "Sulli / Sindi",
    species: "Alstonia actinophylla",
    family: "Apocynaceae",
    section_ina: "kulit batang, getah (tunggal)",
    section_ing: "bark, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa770"),
    ethnic: "KANUM",
    disease_ina: "Siphilis",
    disease_ing: "syphilis",
    name_ina: "Merro/ Rofer",
    species: "Dillenia alata",
    family: "Dilleniaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa771"),
    ethnic: "MENYAH",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "-",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa772"),
    ethnic: "MENYAH",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "-",
    species: "Disoxylum sp",
    family: "Meliaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa773"),
    ethnic: "MENYAH",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "-",
    species: "Citrus sp.",
    family: "Rutaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa774"),
    ethnic: "MENYAH",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "-",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa775"),
    ethnic: "MENYAH",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "-",
    species: "Ficus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa776"),
    ethnic: "MENYAH",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "-",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "tunggal",
    section_ing: "single",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa777"),
    ethnic: "MENYAH",
    disease_ina: "Kencing Batu",
    disease_ing: "Urinary Stone",
    name_ina: "-",
    species: "Soncus arvenis L",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa778"),
    ethnic: "MENYAH",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "-",
    species: "Crinum asiaticum L",
    family: "Amaryllidaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa779"),
    ethnic: "MENYAH",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "-",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77b"),
    ethnic: "MENYAH",
    disease_ina: "Memar",
    disease_ing: "bruise",
    name_ina: "-",
    species: "Villebruena sp",
    family: "Urticaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77a"),
    ethnic: "MENYAH",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "-",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77d"),
    ethnic: "MENYAH",
    disease_ina: "Patah Tulang",
    disease_ing: "Fracture",
    name_ina: "-",
    species: "Cymbopogon citratus (DC.) Stapf.",
    family: "Poaceae",
    section_ina: "herba (tunggal)",
    section_ing: "herbs (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfc")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77e"),
    ethnic: "MENYAH",
    disease_ina: "Bengkak",
    disease_ing: "Swollen",
    name_ina: "-",
    species: "Albizia sp",
    family: "Fabaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77f"),
    ethnic: "MENYAH",
    disease_ina: "Penyakit Kulit",
    disease_ing: "Skin disease",
    name_ina: "-",
    species: "Alpinia sp",
    family: "Zingiberaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa780"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Atmomum",
    species: "Metroxylon sagu Rottb",
    family: "Arecaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa782"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Starko",
    species: "Octomeles sumatrana Miq",
    family: "Datiscaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa781"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Kunyit",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa783"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Subka",
    species: "Sterculia conwentzii",
    family: "Sterculiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa77c"),
    ethnic: "MENYAH",
    disease_ina: "Nyeri Haid",
    disease_ing: "Dysmenorrhea",
    name_ina: "-",
    species: "Aglaia sp",
    family: "Meliaceae",
    section_ina: "tunggal",
    section_ing: "single"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa784"),
    ethnic: "SOUGB",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Nyamer",
    species: "Capsicum sp",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa785"),
    ethnic: "SOUGB",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Sersarak",
    species: "Harpulia sp",
    family: "Sapindaceae",
    section_ina: "daun, kulit batang (tunggal)",
    section_ing: "leaves, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa788"),
    ethnic: "SOUGB",
    disease_ina: "Campak / Serampah",
    disease_ing: "Measles / Serampah",
    name_ina: "Manus",
    species: "Ceiba pentandra (L.) Gaertn.",
    family: "Bombacaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b9a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa789"),
    ethnic: "SOUGB",
    disease_ina: "Campak / Serampah",
    disease_ing: "Measles / Serampah",
    name_ina: "Turek",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "air buah (tunggal)",
    section_ing: "juice (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78a"),
    ethnic: "SOUGB",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Sausakarik",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "akar, batang",
    section_ing: "roots, stems"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78b"),
    ethnic: "SOUGB",
    disease_ina: "Demam",
    disease_ing: "Fever",
    name_ina: "Smeikemda",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "daun, akar (tunggal)",
    section_ing: "leaves, roots (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa786"),
    ethnic: "SOUGB",
    disease_ina: "Campak / Serampah",
    disease_ing: "Measles / Serampah",
    name_ina: "Kerakmomun",
    species: "Imperata cylindrica Ness.",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c91")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78c"),
    ethnic: "SOUGB",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Adebraka",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78d"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Sisbur Honukomous",
    species: "Macaranga sp",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78e"),
    ethnic: "SOUGB",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Ahinako",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa78f"),
    ethnic: "SOUGB",
    disease_ina: "Diare",
    disease_ing: "Diarrhea",
    name_ina: "Ahinaka",
    species: "Anthocephalus indicusRich",
    family: "Rubiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa790"),
    ethnic: "SOUGB",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Gejawas",
    species: "Psidium guajava L.",
    family: "Myrtaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d7d")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa792"),
    ethnic: "SOUGB",
    disease_ina: "Kecapean",
    disease_ing: "Tired",
    name_ina: "Arih",
    species: "Laportea sp",
    family: "Urticaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa791"),
    ethnic: "SOUGB",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Mericdes",
    species: "Curcuma domestica val",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bf0")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa793"),
    ethnic: "SOUGB",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Wesca",
    species: "Cordyline fruticosa (L.) A. chev.",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa795"),
    ethnic: "SOUGB",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Ahinaka",
    species: "Anthocephalus indicusRich",
    family: "Rubiaceae",
    section_ina: "getah, kulit batang (tunggal)",
    section_ing: "sap, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa794"),
    ethnic: "SOUGB",
    disease_ina: "Kecapean",
    disease_ing: "Tired",
    name_ina: "Koitamous",
    species: "Cinamomum sp",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa796"),
    ethnic: "SOUGB",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Smeimahtarjaga",
    species: "Blumeodendron sp",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa798"),
    ethnic: "SOUGB",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Hinduka",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "kulit batang, getah (tunggal)",
    section_ing: "bark, sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa799"),
    ethnic: "SOUGB",
    disease_ina: "Keracunan",
    disease_ing: "poisoned",
    name_ina: "Hukunoub",
    species: "Emilia prenanthoida",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79a"),
    ethnic: "SOUGB",
    disease_ina: "Keracunan Obat",
    disease_ing: "Drug poisoning",
    name_ina: "Konperaabenoub",
    species: "Sloanea pullei",
    family: "Elaeocarpaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79b"),
    ethnic: "SOUGB",
    disease_ina: "Keracunan Obat",
    disease_ing: "Drug poisoning",
    name_ina: "Tomimoula",
    species: "Ricinus communis L",
    family: "Euphorbiaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98d96")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa787"),
    ethnic: "SOUGB",
    disease_ina: "Campak / Serampah",
    disease_ing: "Measles / Serampah",
    name_ina: "Lemur",
    species: "Pennisetum sp",
    family: "Poaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79c"),
    ethnic: "SOUGB",
    disease_ina: "Keracunan Obat",
    disease_ing: "Drug poisoning",
    name_ina: "Teiteimoub",
    species: "Pothomorphe sp",
    family: "Piperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79d"),
    ethnic: "SOUGB",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Sersarak",
    species: "Debregasia sp",
    family: "Urticaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79e"),
    ethnic: "SOUGB",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Sibokok",
    species: "Elaeocarpus sp",
    family: "Elaeocarpaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa79f"),
    ethnic: "SOUGB",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Kubeinoub",
    species: "Cyperus rotundus L",
    family: "Cyperaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c01")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a0"),
    ethnic: "SOUGB",
    disease_ina: "Luka Bakar",
    disease_ing: "Burns",
    name_ina: "Ihimef",
    species: "Pometia pinnata Foster & Foster f.",
    family: "Sapindaceae",
    section_ina: "batang muda (tunggal)",
    section_ing: "young stems (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa797"),
    ethnic: "SOUGB",
    disease_ina: "Kencing Nanah",
    disease_ing: "Gonorrhea",
    name_ina: "Sogwa",
    species: "Palaquium sp",
    family: "Sapotaceae",
    section_ina: "getah, kulit batang (tunggal)",
    section_ing: "sap, bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a1"),
    ethnic: "SOUGB",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Siseoranoub",
    species: "Pluchea sp",
    family: "Liliaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a4"),
    ethnic: "SOUGB",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Aidakarouh-netaknouh",
    species: "Momorduca sp",
    family: "Cucurbitaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a5"),
    ethnic: "SOUGB",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Sbi",
    species: "Pipturus argenteus (Forst. F) Wedd",
    family: "Urticaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a6"),
    ethnic: "SOUGB",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Sakaimoub",
    species: "Carica papaya L.",
    family: "Caricaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a8"),
    ethnic: "SOUGB",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Siskamous",
    species: "Debregasia sp",
    family: "Urticaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a9"),
    ethnic: "SOUGB",
    disease_ina: "Meningkatkan Kesuburan",
    disease_ing: "Increase Fertility",
    name_ina: "Angkiknerik",
    species: "Biophytum petersianum Klotzsch",
    family: "Oxalidaceae",
    section_ina: "akar, batang, daun (tunggal)",
    section_ing: "roots, stems, leaves (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a3"),
    ethnic: "SOUGB",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Jakaranous",
    species: "Alstonia scholaris R. Br.",
    family: "Apocynaceae",
    section_ina: "akar (tunggal)",
    section_ing: "root (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b0f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a7"),
    ethnic: "SOUGB",
    disease_ina: "Melancarkan Persalinan",
    disease_ing: "Labor launched a",
    name_ina: "Neizi",
    species: "Musa sp",
    family: "Musaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ab"),
    ethnic: "SOUGB",
    disease_ina: "Nyeri Sendi",
    disease_ing: "Joint pain",
    name_ina: "Keminhina",
    species: "Garcinia dulcis Kurz",
    family: "Clusiaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ac"),
    ethnic: "SOUGB",
    disease_ina: "Penyakit Kelamin",
    disease_ing: "Sexually transmitted diseases",
    name_ina: "Nyebi",
    species: "Colocasia sp",
    family: "Araceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ad"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Akibat Salah Jalan",
    disease_ing: "Due sick Wrong Way",
    name_ina: "Meringess",
    species: "Horstendtia elongata",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7a2"),
    ethnic: "SOUGB",
    disease_ina: "Luka Lama",
    disease_ing: "Old wounds",
    name_ina: "Aidakabei",
    species: "Mucuna sp",
    family: "Fabaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7aa"),
    ethnic: "SOUGB",
    disease_ina: "Nyeri Sendi",
    disease_ing: "Joint pain",
    name_ina: "Ruwaika",
    species: "Penthapalaqium pachefarum",
    family: "Clusiaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ae"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Akibat Sumpah",
    disease_ing: "Due pain Oath",
    name_ina: "Ibi",
    species: "Fiscus sp",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7af"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Pipimeik",
    species: "Cinnamomum culilawan Bl",
    family: "Lauraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bab")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b0"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Komka",
    species: "Blumeodendron sp",
    family: "Euphorbiaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b3"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kepala Sesudah Melahirkan",
    disease_ing: "Headaches After Childbirth",
    name_ina: "Houglis",
    species: "Cryptocarya ciliata",
    family: "Araceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b4"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Aremenau",
    species: "Canarium sp",
    family: "Burseraceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b5"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Amoriga",
    species: "Tetraplasandra paucidens",
    family: "Araceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b6"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Gigi",
    disease_ing: "Tooth ache",
    name_ina: "Merindomoho",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (tunggal)",
    section_ing: "rhizome (single)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b7"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Dada",
    disease_ing: "Chest pain",
    name_ina: "Smeimahtarjaga",
    species: "Blumeodendron sp",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b8"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Debob",
    species: "Gnetum gnemon L.",
    family: "Gnetaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b9"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Kokobu",
    species: "Cycas cincinalis",
    family: "Cycadaceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ba"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Legakanin",
    species: "Xanthophyllum sp",
    family: "Polypodiaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7bb"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kuning",
    disease_ing: "Jaundice",
    name_ina: "Nyebi",
    species: "Colocasia sp",
    family: "Araceae",
    section_ina: "kulit batang (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7bc"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Aidaka Airisrik",
    species: "Cannarium sp",
    family: "Burseraceae",
    section_ina: "",
    section_ing: ""
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b2"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kepala Sesudah Melahirkan",
    disease_ing: "Headaches After Childbirth",
    name_ina: "Miroub",
    species: "Colocasia sp",
    family: "Araceae",
    section_ina: "umbi (tunggal)",
    section_ing: "bulbs (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7bf"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Bisul",
    disease_ing: "boil",
    name_ina: "Dulang - Dulang",
    species: "Rinicus communis L",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7be"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Telinga",
    disease_ing: "Earache",
    name_ina: "Aukesnobuhob",
    species: "Costus specious (Koenig.) J. E. Smith",
    family: "Zingiberaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c0"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Perut",
    disease_ing: "Stomach ache",
    name_ina: "Koitamous",
    species: "Cinamomum sp",
    family: "Lauraceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7b1"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Kepala",
    disease_ing: "Headache",
    name_ina: "Smeimahtarjaga",
    species: "Blumeodendron sp",
    family: "Euphorbiaceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7bd"),
    ethnic: "SOUGB",
    disease_ina: "Sakit Mata",
    disease_ing: "Sore eyes",
    name_ina: "Aidakanohu",
    species: "Clamus sp",
    family: "Arecaceae",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c3"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Digigit Ular",
    disease_ing: "bitten by Snake",
    name_ina: "Siala / Halas",
    species: "Languas galanga (L.) Stuntz",
    family: "",
    section_ina: "batang (tunggal)",
    section_ing: "rod (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ca9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c1"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Sibolu Gas - gas",
    species: "Bidens pilosa L",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b6c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c2"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Darah Tinggi",
    disease_ing: "High blood pressure",
    name_ina: "Sijangkat",
    species: "Sonchus arvensis L",
    family: "",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dce")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c4"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Kopi",
    species: "Coffea robusta Linden ex De Wild",
    family: "",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c5"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Batuk",
    disease_ing: "Cough",
    name_ina: "Raru Sibolga",
    species: "Hibicus tiliaceus L",
    family: "Malvaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c6"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Disentri",
    disease_ing: "Dysentery",
    name_ina: "Kumis Kucing",
    species: "Orthosiphon aristatus Benth",
    family: "Labiataceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d13")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c7"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Binjai",
    species: "Mangifera indica L",
    family: "Anacardiaceae",
    section_ina: "getah kulit (tunggal)",
    section_ing: "leather sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c8"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "-",
    species: "Tithonia diversifolia (Harmsley) A.Gray",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7c9"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Dulang - Dulang",
    species: "Rinicus communis L",
    family: "Euphorbiaceae",
    section_ina: "biji (tunggal)",
    section_ing: "seed (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ca"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Gatal",
    disease_ing: "Itchy",
    name_ina: "Gumbot",
    species: "Ficus padana Burm. f.",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7cb"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Haruaya",
    species: "Ficus benjamina L",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98c3f")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ce"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kudis",
    disease_ing: "Scabies",
    name_ina: "Pinang",
    species: "Areca cathecu L",
    family: "Arecaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7cf"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kena Sengatan Tawon",
    disease_ing: "Taxable Wasp Stings",
    name_ina: "Rimbang",
    species: "Solanum torvum Swartz",
    family: "Solanaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce413bc061d4cd98dcb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d0"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Binjai",
    species: "Mangifera indica L",
    family: "Anacardiaceae",
    section_ina: "getah kulit (tunggal)",
    section_ing: "leather sap (single)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cd9")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d1"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kurap",
    disease_ing: "Ringworm",
    name_ina: "Gumbot",
    species: "Ficus padana Burm. f.",
    family: "Moraceae",
    section_ina: "getah (tunggal)",
    section_ing: "sap (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d2"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Kamiri",
    species: "Aleurites moluccana (L.) Wild",
    family: "Euphorbiaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce213bc061d4cd98aff")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d3"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka",
    disease_ing: "wound",
    name_ina: "Nangke",
    species: "Artocarpus heterophyllus Lmk",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b4a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d4"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Katala",
    species: "Phrynium sp",
    family: "Maranthaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7cd"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Kadas",
    disease_ing: "Ringworm",
    name_ina: "Nangke",
    species: "Artocarpus heterophyllus Lmk",
    family: "Moraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b4a")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d5"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka Baru",
    disease_ing: "New wound",
    name_ina: "Pora - pora",
    species: "Callycarpa candicans (Burm.f.) Hochr",
    family: "Verbenaceae",
    section_ina: "daun muda (tunggal)",
    section_ing: "The young leaves (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d7"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka Kena Duri Rotan",
    disease_ing: "Taxable wound Duri Rattan",
    name_ina: "Sanduduk Harangan",
    species: "Melastoma affine D. Don",
    family: "Melastomaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d6"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Cacing",
    disease_ing: "Worm",
    name_ina: "Poteh",
    species: "Leucaena leucocephala (Lmk.) De Wit",
    family: "Fabaceae",
    section_ina: "buah (tunggal)",
    section_ing: "fruit (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98cb5")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d8"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Luka Kena Duri Rotan",
    disease_ing: "Taxable wound Duri Rattan",
    name_ina: "Terong",
    species: "Solanum nigrum L",
    family: "Solanaceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7cc"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Gatal Kena Bulu Ulat",
    disease_ing: "Got itchy caterpillar fur",
    name_ina: "Haba - Haba",
    species: "Erechtites valerianfolia (Wolf.) DC",
    family: "Asteraceae",
    section_ina: "daun (tunggal)",
    section_ing: "leaf (singular)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7d9"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Raru Sibolga",
    species: "Hibicus tiliaceus L",
    family: "Malvaceae",
    section_ina: "kulit kayu (tunggal)",
    section_ing: "bark (single)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7dd"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "cekala",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7de"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Cingkam",
    species: "Bischofia javanica BI.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7df"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7dc"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "cabe halus",
    species: "Capsicum annum L.",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7da"),
    ethnic: "BATAK ANGKOLA",
    disease_ina: "Malaria",
    disease_ing: "Malaria",
    name_ina: "Pepaya",
    species: "Carica papaya L",
    family: "Caricaceae",
    section_ina: "batang, daun (tunggal)",
    section_ing: "stem, leaf (singular)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98b8c")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e0"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Kelapa",
    species: "Cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e1"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Sereh",
    species: "Cymbopogon nardus L. Rendle.",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e2"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Tomat",
    species: "Lycopersicon esculentum Mill",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ccb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e3"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "cabe halus",
    species: "annum L.",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e4"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "cekala",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "",
    section_ing: "",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7db"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Bawang pre",
    species: "Allium odorum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e5"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Cingkam",
    species: "Bischofia javanica BI.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e8"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Sereh",
    species: "Cymbopogon nardus L. Rendle.",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e6"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ea"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Ubi kayu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7eb"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Bawang pre",
    species: "Allium odorum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ec"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "cabe halus",
    species: "Capsicum annum L.",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ed"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "cekala",
    species: "Nicolaia speciosa (BI.) Horan",
    family: "Zingiberaceae",
    section_ina: "biji (ramuan)",
    section_ing: "seeds (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98d02")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ee"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Cingkam",
    species: "Bischofia javanica BI.",
    family: "Euphorbiaceae",
    section_ina: "kulit batang (ramuan)",
    section_ing: "bark (herbs)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7ef"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Bawang pre",
    species: "Allium odorum L.",
    family: "Amaryllidaceae",
    section_ina: "umbi (ramuan)",
    section_ing: "tuber (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f0"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Jahe",
    species: "Zingiber officinale Roxb",
    family: "Zingiberaceae",
    section_ina: "rimpang (ramuan)",
    section_ing: "rhizome (herb)",
    refPlant: ObjectId("5cf8cce513bc061d4cd98e31")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f1"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Kelapa",
    species: "cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f2"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Tomat",
    species: "Lycopersicon esculentum Mill",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ccb")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f3"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Sereh",
    species: "Cymbopogon nardus L. Rendle.",
    family: "Poaceae",
    section_ina: "batang (ramuan)",
    section_ing: "rod (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bfd")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f4"),
    ethnic: "BATAK KARO",
    disease_ina: "Menambah Energi",
    disease_ing: "Adding Energy",
    name_ina: "Ubi kayu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e7"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Kelapa",
    species: "cocos nucifera L.",
    family: "Arecaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98bca")
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7f5"),
    ethnic: "BATAK KARO",
    disease_ina: "Maag",
    disease_ing: "Ulcer",
    name_ina: "Ubi kayu",
    species: "Manihot esculenta Crantz",
    family: "Euphorbiaceae",
    section_ina: "daun (ramuan)",
    section_ing: "leaves (herb)"
} ]);
db.getCollection("plantethnics").insert([ {
    _id: ObjectId("5cfcc01af5f9c6046a6aa7e9"),
    ethnic: "BATAK KARO",
    disease_ina: "Menghangatkan Badan",
    disease_ing: "warms Body",
    name_ina: "Tomat",
    species: "Lycopersicon esculentum Mill",
    family: "solanaceae",
    section_ina: "buah (ramuan)",
    section_ing: "fruit (herb)",
    refPlant: ObjectId("5cf8cce313bc061d4cd98ccb")
} ]);
