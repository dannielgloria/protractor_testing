import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class TemplatePage {

    emailinput: ElementFinder;
    errorsText: ElementArrayFinder;

    constructor(){
        this.emailinput = element(by.name('correo'));
        this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    }

    setEmail(email: string): Promise<void>{
        this.emailinput.clear();
        return this.emailinput.sendKeys(email) as Promise<void>;
      }

    getEmail(): Promise<string>{ // regresa el texto del input name
        return this.emailinput.getAttribute('value') as Promise<string>;
    }

    getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
      return this.errorsText.get(indice).getText() as Promise<string>;
    }

    navigateToTemplatePage(): Promise<unknown> { // navega a la ruta /reactive
        return browser.get(browser.baseUrl + 'template') as Promise<unknown>;
    }
}
