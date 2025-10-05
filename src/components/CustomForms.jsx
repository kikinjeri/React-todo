const CustomForms = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <h1>Mwihaki George</h1>
      </div>
    </form>
  );
};

export default CustomForms;
