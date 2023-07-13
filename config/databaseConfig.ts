import mongoose from 'mongoose'
import config from 'config'

async function dataBaseConnection() {
  const dbUri = config.get<string>('dbUri')
  try {
    await mongoose.connect(dbUri)
    console.log('✅ Conectado a base de dados com sucesso')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default dataBaseConnection
