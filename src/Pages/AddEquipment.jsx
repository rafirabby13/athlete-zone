/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const stock = form.stock.value;

    const email = form.email.value;
    const displayName = form.displayName.value;

    const equipment = {
      photo,
      name,
      category,
      description,
      price,
      rating,
      customization,
      time,
      stock,
      email,
      displayName,
    };
    // console.log(equipment);

    fetch("https://athlete-zone-server.vercel.app/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.insertedId) {
          toast.success("Product Added Successfully");
          navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="py-10 md:max-w-[85%] mx-auto mt-16">
      <Helmet>
        <title>Add Equipment | AthleteZone</title>
      </Helmet>
      <h1 className=" text-xl md:text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2 lg:mt-20">
        Add Equipment
      </h1>
      <div className="min-h-screen ">
        <div className="card bg-base-100 addEquipment w-full p-2  shrink-0 shadow-2xl rounded-none">
          <form
            className="card-bod md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-16"
            onSubmit={handleAddEquipment}
          >
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl ">Image</span>
              </label>
              <input
                required
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                name="photo"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Item Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Item Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Category Name"
                className="input input-bordered"
                name="category"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Description</span>
              </label>
              <input
                required
                type="text"
                placeholder="Description"
                className="input input-bordered"
                name="description"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                required
                type="text"
                placeholder="Price"
                className="input input-bordered"
                name="price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Rating</span>
              </label>
              <input
                required
                type="text"
                placeholder="Rating Out Of 5"
                className="input input-bordered"
                name="rating"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Customization </span>
              </label>
              <input
                required
                type="text"
                placeholder="Customization "
                className="input input-bordered"
                name="customization"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">
                  Processing Time (delivery time){" "}
                </span>
              </label>
              <input
                required
                type="text"
                placeholder="Processing Time (delivery time) "
                className="input input-bordered"
                name="time"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Stock Status</span>
              </label>
              <input
                required
                type="text"
                placeholder="Available product quantity "
                className="input input-bordered"
                name="stock"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">User Email</span>
              </label>
              <input
                required
                type="text"
                value={user?.email}
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">User Name</span>
              </label>
              <input
                required
                type="text"
                value={user?.displayName}
                className="input input-bordered"
                name="displayName"
              />
            </div>

            <div className="form-control my-6 lg:col-span-1 lg:col-start-2 md:col-start-1 w-fit mx-auto">
              <button className="btn bg-[#439A97] text-white text-xl font-medium">
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
