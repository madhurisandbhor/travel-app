This application is about exploring world travel destinations. All Gerographical information is provided when you select any continent, country or city. You can see all the possible destinations to explore on provided map. Data provided is by https://www.everbase.co/docs/quick-start graphql api.

Frontend tech: 
1. React JS with hooks (v16.8)
2. Material UI - predefined react components
3. Styled Components - CSS-in-JS styling framework
3. @react-google-maps/api for displaying map
4. React testing library for Unit tests

About architecture:
1. Created this application using latest react hooks, added a custom hook(useHttp) for fetching data, this hook is reusable for fetching continent, country and city.
2. For application state, I have used context api and localStorage. Context api is updating data from any level of application, localstorage is used when context api loose its state on refresh.
3. Used Material UI, provides predefined react components, theme and easy to override style.
4. React-google-maps/api is used to show location and select it.

How app works:
1. On the home page, continents list is fetched from Everbase graphql api, and added image slides with the continent name.
(Note: for showing images, I have added external images and updated continents list.)
2. When any continent is selected, user is redirected to specific continent page, where available continent information is displayed on map and in written. On map, all countries inside the particular continent are shown.
3. On continent page, user can select country and then city he/she is interested to explore. City and country's information( population, capital, currencies, languages, etc) is displayed.
4. As user selects any country and city, particular location will be zoomed on map, and user can click on location and select date and add the city to travel list. 
Here, seleted location data is added to context api and saved on localstorage.
5. When city is added, notification badge dot is shown on Home page over flight icon. When user clicks 
the flight icon, Travel Itinerary drawer opens, and user can view all the added cities and can remove those.

Currently this app is providing limited functionality.
