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
    setDataLoading(true)

    fetch("https://athlete-zone-server.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // if (data.length > 0) {
        setData(data);
          setDataLoading(false)
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
    <div className="pb-10 md:pb-20">
      <Helmet>
        <title>All Sports | AthleteZone</title>
      </Helmet>
      {dataLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-bars loading-lg mx-auto"></span>
        </div>
      ) : (
        <div className="min-h-screen py-4 md:py-20">
          <div className="flex md:flex-row flex-col items-center justify-between p-5 md:p-20">
            <h1 className=" md:w-fit  md:text-4xl font-bold p-4 shadow-purple-600 shadow-md text-center mb-2">
              All Sports Equipment
            </h1>

            <select
              className="border-2 p-4 rounded-lg bg-purple-950 text-white md:text-2xl font-semibold"
              name="sorting"
              onChange={handleSorting}
              selected="Sort"
            >
              <option selected>Sort</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className="overflow-x-auto md:px-20">
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
                    <td className="px-2 py-0 border-2 bg-purple-950 text-white font-semibold">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSportsEquipment;
