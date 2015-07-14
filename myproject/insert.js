var insertDocuments = function(db,callback)
{
	var collection = db.collection('documents');
	collection.insert([{a:1},{a:2},{a:3}], function(err,result)
	{
		asser.equal(err,null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted3 documents into the documentcollection");
		callback(result);
	});
}
