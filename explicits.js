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

 Date: 27/05/2023 09:03:39
*/


// ----------------------------
// Collection structure for explicits
// ----------------------------
db.getCollection("explicits").drop();
db.createCollection("explicits");

// ----------------------------
// Documents of explicits
// ----------------------------
db.getCollection("explicits").insert([ {
    _id: ObjectId("5d5e7dd194413265165fbbf8"),
    reference: [ ],
    firstName: "Feri",
    lastName: "Manoi",
    title: "Pengaruh Kehalusan Bahan Dan Lama Ekstraksi Terhadap Mutu Ekstrak Tempuyung (Sonchus arvensis L.)",
    datePublish: ISODate("2015-01-12T00:00:00.000Z"),
    publisher: "Jurnal Penelitian Pertanian Terapan Vol 15 (2): 156-161",
    citation: "",
    language: "indonesian",
    abstract: "Utilization of medicinal plants both for health and treatment increased at this time.\nNumber of Traditional Medicine Industry (IOT), Small Industries Traditional\nMedicine (IKOT) and Industrial Appliances (PIRT) is increasing. Thus the demand for\nraw materials is increasing, one of which is tempuyung. Good quality raw material in\nthe form of crude drugs and extracts need to be considered as related to the efficacy\nand quality of products for further processing. The study aims to determine the effect\nsize and the old material extraction to the yield and quality of the extract. Activity\nconsists of two sub-activities (1). How to drying (a) the sun covered with black cloth,\n(b) the sun combination of tools, and (c) drier. Sub-activities (2) extraction technique\nwhich consists of two factors: the fineness of materials (20,40 and 60 mesh) and the\nsecond factor is the length of the extraction (2, 4, and 6 hours). The study design using\nfactorial completely randomized design with three replications. Parameter observations\nconsisted of yield bulbs, phytochemical screening, quality characteristics, extract\nyield, and quality extracts. The results showed levels of water extract Sonchus arvensis\nL. greater than the levels of alcohol cider. Quality simplicia Sonchus arvensis L. dried\nusing a dryer is not different from the quality of the dried under the sun. Fineness of\nmaterials and time of extraction affects the yield of the extract Sonchus arvensis L\nKeywords: Subtlety material, extraction, quality",
    description: "Tanaman tempuyung mengandung unsur mineral, antara lain adalah silika, kalium, magnesium, natrium, dan senyawa organik seperti flavonoid (kaempferol, luteolin-7-Oglukosida, danapigenin-7-O-glukosida), kumarin (skepoletin), taraksasterol, inositol, serta asam fenolat (sinamat,kumarat, dan vanilat). Kandungan flavonoid total di dalam daun tempuyung sebesar 0.104% Ekstrak tempuyung dapat memecah batu ginjal dan batu saluran kencing. Flavonoid terkandung di dalam S. arvensis yang diduga kuat sebagai senyawa bioaktif antikanker. Kadar sari air tempuyung lebih tinggi dibandingkan kadar sari alkohol. Mutu simplisia tempuyung antara pengering matahari dan alat tidak berbeda kadarnya. Lama ekstraksi berpengaruh terhadap rendemen ekstrak demikian juga dengan ukuran partikel bahan.",
    file: "2109d2f6240218978911f7cbac328c032019-08-22T11-34-41.444ZEkstrak Tempuyung (Sonchus arvensis L.) .pdf",
    user_id: ObjectId("5cbaad6e7a954b0c58e0aeaf"),
    created_at: ISODate("2019-08-22T11:34:41.453Z"),
    updated_at: ISODate("2019-09-26T06:24:42.608Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("explicits").insert([ {
    _id: ObjectId("5d5e801294413265165fbbf9"),
    reference: [ ],
    firstName: "Eris",
    lastName: "Septiana et al",
    title: "AKTIVITAS PENGHAMBATAN POLIMERISASI HEME EKSTRAK DAUN SEMBUNG (Blumea balsamifera) SEBAGAI ANTIMALARIA",
    datePublish: ISODate("2016-09-28T00:00:00.000Z"),
    publisher: "Bul.Littro. Volume 28. Nomor 1, Mei 2017. DOI: http://dx.doi.org/10.21082/bullittro.v28n1.2017.29-36",
    citation: "",
    language: "indonesian",
    abstract: "Penyakit malaria disebabkan oleh parasit Plasmodium yang dalam siklusnya akan mendegradasi hemeoglobin menjadi asam amino dan heme bebas yang toksik untuk parasit. Untuk menetralkan toksisitas heme bebas, parasit akan mengubahnya menjadi hemeozoin melalui proses polimerisasi heme. Proses ini sangat penting dalam siklus hidup parasit sehingga dapat dijadikan sebagai target obat antimalaria. Daun sembung dilaporkan mempunyai aktivitas antimalaria baik secara in vitro maupun in vivo, tetapi mekanismenya belum pernah dilaporkan. Penelitian bertujuan untuk mengetahui aktivitas penghambatan polimerisasi heme ekstrak daun sembung dan golongan senyawa yang terdapat pada ekstrak dengan aktivitas penghambatan terbaik. Daun sembung diekstrak dengan pelarut n-heksan, etil asetat, dan etanol 70%. Uji antimalaria in vitro dilakukan dengan menggunakan metode penghambatan polimerisasi heme. Ekstrak dengan aktivitas penghambatan terbaik diukur nilai IC50 dan dilanjutkan dengan skrining fitokimia. Hasil penelitian menunjukkan ekstrak n-heksan, etil asetat, dan etanol 70% mempunyai aktivitas penghambatan polimerisasi heme pada konsentrasi 1 mg ml-1 masing-masing sebesar 11,28; 26,26; dan 56,88%. Nilai IC50 ekstrak etanol 70% sebesar 0,978 mg ml-1. Ketiga ekstrak memiliki aktivitas penghambatan polimerisasi heme dan ekstrak etanol 70% memiliki aktivitas tertinggi. Skrining fitokimia menunjukkan daun sembung yang diekstrak dengan etanol 70% mengandung golongan senyawa flavonoid, triterpenoid, kuinon, tanin, dan saponin.\nKata kunci: Blumea balsamifera, antimalaria, in vitro, polimerisasi heme, skrining fitokimia",
    description: "Daun sembung merupakan salah satu daun untuk obat/ jamu yang mempunyai aktivitas anti malaria baik secra in vitro maupun in vivo. Penyakit malaria disebabkan oleh parasit Plasmodium yang dalam siklusnya akan mendegradasi hemeoglobin menjadi asam amino dan heme bebas yang toksik untuk parasit. Untuk menetralkan toksisitas heme bebas, parasit akan mengubahnya menjadi hemeozoin melalui proses polimerisasi heme. Proses ini sangat penting dalam siklus hidup parasit sehingga dapat dijadikan sebagai target obat antimalaria  Ekstrak daun sembug memiliki aktivitas penghambatan polimerisasi heme dengan aktivitas tertinggi pada ekstrak etanol 70% dengan kandungan senyawa kimia flavonoid, steroid/ttiterpenoid, tannin, kuinion, dan saponin",
    file: "2452958d6f828e3e3ea22d22f0cde6f92019-08-22T11-44-18.798ZDaun Sembung Sebagai Obat Malaria.pdf",
    user_id: ObjectId("5cbaad6e7a954b0c58e0aeaf"),
    created_at: ISODate("2019-08-22T11:44:18.804Z"),
    updated_at: ISODate("2019-08-22T11:44:18.804Z"),
    __v: NumberInt("0")
} ]);
