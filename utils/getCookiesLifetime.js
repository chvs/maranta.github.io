/**
 * Функция для перевода длительностей времени в секунды,
 * переводит месяцы, дни, часы, минуты
 * @function getCookiesLifetime
 *
 * @param {Number} duration - продолжительность требуемого периода
 * @param {String} type - 'months', 'days', 'hours', 'minutes'
 *
 * @return {Number} - период в пересчете на секунды
 */
module.exports = function getCookiesLifetime(duration, type) {
  switch (type) {
    case 'months':
      return duration * 30 * 24 * 60 * 60;
    case 'days':
      return duration * 24 * 60 * 60;
    case 'hours':
      return duration * 60 * 60;
    case 'minutes':
      return duration * 60;
    default:
      return duration;
  }
};
