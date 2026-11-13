import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function multiploDe(n: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valor = Number(control.value);

        if (control.value === null || control.value === undefined || control.value === '' || isNaN(valor)) {
            return null; 
        }

        return valor % n === 0 ? null : { multiploDe: { n, valor } };
    };
}
