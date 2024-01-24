import { useParams } from "next/navigation";


const Page = ({ id }) => {

    const params = useParams(id);

    return (
        <div>
            {id}
        </div>
    );

};

export default Page;
