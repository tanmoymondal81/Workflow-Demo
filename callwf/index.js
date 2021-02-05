//immutable
const
    client_oauth = require('client-oauth2'),
    request = require('request-promise'),

    client = new client_oauth({
        clientId: 'sb-clone-a1a26b58-7a41-4447-883d-82ca2df34989!b73436|workflow!b10150',
        clientSecret: '92d43656-a9ce-4581-85ad-968b0ff232df$szuM66yJgNM7O6fgUEroVoIUoVzDFrO2WcAj4RmHH6A=',
        accessTokenUri: 'https://6c1d234atrial.authentication.eu10.hana.ondemand.com/oauth/token'
    })

async function main() {
    const
        token = await client.owner.getToken('USERNAME', 'PASSWORD'),
        req = request.defaults({
            headers: {
                Authorization: 'Bearer ' + token.accessToken
            }
        }),

        result = await req.post('https://api.workflow-sap.cfapps.eu10.hana.ondemand.com/workflow-service/rest/v1/workflow-instances').json({
            "definitionId": "orderprocess1",
            "context": {
                "request": {
                    "Id": "HT-1002",
                    "Quantity": 42
                }
            }
        })

    console.log(JSON.stringify(result))
}

if (true){

}

main()
