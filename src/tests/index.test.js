import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from 'styled-components';
import { InfoProvider } from '../app/InfoContext';
import Dashboard from "containers/Dashboard/Main";
import { useHttp } from '../hooks/useHttp';

afterEach(cleanup);

jest.mock("../useHttp");

const renderDashboard = () => {
  const theme = {
    palette: {
      primary: { main: '#ff4500' },
    },
    app: {
      white: "#fff"
    },
  };
  const DashboardComp = () => (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <InfoProvider>
          <Dashboard />
        </InfoProvider>
      </ThemeProvider>
    </MuiThemeProvider>);

  const utils = render(<DashboardComp />);
  return { ...utils };
}

test("should render loading circle", () => {
  useHttp.mockReturnValue({
    isLoading: true,
    data: null,
    error: null,
  });
  const { getByTestId } = renderDashboard();
  expect(getByTestId('loader'));
});

test("should render data with exact number of items", () => {
  useHttp.mockReturnValue({
    isLoading: false,
    data: {
      continents: [
        {
          id: 1,
          name: "test_1"
        },
        {
          id: 2,
          name: "test_2"
        }
      ]
    },
    error: null
  });
  const { getByText, getAllByRole } = renderDashboard();
  expect(getByText('Please click on the image to select a continent'));
  const radioButtons = getAllByRole('radio');
  expect(radioButtons).toHaveLength(2);
});