const client = require("contentful-management").createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});


export async function createCategory() {
    console.log("🚀 ~ file: createCategorys.js")
    client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('category', {
            fields: {
                name: {
                    'en-US': 'Y publicada?'
                },
                description: {
                    'en-US': '"a ver la repe" diría Guido'
                }
            }
        }))
        .then((entry) => entry.publish())
        .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
        .catch(console.error);
}

export async function createLive (data) {
    console.log("🚀 ~ file: createLives.js ~ line 26 ~ createLive ~ data", data)
    
    client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('live', {
            fields: {
                title: {
                    'en-US': data.title
                },
                when: {
                    'en-US': data.when
                },
                description: {
                    'en-US': data.description
                },
                account: {
                    'en-US': data.account
                },
                rrss: {
                    'en-US': data.rrss
                },
            }
        }))
        .then((entry) => entry.publish())
        .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
        .catch(console.error);
}

export default { createCategory };
