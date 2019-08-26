import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') open = false;

    @HostListener('click') toggleDropdownOpen() {
        this.open = !this.open;  
    };
}