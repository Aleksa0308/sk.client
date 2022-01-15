/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {mainRouter} from './src/controllers/mainRouter';
// import {usersRouter} from './controllers/api/usersRouter';
// import {licensesRouter} from './controllers/api/licensesRouter';
// import {campaignsRouter} from './controllers/api/campaignsRouter';
// import {funnelsRouter} from './controllers/api/funnelsRouter';
// import {adminRouter} from './controllers/admin/adminRouter';
// import {adminsRouter} from './controllers/api/adminsRouter';
// import {loginRouter} from './controllers/api/loginRouter';
// import {resetsRouter} from './controllers/api/resetsRouter';


dotenv.config();

const PORT = parseInt(process.env.PORT, 10);
const DIR_RESOURCES = process.env.DIR_RESOURCES ?? null; // #TODO add support for these to end with "/"
const DIR_PUBLIC = process.env.DIR_PUBLIC ?? null;

/**
 * App Variables
 */
if (!PORT) {
    console.log('PORT needs to be defined in .env');
    process.exit(1);
}
if (!DIR_RESOURCES) {
    console.log('DIR_RESOURCES needs to be defined in .env');
    process.exit(1);
}
if (!DIR_PUBLIC) {
    console.log('DIR_PUBLIC needs to be defined in .env');
    process.exit(1);
}

const app = express();

/**
 *  App Configuration
 */

// Middleware

app.set('view engine', 'ejs');
app.set('views', DIR_RESOURCES + '/views');
app.use(express.static(DIR_PUBLIC));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

app.use('/', mainRouter);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});