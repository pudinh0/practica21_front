import { computed, Service, signal } from '@angular/core';
import { Categoria, Clase } from '../modelos/clase';
import { CLASES_LOCALES } from '../datos/clases-locales';

@Service()
export class Catalogo {

    private readonly clases = signal<Clase[]>(CLASES_LOCALES);

    readonly categoria = signal<Categoria | "todas">("todas");

    readonly seleccionada = signal<Clase | null>(null);

    readonly visibles = computed(() => {
        const categoria = this.categoria();
        const todas = this.clases();
        return categoria === "todas" ? todas : todas.filter(clase => clase.categoria === categoria);
    });

    readonly minutosTotales = computed(() => this.visibles().reduce((total, clase) => total + clase.duracionMin, 0));

    filtrar(categoria: Categoria | "todas"): void {
        this.categoria.set(categoria);
        const elegida = this.seleccionada();

        if (elegida && categoria !== "todas" && elegida.categoria !== categoria) {
            this.seleccionada.set(null);
        }
    }


    seleccionar(clase: Clase): void {
        //Set reemplaza el valor de la variable, el update hace lo mismo pero tiene acceso a la variable actual
        this.seleccionada.update((actual) => actual === clase ? null : clase);
    }





}
