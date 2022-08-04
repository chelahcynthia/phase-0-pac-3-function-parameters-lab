function introduction(name = 'Cynthia') {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name = 'Chelah', language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}