import { Component, inject, signal } from '@angular/core';
import { Categoria, CATEGORIAS, ClaseNueva } from '../../modelos/clase';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { API_URL } from '../../config';
import { multiploDe } from '../../validadores/multiplo-de';

const IMAGENES = Array.from({ length: 8 }, (_, i) => `/img/clase-0${i + 1}.jpg`);

@Component({
  imports: [ReactiveFormsModule, RouterLink, JsonPipe],
  selector: 'app-formulario-clase',
  styleUrl: './formulario-clase.css',
  templateUrl: './formulario-clase.html',
})
export class FormularioClase {

  protected readonly categorias = CATEGORIAS;
  protected readonly imagenes = IMAGENES;
  protected readonly apiUrl = API_URL;
  protected readonly listo = signal<ClaseNueva | null>(null);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    categoria: ["fuerza" as Categoria, [Validators.required]],
    descripcion: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    duracionMin: [30, [
      Validators.required,
      Validators.min(10),
      Validators.max(120),
      multiploDe(5)
    ]],

    imagen: [IMAGENES[0], [Validators.required]],
  });


  protected get f() {
    return this.form.controls;
  }

  protected guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.listo.set(null);
      return;
    }


    const datos = this.form.getRawValue();
    console.log("Clase a guardar:", datos);
    this.listo.set(datos);
  }

}
