import React from "react";
import "./PokeInfo.css";

const PokeInfo = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1 className="info-name">{data.name}</h1>
          <div className="detail">
            <div className="left">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt=""
              />
            </div>
            <div className="rigth">
              <div className="rigth-scroll">
                <h2>Ability</h2>
                <div className="abilities">
                  {data.abilities.map((poke) => {
                    return (
                      <div className="group">
                        <h2>{poke.ability.name}</h2>
                      </div>
                    );
                  })}
                </div>
                <h2>Stats</h2>
                <div className="base-state">
                  {data.stats.map((poke) => {
                    return (
                      <div key={poke.stat.name} className="poke-stat">
                        <h3>{poke.stat.name}</h3>
                        <h3>{poke.base_stat}</h3>
                      </div>
                    );
                  })}
                </div>
                <h2>Types</h2>
                <div className="abilities">
                  {data.types.map((poke) => {
                    return (
                      <div key={poke.type.name} className="group">
                        <h2>{poke.type.name}</h2>
                      </div>
                    );
                  })}
                </div>
                <h2>Other</h2>
                <div className="base-state">
                  <div className="poke-stat">
                    <h3>weight</h3>
                    <h3>{data.weight}</h3>
                  </div>
                  <div className="poke-stat">
                    <h3>height</h3>
                    <h3>{data.height}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeInfo;
