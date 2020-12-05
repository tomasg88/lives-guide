const client = require("contentful").createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getLives() {
	const entries = await client.getEntries({ contentType: "live" });
	console.log("getLives -> entries", entries.items);
	if (entries.items) return entries.items;
	console.log(`Error getting Entries for ${entries}.`);
}

export default { getLives };
