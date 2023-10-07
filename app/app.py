from flask import Flask, render_template, request, redirect, url_for #para importar la clase

app = Flask(__name__) #Para inicializar la aplicacion

#el app.route es para ver que se va a ejecutar dependiendo de la ruta que este

@app.route('/')
def index():
    # return "¡Hola samuel!"
    cursos = ['USD', 'Python', 'Java', 'Kotlin', 'Dart', 'JavaScript']
    data = {
        'titulo':'Divisas Globales Express',
        'logo': './static/img/logo.png',
        'cursos': cursos,
        'numero_cursos': len(cursos)
    }
    return render_template('index.html', data = data)
    

@app.route('/contacto/<nombre>/<int:edad>')
def contacto(nombre, edad):
    data={
        'titulo': 'Contacto',
        'nombre': nombre,
        'edad': edad
    }
    return render_template('contacto.html', data=data)
    

def query_string(): #para recibir parametros
    print(request)
    print(request.args)
    print(request.args.get('param1'))
    return "ok"

def pagina_no_encontrada(error):
    return render_template('404.html'), 404 # para que salga un mensaje diciendo que no se encontro la pagina
    # return redirect(url_for('index')) #para redireccionar a otra url

if __name__ == '__main__': #para comprobar que estamos desde el archivo main 
    app.add_url_rule('/query_string', view_func=query_string) #aqui de le asigna el url a la funcion query_string()
    app.register_error_handler(404,pagina_no_encontrada)
    app.run(debug=True, port=5000)#el debug es para que cuando se haga un cambio no toque dejar de correr y volver a correr el programa para poder ver el cambio

