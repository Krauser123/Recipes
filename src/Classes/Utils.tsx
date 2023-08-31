
export class TagUtils {


    colorForTag: string[] = ["amber", "aqua", "blue", "light-blue", "brown", "blue-grey", "green", "light-green", "indigo", "khaki",
        "lime", "orange", "deep-orange", "pink", "purple", "deep-purple", "red", "sand", "teal", "yellow", "grey", "light-grey", "dark-grey", "pale-red", "pale-green", "pale-yellow", "pale-blue"];

    static getPathFromUrl(url: string) {
        return url.split("?")[0];
    }

    GenerateTags(tags: string[]): JSX.Element[] {

        tags = tags.filter(item => item);
        tags.sort((a, b) => a.localeCompare(b))
        let tagsContent: JSX.Element[] = [];

        for (let i = 0; i < tags.length; i++) {

            //Get random number
            let rnd = Math.floor(Math.random() * (this.colorForTag.length));

            //Build and push tag
            let colorTagWithCss = "tag w3-tag w3-padding w3-round-large w3-center w3-" + this.colorForTag[rnd];
            tagsContent.push(<span className={colorTagWithCss}>{tags[i]}</span>);

            //Remove color from list
            this.colorForTag.splice(rnd, 1);
        }
        return tagsContent;
    }
}


export class Utils {

    static getPathFromUrl(url: string) {
        return url.split("?")[0];
    }
}