import {SportEvent} from "../Models/SportEvent";

export class mockDataProvider {

    public getData() : SportEvent[]
    {
        let events = new Array<SportEvent>();

        events.push({
            id: "1",
            sport: "Football",
            sportAbbreviation: "fb",
            eventName: "Barcelona vs Real Madrid",
            competitionName: "Spain - Primera division",
            startTime: "21. 2 2016 18:15",
            odds: [
                {
                    name: 'Main odds',
                    odds: [
                        {id: "1", name: "Barcelona", value: 3.5, isSelected: false},
                        {id: "2", name: "X", value: 5.0, isSelected: false},
                        {id: "3", name: "Real", value: 2.3, isSelected: false}]
                },
                {
                    name: 'Double Chance',
                    odds: [
                        {id:"4", name:"1X", value: 1.5, isSelected: false},
                        {id:"5", name:"12", value: 1.65, isSelected: false},
                        {id:"6", name:"X2", value: 1.75, isSelected: false}]
                },
                {
                    name: 'Over/Under',
                    odds: [
                        {id:"7", name:"Over 2.5", value: 2.45, isSelected: false},
                        {id:"8", name:"Under 2.5", value: 1.75,  isSelected: false}]
                }
            ]
        });
        events.push({
            id: "2",
            sport: "Football",
            sportAbbreviation: "fb",
            eventName: "Wien vs Salzburg",
            competitionName: "Austria - Bundesliga",
            startTime: "21. 2 2016 20:15",
            odds: [
                {
                    name: 'Main odds',
                    odds: [
                        {id:"1", name:"Wien", value: 2.1,  isSelected: false},
                        {id:"2", name:"X", value: 7.5,  isSelected: false},
                        {id:"3", name:"Salzburg", value: 4.5, isSelected: false}]
                },
                {
                    name: 'Double Chance',
                    odds: [
                        {id:"4", name:"1X", value: 1.2,  isSelected: false},
                        {id:"5", name:"12", value: 1.25,  isSelected: false},
                        {id:"6", name:"X2", value: 1.85,  isSelected: false}]
                },
                {
                    name: 'Over/Under',
                    odds: [
                        {id:"7", name:"Over 2.5", value: 2.30, isSelected: false},
                        {id:"8", name:"Under 2.5", value: 1.55,  isSelected: false}]
                },
                {
                    name: 'Handicap 0:1',
                    odds: [
                        {id:"9", name:"1X", value: 1.55,  isSelected: false},
                        {id:"10", name:"12", value: 6.50,  isSelected: false},
                        {id:"11", name:"X2", value: 2.65, isSelected: false}]
                },
            ]
        });
        events.push({id: "3",
            sport: "Football",
            sportAbbreviation: "fb",
            eventName: "London vs Newcastle",
            competitionName: "England - Premier league",
            startTime: "22. 2 2016 16:45",
            odds: [
                {
                    name: 'Main odds',
                    odds: [
                        {id:"1", name:"London", value: 1.55, isSelected: false},
                        {id:"2", name:"X", value: 4.5,  isSelected: false},
                        {id:"3", name:"Newcastle", value: 3.25, isSelected: false}]
                },
                {
                    name: 'Double Chance',
                    odds: [
                        {id:"4", name:"1X", value: 1.3,  isSelected: false},
                        {id:"5", name:"12", value: 1.35, isSelected: false},
                        {id:"6", name:"X2", value: 1.95,  isSelected: false}]
                },
                {
                    name: 'Over/Under',
                    odds: [
                        {id:"7", name:"Over 2.5", value: 2.15, isSelected: false},
                        {id:"8", name:"Under 2.5", value: 1.75,  isSelected: false}]
                }
            ]
        });
        events.push({id: "4",
            sport: "Tennis",
            sportAbbreviation: "te",
            eventName: "Mayer Leondardo vs Pella Guido",
            competitionName: "Buenos Aires - ATP",
            startTime: "22. 2 2016 17:00",
            odds: [
                {
                    name: 'Main odds',
                    odds: [
                        {id:"1", name:"Mayer Leondardo ", value: 1.43, isSelected: false},
                        {id:"2", name:"Pella Guido", value: 2.66,  isSelected: false}]
                }
            ]
        });
        events.push({id: "5",
            sport: "Hockey",
            sportAbbreviation: "hc",
            eventName: "Dinamo Riga vs Jokerit",
            competitionName: "RUS - KHL",
            startTime: "22. 2 2016 17:00",
            odds: [
                {
                    name: 'Main odds',
                    odds: [
                        {id:"1", name:"Dinamo Riga", value: 2.65,  isSelected: false},
                        {id:"2", name:"X", value: 3.80,isSelected: false},
                        {id:"3", name:"Jokerit", value: 2.25,  isSelected: false}]
                },
                {
                    name: 'Over/Under',
                    odds: [
                        {id:"4", name:"Over 5.5", value: 2.30,  isSelected: false},
                        {id:"5", name:"Under 5.5", value: 1.55, isSelected: false}]
                }
            ]
        });
        return events;
    }
}