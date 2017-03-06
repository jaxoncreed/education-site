export default function(req, res) {
	res.send({
		"_id": "1",
		"author": "Joseph",
		"isHomework": true,
		"isReview": false,
		"title": "Homwework 5",
		"school": "Georgia Institute of Technology",
		"subject": "CS",
		"classNumber": 1301,
		"className": "Introduction to CS",
		"professor": "Moolah Boolah",
		"semester":  2,
		"video": "1",
		"questions": [
			{
				"question": "How many fruits are there in the tree?",
				"timeStart": "",
				"timeEnd": ""
			}
		],
		"tags": ["Thing"]
	})
}
