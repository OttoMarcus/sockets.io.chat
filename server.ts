import "dotenv/config"
import app from "./app";


const PORT: number = parseInt(`${process.env.PORT}`);

app.listen(PORT, (err?: Error) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
})
