import { generateRequest } from "./generateRequest.js"

export default async function handler(req, res) {
  try {
    var _body = req.body //JSON.parse(req.body)
    
    // try {
    //   _body = JSON.parse(_body)
    //   try {
    //     _body = JSON.parse(_body)
    //   } catch (error) {
    //   }
    // } catch (error) {
      
    // }
    // console.log(_body)

    var data = _body
    const content = {name: data.name, age: data.age}
    
    const mnemonic = data.mnemonic
    
    const request = await generateRequest(content, mnemonic)
    console.log(request)



    res.status(200).json({ response: JSON.stringify(request)})
  } catch (error) {
    console.log(error)
    res.status(200).json({ response: error})
  }
  

  
  

}


function isJson(str) {

  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;

}