const Pool = require('pg').Pool
const pool = new Pool({
  host: 'lvaldesdb.postgres.database.azure.com',
    user: 'administrador',     
    password: '12Lv342211*',
    database: 'venta_directa',
    port: 5432,
    ssl: true
})

const listarClientes = async (req, res = response) => {
  pool.query('SELECT * FROM clientes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    
    res.json({
      ok: true,
      message: "Registros",
      datos: results.rows
    });

  })
}

module.exports = {
  listarClientes
  };