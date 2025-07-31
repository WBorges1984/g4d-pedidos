import "./login.style.css";
import digital from "../../assets/dig.png";

function Login() {
  return (
      <div className="login-card">
        <div className="fingerprint-icon">
          <img src={digital} alt="Ícone de impressão digital" />
        </div>
        <h1>Acessar minha conta.</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label htmlFor="senha">SENHA</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          <button type="submit" className="login-button">
            ACESSAR
          </button>
        </form>
        <a href="#" className="signup-link">
          Não tenho uma conta. Criar agora!
        </a>
      </div>
  );
}

export default Login;
