from flask import Flask, request, render_template, redirect, url_for, flash

app = Flask(__name__)

app.secret_key = '123'
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/contacto", methods = ['GET', 'POST'])
def contacto():
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        flash(f'¡Gracias {nombre}! Tu mensaje ha sido enviado.', 'success')
        return redirect(url_for('contacto'))
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