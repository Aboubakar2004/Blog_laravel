import AllPosts from "../../components/AllPosts";
import Header from "../../components/Header";

function Home() {
  return (
    <div className="px-30 p-7 flex flex-col gap-10">
      <Header />
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-7">
        <AllPosts />
      </div>
    </div>
  );
}

export default Home;
