var MongoClient= require('mongodb').MongoClient, assert = require('assert');

//connection url
var url = 'mongodb://localhost:27017/myproject';
//use connect method to coonect to the server
MongoClient.connect(url, function(err, db)
{
	assert.equal(null, err);
	console.log("Connected correctly to server");
	insertDocuments(db, function(){ db.close();});
	
});
var insertDocuments = function(db,callback)
{
        var collection = db.collection('documents');
        collection.insert([{a:1},{a:2},{a:3}], function(err,result)
        {
                assert.equal(err,null);
                assert.equal(3, result.result.n);
                assert.equal(3, result.ops.length);
                console.log("Inserted3 documents into the documentcollection");
                callback(result);
        });
}

