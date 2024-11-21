from flask import Flask, jsonify, send_file, url_for , request
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Path to the directory where your images are stored
IMAGE_FOLDER = r'./assets'
title_dict = {}

@app.route('/api/image/<image_name>', methods=['GET'])
def get_image(image_name):   
    # Serve the image file
    image_path = os.path.join(IMAGE_FOLDER,image_name)

    if os.path.exists(image_path):
            return  (send_file(image_path, mimetype='image/jpeg'))  # Adjust MIME type as needed
    else:
            return jsonify({'error': 'Image not found'}), 404
    # print("test")
    # return jsonify({'img': test})

@app.route('/api/image_data', methods=['GET'])
def get_image_data():
    try:
        filename  =  os.listdir(IMAGE_FOLDER)
        snippet = []
        for i in range(len(filename)):
            
        # Use url_for to generate the image URL
            image_url = url_for('get_image', image_name=filename[i], _external=True)
            
            snippet.append({"image_url": image_url , "title":title_dict[filename[i]],"id":i})
        return jsonify({
                'snippet': snippet # URL to access the image
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/upload' , methods =['POST'])
def upload_image():
        global title_dict
        if 'file' not in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        data = request.form.to_dict()
        file = request.files['file']
        print(data)
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400
        # image_path = os.path.join(IMAGE_FOLDER, title)
        file_path = os.path.join(IMAGE_FOLDER, data["title"]+"_"+file.filename)
        title_dict[data["title"]+"_"+file.filename] = data["title"]
        print(title_dict)
        file.save(file_path) 
        
        return jsonify({
            "message": f"Image successfully uploaded as {file.filename}", 
            "data": data
            }
                       ), 200

# This is the get_image function definition that serves the image


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
