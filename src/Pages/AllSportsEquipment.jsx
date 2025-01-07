import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Helmet } from "react-helmet";

const AllSportsEquipment = () => {
  // const loadedData = useLoaderData();
  // console.log(data);
  const [data, setData] = useState([]);
  const { dataLoading, setDataLoading } = useContext(AuthContext);

  useEffect(() => {
    setDataLoading(true);

    fetch("https://athlete-zone-server.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.length > 0) {
        setData(data);
        setDataLoading(false);
        // }
        // else{
        //   console.log('object');
        //   setDataLoading(true)

        // }
      });
  }, [setDataLoading]);

  const handleSorting = (e) => {
    e.preventDefault();
    const selectedOption = e.target.value;
    // console.log(selectedOption);
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
    <div className="pb-10 md:pb-20 mt-20">
      <Helmet>
        <title>All Sports | AthleteZone</title>
      </Helmet>
      {dataLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-lg mx-auto"></span>
        </div>
      ) : (
        <div className="min-h-screen py-4 md:py-0 mt-20 md:max-w-[85%] mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-between  md:py-20">
            <h1 className=" md:w-fit  md:text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2">
              All Sports Equipment
            </h1>

            <select
              className="border-2 p-4 rounded-lg bg-[#82659c] text-white md:text-2xl font-semibold"
              name="sorting"
              onChange={handleSorting}
              selected="Sort"
            >
              <option selected>Sort</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 md:py-0  allEqui">
            {data?.map((equipment, i) => (
              <div
                key={i}
                className="p-2 border-2 rounded-lg shadow-md  flex flex-col justify-between"
              >
                {/* Image Section */}
                {equipment?.photo && (
                  <img
                    src={equipment?.photo}
                    alt={equipment?.name}
                    className="w-full h-32  rounded-md mb-4"
                  />
                )}

                {/* Card Header: Equipment Name and Index */}
                <div>
                  {/* Equipment Name */}
                  <h3 className="text-xl font-bold ">
                    {equipment?.name}
                  </h3>
                </div>
                <div>
                  {/* Equipment Name */}
                  <h3 className="text-lg font-bold ">
                    $ {equipment?.price}
                  </h3>
                </div>

                {/* Card Footer: Price and Action Button */}
                <div className="mt-4 flex justify-between items-center">
                  {/* View Details Button */}
                  <Link
                    to={`/allSports/${equipment?._id}`}
                    className="px-4 py-1 text-sm font-semibold text-white bg-[#82659c] rounded-md hover:bg-purple-700"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="overflow-x-auto md:px-20">
            <table className="table  border-2 text-center">
              <thead className="tableHeader">
                <tr className="text-xl">
                  <th className="hidden md:block"></th>
                  <th className="hidden md:block">No.</th>
                  <th>Name</th>
                  
                  <th>Category</th>
                  <th className="hidden md:block"></th>
                  <th className="hidden md:block">Price</th>
                </tr>
              </thead>

              <tbody className=" lg:text-xl">
                {data?.map((equipment, i) => (
                  <tr key={i}>
                    <td className="hidden md:block"></td>
                    <td className="hidden md:block">{i + 1}</td>
                    <td >{equipment?.name}</td>
                    
                    <td>{equipment?.category}</td>
                    <td className="hidden md:block"></td>
                    <td className="hidden md:block">{equipment?.price} $</td>
                    <td className="px-2 py-0 border-2 bg-[#82659c] text-white font-semibold">
                      <Link
                        to={`/allSports/${equipment?._id}`}
                        
                      >
                        View details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default AllSportsEquipment;
