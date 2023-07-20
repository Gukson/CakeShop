from flask import Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
@cross_origin()
def hello_world():
    return {"message": "hello"}


if __name__ == '__main__':
    app.run()
