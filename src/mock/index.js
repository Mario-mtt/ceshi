let Mock = require("mockjs");
Mock.mock("/home/data","get",require("./data/mydata.json"));
Mock.mock("/medical/data","get",require("./data/medicaldata.json"));