## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the JSON server full fake REST API.

REACT_APP_API_KEY="AIzaSyDdsHagWL1nEhIjJLPQDnH8S4iwI7-kpYE"
REACT_APP_API_KEY1="AIzaSyDNNhnrB74e5o5PilWQZupJHoGg9Xyg7ZU"
REACT_APP_API_KEY2="AIzaSyA3j8g3WWBJpDiniZqRXLwC96fCoxdeLHI"

If you get the following error: "quotaExceeded (403) quotaExceeded The request cannot be completed because you have exceeded your quota." then you will need to replace the API key with any one of the above. The API key will need to be updated in all 4 files shown below.

VideoCard.js
VideoRow.js
LikedVideos.js
App.js

Projects that enable the YouTube Data API have a default quota allocation of 10,000 units per day, an amount sufficient for the overwhelming majority of our API users. Default quota, which is subject to change, helps us optimize quota allocations and scale our infrastructure in a way that is more meaningful to our API users. You can see your quota usage on the Quotas page in the API Console.
