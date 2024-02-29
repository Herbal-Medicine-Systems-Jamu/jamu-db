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

 Date: 27/05/2023 09:14:11
*/


// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5cbaad6e7a954b0c58e0aeaf"),
    roles: [
        "admin"
    ],
    isVerified: true,
    email: "admin@gmail.com",
    password: "$2a$10$cSc5klZ3eqQKBdzJs95vmena1TVY5Qct9F1LsthGdaQFYxDsdTK/y",
    name: "Andhika Kartika Rahayu",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5cf8e1bb7caf4f123cd879c5"),
    roles: [
        "user"
    ],
    isVerified: true,
    email: "ankarayu@gmail.com",
    password: "$2a$10$lRVCJxT31rGdBwCOuL2EXu9pOCM.7SXjqk8dpq9qJmBrp62qf1BOS",
    name: "Andhika Kartika Rahayua1",
    __v: NumberInt("0")
} ]);
