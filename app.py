from flask import Flask, request, render_template, redirect

app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/contacto")
def contacto():
    return render_template("contacto.html")
@app.route("/noticias")
def noticias():
    return render_template("noticias.html")
@app.route("/quienes_somos")
def quienes_somos():
    return render_template("quienes-somos.html")
@app.route("/servicios")
def servicios():
    return render_template("servicios.html")

if __name__ == "__main__":
    app.run(debug=True)