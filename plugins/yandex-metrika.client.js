export default defineNuxtPlugin((nuxtApp) => {
  // Добавляем скрипт Яндекс.Метрики в head
  useHead({
    script: [
      {
        src: 'https://mc.yandex.ru/metrika/tag.js',
        async: true,
        defer: true
      }
    ]
  })

  // Инициализируем объект ym
  window.ym = window.ym || function() {
    (window.ym.a = window.ym.a || []).push(arguments)
  }
  window.ym.l = +new Date

  // Инициализация счетчика
  window.ym(105433497, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: true // если нужен ecommerce
  })

  // Также добавляем noscript для пользователей с отключенным JS
  useHead({
    noscript: [
      {
        children: `
          <div>
            <img
              src="https://mc.yandex.ru/watch/12345678"
              style="position:absolute; left:-9999px;"
              alt=""
            />
          </div>
        `,
        body: true
      }
    ]
  })
})