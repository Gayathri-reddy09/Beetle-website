import { useEffect, useState } from "react";
import blogPosts from "../assets/data/blog-posts";

function Blog() {
  const [posts, setPosts] = useState([]);

  const categories = [
    "All",
    "Private Equity",
    "Investment Banking",
    "Consulting",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  function handleCategoryFilter() {
    if (activeCategory === "All") {
      setPosts(blogPosts);
    } else
      setPosts(blogPosts.filter((item) => item.category === activeCategory));
  }

  useEffect(() => {
    handleCategoryFilter();
  }, [activeCategory]);

  const [noOfLoadedPosts, setNoOfLoadedPosts] = useState(3);

  const handleLoadMore = () => {
    if (posts.length >= noOfLoadedPosts) {
      setNoOfLoadedPosts((prev) => prev + 3);
    } else setNoOfLoadedPosts(3);
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchBlogKeyword, setSearchBlogKeyword] = useState("");

  const handleSearchBlog = () => {
    setSearchBlogKeyword(searchInput);
    if (searchInput !== "") {
      setPosts(
        posts.filter((item) => item.title.toLowerCase().includes(searchInput))
      );
    } else handleCategoryFilter();
  };

  return (
    <section className="text-black my-32 px-6 sm:px-10 xl:px-20">
      <h2 className="s-fit lg:w-[478px] text-3xl md:text-[40px] lg:text-[56px] font-bold sm:leading-[62px]">
        Latest Posts
      </h2>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between my-10 sm:my-[60px]">
        <ul className="flex items-center gap-2 sm:gap-4 lg:justify-between">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`rounded-full py-2 px-2 sm:py-3 sm:px-[15px] font-bold text-xs sm:text-[16px] cursor-pointer ${
                activeCategory === item
                  ? "text-white bg-primary"
                  : "bg-primary/20"
              }`}
              onClick={() => setActiveCategory(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="rounded-full w-full lg:w-[346px] px-5 py-3 text-xs sm:text-base placeholder:text-primary-gray bg-primary/20"
          />
          <button>
            <img
              src="/icons/search_default.svg"
              alt="search"
              onClick={handleSearchBlog}
              className="rounded-full p-3 bg-primary/20"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-x-10 lg:gap-10">
        {posts.length === 0 ? (
          <p className="">
            No blog available with the keyword{" "}
            <span className="font-semibold">{searchBlogKeyword}</span>
          </p>
        ) : (
          posts
            .map((item) => (
              <div key={item.id} className="h-[430px]">
                <img src={item.image} alt="image" className="rounded-2xl" />
                <h5 className="mt-4 text-[16px] leading-[26px] font-semibold text-primary/70">
                  {item.category.toUpperCase()}
                </h5>
                <h4 className="mt-2 text-2xl font-semibold">{item.title}</h4>
                <p className="w-[360px] md:w-[300px] xl:w-[400px] mt-3 text-lg truncate">
                  {item.description}
                </p>
              </div>
            ))
            .slice(0, noOfLoadedPosts)
        )}
      </div>
      <div className="flex justify-center">
        {posts.length > 3 && (
          <button
            className="flex gap-2 border border-dark px-6 py-3 rounded-full text-base"
            onClick={handleLoadMore}
          >
            {posts.length > noOfLoadedPosts ? "Load More" : "Show Less"}
            <img
              src="/icons/arrow_down_default.svg"
              alt="arrow"
              className={`mt-0.5 ${
                posts.length >= noOfLoadedPosts ? "" : "rotate-180"
              }`}
            />
          </button>
        )}
      </div>
    </section>
  );
}

export default Blog;
