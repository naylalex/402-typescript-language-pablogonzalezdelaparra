class Contractor {
    constructor(
        public firstName: string, 
        public lastName: string,
        public contractorId: number) {}
}

class InternationalContractor extends Contractor {
    // If a constructor is implemented, super() needs to be invoked
    constructor() {
        super('', '', 0)
    }
    requestProject(projectId: number) {
        console.log(projectId);
    }
}

let internationalContractor = new InternationalContractor();
internationalContractor.requestProject(190);