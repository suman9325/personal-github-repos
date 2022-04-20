import { render, screen, waitFor } from "@testing-library/react";
import { MockAuthProvider } from "oidc-library";
import React from 'react';
import App from '../App';
import nock from "nock";
describe("App", () => {
    beforeEach(() => {
        nock(window.location.origin)
            .get("/claim-history/config")
            .reply(200, {
                clientId: "some-client",
                issuerHost: "some-host",
                scopes: ["some", "scopes"],
            });
    });
    it("should render search page when logged in", async () => {
        render(
            <MockAuthProvider>
                <App initialEntries={["/search"]} />
            </MockAuthProvider>
        );
    });

    
});

