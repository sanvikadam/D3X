import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {

    static nameValidate(userName: any){
        return (control: AbstractControl) : ValidationErrors | null => {
            if(control.value) {
                if(control.value!=userName) {
                    return {nameValidate: true};
                } else {
                    return null;
                }
            }
        }
    }

    static passwordValidate(password: any) {
        return (control: AbstractControl) : ValidationErrors | null => {
            if(control.value) {
                if(control.value!=password) {
                    return {passwordValidate: true};
                } else {
                    return null;
                } 
            }
        }
    }
}
