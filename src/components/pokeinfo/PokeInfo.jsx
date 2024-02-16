import React from "react";
import "./PokeInfo.css";

const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="info-container">
            <h1 className="info-name">{data.name}</h1>
            <div className="detail">
              <div className="left">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt=""
                />
              </div>
              <div className="rigth">
                <div className="abilities">
                  {data.abilities.map((poke, index) => {
                    return (
                      <>
                        <div className="group">
                          <h2>{poke.ability.name}</h2>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="base-state">
                  {
                    data.stats.map(poke=>{
                      return(
                        <h3>{poke.stat.name} : {poke.base_stat}</h3>
                      )
                    })
                  }
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
