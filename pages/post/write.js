import Layout from "../../components/Layout";
import { useRef, useState } from "react";
import Link from 'next/link';

export default function write() {
    const idRef = useRef(undefined);
    const titleRef = useRef(undefined);
    const contentRef = useRef(undefined);

    const [showLink, setShowLink] = useState(false);

    const handeSubmit = (event) => {
        event.preventDefault();

        const id = idRef.current.value;
        const title = titleRef.current.value;
        const content = contentRef.current.value;

        if (id && title && content) {
            fetch('/api/post/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, title, content }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setShowLink(true);
                    alert('created');
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('error');
                })
        }
    }

    return (
        <Layout>
            <h1>write a post</h1>
            <form onSubmit={handeSubmit}>
                <input type="text" name="id" placeholder="id" required ref={idRef}></input>
                <br></br>
                <input type="text" name="title" placeholder="title" required ref={titleRef}></input>
                <br></br>
                <textarea type="text" name="content" placeholder="content" required ref={contentRef}></textarea>
                <br></br>
                <input type="submit" value="Create"></input>
            </form>
            {showLink && <Link href={`/posts/${idRef.current.value}`} passHref legacyBehavior><a>Created post</a></Link>}
        </Layout>
    )
}
