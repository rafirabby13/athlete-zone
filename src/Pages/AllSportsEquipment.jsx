import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const AllSportsEquipment = () => {
  // const loadedData = useLoaderData();
  // console.log(data);
  const [data, setData] = useState([]);
  const { dataLoading, setDataLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.length > 0) {
          setData(data);
        //   setDataLoading(false)
        // }
        // else{
        //   console.log('object');
        //   setDataLoading(true)

        // }
          
        
      });
  }, [ setDataLoading]);

  const handleSorting = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    console.log(selectedOption);
    if (selectedOption == "ascending") {
      const sortedData = [...data].sort(function (a, b) {
        return a.price - b.price;
      });

      setData(sortedData);
    } else {
      const sortedData = [...data].sort(function (a, b) {
        return b.price - a.price;
      });

      setData(sortedData);
    }
  };

  // if (dataLoading) {
  //   console.log(dataLoading);
  //   return <span className="loading loading-spinner loading-lg"></span>

  // }

  return (
    <div>
      {
      dataLoading ? 'loading'
      :
      <div className="min-h-screen py-4 md:py-20">
      <div className="flex md:flex-row flex-col items-center justify-between p-5 md:p-20">
        <h1 className=" md:w-fit  md:text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2">
          All Sports Equipment
        </h1>

        <select
          className="border-2 p-4 rounded-lg bg-purple-500 text-white md:text-2xl font-semibold"
          name="sorting"
          onChange={handleSorting}
          selected="Sort"
        >
          <option selected>Sort</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table  border-2 text-center">
          {/* head */}

          <thead className="">
            <tr>
              <th></th>
              <th>No.</th>
              <th>Name</th>
              <th></th>
              <th>Category</th>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((equipment, i) => (
              <tr key={i}>
                <td></td>
                <td>{i + 1}</td>
                <td>{equipment?.name}</td>
                <td></td>
                <td>{equipment?.category}</td>
                <td></td>
                <td>{equipment?.price} $</td>
                <td>
                  <Link
                    to={`/allSports/${equipment?._id}`}
                    className="btn btn-accent"
                  >
                    View details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    }
    </div>
  );
};

export default AllSportsEquipment;
