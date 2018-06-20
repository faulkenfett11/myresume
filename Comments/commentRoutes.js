const express = require('express');
const router = express.Router();
const Words = require('./commentSchema');

router.get('/', (req, res) => {
	Words
		.find()
		.then(words => {
			res.status(202).json(words);
		})
		.catch(err => {
			res.status(500).json({msg: "Please try again"});
		});
})

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Words
		.findById(id)
		.then(word => {
			res.status(200).json(word);
		})
		.catch(err => {
			res.status(500).json({msg: "Please try again"});
		});
})

router.post('/', (req, res) => {
	const word = new Words(req.body);
  word
		.save()
		.then(newWord => {
			res.status(201).json(newWord);
		})
		.catch(err => {
			res.status(500).json({msg: "Please try again"});
		});
})

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Words
		.findByIdAndRemove(id)
		.then(removedWords => {
			res.status(200).json(removedWords);
		})
		.catch(err => {
			res.status(500).json({msg: "Please try again"});
		});
})

router.put('/:id', (req, res) => {
	const { id } = req.params;
	Words
		.findByIdAndUpdate(id, req.body)
		.then(updatedWords => {
			res.status(200).json(updatedWords);
		})
		.catch(err => {
			res.status(500).json({msg: "Please try again"});
		});
})

module.exports = router;