from flask import Flask, render_template

app = Flask(__name__)

ESTUDIANTES = [
    {"nombre": "Ana Pérez", "carrera": "Sistemas"},
    {"nombre": "Luis Rojas", "carrera": "Industrial"},
    {"nombre": "María Flores", "carrera": "Civil"},
]

@app.route("/")
def inicio():
    return render_template("inicio.html")

@app.route("/estudiantes")
def estudiantes():
    return render_template("estudiantes.html", estudiantes=ESTUDIANTES)

@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


if __name__ == "__main__":
    app.run(debug=True)