

export const getSearchParamsAsArray = () => {
    let searchParamsArray = [];
    let search = window.location.search;

    if (search.length === 0) {
        return searchParamsArray;
    }

    let searchParts = search.split('?');

    if (searchParts.length < 2) {
        return searchParamsArray;
    }

    searchParamsArray = searchParts[1].split('&').map((parameter: string) => {
        const nameValue = parameter.split('=');
        const [name, value] = nameValue;
        const paramObject = {};

        paramObject[name] = value;

    });

    return searchParamsArray;

}
