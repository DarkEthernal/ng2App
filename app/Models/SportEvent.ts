import {OddsCollection} from "./OddsCollection";

export class SportEvent {
    id: string;
    sport: string;
    sportAbbreviation: string;
    eventName: string;
    competitionName: string;
    startTime: string;
    odds: OddsCollection[];
}
