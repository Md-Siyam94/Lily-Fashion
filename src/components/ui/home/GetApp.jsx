import Image from 'next/image'
import Dekstop from '../../../assets/hero/offer.webp'
import Mobile from '../../../assets/hero/offermobile_.webp'

export default function GetApp() {
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <Image
                width={500}
                height={500}
                className="block lg:hidden w-full rounded-lg"
                src={Mobile}
                alt="Banner"
            />

            <Image
                width={1200}
                height={500}
                className="hidden lg:block w-full rounded-lg"
                src={Dekstop}
                alt="Banner"
            />
        </div>
    )
}
