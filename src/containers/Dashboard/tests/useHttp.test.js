import { renderHook } from "@testing-library/react-hooks";
import "whatwg-fetch";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";
import { useHttp } from "../useHttp";

describe("useHttp", () => {
    beforeAll(() => {
        global.fetch = fetch;
    });
    afterAll(() => {
        fetchMock.restore();
    });
    const testUrl = 'testUrl';
    const testQuery = 'testQuery';

    test("initial data state is loading and data empty", () => {
        const { result } = renderHook(() => useHttp(testUrl, testQuery));
        expect(result.current).toStrictEqual({ isLoading: true, data: null, error: null });
    });

    //TODO: needs to fix this
    test.skip("data is fetched", async () => {
        fetchMock.mock(testUrl, {
            isLoading: false,
            data: {
                continents: [{ id: 1, name: 'testName' }],
            },
            error: null,
        });
        const { result, waitForNextUpdate } = renderHook(() => useHttp(testUrl, testQuery));

        act(async () => {
            await waitForNextUpdate();
        });

        console.log(result.current);
        expect(result.current.loading).toBeFalsy();
        expect(result.current.data.continents.length).toEqual(1);
    });
});