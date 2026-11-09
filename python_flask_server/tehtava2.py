import json
from flask import Flask

app = Flask(__name__)
@app.route('/translate/<word>')
def translate(word):
    with open('dictionary.json', 'r', encoding='utf-8') as file:
        dictionary = json.load(file)
    word = word.lower()
    if word in dictionary:
        response = {
            "English": word,
            "Finnish": dictionary[word]
        }
        return response
    else:
        response = {
            "error": "Word not found"
        }
        return response, 404

@app.route('/words')
def words():
    with open('dictionary.json', 'r', encoding='utf-8') as file:
        dictionary = json.load(file)
    return list(dictionary.keys())

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)