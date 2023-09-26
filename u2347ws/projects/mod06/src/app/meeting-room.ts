export class MeetingRoom {
    constructor(
        public id: number,
        public name: string,
        public size: string,
        public projector?: boolean,
        public TV?: boolean
    ) {}
}
