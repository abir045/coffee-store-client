import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //send data to server and database
    fetch("https://coffee-store-server-one-bice.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="name"
                id=""
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="quantity"
                id=""
                placeholder="Available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="supplier"
                id=""
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="taste"
                id=""
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="category"
                id=""
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label htmlFor="" className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="details"
                id=""
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form photo url row */}
        </div>
        <div className="form-control mb-8  w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label htmlFor="" className="input-group">
            {/* <span>Name</span> */}
            <input
              type="text"
              name="photo"
              id=""
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
