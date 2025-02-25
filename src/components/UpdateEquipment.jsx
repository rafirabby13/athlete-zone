/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdateEquipment = () => {
  const { user } = useContext(AuthContext);
const navigate = useNavigate()
  const data = useLoaderData();
  // console.log(data);
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
    fetch(`https://athlete-zone-server.vercel.app/equip/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.modifiedCount > 0) {
          toast.success("Updated Successfully");
          navigate('/')
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="py-10 md:max-w-[85%] mx-auto mt-16 lg:mt-0" >
       <Helmet>
           <title>Update Equipment | AthleteZone</title>
      </Helmet>
      <h1 className=" lg:mt-48 mx-auto text-xl md:text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2">
        Update Equipment
      </h1>
      <div className="min-h-screen text-black">
        <div className="card p-2 update w-full   shrink-0 shadow-2xl rounded-none">
          <form
            className="card-bod md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-16"
            onSubmit={handleAddEquipment}
          >
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered  placeholder-black"
                name="photo"
                defaultValue={data.photo}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered"
                name="name"
                defaultValue={data.name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category Name</span>
              </label>
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered"
                name="category"
                defaultValue={data.category}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                name="description"
                defaultValue={data.description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                defaultValue={data.price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                name="rating"
                defaultValue={data.rating}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Customization </span>
              </label>
              <input
                type="text"
                placeholder="Customization "
                className="input input-bordered"
                name="customization"
                defaultValue={data.customization}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">
                  Processing Time (delivery time){" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Processing Time (delivery time) "
                className="input input-bordered"
                name="time"
                defaultValue={data.time}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl ">Stock Status</span>
              </label>
              <input
                type="text"
                placeholder="Available product quantity "
                className="input input-bordered"
                name="stock"
                defaultValue={data?.stock}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">User Email</span>
              </label>
              <input
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
                type="text"
                value={user?.displayName}
                className="input input-bordered"
                name="displayName"
              />
            </div>

            <div className="form-control my-6 lg:col-span-1 lg:col-start-2 md:col-start-1 w-fit mx-auto">
              <button className="btn bg-[#439A97] text-white text-xl font-medium">
                Update Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEquipment;
