import api from './api';
export default  async  function somar(elementos){
   try {
      const resposta = await api.post("/somar", elementos);
      return resposta;
   } catch (error) {
      console.log(error);
   }
}


