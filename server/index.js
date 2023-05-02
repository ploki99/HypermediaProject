import express from 'express';

const app = express();
app.use(express.json());

async function initServer() {

    app.get('/test', async (req, res) => {
        
        const data = {'ciao':3,'test-funziona':'ok'};
        res.status(200).json(data);
    });

}


initServer();

export default fromNodeMiddleware(app);