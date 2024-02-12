const Shimmer = () => {
  return (
    <div className="profile p-12 m-36 ml-72 w-[700px] flex justify-evenly bg-gray-200">
      <div className="bg-gray-100 w-44 h-44 object-cover"></div>
      <div className="p-2 m-2 mr-28 font-serif text-xl md:text-left text-gray-700">
        <p className="p-2 m-2 mb-4 w-32 bg-gray-100"></p>
        <p className="p-2 m-2 mb-4 w-36 bg-gray-100"></p>
        <p className="p-2 m-2 mb-4 w-44 bg-gray-100"></p>
        <p className="p-2 m-2 mb-4 w-56 bg-gray-100"></p>
      </div>

    </div>
  )
}

export default Shimmer;