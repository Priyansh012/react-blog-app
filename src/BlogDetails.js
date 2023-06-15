import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, error } = useFetch('https://blog-db-data.onrender.com/blogs/' + id);
    const handleClick = () => {
        fetch('https://blog-db-data.onrender.com/blogs/' + id, {
            method: 'DELETE',
        })
            .then(() => {
                console.log('Blog deleted.');
                history.push('/');
            })
    };

    return (
        <div className="blog-details">
            {isPending && <div style={{ fontSize: '20px', fontWeight: 'bolder', color: 'blue' }}>Loading...</div>}
            {error && <div style={{ fontSize: '20px', fontWeight: 'bolder', color: 'red' }}>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;