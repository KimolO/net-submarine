export interface Isize {
    bufferSize: number;
    HeaderContentLenght: string;
    HeaderContentEncoding: string;
    url: string;
}

export interface IPerformanceJSON {
     document: Isize[];
     stylesheet: Isize[];
     image: Isize[];
     media: Isize[];
     font: Isize[];
     script: Isize[];
     texttrack: Isize[];
     xhr: Isize[];
     fetch: Isize[];
     eventsource: Isize[];
     websocket: Isize[];
     manifest: Isize[];
     other: Isize[];
}
