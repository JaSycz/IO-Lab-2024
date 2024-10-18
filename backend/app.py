from flask import Flask, request
from openai import OpenAI
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="https://localhost:5137", methods=["GET","POST"])


# OpenAI API Key
with open("./config.json",'r') as config_file:
  config = json.load(config_file)

MODEL="meta-llama/llama-3.2-11b-vision-instruct:free"
ai_client = OpenAI(
   base_url="https://openrouter.ai/api/v1",
   api_key=config["OPENAI_API_KEY"],
)

def get_completion(prompt):
  completion = ai_client.chat.completions.create(
    model=MODEL,
    messages=[
      {
        "role": "system",
        "content": [
          {
            "type": "text",
            "text": "You're helpful child assitant."
          },

        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": prompt
          },
        
          ]
      }
      
      ]
     )
  response = completion.choices[0].message.content
  return response
  


@app.route("/", methods=['POST','GET'])
def query_view():
  if request.method == 'POST':
  
    prompt = request.form['prompt']
    response = get_completion(prompt)
    return response
  

if __name__ == '__main__':
    app.run(debug=True)

