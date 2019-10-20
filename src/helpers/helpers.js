
/**
 * @description formata um número válido em um formato de moeda pré definido
 * @param {String} locale
 * @param {{}} props
 * @param {Number} valor
 * @returns {string}
 */
export function numberFormat(locale = 'pt-BR', props = {}, valor = 0) {
  const formater = new Intl.NumberFormat(locale, props);
  return formater.format(valor);
}