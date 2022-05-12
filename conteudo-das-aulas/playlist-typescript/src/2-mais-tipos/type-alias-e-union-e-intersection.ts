type user = {
    name: string;
    lastname: string;
    date_of_birth: string;
    age?: number;
};

const artur: user = {
    name: "Artur",
    lastname: "Moura",
    date_of_birth: "08/06/1995",
    //age: 26,
};

//union types
type log_level = "info" | "error" | "debug";

function log_message(message: string, level: log_level) {
    console.log(`${level} - ${message}`);
}

console.log(log_message("Uma mensagem", "error"));

//intersection types
type about = {
    bio: string;
    interests: string[];
};

type profile = user & about;
const user_with_profile: profile = {
    name: "Artur",
    lastname: "Moura",
    date_of_birth: "08/06/1995",
    bio: "Olá, meu nome é Artur",
    interests: ["gatos", "música"],
};

type composed_profile = user & {
    log: log_level;
};
