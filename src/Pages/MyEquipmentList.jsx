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
    <div>
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 z-0 min-h-screen py-10 md:py-20 md:pb-44 lg:px-20 lg:mt-48">
          {data?.map((myEquipments) => (
            <MyEquipmentListCard
              key={myEquipments._id}
              myEquipments={myEquipments}
              handleDelete={handleDelete}
            ></MyEquipmentListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipmentList;
