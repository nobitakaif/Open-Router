
const CHARACTER = "dfghgwdkgjsleofbaiofbaofaoiufbwifubIUQIURBIVBSOIUFQAJJAFAIUFAFJFAIBiuifaufoqaurjnkbjhbvqpirhofjnifuqikjJJIUAFPIAUHQ"
const newL = "aZbUcXdWeVfUgThSiRjQkPlOmNnMoLpKqJrIsHtGuFvEwDxCyBzA"

export function generateApiKey(){
    let apikey = ""

    for (let i = 0;i<30;i++){
        apikey += newL[Math.floor(Math.random() * Math.random() * i ) ] + CHARACTER[Math.floor(Math.random() * i)]
    }
    return apikey;
}
