¿qué pieza de React Router corresponde a router-outlet, a routerLink y a routerLinkActive?

de router-outlet a <Outlet/>

de routerLink a <Linkto="/ruta">

de routerLinkActive a <navLink to="/ruta">

¿por qué la ruta comodín (**) va al final y la ruta vacía necesita pathMatch: 'full'?
la ruta comodin va al final asi no oculta ninguna ruta valida, y la ruta vacia necesita full por que hace que coincida
solo cuando la url completa esta vacia, evitando redireccionamientos que interfieran con las demas rutas


¿dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del useState de React?
vive en el formControl del campo, normalmente forma parte deun un fromgroup

en react useState guarda el valor como estado del componente, cuando llamas a la funcion que actualiza react vuelve a renderizar el componente

¿qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con hasError?
un validor porpio devuelve el null si el valor es vadilo, si no lo es devuelve un objeto con una clave que identifica el error


¿qué cambió en el servicio del catálogo y por qué ningún componente se enteró?
los componentes no se deben de enterar, ellos siempre recibiran los objetos con la misma forma incluso si la implementacion, lenguaje
del servicio cambia

¿por qué no hizo falta iniciar sesión para leer el catálogo?
por que el endpoint de get clases esta marcado como publico, a difereencia de crear, editar o eliminar clases que requiere el rol de administrador