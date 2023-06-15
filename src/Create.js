import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Priyansh');
    const [isPending, setIsPending] = useState(false);
    const history=useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { body, title, author };

        setIsPending(true);

        setTimeout(() => {
            fetch('https://blog-db-data.onrender.com/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
                .then(() => {
                    console.log('New blog added');
                    setIsPending(false);
                    //history.go(-1);
                    history.push('/');
                })
        }, 2000);


    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Priyansh">Priyansh</option>
                    <option value="Mario">Mario</option>
                </select>
                {isPending && <div style={{fontSize:'20px', fontWeight:'bolder', color:'blue'}}>Adding Blog...</div>}
                {!isPending && <button>Add Blog</button>}
            </form>
        </div>
    );
}

export default Create;
