import Image from "next/image";
import Link from "next/link";


const Error = () => {
    return (
        <div>
            <Image src='/img/err.png' width={1440} height={100} alt='error'></Image>
            <Link href='/'>
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;