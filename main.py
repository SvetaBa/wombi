from flask import Flask
app = Flask(__name__)
import webbrowser

webbrowser.open('http://localhost:5000/index')
from flask import render_template

@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()