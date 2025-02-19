import Card from "./card";


const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Dhoni Jersey',
            price: 250,
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRO5590Zx0nYXOO5vClI6mgDvB3Mzgh9ywqoqzyrzwOEhTi9wtPtm3u5OrpyhVxygBRt0nLQX05-vCY4z8xDt8KWRPjpQuRWrtfZUhdjs29ScTJE3wiEfzsdA',
        },
        {
            id: 2,
            name: 'The MS Dhoni Limited Edition Panerai',
            price: 8000,
            image: 'https://circleofcricket.com/post_image/post_image_fdd1fef.jpg',
        },
        {
            id: 3,
            name: 'Fire-Boltt Ninja 3 Smartwatch',
            price: 600,
            image: 'https://m.media-amazon.com/images/I/61ZgWdNPmfL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: 4,
            name: 'Lays',
            price: 20,
            image: 'https://media.assettype.com/foodtechbiz%2F2024-05%2F11be4dad-31fe-4419-8096-575841e3b670%2F28220_lays_1.png',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-800 to-red-500 p-6">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>

    )
}

export default Product

