

# <p align="center">Universidad Nacional del Comahue</p>
# <p align="center">Facultad de Informatica</p>

# <p align="center">Programacion Web Avanzada</p>


# <p align="center">PWA-REACT</p>  
  
<p align="center">
  <img src="TP-REACT-1/ImagenesREADME/logo-UNCo.png" width="150" />
  <img src="TP-REACT-1/ImagenesREADME/logo-FAI.png" width="150" />
</p>  
  
  
## Integrantes: 
* Fuentes Camila FAI-4241  
* Fuentealba Dario FAI-4424  
* Riveiro Matías FAI-4438  
  
  
  
# <p align="center">Trabajo Práctico N° 2</p>  
  
## <p align="center"> RealTech </p>  

Esta aplicación es una PWA desarrollada con React que permite visualizar y explorar distintos componentes de computadora, organizados por categorías.


## <p align="center"> Funcionalidades principales </p>

Página de inicio (Home):
Muestra las categorias disponibles (por ejemplo: Procesadores, Placas de video, Memorias, etc.). Al hacer click en una, redirige a la vista de esa categoria.

Vista de categoría:
Se presentan tarjetas con componentes pertenecientes a esa categoria, en forma de lista horizontal o vertical. Cada tarjeta contiene: imagen del componente,
estrella de favorito (azul si está guardado en localStorage), nombre del componente y el boton de ver detalle que redirecciona a la pagina de informacion. 

Página de información de componente:
Al hacer clic en una tarjeta, se accede a una vista detallada que muestra: título, marca, mModelo, especificaciones tecnicas (extraidas de una segunda API), 
descripción (en español o inglés, segun idioma detectado). 

Favoritos:
Se accede desde la barra de navegación. Muestra las tarjetas guardadas como favoritas (usando localStorage), con las mismas funcionalidades de visualizacion.

Barra de navegación:
Incluye accesos rapidos a: inicio, categorías (con dropdown) y favoritos

Buscador:
En las vistas de categoria y favoritos se puede buscar por nombre o categoria.


## <p align="center">API</p>
Hicimos uso de MockApi para realizar nuestra propia api de componentes. 
MockAPI principal:
Contiene información de los componentes:
id, nombre, image, category, descripcion (con versiones en es y en) y precio.

API secundaria:
Provee detalles técnicos:
id, idComponente, marca, modelo, fecha de lanzamiento y especificaciones.

# <p align="center">Idioma</p>
La app está completamente traducida al español e inglés, gracias a la integración con i18n.
El contenido se adapta dinámicamente al idioma seleccionado o detectado.

# <p align="center">Responsive</p>
La interfaz se adapta tanto a pantallas de escritorio como a dispositivos móviles, garantizando una buena experiencia en cualquier dispositivo.


# Ejercicio 1) c)
1. Clonamos el repositorio:
git clone https://github.com/CamilaFuentess/PWA-REACT  
2. Ingresamos al directorio del proyecto: 
cd C:\REACT\PWA-REACT\TP-REACT-1  
3. Instalamos las dependencias: 
npm install  
4. Se ejecuta el comando (inicia la aplicacion): 
npm run dev  
  
  

## <p align="center">Instalación Node.js y npm</p>  
  
1. Luego de instalar node.js y npm, verifico sus versiones para ver que estén instalados.  
![Ejemplo](./TP-REACT-1/ImagenesREADME/Ej7/01.png)  
  
2. Ahora hago que me genere la estructura de carpetas, le pongo un nombre al proyecto, un nombre al archivo Package.json, elijo que quiero trabajar con React y con JavaScript + SWC
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/02.png)  
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/Estructura.png)  
  
3. Si sale este error es porque no estoy en la carpeta correcta.  
Acá debo hacer cd TP-REACT-1 para colocarme en la carpeta correcta.  
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/03.png)  
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/04.png)  
  
4. Uso npm install para instalar todas las dependencias del proyecto, es decir, las librerías y paquetes que la aplicación necesita para funcionar.
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/05.png)  
  
5. Se ejecuta el comando npm run dev para iniciar la aplicacion.   
![Ejemplo](TP-REACT-1/ImagenesREADME/Ej7/06.png)  
  
  
## <p align="center">Instalación de react-i18next</p>  
  
1. Voy a la página https://www.i18next.com/overview/getting-started  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/01.png)  
  
2. Copio esto en la consola de VSC. 
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/02.png)  
Sucede ésto:  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/03.png)  
  
3. Ingreso el siguiente comando: npm install i18next react-i18next  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/04.png)  
  
4. Dentro de la carpeta src, creo el script i18n.js  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/05.png)  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/06.png)  
  
5. Lo importo en main.jsx  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/07.png)  
  
6. Creo los archivos de translation.  
  src/locales/en/translation.json  
  src/locales/es/translation.json  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/08.png)  
  
7. Agrego contenido a dichos scripts:  
es/translation.json  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/09.png)  
en/translation.json  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/i18n/10.png)  


1. Instalación de react-i18next.  
![Ejemplo](./TP-REACT-1/ImagenesREADME/TP2/01.png)  
  
2. Si quiero que las traducciones se cargen desde archivos .json (lo más común)
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/02.png) 
  
3. Este i18next-http-backend permite que i18next busque las traducciones desde archivos en nuestro servidor.
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/03.png)  
  
  
## <p align="center">Instalar Tailwind CSS y configurarlo dentro del proyecto</p>  
  
1. Ingresar a https://tailwindcss.com/docs/installation/using-vite.  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/04.png)  
  
2. Iniciar la instalación de Tailwind.
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/05.png)  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/06.png)  
  
3. Agrego ésto al script vite.config.ts.   
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/07.png)  
Antes el script vite.config.ts era así:  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/08.png)  
Ahora quedará así:  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/09.png)  
  
4. Debo importar el Tailwind a mi script App.css  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/10.png)  
Antes estaba así:  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/11.png)  
Ahora se verá así:  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/12.png)  
  
5. Uso Tailwind en mi index.html  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/14.png)  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/15.png)  
  
6. Comenzamos  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/13.png)  
  
7. Verifico que funciona correctamente  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/16.png)  
  
    
  ## <p align="center">Instalar react router DOM</p>  
  
1. En la terminal ejecuto npm i react-router-dom.  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/reactRouterDOM/01.png)  
  
2. Debo hacer ésto en el main.jsx.
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/reactRouterDOM/02.png)  
  
3. Ésto tengo originalmente en mi main.jsx.   
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/reactRouterDOM/03.png)  
  
4. Lo dejo así:  
![Ejemplo](TP-REACT-1/ImagenesREADME/TP2/reactRouterDOM/04.png)  
  
