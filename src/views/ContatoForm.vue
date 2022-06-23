<template>
    <div class="container">
           <h2>Novo Contato</h2>  <hr/>
       <form @submit.prevent="onCreatePost">
            
           <div class="form-group">
               <label>Nome</label>
               <input type="text" class="form-control" v-model="nome" placeholder="nome">
           </div>
                
            <div class="form-group">
               <label for="telefone">Telefone</label>
               <input type="text" class="form-control" v-model="numero" placeholder="numero">
            </div>
  
            <div class="form-group">
               <label for="email">Email</label>
               <input type="email" class="form-control" v-model="email" placeholder="email">
            </div>
            
            <button type="submit" class="mt-3">Salvar</button>
        </form>

    </div>
</template>
<script>
import ContatoService from '../services/ContatoService'
export default{
    data() {
        return {
            nome:'',
            numero:'',
            email:''
        };
    },
    methods:{
        onCreatePost(){
            ContatoService.createContato({
                nome:this.nome,
                numero:this.numero,
                email:this.email
            }).then((response)=>{
                console.log(response);
                this.$router.push('/contato')
            });
        }
    }
}
</script>