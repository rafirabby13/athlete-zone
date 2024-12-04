import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { useLoaderData } from "react-router-dom";

const UpdateEquipment = () => {
    const {user } = useContext(AuthContext)

const data = useLoaderData()
// console.log(data);
    const handleAddEquipment=(e)=>{
        e.preventDefault()
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

        const equipment = {photo,name,category,description,price,rating,customization,time,stock,email,displayName}
        console.log(equipment);
        fetch(`http://localhost:5000/equip/${data._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(equipment)
        })
        .then(res=> res.json())
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

        
    }
    return (
        <div className="min-h-screen">
           <div className="card bg-base-100 w-full  shrink-0 shadow-2xl rounded-none">
        <form className="card-bod grid grid-cols-2 gap-4 p-16" onSubmit={handleAddEquipment}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered"
              name="photo"
              defaultValue={data.photo}
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
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
              <span className="label-text">Category Name</span>
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
              <span className="label-text">Description</span>
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
              <span className="label-text">Price</span>
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
              <span className="label-text">Rating</span>
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
              <span className="label-text">Customization </span>
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
              <span className="label-text">
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select defaultValue={data.stock.value}  name="stock" className="select select-bordered w-full ">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
              User Email
              </span>
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
              <span className="label-text">
              User Name
              </span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered"
              name="displayName"
              
            />
          </div>

          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">Update Equipment</button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default UpdateEquipment;