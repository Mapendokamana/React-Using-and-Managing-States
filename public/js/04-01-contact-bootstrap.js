// JSX Conditional rendering 
// Missing data  
const prodDataList = [
    {
        id: 100,
        title: 'Calgary',
        image: {
            src: '/img/calgary.jpg',
            alt: 'Calgary',
            size: { width: '90%', height: 200 }
        },
        description: 'Calgary, the Stampede home.',
        link: {
            description: "Image source:",
            text: 'https://pixabay.com/',
            url: "https://pixabay.com/"
        }
    },
    {
        id: 200,
        title: 'Hollywood',
        image: {
            src: '/img/hollywood.jpg',
            alt: 'Hollywood',
            size: { width: '90%', height: 200 }
        },
        description: 'Hollywood, the Movie home.'//,
        // link: {
        //     description: "Image source:",
        //     text: 'https://pixabay.com/',
        //     url: "https://pixabay.com/"
        // }
    },
    {
        id: 300,
        title: 'Paris',
        image: {
            src: '/img/paris.jpg',
            alt: 'Paris',
            size: { width: '90%', height: 200 }
        },
        description: 'Paris, the Fashion home.',
        link: {
            description: "Image source:",
            text: 'https://pixabay.com/',
            url: "https://pixabay.com/"
        }
    }];

function ProductsView() {
    return <div className="row">
        {prodDataList.map((product) =>
            <div className='col-lg-4 col-md-6 p-2'>
                <ProdView key={product.id} prodData={product} />
            </div>
        )}
    </div>;
}

