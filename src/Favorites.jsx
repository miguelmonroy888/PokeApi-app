import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonCards } from "./PokemonCards";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>Pokédex</h1>
        <div className="links">
          <Link to="/">Página Principal</Link>
          <Link to="/favorites">Favoritos</Link>
        </div>
      </nav>

      <section className="container">
        <h1>Favoritos</h1>
        {favorites.length === 0 ? (
          <p>No tienes Pokémon favoritos.</p>
        ) : (
          <ul className="cards">
            {favorites.map((pokemon) => (
              <PokemonCards key={pokemon.id} pokemonData={pokemon} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};