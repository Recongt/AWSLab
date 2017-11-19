//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	var ec2 = new AWS.EC2();
    var params = {};
    ec2.describeInstances(params, function (err, data) {
        if (err) {

            console.log(err);

        } else {

            params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};

            ec2.putObject(params, function(err, data) {

                if (err) {

                    console.log(err)

                } else {

                    console.log("Successfully uploaded data to myBucket/myKey");

                }

    })

	
}

exports.lab = task