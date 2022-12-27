import { useRouter } from "next/router";

const postDetails = ({ post }) => {


    // back button using useRouter
    const router = useRouter();
    const handleBack = () => [
        router.push('/posts')
    ]

    return (
        <div>
            <div className="card m-10 bg-primary text-primary-content">
                <div className="card-body">
                    <p>Post Id: {post?.id}</p>
                    <h2 className="card-title">Title: {post?.title}</h2>
                    <p>Post: {post?.body}</p>
                </div>
                <button onClick={handleBack} className="btn btn-primary">Back to Post</button>
            </div>
        </div>
    );
};


// path load korchi

export const getStaticProps = async (context) => {

    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    // console.log(data);

    return {
        props: {
            post: data
        }
    }

}

// path just paisi but load kor nai 


export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })


    return {
        paths,
        fallback: false
    }

}

export default postDetails;