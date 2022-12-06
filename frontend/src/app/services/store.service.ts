import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '../interfaces/store.interface';

const inittialState: Store = {
    videos: [],
    user: { fullname: '', email: '', password: '' },
}

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private dataSubject: BehaviorSubject<Store> = new BehaviorSubject<Store>(inittialState);
    public data$: Observable<Store> = this.dataSubject.asObservable();

    constructor() {}
}