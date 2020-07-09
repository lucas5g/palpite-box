import {GoogleSpreadsheet} from 'google-spreadsheet'

import credentials from '../../service/credentials.json'

const doc = new GoogleSpreadsheet('1ENLTIyOUo3NUiauuLYh2UMke0cxSP_Qirkm4k14vzbQ')

export default async(req, res) => {
  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    //console.log('title', doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A1:B3')
  
    //console.log(sheet)
    
    const mostrarPromocaoCell = await sheet.getCell(1, 0)
    //console.log(mostrarPromocaoCell)
    //console.log(mostrarPromocaoCell.value)

 
    const textoCell = sheet.getCell(1, 1)
    //console.log(textoCell)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value

    }))
    /** */
  }catch(err){
    console.log("errror")
   // console.log(err)
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}