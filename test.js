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

 Date: 27/05/2023 09:13:49
*/


// ----------------------------
// Collection structure for test
// ----------------------------
db.getCollection("test").drop();
db.createCollection("test");

// ----------------------------
// Documents of test
// ----------------------------
db.getCollection("test").insert([ {
    _id: ObjectId("5d3d4ecc75e9009243adc03c"),
    idtype: "1",
    medname: "All"
} ]);
db.getCollection("test").insert([ {
    _id: ObjectId("5d3d4ecc75e9009243adc03b"),
    idtype: "3",
    medname: "Kampo"
} ]);
db.getCollection("test").insert([ {
    _id: ObjectId("5d3d4ecc75e9009243adc03a"),
    idtype: "2",
    medname: "Jamu"
} ]);
