const Router = require("express");
const bookRouter = Router();

const addBook = require("../controllers/addBook")
const listBooks = require("../controllers/listBooks")
const updateAuthor = require("../controllers/updateAuthor")
const updateGenre = require("../controllers/updateGenre")
const delBook = require("../controllers/delBook")

// Add book [CREATE]
bookRouter.post("/addBook", addBook);

// List books [READ]
bookRouter.get("/listBooks", listBooks);

// Update author [UPDATE]
bookRouter.put("/updateAuthor", updateAuthor)

// Update genre [UPDATE]
bookRouter.put("/updateGenre", updateGenre)

// Remove book [DELETE]
bookRouter.delete("/delBook", delBook)

module.exports = bookRouter;