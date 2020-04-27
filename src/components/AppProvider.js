import React, { useState } from "react";
import faker from 'faker'
const AppContext = React.createContext();

function AppProvider(props) {
  const [heroes, setHeroes] = useState(
    [...Array(121)].map((item, index) => ({
      id: index,
      nickname: faker.internet.userName().slice(0,5),
      realName: faker.name.firstName(),
      originDesc: faker.lorem.sentence(5),
      superPowers: faker.lorem.words(3),
      catchPhrase: faker.company.catchPhrase(),
      images: [...Array(5)].map(img => `https://i.picsum.photos/id/${Math.round(Math.random() * 10) * 100}/500/500.jpg`)
    }))
  )

  function addHero(hero) {
    setHeroes(heroes.concat(hero))
  }

  function updateHero(heroId, updHero) {
    setHeroes(heroes.map(hero => {
      if (hero.id != heroId) return hero
      else return {
        ...hero,
        ...updHero
      }
    }))

    console.log(updHero)
  }

  function deleteHero(id) {
    setHeroes(heroes.filter(hero => hero.id != id))
  }

  return (
    <AppContext.Provider
      value={{heroes, addHero, deleteHero, updateHero}}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
