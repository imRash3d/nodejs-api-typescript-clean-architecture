

export default class QueryResponse<T> {
    Results: QueryResult<T> | null;
    ErrorMessages: string[]
    Success: boolean = false;

    constructor(
        data: QueryResult<T> | null,
        errorMessage?: string[]
    ) {

        this.Results = data ?? null;
        this.Success = !!this.Results
        if (errorMessage?.length) {
            this.ErrorMessages = errorMessage
        } else {
            this.ErrorMessages = new Array<string>();
        }

    }


}

export  class QueryResult<T> {
    Data: T;
    TotalCount: number;
    constructor(data: T, totalCount: number) {
        this.Data = data;
        this.TotalCount = totalCount;
    }
} 