const string: (arg1) => string = (object) => JSON.stringify(object);

const runEncryption = (value: string) =>
    string(
        btoa(value)
            ?.split("")
            ?.map((o, i) => btoa(value).charCodeAt(i))
    );

export const encryptAndSave: (key: string, value: {id: string; title: string}[]) => void = (
    key: string,
    value: {id: string; title: string}[]
) => {
    localStorage.setItem(runEncryption(key), runEncryption(string(value)));
};

export const removeItem: (arg1: string) => void = (key: string) => {
    localStorage.removeItem(runEncryption(key));
};

type decryptFormat = [];

export const decryptEncryption: (arg1: string) => decryptFormat = (key: string) => {
    let data = "";
    JSON.parse(localStorage.getItem(runEncryption(key)))?.map(
        (o) => (data += String.fromCharCode(o))
    );
    const val: string = atob(data);
    let final: decryptFormat = [];
    if (val) final = JSON.parse(val);
    return final;
};
