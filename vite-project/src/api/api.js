const products = [
    {
        "name": "Pepsi 500ml",
        "price": 480,
        "quantity": 20.50
    },
    {
        "name": "Galletas Oreo",
        "price": 350,
        "quantity": 15.00
    },
    {
        "name": "Barra de Cereal",
        "price": 300,
        "quantity": 18.75
    },
    {
        "name": "Agua Mineral 600ml",
        "price": 450,
        "quantity": 22.00
    }
]

export const getProducts = async () => {
    const response = await fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/", { method: "GET" })
    const data = await response.jsom()
    return data
}

export const initialProducts =async ()=> {
    try {
        await Promise.all(
            products.map(p => 
                fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(p)
                })
            )
        )
    } catch (error) {
        console.error("Error al cargar producto", error)
    }
}

