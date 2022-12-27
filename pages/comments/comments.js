import React from 'react';

const Comments = ({ comments }) => {
    console.log(comments);
    return (
        <div>
            {
                comments.map(cmnt => <h1 key={cmnt?.id} className='m-6'>Comment body: {cmnt?.body}</h1>)
            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }
}