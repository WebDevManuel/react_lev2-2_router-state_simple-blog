import { blogData } from "../data/blogData";
import BlogItem from "../components/BlogItem";





const Blog = () => {
    return (
        <div>
            {blogData.map((elt, id) => {
                return (
                    <BlogItem
                    key={id}
                    img={elt.img_url}
                    title={elt.title}
                    elt={elt}
                    id={elt.id}
                    />
                )
            })}
        </div>
    );
}

export default Blog;