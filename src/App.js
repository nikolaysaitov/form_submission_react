
import emailjs from "emailjs-com";
import { Form, Input, Button, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import logo from '../src/images/logo.svg';
import './App.css';



function App () {
  const SERVICE_ID = "service_xjj6kda";
  const TEMPLATE_ID = "template_au8lwme";
  const USER_ID = "aZuwMPnueVkC4IMoq";
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Сообщение отправлено"
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Упсс, что-то пошле не так...",
            text: error.text,
          })
        });
      e.target.reset()
    };



  return (
    <div className="App container form__container">
    <div className="form__hello">
      <img className="form__logo" src={logo} alt="Логотип" />
      <h1 className="form__header">Отправка формы!</h1>
      <Form onSubmit={handleOnSubmit} className="form__register validation={formCallbackValidation}">
        <p className="form__text">Имя</p>
        <input
          name="name"
          control={Input}
          placeholder="Имя"
          className="form__input"
          required
          id="name-input"
          // onInput={handleChange2}
          // isValid={!errors.name}
          // value={values.name || ''}
          // onFocus={onFocus}
        />
        {/* {errors.name && <ValidText type="auth">{errors.name}</ValidText>} */}
        <p className="form__text">Email</p>
        <input
          type="email"
          control={Input}
          name="email"
          placeholder="Email"
          className="form__input"
          required
          id="email-input"
          // onInput={handleChange2}
          // isValid={!errors.email}
          // value={values.email || ''}
          // onFocus={onFocus}
        />
        {/* {errors.email && <ValidText type="auth">{errors.email}</ValidText>} */}
        <p className="form__text">Сообщение</p>
        <textarea
          type="text"
          control={TextArea}
          name="message"
          placeholder="Текст"
          className="form__input"
          required
        ></textarea>
        {/* {errors.password && (
          <ValidText type="auth">{errors.password}</ValidText>
        )} */}
        <span className=""></span>
        <Button
          type="submit"
          className="form__submit"
          
        >
          Отправить
        </Button>
      </Form>
    </div>
  </div>
  );
}

export default App;
