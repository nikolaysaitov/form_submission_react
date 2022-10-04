import logo from '../src/images/logo.svg';
import './App.css';


function App() {





  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container form__container">
    <div className="form__hello">
      <img className="form__logo" src={logo} alt="Логотип" />
      <h1 className="form__header">Отправка формы!</h1>
      <form onSubmit={handleSubmit} className="form__register validation={formCallbackValidation}">
        <p className="form__text">Имя</p>
        <input
          name="name"
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
        <p className="form__text">Пароль</p>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className="form__input"
          required
          id="password-input"
          // onInput={handleChange2}
          // isValid={!errors.password}
          // value={values.password  || ''}
          // onFocus={onFocus}
        />
        {/* {errors.password && (
          <ValidText type="auth">{errors.password}</ValidText>
        )} */}
        <span className=""></span>
        <button
          type="submit"
          className="form__submit"
          
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
  );
}

export default App;
