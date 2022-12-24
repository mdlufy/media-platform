import { BehaviorSubject, Observable } from 'rxjs';
export class Store<T> {
    private _state$: BehaviorSubject<T>;
    public state$: Observable<T>;

    get state(): T {
        return this._state$.getValue();
    }

    setState(nextState: T): void {
        this._state$.next(nextState);
    }

    constructor(initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
}
