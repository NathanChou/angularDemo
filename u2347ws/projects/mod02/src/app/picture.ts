export class Picture {

    constructor(
        public PictureID: number,
        public Url: string,
        public Subject: string,
        public Author: string) 
        {}

}


export const picture = new Picture(1, 
    "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", 
    "大都會公園", 
    "Anita");