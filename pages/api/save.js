import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../service/credentials.json'
//import { data } from 'autoprefixer'
import moment from 'moment'
//import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet('1ENLTIyOUo3NUiauuLYh2UMke0cxSP_Qirkm4k14vzbQ')

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0,4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
    const textoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''

    if(mostrarPromocaoCell.value === 'VERDADEIRO'){
      Cupom = genCupom()
      Promo = textoCell.value
    }
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      'Data Preenchimento': moment().format('DD/MM/Y H:m:s'),
      Cupom,
      Promo
    })
    res.end(req.body)
    /** */
  }catch(err){
    console.log(err)
  }
}