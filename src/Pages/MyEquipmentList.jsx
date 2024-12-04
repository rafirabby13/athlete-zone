/* eslint-disable no-unused-vars */
import { useLoaderData, useLocation } from "react-router-dom";
import MyEquipmentListCard from "../components/MyEquipmentListCard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const {user} = useContext(AuthContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/equip/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [user]);



  const handleDelete = (id) => {
    console.log(id);
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
       
        fetch(`http://localhost:5000/equipment/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.deletedCount > 0) {
                const remaining = data.filter(dt=> dt._id != id)
                setData(remaining)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };
  // console.log(data);
  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.map((myEquipments) => (
        <MyEquipmentListCard
          key={myEquipments._id}
          myEquipments={myEquipments}
          handleDelete={handleDelete}
        ></MyEquipmentListCard>
      ))}
    </div>
  );
};

export default MyEquipmentList;
