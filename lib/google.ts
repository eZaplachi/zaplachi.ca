import { auth } from "google-auth-library";

const keyEnvVar = process.env["CREDS"];
if (!keyEnvVar) {
	throw new Error("The $CREDS env variable was not found!");
}

const keys = JSON.parse(keyEnvVar);

async function main() {
	const client = auth.fromJSON(keys);
	client.credentials.scope = "https://mail.google.com/";
	const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`;
	const res = await client.request({ url });
	console.log(res.data);
}

main().catch(console.error);