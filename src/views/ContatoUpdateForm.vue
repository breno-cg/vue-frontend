<template>
<div>
 <h2>Editar Contato</h2>
         <form @submit.prevent="onContatoUpdate">  
             <div class="form-row"> 
             <div class="form-group ">
                 <label for="nome" class="control-label" col-lg-6>Nome</label>        
                 <input type=text class="form-control" v-model="contatoData.nome"> 
             </div>
             <div class="form-group">
                 <label>Telefone</label>
                 <input type=text class="form-control" v-model="contatoData.numero">
             </div>
             <div class="form-group">
                 <label>E-mail</label>
                 <input type=email class="form-control" v-model="contatoData.email">
             </div>    
            
            <button type="submit" class="mt-3">Atualizar</button>
            </div>
        </form>

</div>
   
</template>

<script>
import ContatoService from '../services/ContatoService'
export default {
    
    data(){
        return {           
            id:'',            
            contatoData:{}
        };
    }, 
    methods:{
        onContatoUpdate() {
            console.log("inside update")
            ContatoService.updateContato(this.contatoData)
                    .then((response)=>{
                        console.log(" then" ,response);
                        this.$router.push('/contato')
            });
        }
    },
    created(){
        console.log(this.$route.param)
        this.id = this.$route.params.id
        ContatoService.getContatoData(this.id).then(
            response=> {
                this.contatoData = response.data
            }
        );
        console.log(this.id);
    }
}
</script>
<style scoped>
.control-label{
   text-align: left !important;
}
</style>