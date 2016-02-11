/**
 * Created by psk on 11/02/2016.
 */
export class BetslipOdd {
    eventId: string;
    eventName: string;
    competitionName: string;
    startTime: string;
    oddCollectionIndex: number;
    oddName: string;
    oddValue: number;
    oddId: string;

    constructor(betslipOdd: BetslipOdd)
    {
        this.eventId=  betslipOdd.eventId;
        this.eventName=  betslipOdd.eventName;
        this.competitionName=  betslipOdd.competitionName;
        this.startTime= betslipOdd.startTime;
        this.oddCollectionIndex=  betslipOdd.oddCollectionIndex;
        this.oddName=  betslipOdd.oddName;
        this.oddValue=  betslipOdd.oddValue;
        this.oddId=  betslipOdd.oddId;
    }
}
