export default class Chat {
  constructor(container) {
    this.container = document.querySelector(container);
  }

  loginChat() {
    const form = `
        <form class="login-form" name="login-form">
            <h1 class="form-title">Выберите псевдоним</h1>
            
            <input type="text" class="login-nickname" name="nickname" required>
            
            <button class="btn login-submit" type="submit">Продолжить</button>
        `;

    return this.container.insertAdjacentHTML('beforeend', form);
  }

  init() {
    this.loginChat();

    const form = document.forms['login-form'];
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const request = await fetch('./api/login', {
        method: 'POST',
        body: new FormData(form),
      });
      const response = await request;

      form.reset();

      if (response.status !== 204) {
        console.log('Такой пользователь есть')
      }

      console.log(response);
    })
  }
}
