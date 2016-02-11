/**
 * Created by psk on 03/02/2016.
 */
import {Subject} from 'rxjs/Subject'
import {Subscription as RxSubscription} from 'rxjs/Subscription'

export class Subscription {
    constructor(private subscription : RxSubscription)
    {}

    public unsubscribe() : void
    {
        this.subscription.unsubscribe();
    }

}

export class Channel<T> {
    stream: Subject<T>;

    constructor()
    {
        this.stream = new Subject<T>();
    }

    publish(data: T)
    {
        this.stream.next(data);
    }

    subscribe(handler) : Subscription {
        var subscription = this.stream.subscribe(handler)
        return new Subscription(subscription);
    }
}

export class MessageBusService {
    serviceBus: Channel[];

    constructor()
    {
        this.serviceBus = [];
    }

    channel(name: string) : Channel
    {
        if (this.serviceBus[name] == null)
        {
            this.serviceBus[name] = new Channel();
        }

        return this.serviceBus[name];
    }
}