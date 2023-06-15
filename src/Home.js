import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs, isPending, error} = useFetch('https://blog-db-data.onrender.com/blogs');

    return (
        <div className="home">
            {error && <div style={{fontSize:'20px', fontWeight:'bolder', color:'red'}}>{error}</div>}
            {isPending && <div style={{fontSize:'20px', fontWeight:'bolder', color:'blue'}}>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs List" />}
        </div>
    );
}

export default Home;