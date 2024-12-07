import { useState, useEffect } from "react";

export const PokemonCards = ({ pokemonData }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Cargar estado inicial desde localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = storedFavorites.some((fav) => fav.id === pokemonData.id);
    setIsFavorite(isFav);
  }, [pokemonData.id]);

  // Manejar favoritos
  const handleFavoriteToggle = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Quitar de favoritos
      const updatedFavorites = storedFavorites.filter(
        (fav) => fav.id !== pokemonData.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Agregar a favoritos
      const updatedFavorites = [...storedFavorites, pokemonData];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height:</span> {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span>Weight:</span> {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span>Speed:</span> {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span>Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span>Abilities:</span>
        </div>
      </div>

      {/* Botón para agregar o quitar favoritos */}
      <button
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </li>
  );
};