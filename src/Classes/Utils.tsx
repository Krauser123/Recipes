
export class Utils {

    static getPathFromUrl(url: string) {
        return url.split("?")[0];
    }
}