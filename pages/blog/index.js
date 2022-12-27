import Head from "next/head";
import Link from "next/link";


const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog page</title>
            </Head>
            <h1>Hey this is blog section</h1>
            <Link href='/blog/blog1'>Blog page 1</Link>
        </div>
    );
};

export default Blog;