// JSX Conditional rendering 

function ProdView({ prodData }) {
    return <>
        <h3>{prodData.title}</h3>
        {prodData.image &&
            <img src={prodData.image.src} alt={prodData.image.alt}
                width={prodData.image.size.width}
            />
        }
        <p>{prodData.description}</p>
        {prodData.link &&
            <p>{prodData.link.description}: <a href={prodData.link.url}>{prodData.link.text}</a></p>
        }
    </>;
}
