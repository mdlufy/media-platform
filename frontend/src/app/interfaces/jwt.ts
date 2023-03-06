export interface JwtToken<T> {
    header: string;
    payload: T;
}