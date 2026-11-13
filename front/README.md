¿qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?
un signal guarda el valor del estado, estos se pueden leer y modificar con los metodos .set y update, este es similar al useState

un computed calcula un valor a partir de uno o mas signal. es de solo lectura y angular lo v uelve a calcular cuando cambian las dependencias
, este viene siendo similar al useMemo

La gran diferencia es que angular detecta automaticamente  que signals usa el computed y react el useMemo suele requerir que 
declares sus dependencias en un arreglo


¿qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?
crea otra instancias del servicio, speara de la que usa el componente princiapl. cada una tendria su propio estado