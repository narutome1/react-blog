import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    const [blogs, setBlogs] = useState([
        {title: 'First title', body: "First body", author: "Generic author", id: 1},
        {title: 'Second title', body: "Second body", author: "Generic author 2", id: 2},
        {title: 'Third title', body: "Third body", author: "Generic author 3", id: 3},
    ]);
    
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} handleDelete ={handleDelete} />
        </div>
     );
}
 
export default Home;