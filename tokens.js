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

 Date: 27/05/2023 09:14:02
*/


// ----------------------------
// Collection structure for tokens
// ----------------------------
db.getCollection("tokens").drop();
db.createCollection("tokens");
db.getCollection("tokens").createIndex({
    createdAt: NumberInt("1")
}, {
    name: "createdAt_1",
    background: true,
    expireAfterSeconds: NumberInt("43200")
});

// ----------------------------
// Documents of tokens
// ----------------------------
