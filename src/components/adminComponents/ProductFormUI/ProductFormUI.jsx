export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  const FormInput = (label, type, name, value) => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
      {errors[value] && <p className="error">{errors[value]}</p>}
    );
  };

  const FormTextArea = (label, name, value) => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <textarea name={name} value={value} onChange={onChange} required />
      </div>
      {errors[value] && <p className="error">{errors[value]}</p>}
    );
  };
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Add product</h2>
        <FormInput
          label="Name:"
          type="text"
          name="name"
          value={product.value}
        />
        <FormInput
          label="Price:"
          type="number"
          name="price"
          value={product.price}
        />
        <FormInput
          label="Category:"
          type="text"
          name="category"
          value={product.category}
        />
        <FormTextArea
          label="Description:"
          name="description"
          value={product.description}
        />
      </form>
    </section>
  );
};
