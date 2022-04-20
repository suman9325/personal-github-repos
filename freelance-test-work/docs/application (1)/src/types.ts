interface Indexable{
  [index:string] : any
}
export interface Transmission extends Indexable{
    id: string;
    bin: string;
    version: string;
    transactionCode: string;
    pcn: string;
    transactionCount: string;
    serviceProviderQl: string;
    serviceProviderId: string;
    fillDate: string;
    rxNumbers: string[];
    rawMessageReceived: string;
    receivedAt: string;
    rawMessageReturned: string;
    returnedAt: string;
  }
  export type Consumer<T> = (value: T) => void;