import React from "react";

import Teams from '../teams.json'
import '../styles.css/teams.css'

class TeamsInfo extends React.Component {

    constructor(){

        super()

    }

    render(){

        console.log(Teams.map(e => e.shortName));

        return(
            <div>
                <header>
                    <h1>All Teams</h1>
                </header>
                
                <div className="teams">

                    {Teams.map(e =>  (
                        <div className="oneTeam">

                            <h2>{e.shortName}</h2>
                            <img src={e.crestUrl} alt="image" />
                            <h3>Stade : {e.venue}</h3>
                            <ul>
                                <li>Adress {e.address}</li>
                                <li>Tél : {e.phone}</li>
                                <li>Date of Fundation : {e.founded}</li>
                            </ul>
                    
                         </div>
                    
                    ))}
                </div>
            </div>
        )
    }
}

export default TeamsInfo