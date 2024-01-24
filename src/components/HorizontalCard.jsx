import Image from 'next/image';
import { useRouter } from 'next/navigation';


import productPlaceholder from '../../public/product-placeholder.webp';

const HorizontalCard = ({ productName, price, img, productID }) => {


    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${productID}`)}>
            <div className="container-photo">
                <Image
                    src={img ? img : productPlaceholder}
                    alt={`${productName ? productName : 'Unnamed product'}´s image.`}
                    width={50}
                    height={50}
                />

            </div>
            <div className="container-info-product">
                <p>{productName}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default HorizontalCard;
