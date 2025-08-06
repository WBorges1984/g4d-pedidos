import "./login.style.css";
import digital from "../../assets/dig.png";
import { useState } from "react";
import ButtonCustom from "../../components/ButtonLogin/button.custom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function Logar() {
    console.log(email, senha);
    navigate("/Dashboard");
  }

  return (
    <div className="container-login">
      <div className="login-card">
        <div className="fingerprint-icon">
          <img src={digital} alt="Ícone de impressão digital" />
        </div>
        <h1>Acessar minha conta.</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              placeholder="Seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">SENHA</label>
            <input
              type="password"
              id="senha"
              name="senha"
              autoComplete="current-password"
              placeholder="Sua senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <ButtonCustom texto={"ACESSAR"} onclick={Logar} />
        </form>
      </div>
    </div>
  );
}

export default Login;
