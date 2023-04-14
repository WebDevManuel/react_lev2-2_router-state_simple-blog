import { Link } from "react-router-dom";

const BlogItem = (props) => {
    return (
        <div className="BlogItem">
            <img className="BlogItem__img" src={props.img} alt="" />
            <h2>{props.title}</h2>
            <Link to={`/blog/${props.id}`}>Read More</Link>
        </div>
    );
}

export default BlogItem;