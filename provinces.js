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

 Date: 27/05/2023 09:12:55
*/


// ----------------------------
// Collection structure for provinces
// ----------------------------
db.getCollection("provinces").drop();
db.createCollection("provinces");
db.getCollection("provinces").createIndex({
    province_id: NumberInt("1")
}, {
    name: "province_id_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of provinces
// ----------------------------
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a509b"),
    province_id: "13",
    province_name: "Sumatera Barat",
    province_name_abbr: "Sumbar",
    province_name_id: "Sumatera Barat",
    province_name_en: "West Sumatera",
    province_capital_city_id: "1371",
    iso_code: "ID-SB",
    iso_name: "Sumatera Barat",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-0.953730",
    province_lon: "100.351990"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a509f"),
    province_id: "15",
    province_name: "Jambi",
    province_name_abbr: "Jambi",
    province_name_id: "Jambi",
    province_name_en: "Jambi",
    province_capital_city_id: "1571",
    iso_code: "ID-JA",
    iso_name: "Jambi",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-1.485180",
    province_lon: "102.438049"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a0"),
    province_id: "17",
    province_name: "Bengkulu",
    province_name_abbr: "Bengkulu",
    province_name_id: "Bengkulu",
    province_name_en: "Bengkulu",
    province_capital_city_id: "1771",
    iso_code: "ID-BE",
    iso_name: "Bengkulu",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-3.800640",
    province_lon: "102.256203"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a509e"),
    province_id: "12",
    province_name: "Sumatera Utara",
    province_name_abbr: "Sumut",
    province_name_id: "Sumatera Utara",
    province_name_en: "North Sumatera",
    province_capital_city_id: "1275",
    iso_code: "ID-SU",
    iso_name: "Sumatera Utara",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "3.585242",
    province_lon: "98.675598"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a1"),
    province_id: "16",
    province_name: "Sumatera Selatan",
    province_name_abbr: "Sumsel",
    province_name_id: "Sumatera Selatan",
    province_name_en: "South Sumatera",
    province_capital_city_id: "1671",
    iso_code: "ID-SS",
    iso_name: "Sumatera Selatan",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-2.991100",
    province_lon: "104.756729"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a509c"),
    province_id: "11",
    province_name: "Aceh",
    province_name_abbr: "NAD",
    province_name_id: "Nanggroe Aceh Darussalam",
    province_name_en: "Nanggroe Aceh Darussalam",
    province_capital_city_id: "1171",
    iso_code: "ID-AC",
    iso_name: "Aceh",
    iso_type: "autonomous province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "4.695135",
    province_lon: "96.749397"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a2"),
    province_id: "18",
    province_name: "Lampung",
    province_name_abbr: "Lampung",
    province_name_id: "Lampung",
    province_name_en: "Lampung",
    province_capital_city_id: "1871",
    iso_code: "ID-LA",
    iso_name: "Lampung",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-4.558580",
    province_lon: "105.406799"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a3"),
    province_id: "19",
    province_name: "Kepulauan Bangka Belitung",
    province_name_abbr: "Babel",
    province_name_id: "Kepulauan Bangka Belitung",
    province_name_en: "Bangka Belitung Islands",
    province_capital_city_id: "1971",
    iso_code: "ID-BB",
    iso_name: "Bangka Belitung",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "-2.741050",
    province_lon: "106.440582"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a4"),
    province_id: "21",
    province_name: "Kepulauan Riau",
    province_name_abbr: "Kepri",
    province_name_id: "Kepulauan Riau",
    province_name_en: "Riau Islands",
    province_capital_city_id: "2172",
    iso_code: "ID-KR",
    iso_name: "Kepulauan Riau",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "1.082828",
    province_lon: "104.030449"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a5"),
    province_id: "31",
    province_name: "DKI Jakarta",
    province_name_abbr: "DKI",
    province_name_id: "DKI Jakarta",
    province_name_en: "Special Capital Region of Jakarta",
    province_capital_city_id: "3173",
    iso_code: "ID-JK",
    iso_name: "Jakarta Raya",
    iso_type: "special district",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-6.211540",
    province_lon: "106.845169"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a509d"),
    province_id: "14",
    province_name: "Riau",
    province_name_abbr: "Riau",
    province_name_id: "Riau",
    province_name_en: "Riau",
    province_capital_city_id: "1471",
    iso_code: "ID-RI",
    iso_name: "Riau",
    iso_type: "province",
    iso_geounit: "SM",
    timezone: "7",
    province_lat: "0.293347",
    province_lon: "101.706818"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a6"),
    province_id: "34",
    province_name: "DI Yogyakarta",
    province_name_abbr: "DIY",
    province_name_id: "DI Yogyakarta",
    province_name_en: "Yogyakarta Special Region",
    province_capital_city_id: "3471",
    iso_code: "ID-YO",
    iso_name: "Yogyakarta",
    iso_type: "special region",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-7.797220",
    province_lon: "110.368790"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a7"),
    province_id: "35",
    province_name: "Jawa Timur",
    province_name_abbr: "Jatim",
    province_name_id: "Jawa Timur",
    province_name_en: "East Java",
    province_capital_city_id: "3578",
    iso_code: "ID-JI",
    iso_name: "Jawa Timur",
    iso_type: "province",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-7.289160",
    province_lon: "112.734390"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a8"),
    province_id: "36",
    province_name: "Banten",
    province_name_abbr: "Banten",
    province_name_id: "Banten",
    province_name_en: "Banten",
    province_capital_city_id: "3673",
    iso_code: "ID-BT",
    iso_name: "Banten",
    iso_type: "province",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-6.120090",
    province_lon: "106.150291"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50a9"),
    province_id: "52",
    province_name: "Nusa Tenggara Barat",
    province_name_abbr: "NTB",
    province_name_id: "Nusa Tenggara Barat",
    province_name_en: "West Nusa Tenggara",
    province_capital_city_id: "5271",
    iso_code: "ID-NB",
    iso_name: "Nusa Tenggara Barat",
    iso_type: "province",
    iso_geounit: "NU",
    timezone: "8",
    province_lat: "-8.583330",
    province_lon: "116.116661"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50aa"),
    province_id: "32",
    province_name: "Jawa Barat",
    province_name_abbr: "Jabar",
    province_name_id: "Jawa Barat",
    province_name_en: "West Java",
    province_capital_city_id: "3273",
    iso_code: "ID-JB",
    iso_name: "Jawa Barat",
    iso_type: "province",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-6.914740",
    province_lon: "107.609810"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50ab"),
    province_id: "33",
    province_name: "Jawa Tengah",
    province_name_abbr: "Jateng",
    province_name_id: "Jawa Tengah",
    province_name_en: "Central Java",
    province_capital_city_id: "3374",
    iso_code: "ID-JT",
    iso_name: "Jawa Tengah",
    iso_type: "province",
    iso_geounit: "JW",
    timezone: "7",
    province_lat: "-6.966660",
    province_lon: "110.416656"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50ac"),
    province_id: "51",
    province_name: "Bali",
    province_name_abbr: "Bali",
    province_name_id: "Bali",
    province_name_en: "Bali",
    province_capital_city_id: "5171",
    iso_code: "ID-BA",
    iso_name: "Bali",
    iso_type: "province",
    iso_geounit: "NU",
    timezone: "8",
    province_lat: "-8.656290",
    province_lon: "115.222092"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50ad"),
    province_id: "53",
    province_name: "Nusa Tenggara Timur",
    province_name_abbr: "NTT",
    province_name_id: "Nusa Tenggara Timur",
    province_name_en: "East Nusa Tenggara",
    province_capital_city_id: "5371",
    iso_code: "ID-NT",
    iso_name: "Nusa Tenggara Timur",
    iso_type: "province",
    iso_geounit: "NU",
    timezone: "8",
    province_lat: "-10.172400",
    province_lon: "123.577904"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50af"),
    province_id: "63",
    province_name: "Kalimantan Selatan",
    province_name_abbr: "Kalsel",
    province_name_id: "Kalimantan Selatan",
    province_name_en: "South Kalimantan",
    province_capital_city_id: "6371",
    iso_code: "ID-KS",
    iso_name: "Kalimantan Selatan",
    iso_type: "province",
    iso_geounit: "KA",
    timezone: "8",
    province_lat: "-3.328490",
    province_lon: "114.589203"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b0"),
    province_id: "62",
    province_name: "Kalimantan Tengah",
    province_name_abbr: "Kalteng",
    province_name_id: "Kalimantan Tengah",
    province_name_en: "Central Kalimantan",
    province_capital_city_id: "6271",
    iso_code: "ID-KT",
    iso_name: "Kalimantan Tengah",
    iso_type: "province",
    iso_geounit: "KA",
    timezone: "7",
    province_lat: "-2.226660",
    province_lon: "113.944160"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b1"),
    province_id: "65",
    province_name: "Kalimantan Utara",
    province_name_abbr: "Kaltara",
    province_name_id: "Kalimantan Utara",
    province_name_en: "North Kalimantan",
    province_capital_city_id: "6571",
    iso_code: "ID-KU",
    iso_name: "Kalimantan Utara",
    iso_type: "province",
    iso_geounit: "KA",
    timezone: "8",
    province_lat: "2.850000",
    province_lon: "117.383331"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50ae"),
    province_id: "61",
    province_name: "Kalimantan Barat",
    province_name_abbr: "Kalbar",
    province_name_id: "Kalimantan Barat",
    province_name_en: "West Kalimantan",
    province_capital_city_id: "6171",
    iso_code: "ID-KB",
    iso_name: "Kalimantan Barat",
    iso_type: "province",
    iso_geounit: "KA",
    timezone: "7",
    province_lat: "-0.022520",
    province_lon: "109.330299"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b2"),
    province_id: "64",
    province_name: "Kalimantan Timur",
    province_name_abbr: "Kaltim",
    province_name_id: "Kalimantan Timur",
    province_name_en: "East Kalimantan",
    province_capital_city_id: "6472",
    iso_code: "ID-KI",
    iso_name: "Kalimantan Timur",
    iso_type: "province",
    iso_geounit: "KA",
    timezone: "8",
    province_lat: "-1.265380",
    province_lon: "116.831200"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b5"),
    province_id: "76",
    province_name: "Sulawesi Barat",
    province_name_abbr: "Sulbar",
    province_name_id: "Sulawesi Barat",
    province_name_en: "West Sulawesi",
    province_capital_city_id: "7604",
    iso_code: "ID-SR",
    iso_name: "Sulawesi Barat",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "-2.699190",
    province_lon: "118.862106"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b3"),
    province_id: "71",
    province_name: "Sulawesi Utara",
    province_name_abbr: "Sulut",
    province_name_id: "Sulawesi Utara",
    province_name_en: "Nourth Sulawesi",
    province_capital_city_id: "7171",
    iso_code: "ID-SA",
    iso_name: "Sulawesi Utara",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "1.493056",
    province_lon: "124.841263"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b6"),
    province_id: "73",
    province_name: "Sulawesi Selatan",
    province_name_abbr: "Sulsel",
    province_name_id: "Sulawesi Selatan",
    province_name_en: "South Sulawesi",
    province_capital_city_id: "7371",
    iso_code: "ID-SN",
    iso_name: "Sulawesi Selatan",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "-5.133330",
    province_lon: "119.416656"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b7"),
    province_id: "81",
    province_name: "Maluku",
    province_name_abbr: "Maluku",
    province_name_id: "Maluku",
    province_name_en: "Maluku",
    province_capital_city_id: "8171",
    iso_code: "ID-MA",
    iso_name: "Maluku",
    iso_type: "province",
    iso_geounit: "ML",
    timezone: "9",
    province_lat: "-3.656070",
    province_lon: "128.166412"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b9"),
    province_id: "75",
    province_name: "Gorontalo",
    province_name_abbr: "Gorontalo",
    province_name_id: "Gorontalo",
    province_name_en: "Gorontalo",
    province_capital_city_id: "7571",
    iso_code: "ID-GO",
    iso_name: "Gorontalo",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "0.552512",
    province_lon: "123.065491"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b8"),
    province_id: "74",
    province_name: "Sulawesi Tenggara",
    province_name_abbr: "Sultra",
    province_name_id: "Sulawesi Tenggara",
    province_name_en: "South East Sulawesi",
    province_capital_city_id: "7471",
    iso_code: "ID-SG",
    iso_name: "Sulawesi Tenggara",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "-3.967480",
    province_lon: "122.594704"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50ba"),
    province_id: "82",
    province_name: "Maluku Utara",
    province_name_abbr: "Malut",
    province_name_id: "Maluku Utara",
    province_name_en: "North Maluku",
    province_capital_city_id: "8271",
    iso_code: "ID-MU",
    iso_name: "Maluku Utara",
    iso_type: "province",
    iso_geounit: "ML",
    timezone: "9",
    province_lat: "0.788068",
    province_lon: "127.377151"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50bb"),
    province_id: "91",
    province_name: "Papua Barat",
    province_name_abbr: "Papua Barat",
    province_name_id: "Papua Barat",
    province_name_en: "West Papua",
    province_capital_city_id: "9105",
    iso_code: "ID-PB",
    iso_name: "Papua Barat",
    iso_type: "province",
    iso_geounit: "IJ",
    timezone: "9",
    province_lat: "-0.861520",
    province_lon: "134.078796"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50b4"),
    province_id: "72",
    province_name: "Sulawesi Tengah",
    province_name_abbr: "Sulteng",
    province_name_id: "Sulawesi Tengah",
    province_name_en: "Central Sulawesi",
    province_capital_city_id: "7271",
    iso_code: "ID-ST",
    iso_name: "Sulawesi Tengah",
    iso_type: "province",
    iso_geounit: "SL",
    timezone: "8",
    province_lat: "-0.898580",
    province_lon: "119.850601"
} ]);
db.getCollection("provinces").insert([ {
    _id: ObjectId("5cf9013cf5f9c6046a6a50bc"),
    province_id: "94",
    province_name: "Papua",
    province_name_abbr: "Papua",
    province_name_id: "Papua",
    province_name_en: "Papua",
    province_capital_city_id: "9471",
    iso_code: "ID-PA",
    iso_name: "Papua",
    iso_type: "province",
    iso_geounit: "IJ",
    timezone: "9",
    province_lat: "-2.541360",
    province_lon: "140.706390"
} ]);
