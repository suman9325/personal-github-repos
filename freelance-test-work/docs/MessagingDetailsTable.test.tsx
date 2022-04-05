import React from "react";
import moment from "moment/moment";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockMessageDetails } from "./mockMessageDetails";
import { MessagingDetailsTable } from "./MessagingDetailsTable";
import { messagingServiceAxios } from "../services/MessagingService";

const mockGetAllMessages = jest.fn();

jest.mock("../../services/MessagingService", () => ({
    messagingService: {
        useGetAllMessagingQuery: () => ({ data: mockGetAllMessages() }),
    },
    messagingServiceAxios: {
        downloadBatchFIle: jest.fn(),
        resendBatchFile: jest.fn(),
    },
}));

describe("MessagingDetailsTable", () => {
    describe("No Messaging History", () => {
        it("should render no data message if no data is returned", () => {
            mockGetAllMessages.mockReturnValue([]);
            render(<MessagingDetailsTable messageDetails={[]} />);
            expect(screen.getByText(/No Data Found/i)).toBeInTheDocument();
        });
    });

    describe("With Messaging History", () => {
        let mockDownloadBatchFile: jest.SpyInstance;
        let mockResendBatchFile: jest.SpyInstance;
        beforeEach(async () => {
            mockDownloadBatchFile = jest
                .spyOn(messagingServiceAxios, "downloadBatchFile")
                .mockImplementation(() => Promise.resolve());
            mockResendBatchFile = jest
                .spyOn(messagingServiceAxios, "resendBatchFile")
                .mockImplementation(() => Promise.resolve());

            render(
                <MessagingDetailsTable
                    filterStartDate={moment(mockMessageDetails.sendDateTime).subtract(
                        1,
                        "day"
                    )}
                    filterEndDate={moment(mockMessageDetails.sendDateTime).add(1, "day")}
                    messageDetails={[
                        { ...mockMessageDetails },
                        {
                            ...mockMessageDetails,
                            id: "1",
                            messageType: "MEDICAL",
                            acknowledgmentStatus: "FAIL",
                        },
                        {
                            ...mockMessageDetails,
                            id: "2",
                            acknowledgmentStatus: "NOT_ACKNOWLEDGED",
                        },
                        {
                            ...mockMessageDetails,
                            id: "3",
                            acknowledgmentStatus: "UNKNOWN",
                        },
                    ]}
                />
            );
        });

        it("should render data in table", () => {
            expect(screen.getAllByAltText("client-1")).toHaveLength(4);
            expect(screen.getAllByAltText("endpoint-1")).toHaveLength(4);
            expect(screen.getAllByAltText("Rx Batch File")).toHaveLength(3);
            expect(screen.getAllByAltText("filename-1")).toHaveLength(4);
            expect(screen.getAllByAltText("Acknowledged-Passed")).toHaveLength(1);
            expect(screen.getAllByAltText("Acknowledged-Failed")).toHaveLength(1);
            expect(screen.getAllByAltText("Not Acknowledged")).toHaveLength(1);
            expect(screen.getAllByAltText("UNKNOWN")).toHaveLength(1);
            expect(screen.getAllByAltText("Jan 1, 0001 | 12:00 am")).toHaveLength(4);
        });
        it("should call resendBatchFile when Resend is Clicked", () => {
            fireEvent.click(screen.getAllByAltText("Resend")[0]);
            expect(mockResendBatchFile).toHaveBeenCalledWith(mockMessageDetails.id);
        });
        it("should call downloadBatchFile when Download is Clicked", () => {
            fireEvent.click(screen.getAllByAltText("Download")[0]);
            expect(mockDownloadBatchFile).toHaveBeenCalledWith(mockMessageDetails.filename);
        });
    });
    it("should not render client column if isOneClient prop passed in", () => {
        render(
            <MessagingDetailsTable
                filterStartDate={moment(mockMessageDetails.sendDateTime).subtract(
                    1,
                    "day"
                )}
                filterEndDate={moment(mockMessageDetails.sendDateTime).add(1, "day")}
                messageDetails={[mockMessageDetails]}
                isOneClient
            />
        );
        expect(
            screen.queryByText(mockMessageDetails.client)
        ).not.toBeInTheDocument();


    });
})
