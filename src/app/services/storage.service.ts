export abstract class StorageService {

    public abstract setString(key: string, value: string);
    public abstract getString(key: string): string;
}
