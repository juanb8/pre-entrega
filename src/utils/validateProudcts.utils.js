export const validateProduct = (product, fileRequired = true) => {
  const errors = {};
  if (!product.name.trim()) {
    errors.name = "Name is required";
  }
  if (!product.price || product.price < 0) {
    errors.price = "Price must be greater than cero";
  }
  if (!product.category.trim()) {
    errors.category = "Category is required";
  }
  if (fileRequired && !product.file) {
    errors.file = "Image required";
  }
  return errors;
}
