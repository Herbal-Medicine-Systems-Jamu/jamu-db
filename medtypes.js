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

 Date: 27/05/2023 09:11:42
*/


// ----------------------------
// Collection structure for medtypes
// ----------------------------
db.getCollection("medtypes").drop();
db.createCollection("medtypes");
db.getCollection("medtypes").createIndex({
    idtype: NumberInt("1")
}, {
    name: "idtype_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of medtypes
// ----------------------------
db.getCollection("medtypes").insert([ {
    _id: ObjectId("5cf8d60119cb4513ec6d9297"),
    idtype: "1",
    medname: "All",
    __v: NumberInt("0")
} ]);
db.getCollection("medtypes").insert([ {
    _id: ObjectId("5cf8d60119cb4513ec6d9299"),
    idtype: "3",
    medname: "Kampo",
    __v: NumberInt("0")
} ]);
db.getCollection("medtypes").insert([ {
    _id: ObjectId("5cf8d60119cb4513ec6d9298"),
    idtype: "2",
    medname: "Jamu",
    __v: NumberInt("0")
} ]);
