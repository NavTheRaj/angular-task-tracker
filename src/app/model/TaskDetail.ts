export interface TaskDetail {
    _id?: {
        $oid: string
    };
    text: string;
    day: string;
    reminder: boolean;
    updates: Array<String>;
}