# PWA-REACT

Fuentes Camila FAI-4241  
Fuentealba Dario FAI-4424  
Riveiro Matías FAI-4438  
  
  
  
  
2) a) i) Explicar la función de los siguientes archivos iniciales: index.js, App.js, index.css y package-json.js.  

  ## index.js o main.jsx
  
  index.js (o a veces main.jsx en proyectos con React + Vite) es el punto de entrada principal de la aplicación React. Es como el corazón que arranca todo.  
  Sin index.js, React no sabría por dónde empezar.  

  ### ¿Qué hace normalmente index.js?   

    1. Importa React y ReactDOM (la librería que renderiza React en el navegador)  

    2. Importa el componente principal (por ejemplo, App.jsx)  

    3. Conecta la app al HTML, insertándola en un div con id "root" (que está en el index.html)

    4. A veces también aplica estilos globales o configura otras cosas como contextos o providers.

### ¿Y cómo se conecta con el index.html?  
En el index.html está este div:  
<div id="root"></div>
  
Y en el index.js, esta línea:
document.getElementById('root')
  
  
## App.js