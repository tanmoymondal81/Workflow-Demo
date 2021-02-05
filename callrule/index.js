//immutable
const
    client_oauth = require('client-oauth2'),
    request = require('request-promise'),

    client = new client_oauth({
        clientId: 'sb-clone-3a9aec88-b8ba-432e-9bba-cc0ec5884f2c!b73436|bpmrulebroker!b2466',
        clientSecret: '873b0f73-a166-4345-b178-981060d443c8$BYMOXzdCt4PlEf14VP6_hMHkcbd2QA4Tf8OZPXHN5EA=',
        accessTokenUri: 'https://6c1d234atrial.authentication.eu10.hana.ondemand.com/oauth/token'
    })

async function main() {
            const
                token = await client.owner.getToken('usabapconsulting@gmail.com', '%yj2oVSJ'),
                req = request.defaults({
		 headers: {	
                    Authorization: 'Bearer ' + token.accessToken
	         }
                }),

                result = await req.post('https://bpmruleruntime.cfapps.eu10.hana.ondemand.com/rules-service/rest/v2/workingset-rule-services').json({
                    RuleServiceId: "7825ff07af2341659aa069410938d6ce",
                    Vocabulary: [
                        {
                            flightinfo: {
				    carrier: "LH"
                            }
                        }
                    ]
                })

          console.log(JSON.stringify(result))	  

        }

main()
