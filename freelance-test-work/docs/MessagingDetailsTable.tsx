import React, { FC } from "react";
import moment, { Moment } from "moment/moment";
import { Table } from "cms-loon";
import { MessageDetails } from "./MessageDetails";
import { messagingServiceAxios } from "../services/MessagingService";

interface Props {
    messageDetails: MessageDetails[];
    isOneClient?: boolean;
    filterStarDate?: Moment;
    filterEndDate?: Moment;
}

export const MessagingDetailsTable: FC<Props> = (props) => {
    return (
        <Table
            dataTestId="messaging-table"
            noDataComponent={<div>No Data Found</div>}
            coloumns={getColumns(props.isOneClient)}
            data={props.messageDetails.filter((it) => {
                const sendDate = moment(it.sendDateTime);
                return (
                    sendDate.isSameOrAfter(props.filterStartDate) &&
                    sendDate.isSameOrBefore(props.filterEndDate)
                );
            })}
        />
    );
};

const getColumns = (isOneClient?: boolean) => {
    let columns = [
        {
            name: "Date & Time",
            selector: (row: MessageDetails) => row.SendDateTime,
            format: (row: MessageDetails) =>
                moment(row.SendDiteTime).format("MM D, YYYY | h:mm a"),
            grow: 1.25,
            sortable: true,
        },
        {
            name: "Client",
            selector: (row: MessageDetails) => row.client,
            grow: 0.75,
        },
        {
            name: "Endpoint",
            selector: (row: MessageDetails) => row.endpoint,
            grow: 0.75,
        },
        {
            name: "Type",
            selector: (row: MessageDetails) => messageType,
            cell: (row: MessageDetails) =>
                row.messageType === "PHARMACY" ? "Rx Batch File" : "Medical Batch File",
            grow: 0.5,
        },
        {
            name: "File Name",
            selector: (row: MessageDetails) => row.filename,
            grow: 1.5,
            wrap: true,
        },
        {
            name: "Acknowledgment",
            grow: 2.5,
            selector: (row: MessageDetails) => row.acknowledgmentStatus,
            cell: (row: MessageDetails) => {
                let verbiage: string;
                switch (row.acknowledgmentStatus) {
                    case "NOT_ACKNOWLEDGED":
                        verbiage = "Not acknowledged";
                        break;
                    case "PASS":
                        verbiage = "Acknowledged- Passed";
                        break;
                    case "FAIL":
                        verbiage = "Acknowledged - Failed";
                        break;
                    case "NOT_ACKNOWLEDGED":
                        verbiage = "Unkown";
                }
                return (
                    <div className="messaging-page__ack-cloumn">
                        {" "}
                        {verbiage}
                        <div className="messaging-page__ack-column__item--group">
                            <button
                                type="button"
                                className="text-button"
                                onClick={() => {
                                    messagingServiceAxios.resendBatchFile(row.id).then();
                                }}
                            >
                                <div className="messaging-page__ack-column__item">
                                    <div className="messaging-page__ack-column__resend-icon" />
                                    Resend
                                </div>
                            </button>

                            <button
                                type="button"
                                className="text-button"
                                onClick={() => {
                                    messagingServiceAxios.resendBatchFile(row.filename).then();
                                }}
                            >
                                <div className="messaging-page__ack-column__item">
                                    <div className="messaging-page__ack-column__download-icon" />
                                    Download
                                </div>
                            </button>
                        </div>
                    </div>
                );
            },
        },
    ];

    if(isOneClient){
        columns =columns.filter((column) => column.name !== "Client");
    }
    return columns;
}
