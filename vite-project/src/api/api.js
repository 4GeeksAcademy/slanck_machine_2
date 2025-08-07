const products = [
    {
        "name": "Pepsi 500ml",
        "price": 2.50,
        "quantity": 48
    },
    {
        "name": "Galletas Maria",
        "price": 1.00,
        "quantity": 35
    },
    {
        "name": "Barra de Cereal",
        "price": 1.75,
        "quantity": 10
    },
    {
        "name": "Agua Mineral 600ml",
        "price": 2.00,
        "quantity": 10
    },
    {
    "name": "Oreo Original",
    "price": 0.42,
    "quantity": 20
  },
  {
    "name": "Mini Oreo",
    "price": 0.54,
    "quantity": 20
  }
]

export const getProducts = async () => {
    const response = await fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/", { method: "GET" })
    const data = await response.json()
    return data
}

export const initialProducts =async ()=> {
    try {
        await Promise.all(
            products.map(p => {
                fetch("https://verbose-broccoli-4j64gpqwpp4xhj7g7-5000.app.github.dev/products/", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(p)
                })}
            )
        )
    } catch (error) {
        console.error("Error al cargar producto", error)
    }
}

