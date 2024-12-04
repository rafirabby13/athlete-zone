import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const data = useLoaderData();
  // console.log(data);

  const handleShowDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}

          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((equipment, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{equipment?.name}</td>
                <td>{equipment?.category}</td>
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
