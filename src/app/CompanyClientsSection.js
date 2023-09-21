import Image from 'next/image';
import Link from 'next/link';

const CompanyClientsSection = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-4">
                <p className="uppercase text-center text-sm">Trusted by businesses of all sizes</p>

                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    <Image
                     src="/whatsapp.svg"
                     width="40"
                     height="40"
                     alt="whatsapp"
                     />
                </div>
            </div>
        </section>
    );
}

export default CompanyClientsSection;
