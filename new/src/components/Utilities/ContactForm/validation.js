export const formErrors = {
  name: {
    en: "Incorrect name",
    ru: "Некорректное имя",
    uk: "Некоректне імʼя"
  },
  email: {
    en: "Incorrect e-mail",
    ru: "Некорректный e-mail",
    uk: "Некоректний e-mail"
  },
  tel: {
    en: "Incorrect telephone",
    ru: "Некорректный телефон",
    uk: "Некоректний телефон"
  },
  message: {
    en: "Incorrect message",
    ru: "Некорректное сообщение",
    uk: "Некоректне повідомлення"
  }
};

const pattern = /^[0-9+]+[0-9-]{3,15}$/;

const regObject = {
  maxLength: 255,
  required: true
};

export const validation = {
  name: {
    ...regObject,
    pattern: /^[a-z\u0410-\u044f\u0456\u0457]+$/i
  },
  email: regObject,
  tel: {
    ...regObject,
    pattern
  },
  message: {
    ...regObject,
    maxLength: 350
  }
};
