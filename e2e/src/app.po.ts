import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ReactivePage { // clase de la página formularios reactive

  title: ElementFinder;
  nameinput: ElementFinder;
  lastNameinput: ElementFinder;
  emailinput: ElementFinder;
  userinput: ElementFinder;
  pwdinput: ElementFinder;
  pwd2input: ElementFinder;
  statelinput: ElementFinder;
  towninput: ElementFinder;
  saveButton: ElementFinder;
  addButton: ElementFinder;
  deletehobbieButton: ElementArrayFinder;
  errorsText: ElementArrayFinder;

  constructor() {
    this.title = element(by.css('h4')); // obtenemos el elemento h4
    this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName
    this.lastNameinput = element(by.css('input[formControlName=apellido]'));
    this.emailinput = element(by.css('input[formControlName=correo]'));
    this.userinput = element(by.css('input[formControlName=usuario]'));
    this.pwdinput = element(by.css('input[formControlName=pass1]'));
    this.pwd2input = element(by.css('input[formControlName=pass2]'));
    this.statelinput = element(by.css('input[formControlName=estado]'));
    this.towninput = element(by.css('input[formControlName=municipio]'));
    this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    this.addButton = element(by.className('btn-success'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    this.deletehobbieButton = element.all(by.className('btn-danger'));
  }

  navigateToReactivePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'reactive') as Promise<unknown>;
  }

  getTitleText(): Promise<string> { // obtiene el titulo de la página
    return this.title.getText() as Promise<string>;
  }

  setName(name: string): Promise<void>{ // escribe el el input name
    this.nameinput.clear();
    return this.nameinput.sendKeys(name) as Promise<void>;
  }

  getName(): Promise<string>{ // regresa el texto del input name
    return this.nameinput.getAttribute('value') as Promise<string>;
  }

  setLastName(lastName: string): Promise<void>{ // escribe el el input last name
    this.lastNameinput.clear();
    return this.lastNameinput.sendKeys(lastName) as Promise<void>;
  }

  getLastName(): Promise<string>{ // regresa el texto del input last name
    return this.lastNameinput.getAttribute('value') as Promise<string>;
  }

  setEmail(email: string): Promise<void>{ // escribe el el input last name
    this.emailinput.clear();
    return this.emailinput.sendKeys(email) as Promise<void>;
  }

  getEmail(): Promise<string>{ // regresa el texto del input last name
    return this.emailinput.getAttribute('value') as Promise<string>;
  }

  setUser(user: string): Promise<void>{ // escribe el el input last name
    this.userinput.clear();
    return this.userinput.sendKeys(user) as Promise<void>;
  }

  getUser(): Promise<string>{ // regresa el texto del input last name
    return this.userinput.getAttribute('value') as Promise<string>;
  }

  setPwd(pwd: string): Promise<void>{ // escribe el el input last name
    this.pwdinput.clear();
    return this.pwdinput.sendKeys(pwd) as Promise<void>;
  }

  getPwd(): Promise<string>{ // regresa el texto del input last name
    return this.pwdinput.getAttribute('value') as Promise<string>;
  }

  setPwd2(pwd2: string): Promise<void>{ // escribe el el input last name
    this.pwd2input.clear();
    return this.pwd2input.sendKeys(pwd2) as Promise<void>;
  }

  getPwd2(): Promise<string>{ // regresa el texto del input last name
    return this.pwd2input.getAttribute('value') as Promise<string>;
  }

  setState(state: string): Promise<void>{ // escribe el el input last name
    this.statelinput.clear();
    return this.statelinput.sendKeys(state) as Promise<void>;
  }

  getState(): Promise<string>{ // regresa el texto del input last name
    return this.statelinput.getAttribute('value') as Promise<string>;
  }

  setTown(town: string): Promise<void>{ // escribe el el input last name
    this.towninput.clear();
    return this.towninput.sendKeys(town) as Promise<void>;
  }

  getTown(): Promise<string>{ // regresa el texto del input last name
    return this.towninput.getAttribute('value') as Promise<string>;
  }

  clickSaveButton(): Promise<void>{ // presiona el botón guardar
    return this.saveButton.click() as Promise<void>;
  }

  clickAddButton(): Promise<void>{ // presiona el botón añadir
    return this.addButton.click() as Promise<void>;
  }

  clickDeleteHobbieButton(): Promise<void>{
    return this.deletehobbieButton.click() as Promise<void>;
  }

  deleteHobbieButtonIsPresent(): Promise<boolean>{ // comprueba si el botón borrar existe
    this.addButton = element(by.className('btn-danger'));
    return this.addButton.isPresent() as Promise<boolean>;
  }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }
}
