export const apiData = 
{
    "claimNumber": "794977781060100",
    "pharmacyId": "1234567890121345678",
    "currentStatus": "R",
    "pharmacyName": "",
    "fillDate": "2021-11-24",
    "paidCount": 0,
    "rejectedCount": 1,
    "reversedCount": 0,
    "capturedCount": 0,
    "transactions": [
        {
            "claimSequenceNumber": 1,
            "memberId": "THE_MATRIX_NEO",
            "patientFirstName": "Neo",
            "patientLastName": "Doe",
            "submitted": "2022-02-23T17:56:10",
            "status": "R"
        }
    ]
}

export const detailApi = 
[
    {
        "claimNumber": "794977781060100",
        "claimSequenceNumber": 1,
        "claimRequest": {
            "header": {
                "binNumber": 4336,
                "transactionCode": "B1",
                "processorControlNumber": "PRIME     ",
                "transactionCount": 0,
                "dateOfService": "2021-11-24"
            },
            "prescription": {
                "prescriptionServiceReferenceNumber": 736557848567,
                "productServiceId": "11",
                "quantityDispensed": 3000034.567,
                "fillNumber": 6,
                "daysSupply": 156,
                "compoundCode": 1,
                "dispenseAsWrittenDawProductSelectionCode": "2"
            }
        },
        "claimResponseStatus": {
            "transactionResponseStatus": "R",
            "rejectCount": 0,
            "claimResponseRejects": [
                {
                    "rejectCode": "50"
                },
                {
                    "rejectCode": "05"
                }
            ],
            "approvedMessageCodeCount": 0,
            "additionalMessageInformationCount": 0,
            "claimResponseMessageInformations": [
                {
                    "additionalMessageInformation": "Invalid NPI per algorithm requirements"
                }
            ]
        },
        "pharmacy": {
            "ncpdpProviderId": ""
        },
        "coverage": {
            "pharmacyBenefitPlanCode": "CAPA001"
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
            "genericIndicator": ""
        },
        "additionalFields": {
            "cob": "",
            "paReasonCode": "",
            "paNumber": ""
        },
        "submitDate": "2022-02-23T17:56:10.213"
    }
]