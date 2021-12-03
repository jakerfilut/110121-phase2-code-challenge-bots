import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API =("http://localhost:8002/bots")


function BotsPage() {

  const [bots, setBots] = useState([])
  //start here with your code for step one

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(botsData => setBots(botsData))
    }, [])

    function addToArmy(bot){
      setBots(bots.map((b) => 
    b.id === bot.id ? {...b, army:true} : b
      ))}

      function removeToArmy(bot){
        setBots(bots.map((b) => 
      b.id === bot.id ? {...b, army:false} : b
        ))}

        function destroyBot(bot){
          setBots(bots.filter((b) => b.id !== bot.id))
        }



  return (
    <div>
      <YourBotArmy 
      destroyBot={destroyBot}
      handleArmy={removeToArmy}
      bots={bots.filter((bot) => bot.army)}/>
      <BotCollection 
      destroyBot={destroyBot}
      handleArmy={addToArmy}
      bots={bots}/>
    </div>
  )
}

export default BotsPage;
