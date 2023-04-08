import not_found from "../assets/not_found.svg";

const NotFound = () => {
  return (
    <>
      <section>
        <div class="md:mt-5">
          <span className="flex align-center justify-center h-[70vh]">
            <img src={not_found} alt="Page not found image" />
          </span>
          <div className="text-center my-2">
            <h1 className="text-xl">Page Not Found</h1>
            <a href="#" className="text-md text-[#4A65D7]">
              <h3>click here to go back home</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
