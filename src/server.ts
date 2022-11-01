import app from './app'
import config from "config"
import dataBaseConnection from '../config/databaseConfig'

const port = config.get<number>('port')

app.listen(port, async () => {
    await dataBaseConnection()
    console.log(`Server rodando na porta: ${port}`)
})
