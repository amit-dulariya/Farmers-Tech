const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// The /api/news endpoint has been removed as it is no longer used by the frontend.

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
