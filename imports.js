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

 Date: 27/05/2023 09:04:34
*/


// ----------------------------
// Collection structure for imports
// ----------------------------
db.getCollection("imports").drop();
db.createCollection("imports");
db.getCollection("imports").createIndex({
    idimport: NumberInt("1")
}, {
    name: "idimport_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of imports
// ----------------------------
