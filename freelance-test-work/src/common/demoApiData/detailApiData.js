export const detailApi = [
    {
        "claimNumber": "794977781060100",
        "claimSequenceNumber": "1",
        "claimRequest": {
            "header": {
                "binNumber": "4336",
                "transactionCode": "B1",
                "processControlNumber": "PRIME     ",
                "dateOfService": "2021-11-24"
            },
            "prescription": {
                "prescriptionServiceReferenceNumber": "736557848567",
                "productServiceId": "11",
                "quantityDispensed": "3000034.567",
                "fillNumber": "6",
                "daysSupply": "156",
                "compoundCode": "1",
                "dispenseAsWrittenDawProductSelectionCode": "2"
            }
        },
        "claimResponseStatus": {
            "transactionResponseStatus": "R",
            "rejectCount": "0",
            "claimResponseRejects": [
                {
                    "rejectCode": "50"
                },
                {
                    "rejectCode": "05"
                }
            ],
            "approvedMessageCodeCount": "0",
            "additionalMessageInformationCount": "0",
            "claimResponseMessageInformations": [
                { "additionalMessageInformation": "0123456789101112131415161718192021222324252627" },
                { "additionalMessageInformation": "Invalid NPI per algorithem requirements 2" },

            ]
        },
        "pharmacy": {
            "ncpdpProviderId": ""
        },
        "coverage": {
            "pharmacyBenifitPlanCode": "CAPA001"
        },
        "clientMember": {
            "carrier": "",
            "account": "",
            "groupId": "",
            "memberId": "",
            "memberName": "",
            "gender": "",
            "dateOfBirth": "1111-11-11"
        },
        "drug": {
            "drugName": "",
            "gpi": "",
            "genericIndicator": "",
        },
        "additionalFields": {
            "cob": "",
            "paReasonCode": "",
            "paNumber": "",
        },
        "submitDate": "2022-02-23"
    }
]