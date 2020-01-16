const app = express();
const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);
app.listen(3000);