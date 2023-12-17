import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img 
          src="https://i.etsystatic.com/24961489/r/il/a46e82/2636191477/il_340x270.2636191477_8khh.jpg" style={{width:"4rem"}}
          alt="Imagem do Rick and Morty"
        />
      </a>

      <nav>
        <a href="/">Home</a>

        <a href="/criar-personagem">Criar personagem</a>
      </nav>
    </header>
  );
}
