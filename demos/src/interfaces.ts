interface Settings {
    title: string;
    color: string;
    // position is an optional member
    position?: string;
}

// Interface used as type of a variable
let settings: Settings = {
    title: "My app",
    color: "red"
}

// Interface as type of a parameter
function initialize(settings: Settings) {

}

initialize({
    title: "Initializer",
    color: "Blue"
})

class CustomerSetting implements Settings {
    title = '';
    color = '';
    
    constructor(title: string, color: string) {
        this.title = title;
        this.color = color;
    }
}




