from flask import Flask
app = Flask(__name__)

@app.route('/tehtava1/<number>')
def prime_number(number):
    number = int(number)
    isPrime = True
    if number < 2:
        isPrime = False
    else:
        for i in range(2, number):
            if number % i == 0:
                isPrime = False
                break
    response = {
        "Number": number,
        "isPrime": isPrime
    }
    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)