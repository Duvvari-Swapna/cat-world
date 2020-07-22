export interface Image {
    breeds: Array<null>;
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface Category {
    id: number;
    name: string;
}

export interface Images {
    breeds: Array<null>;
    categories: Array<Object>;
    id: string;
    url: string;
    width: number;
    height: number;
}
