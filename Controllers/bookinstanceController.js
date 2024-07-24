const BookInstance = require("../Models/bookinstance");
const asyncHandler = require("express-async-handler");

// // Display list of all Book instances.
// exports.bookinstance_list = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: List of book instances");
// });
// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
});


// Display detail page for a specific Book instance.
// exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
//   res.send(`NOT IMPLEMENTED: Bookinstance detail: ${req.params.id}`);
// });

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
    .populate("book")
    .exec();

  if (bookInstance === null) {
    // No results.
    const err = new Error("Book copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("bookinstance_detail", {
    title: "Book:",
    bookinstance: bookInstance,
  });
});


// Display Book instance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance create GET");
});

// Handle Book instance create on POST.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance create POST");
});

// Display Book instance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance delete GET");
});

// Handle Book instance delete on POST.
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance delete POST");
});

// Display Book instance update form on GET.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance update GET");
});

// Handle Book instance update on POST.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance update POST");
});