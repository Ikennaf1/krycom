import Prods from './Prods';

export const metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com'),
  title: 'Blinds | Products',
  description: 'The best dark mode package for all websites',
  keywords: ['dark', 'dark mode', 'night mode'],

  openGraph: {
    title: 'Blinds | Products',
    description: 'The best dark mode package for all websites',
    url: 'https://blindsjs.dev/products',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg',
        width: '1200',
        height: '630'
      }
    ],
  }
}

const Products = () => {
  return (
    <Prods />
  )
}

export default Products;
