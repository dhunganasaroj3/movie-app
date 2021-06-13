type Option = {
    method?: string;
    header?: {
        "Content-Type"?: string;
        "X-Request-With"?: string;
    };
};

export type Res = {
    status: number;
    data: {
        limit: number;
        movie_count: number;
        movies: [];
        page_number: number;
    };
    message: string;
};

export class ResponseError extends Error {
    public response: Response;

    constructor(response: Response) {
        super(response.statusText);
        this.response = response;
    }
}

function parseJSON(response: Response): Promise<Res> {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

function checkStatus(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new ResponseError(response);
    error.response = response;
    throw error;
}

export function request(url: string, options: Option): Promise<Res> {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .catch((err) => {
            if (err.message === "Failed to fetch") {
                throw new Error("internet error");
            }
            throw err;
        });
}
