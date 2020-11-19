import { ResponseItem } from './responseItem';

export interface Page {
 count: number;
 next: string;
 previous: string;
 results: ResponseItem[]
}
