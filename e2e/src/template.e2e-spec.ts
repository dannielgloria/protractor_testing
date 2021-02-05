import { logging, browser, element, by } from 'protractor';
import { TemplatePage} from './template.po'
import { protractor } from 'protractor/built/ptor';

const origFn = browser.driver.controlFlow().execute;
// esta función pone un retrazo de tiempo entre cada paso del controlFlow de protractor
browser.driver.controlFlow().execute = function stop() {
  const args = arguments;

  origFn.call(browser.driver.controlFlow(), () => {
    return protractor.promise.delayed(500); // ** Ejercicio 6 **
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
// puede correr la prueba con el comando ng e2e en la carpeta del proyecto, si necesita cambiar el puerto escriba ademas --port=PORTNUMBER

// ** Ejercicio 4 **
describe('Ejercicio 4', () => {
    let page: TemplatePage;
    beforeEach(() => {
        page = new TemplatePage();
    });

    it('Prueba del arreglo y verificar que aparece el mensaje de error', async () => {
      const array = ['jorge', 'jorge@', 'jorge@ho'];
      page.navigateToTemplatePage();
      await browser.waitForAngular();
       // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < array.length; i++ ){
        await page.setEmail(array[i]);
        expect(page.getTextOfEspecificError(0)).toBeTruthy();
      }
    });

    // ** Ejercicio 5 **
    it('Se debe de seleccionar Cuba en el CheckBox', async () => {
      const selcetContry = element(by.cssContainingText('option', 'Cuba'));
        await page.navigateToTemplatePage();
        await browser.waitForAngular();
        // !!! Graficamente no se cambia el checkBox pero en la logica de la seleccion si se realiza dicho cambio !!!
        expect (selcetContry.getText()).toEqual('Cuba');
    });

    afterEach(async () => { // Este método se ejecuta despues de cada prueba
        // Revisa si no hay errores severos emitidos por el navegador
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});

