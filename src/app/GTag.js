import Script from 'next/script';

const GTag = () => {
    
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QQPV08Y9PM" />
            <Script id="gtagId">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-QQPV08Y9PM');
                `}
            </Script>
        </>
    );
}

export default GTag;
