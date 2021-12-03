import React from "react";
import BotCard from "./BotCard"
function YourBotArmy({bots,handleArmy, destroyBot}) {
  
  
  const mapBots = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot}
    handleArmy={handleArmy}
    destroyBot={destroyBot}/>
  ))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {mapBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
