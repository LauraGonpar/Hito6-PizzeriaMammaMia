# 🍕 Mi Pizzería mamma mia - Gestión de Carrito con React Context

Este proyecto es una aplicación de pizzería construida con React que utiliza la Context API para gestionar el estado global de un carrito de compras.
Para que el proyecto funcione en tu computador, sigue estos simples pasos:

1.  Primero debes clonar el repositorio: Abre una terminal o el Git Bash y copia el proyecto a tu máquina local.

    git clone https://github.com/LauraGonpar/Hito6-PizzeriaMammaMia.git

2.  Entrar a la carpeta del proyecto:

    cd Hito6-PizzeriaMammaMia

3.  Instalar las dependencias: Ejecuta el siguiente comando para instalar las librerías necesarias.

    npm install

Ejecución del Proyecto

Una vez que la instalación haya terminado, podrás ver el proyecto en tu navegador.

1.  Ejecutar el servidor local: En la misma terminal, ejecuta:

    npm run dev

2.  Ver el resultado: El proyecto se abrirá automáticamente en tu navegador en `http://localhost:5173/`. ¡Listo!
# Hito6-PizzeriaMammaMia


Espero que se encuentre bien.
Le escribo para solicitar su ayuda con un problema que estoy teniendo en el proyecto, ademas de que he tenido contratiempos para poder entregar en las fecha por problemas de salud.

Actualmente, he implementado un CartContext y un componente Cart.jsx para mostrar los productos agregados al carrito. Sin embargo, al presionar el botón “Añadir al carrito” en cada pizza, los productos no se reflejan en el carrito y este permanece vacío.

He verificado que:

El CardPizza recibe correctamente los datos de cada pizza desde la API.

El botón “Añadir” llama a la función addToCart del contexto y el console.log dentro de esta función muestra los datos del producto correctamente.

Tanto Home como Cart están dentro del mismo <CartProvider> según mi estructura en App.jsx.

Mi hipótesis es que el problema puede estar relacionado con que cartItems no se está actualizando o no se refleja correctamente en Cart.jsx. He revisado la lógica de addToCart, pero no logro identificar la causa exacta del error.

Le agradecería mucho si pudiera orientarme sobre cómo depurar o corregir este problema para que los productos se carguen correctamente en el carrito.

Muchas gracias por su tiempo y ayuda.



