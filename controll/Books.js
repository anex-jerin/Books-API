const bookSchema = require("../databaseSchema/schema");


const getBooks = async (req, res) => {
  const  {name}  = req.query;
  console.log(name);
  const object = {};
  if (name){
  object.name = { $regex: name, $options: 'i' };
  }
  console.log(object);
  const book = await bookSchema.find(object);
  res.json(book);
};

const addBooks = async (req, res) => {
  try {
    const book = await bookSchema.create(req.body);
    res.json(book);
  } catch (error) {
    res.json(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const book = await bookSchema.findByIdAndDelete({ _id: taskId });
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {  addBooks, deleteBook, getBooks };
