
# cd backend/
#pipenv shell 

from flask import Flask, jsonify
from flask_cors import CORS
from src.routes.product_routes import product_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(product_bp)



if __name__ =="__main__":
    app.run(debug= True, host="0.0.0.0", port=5000)
    