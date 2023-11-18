

export default class CopmmandResponse<T> {
    Results: T | null;
    ErrorMessages: string[]
    Success: boolean = false;

    constructor(results: T | null, errorMessage?: string[]) {
        this.Results = results;
        this.Success = !!results
        if (errorMessage?.length) {
            this.ErrorMessages = errorMessage
        } else {
            this.ErrorMessages = new Array<string>();
        }


    }


}