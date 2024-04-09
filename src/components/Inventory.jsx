export const Inventory = () => {
  return (
    <div className="">
      <div className="bg-white mt-32 ml-12">
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 max-w-fit">
          <div className="heading font-bold text-3xl p-2">Inventory</div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
          <div className="data_box flex gap-3 mt-3">
            <div className="custom-select">
              Show
              <select className="w-28 p-1 bg-white border-2 border-black ml-2">
                <option value="0">10</option>
                <option value="1">2</option>
                <option value="2">3</option>
              </select>
              entries
            </div>
            <div className="searchbar">Search :</div>
            <input
              type="text"
              className="border-2 border-gray-400 px-1 py-1 focus:outline-none"
            />
          </div>
          <table className="border-collapse border border-black mt-4 w-full">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">#</th>
                <th className="border border-black px-4 py-2">Supply Name</th>
                <th className="border border-black px-4 py-2">Available</th>
              </tr>
            </thead>
            <tbody>
              {[25, 10, 15].map((value, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{index + 1}</td>
                  <td className="border border-black px-4 py-2">
                    {index === 0
                      ? "Baking soda"
                      : index === 1
                      ? "Fabric Conditioner"
                      : "Fabric detergent"}
                  </td>
                  <td className="border border-black px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-6 text-center">
            <div>Showing 1 to 3 of 3 entries </div>
            <div>
              <button className="">Previous</button>
              <span>
                <button className="border border-black p-1 px-4 rounded-md mr-4 ml-4 bg-slate-300">
                  1
                </button>
              </span>
              <button className="">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export function ExampleDataTable() {
  return (
    <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Example Datatable</h2>
      <div className="data_box flex gap-3 mt-3 justify-between">
        <div className="custom-select">
          Show
          <select className="w-28 p-1 bg-white border-2 border-black ml-2">
            <option value="0">10</option>
            <option value="1">2</option>
            <option value="2">3</option>
          </select>
          entries
        </div>
        <div className="searchbar">
          Search :
          <input
            type="text"
            className="border-2 border-gray-400 px-1 py-1 focus:outline-none ml-3"
          />
        </div>
      </div>
      <table id="example" className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Supply Name</th>
            <th className="px-4 py-2">Oty</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">2004-04-03</td>
            <td className="border px-4 py-2">Baking soda</td>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">iN</td>
            {/* Vizz add delete edit button  here */}
            <td className="border px-4 py-2">del edit button</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2004-04-03</td>
            <td className="border px-4 py-2">Aasdas</td>
            <td className="border px-4 py-2">210</td>
            <td className="border px-4 py-2">in</td>
            <td className="border px-4 py-2">del edit button</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2004-04-03</td>
            <td className="border px-4 py-2">Junior Technical Author</td>
            <td className="border px-4 py-2">22</td>
            <td className="border px-4 py-2">in</td>
            <td className="border px-4 py-2">del edit button</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2004-04-03</td>
            <td className="border px-4 py-2">Senior Javascript Developer</td>
            <td className="border px-4 py-2">55</td>
            <td className="border px-4 py-2">in</td>
            <td className="border px-4 py-2">del edit button</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2004-04-03</td>
            <td className="border px-4 py-2">Accountant</td>
            <td className="border px-4 py-2">55</td>
            <td className="border px-4 py-2">in</td>
            <td className="border px-4 py-2">del edit button</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between mt-6 text-center">
        <div>Showing 1 to 3 of 3 entries </div>
        <div>
          <button className="">Previous</button>
          <span>
            <button className="border border-black p-1 px-4 rounded-md mr-4 ml-4 bg-slate-300">
              1
            </button>
          </span>
          <button className="">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ExampleDataTable;
