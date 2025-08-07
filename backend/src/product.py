class Product:
    def __init__(self, name, price, quantity, id):
        self.name = name
        self.price = price
        self.quantity = quantity
        self.id = id

    def serializer(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "quantity": self.quantity,
        }


class ManagerProduct:
    def __init__(self):
        self._products = []
        self._next_id = 1

    def get_products(self):
        return self._products

    def create_product(self, name, price ,quantity ):
        new_product = Product(name, price, quantity, self._next_id)
        if new_product:
            for product in self._products:
                if new_product.name == product.name:
                    return None
            self._products.append(new_product)
            self._next_id += 1
            return new_product

    def get_product_by_id(self, id):
        for product in self._products:
            if product["id"] == id:
                return product
        return None

    def delete_product(self, id):
        product = self.get_product_by_id(id)
        if product:
            self._products.remove(product)
            return True
        return False

    def update_product(self, id, name=None, quantity=None, price=None):
        product = self.get_product_by_id(id)
        if product:
            if name is not None:
                product.name = name
            if quantity is not None:
                product.quantity = quantity
            if price is not None:
                product.price = price
            return product
        return None
