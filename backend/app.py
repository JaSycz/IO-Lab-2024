from flask import Flask, request
from api_ai import get_completion
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="https://localhost:5137", methods=["GET","POST"])




@app.route("/", methods=['POST','GET'])
def query_view():
  if request.method == 'POST':
  
    prompt = request.form['prompt']
    response = get_completion(prompt)
    return response
  

if __name__ == '__main__':
    app.run(debug=True)

