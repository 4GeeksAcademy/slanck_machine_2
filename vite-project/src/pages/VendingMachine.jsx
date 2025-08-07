import { useEffect, useState } from 'react'
import './VendingMachine.css'
import Card from '../componentes/Card'


function VendingMachine() {
    
    const [products, setProducts] = useState([]);

    const getApi = async () => {
        const response = await fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/")

        const data = await response.json()
        console.log(data);

    }
    const post_product = async () => {
        const response = await fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        })
    }

    useEffect(() => {
        getApi()
    }, [])









    return (
        <>
            <div className="vending-machine">
                <div className="vm-screen">
                    <div className="cards-container">
                        {products.map(prod => (
                            <Card key={prod.id} product={prod} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default VendingMachine