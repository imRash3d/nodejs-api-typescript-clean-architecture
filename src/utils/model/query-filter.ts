export type Filter<T> = {
    [K in keyof T]?: T[K] | { $eq?: T[K]; $ne?: T[K]; $gt?: T[K]; $lt?: T[K]; $gte?: T[K]; $lte?: T[K] };
} & {
    $and?: Filter<T>[];
    $or?: Filter<T>[];
    $orderby?: { [P in keyof T]?: 1 | -1 }; // 1 for ascending, -1 for descending
};