export interface Task {
    _id?: {
        $oid: string
    };
    text: string;
    day: string;
    reminder: boolean;
}