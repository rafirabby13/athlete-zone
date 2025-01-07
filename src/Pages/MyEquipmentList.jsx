/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useLocation } from "react-router-dom";
import MyEquipmentListCard from "../components/MyEquipmentListCard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const { user, dataLoading, setDataLoading } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setDataLoading(true);

    fetch(`https://athlete-zone-server.vercel.app/equip/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataLoading(false);
        setData(data);
      });
  }, [user, setDataLoading]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://athlete-zone-server.vercel.app/equipment/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            // console.log(res);
            if (res.deletedCount > 0) {
              const remaining = data.filter((dt) => dt._id != id);
              setData(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            // console.log(err.message);
          });
      }
    });
  };
  // console.log(data);
  return (
    <div className="lg:max-w[85%] mx-auto lg:mt-40 mt-20">
      {dataLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-lg mx-auto"></span>
        </div>
      ) : data.length == 0 ? (
        <div className="min-h-screen lg:mt-48">
          <h1 className="text-center p-5 w-fit mx-auto font-bold text-white text-4xl bg-[#439A97]">
            You Have not added any data.{" "}
            <Link to="/addEquipment" className="text-[#7b029a] underline">
              Add data
            </Link>{" "}
          </h1>
        </div>
      ) : (
        // <MyEquipmentListCard
        //   key={myEquipments._id}
        //   myEquipments={myEquipments}
        //   handleDelete={handleDelete}
        // ></MyEquipmentListCard>
        <div className="overflow-x-auto w-full p-5 ">
          <table className="table w-full border border-gray-200 max-w-[85%] mx-auto">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3"></th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((tutorial) => (
                <tr key={tutorial._id} className="">
                  <td className="p-3">
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img
                          src={
                            tutorial.photo ||
                            "https://via.placeholder.com/100?text=No+Image"
                          }
                          alt="Tutorial"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{tutorial.name}</td>
                  <td className="p-3">${tutorial.price}</td>
                  <td className="p-3">{tutorial.review}</td>
                  <td className="p-3 flex gap-2">
                    <Link to={`/updateEquipment/${tutorial._id}`}>
                      <button className="btn bg-[#439A97] text-white btn-sm">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(tutorial._id)}
                      className="btn bg-[#439A97] text-white btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEquipmentList;
