import { Directive } from '@angular/core';

@Directive({
    selector: '[hello]',
    host: {
        'class': 'hello'
    }
})
export class ButtonHelloDirective {

    constructor() { }

}
