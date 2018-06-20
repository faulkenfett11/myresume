const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const mongoose = require('mongoose');
const commentRoutes = require('./Comments/commentRoutes');

const server = express();

server.use(express.json())
server.use(cors({}));
server.use(helmet());
server.use('/comments', commentRoutes);

mongoose
	.connect("mongodb://faulk:fau11jus@ds163530.mlab.com:63530/justin_faulkenberry")
	.then(() => console.log('==connected=='))
	.catch(() => console.log('==error connecting=='))

server.get('/', (req, res) => {
	res.json('==Server is connected==')
})

const port = process.env.PORT || 3333;
server.listen(port, err => {
	if (err) console.log(err);
	console.log(`==Running on ${port}==`);
});