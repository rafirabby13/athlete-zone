import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const data = useLoaderData();
  // console.log(data);

 
  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <table className="table  border-2 text-center">
          {/* head */}

          <thead className="">
            <tr >
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
                  <Link to={`/allSports/${equipment?._id}`}
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
  );
};

export default AllSportsEquipment;
