import os
from flask import Flask, request, redirect, flash, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import base64

UPLOAD_FOLDER = './saved'

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/file', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        print(request.files)
        if "file" not in request.files:
            print("no file")
            flash("No file uploaded")
        file = request.files["file"]
        
        if file:
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], file.filename))
    return redirect("http://localhost:5173/")

@app.route('/get_maps', methods=["GET"])
def get_maps():
    only_files = os.listdir(UPLOAD_FOLDER) #haha
    image_files = [f for f in only_files]
    image_urls = [{"filename": filename,"file_url" : f'http://localhost:5000/images/{filename}'} for filename in image_files]
    return jsonify(image_urls)

@app.route("/images/<image_name>")
def get_image(image_name):
    return send_from_directory(UPLOAD_FOLDER, image_name)

@app.route("/delete_map/<map>", methods=["POST"])
def delete_map(map):
    os.remove("./saved/" + map)
    return get_maps()

app.run(debug=True)