import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { toast } from "react-toastify";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

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
    console.log(equipment);

    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.insertedId) {
          toast.success('Product Added Successfully')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-10">
      <h1 className="w-3/4 mx-auto text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2">
        Add Equipment
      </h1>
      <div className="min-h-screen">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl rounded-none">
          <form
            className="card-bod grid grid-cols-3 gap-4 p-16"
            onSubmit={handleAddEquipment}
          >
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl ">Image</span>
              </label>
              <input
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
                type="text"
                placeholder="Processing Time (delivery time) "
                className="input input-bordered"
                name="time"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">
                Stock Status
                </span>
              </label>
              <input
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

            <div className="form-control mt-6 col-span-1 col-start-2">
              <button className="btn bg-purple-600 text-white text-xl font-medium">Add Equipment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
