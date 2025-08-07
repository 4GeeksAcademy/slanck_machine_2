from flask import Blueprint,  jsonify, request
from src.product import ManagerProduct

product_bp = Blueprint('products',__name__, url_prefix = "/products")

manager= ManagerProduct()

manager.create_product("coca cola",500, 23.99)
manager.create_product("Patatas fritas",5, 75)

@product_bp.route("/", methods= ["GET"])
def get_products():
    products = manager.get_products()
    return jsonify([product.serializer() for product in products ])

@product_bp.route("/<int:id>", methods= ["GET"])
def get_product(id):
    product = manager.get_product_by_id(id)
    if product:
        return jsonify(product.serializer()),200
    return jsonify("faltan campos por rellenar")

@product_bp.route("/",methods= ["POST"])
def post_product():
    data = request.get_json()
    if not "name" in data or not "quantity" in data or not "price" in data:
        return jsonify("faltan campos por rellenar"), 400
    product= manager.create_product(data["name"], data["quantity"],data["price"])
    if product:
        return jsonify(product.serializer()),201
    return jsonify("No se puede retornar"),404

@product_bp.route("/<int:id>", methods= ["PATCH"])
def update(id):
    data= request.get_json()
    product= manager.update_product(id,name =data.get("name",None), quantity=data.get("quantity",None), price=data.get("price",None))
    if product:
        return jsonify(product.serializer()),200
    return jsonify("ID no existe"),400

@product_bp.route("/<int:id>", methods= ["DELETE"])
def delete(id):
    product = manager.delete_product(id)
    if product:
        return jsonify("borrado"),200
    return jsonify("ID no encontrado"),400