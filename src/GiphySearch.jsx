import React, { useState, useEffect } from 'react';
import './styles/GifySearch.css';
import Heading from './Heading';
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}
function GiphySearch({maximumScore}) {
  const [pokemonNames, setPokemonNames] = useState([
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree'
  ]);

  const [imageUrls, setImageUrls] = useState([]);
  const [clicked,setClicked]=useState([]);
  const [current,setCurrent]=useState(0);
  const [maxScore,setMaxScore]=useState(maximumScore);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const promises = pokemonNames.map(async (pokemon) => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${pokemon}`);
          }
          const data = await response.json();
          return [pokemon, data.sprites.front_default];
        } catch (error) {
          console.error(`Error fetching data for ${pokemon}: ${error}`);
          return null; // Handle errors gracefully, returning null or a default value
        }
      });
    
      try {
        const urls = await Promise.all(promises);
        setImageUrls(urls.filter((url) => url !== null)); // Filter out any null values
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    return true;
    };    

    fetchPokemonData();
  }, [pokemonNames]);

  return (
    <div className="displaying">
    <Heading current={current} Maxscore={maxScore} />
    <div>
      <div className="gif-list" >
        {imageUrls.map((url, index) => (
          <div key={index} className="PokeMonImage" onClick={()=>{
            console.log(clicked);
            if(clicked.includes(imageUrls[index][0])){
                alert("you lost");
                setMaxScore(current);
                setCurrent(0);
                setClicked([]);
                <GiphySearch maximumScore={maxScore}/>
            }
            else{
              if(current+1==12){
                alert("you won");
                setMaxScore(current);
                setCurrent(0);
                <GiphySearch maximumScore={maxScore}/>
              }
              else{
                if(current>maxScore)
                  setMaxScore(current)
                setClicked([...clicked, imageUrls[index][0]])
                setCurrent(current+1);
                setMaxScore(Math.max(current+1,maxScore))
                shuffleArray(imageUrls);
                setImageUrls(imageUrls);
              }
            }
          }}>
            <img className="PokemonSize" src={url[1]} alt={`Pokemon ${url[0]}`} />
            <h4>{url[0]}</h4>
          </div>
        ))}
        {/* {console.log(imageUrls)} */}
      </div>
    </div>
    </div>
  );
}

export default GiphySearch;
