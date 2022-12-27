import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {

    const router = useRouter();
    const id = router.query.blogId;

    return (
        <div>
            <h1>This is dynamic page of - {id}</h1>
        </div>
    );
};

export default blogId;